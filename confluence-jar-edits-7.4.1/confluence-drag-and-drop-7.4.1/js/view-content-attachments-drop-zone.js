/**
 * @module confluence-drag-and-drop/view-content-attachments-drop-zone
 */
define('confluence-drag-and-drop/view-content-attachments-drop-zone', [
    'ajs'
], function(
    AJS
) {
    'use strict';

    return function($) {
        var $extensionContainer = $('#extension-container');
        if ($extensionContainer.length) {
            var $dropZone = $(AJS.DragAndDrop.Templates.dropZone());
            $extensionContainer.append($dropZone);

            AJS.DragAndDropUtils.bindDragEnter($dropZone[0], function() {
                $dropZone.addClass('drop-zone-on-hover');
            });
            AJS.DragAndDropUtils.bindDragOver($dropZone[0], function() {
                $dropZone.addClass('drop-zone-on-hover');
            });
            AJS.DragAndDropUtils.bindDragLeave($dropZone[0], function() {
                $dropZone.removeClass('drop-zone-on-hover');
            });
        }
    };
});

require('confluence/module-exporter').safeRequire('confluence-drag-and-drop/view-content-attachments-drop-zone', function(ViewContentAttachmentsDropZone) {
    'use strict';

    require('ajs').toInit(ViewContentAttachmentsDropZone);
});
