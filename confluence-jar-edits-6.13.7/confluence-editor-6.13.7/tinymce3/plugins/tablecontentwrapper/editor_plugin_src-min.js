define("confluence-editor/tinymce3/plugins/tablecontentwrapper/editor_plugin_src",["jquery","ajs","tinymce"],function(e,d){var i=["img:not(.editor-inline-macro, .emoticon)"].concat(["time.non-editable",".editor-inline-macro","a.confluence-link[data-linked-resource-type='userinfo']"]).concat([".wysiwyg-macro"]).join(",");return{init:function(g){d.bind("rte-ready",function(){e(g.dom.select("table.confluenceTable:not(.wrapped)")).each(function(d,f){e(f).addClass("wrapped").find("> tbody > tr > th, > tbody > tr > td, > thead > tr > th").each(function(b,
c){var a=e(c);!a.find("> .content-wrapper").length&&a.find(i).length&&a.wrapInner("<div class='content-wrapper'>")})})});g.onChange.add(function(){function h(){d.log("confluence-editor/tinymce3/plugins/tablecontentwrapper/editor_plugin_src: saveBookmark()");return f.getBookmark()}var f=g.selection,b=f.getNode(),c=e(b);if(b&&c.closest("table.confluenceTable").not("table.confluenceTable table.confluenceTable").length){b=f.getRng();if(c.is("tr")&&e(b.startContainer).is("tr")&&b.collapsed){var a=c.find(">td, >th").first(),
a=a.find(":first-child:not(.content-wrapper)")[0]||a[0].firstChild;b.setStart(a,0);b.setEnd(a,0);f.setRng(b);d.log("confluence-editor/tinymce3/plugins/tablecontentwrapper/editor_plugin_src: fixCursorPosition()")}a=c.closest("table.confluenceTable > tbody > tr > th, table.confluenceTable > tbody > tr > td, table.confluenceTable > thead > tr > th");if(a.find(i).length){b=a.find("> .content-wrapper");if(b.length){c=h(c);for(a=0;a<b.length;a++)b.eq(a).find("> p, > table, > ul, > ol").length||b.eq(a).wrapInner("<p/>"),
0<a&&(b.eq(0).append(b.eq(a).children()),b.eq(a).remove())}else a.find("> p").length?(c=h(c),a.wrapInner("<div class='content-wrapper'>")):(c=h(c),a.wrapInner("<p/>").wrapInner("<div class='content-wrapper'>"));d.log("confluence-editor/tinymce3/plugins/tablecontentwrapper/editor_plugin_src: restoreBookmark()");f.moveToBookmark(c);d.Rte.BookmarkManager.storeBookmark()}}e(g.getWin().document).find(".content-wrapper:empty").remove()})},getInfo:function(){return{longname:"Table Content Wrapper Plugin",
author:"Atlassian",authorurl:"http://www.atlassian.com",version:"1.0"}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/tablecontentwrapper/editor_plugin_src",function(e){var d=require("tinymce");require("ajs").DarkFeatures.isEnabled("confluence.table.resizable")&&(d.create("tinymce.plugins.TableContentWrapperPlugin",e),d.PluginManager.add("tableContentWrapper",d.plugins.TableContentWrapperPlugin))});