define("confluence-dashboard/modules/opt-out/opt-out-action-view",["module","exports","../../utils/event-manager","marionette","configuration","confluence-dashboard/soy-templates","../../utils/dark-features","ajs","jquery","window","../../utils/ensure-component","../../utils/analytics"],function(e,t,n,o,i,a,l,u,s,d,r,c){"use strict";var f=n.EventManager,h=o.ItemView,b=i.DARK_FEATURES,p=A(a).default,D=A(l).default,g=A(u).default,m=A(s).default,v=A(d).default,w=A(r).default,_=A(c).default;function A(e){return e&&e.__esModule?e:{default:e}}var E=b.USER_DISABLED_DASHBOARD_DARK_FEATURE;t.default=h.extend({template:p.OptOut.sidebarButton,className:"sidebar-opt-out",initialize:function(){v.require(["aui/inline-dialog2"])},shouldShow:function(){return!1},addTo:function(e){var t=this;m(e).append(this.render().el);var n=this.$(".opt-out-dialog");w(n[0]).then(function(){n.find(".btn-send-feedback").on("click",t.sendFeedback.bind(t))}),this.listenTo(f,"sidebar:collapse",this.closeInlineDialog.bind(this)),this.listenTo(f,"window:scroll",this.closeInlineDialog.bind(this)),this.inlineDialog=n},closeInlineDialog:function(){var e=this;this.inlineDialog.length&&w(this.inlineDialog[0]).then(function(){e.inlineDialog.open=!1})},sendFeedback:function(e){var t=this;e.preventDefault(),D.remotely.user.enable(E).then(function(){return t.onDisableDashboard()})},onDisableDashboard:function(){var e=this.inlineDialog.find("[name=feedback]").val();_.publish("opt-out.confirm",{message:e}),v.location=g.contextPath()}}),e.exports=t.default}),define("confluence-dashboard/modules/opt-out/opt-out-controller",["./opt-out-action-view","../../utils/module-starter","../../utils/conditions","ajs"],function(e,t,n,o){"use strict";var i=s(e).default,a=s(t).default,l=s(n).default,u=s(o).default;function s(e){return e&&e.__esModule?e:{default:e}}function d(){var e=new i({});e.shouldShow()&&e.addTo(".aui-sidebar-footer")}u.toInit(function(){l.canShowDashboard()&&a.register(d)})}),require(["confluence-dashboard/modules/opt-out/opt-out-controller"]);