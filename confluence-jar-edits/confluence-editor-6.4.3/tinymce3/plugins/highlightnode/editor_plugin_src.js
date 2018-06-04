define('confluence-editor/tinymce3/plugins/highlightnode/editor_plugin_src', [
    'jquery',
    'ajs',
    'document',
    'tinymce'
], function(
    $,
    AJS,
    document,
    tinymce
) {
    "use strict";

    return {
        init : function(ed) {

            AJS.debug("Hightlight Current Node Plugin");

            var includeElements = ['strong', 'em', 'u', 's', 'sub', 'sup', 'a', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre'];
            var commands = {strong: 'Bold', em: 'Italic', u: 'Underline', s: 'Strikethrough', sub: 'subscript', sup: 'superscript'};

            ed.onNodeChange.add(function(ed, cm, n) {
                var $currentElement = $(n);
                var $oldCurrentElement = $(".highlight-marker", ed.getBody());

                // check if we are inside formated node we check if
                // 1. node is actually one of the included elements
                // 2. there were no commands to an editor or formatter to clear current formatting (they enqueue them before actually executing)
                var insideFormatedNode = ($.inArray(n.nodeName.toLowerCase(), includeElements) != -1)
                        && !(n.nodeName.toLowerCase() in commands && !ed.queryCommandState(commands[n.nodeName.toLowerCase()]))
                        && !(!(n.nodeName.toLowerCase() in commands) && !ed.formatter.match(n.nodeName.toLowerCase()));

                if ($currentElement.hasClass("highlight-marker") && insideFormatedNode) {
                    return;
                }

                // clean up the old element
                if ($oldCurrentElement) {
                    $oldCurrentElement.removeClass("highlight-marker");
                }

                // if we are not inside one of the node that needs highlighting
                if (!insideFormatedNode) {
                    return;
                }


                $currentElement.addClass("highlight-marker");
            });

            var removeAllHighlighting = function(content)
            {
                var $highlightedElement = $(".highlight-marker", content);

                // there is supposed to be only one highlightedElement but there was a bug where
                // we didn't clean up it correctly so now they might be more than one
                $highlightedElement.each(function(){
                    $(this).removeClass("highlight-marker");
                });
            };

            $(document).bind("mode-changed", function(e, mode) {
                if (mode === "preview") {
                    removeAllHighlighting($("iframe").contents().find("#content"));
                }
            });

            ed.onSaveContent.add(function(ed, o) {
                var $content = $("<div>" + o.content + "</div>");
                removeAllHighlighting($content);
                o.content = $content[0].innerHTML;
            });

        },

        getInfo : function () {
            return {
                longname : "Atlassian Show Current Node",
                author : "Atlassian",
                authorurl : "http://www.atlassian.com",
                version : tinymce.majorVersion + "." + tinymce.minorVersion
            };
        }
    };
});

require('confluence/module-exporter')
        .safeRequire('confluence-editor/tinymce3/plugins/highlightnode/editor_plugin_src', function(HighlightNodePlugin) {
            var tinymce = require('tinymce');
            var AJS = require('ajs');

            tinymce.create('tinymce.plugins.ShowCurrentNode', HighlightNodePlugin);

            if (AJS.DarkFeatures.isEnabled('highlightnode')) {
                // Register plugin
                tinymce.PluginManager.add("highlightnode", tinymce.plugins.ShowCurrentNode);
            }
        });
