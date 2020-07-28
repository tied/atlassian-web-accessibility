/**
 * @module confluence-labels/labels/pages/view-label
 */
define('confluence-labels/labels/pages/view-label', [
    'jquery'
], function(
    $
) {
    'use strict';

    return function() {
        $('#view-all-content-with-label').click(function() {
            return false;
        });
    };
});

require('confluence/module-exporter').safeRequire('confluence-labels/labels/pages/view-label', function(ViewLabel) {
    'use strict';

    require('ajs').toInit(ViewLabel);
});
