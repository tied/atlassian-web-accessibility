define("confluence-editor/tinymce3/plugins/autocomplete-macro/editor_plugin_src",["tinymce","confluence-editor/tinymce3/plugins/autocomplete-macro/autocomplete-settings-macros"],function(b,a){return{init:function(){a()},getInfo:function(){return{longname:"Auto Complete Macro",author:"Atlassian",authorurl:"http://www.atlassian.com",version:b.majorVersion+"."+b.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/autocomplete-macro/editor_plugin_src",function(b){var a=require("tinymce");a.create("tinymce.plugins.AutoCompleteMacro",b);a.PluginManager.add("autocompletemacro",a.plugins.AutoCompleteMacro)});