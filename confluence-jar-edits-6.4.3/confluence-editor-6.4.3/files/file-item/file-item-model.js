define('confluence-editor/files/file-item/file-item-model', [
    'backbone',
    'confluence/legacy',
    'ajs',
    'underscore',
    'plupload'
], function(
    Backbone,
    Confluence,
    AJS,
    _,
    plupload
) {
    "use strict";

    /**
     * FileItemModel is wrapper for 'file' or 'image' object that returns from server
     */
    var FileItemModel = Backbone.Model.extend({

        defaults: {
            id: -1,
            ownerId: -1,
            fileName: "",
            nonceUrl: "",
            isImage: false,
            isFilePlaceHolder: false,
            isSelect: false,
            thumbnailUrl: "",
            downloadUrl: ""
        },

        initialize: function () {
            var that = this;
            this._findDownloadUrl();
            this._findThumbnailUrl();

            this.set("fileName", this.getFileName());
            this.set("nonceUrl", this.getNonceUrl());
            this.set("isImage", this.isImage());
            this.set("isPreviewable", this.isPreviewable());
            if (this.get("attachmentId")) {
                this.set("id", this.get("attachmentId"));
            }

            if (this.get("isFilePlaceHolder")) {
                this.set("id", this.get("fileId"));
            }

            //for IE9 only
            this.listenTo(this, "change:link", function () {
                that.set("nonceUrl", that.getNonceUrl());
                that._findDownloadUrl();
            });

            this.set("iconAUIClass", this._parseFileNameToAuiIconClass(this.get("fileName")));
        },

        isImage: function () {
            if (this.get("isImage")) {
                return true;
            }
            return !!this.get("thumbnailUrl");
        },

        /**
         * Preview button is only applied with "pdf" and "image" file types.
         */
        isPreviewable: function() {
            var niceType = this.get("niceType") || "";
            return niceType.toLocaleLowerCase() === "pdf document" || this.isImage();
        },

        getFileName: function () {
            return this.get("fileName") || this.get("name") || "";
        },

        getDestinationUrl: function () {
            return AJS.REST.wikiLink(this.attributes).destination;
        },

        getNonceUrl: function () {
            var thumbnailUrl = this.get("thumbnailUrl");

            if (thumbnailUrl.indexOf("modificationDate") >= 0) {
                return thumbnailUrl;
            }

            var lastModifiedDate = this.get("lastModifiedDate");
            lastModifiedDate = lastModifiedDate ? lastModifiedDate.date : (+new Date());
            lastModifiedDate = encodeURIComponent(lastModifiedDate);

            if (thumbnailUrl) {
                var extraParam = (thumbnailUrl.indexOf("?") + 1 ? "&" : "?") + "nonce=" + lastModifiedDate;
                thumbnailUrl = thumbnailUrl + extraParam;
            }
            return thumbnailUrl ;
        },

        getRelativeUrl: function (url) {
            if (!url) {
                return url;
            }

            if (url.indexOf(Confluence.getBaseUrl()) === 0) {
                url = url.replace(Confluence.getBaseUrl(), "");
                url = AJS.contextPath() + url;
            }

            return url;
        },

        _findThumbnailUrl: function () {
            if (!this.get("thumbnailUrl") && this.get("thumbnailLink")) {
                this.set("thumbnailUrl", this.getRelativeUrl(this.get("thumbnailLink").href));
            }
        },

        _findDownloadUrl: function () {
            // REST API
            var links = this.get("link");
            if (!this.get("downloadUrl") && links) {
                var downloadUrl = _.findWhere(links, {rel: "download"}).href;
                this.set("downloadUrl", this.getRelativeUrl(downloadUrl));
            }

        },

        _getFileExtension: function(fileName) {
            return fileName.substr(fileName.lastIndexOf(".") + 1);
        },

        _parseFileNameToAuiIconClass: function (fileName) {
            var fileMime = (typeof plupload !== "undefined")
                    ? plupload.mimeTypes[this._getFileExtension(fileName)]
                    : "";

            return AJS.Confluence.FileTypesUtils.getAUIIconFromMime(fileMime);
        }

    });

    return FileItemModel;
});

require('confluence/module-exporter').exportModuleAsGlobal('confluence-editor/files/file-item/file-item-model', 'Confluence.Editor.FileDialog.FileItemModel');
