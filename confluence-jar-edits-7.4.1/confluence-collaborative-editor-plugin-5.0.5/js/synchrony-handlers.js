define('confluence-collaborative-editor-plugin/synchrony-handlers', [
    'underscore',
    'jquery',
    'ajs',
    'confluence/meta',
    'confluence/analytics-support',
    'confluence/legacy',
    'confluence-editor/editor/page-editor-message',
    'confluence-collaborative-editor-plugin/lib/SyncManager',
    'confluence-collaborative-editor-plugin/synchrony-util',
    'confluence-collaborative-editor-plugin/synchrony-content',
    'confluence-collaborative-editor-plugin/synchrony-presence',
    'confluence-collaborative-editor-plugin/util/location-provider',
    'confluence-collaborative-editor-plugin/util/url-parser',
    'confluence-collaborative-editor-plugin/util/editor-format-fixer',
    'confluence-collaborative-editor-plugin/editor-blanket',
    'confluence/api/event',
    'window'
], function (
    _,
    $,
    AJS,
    Meta,
    Analytics,
    Confluence,
    Message,
    SyncManager,
    Util,
    Content,
    SynchronyPresence,
    LocationProvider,
    UrlParser,
    EditorFormatFixer,
    EditorBlanket,
    Event,
    window
) {
    'use strict';

    var $revField;
    var statusIndicator;
    var editor;
    var htmlDoc;
    var entity;
    var syncManager;
    var synchronyContentReady;
    var lastKnownContributors = [];
    var synchronyInited = false;
    var unknownErrorSuppressed = false;

    function handle(_entity, _editor, _statusIndicator, _synchronyContentReady) {
        Util.time("confluence.editor.synchrony.connect");
        entity = _entity;
        editor = _editor;
        statusIndicator = _statusIndicator;
        synchronyContentReady = _synchronyContentReady.pipe(null, function (error) {
            entity.destroy();
            statusIndicator.onDisconnectedState();
            return getPublishError(error, 'collaborative-editor-load-failure', true);
        });

        $revField = $('#syncRev');
        htmlDoc = editor.getBody();

        entity.on('init', handleInit)
            .on('update', handleUpdate)
            .on('ack', handleAck)
            .on('connected', handleConnected)
            .on('disconnected', handleDisconnected)
            .on('error', handleError);

        // responsible for managing entity.start/entity.stop abstraction layer
        syncManager = new SyncManager(entity, {
            DEBUG_MODE: true
        });

        Content.bindPostPasteFix();
        Content.readTitleFromRootElement(htmlDoc);
        Confluence.Editor.overrideBeforeSave(handleBeforeSave);
        $('#content-title').keyup(Content.writeTitleToRootElement);
    }

    function handleHeartbeatEvent(e, data) {
        if (data.contributors) {
            lastKnownContributors = data.contributors;
            Event.unbind(e, handleHeartbeatEvent);
        }
    }

    Event.bind('editor-heartbeat', handleHeartbeatEvent);

    function handleInit(event) {
        synchronyInited = true;
        $revField.val(event.rev.toString());
    }

    function handleAck(event) {
        $revField.val(event.rev.toString());

        Event.trigger('synchrony.entity.ack', { 'pendingChanges': event.pending.length > 0 });
    }

    function handleDisconnected() {
        statusIndicator.onDisconnectedState();
        AJS.log('Synchrony disconnected!');
    }

    /**
     * This is starting point of handling synchrony data eviction on the frontend.
     * In a case of an error, synchrony returns one of 3 special error types:
     * <ul>
     *     <li><code>null/no-such-sequence</code> when history was deleted, but page still passed old
     *     <code>sync-rev</code> (this is possible when data eviction happened when page was opened for viewing,
     *     and then user pressed "Edit" button without reloading the page)</li>
     *     <li><code>hub.client.error/init-with-nil-value</code> when data is deleted in the middle of the editing session</li>
     *     <li><code>hub.error/locked</code> when entity is locked</li>
     * </ul>
     * Synchrony error is caught by this handler. If this is error related to eviction, error handler performs next
     * steps:
     * <ul>
     *     <li>
     *         Triggers appropriate analytics event, based on a state of the editor. This analytics event contains
     *     information about particular synchrony error, did it happen on editor load or in the middle of the
     *     editing session (<code>onLoad</code> field) and if automatic page reload has fixed the problem
     *     (<code>afterReload</code> field)</li>
     *     <li>
     *         Destroys synchrony entity object. This is required to prevent automatic re-connection attempts.
     *     Automatic re-connection attempts is evil in this case, because data eviction is un-recoverable error,
     *     and whole session re-init (page refresh) is required. If those re-connection attempts are left enabled,
     *     they will only spam logs</li>
     *     <li>
     *         Triggers special event (<code>synchrony.history.evicted</code>), which informs other parts of the
     *     editor about un-recoverable error, so they can listen and react appropriately (f.e. disable publish
     *     button etc.)</li>
     *     <li>
     *         Shows appropriate error message.
     *     </li>
     *     <li>
     *         Shows blanket to prevent users from editing content, if error happened on editor load.
     *     </li>
     *     <li>
     *         Refreshes editor once, if  error happened on editor load.
     *     </li>
     * </ul>
     * Last 2 actions (blanket and autorefresh) help to handle the case, if eviction error happens on editor load.
     * It is possible, if users open view page in browser, and then that particular page history is deleted. In
     * that case, page in browser still contains old reference for evicted <code>sync-rev</code>, so attempt to open
     * editor <b>without</b> page refresh causes synchronisation error. For better user experience, editor tries to
     * fix the problem by re-freshing the page (once) and preventing users from editing stale data (blanket).
     *
     * @param event, which contains error details from Synchrony
     */
    function handleError(event) {
        //TODO: We probably want to fire a confluence.synchrony.connection.error event similar to the backend to indicate a connection failure here, but the error comes from within sockjs and we can't handle it yet. https://jira.atlassian.com/browse/WD-463
        if (event.errorType === 'null/no-such-sequence' ||
            event.errorType === 'null/entity-evicted' ||
            event.errorType === 'hub.error/locked') {

            Event.trigger('analyticsEvent', {
                name: 'confluence.editor.data.evicted.error', data: {
                    errorType: event.errorType, onLoad: !synchronyInited, afterReload: !_isReloadNeeded()
                }
            });

            _destroyEntity();
            _handleEditorStateChange();
            _registerJsErrorHandler();
        } else if (event.level === 'fatal') {
            Event.trigger("editor.error.message", {
                disablePublish: true
            });
        }
    }

    function _destroyEntity() {
        entity.destroy();
        Event.trigger('synchrony.history.evicted');
    }

    function _handleEditorStateChange() {
        var isReloadNeeded = _isReloadNeeded();
        var message = synchronyInited ? AJS.I18n.getText('editor.collaborative-editing.synchronisation.error') :
            (isReloadNeeded ? AJS.I18n.getText('editor.collaborative-editing.synchronisation.error.onload.reload') : AJS.I18n.getText('editor.collaborative-editing.synchronisation.error.onload'));
        Event.trigger("editor.error.message", {
            disablePublish: true,
            close: 'never',
            message: message
        });
        if (synchronyInited) {
            statusIndicator.onDisconnectedState();
        } else {
            EditorBlanket.showBlanket('block');
            if (isReloadNeeded) {
                _fireReload();
            }
        }
    }

    //CONFSRVDEV-10331: preventing spam in Console.
    //without it, Synchrony throws 'entity destroyed' errors on every keystroke
    function _registerJsErrorHandler() {
        window.onerror = function(message, source, lineno, colno, error) {
            // if Synchrony is configured as an external cluster and is sitting behind the different domain,
            // browser suppresses error info for security reason (as synchrony.js comes from different domain)
            // in this case, we want to show only first "unknown" error and suppress all the rest, to lower probability
            // of missing important error from non-synchrony source.
            // It is possible to make handling even better, but there is no point to over-engineer fix for such edge
            // case
            if (!source && !lineno && !colno && !error) {
                if (unknownErrorSuppressed) {
                    return true;
                } else {
                    unknownErrorSuppressed = true;
                    return false;
                }
            } else if (error && error.message && error.message === 'entity destroyed') {
                return true;
            }
            return false;
        }
    }

    function _getIdForReload() {
        return '_reload_for_' + Meta.get('draft-id');
    }

    function _fireReload() {
        window.sessionStorage.setItem(_getIdForReload(), 'false');
        window.location.reload();
    }

    function _isReloadNeeded() {
        return window.sessionStorage.getItem(_getIdForReload()) === null;
    }

    function _cleanUpReload() {
        window.sessionStorage.removeItem(_getIdForReload());
    }

    function handleConnected(event) {
        Util.timeEnd("confluence.editor.synchrony.connect");
        AJS.log('Synchrony connected.');

        SynchronyPresence.appendTo(event.sid, entity, lastKnownContributors);
        statusIndicator.onConnectedState(entity);

        Event.trigger('synchrony.connected');

        Content.fixTinymceCaretContainer(htmlDoc, editor);
        _cleanUpReload();
    }

    function getPublishError(cause, messageKey, disablePublish) {
        return {
            origin: 'synchrony',
            cause: cause,
            messageKey: messageKey,
            disablePublish: disablePublish
        };
    }

    function handleBeforeSave(e) {
        var timeout = 5000;
        var changesAcked = $.Deferred();

        function synchronySuccess() {
            changesAcked.resolve(e);
        }

        function onAck(event) {
            if (!event.pending.length) {
                entity.off('ack', onAck);
                $revField.val(event.rev.toString());
                synchronySuccess();
            }
        }

        var synced = !entity.ackState().pending.length;
        if (synced) {
            synchronySuccess();
        }
        else {
            entity.on('ack', onAck);

            setTimeout(function () {
                entity.off('ack', onAck);
                changesAcked.reject(getPublishError('timeout'));
            }, timeout);
        }

        return $.when(changesAcked, synchronyContentReady).promise();
    }

    function userNameFromUpdateEvent(event) {
        var latestWithUser = Util.getLatestRevisionWithAttr(event.revisions, "user");
        return latestWithUser ? latestWithUser.meta.user : AJS.I18n.getText("anonymous.name");
    }

    function notifyPublished(userName) {
        Message.handleMessage('editor.synchrony.page-published', {
            type: 'info',
            message: AJS.I18n.getText('editor.synchrony.publish-page.message', AJS.escapeHtml(userName)),
            close: 'auto'
        });

        Event.trigger('analyticsEvent', {
            name: 'confluence.synchrony.external-changes.publish'
        });
        Event.trigger('editor-shared-drafts-published');
    }

    function updateMetadataForPublish() {
        Meta.set("new-page", false);
        Meta.set("page-id", Confluence.getContentId());
        Meta.set("draft-id", "0"); // We don't know the draft ID at this stage, but we know it's invalid.

        // Here we enable the discard button only if limited mode is not enabled.
        if (!Confluence.Editor.isLimitedModeEnabled()) {
            Confluence.Editor.UI.setButtonState(true, $('#rte-button-discard'));
        }
    }

    function handleUpdate(event) {
        if (event.updateType === 'remote') {
            $revField.val(event.revisions[event.revisions.length - 1].rev.toString());

            if (Util.hasRevisionTrigger(event.revisions, 'reset')) {
                Message.handleMessage('editor.synchrony.revert-page', {
                    type: 'info',
                    message: AJS.I18n.getText('editor.synchrony.revert-page.message', AJS.escapeHtml(userNameFromUpdateEvent(event)))
                });

                // Collaborators will be cleared from the draft upon reset. If the client continues editing, they will
                // need to be added as a collaborator again
                Meta.set('has-collaborated', false);

                resetDirtyFlag();

                Event.trigger('analyticsEvent', {
                    name: 'confluence.synchrony.external-changes.revert'
                });

                //CONFDEV-47416: notify other modules to cleanup data if necessary
                Event.trigger("editor-shared-drafts-discarded");

                // Here we trigger a heartbeat to keep things in sync.
                Confluence.Editor.heartbeat();
            }

            if (Util.hasRevisionTrigger(event.revisions, 'publish')) {
                if (Content.isUnpublished()) {
                    updateMetadataForPublish();
                }
                // Collaborators will be cleared from the draft upon publishing. If the client continues editing, they will
                // need to be added as a collaborator again
                Meta.set('has-collaborated', false);

                resetDirtyFlag();

                notifyPublished(userNameFromUpdateEvent(event));

                // Here we trigger a heartbeat to keep things in sync.
                Confluence.Editor.heartbeat();
            }

            if (Util.hasRevisionType(event.revisions, 'external')) {
                Event.trigger('editor.external.change');
            }

            var latestWithConfVersion = Util.getLatestRevisionWithAttr(event.revisions, "confVersion");

            if (latestWithConfVersion && latestWithConfVersion.meta.confVersion) {
                $('meta[name="page-version"]').attr('content', latestWithConfVersion.meta.confVersion);
                $('meta[name="ajs-page-version"]').attr('content', latestWithConfVersion.meta.confVersion);
                Meta.set('page-version', latestWithConfVersion.meta.confVersion);
            }
        }
        // DOM mutations must not happen in the update event
        setTimeout(function () {
            if (event.updateType === 'init' || event.updateType === 'remote') {
                //We consider init a remote change because of the content reconciliation,
                //which now uses editor format directly (not modified by editor javascript)
                //pagelayouts listen for this and otherwise they wouldn't be editable
                Event.trigger('editor.remote.change'); //CONFDEV-43345
                Content.readTitleFromRootElement(htmlDoc);
            }
            //A hack fix for  https://jira.atlassian.com/browse/CONFSERVER-52060
            if (event.updateType == 'init') {
                /**
                 * This fix is only applied
                 * if the base url of the location is the same as the configured base url (this prevents possibly breaking page content
                 * due to misconfigured base urls).
                 */
                if (isContextPathInLocation(LocationProvider.getLocation())) {
                    editor.undoManager.ignore(function () {
                        var count = EditorFormatFixer.fixStaleBaseUrl(htmlDoc);
                        if (count > 0) {
                            Analytics.publish('collab.edit.format.stale.fix.count', {
                                staleformatfixed: count
                            });
                        }
                    });
                } else {
                    AJS.log("Request url does not match the configured base url. Not performing fixStaleBaseUrl().");
                }
                //fix for https://jira.atlassian.com/browse/CONFSRVDEV-6580 (and related https://jira.atlassian.com/browse/CONFDEV-40982)
                editor.undoManager.ignore(function(){
                    EditorFormatFixer.fixMentions(htmlDoc);
                });
            }

            Content.fixTinymceCaretContainer(htmlDoc, editor);

            if (event.updateType === 'local') {
                /**
                 * If the undo manager discards changes (> 256 changes)
                 * and the user undoes all >256 changes we will incorrectly
                 * call reset and not show the discard dialog even though
                 * the user has undoable changes that have been discarded
                 */
                if (!editor.undoManager.hasUndo()) {
                    editor.setDirty(false);
                }
                Event.trigger('editor.local.change');
            }
        }, 0);
    }

    function resetDirtyFlag() {
        /**
         * edge case might happen when user B discard/publish
         * before user A get notification, they keep typing
         * when user A get notification, dirty flag MUST NOT be reset
         * because new letters haven't been saved yet
         * => only reset dirty flag when there is no pending change
         */
        if (entity.ackState().pending.length === 0) {
            // We need to set the dirty flag back to false when unpublished changes are discarded/published
            editor.setDirty(false);
        }
    }

    /**
     * Checks whether the given location url contains the contextPath, and that the contextpath is the same
     * as the contextpath in the base-url.
     * @param location {Location} the window.location object
     * @returns {boolean}
     */
    function isContextPathInLocation (location) {
        var contextPath = Meta.get('context-path');
        var configuredBaseUrl = UrlParser.parseUrl(Meta.get('base-url'));
        var locationUrl = UrlParser.parseUrl(location);
        var constructedBaseUrl = UrlParser.parseUrl(locationUrl.protocol + "://" + locationUrl.host + contextPath);
        return _.isEqual(configuredBaseUrl, constructedBaseUrl);
    }

    return {
        handle: handle
    };
});
