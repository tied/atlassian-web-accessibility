define("confluence-ui-components/js/cql/internal/cql-special-spaces",["underscore"],function(c){var b={conf_current:"currentSpace()",conf_favorites:"favourite",conf_global:"global",conf_personal:"personal"};var f=c.invert(b);function d(g){if(g==="search-screen"){return c.omit(b,"conf_current")}return b}function a(g){return c.keys(d(g))}function e(g){return f[g]}return{getMap:d,getKeys:a,getUIValue:e}});