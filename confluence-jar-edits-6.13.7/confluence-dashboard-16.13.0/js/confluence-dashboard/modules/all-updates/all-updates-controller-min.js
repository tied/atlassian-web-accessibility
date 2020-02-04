define("confluence-dashboard/modules/all-updates/all-updates-collection",["module","exports","backbone","../../core/shared/base-collection","configuration"],function(e,t,l,a,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=n(l).default,c=n(a).default,u=o.endpoints;t.default=c.extend({url:u.ALL_UPDATES,sync:function(e,t,l){if("read"===e)return l.data={maxResults:40,tab:"all",showProfilePic:!0,labels:"",spaces:"",users:"",types:"",category:"",spaceKey:""},s.sync.call(this,e,t,l);console.log("Method not implemented for all updates",e)},parse:function(e){return e.changeSets}}),e.exports=t.default}),define("confluence-dashboard/modules/all-updates/all-updates-controller",["module","exports","./all-updates-collection","confluence-dashboard/core/content/content-controller","confluence-dashboard/core/content/content-as-stream-view","confluence-dashboard/soy-templates","configuration","ajs"],function(e,t,l,a,o,n,s,c){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}var d=u(l).default,r=u(a).default,i=u(o).default,f=u(n).default,p=(s.staticResourceUrl,u(c).default);t.default=r.extend({actionsToFilter:["allUpdates"],allUpdates:function(){this.view=new i({collection:new d,templateHelpers:{title:p.I18n.getText("all.updates.title"),contentType:this.options.name},emptyViewOptions:{template:f.AllUpdates.blank}}),this.view.collection.fetch()}}),e.exports=t.default});