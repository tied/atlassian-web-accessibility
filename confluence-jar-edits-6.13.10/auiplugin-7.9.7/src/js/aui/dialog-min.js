("undefined"==typeof window?global:window).__bc50e12d2af94e34822ae0035ae0e67f=function(){var t={},e=t;Object.defineProperty(e,"__esModule",{value:!0}),e.popup=e.Dialog=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=r(__700a145ba3db9966cc95664c892049f8),o=r(__e246bf93af36eb4453f35afeb1c302d9),a=d(__c1e961001275c079e48525ad3a48c8c2),h=d(__921ad9514d56376fef992861d9ec0f51),s=__51139989be9b25b15c1774d709ce985b,u=__4c4f13d92d5dcb8f12059ce701946463,p=__8741535334cf9725b62821139abd6dba,l=r(__28c84e7bb75f6c3b0ba124d57bd69571);function d(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function r(t){return t&&t.__esModule?t:{default:t}}function c(t){var e={width:800,height:600,closeOnOutsideClick:!1,keypressListener:function(t){t.keyCode===o.default.ESCAPE&&a.is(":visible")&&r.hide()}};"object"!==(void 0===t?"undefined":i(t))&&(t={width:arguments[0],height:arguments[1],id:arguments[2]},t=n.default.extend({},t,arguments[3])),t=n.default.extend({},e,t);var a=(0,n.default)("<div></div>").addClass("aui-popup");t.id&&a.attr("id",t.id);var h=3e3;(0,n.default)(".aui-dialog").each(function(){var t=(0,n.default)(this);h=t.css("z-index")>h?t.css("z-index"):h});var s=function e(i,n){return t.width=i=i||t.width,t.height=n=n||t.height,a.css({marginTop:-Math.round(n/2)+"px",marginLeft:-Math.round(i/2)+"px",width:i,height:n,"z-index":parseInt(h,10)+2}),e}(t.width,t.height);(0,n.default)("body").append(a),a.hide(),(0,p.enable)(a);var l=(0,n.default)(".aui-blanket"),d=function(t,e){var i=(0,n.default)(t,e);return!!i.length&&(i.focus(),!0)},r={changeSize:function(e,i){(e&&e!=t.width||i&&i!=t.height)&&s(e,i),this.show()},show:function(){var e=function(){(0,n.default)(document).off("keydown",t.keypressListener).on("keydown",t.keypressListener),(0,u.dim)(),0!==(l=(0,n.default)(".aui-blanket")).length&&t.closeOnOutsideClick&&l.click(function(){a.is(":visible")&&r.hide()}),a.show(),a.attr("aria-hidden","false"),c.current=this,function(e){if(0===(0,n.default)(".dialog-page-body",e).find(":focus").length){if(t.focusSelector)return d(t.focusSelector,e);d(":input:visible:enabled:first",(0,n.default)(".dialog-page-body",e))||d(":input:visible:enabled:first",(0,n.default)(".dialog-button-panel",e))||d(":input:visible:enabled:first",(0,n.default)(".dialog-page-menu",e))}}(a),(0,n.default)(document).trigger("showLayer",["popup",this])};e.call(this),this.show=e},hide:function(){(0,n.default)(document).unbind("keydown",t.keypressListener),l.unbind(),this.element.hide(),0===(0,n.default)(".aui-dialog:visible").length&&(0,u.undim)();var e=document.activeElement;this.element.has(e).length&&e.blur(),(0,n.default)(document).trigger("hideLayer",["popup",this]),c.current=null,this.enable()},element:a,remove:function(){a.remove(),this.element=null},disable:function(){this.disabled||(this.popupBlanket=(0,n.default)("<div class='dialog-blanket'> </div>").css({height:a.height(),width:a.width()}),a.append(this.popupBlanket),this.disabled=!0)},enable:function(){this.disabled&&(this.disabled=!1,this.popupBlanket.remove(),this.popupBlanket=null)}};return r}var g=function(){function t(t,e,i,o){t.buttonpanel||t.addButtonPanel(),this.page=t,this.onclick=i,this._onclick=function(e){return!0===i.call(this,t.dialog,t,e)},this.item=(0,n.default)("<button></button>").html(e).addClass("button-panel-button"),o&&this.item.addClass(o),"function"==typeof i&&this.item.click(this._onclick),t.buttonpanel.append(this.item),this.id=t.button.length,t.button[this.id]=this}function e(t,e,i,o,a){t.buttonpanel||t.addButtonPanel(),a||(a="#"),this.page=t,this.onclick=i,this._onclick=function(e){return!0===i.call(this,t.dialog,t,e)},this.item=(0,n.default)("<a></a>").html(e).attr("href",a).addClass("button-panel-link"),o&&this.item.addClass(o),"function"==typeof i&&this.item.click(this._onclick),t.buttonpanel.append(this.item),this.id=t.button.length,t.button[this.id]=this}function i(t,e){var i="left"==t?-1:1;return function(t){var n=this.page[e];if(this.id!=(1==i?n.length-1:0)){i*=t||1,n[this.id+i].item[i<0?"before":"after"](this.item),n.splice(this.id,1),n.splice(this.id+i,0,this);for(var o=0,a=n.length;o<a;o++)"panel"==e&&this.page.curtab==n[o].id&&(this.page.curtab=o),n[o].id=o}return this}}function o(t){return function(){this.page[t].splice(this.id,1);for(var e=0,i=this.page[t].length;e<i;e++)this.page[t][e].id=e;this.item.remove()}}t.prototype.moveUp=t.prototype.moveLeft=i("left","button"),t.prototype.moveDown=t.prototype.moveRight=i("right","button"),t.prototype.remove=o("button"),t.prototype.html=function(t){return this.item.html(t)},t.prototype.onclick=function(t){var e=this;if(void 0===t)return this.onclick;this.item.unbind("click",this._onclick),this._onclick=function(i){return!0===t.call(this,e.page.dialog,e.page,i)},"function"==typeof t&&this.item.click(this._onclick)};var h=function(t,e,i,o,h){i instanceof n.default||(i=(0,n.default)(i)),this.dialog=t.dialog,this.page=t,this.id=t.panel.length,this.button=(0,n.default)("<button></button>").html(e).addClass("item-button"),h&&(this.button[0].id=h),this.item=(0,n.default)("<li></li>").append(this.button).addClass("page-menu-item"),this.body=(0,n.default)("<div></div>").append(i).addClass("dialog-panel-body").attr("tabindex","-1").css("height",t.dialog.height+"px"),this.padding=20,o&&this.body.addClass(o);var s=t.panel.length,u=this;t.menu.append(this.item),t.body.append(this.body),t.panel[s]=this;var p=function(){var e;t.curtab+1&&((e=t.panel[t.curtab]).body.hide(),e.item.removeClass("selected"),"function"==typeof e.onblur&&e.onblur()),t.curtab=u.id,u.body.show(),u.body.focus(),u.item.addClass("selected"),"function"==typeof u.onselect&&u.onselect(),"function"==typeof t.ontabchange&&t.ontabchange(u,e)};this.button.click?this.button.click(p):(a.log("atlassian-dialog:Panel:constructor - this.button.click false"),this.button.onclick=p),p(),0==s?t.menu.css("display","none"):t.menu.show()};h.prototype.select=function(){this.button.click()},h.prototype.moveUp=h.prototype.moveLeft=i("left","panel"),h.prototype.moveDown=h.prototype.moveRight=i("right","panel"),h.prototype.remove=o("panel"),h.prototype.html=function(t){return t?(this.body.html(t),this):this.body.html()},h.prototype.setPadding=function(t){return isNaN(+t)||(this.body.css("padding",+t),this.padding=+t,this.page.recalcSize()),this};var u=function(t,e){this.dialog=t,this.id=t.page.length,this.element=(0,n.default)("<div></div>").addClass("dialog-components"),this.body=(0,n.default)("<div></div>").addClass("dialog-page-body"),this.menu=(0,n.default)("<ul></ul>").addClass("dialog-page-menu").css("height",t.height+"px"),this.body.append(this.menu),this.curtab,this.panel=[],this.button=[],e&&this.body.addClass(e),t.popup.element.append(this.element.append(this.menu).append(this.body)),t.page[t.page.length]=this};function p(t,e,i){var o={};+t||(t=(o=Object(t)).width,e=o.height,i=o.id),this.height=e||480,this.width=t||640,this.id=i,o=n.default.extend({},o,{width:this.width,height:this.height,id:this.id}),this.popup=c(o),this.popup.element.addClass("aui-dialog").attr("role","dialog"),this.page=[],this.curpage=0,new u(this)}return u.prototype.recalcSize=function(){for(var t=this.header?62:0,e=this.buttonpanel?52:0,i=this.panel.length;i--;){var n=this.dialog.height-t-e;this.panel[i].body.css("height",n),this.menu.css("height",n)}},u.prototype.addButtonPanel=function(){this.buttonpanel=(0,n.default)("<div></div>").addClass("dialog-button-panel"),this.element.append(this.buttonpanel)},u.prototype.addPanel=function(t,e,i,n){return new h(this,t,e,i,n),this.recalcSize(),this},u.prototype.addHeader=function(t,e){return this.header&&this.header.remove(),this.header=(0,n.default)("<h2></h2>").text(t||"").addClass("dialog-title"),e&&this.header.addClass(e),this.element.prepend(this.header),this.recalcSize(),this},u.prototype.addButton=function(e,i,n){return new t(this,e,i,n),this.recalcSize(),this},u.prototype.addLink=function(t,i,n,o){return new e(this,t,i,n,o),this.recalcSize(),this},u.prototype.gotoPanel=function(t){this.panel[t.id||t].select()},u.prototype.getCurrentPanel=function(){return this.panel[this.curtab]},u.prototype.hide=function(){this.element.hide()},u.prototype.show=function(){this.element.show()},u.prototype.remove=function(){this.element.remove()},p.prototype.addHeader=function(t,e){return this.page[this.curpage].addHeader(t,e),this},p.prototype.addButton=function(t,e,i){return this.page[this.curpage].addButton(t,e,i),this},p.prototype.addLink=function(t,e,i,n){return this.page[this.curpage].addLink(t,e,i,n),this},p.prototype.addSubmit=function(t,e){return this.page[this.curpage].addButton(t,e,"button-panel-submit-button"),this},p.prototype.addCancel=function(t,e){return this.page[this.curpage].addLink(t,e,"button-panel-cancel-link"),this},p.prototype.addButtonPanel=function(){return this.page[this.curpage].addButtonPanel(),this},p.prototype.addPanel=function(t,e,i,n){return this.page[this.curpage].addPanel(t,e,i,n),this},p.prototype.addPage=function(t){return new u(this,t),this.page[this.curpage].hide(),this.curpage=this.page.length-1,this},p.prototype.nextPage=function(){return this.page[this.curpage++].hide(),this.curpage>=this.page.length&&(this.curpage=0),this.page[this.curpage].show(),this},p.prototype.prevPage=function(){return this.page[this.curpage--].hide(),this.curpage<0&&(this.curpage=this.page.length-1),this.page[this.curpage].show(),this},p.prototype.gotoPage=function(t){return this.page[this.curpage].hide(),this.curpage=t,this.curpage<0?this.curpage=this.page.length-1:this.curpage>=this.page.length&&(this.curpage=0),this.page[this.curpage].show(),this},p.prototype.getPanel=function(t,e){var i=null==e?this.curpage:t;return null==e&&(e=t),this.page[i].panel[e]},p.prototype.getPage=function(t){return this.page[t]},p.prototype.getCurrentPanel=function(){return this.page[this.curpage].getCurrentPanel()},p.prototype.gotoPanel=function(t,e){if(null!=e){var i=t.id||t;this.gotoPage(i)}this.page[this.curpage].gotoPanel(void 0===e?t:e)},p.prototype.show=function(){return this.popup.show(),(0,s.trigger)("show.dialog",{dialog:this}),this},p.prototype.hide=function(){return this.popup.hide(),(0,s.trigger)("hide.dialog",{dialog:this}),this},p.prototype.remove=function(){this.popup.hide(),this.popup.remove(),(0,s.trigger)("remove.dialog",{dialog:this})},p.prototype.disable=function(){return this.popup.disable(),this},p.prototype.enable=function(){return this.popup.enable(),this},p.prototype.get=function(t){var e=[],i=this,n='(?:(page|panel|button|header)(?:#([^"][^ ]*|"[^"]*")|:(\\d+))?|#([^"][^ ]*|"[^"]*"))',o=new RegExp("(?:^|,)\\s*"+n+"(?:\\s+"+n+")?\\s*(?=,|$)","ig");(t+"").replace(o,function(t,n,o,a,h,s,u,p,l){var d=[];if("page"==(n=n&&n.toLowerCase())&&i.page[a]?(d.push(i.page[a]),n=(n=s)&&n.toLowerCase(),o=u,a=p,h=l):d=i.page,o=o&&(o+"").replace(/"/g,""),u=u&&(u+"").replace(/"/g,""),h=h&&(h+"").replace(/"/g,""),l=l&&(l+"").replace(/"/g,""),n||h)for(var r=d.length;r--;){if(h||"panel"==n&&(o||!o&&null==a))for(var c=d[r].panel.length;c--;)(d[r].panel[c].button.html()==h||d[r].panel[c].button.html()==o||"panel"==n&&!o&&null==a)&&e.push(d[r].panel[c]);if(h||"button"==n&&(o||!o&&null==a))for(c=d[r].button.length;c--;)(d[r].button[c].item.html()==h||d[r].button[c].item.html()==o||"button"==n&&!o&&null==a)&&e.push(d[r].button[c]);d[r][n]&&d[r][n][a]&&e.push(d[r][n][a]),"header"==n&&d[r].header&&e.push(d[r].header)}else e=e.concat(d)});for(var a={length:e.length},h=e.length;h--;)for(var s in a[h]=e[h],e[h])s in a||function(t){a[t]=function(){for(var e=this.length;e--;)"function"==typeof this[e][t]&&this[e][t].apply(this[e],arguments)}}(s);return a},p.prototype.updateHeight=function(){for(var t=0,e=(0,n.default)(window).height()-62-52-100,i=0;this.getPanel(i);i++)this.getPanel(i).body.css({height:"auto",display:"block"}).outerHeight()>t&&(t=Math.min(e,this.getPanel(i).body.outerHeight())),i!==this.page[this.curpage].curtab&&this.getPanel(i).body.css({display:"none"});for(i=0;this.getPanel(i);i++)this.getPanel(i).body.css({height:t||this.height});this.page[0].menu.height(t),this.height=t+62+52+1,this.popup.changeSize(void 0,this.height)},p.prototype.isMaximised=function(){return this.popup.element.outerHeight()>=(0,n.default)(window).height()-100},p.prototype.getCurPanel=function(){return this.getPanel(this.page[this.curpage].curtab)},p.prototype.getCurPanelButton=function(){return this.getCurPanel().button},p}();return e.Dialog=g=h.construct(g,"Dialog constructor",{alternativeName:"Dialog2"}),e.popup=c=h.construct(c,"Dialog popup constructor",{alternatveName:"Dialog2"}),(0,l.default)("Dialog",g),(0,l.default)("popup",c),e.Dialog=g,e.popup=c,t}.call(this);