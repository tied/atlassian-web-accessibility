/**
 * Base functionality for comments.
 * For specific behaviour, check comment/reply.js and comment/top-level.js
 *
 * @module confluence-quick-edit/handlers/comment
 */
define('confluence-quick-edit/handlers/comment', [
    'jquery',
    'ajs',
    'confluence/legacy',
    'wrm/context-path',
    'confluence-editor-loader/editor-loader',
    'confluence/api/event',
    'aui/flag',
    'confluence/api/logger',
    'confluence-editor/editor/page-editor-message',
    'confluence/message-controller',
    'confluence/meta',
    'confluence-quick-edit/captcha-manager',
    'confluence-quick-edit/handlers/page',
    'confluence-quick-edit/util'
], function(
    $,
    AJS,
    Confluence,
    contextPath,
    EditorLoader,
    event,
    flag,
    logger,
    Message,
    MessageController,
    Meta,
    QuickEditCaptchaManager,
    QuickEditPage,
    Util
) {
    'use strict';

    var QUICK_COMMENT_LOADING_TIMEOUT = 8000;

    /**
     * Common QuickComment code, for actual handler implementations see the comment/ directory
     */
    $(function() {
        // TODO: understand WTH is this. If this is important, we need a test for this
        // Customise the initialisation of AppLinks so that it won't start until the editor is initialised.
        AJS.AppLinksInitialisationBinder = function(f) {
            event.bind('init.rte', f);
        };
    });

    function adaptUIToComment() {
        // CONFDEV-10529 Make sure edit is loaded before trying to manipulate it's DOM.
        $('#editor-precursor').children().eq(0).hide();
        $('#pagelayout-menu').parent().hide();
        $('#page-layout-2-group').hide();
        $('#rte-button-tasklist').remove();
        $('#pluggable-status-container').remove();
        $('#rte-insert-tasklist').parent().remove();
    }

    function assignMetaData() {
        // CONFDEV-10526 - Change to 'comment' as it is by default page or blog
        Meta.set('content-type', 'comment');
        Meta.set('draft-type', '');

        // make sure AJS.params and Meta share the same value (until CONFDEV-15654 is resolved)
        // TODO: do we still need to maintain both ways?
        AJS.params.contentType = 'comment';
        AJS.params.draftType = '';

        // Update other values accordingly
        Meta.set('use-inline-tasks', 'false'); // TODO: why? which test will break if we comment this out?
    }

    function getIntParameter(url, paramName) {
        var regex = new RegExp('[?&]' + paramName + '=(\\d+)');
        var match = url.match(regex);
        return (match && match.length > 1) ? parseInt(match[1], 10) : 0;
    }

    var QuickComment = {};

    /**
     * Timeout for loading QuickComment
     */
    QuickComment.timeout = QUICK_COMMENT_LOADING_TIMEOUT;

    /**
     * Handle error if the editor couldn't be loaded.
     */
    QuickComment.showLoadingEditorErrorMessage = function(reason) {
        var error = {};
        event.trigger('rte-quick-comment-loading-failed');
        if (reason === 'READ_ONLY') {
            error.title = AJS.I18n.getText('read.only.mode.default.error.title');
            error.body = AJS.I18n.getText('read.only.mode.default.error.description');
        } else {
            error.title = AJS.I18n.getText('quick.comment.loading.error.message.title');
            error.body = AJS.I18n.getText('quick.comment.loading.error.message');
        }

        MessageController.showError(error, MessageController.Location.FLAG);
    };

    /**
     * This is called after we fetch the editor resources and before the editor gets displayed
     *
     * @param {object} options.content Content retrieved by the REST end-point, if any.
     * @param {object} options.$form Form (jquery object)
     * @param {function} options.replayBufferedKeys  Key buffer unblocker function (will replay typed keys)
     */
    QuickComment.preInitialise = function(options) {
        // when a comment is loaded, we disable quick edit for a page.
        // maintaining both quick comment and quick edit with reloadable editor is
        // achievable, but outside of the scope of this shipit.
        QuickEditPage.disable();

        assignMetaData();
        adaptUIToComment();
    };

    /**
     * Called by reply and top-level when editor gets loaded
     *
     * @param {object} options.editor Editor instance
     * @param {object} options.$container Editor main container (jquery object)
     * @param {object} options.content Content retrieved by the REST end-point, if any.
     * @param {object} options.$form Form (jquery object)
     * @param {function} options.replayBufferedKeys  Key buffer unblocker function (will replay typed keys)
     */
    QuickComment.postInitialise = function(options) {
        // Making sure the editor has the focus
        AJS.Rte.editorFocus(options.editor);
    };

    QuickComment.delegatingSaveCommentHandler = function(data) {
        if (data.asyncRenderSafe) {
            return QuickComment.ajaxSaveCommentHandler(data);
        }

        return QuickComment.reloadPageSaveCommentHandler(data);
    };

    /**
     * A success handler that will reload the page focused on the new comment.
     */
    QuickComment.reloadPageSaveCommentHandler = function(data) {
        var baseUrl = Util.getBaseUrl();
        baseUrl.addQueryParam('focusedCommentId', data.id);
        baseUrl.addQueryParam('refresh', +new Date()); // CONFDEV-25213 otherwise, we are navigating to the current URL (it does nothing)
        window.location.href = baseUrl.toString() + '#comment-' + data.id;
    };

    QuickComment.ajaxSaveCommentHandler = function(data) {
        var comment = data;
        var userProfilePicture = {
            isDefault: true,
            path: Meta.get('static-resource-url-prefix') + '/images/icons/profilepics/default.png'
        };
        if (Meta.get('current-user-avatar-uri-reference') !== contextPath() + '/images/icons/profilepics/default.png') {
            userProfilePicture = {
                isDefault: false,
                path: Meta.get('current-user-avatar-uri-reference')
            };
        }
        var username = Meta.get('remote-user');
        var commenter = {
            userName: username === '' ? null : username, // Soy functions expect username to be null not "" for anonymous
            displayName: Meta.get('current-user-fullname'),
            profilePicture: userProfilePicture
        };
        var highlight = true;

        var deferredCancel = QuickComment.cancelComment();
        deferredCancel.done(function() {
            Confluence.CommentDisplayManager.addOrUpdateComment(commenter, comment, highlight, false);
            event.trigger('page.commentAddedOrUpdated', { commentId: comment.id });
        });
    };

    QuickComment.cancelHandler = function() {
        var QuickEdit = require('confluence-quick-edit/quick-edit');
        AJS.Rte.Content.editorResetContentChanged();
        QuickEdit.deactivateEditor();
    };

    /**
     * Most templates require a commenter parameter. This function creates it.
     *
     * @param $userLogoImg an img representing a user logo to create commenter details from
     * @param remoteUser the username of commenter, if missing then the current user is used
     * @param userDisplayName the display name of commenter, if missing then the current user is used
     */
    QuickComment.createCommenterParam = function($userLogoImg, remoteUser, userDisplayName) {
        return {
            userName: remoteUser || Meta.get('remote-user') || null,
            displayName: userDisplayName || Meta.get('user-display-name'),
            profilePicture: {
                isDefault: $userLogoImg.hasClass('defaultLogo'),
                path: $userLogoImg.attr('src')
            }
        };
    };

    /**
     * Create a save handler which is a function taking a single event that is to be called
     * when the save operation is activated on the editor.
     *
     * @param successHandler the function to be called if save is successful. Takes a single argument which is the
     * data returned from the save.
     * @param errorHandler a function taking a single message parameter which is called if the save fails.
     * @return a function taking an event parameter which is suitable for use as a save handler for the editor
     */
    QuickComment.createSaveHandler = function(successHandler, errorHandler) {
        var uuid = Util.generateUUID();

        return function(e) {
            var EditorNotification = require('confluence/editor-notifications');
            e.preventDefault();

            if (AJS.Rte.Content.isEmpty()) {
                EditorNotification.notify('warning', AJS.I18n.getText('content.empty'));
                Confluence.Editor.UI.toggleSavebarBusy(false);
                return;
            }

            // TODO add better progress indication rather than just changing save button to "saving"

            // TODO Not required because we aren't dynamically adding comments yet
            // Learn about the users current profile picture from their avatar already rendered beside the editor
            // var commenter = quickComment.createCommenterParam(AJS.Confluence.EditorLoader.getEditorForm().closest(".quick-comment-container").find(".userLogo"));

            // Check for a parent comment id and comment id if any
            var parentCommentId = 0;
            var commentId = 0;

            var $form = EditorLoader.getEditorForm();
            if ($form.is('form')) {
                var action = $form.attr('action');
                parentCommentId = getIntParameter(action, 'parentId');
                commentId = getIntParameter(action, 'commentId');
            }

            var captchaManager = new QuickEditCaptchaManager($form);

            var changeCaptchaErrorHandler = function(message, jqXhr) {
                errorHandler(message, jqXhr);
                captchaManager.refreshCaptcha();
            };

            var watchPage = $('#watchPage').is(':checked');
            if (commentId > 0) {
                Confluence.Editor.CommentManager.updateComment(Confluence.getContentId(), commentId, AJS.Rte.Content.getHtml(),
                    watchPage, captchaManager.getCaptchaData(), successHandler, changeCaptchaErrorHandler);
            } else {
                Confluence.Editor.CommentManager.saveComment(Confluence.getContentId(), parentCommentId, AJS.Rte.Content.getHtml(),
                    watchPage, uuid, captchaManager.getCaptchaData(), successHandler, changeCaptchaErrorHandler);
            }
        };
    };

    QuickComment.saveCommentErrorHandler = function(message, jqXhr) {
        var displayMessage;
        var supplementaryCharacter;

        Confluence.Editor.UI.toggleSavebarBusy(false);
        // recognise some common error conditions
        if (message && message.search(/captcha/i) !== -1) {
            displayMessage = AJS.I18n.getText('captcha.response.failed');
            Message.closeMessages(['captcha-response-failed']);
            Message.handleMessage('captcha-response-failed', {
                type: 'error',
                message: displayMessage
            });
        } else if (message && message.search(/Unsupported character found in content: (.{12})/i) !== -1) {
            supplementaryCharacter = JSON.parse(message.replace(/error: {2}- /, ''))
                .message
                .split('Unsupported character found in content: ')[1];
            displayMessage = AJS.I18n.getText('quick.comment.mysql.utf8.content.validation.failed.message', supplementaryCharacter);
            Message.closeMessages(['utf8-validation-failed']);
            Message.handleMessage('utf8-validation-failed', {
                title: AJS.I18n.getText('mysql.utf8.content.validation.failed.title'),
                type: 'error',
                message: displayMessage
            });
        } else {
            displayMessage = AJS.I18n.getText('quick.comment.saving.error.message');
            if (jqXhr) {
                MessageController.showError(MessageController.parseError(jqXhr, displayMessage), MessageController.Location.FLAG);
            } else {
                Message.closeMessages(['server-offline']);
                Message.handleMessage('server-offline', {
                    type: 'error',
                    message: displayMessage
                });
            }
        }
        logger.logError('Error saving comment', message);
    };

    /**
     * Cancel any open comments (either reply or top-level), wrapping the editor
     * and doing the necessary changes in the page.
     */
    QuickComment.cancelComment = function() {
        AJS.Rte.Content.editorResetContentChanged(); // reset dirty flag
        return require('confluence-quick-edit/quick-edit').deactivateEditor();
    };

    QuickComment.proceedWithActivation = function() {
        var deferred = new $.Deferred();
        var openEditor = AJS.Rte && AJS.Rte.getEditor();
        if (openEditor) {
            if (openEditor.isDirty() && !Confluence.Editor.isEmpty()) {
                if (!confirm(AJS.I18n.getText('unsaved.comment.lost'))) {
                    return deferred.reject();
                }
                deferred = QuickComment.cancelComment();
            } else {
                deferred = QuickComment.cancelComment();
            }
        } else {
            deferred.resolve();
        }
        return deferred;
    };

    return QuickComment;
});

require('confluence/module-exporter').exportModuleAsGlobal('confluence-quick-edit/handlers/comment', 'AJS.Confluence.QuickEdit.QuickComment');
