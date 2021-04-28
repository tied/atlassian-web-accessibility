/**
 * @module confluence-editor/page-editor-drafts
 */
define('confluence-editor/page-editor-drafts', [
    'jquery',
    'ajs',
    'confluence/meta',
    'confluence/legacy',
    'confluence/api/constants',
    'confluence-editor/editor/page-editor-message',
    'confluence-editor/loader/collaborative-helper'
], function($,
    AJS,
    Meta,
    Confluence,
    CONSTANTS,
    Message,
    CollaborativeHelper) {
    'use strict';

    var draftSaved = false;
    var draftManuallySaved = false;
    var pendingChanges = false;
    // We keep track of when the draft is in progress of being saved
    var draftSavingPromise = null;

    var isCurrentUserNonAnonymous = Meta.get('remote-user') !== '';
    var isEditorAjaxSaveEnabled = AJS.DarkFeatures.isEnabled('editor.ajax.save') && !AJS.DarkFeatures.isEnabled('editor.ajax.save.disable');
    // is used to indicate critical error state, which cannot be recovered in the current editing session
    var unrecoverableEditorError = false;
    var synchronyConnected = false;

    var addHiddenElement = function(name, value, appendTo) {
        $('<input>').attr({ type: 'hidden', name: name, value: value }).appendTo(appendTo);
    };

    var jsTime = function(date) { // dodgy time function
        var h = date.getHours();
        var m = date.getMinutes();
        var ampm = h > 11 ? 'PM' : 'AM';
        h %= 12;
        return (h == 0 ? '12' : h) + ':' + (m < 10 ? '0' : '') + m + ' ' + ampm;
    };

    var isSharedDraftsEnabled = function() {
        return Meta.getBoolean('shared-drafts');
    };

    // function to send the form to discard/use the draft
    var sendFormDraft = function(hiddenInput, draftId) {
        Confluence.Editor.Drafts.unBindUnloadMessage();
        var form = Confluence.Editor.getCurrentForm();
        addHiddenElement(hiddenInput, 'true', form);
        addHiddenElement('contentChanged', '' + Confluence.Editor.hasContentChanged(), form);
        addHiddenElement('pageId', AJS.params.pageId, form);
        $('#draftId', Confluence.Editor.getCurrentForm()).val(draftId);

        if (!form.spaceKey) {
            addHiddenElement('spaceKey', Meta.get('space-key'), form);
        }

        form.action = CONSTANTS.CONTEXT_PATH + '/pages/' + (AJS.params.newPage ? 'create' : 'edit') + AJS.params.draftType + '.action';
        form.submit();
    };

    // CONFDEV-47416: whenever page is published or discarded, reset flags to represent fresh state of draft
    AJS.bind('editor-shared-drafts-published editor-shared-drafts-discarded', function() {
        draftSaved = false;
        draftManuallySaved = false;
    });

    // CONFSRVDEV-9378: whenever page history is evicted, synchrony entity gets destroyed
    // to flag such errored state, unrecoverableEditorError is used
    AJS.bind('synchrony.history.evicted', function() {
        unrecoverableEditorError = true;
    });

    // CONFSRVDEV-9378: this is needed to understand if error happened on page load or in the middle of editing session
    AJS.bind('synchrony.connected', function() {
        synchronyConnected = true;
    });

    return {

        /**
         * Returns true if a draft has been saved.
         */
        isDraftSaved: function() {
            return draftSaved;
        },

        isDraftManuallySaved: function() {
            return draftManuallySaved;
        },

        isDraftBlank: function() {
            return AJS.Rte.Content.isEmpty() && !$.trim(Confluence.Editor.getCurrentTitle());
        },

        /**
         * Returns true if editing a draft which has never been published
         */
        isNewContent: function() {
            return AJS.Rte.getEditor() && Meta.getBoolean('new-page') === true;
        },

        /**
         * Returns true if the editor has changes that the user has not explicitly saved (thus requiring a prompt of the discard dialog)
         */
        isDraftDirty: function() {
            return Confluence.Editor.hasContentChanged()
                || (Confluence.Editor.Drafts.isDraftSaved()
                && !Confluence.Editor.Drafts.isDraftManuallySaved());
        },

        /**
         * Returns a message to be presented to the user (usually in a way of confirmation dialog when leaving the page) in the following cases:
         * - The editor has content changes.
         * - OR - if a draft has been saved automatically (only if we are editing a page/blog post - drafts on comments are not supported)
         * TODO: remove Selenium dependency.
         * @returns {string} message
         */
        unloadMessage: function() {
            var saveOrDiscardBlank = function() {
                if (Confluence.Editor.Drafts.isDraftBlank() && !isSharedDraftsEnabled()) {
                    Confluence.Editor.Drafts.discardDraft(Meta.get('draft-id'));
                } else {
                    Confluence.Editor.Drafts.save({
                        // Skip error handler because it shows a BRIGHT RED draft save ERROR due to the browser
                        // cancelling in-flight ajax requests during page unload even if the server received the
                        // draft request and saved it successfully but did not respond in time.
                        skipErrorHandler: true
                    });
                }
            };

            if (typeof seleniumAlert !== 'undefined') { // TODO: Find a better way to detect Selenium.
                // this is not particularly pretty but has to be done
                // unless we want to unload it then bind a specific selenium event for this.
                // this mimics the behaviour close enough
                saveOrDiscardBlank();
                return;
            }

            // You can't rely on the draft being saved before this.
            if (Confluence.Editor.isLimitedModeEnabled() || !isSharedDraftsEnabled()) {
                // Old behavior for legacy drafts and limited mode
                if (Confluence.Editor.hasContentChanged()
                    || (Confluence.Editor.Drafts.isDraftSaved()
                    && !Confluence.Editor.Drafts.isDraftManuallySaved())) {
                    saveOrDiscardBlank();
                    return AJS.I18n.getText('saved.draft');
                }
            } else {
                // New behavior for Collaborative Editing
                saveOrDiscardBlank();
                // sometimes synchrony-handler sends 'editor.local.change' event BEFORE synchrony is actually
                // connected. Stacktrace goes somewhere deep into cljc code, and I don't know how/why that
                // triggering happens. So I decided to just update if statement here - in any case it doesn't
                // make sense to show confirmation dialog, if synchrony hasn't been connected yet
                if (synchronyConnected && (pendingChanges || Confluence.Editor.hasContentChanged() || unrecoverableEditorError)) {
                    return AJS.I18n.getText('saved.shared.draft.leave.page');
                }
            }
        },

        hasPendingChanges: function() {
            return pendingChanges;
        },

        // for testing purposes
        setPendingChanges: function(isPending) {
            pendingChanges = isPending;
        },

        isSharedDraftsEnabled: isSharedDraftsEnabled,

        bindUnloadMessage: function() {
            // Bind Synchrony events to the pendingChanges variable
            if (!Confluence.Editor.isLimitedModeEnabled() && isSharedDraftsEnabled()) {
                AJS.bind('synchrony.entity.ack', function(e, data) {
                    if (!data.pendingChanges) {
                        pendingChanges = false;
                    }
                });

                AJS.bind('editor.local.change', function() {
                    pendingChanges = true;
                });
            }
            $(window).bind('beforeunload', Confluence.Editor.Drafts.unloadMessage);
        },

        unBindUnloadMessage: function() {
            $(window).unbind('beforeunload');
        },

        useDraft: function() {
            sendFormDraft('useDraft', Meta.get('existing-draft-id'));
        },
        discardDraft: function(draftId) {
            return AJS.safe.ajax({
                url: CONSTANTS.CONTEXT_PATH + '/rest/api/content/' + draftId + '?status=draft',
                type: 'DELETE',
                dataType: 'json',
                data: {},
                contentType: 'application/json',
                success: function() {
                    $('#draft-messages').remove();
                    AJS.messages.success('#editor-messages', {
                        body: 'Your draft has been discarded.'
                    });
                },
                error: function(data) {
                    AJS.messages.error({
                        title: 'Error',
                        body: data.errors || 'An unknown error has occurred. Please check your logs.'
                    });
                }
            });
        },

        /**
         * Saves a draft, if content has changed and displays the draft saved message.
         * @param options
         *      onSuccessHandler : callback that is invoked on draft save success. Function should be formatted like this: function (responseData) {}
         *      onErrorHandler : callback that is invoked on draft save error. Function should be formatted like this: function (errorMessage) {}
         *      forceSave : forces a draft save even if there are no content changes (that is, AJS.Editor.hasContentChanged() == false)
         */
        save: function(options) {
            options = options || {};

            // we don't want to save draft, if it's outdated because of synchrony data cleanup.
            // In such case, draft's content in browser does not sync between editing sessions via synchrony, so we
            // don't want to save such data and mess with the draft's content in Confluence.
            // To be honest, save would fail in any case, because exports.getSynchronisedEditorContent from
            // synchrony-editor.js
            // throws an exception on attempt to ack state (`var ackState = entity.ackState();`) after synchrony entity
            // is destroyed. I just wanted to make it clear here that save is impossible if content has been
            // destroyed, so I added condition below.
            // Please refer to the jsdoc in synchrony-handlers.ls in collab-editor plugin (handleError function) for more
            // details about how eviction errors are processed on frontend
            if (unrecoverableEditorError) {
                return;
            }

            // Notes: ideally, Confluence.Editor.Drafts.save() should just do what it says and save the draft without no extra
            // checks (also ideally returning a promise that will be resolved or rejected according to the server response)
            // It should be responsability of the caller to do whatever checks are necessary before.
            // now that we are abstracting all the calls to Confluence.Editor.Drafts.save() into the confluencedrafts plugin
            // this should become an easier task.
            // hasContentChanged() checking field contentHasChangedSinceLastSave and its value is never change
            if (Confluence.Editor.isPublishing() || (!Confluence.Editor.editorHasContentChanged() && !options.forceSave)) {
                AJS.debug('skipping draft save because:');
                if (Confluence.Editor.isPublishing()) {
                    AJS.debug('The user is publishing the page already.');
                } else if (!Confluence.Editor.editorHasContentChanged() && !options.forceSave) {
                    AJS.debug('The content hasn\'t changed and a forceSave wasn\'t requested in the options.');
                }
                return;
            }

            AJS.debug('preparing to save editor draft');
            var titleField = $('#content-title');
            var newSpaceKey = $('#newSpaceKey');
            var originalVersion = $('#originalVersion');
            var resetWysiwygContent = Confluence.Editor.inRichTextMode();

            var draftData = {
                draftId: Meta.get('draft-id'),
                pageId: Meta.get('page-id'),
                parentPageId: Meta.get('parent-page-id'),
                type: AJS.params.draftType,
                title: titleField.hasClass('placeholded') ? '' : titleField.val(),
                spaceKey: newSpaceKey.length ? newSpaceKey.val() : encodeURIComponent(Meta.get('space-key'))
            };

            // trick here is that CollaborativeHelper.getEditorContent() returns RESOLVED promise
            // which executes piped functions IMMEDIATELY as they register - what a "nice" solution!
            // On top of that, collaborativePluginPromise is "instance" variable of CollaborativeHelper
            // (which also servers as a flag of readiness of content as far as I understand)...
            // Anyway, I hope this comment will save somebody's debugging time.
            CollaborativeHelper.getEditorContent().pipe(function(editorContent) {
                $.extend(draftData, editorContent);
                resume();
            });

            function resume() {
                if (originalVersion.length) {
                    draftData.pageVersion = parseInt(originalVersion.val(), 10);
                }
                var saveDraftCallback = function(data) {
                    if (data == null) {
                        // webkit seems to do some odd things with the existing event queue when you unload(), despite the readystate changing to 4 and the data being present
                        // responsetext is always an empty string, however the request was a sucess so we can just fail silently.
                        return;
                    }

                    var isSessionTimeout = isCurrentUserNonAnonymous && data.draftId === 0;
                    if (isSessionTimeout && isEditorAjaxSaveEnabled) {
                        // if reliable save is enabled and session is timeout, we should not update the existed metadata with the
                        // data get from server side, to prevent draft-id from being replaced to '0'
                        // and we cannot retrieve the previous draft-id after reconnect successfully.
                        return;
                    }

                    Confluence.Editor.contentHasChangedSinceLastSave = false;
                    if (resetWysiwygContent) {
                        AJS.Rte.Content.editorResetContentChanged();
                    }
                    draftSaved = true;
                    draftManuallySaved = !!options.manualSave;

                    // CONFDEV-33892 - Here we need to cast the return values as strings to avoid setting the Meta values to integers.
                    Meta.set('draft-id', data.draftId + '');
                    $('#draftId', Confluence.Editor.getCurrentForm()).val(data.draftId);

                    $('#draft-error').remove();

                    // If we are using synchrony the draft saved message will be provided by the
                    // confluence-collaborative-editor-plugin.
                    if (!Meta.get('collaborative-content')) {
                        var draftStatus = $('#draft-status');
                        var time = data.time || jsTime(new Date());
                        var draftMessage;
                        var draftBody;

                        if (draftManuallySaved) {
                            draftMessage = AJS.I18n.getText('draft.saved.at.new', time);
                        } else {
                            draftMessage = AJS.I18n.getText('draft.autosaved.at.new', time);
                        }

                        // on new pages the draft message should not be a diff link
                        draftBody = AJS.params.newPage ? draftMessage : '<a id=\'view-diff-link-heartbeat\' class=\'view-diff-link\' href=\'#\'>' + draftMessage + '</a>';

                        // adding tooltip
                        draftStatus.attr('data-tooltip', draftMessage);
                        draftStatus.html(draftBody);
                    }

                    if ($.isFunction(options.onSuccessHandler)) {
                        options.onSuccessHandler(data);
                    }

                    Confluence.Editor.Drafts.lastSaveTime = time;

                    AJS.trigger('rte-draft-saved', { draftId: data.draftId });
                };

                var saveDraftErrorHandler = function(request, textStatus) {
                    var showDefaultError = function() {
                        Confluence.Editor.addErrorMessage('draft-error',
                            Confluence.Editor.Drafts.lastSaveTime ? AJS.I18n.getText('draft.saving.error.previous.draft', Confluence.Editor.Drafts.lastSaveTime) : AJS.I18n.getText('draft.saving.error'),
                            true // show in all modes
                        );
                    };

                    if (options.skipErrorHandler || isSharedDraftsEnabled()) {
                        return;
                    }
                    if (request.status === 400) {
                        if (request.responseText.indexOf('Legacy drafts deprecated') >= 0) {
                            Message.handleMessage('legacy-draft-deprecated', {
                                type: 'error',
                                message: AJS.I18n.getText('editor.page.legacy.draft.deprecated')
                            });
                        } else if (request.responseText.indexOf('Unsupported character found in content: ') >= 0) {
                            var supplementaryCharacter = request.responseJSON.message.split('Unsupported character found in content: ')[1];
                            Message.handleMessage('utf8-validation-failed', {
                                title: AJS.I18n.getText('mysql.utf8.content.validation.failed.title'),
                                type: 'error',
                                message: AJS.I18n.getText('mysql.utf8.content.validation.failed.message', supplementaryCharacter)
                            });
                        } else {
                            showDefaultError();
                        }
                    } else {
                        showDefaultError();
                    }

                    if ($.isFunction(options.onErrorHandler)) {
                        options.onErrorHandler(textStatus);
                    }
                };

                draftSavingPromise = $.ajax({
                    type: 'POST',
                    url: CONSTANTS.CONTEXT_PATH + '/rest/tinymce/1/drafts' + (options.ignoreRelations ? '?ignoreRelations=true' : ''),
                    data: $.toJSON(draftData),
                    contentType: 'application/json',
                    dataType: 'text json', // "text json" instead of "json" is critical to solve CONFDEV-4799. Please read comments on this ticket if you want to change this.,
                    success: saveDraftCallback,
                    error: saveDraftErrorHandler,
                    timeout: 30000 // 30 seconds
                }).always(function() {
                    draftSavingPromise = null;
                });
            }
        },
        /**
         * @returns {*} a promise while a draft is being saved which can have .done and .fail callbacks
         * bound to it, or null if the draft is currently not being saved.
         */
        getDraftSavingPromise: function() {
            return draftSavingPromise;
        }
    };
});

require('confluence/module-exporter').exportModuleAsGlobal('confluence-editor/page-editor-drafts', 'Confluence.Editor.Drafts');
