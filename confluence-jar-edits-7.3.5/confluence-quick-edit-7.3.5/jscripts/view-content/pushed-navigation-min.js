define("confluence-quick-edit/view-content/pushed-navigation","jquery underscore window confluence/legacy confluence/api/event confluence-quick-edit/view-content/pushed-navigation-util".split(" "),function(b,n,a,f,g,c){function d(){if(h){if(e.split("#")[0]!=a.location.href.split("#")[0]){b(a).unbind("popstate",k);a.location.reload()}}else e.split("#")[0]==a.location.href.split("#")[0]&&e.split("#")[1]!=="editor"||a.location.reload()}function i(){e=a.location.href}function l(){var b=f.Editor.Drafts.unloadMessage();
if(b){f.Editor.Drafts.unBindUnloadMessage();if(confirm(b+"\n\n"+AJS.I18n.getText("confirmation.leave.dialog"))){g.trigger("analytics",{name:"rte.quick-edit.confirmation.leaving"});d()}else{g.trigger("analytics",{name:"rte.quick-edit.confirmation.staying"});if(h){j=true;a.history.forward()}else a.location.hash="editor";f.Editor.Drafts.bindUnloadMessage()}}else d()}function o(){c.isInEditPage()?a.location.hash!=="#editor"&&l():d()}function k(){j?j=false:c.isInEditPage()?l():d()}function m(a,b){return function(){n.every(b,
function(a){return a()})&&a()}}var h=!!a.history.pushState,j=false,e=a.location.href,p=[c.filterPreviewHashChange],q=[c.filterPreviewNavigationEvent];g.bind("rte-quick-edit-enable-handlers",function(){a.location.hash==="#editor"&&b("#editPageLink").click()});return function(){i();if(h){b(a).bind("popstate",m(k,q));b(a).bind("rte-quick-edit-push-state",i)}else{b(a).bind("hashchange",m(o,p));b(a).bind("rte-quick-edit-push-hash",i)}}});
require("confluence/module-exporter").safeRequire("confluence-quick-edit/view-content/pushed-navigation",function(b){require("ajs").toInit(function(){setTimeout(b,0)})});