require(["ajs"],function(a){a.bind("init.rte",function(){a.bind("rte-autocomplete-on-show",function(d,c){"!"===c.triggerChar&&a.trigger("analytics",{name:"confluence.editor.autocomplete.trigger",data:{type:"media"}})});a.bind("rte-autocomplete-on-insert",function(d,c){if("!"===c.triggerChar){var b=c.selectedFile;b&&b.name&&(b={extension:b.name.split(".").pop(),type:"media"},a.trigger("analytics",{name:"confluence.editor.autocomplete.insert",data:b}))}})});a.bind("rte-destroyed",function(){a.unbind("rte-autocomplete-on-insert");
a.unbind("rte-autocomplete-on-show")})});