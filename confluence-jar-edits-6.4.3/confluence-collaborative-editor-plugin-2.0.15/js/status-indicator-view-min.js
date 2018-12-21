define("confluence-collaborative-editor-plugin/status-indicator-view",["confluence/templates","backbone","ajs","jquery","underscore"],function(c,e,a,d,b){return e.View.extend({initialize:function(){this.$el.addClass("synchrony");this.listenTo(this.model,"change:saving change:error",this.render);this.model.set("confluenceUnreachable",false);this.model.set("synchronyUnreachable",false);this.model.set("tokenExpired",false);a.bind("rte.heartbeat",b.bind(this.onConfluenceConnectedState,this));a.bind("rte.safe-save.error",b.bind(this._errorPublishing,this));a.bind("rte.preview.error",b.bind(this._errorPublishing,this));this.model.set("connecting",true);this._setProgressState()},render:function(){d(".tipsy").remove();this.$el.html(c.CollaborativeEditor.StatusIndicator.container(this.model.attributes))},onConnectedState:function(g){this.model.set("synchronyUnreachable",false);if(!this.model.has("synchronyEntity")){this.model.set("synchronyEntity",g);var f=this;this.model.get("synchronyEntity").on("update",function(h){f._handleSynchronyUpdateEvent(h,f)});this.model.get("synchronyEntity").on("ack",function(h){f._handleSynchronyAckEvent(h,f)})}this._setSavedState()},onDisconnectedState:function(){this.model.set("synchronyUnreachable",true);this.model.set("connecting",true);this._setErrorState()},onConfluenceConnectedState:function(){if(this.model.get("confluenceUnreachable")){this.model.set("confluenceUnreachable",false);this._setSavedState()}},onConfluenceDisconnectedState:function(){this.model.set("confluenceUnreachable",true);this.model.set("connecting",true);this._setErrorState()},onTokenRenewedState:function(){if(this.model.get("tokenExpired")){this.model.set("tokenExpired",false);this._setSavedState()}},onTokenExpiredState:function(){this.model.set("tokenExpired",true);this.model.set("connecting",true);this._setErrorState()},_handleSynchronyUpdateEvent:function(g,f){if(g.updateType==="local"){f.model.set("pendingChanges",true);f._saving()}},_handleSynchronyAckEvent:function(h,g){var f=h.pending.length>0;g.model.set("pendingChanges",f);if(!f){g.model.set("lastSavedTime",new Date().getTime())}},_saving:function(){var f=this;var g=function(){setTimeout(function(){if(f.model.get("pendingChanges")||new Date().getTime()-f.model.get("lastSavedTime")<f.model.get("minActiveTime")){g()}else{f._setSavedState()}},f.model.get("minActiveTime"))};if(this.model.get("saving")){return}this.model.set("connecting",false);this._setProgressState();g()},_reachable:function(){return !this.model.get("confluenceUnreachable")&&!this.model.get("synchronyUnreachable")&&!this.model.get("tokenExpired")},_errorPublishing:function(g,f){switch(f.status){case 0:this.onConfluenceDisconnectedState();break;case 500:case 503:this.onConfluenceDisconnectedState();break;case 400:case 403:case 404:case 409:case 410:case 413:default:break}},_setSavedState:function(){if(this._reachable()){this.model.set("statusMessage",this.model.get("connecting")?a.I18n.getText("collab.status.connected"):a.I18n.getText("collab.status.saved"));this.model.set("isReadyToGo",this.model.get("connecting")?true:false);this.model.set("tooltipMessage",a.I18n.getText("collab.status.tooltip.success"));this.model.set("connecting",false);this.model.set("saving",false);this.model.set("error",false)}else{this._setErrorState()}},_setErrorState:function(){this.model.set("statusMessage",a.I18n.getText("collab.status.error"));this.model.set("tooltipMessage",a.I18n.getText("collab.status.tooltip.failure"));this.model.set("saving",false);this.model.set("error",true)},_setProgressState:function(){if(this._reachable()){this.model.set("statusMessage",this.model.get("connecting")?a.I18n.getText("collab.status.connecting"):a.I18n.getText("collab.status.saving"));this.model.set("tooltipMessage",a.I18n.getText("collab.status.tooltip.success"));this.model.set("saving",true);this.model.set("error",false)}else{this._setErrorState()}}})});