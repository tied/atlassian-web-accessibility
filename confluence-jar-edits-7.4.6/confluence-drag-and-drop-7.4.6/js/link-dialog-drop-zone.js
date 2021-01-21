/**
 * @module confluence-drag-and-drop/link-dialog-drop-zone
 */
define('confluence-drag-and-drop/link-dialog-drop-zone', [
    'ajs'
], function(
    AJS
) {
    'use strict';

    return function($) {
        AJS.bind('dialog-shown.link-browser', function(e, linkBrowser) {
            AJS.DragAndDropUtils.bindDrop($('#insert-link-dialog')[0], function(e) {
                // for now we just want to stop anyone dropping anythign on the link dialog
                e.preventDefault();
                e.stopPropagation();
            });
        });
    };
});

require('confluence/module-exporter').safeRequire('confluence-drag-and-drop/link-dialog-drop-zone', function(LinkDialogDropZone) {
    'use strict';

    require('ajs').toInit(LinkDialogDropZone);
});
