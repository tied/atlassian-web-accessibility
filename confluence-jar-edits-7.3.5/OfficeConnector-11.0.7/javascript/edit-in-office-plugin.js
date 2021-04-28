define('office-connector/edit-in-office-plugin',[
  "jquery",
  "ajs",
  "office-connector/edit-in-office"
], function (
    $,
    AJS,
    EditInOffice
    ) {
    'use strict';

    var editInOfficePlugin = function (fileViewer) {
        fileViewer.on("fv.showFile fv.showFileError", function (file) {
            var fileName = file.get("name");
            if (!fileName) {
                throw new Error('Office connector expects the "name" property to be passed by the file viewer');
            }
            if (file && canEdit(fileName) && isAbstractPage()) {
                fileViewer.addFileAction({
                    key: "edit-in-office",
                    text: AJS.I18n.getText("office.connector.attachment.edit"),
                    callback: editInOffice
                });
            }
        });
    };

    var isAbstractPage = function() {
        return AJS.Meta.get("content-type") === "page" || AJS.Meta.get("content-type") === "blogpost";
    };

    var canEdit = function (fileName) {
        var isOffice = (EditInOffice.getProgID(fileName) !== "");
        return isOffice && (hasActiveXSupport());
    };

    var hasActiveXSupport = function() {
        var activeXObject,
          supportsActiveXObject = (window.ActiveXObject !== undefined);

        if (supportsActiveXObject) {
            try {
                activeXObject = new ActiveXObject('SharePoint.OpenDocuments.1');
            } catch (e) {
             //ignored
            }
        }
        return activeXObject;
    };

    var editInOffice = function (currentFile) {
        var id = currentFile.get("attachmentId") || currentFile.get("id");
        var contextPath = AJS.contextPath();
        $.getJSON(contextPath + "/rest/office/1.0/metadata/" + id).done(function (data) {
            var webDavUrl = contextPath + data.webDavUrl;
            var usePathAuth = data.usePathAuth;
            var progId = getProgID(webDavUrl);
            return EditInOffice.doEditInOffice(contextPath, webDavUrl, progId, usePathAuth);
        });
    };

    return editInOfficePlugin;
});


var FileViewer = require("FileViewer");
var EditInOfficePlugin = require("office-connector/edit-in-office-plugin");

FileViewer.registerPlugin('editInOffice', EditInOfficePlugin);
