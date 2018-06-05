define("confluence-quick-edit/handlers/comment/top-level",["ajs","jquery","confluence-quick-edit/handlers/shortcut","confluence-quick-edit/handlers/comment","window"],function(e,n,t,o,c){"use strict";var i=e.DarkFeatures.isEnabled("editor.slow.comment.disable");function r(e){o.preInitialise(e)}function m(e){n("#comments-section").one("click",".quick-comment-prompt",l.activateEventHandler),n("#rte-savebar").scrollWindowToElement(),o.postInitialise(e)}function a(){e.Confluence.EditorLoader.resourcesLoaded()||(e.trigger("analytics",{name:"rte.quick-edit.top-comment.spinner"}),n(".quick-comment-prompt").hide(),n(".quick-comment-loading-container").fadeIn().spin("medium"))}var l={commentShortcut:t.createShortcut("m",".quick-comment-prompt"),activateEventHandler:function(t){t.preventDefault(),o.proceedWithActivation().done(function(){var t=o.createSaveHandler(o.delegatingSaveCommentHandler,o.saveCommentErrorHandler);return e.Confluence.QuickEdit.activateEditor({preActivate:a,$container:n("form[name=inlinecommentform]").closest(".quick-comment-container"),$form:n("form[name=inlinecommentform]"),preInitialise:r,saveHandler:t,cancelHandler:o.cancelHandler,postInitialise:m,plugins:e.Confluence.Editor._Profiles.createProfileForCommentEditor().plugins,additionalResources:["wrc!comment-editor"],timeoutResources:o.timeout}).fail(function(){i?o.showLoadingEditorErrorMessage():c.location=n("#add-comment-rte").attr("href")})}).fail(function(){n("#comments-section").one("click",".quick-comment-prompt",l.activateEventHandler)})},enable:function(){n("#comments-section").one("click",".quick-comment-prompt",l.activateEventHandler),n("#add-comment-rte").removeClass("full-load"),this.commentShortcut.bind()},disable:function(){n("#comments-section").off("click",".quick-comment-prompt"),this.commentShortcut.unbind()}};function u(e){e.preventDefault(),c.location=n("#add-comment-rte").attr("href")}return e.Confluence.QuickEdit.register(l),{bindCommentAreaFallbackHandler:function(){n("#comments-section").delegate(".quick-comment-prompt","click",u)},cancelComment:function(){return e.log("'AJS.Confluence.QuickEdit.QuickComment.TopLevel.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead."),e.Confluence.QuickEdit.QuickComment.cancelComment()}}}),require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment/top-level","AJS.Confluence.QuickEdit.QuickComment.TopLevel");