define("confluence-editor/tinymce3/plugins/confluencedrafts/editor_plugin_src","jquery ajs confluence/legacy confluence/meta tinymce confluence/api/constants".split(" "),function(e,a,b,c,f,h){return{init:function(f){function j(){if(!c.get("has-collaborated")&&a.Rte.Content.editorHasContentChanged()){c.set("has-collaborated",true);var b=c.get("remote-user-key"),d=c.get("content-id");if(b!==""){e.ajax({type:"PUT",url:h.CONTEXT_PATH+"/rest/experimental/relation/user/"+b+"/collaborator/toContent/"+d+
"?targetStatus=draft",error:function(){c.set("has-collaborated",false);a.error("Unable to store current user as a collaborator")}});e.ajax({type:"DELETE",url:h.CONTEXT_PATH+"/rest/experimental/relation/user/"+b+"/touched/toContent/"+d+"?targetStatus=current"});e.ajax({type:"PUT",url:h.CONTEXT_PATH+"/rest/experimental/relation/user/"+b+"/touched/toContent/"+d+"?targetStatus=draft",error:function(){c.set("has-collaborated",false);a.error("Unable to store touch relation for current user")}})}}}function i(){b.Editor.editorHasContentChanged()&&
b.Editor.Drafts.save({forceSave:true})}var g;f.onInit.add(function(){a.bind("rte-preview-action-selected",i);c.get("shared-drafts")&&a.DarkFeatures.isEnabled("collaborative-audit-log")&&a.bind("editor.local.change",j)});f.onRemove.add(function(){a.unbind("rte-preview-action-selected",i)});a.bind("disable-draft-save",function(){a.debug("Clearing draft save interval");clearInterval(g);g=null});a.bind("enable-draft-save",function(){a.debug("Enabling draft save interval");g||(g=setInterval(b.Editor.Drafts.save,
+a.params.draftSaveInterval||3E4))});a.bind("rte-ready",function(){a.debug("confluence drafts plugin initialisation");e("#draft-status").show();e("#draft-messages").show();b.Editor.Drafts.bindUnloadMessage();b.Editor.UI.cancelButton.click(function(){b.Editor.Drafts.save({skipErrorHandler:true})});e("#draft-messages").is(":visible")&&a.Confluence.Analytics.publish("rte.notification.draft");e("#draft-messages").find("a.use-draft").click(function(c){c.stopPropagation();c.preventDefault();b.Editor.Drafts.useDraft();
a.Confluence.Analytics.publish("rte.notification.draft.resume")});e("#draft-messages").find("a.discard-draft").click(function(d){d.stopPropagation();d.preventDefault();b.Editor.Drafts.discardDraft(c.get("existing-draft-id"));a.Confluence.Analytics.publish("rte.notification.draft.discard")});if(c.getBoolean("shared-drafts")){if(c.get("draft-id")!==0&&window.history&&window.history.replaceState){var f=c.get("base-url")+"/pages/resumedraft.action?draftId="+c.get("draft-id")+"&draftShareId="+c.get("draft-share-id");
if(window.location.search.indexOf("grantAccess=true")!==-1){var d;d=window.location.search;if(typeof d==="undefined")d="";else{d.charAt(0)==="?"&&(d=d.substr(1));d=d.split("&").filter(function(a){return a.indexOf("username=")===0||a.indexOf("userFullName=")===0||a.indexOf("accessType=")===0||a.indexOf("grantAccess=")===0||a.indexOf("src.")===0}).join("&")}f=f+("&"+d)}window.history.replaceState(null,"",f)}b.Editor.UI.cancelButton.attr("data-tooltip",a.I18n.getText("editor.shared.draft.done.desc"));
b.Editor.UI.cancelButton.on("click",function(){a.Confluence.Analytics.publish("confluence.editor.done.button.clicked")})}g=setInterval(b.Editor.Drafts.save,+a.params.draftSaveInterval||3E4)});a.bind("rte-destroyed",function(){a.debug("confluence drafts plugin tear down");clearInterval(g)})},getInfo:function(){return{longname:"Confluence Drafts",author:"Atlassian",authorurl:"http://www.atlassian.com",version:f.majorVersion+"."+f.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/confluencedrafts/editor_plugin_src",function(e){var a=require("tinymce");a.create("tinymce.plugins.ConfluenceDrafts",e);a.PluginManager.add("confluencedrafts",a.plugins.ConfluenceDrafts)});