/**
 * AMD shim of AJS.DarkFeatures so that other modules in this plugin can depend on it.
 *
 * This module should be removed when an official DarkFeatures module is defined in Confluence core.
 */
define('confluence-ui-components/dark-features',
    [
        'ajs'
    ],
    function (AJS) {
        'use strict';

        return AJS.DarkFeatures;
    });