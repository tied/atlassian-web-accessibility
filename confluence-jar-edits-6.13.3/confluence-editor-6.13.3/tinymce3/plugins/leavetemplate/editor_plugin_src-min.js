define("confluence-editor/tinymce3/plugins/leavetemplate/editor_plugin_src",["jquery","ajs","confluence/legacy","window","tinymce"],function(c,a,e,f,b){return{init:function(d){function b(){if(e.Editor.UI.isFormEnabled()&&d.isDirty()&&!e.Editor.isEmpty())return a.I18n.getText("unsaved.template.lost")}d.onInit.add(function(){c(f).bind("beforeunload",b)});d.onRemove.add(function(){c(f).unbind("beforeunload",b)})},getInfo:function(){return{longname:"Confluence Leave Template",author:"Atlassian",authorurl:"http://www.atlassian.com",
version:b.majorVersion+"."+b.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/leavetemplate/editor_plugin_src",function(c){var a=require("tinymce");a.create("tinymce.plugins.ConfluenceLeaveTemplate",c);a.PluginManager.add("confluenceleavetemplate",a.plugins.ConfluenceLeaveTemplate)});