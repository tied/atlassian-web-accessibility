define("confluence-editor/tinymce3/plugins/autocomplete-macro/autocomplete-settings-macros",["jquery","underscore","ajs","tinymce","confluence/legacy"],function(h,n,b,e,d){return function(){function j(c){h("#autocomplete-dropdown .top-menu-item").spin(c)}var f=function(c,a){var g=a.presetMacroMetadata;c.replaceWithSelectedSearchText();g?b.MacroBrowser.hasRequiredParameters(g)||g.alwaysShowConfig?e.confluence.macrobrowser.macroBrowserToolbarButtonClicked(a):(b.Rte.BookmarkManager.storeBookmark(),e.confluence.MacroUtils.insertMacro({contentId:b.Meta.get("content-id")||
"0",macro:{name:g.macroName,body:""}})):e.confluence.macrobrowser.macroBrowserToolbarButtonClicked(a)},k=function(c){if(c.hidden&&!b.MacroBrowser.isHiddenMacroShown(c))return null;var a={className:"autocomplete-macro-"+c.macroName,callback:function(b){f(b,{ignoreEditorSelection:!0,presetMacroMetadata:c})}};c.icon?(a.name=c.title,a.href="#",a.icon=(c.icon.relative?b.params.staticResourceUrlPrefix:"")+c.icon.location):a.html=d.Editor.Autocompleter.Util.dropdownLink(c.title);return a};d.Editor.Autocompleter.Settings["{"]=
{ch:"{",cache:!1,endChars:["}",":","{"],dropDownClassName:"autocomplete-macros",dropDownDelay:0,selectFirstItem:!0,getHeaderText:function(){return b.I18n.getText("editor.autocomplete.macros.header.text")},getAdditionalLinks:function(){return[{className:"dropdown-insert-macro",html:d.Editor.Autocompleter.Util.dropdownLink(b.I18n.getText("editor.autocomplete.macros.dialog.browse"),"dropdown-prevent-highlight","editor-icon"),callback:function(b){var a=b.text();f(b,{searchText:a})}}]},getDataAndRunCallback:function(c,
a,g){function e(a){a.preventDefault();a.stopPropagation();b.trigger("analytics",{name:"autocomplete-macrobrowser.load-retry"});b.MacroBrowser.reset();b.MacroBrowser.preLoadMacro();i.getDataAndRunCallback.apply(i,f)}var d=b.MacroBrowser.getMetadataPromise(),i=this,f=arguments;i.alreadyBinded||(i.alreadyBinded=!0,d.always(function(){var d;if(a){d=[];for(var e=b.MacroBrowser.searchSummaries(a,{keywordsField:"keywordsNoDesc"}),f=0,o=e.length;f<o;f++){var l=k(e[f]);if(l&&d.push(l)==c.maxResults)break}}else{var p=
b.MacroBrowser.metadataList,m=[];h("#macro-insert-list li").each(function(){var b=h(this),a=n.find(p,function(a){return a.macroName===b.attr("data-macro-name")});a&&(a=k(a))&&m.push(a)});d=m}j(!1);g([d],a);i.alreadyBinded=!1}),d.fail(function(){b.trigger("analytics",{name:"autocomplete-macrobrowser.fail-to-load"});b.messages.warning("#autocomplete-dropdown ol:nth(1)",{title:b.I18n.getText("editor.autocomplete.macros.error.load.header"),body:'<p><a id="macro-retry-link" href="#">'+b.I18n.getText("editor.autocomplete.macros.error.load.retrylink")+
"</a></p>"});h("#macro-retry-link").click(e);h("#autocomplete-dropdown ol:nth(1)").show()}));"pending"===d.state()&&(g([],a),j(!0))},update:function(){throw Error("All items in the Macro Autocomplete dropdown must have a callback function");}}}});