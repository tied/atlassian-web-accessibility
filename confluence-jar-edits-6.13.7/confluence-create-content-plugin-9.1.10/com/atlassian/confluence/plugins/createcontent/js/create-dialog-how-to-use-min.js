(function($){function markHowToUseVisited(contentBlueprintId,skipHowToUse){AJS.log("blueprint-how-to: marking skipHowToUse for "+contentBlueprintId+", "+skipHowToUse);var url=Confluence.getContextPath()+"/rest/create-dialog/1.0/blueprints/skip-how-to-use";AJS.safe.post(url,{contentBlueprintId:contentBlueprintId,skip:skipHowToUse}).done(function(){AJS.log("blueprint-how-to: Saved skipHowToUse for "+contentBlueprintId+", "+skipHowToUse)}).fail(function(){AJS.log("blueprint-how-to: FAILED SAVE skipHowToUse for "+contentBlueprintId+", "+skipHowToUse)})}function showHowToUsePage(createDialog,data,callback){AJS.log("blueprint-how-to: showing how-to-use page");createDialog.addPage("how-to-use-blueprint-page");$(".dialog-page-body.how-to-use-blueprint-page").attr("data-content-blueprint-id",data.contentBlueprintId).attr("data-blueprint-key",data.blueprintModuleCompleteKey);var page=createDialog.getPage(createDialog.curpage);var pageHeader=AJS.I18n.getText("create.content.plugin.create-dialog.header.how-to.label");page.addHeader(pageHeader);var panelContents=eval(data.howToUseTemplate+"()");page.addPanel("how-to-panel",panelContents);createDialog.addBackButton(page);createDialog.addButtonPanel(page,callback,!data.wizard,"how-to-button-panel");if(!AJS.Meta.get("remote-user")){return}function skipHowToUseChanged(){var skip=$(this).prop("checked");if(skip){createDialog.blueprintHowTosSkipped=createDialog.blueprintHowTosSkipped||{};createDialog.blueprintHowTosSkipped[data.contentBlueprintId]=true}else{delete createDialog.blueprintHowTosSkipped[data.contentBlueprintId]}markHowToUseVisited(data.contentBlueprintId,skip)}page.buttonpanel.append(Confluence.Templates.Blueprints.howToUseSkipCheckbox());var isAlreadySkipped=!!(createDialog.blueprintHowTosSkipped&&createDialog.blueprintHowTosSkipped[data.contentBlueprintId]);page.buttonpanel.find("#dont-show-how-to-use").change(skipHowToUseChanged).prop("checked",isAlreadySkipped)}Confluence.Blueprint.HowToUse={check:function(createDialog,config,callback){AJS.log("blueprint-how-to: checking status and showing How-to-Use page if needed");if(!config.skipHowToUse){showHowToUsePage(createDialog,config,callback)}else{callback()}},notifyCancel:function(createDialog){AJS.log("blueprint-how-to: cancel notified");if(createDialog.blueprintHowTosSkipped){_.each(createDialog.blueprintHowTosSkipped,function(value,contentBlueprintId){markHowToUseVisited(contentBlueprintId,false)})}}}})(AJS.$);