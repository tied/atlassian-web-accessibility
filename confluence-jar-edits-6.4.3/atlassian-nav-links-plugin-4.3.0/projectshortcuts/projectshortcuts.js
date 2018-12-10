(function ($, NL) {
    var dialog,
        dialogDataCache = {},
        triggerDataEntityKey = 'key',
        triggerDataEntityName = 'name',
        triggerDataEntityType = 'entity-type';

    function showShortcutsDialog(e) {
        var $trigger = $(this),
            projectKey = $trigger.data(triggerDataEntityKey),
            projectName = $trigger.data(triggerDataEntityName),
            projectEntityType = $trigger.data(triggerDataEntityType);

        if (typeof projectKey === 'undefined') {
            return;
        }

        e.preventDefault();

        dialog = new AJS.Dialog({
            width: 600,
            keypressListener: function (e) {
                if (e.which == jQuery.ui.keyCode.ESCAPE) {
                    dialog.remove();
                }
            },
            id: "project-shortcuts-dialog"
        })
            .addCancel('Close', function () {
                dialog.remove();
            })
            .addPanel('',
                navlinks.templates.projectshortcuts.headingWrapper({
                    title: projectName,
                    logoUrl: getLogoUrl(),
                    contentHtml: navlinks.templates.projectshortcuts.dialogLoading({text: 'Retrieving links…'})
                }))
            .show();

        updateDialogHeight(dialog);

        if (!dialogDataCache[projectKey]) {
            dialogDataCache[projectKey] = {
                entity: {
                    title: projectName
                },
                localShortcuts: null,
                remoteShortcuts: null
            };
            getData(AJS.contextPath() + '/rest/project-shortcuts/1.0/local/' + projectKey, {entityType: projectEntityType}).done(updateLocal);
            getData(AJS.contextPath() + '/rest/project-shortcuts/1.0/remote/' + projectKey, {entityType: projectEntityType}).done(updateRemote).fail(function () {
                var $wrapper = dialog.getCurrentPanel().body.find('.project-content-wrapper');
                $wrapper.find('.projectshortcuts-loading').remove();
                AJS.messages.error($wrapper, {
                    body: AJS.I18n.getText('shortcuts.remote.links.error'),
                    closeable: false
                });
                updateDialogHeight(dialog);
            });
        } else {
            updateShortcutsDialog(dialogDataCache[projectKey]);
        }

        function updateLocal(data) {
            dialogDataCache[projectKey].localShortcuts = data.shortcuts;
            updateShortcutsDialog(dialogDataCache[projectKey]);
        }

        function updateRemote(data) {
            dialogDataCache[projectKey].remoteShortcuts = data.shortcuts;
            updateShortcutsDialog(dialogDataCache[projectKey]);
        }
    }

    function getLogoUrl() {
        return $(".project-shortcut-dialog-trigger img").attr("src");
    }

    function updateShortcutsDialog(data) {
        if (data.localShortcuts) { // Don't update the dialog until we have entity data and local links (stops the dialog from displaying remote links only if remote links has returned first)
            dialog.getCurrentPanel().html(
                navlinks.templates.projectshortcuts.headingWrapper({
                    title: data.entity.title,
                    logoUrl: getLogoUrl(),
                    contentHtml: navlinks.templates.projectshortcuts.dialogContent(data)
                }));

            updateDialogHeight(dialog);
        }
    }

    function truncateDesc(desc) {

        var trunc = 210;
        if (!desc || desc.length <= trunc)
            return desc;

        var i = trunc;
        while (i > 0 && desc.charAt(i) != " ") {
            i--;
        }
        if (i == 0) {
            i = trunc;
        }

        desc = desc.substring(0, i);
        if (desc.length >= i)
            desc = desc + "...";
        return desc;
    }

    /**
     * Since AJS.Dialog's height updating is completely broken we need to do it custom for our dialog
     * @param dialog
     */
    function updateDialogHeight(dialog) {
        var $dialog = dialog.popup.element,
            $body = $dialog.find('.dialog-panel-body'),
            $components = $dialog.find('.dialog-components');

        $body.height('auto');
        $dialog.height($components.outerHeight() - 1);
        $('.aui-shadow').remove();
    }

    function getData(url, data) {
        return $.ajax({
            url: url,
            cache: false,
            data: data,
            dataType: 'json'
        });
    }

    $(document).on('click', '.project-shortcut-dialog-trigger', showShortcutsDialog);
}(jQuery, window.NL = (window.NL || {})));
