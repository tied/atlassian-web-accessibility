("undefined"===typeof window?global:window).__5445bbb57d3600b27c6fd8e7cdd87f54=function(){function j(a){return a&&a.__esModule?a:{"default":a}}function u(a){a=(0,e.default)(a);if(!a.hasClass("aui-tabs-responsive-trigger")){var b=(0,e.default)(a.attr("href").match(A)[0]);b.addClass("active-pane").attr("aria-hidden","false").siblings(".tabs-pane").removeClass("active-pane").attr("aria-hidden","true");var c=a.parents(".aui-tabs").find(".aui-tabs-responsive-trigger-item a").attr("aria-controls"),c=(0,
e.default)(document).find("#"+c);c.find("li a").attr("aria-checked",!1).removeClass("checked aui-dropdown2-checked");c.find("li").removeClass("active-tab");a.parent("li.menu-item").addClass("active-tab").siblings(".menu-item").removeClass("active-tab");a.hasClass("aui-tabs-responsive-item")&&(c=b.parent(".aui-tabs").find("li.menu-item:not(.aui-tabs-responsive-trigger-item)"),c.removeClass("active-tab"),c.find("a").removeClass("checked").removeAttr("aria-checked"));a.hasClass("aui-tabs-responsive-item")&&
b.parent(".aui-tabs").find("li.menu-item.aui-tabs-responsive-trigger-item").addClass("active-tab");a.closest(".tabs-menu").find("a").attr("aria-selected","false");a.attr("aria-selected","true");a.trigger("tabSelect",{tab:a,pane:b})}}function v(a){return void 0!==a.attr("data-aui-persist")&&"false"!==a.attr("data-aui-persist")}function w(a){var b=a.attr("id"),a=a.attr("data-aui-persist");return B+(b?b:"")+(a&&"true"!==a?"-"+a:"")}function x(a){m.change((0,e.default)(a.target).closest("a"));a&&a.preventDefault()}
function y(a){a.forEach(function(a,c){var d=(0,e.default)(a),g=d.find(".tabs-menu").first(),f=g.find("li:not(.aui-tabs-responsive-trigger-item)"),h=g.find(".aui-tabs-responsive-trigger").parent(),o=h.find("a"),k=o.attr("aria-controls"),k=(0,e.default)(document).find("#"+k).attr("aria-checked",!1),i=0<k.length,j=l.totalTabsWidth(f,k)>d.outerWidth();!i&&j&&(h=l.createResponsiveDropdownTrigger(g,c),k=l.createResponsiveDropdown(d,c));o.attr("aria-controls","aui-tabs-responsive-dropdown-"+c);o.attr("id",
"aui-tabs-responsive-trigger-"+c);o.attr("href","aui-tabs-responsive-trigger-"+c);k.attr("id","aui-tabs-responsive-dropdown-"+c);j&&(f=l.moveVisibleTabs(f.toArray(),d,h),f=l.totalVisibleTabWidth(f),d=d.outerWidth()-f-h.outerWidth(!0),0<d&&(f=k.find("li"),l.moveInvisibleTabs(f.toArray(),d,h)),k.on("click","a",x),g.is(":visible")&&g.hide().show());i&&!j&&(k.find("li").each(function(){l.moveTabOutOfDropdown((0,e.default)(this),h)}),l.removeResponsiveDropdown(k,h))})}function z(a){var b=(0,e.default)(a);
a.setAttribute("role","application");if(!b.data("aui-tab-events-bound")){var c=b.children("ul.tabs-menu");c.attr("role","tablist");c.children("li").attr("role","presentation");c.find("> .menu-item a").each(function(){var a=(0,e.default)(this),b=a.attr("href");(0,C.default)(a);a.attr("role","tab");(0,e.default)(b).attr("aria-labelledby",a.attr("id"));a.parent().hasClass("active-tab")?a.attr("aria-selected","true"):a.attr("aria-selected","false")});c.on("click","a",x);b.data("aui-tab-events-bound",
!0);[].slice.call(a.querySelectorAll(".tabs-pane")).forEach(D)}}function D(a){a.setAttribute("role","tabpanel");a.setAttribute("aria-hidden",(0,e.default)(a).hasClass("active-pane")?"false":"true")}var p={};"use strict";Object.defineProperty(p,"__esModule",{value:!0});__c6b5725916d210b9653318d2ea2472cb;var q;var i=__c1e961001275c079e48525ad3a48c8c2;if(i&&i.__esModule)q=i;else{var t={};if(null!=i)for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);t.default=i;q=t}var E=j(__ee62e24d4acb40214d4f9e21b1a58bfc),
e=j(__700a145ba3db9966cc95664c892049f8),C=j(__3b7b37131a17b9c12e44694d7b12c1e2);n=j(__28c84e7bb75f6c3b0ba124d57bd69571);var F=j(__9c7e09af5e0b55833c235e1d20ff8617),r=j(__0ac9a2c09f995a9c0a478af8742f59b7),s=window.skateTemplateHtml,A=/#.*/,B="_internal-aui-tabs-",l={totalTabsWidth:function(a,b){var c=this.totalVisibleTabWidth(a),d=0;b.find("li").each(function(a,b){d+=parseInt(b.getAttribute("data-aui-tab-width"))});return c+d},totalVisibleTabWidth:function(a){var b=0;a.each(function(a,d){b+=(0,e.default)(d).outerWidth()});
return b},removeResponsiveDropdown:function(a,b){a.remove();b.remove()},createResponsiveDropdownTrigger:function(a,b){a.append('<li class="menu-item aui-tabs-responsive-trigger-item"><a class="aui-dropdown2-trigger aui-tabs-responsive-trigger aui-dropdown2-trigger-arrowless" id="aui-tabs-responsive-trigger-'+b+'" aria-haspopup="true" aria-controls="aui-tabs-responsive-dropdown-'+b+'" href="aui-tabs-responsive-dropdown-'+b+'">...</a></li>');return a.find(".aui-tabs-responsive-trigger-item")},createResponsiveDropdown:function(a,
b){a.append('<div class="aui-dropdown2 aui-style-default aui-tabs-responsive-dropdown" id="aui-tabs-responsive-dropdown-'+b+'"><ul></ul></div>');return a.find("#aui-tabs-responsive-dropdown-"+b)},findNewVisibleTabs:function(a,b,c){for(var d=0,g=0;d+c<=b&&g<a.length;g++)var f=(0,e.default)(a[g]).outerWidth(!0),d=d+f;return a.slice(0,g-1)},moveVisibleTabs:function(a,b,c){for(var d=c.find("a").attr("aria-controls"),d=(0,e.default)("#"+d),b=this.findNewVisibleTabs(a,b.outerWidth(),c.parent().outerWidth(!0)),
g=b.length-1,f=a.length-1;f>=g;f--){var h=(0,e.default)(a[f]);this.moveTabToResponsiveDropdown(h,d,c)}return(0,e.default)(b)},moveTabToResponsiveDropdown:function(a,b,c){var d=a.find("a");a.attr("data-aui-tab-width",a.outerWidth(!0));d.addClass("aui-dropdown2-radio aui-tabs-responsive-item");a.hasClass("active-tab")&&(d.addClass("aui-dropdown2-checked"),c.addClass("active-tab"));b.find("ul").prepend(a)},moveInvisibleTabs:function(a,b,c){for(var d=0;0<b&&d<a.length;d++){var g=(0,e.default)(a[d]),f=
parseInt(g.attr("data-aui-tab-width"),10);f<b&&this.moveTabOutOfDropdown(g,c);b-=f}},moveTabOutOfDropdown:function(a,b){a.find("a").hasClass("aui-dropdown2-checked")&&(a.addClass("active-tab"),b.removeClass("active-tab"));a.children("a").removeClass("aui-dropdown2-radio aui-tabs-responsive-item aui-dropdown2-checked");b.before(a)}},m={setup:function(){var a=(0,E.default)(y,200),b=(0,e.default)('.aui-tabs.horizontal-tabs[data-aui-responsive]:not([data-aui-responsive="false"]), aui-tabs[responsive]:not([responsive="false"])').toArray();
y(b);(0,e.default)(window).resize(function(){a(b)});var c=(0,e.default)(".aui-tabs:not(.aui-tabs-disabled)");c.each(function(){z(this)});for(var d=0,g=c.length;d<g;d++){var f=c.eq(d),h=c.get(d);if(v(f)&&window.localStorage)if(f.attr("id")){if(f=window.localStorage.getItem(w(f)))(h=h.querySelector('a[href$="'+f+'"]'))&&u(h)}else q.warn("A tab group must specify an id attribute if it specifies data-aui-persist.")}(0,e.default)(".aui-tabs.vertical-tabs").find("a").each(function(){var a=(0,e.default)(this);
a.attr("title")||(0,F.default)(a)&&a.attr("title",a.text())})},change:function(a){var a=(0,e.default)(a),b=a.closest(".aui-tabs");u(a);v(b)&&window.localStorage&&(b=a.closest(".aui-tabs"),b.attr("id")?(a=a.attr("href"))&&window.localStorage.setItem(w(b),a):q.warn("A tab group must specify an id attribute if it specifies data-aui-persist."))}};(0,e.default)(m.setup);(0,r.default)("aui-tabs",{created:function(a){(0,e.default)(a).addClass("aui-tabs horizontal-tabs");r.default.init(a);z(a)},template:s('<ul class="tabs-menu">',
'<content select="li[is=aui-tabs-tab]"></content>',"</ul>",'<content select="aui-tabs-pane"></content>'),prototype:{select:function(a){a=(0,e.default)(this.querySelectorAll("aui-tabs-pane")).index(a);-1<a&&m.change(this.querySelectorAll("li[is=aui-tabs-tab]")[a].children[0]);return this}}});var G=(0,r.default)("aui-tabs-tab",{"extends":"li",created:function(a){(0,e.default)(a).addClass("menu-item")},template:s('<a href="#">',"<strong>","<content></content>","</strong>","</a>")});(0,r.default)("aui-tabs-pane",
{attached:function(a){var b=(0,e.default)((0,e.default)(a).closest("aui-tabs").get(0)),c=(0,e.default)(a),b=b.find("aui-tabs-pane").index(c),d=new G,g=(0,e.default)(d);c.addClass("tabs-pane");d.firstChild.setAttribute("href","#"+a.id);s.wrap(d).textContent=c.attr("title");0===b&&c.addClass("active-pane");c.hasClass("active-pane")&&g.addClass("active-tab");c.siblings("ul").append(d)},template:s("<content></content>")});(0,n.default)("tabs",m);p.default=m;return p=p["default"]}.call(this);