AJS.toInit(function(e){var c=require("confluence/form-state-control");function b(i,k,h,j,f){var g=i.attr("data-enabled")==="true";AJS.trigger("analytics",{name:"blueprint.template."+(g?"disable":"enable"),data:{}});e.ajax({url:h,type:g?"DELETE":"PUT",contentType:"application/vnd.atl.plugins.plugin.module+json",success:function(l){i.attr("data-enabled",!g);i.text(g?AJS.I18n.getText("enable.name"):AJS.I18n.getText("disable.name"));f.toggleClass("disabled",g);if(k){var m=i.siblings(".promoted-state-toggle-trigger");g?c.disableElement(m):c.enableElement(m)}},error:function(){AJS.log("Could not enable/disable blueprint with id: "+j)}});return false}e("#content-blueprint-templates .module-state-toggle-trigger").click(function(){var h=AJS.Meta.get("space-key")||e("meta[name=confluence-space-key]").attr("content"),i=e(this),f=i.closest(".web-item-module"),j=f.data("content-blueprint-id"),g=Confluence.getContextPath()+"/rest/create-dialog/1.0/modules/"+j+(h?"?spaceKey="+h:"");return b(i,true,g,j,f)});e("#space-blueprints-admin-table .module-state-toggle-trigger").click(function(){var h=e(this),f=h.closest(".web-item-module"),i=f.data("space-blueprint-id"),g=Confluence.getContextPath()+"/rest/create-dialog/1.0/modules/space-blueprint/"+i;return b(h,true,g,i,f)});e(".web-item-module .template-operations a").click(function(f){if(e(this).closest(".web-item-module").is(".disabled")){f.preventDefault();f.stopPropagation()}});var d=e(".promoted-state-toggle-trigger");d.tooltip({aria:true});d.click(function(f){var g=e(this),h=g.attr("data-promoted")==="true";a(g,h);f.preventDefault()});var a=function(f,i){var h=f,j=h.closest(".web-item-module").data("content-blueprint-id"),g=AJS.Meta.get("space-key");if(!g){g=e("meta[name=confluence-space-key]").attr("content")}c.disableElement(h);AJS.trigger("analytics",{name:"blueprint.template."+(i?"unpromote":"promote"),data:{}});e.ajax({url:Confluence.getContextPath()+"/rest/create-dialog/1.0/promotion/promote-blueprint/"+j+(g?"?spaceKey="+g:""),type:i?"DELETE":"PUT",contentType:"application/json"}).done(function(){h.attr("data-promoted",!i);h.text(i?AJS.I18n.getText("create.content.plugin.templates.promoted.name"):AJS.I18n.getText("create.content.plugin.templates.non.promoted.name"))}).fail(function(){AJS.log("Could not promote/demote blueprint with id: "+j)}).always(function(){c.enableElement(h)})}});