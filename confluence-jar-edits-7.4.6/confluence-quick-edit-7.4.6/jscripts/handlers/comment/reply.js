/**
 * Reply to comment.
 *
 * @module confluence-quick-edit/handlers/comment/reply
 */
define('confluence-quick-edit/handlers/comment/reply', [
    'confluence/root',
    'confluence/templates',
    'wrm/context-path',
    'confluence/dark-features',
    'confluence-editor-loader/editor-loader',
    'confluence/api/event',
    'confluence/api/logger',
    'confluence/meta',
    'confluence-editor/profiles',
    'confluence-quick-edit/handlers/comment',
    'confluence-quick-edit/quick-edit',
    'jquery'
], function(
    Confluence,
    ConfluenceTemplates,
    contextPath,
    DarkFeatures,
    EditorLoader,
    event,
    logger,
    Meta,
    Profiles,
    QuickComment,
    QuickEdit,
    $
) {
    'use strict';

    /**
     * replyHandler for use by QuickEdit
     */
    var replyHandler;
    var disableSlowComment = DarkFeatures.isEnabled('editor.slow.comment.disable');

    /**
     * This will customize the default editor so it looks something like the target editor: a reply comment editor
     * This is called after we fetch the editor resources and before the editor gets displayed
     *
     * @param {object} options.content Content retrieved by the REST end-point, if any.
     * @param {object} options.$form Form (jquery object)
     * @param {function} options.replayBufferedKeys  Key buffer unblocker function (will replay typed keys)
     */
    function preInitialise(options) {
        QuickComment.preInitialise(options);
        options.$container.scrollWindowToElement(); // use scroll-util jquery plugin
    }

    /**
     * Called after editor initialisation
     *
     * @param {object} options options to use
     * @param {object} options.editor Editor instance
     * @param {object} options.$container Editor main container (jquery object)
     * @param {object} options.content Content retrieved by the REST end-point, if any.
     * @param {object} options.$form Form (jquery object)
     * @param {function} options.replayBufferedKeys  Key buffer replay function, to replay typed keys
     */
    function postInitialise(options) {
        QuickComment.postInitialise(options);
    }

    function getCommentId($comment) {
        var match = $comment.attr('id').match(/comment-(\d+)/);
        var parentCommentId = 0;
        if (match) {
            parentCommentId = parseInt(match[1], 10);
        } else {
            event.trigger('analytics', { name: 'rte.quick-edit.get-reply-parent.failed' });
            logger.logError('replyHandler: activateEventHandler - could not extract a parent comment Id from the comment id ' + $comment.attr('id'));
        }
        return parentCommentId;
    }

    /**
     * Handle transition when opening the editor
     * Insert the html elements necessary to instantiate an editor on it.
     * Display the gray container with spinner if resources have not been loaded yet
     * @param {object} $comment jquery object pointing to the comment to reply to
     */
    function handleTransition($comment) {
        var $placeHolderLogo = $('.quick-comment-container img.userLogo');
        var commenter = QuickComment.createCommenterParam($placeHolderLogo);
        var params = {
            contentId: Confluence.getContentId(),
            parentCommentId: getCommentId($comment),
            commenter: commenter,
            context: {
                contextPath: contextPath(),
                staticResourceUrlPrefix: Meta.get('static-resource-url-prefix')
            }
        };

        var template = $(ConfluenceTemplates.Comments.displayReplyEditorLoadingContainer(params));
        var $loadingContainer = $('.quick-comment-loading-container', template);

        $loadingContainer.hide(); // we don't want to show the loading transition if we have the resources ready
        $comment.after(template);

        if (!EditorLoader.resourcesLoaded()) {
            event.trigger('analytics', { name: 'rte.quick-edit.reply-comment.spinner' });
            $comment.after(template);
            $loadingContainer.fadeIn();
            $loadingContainer.spin('medium');
            $loadingContainer[0].scrollIntoView();
        } else {
            event.trigger('analytics', { name: 'rte.quick-edit.reply-comment.no-spinner' });
        }
    }

    function cleanResource() {
        var $comment = $('.comment.reply');
        var $commentThread = $comment.closest('.comment-threads');
        $commentThread.remove();
    }

    replyHandler = {

        /**
         * Will display the editor structure when reply is activated. Expects 'this' to be the DOM element
         * that was activated.
         *
         * @param e the event triggering the activation
         */
        activateEventHandler: function(e) {
            var self = this;
            e.preventDefault();
            e.stopPropagation();

            if ($(self).attr('reply-disabled')) {
                return false;
            }

            QuickComment.proceedWithActivation().done(function() {
                var $comment = $(self).closest('div.comment');
                var $container;

                handleTransition($comment);

                $container = $(self).closest('.comment-thread').find('.quick-comment-container');

                // TODO why do we need this? documentation? tests?
                Meta.set('form-name', $('form', $container).attr('name'));

                QuickEdit.activateEditor({
                    $container: $container,
                    $form: $('form.quick-comment-form[name=threadedcommentform]'),
                    preInitialise: preInitialise,
                    postInitialise: postInitialise,
                    saveHandler: QuickComment.createSaveHandler(QuickComment.delegatingSaveCommentHandler,
                        QuickComment.saveCommentErrorHandler),
                    cancelHandler: QuickComment.cancelHandler,
                    plugins: Profiles.createProfileForCommentEditor().plugins,
                    postDeactivate: cleanResource,
                    additionalResources: ['wrc!comment-editor'],
                    timeoutResources: QuickComment.timeout
                }).fail(function() {
                    if (disableSlowComment) {
                        QuickComment.showLoadingEditorErrorMessage();
                    } else {
                        window.location = $('#reply-comment-' + getCommentId($comment)).attr('href');
                    }
                });

                $(self).attr('reply-disabled', true);
            });
        },

        /**
         * Enables handlers for reply comment
         */

        enable: function() {
            $('#comments-section').delegate('.action-reply-comment', 'click', replyHandler.activateEventHandler);
        },

        /**
         * Disables handlers for reply comment
         */

        disable: function() {
            $('#comments-section').undelegate('.action-reply-comment', 'click');
        }
    };

    QuickEdit.register(replyHandler);

    return {
        cancelComment: function() {
            logger.log('\'AJS.Confluence.QuickEdit.QuickComment.Reply.cancelComment\' is deprecated in 5.7, consider using \'AJS.Confluence.QuickEdit.QuickComment.cancelComment\' instead.');
            return QuickComment.cancelComment();
        }
    };
});


require('confluence/module-exporter').exportModuleAsGlobal('confluence-quick-edit/handlers/comment/reply', 'AJS.Confluence.QuickEdit.QuickComment.Reply');
