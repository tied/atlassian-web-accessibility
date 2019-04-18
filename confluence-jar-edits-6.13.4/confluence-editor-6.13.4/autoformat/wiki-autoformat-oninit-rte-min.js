define("confluence-editor/wiki-autoformat",["ajs","jquery","document","window"],function(k,j,m,u){var c=function(v,w){function n(a){return j("<div>").append(a.cloneNode(!0)).html()}function x(a,b,g){if(!b)throw Error("text node is null");3!==b.nodeType&&(b=b.childNodes[g-1],g=b.length);for(;b&&3===b.nodeType;b=b.previousSibling){-1==g&&(g=b.nodeValue.length);if(g>a)return{container:b,offset:g-a};if(g==a){g=0;for(a=b.parentNode;b=b.previousSibling;)g++;return{container:a,offset:g}}a-=g;g=-1}return null}
function p(a){var b,g;if(!a||!a.collapsed)throw Error("range is null or not collapsed");b=a.startContainer;g=a.startOffset;if(1===b.nodeType&&0<g)if(b=b.childNodes[a.startOffset-1],3===b.nodeType)g=b.nodeValue.length;else return"";else if(3!==b.nodeType)return"";a=b.nodeValue.substring(0,g);for(b=b.previousSibling;b&&3===b.nodeType;b=b.previousSibling)a=b.nodeValue+a;return a}function i(a,b,g,d){return{handles:function(b){var g=!1,b=b.selection.getRng(!0),g=b.commonAncestorContainer||{};return!b.collapsed||
j(g).closest("pre,.text-placeholder").length||d&&j(g).closest(d).length?!1:g=a.test(p(b))},execute:function(d,h,f){var c,e,i=1;c=j.browser.msie?h.keyCode:h.which;32===c?d.execCommand("mceInsertContent",!1,"&nbsp;"):d.execCommand("mceInsertContent",!1,String.fromCharCode(c));d.undoManager.beforeChange();d.undoManager.add();c=d.selection.getRng(!0);e=p(c);"|"==e[e.length-1]&&(e+=" ",i=0);e=a.exec(e.substring(0,e.length-1));i=x(e[1].length+i,c.commonAncestorContainer,c.startOffset);c.setStart(i.container,
i.offset);i=j(c.commonAncestorContainer);d.selection.setRng(c);i.closest(".wysiwyg-macro-body").length&&c.toString()==i.text()?(i[0].innerHTML="<br>",d.selection.select(i[0].childNodes[0]),d.selection.collapse(!0)):d.execCommand("delete",!1,{},{skip_undo:!0});b(e,d.selection.getRng(!0));q=d.selection.getRng(!0);if(g)return f.preventDefault(),f.stopPropagation(),o.dom.Event.cancel(h),k.Rte.showElement(q.startContainer),!1}}}function r(){this.handlers={}}function e(a,b,g,c,e){var a=a.charCodeAt(0),
f=k.Rte.getResourceUrlPrefix()+"/images/icons/emoticons/"+e,b=i(b,function(){var a=d.dom.createHTML("img",{src:f,alt:d.getLang(c),title:d.getLang(c),border:0,"class":"emoticon emoticon-"+g,"data-emoticon-name":g});d.execCommand("mceInsertContent",!1,a,{skip_undo:!0})},!0);this.imagePath=f;h.registerHandler(a,b)}function s(a,b){var g=d.formatter.get(a)[0],g=d.dom.create(g.inline,{style:g.styles});g.appendChild(m.createTextNode(b+"{$caret}"));d.execCommand("mceInsertContent",!1,n(g),{skip_undo:!0});
d.formatter.remove(a)}var o=require("tinymce"),q;if(!k.Meta.get("remote-user")||!k.Meta.get("confluence.prefs.editor.disable.autoformat")){r.prototype={registerHandler:function(a,b){this.handlers[a]||(this.handlers[a]=[]);this.handlers[a].push(b)},executeHandlers:function(a,b,d,c){var e=!0;j.each(this.handlers[a]||[],function(a,f){if(f.handles(b))return e=f.execute(b,d,c),!1});return e}};var d=w.editor,h=new r,f=[new e(")",c.regularExpressions._REGEXES_EMOTICON.SMILE,"smile","emotions_dlg.smile",
"smile.svg"),new e("(",c.regularExpressions._REGEXES_EMOTICON.SAD,"sad","emotions_dlg.sad","sad.svg"),new e("P",c.regularExpressions._REGEXES_EMOTICON.CHEEKY,"cheeky","emotions_dlg.tongue","tongue.svg"),new e("p",c.regularExpressions._REGEXES_EMOTICON.CHEEKY_2,"cheeky","emotions_dlg.tongue","tongue.svg"),new e("D",c.regularExpressions._REGEXES_EMOTICON.LAUGH,"laugh","emotions_dlg.biggrin","biggrin.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.WINK,"wink","emotions_dlg.wink","wink.svg"),new e(")",
c.regularExpressions._REGEXES_EMOTICON.THUMBS_UP,"thumbs-up","emotions_dlg.thumbs_up","thumbs_up.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.THUMBS_DOWN,"thumbs-down","emotions_dlg.thumbs_down","thumbs_down.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.INFORMATION,"information","emotions_dlg.information","information.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.TICK,"tick","emotions_dlg.check","check.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.CROSS,"cross",
"emotions_dlg.error","error.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.WARNING,"warning","emotions_dlg.warning","warning.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.PLUS,"plus","emotions_dlg.add","add.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.MINUS,"minus","emotions_dlg.forbidden","forbidden.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.QUESTION,"question","emotions_dlg.help_16","help_16.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.LIGHT_ON,"light-on",
"emotions_dlg.lightbulb_on","lightbulb_on.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.LIGHT_OFF,"light-off","emotions_dlg.lightbulb","lightbulb.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.YELLOW_STAR,"yellow-star","emotions_dlg.star_yellow","star_yellow.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.YELLOW_STAR_2,"yellow-star","emotions_dlg.star_yellow","star_yellow.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.RED_STAR,"red-star","emotions_dlg.star_red","star_red.svg"),
new e(")",c.regularExpressions._REGEXES_EMOTICON.GREEN_STAR,"green-star","emotions_dlg.star_green","star_green.svg"),new e(")",c.regularExpressions._REGEXES_EMOTICON.BLUE_STAR,"blue-star","emotions_dlg.star_blue","star_blue.svg"),new e("3",c.regularExpressions._REGEXES_EMOTICON.HEART,"heart","emotions_dlg.heart","heart.svg"),new e("3",c.regularExpressions._REGEXES_EMOTICON.BROKEN_HEAR,"broken-heart","emotions_dlg.broken_heart","broken_heart.svg")],l,t=[];for(l=0;l<f.length;l++)t[l]=new u.Image,t[l].src=
f[l].imagePath;j.each({"*":"bold",_:"italic","~":"subscript","^":"superscript","+":"underline","-":"strikethrough"},function(a,b){var d=RegExp("(?:[\\s\\xA0\\u200b\\uFEFF]+|^)(\\"+a+"(?=[^\\s"+a+"])([^"+a+"]*?[^\\s]))$");h.registerHandler(a.charCodeAt(0),i(d,function(a){s(b,a[2])},!0))});d.formatter.register("code",{inline:"code"});h.registerHandler(125,i(/(?:[\s\xA0\u200b]+|^)({{(?=[^\s])([^}]*?[^\s])})$/,function(a){s("code",a[2])},!0));for(l=1;6>=l;l++)(function(a){h.registerHandler(32,i(RegExp("^\\u200b?(h"+
a+"\\.)$"),function(){d.execCommand("formatBlock",!1,"h"+a,{skip_undo:!0})},!0))})(l);h.registerHandler(32,i(/^\u200b?(bq\.)$/,function(){d.execCommand("formatBlock",!1,"blockquote",{skip_undo:!0})},!0));h.registerHandler(32,i(/^\u200b?(\*)$/,function(){d.plugins.lists.applyList("UL","OL")},!0));h.registerHandler(32,i(/^\u200b?(\#)$/,function(){d.plugins.lists.applyList("OL","UL")},!0));h.registerHandler(32,i(/^\u200b?(1\.)$/,function(){d.plugins.lists.applyList("OL","UL")},!0));h.registerHandler(32,
i(/^\u200b?(\-)$/,function(){var a=d.dom,b;d.plugins.lists.applyList("UL","OL");if(b=a.getParent(d.selection.getNode(),"OL,UL"))a.setStyles(b,{listStyleType:"square"}),b.removeAttribute("data-mce-style")},!0));k.trigger("confluence.editor.registerHandlers",{handlerManager:h,createHandler:i,ed:d});f=i(/((\<\-\-?\>)([^\s-]*))$/,function(a){d.execCommand("mceInsertContent",!1,"\u2194"+a[3],{skip_undo:!0})},!1);h.registerHandler(32,f);h.registerHandler(13,f);f=i(/((\-\-?\>)([^\s-]*))$/,function(a){d.execCommand("mceInsertContent",
!1,"\u2192"+a[3],{skip_undo:!0})},!1);h.registerHandler(32,f);h.registerHandler(13,f);f=i(/((\<\-\-?)([^\s-]*))$/,function(a){d.execCommand("mceInsertContent",!1,"\u2190"+a[3],{skip_undo:!0})},!1);h.registerHandler(32,f);h.registerHandler(13,f);h.registerHandler(32,i(/[^-]*[\s](\-\-\-?)$/,function(a){d.execCommand("mceInsertContent",!1,2===a[1].length?"\u2013":"\u2014",{skip_undo:!0})},!1));f=i(/(([^\s-]+)(\-\-\-?)([^\s-]+))$/,function(a){d.execCommand("mceInsertContent",!1,a[2]+(2===a[3].length?
"\u2013":"\u2014")+a[4],{skip_undo:!0})},!1);h.registerHandler(32,f);h.registerHandler(13,f);f=i(/^\u200b?(\-\-\-\-)$/,function(){d.execCommand("mceInsertContent",!1,"<hr />",{skip_undo:!0})},!0);h.registerHandler(32,f);h.registerHandler(13,f);h.registerHandler(13,i(/(^\u200b?\|\|\s*(?:[^|]*\s?\|\|\s?)+$)/,function(a){var b="<table class='confluenceTable'><tr>",g="",c=!0,a=j(a[1].slice(2,-2).split("||")).map(function(a){a=j.trim(this);c=c&&""==a;return a});c&&(a[0]=k.I18n.getText("editor.autoformat.sampletext.firstcell"));
for(var e=0,f=a.length;e<f;e++)b+="<th class='confluenceTh'>"+a[e]+"</th>",g+="<td class='confluenceTd'>"+k.Rte.ZERO_WIDTH_WHITESPACE+"</td>";d.execCommand("mceInsertContent",!1,b+("</tr><tr>"+g+"</tr></table>"),{skip_undo:!0});d.selection.select(j(d.selection.getRng(!0).commonAncestorContainer).parents("table").find(c?"th":"td")[0].childNodes[0]);j(d.selection.getRng().startContainer).parent().closest('[contenteditable="true"]').focus()},!0));h.registerHandler(13,i(/(^\u200b?\|\s?(?:[^|]*\s?\|\s?)+$)/,
function(a){var b="<table class='confluenceTable'><tr>",c=!0,a=j(a[1].slice(1,-1).split("|")).map(function(a){a=j.trim(this);c=c&&""==a;return a});c&&(a[0]=k.I18n.getText("editor.autoformat.sampletext.firstcell"));for(var e=0,f=a.length;e<f;e++)b+="<td class='confluenceTd'>"+a[e]+"</td>";d.execCommand("mceInsertContent",!1,b+"</tr></table>",{skip_undo:!0});c&&d.selection.select(j(d.selection.getRng(!0).commonAncestorContainer).parents("table").find("td")[0].childNodes[0]);j(d.selection.getRng().startContainer).parent().closest('[contenteditable="true"]').focus()},
!0));f=i(/\b(((https?|ftp):\/\/|(www\.))[\w\.\$\-_\+!\*'\(\),/\?:@=&%#~;\[\]]+)$/,function(a){var b=d.dom.create("a",{href:a[3]?a[1]:"http://"+a[1]});b.appendChild(m.createTextNode(a[1]));d.execCommand("mceInsertContent",!1,n(b),{skip_undo:!0});d.getDoc().execCommand("unlink",!1,{})},!1,"a");h.registerHandler(32,f);h.registerHandler(13,f);f=i(/\b((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)$/i,
function(a){var b=d.dom.create("a",{href:"mailto:"+a[1]});b.appendChild(m.createTextNode(a[1]));d.execCommand("mceInsertContent",!1,n(b),{skip_undo:!0});d.getDoc().execCommand("unlink",!1,{})},!1,"a");h.registerHandler(32,f);h.registerHandler(13,f);f=function(a,b){var c=i(a,function(){d.execCommand("mceInsertContent",!1,b,{skip_undo:!0})},!1);h.registerHandler(32,c);h.registerHandler(13,c)};f(/(?:\b|^)(jira)$/,"Jira");f(/(?:\b|^)(bitbucket)$/,"Bitbucket");f(/(?:\b|^)(atlassian)$/,"Atlassian");f(/(?:\b|^)(hipchat)$/,
"Hipchat");f(/(?:\b|^)(statuspage)$/,"Statuspage");f(/(?:\b|^)(sourcetree)$/,"Sourcetree");f(/(?:\b|^)(trello)$/,"Trello");j.each({"]":c.regularExpressions._REGEXES.WIKI_LINK,"}":c.regularExpressions._REGEXES.WIKI_MACRO,"!":c.regularExpressions._REGEXES.WIKI_EMBED},function(a,b){h.registerHandler(a.charCodeAt(0),i(b,function(b){var c=b[1]+a,b={type:"POST",contentType:"application/json; charset=utf-8",url:k.Meta.get("context-path")+"/rest/tinymce/1/wikixhtmlconverter",data:j.toJSON({wiki:c,entityId:k.Meta.get("content-id"),
spaceKey:k.Meta.get("space-key"),suppressFirstParagraph:!0}),dataType:"text",timeout:5E3};"}"==a?o.confluence.MacroUtils.insertMacro(b):"!"==a?j.ajax(b).done(function(a){!c===a?o.confluence.ImageUtils.insertImagePlaceholder(a):d.execCommand("mceInsertContent",!1,a,{skip_undo:!0})}):j.ajax(b).done(function(a){d.execCommand("mceInsertContent",!1,a,{skip_undo:!0})})},!0))});d.onKeyPress.addToTop(function(a,b){return h.executeHandlers(j.browser.msie?b.keyCode:b.which,a,b,v)});return{}}};c.regularExpressions=
{_REGEXES:{WIKI_MACRO:/(?:\s|^)(\{[^{^}]+)$/,WIKI_LINK:/(?:\s|^)(\[[^\[^\]]+)$/,WIKI_EMBED:/(?:\s|^)(![^!]{5,})$/},_REGEXES_EMOTICON:{SMILE:/\B(:-?)$/,SAD:/\B(:-?)$/,CHEEKY:/\B(:-?)$/,CHEEKY_2:/\B(:-?)$/,LAUGH:/\B(:-?)$/,WINK:/\B(;-?)$/,THUMBS_UP:/\B(\(y)$/,THUMBS_DOWN:/\B(\(n)$/,INFORMATION:/\B(\(i)$/,TICK:/\B(\(\/)$/,CROSS:/\B(\(x)$/,WARNING:/\B(\(!)$/,PLUS:/\B(\(\+)$/,MINUS:/\B(\(-)$/,QUESTION:/\B(\(\?)$/,LIGHT_ON:/\B(\(on)$/,LIGHT_OFF:/\B(\(off)$/,YELLOW_STAR:/\B(\(\*)$/,YELLOW_STAR_2:/\B(\(\*y)$/,
RED_STAR:/\B(\(\*r)$/,GREEN_STAR:/\B(\(\*g)$/,BLUE_STAR:/\B(\(\*b)$/,HEART:/\B(<)$/,BROKEN_HEAR:/\B(<\/)$/}};return c});require("confluence/module-exporter").safeRequire("confluence-editor/wiki-autoformat",function(k){require("confluence/module-exporter").namespace("AJS.Rte.autoformat",k.regularExpressions);require("ajs").bind("init.rte",k)});