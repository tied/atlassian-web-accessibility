define('office-connector/edit-in-office',
    [
        "jquery",
        "ajs",
        "confluence/custom-protocol-launcher"
    ],
    function ($, AJS, uriOpener) {

        function _getProgID(fileName) {
            var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

            switch (ext) {
                case "ppt":
                case "pptx":
                case "ppsx":
                case "pot":
                case "potx":
                case "pptm":
                    return "PowerPoint.Show";
                case "doc":
                case "docx":
                case "dot":
                case "dotx":
                    return "Word.Document";
                case "xls":
                case "xlt":
                case "xlsx":
                case "xlst":
                case "xlsm":
                case "xltx":
                    return "Excel.Sheet";
                default:
                    return ''
            }
        }

        function _filterPath(urlPath, success, onerror)
        {
            AJS.$.ajax({
                url: contextPath + '/rest/office/1.0/authtoken',
                success: function(data){
                    if (data.token){
                        var splitPath = urlPath.split('/');
                        var newPath = '';
                        for (var i = 0; i < splitPath.length - 1; i++){

                            if (splitPath[i].length){
                                newPath = newPath + '/' + splitPath[i];
                            }
                        }
                        newPath = newPath + '/ocauth/' + data.token + '/' + splitPath[splitPath.length - 1];
                        success(newPath);
                    }
                    else{
                        onerror('Unable to retrieve a temporary auth token. Check your server logs.');
                    }
                },
                error: function(jqXhr, textStatus, errorThrown){
                    onerror('Ajax error retrieving token: ' + textStatus + ", error from server: " + errorThrown);
                },
                statusCode: {403: function(){onerror('The current configuration requires you to be logged in to use the Office Connector.');
                    }
                }
            });
        }

        function _getBaseUrl() {
            return location.protocol + "//" + location.host;
        }

        function _handleTokenError(msg){
            alert(msg);
        }

        function _doEditInOffice(contextPath, webDavUrl, progID, usePathAuth)
        {
            var baseUrl = _getBaseUrl();
            if (typeof window.ActiveXObject !== 'undefined' || "ActiveXObject" in window) { // IE
                var ed;
                try
                {
                    ed = new ActiveXObject('SharePoint.OpenDocuments.1');
                }
                catch(err)
                {
                    window.alert('Unable to create an ActiveX object to open the document. This is most likely because of the security settings for your browser.');
                    return false;
                }
                if (ed)
                {
                    _filterPath(webDavUrl, function(newUrl){
                        ed.EditDocument(baseUrl + newUrl, progID);
                    }, _handleTokenError);
                    return false;
                }
                else
                {
                    window.alert('Cannot instantiate the required ActiveX control to open the document. This is most likely because you do not have Office installed or you have an older version of Office.');
                    return false;
                }
            } else { //all browsers except for IE.
                _editWithMicrosoftOffice(usePathAuth, webDavUrl);
            }

            return false;
        }

        function _editWithMicrosoftOffice(usePathAuth, webDavUrl) {
            // Always launch Microsoft Office with token regardless of whether the token is enabled.
            // Alternatively, we need to ask the customer to enable the authentication via Basic Auth by updating
            // the registry, please see the details at https://support.microsoft.com/en-us/kb/2123563
            _filterPath(webDavUrl, _launchWithOFE, _handleTokenError);
        }

        /**
         * The protocol used for the Microsoft Office document.
         * @param href - the URI of the office resource
         * @returns the protocol name.
         */
        function _getMicrosoftProtocol(href) {
            var ext = href.substring(href.lastIndexOf('.') + 1).toLowerCase();

            switch (ext) {
                case "ppt":
                case "pptx":
                case "ppsx":
                case "pot":
                case "potx":
                case "pptm":
                    return "ms-powerpoint";
                case "doc":
                case "docx":
                case "dot":
                case "dotx":
                    return "ms-word";
                case "xls":
                case "xlt":
                case "xlsx":
                case "xlst":
                case "xlsm":
                case "xltx":
                    return "ms-excel";
                default:
                    return '';
            }
        }

        /**
         * Launches the Microsoft Office to edit the specified document.
         * Finds the details of Office URI at https://msdn.microsoft.com/en-us/library/office/dn906146.aspx.
         *
         * @param url - the location of document
         */
        function _launchWithOFE(url) {
            try {
                var officeUrl = _getMicrosoftProtocol(url) + ':ofe|u|' + _getBaseUrl() + url;
                uriOpener.openUri(officeUrl);
            } catch (anError) {
                console.log(anError);
                window.alert('Unable to open your Office file. Have you installed MS Office yet?');
            }
        }


    return  {
        getProgID: _getProgID,
        doEditInOffice: _doEditInOffice
    };
});

AJS.toInit(function ($) {
    var EditInOffice = require('office-connector/edit-in-office');
    var contextPath = AJS.Data.get('context-path');

    var editInOfficeLinks = $('#edit-in-word, #edit-in-word-pathauth, a.office-editable, a.office-editable-pathauth');
    editInOfficeLinks.click(function (e) {
        e.preventDefault();

        var link = $(this);
        var usePathAuth = link.attr('data-use-path-auth');
        if (typeof(usePathAuth) == 'undefined') {
            usePathAuth = (link.attr('id') == 'edit-in-word-pathauth' || link.hasClass('office-editable-pathauth'));
        }
        else {
            usePathAuth = (usePathAuth === 'true');
        }
        var webDavUrl = link.attr('href');
        var progId = link.attr('data-prog-id');
        if (typeof(progId) == 'undefined')
            progId = EditInOffice.getProgID(webDavUrl);

        return EditInOffice.doEditInOffice(contextPath, webDavUrl, progId, usePathAuth);
    });
});

