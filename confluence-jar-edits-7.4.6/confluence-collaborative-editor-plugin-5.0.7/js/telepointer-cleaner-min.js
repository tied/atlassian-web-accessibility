define("confluence-collaborative-editor-plugin/telepointer-cleaner",["confluence-editor-reliable-save/reliable-save","jquery"],function(a,b){var c=function(d){var e=b("<div>");e.append(d);e.find(".synchrony-container, .synchrony-tp").remove();return e.html()};a.registerCleanupFunction(c)});