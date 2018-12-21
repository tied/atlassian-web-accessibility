define("confluence-editor/files/file-list/file-list-collection",["backbone","confluence-editor/files/file-item/file-item-model","underscore"],function(c,d,e){return c.Collection.extend({model:d,clearSelection:function(){this.each(function(a){a.get("isSelect")&&a.set("isSelect",!1)});this.trigger("clear.selection")},getAllSelectItems:function(){return this.filter(function(a){return a.get("isSelect")})},setSelection:function(a){e.each(a,function(a){return a.set("isSelect",!0)})},resetFiles:function(a){this.reset();
for(var b=0;b<a.length;b++)this.addFile(a[b])},addFile:function(a){a=this.add(a);this.trigger("add-file",a.at(a.length-1))},removeFile:function(a){this.remove(a);this.trigger("remove-file",a)},replaceFile:function(a,b){this.remove(a);this.add(b);this.trigger("replace-file",a,b)}})});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/files/file-list/file-list-collection","Confluence.Editor.FileDialog.FileListCollection");