/**
 * Handler to launch the editor to add a new (?) top level comment.
 *
 * @module confluence-quick-edit/handlers/comment/top-level
 */
define('confluence-quick-edit/handlers/comment/top-level', [
    'jquery',
    'confluence/dark-features',
    'confluence-editor-loader/editor-loader',
    'confluence/api/event',
    'confluence/api/logger',
    'confluence-editor/profiles',
    'confluence-quick-edit/handlers/comment',
    'confluence-quick-edit/quick-edit',
    'confluence-quick-edit/handlers/shortcut',
    'window'
], function(
    $,
    DarkFeatures,
    EditorLoader,
    event,
    logger,
    Profiles,
    QuickComment,
    QuickEdit,
    Shortcuts,
    window
) {
    'use strict';

    var disableSlowComment = DarkFeatures.isEnabled('editor.slow.comment.disable');

    /**
     * This will customize the default editor so it looks something like the target editor: a top-level comment editor
     * This is called after we fetch the editor resources and before the editor gets displayed
     *
     * @param {object} options options to use
     * @param {object} options.content Content retrieved by the REST end-point, if any.
     * @param {object} options.$form Form (jquery object)
     * @param {function} options.replayBufferedKeys  Key buffer unblocker function (will replay typed keys)
     */
    function preInitialise(options) {
        QuickComment.preInitialise(options);
    }

    /**
     * Called when editor gets loaded
     *
     * @param {object} options.editor Editor instance
     * @param {object} options.$container Editor main container (jquery object)
     * @param {object} options.content Content retrieved by the REST end-point, if any.
     * @param {object} options.$form Form (jquery object)
     * @param {function} options.replayBufferedKeys  Key buffer unblocker function (will replay typed keys)
     */
    function postInitialise(options) {
        /*
         * CONFDEV-37276
         * rebind event using "one()" to avoid clicking on it many times,
         * which may lead to unexpected behavior and error
         */
        $('#comments-section').one('click', '.quick-comment-prompt', topLevelHandler.activateEventHandler);

        $('#rte-savebar').scrollWindowToElement();
        QuickComment.postInitialise(options);
    }

    function showLoadingContainer() {
        event.trigger('analytics', { name: 'rte.quick-edit.top-comment.spinner' });
        $('.quick-comment-prompt').hide(); // hide "write a comment" placeholder
        var $loadingContainer = $('.quick-comment-loading-container');
        $loadingContainer.fadeIn().spin('medium');
    }

    /**
     * Pre-activation handler. Gets executed before the call to fetch resources.
     */
    function preActivate() {
        if (!EditorLoader.resourcesLoaded()) {
            showLoadingContainer();
        }
    }

    /**
     * topLevelHandler for use by QuickEdit
     */
    var topLevelHandler = {
        commentShortcut: Shortcuts.createShortcut('m', '.quick-comment-prompt'),

        /**
         * Called to handle the triggering of a top level comment editor.
         * This is expected to called in the context where 'this' is the activated element.
         *
         * @param e the event triggering the activation
         */
        activateEventHandler: function(e) {
            e.preventDefault();
            QuickComment.proceedWithActivation().done(function() {
                // we can activate now
                var saveHandler = QuickComment.createSaveHandler(QuickComment.delegatingSaveCommentHandler,
                    QuickComment.saveCommentErrorHandler);

                var $inlineCommentForm = $('form[name=inlinecommentform]');

                return QuickEdit.activateEditor({
                    preActivate: preActivate,
                    $container: $inlineCommentForm.closest('.quick-comment-container'),
                    $form: $inlineCommentForm,
                    preInitialise: preInitialise,
                    saveHandler: saveHandler,
                    cancelHandler: QuickComment.cancelHandler,
                    postInitialise: postInitialise,
                    plugins: Profiles.createProfileForCommentEditor().plugins,
                    additionalResources: ['wrc!comment-editor'],
                    timeoutResources: QuickComment.timeout
                }).fail(function(reason) {
                    logger.logError('activateEventHandler failed because of: ' + reason);
                    if (reason === 'READ_ONLY' || disableSlowComment) {
                        QuickComment.showLoadingEditorErrorMessage(reason);
                        $('#comments-section').one('click', '.quick-comment-prompt', topLevelHandler.activateEventHandler);
                    } else {
                        window.location = $('#add-comment-rte').attr('href');
                    }
                });
            }).fail(function() {
                /*
                 * CONFDEV-37276
                 * rebind event using "one()" to avoid clicking on it many times,
                 * which may lead to unexpected behavior and error
                 */
                $('#comments-section').one('click', '.quick-comment-prompt', topLevelHandler.activateEventHandler);
            });
        },

        /**
         * Enables handlers for top-level comment
         */
        enable: function() {
            /*
             * CONFDEV-37276
             * use "one()" to avoid clicking on it many times,
             * which may lead to unexpected behavior and error
             */
            $('#comments-section').one('click', '.quick-comment-prompt', topLevelHandler.activateEventHandler);
            $('#add-comment-rte').removeClass('full-load'); // Ensure that the original shortcut isn't also activated.

            this.commentShortcut.bind();
        },

        /**
         * Ensure all top level comment place holders are disable and remove all handlers.
         */
        disable: function() {
            $('#comments-section').off('click', '.quick-comment-prompt');

            this.commentShortcut.unbind();
        }
    };

    function fallBackToAddCommentUrl(e) {
        e.preventDefault();
        window.location = $('#add-comment-rte').attr('href');
    }

    QuickEdit.register(topLevelHandler);

    return {
        bindCommentAreaFallbackHandler: function() {
            $('#comments-section').delegate('.quick-comment-prompt', 'click', fallBackToAddCommentUrl);
        },
        cancelComment: function() {
            logger.log('\'AJS.Confluence.QuickEdit.QuickComment.TopLevel.cancelComment\' is deprecated in 5.7, consider using \'AJS.Confluence.QuickEdit.QuickComment.cancelComment\' instead.');
            return QuickComment.cancelComment();
        }
    };
});

require('confluence/module-exporter').exportModuleAsGlobal('confluence-quick-edit/handlers/comment/top-level', 'AJS.Confluence.QuickEdit.QuickComment.TopLevel');
