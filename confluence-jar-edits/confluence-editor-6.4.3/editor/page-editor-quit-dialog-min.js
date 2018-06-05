define("confluence-editor/editor/page-editor-quit-dialog",["jquery","confluence/templates","ajs","confluence/meta","confluence/legacy","window","document","confluence-editor/editor/page-editor-message","confluence/api/constants","underscore"],function(t,e,o,i,n,a,d,r,s,l){"use strict";var c,u,g,f={},h={EXIT:"exit",PUBLISH:"publish",SHOW_DIFF:"diff"},p=[],y=!1,m={},v=0,b=5;function E(t){t.stopPropagation(),t.preventDefault(),o.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.show-diff-clicked"}),f.showDiffButton.hide(),f.hideDiffButton.show(),C()}function B(t){t.stopPropagation(),t.preventDefault(),o.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.hide-diff-clicked"}),f.hideDiffButton.hide(),f.showDiffButton.show(),f.dialogEl.removeClass("aui-dialog2-xlarge").addClass("aui-dialog2-medium"),k(g)}function I(e){S(),o.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.discard"}),e.stopPropagation(),e.preventDefault(),n.Editor.UI.setButtonsState(!1,f.buttonsAll),function e(i,a){var d=o.contextPath();var s=c?d+"/rest/synchrony/1.0/content/"+i+"/changes/unpublished":d+"/rest/api/content/"+i+"?status=draft";c&&r.suppressMessage("editor.synchrony.revert-page");a=a||0;t.ajax({url:s,type:"DELETE",data:{draftId:i},contentType:"application/json",dataType:"json"}).done(function(){c&&r.handleMessage("collaborative-editor-discard-error",{type:"success",close:"auto",message:o.I18n.getText("editor.discard-to-published.success.message")}),o.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.discard-success",data:{contentId:i}}),D()}).fail(function(t){409===t.status&&a<b?(o.trigger("disable-draft-save"),e(i,a+1)):(o.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.discard-error",data:{contentId:i}}),o.trigger("enable-draft-save"),r.handleMessage("collaborative-editor-discard-error",{type:"error",title:c?o.I18n.getText("editor.discard-to-published.error.title"):o.I18n.getText("draft.saving.error.could.not.delete"),message:c?o.I18n.getText("editor.discard-to-published.error.message"):t.errors||o.I18n.getText("discard.draft.unknown.error")}),n.Editor.UI.setButtonsState(!0,f.buttonsAll))})}(i.get("content-id"))}function D(){f.editorForm.append(e.Editor.Page.hiddenInputCancel()).submit()}function w(t){t&&(t.stopPropagation(),t.preventDefault()),S(),o.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.keep-draft-clicked",data:{contributorCount:p.length+1}}),D()}function T(t){n.Editor.UI.setButtonsState(!1,f.buttonsAll),m.save(t),S()}function q(t){t.stopPropagation(),t.preventDefault(),o.trigger("analyticsEvent",{name:"confluence.synchrony.editor.draft-status-indicator.click"}),H(function(){f.closeButton.show(),C()})}function x(t){t.stopPropagation(),t.preventDefault(),f.dialog.hide()}function C(){f.dialogEl.removeClass("aui-dialog2-medium").addClass("aui-dialog2-xlarge"),k(h.SHOW_DIFF),t.ajax({url:s.CONTEXT_PATH+"/rest/tinymce/1/content/"+i.get("page-id")+"/draft/diff",type:"GET"}).success(function(t){f.dialogContent.find(".wiki-content").html(t).children().first().hasClass("diff-context-placeholder")&&f.dialogContent.find("hr").hide()})}function k(t){t!==h.EXIT&&t!==h.PUBLISH||(v=(new Date).getTime()/1e3),f.dialogHeader.html(e.Editor.Page.quitDialogHeader({dialogType:t})),f.dialogContent.html(e.Editor.Page.quitDialogContent({dialogType:t,contributors:p})),f.dialogFooter.find("."+t).show(),f.dialog.show()}function P(){S(),o.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.dialog-closed"}),f.dialogEl.removeClass("aui-dialog2-xlarge").addClass("aui-dialog2-medium"),n.Editor.UI.toggleSavebarBusy(!1),f.dialogFooter.find(".aui-button").hide(),f.dialogContent.empty()}function S(){var t=(new Date).getTime()/1e3-v;o.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog."+g+".displayed",data:{displayTimeInSeconds:t,contentId:i.get("content-id")}}),v=0}function U(t,e){e&&e.contributors&&(p=l.reject(e.contributors,function(t){return t.name===i.get("remote-user")}))}function H(e){n.Editor.Drafts.save({forceSave:c,skipErrorHandler:!0,onSuccessHandler:e||t.noop})}return{init:function(e){(u=i.getBoolean("shared-drafts")&&("page"===i.get("content-type")||"blogpost"===i.get("content-type")))&&(y?(m.save=e.saveHandler,f.publishButton.click(T)):(c=!i.get("new-page"),f.discardButton=t("#qed-discard-button").prop("role","dialog").removeAttr("title").attr("aria-label","Quit Notice").tooltip({gravity:"s",className:"quit-editor-dialog"}),n.Editor.isLimitedModeEnabled()&&c?(n.Editor.UI.setButtonState(!1,f.discardButton),f.discardButton.removeAttr("disabled")):f.discardButton.click(I),f.saveExitButton=t("#qed-save-exit-button").click(w),f.showDiffButton=t("#qed-show-diff-button").click(E),f.hideDiffButton=t("#qed-hide-diff-button").click(B),f.publishButton=t("#qed-publish-button").removeAttr("title"),f.closeButton=t("#qed-close-button").click(x),f.buttonsAll=[f.discardButton,f.saveExitButton,f.showDiffButton,f.hideDiffButton,f.publishButton],f.dialog=o.dialog2("#quit-editor-dialog"),f.dialogEl=f.dialog.$el,f.dialogHeader=f.dialogEl.find(".aui-dialog2-header"),f.dialogContent=f.dialogEl.find(".aui-dialog2-content"),f.dialogFooter=f.dialogEl.find(".aui-dialog2-footer"),f.editorForm=t("#wysiwyg").closest("form"),t("#pluggable-status").on("click","a",q),f.dialog.on("hide",P),o.bind("editor-heartbeat",U),y=!0))},process:function(e){u&&(e.stopPropagation(),e.preventDefault(),t(a).one("editor-heartbeat",function(t,i){switch(e.target.id){case n.Editor.UI.saveButton.attr("id"):case n.Editor.UI.versionCommentInput.attr("id"):n.Editor.UI.toggleSavebarBusy(!0),0===p.length?m.save():(H(),c&&f.showDiffButton.show(),k(h.PUBLISH),g=h.PUBLISH);break;case n.Editor.UI.cancelButton.attr("id"):n.Editor.Drafts.isDraftDirty()?(H(),c&&f.showDiffButton.show(),n.Editor.UI.toggleSavebarBusy(!0),0===p.length?f.discardButton.html(o.I18n.getText("editor.quit-dialog.button.discard.changes.by.one")):f.discardButton.html(o.I18n.getText("editor.quit-dialog.button.discard.changes.by.many")),k(h.EXIT),g=h.EXIT):w()}}),n.Editor.heartbeat())},_destroy:function(){y=!1}}});