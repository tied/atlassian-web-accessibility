("undefined"===typeof window?global:window).__43174540fe92a0d9aeac77ff3a236665=function(){function b(a){return a&&a.__esModule?a:{"default":a}}function e(a){a=(0,c.default)((0,g.default)('<div class="aui-banner aui-banner-{type}" role="banner">{body}</div>').fill({type:"error","body:html":a.body||""}).toString());(0,c.default)("#"+f).find(".aui-banner").get().forEach(function(a){"true"===a.getAttribute("aria-hidden")&&(0,c.default)(a).remove()});var b=(0,c.default)("#"+f);if(!b.length)throw Error("You must implement the application header");
a.prependTo(b);(0,h.recomputeStyle)(a);a.attr("aria-hidden","false");return a[0]}var d={};"use strict";Object.defineProperty(d,"__esModule",{value:!0});var c=b(__700a145ba3db9966cc95664c892049f8),h=__6debdf74a4da8ac8391a98223e1bae21,i=b(__65ca28a9d6b0f244027266ff8e6a6d1c),j=b(__28c84e7bb75f6c3b0ba124d57bd69571),g=b(__43d4585c6a21591b4ceac1b326c09405),f="header";(0,i.default)("aui/banner",e);(0,j.default)("banner",e);d.default=e;return d=d["default"]}.call(this);