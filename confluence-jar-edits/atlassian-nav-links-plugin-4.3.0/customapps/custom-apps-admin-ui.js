AJS.$(document).ready(function () {

    var $table = AJS.$("#custom-app-admin-content");

    var stringToSelectValue = function (s) {
        // We shouldn't be escaping - need to upgrade select2:
        // https://github.com/ivaynberg/select2/pull/375/files
        return {id: s, text: AJS.escapeHtml(s)};
    };

    // override the default edit behaviour for the AllowGroups column
    // Uses Select2 dropdown, populated via REST call, to edit array of groups.
    var AllowedGroupsColumnEditView = AJS.RestfulTable.CustomEditView.extend({
        render: function (self) {
            var column = this;

            // define controls
            var $span = AJS.$(customapps.admin.getAllowedGroupsEditView({allowedGroupsId: column.model.attributes.id}));
            var $select = $span.find("input");
            $select.select2({
                separator: ", ",
                multiple: true,
                // TODO re-instate when ROTP837 has merged into JIRA
                // minimumInputLength: 1,
                formatNoMatches: function () {
                    return AJS.I18n.getText("custom-apps.select2.formatNoMatches");
                },
                formatInputTooShort: function (input, min) {
                    return AJS.I18n.getText("custom-apps.select2.formatInputTooShort", (min - input.length));
                },
                formatSelectionTooBig: function (limit) {
                    return AJS.I18n.getText("custom-apps.select2.formatSelectionTooBig", limit);
                },
                formatLoadMore: function (pageNumber) {
                    return AJS.I18n.getText("custom-apps.select2.formatLoadMore");
                },
                formatSearching: function () {
                    return AJS.I18n.getText("custom-apps.select2.formatSearching");
                },
                ajax: { // instead of writing the function to execute the request we use Select2's convenient helper
                    url: AJS.contextPath() + "/rest/custom-apps/1.0/customapps/groups",
                    dataType: 'json',
                    data: function (term, page) {
                        return {
                            q: term, // search term
                            page_limit: 10,
                            page: page
                        };
                    },
                    results: function (data, page) { // parse the results into the format expected by Select2.
                        // clear any ajax errors after a successful AJAX call.
                        ajaxErrorClear();

                        // since we are using custom formatting functions we do not need to alter remote JSON data
                        var select2Results = [];
                        for (var s in data.names) {
                            select2Results.push(stringToSelectValue(data.names[s]));
                        }
                        return {results: select2Results, more: data.more};
                    },
                    // overridden transport to allow overriding success and error behaviours.
                    transport: function (options) {
                        return AJS.$.ajax(AJS.$.extend({}, options, {
                            global: false,
                            // handle ajax errors
                            error: function (jqXHR, textStatus, errorThrown) {
                                ajaxErrorHandler(jqXHR.status);
                            }
                        }));
                    }
                }
            });
            var initialData = [];
            for (var s in column.model.attributes.allowedGroups) {
                initialData.push(stringToSelectValue(column.model.attributes.allowedGroups[s]));
            }
            $select.select2("data", initialData);

            // dropdown should be enabled/disabled depending on hide state
            if (column.model.attributes.hide) {
                $select.select2("disable");
            }
            else {
                $select.select2("enable");
            }
            $select.on("change", function (e) {
                //column.model.set({allowedGroups: $select.select2("val")});
                //column.model.save(column.model.attributes,{});
            });

            // Exempt Select2 from the isDirty check as it alters its own data internally, hence it si always dirty
            $span.find(".select2-input").addClass("ajs-dirty-warning-exempt");

            return $span;
        }
    });

    // trick restful table into treating the read value as a string, rather than an empty array, so it will show a prompt on hover
    var AllowedGroupsColumnReadView = AJS.RestfulTable.CustomReadView.extend({
        render: function (self) {
            return self.value != null ? AJS.escapeHtml(self.value.join(', ')) : "";
        }
    });

    var HideColumnEditView = AJS.RestfulTable.CustomEditView.extend({
        render: function (self) {
            var column = this;

            // define the checkbox
            var $checkbox = AJS.$(customapps.admin.getHideEditViewCheckBox({hideId: column.model.attributes.id}));

            // initialize the checkbox
            $checkbox.prop("checked", self.value);

            var $hidden = AJS.$(customapps.admin.getHideEditViewHidden());

            // event handling
            $checkbox.change(function (e) {
                // make the allowed groups control enabled/disabled depending on hide checkbox state
                var $allowedGroupsSpan = AJS.$("#allowedGroupsId" + column.model.attributes.id);
                if ($checkbox.prop("checked")) {
                    $hidden.val("true");
                    $allowedGroupsSpan.children("input").select2("disable");
                } else {
                    $hidden.val("false");
                    $allowedGroupsSpan.children("input").select2("enable");
                }
            });
            return AJS.$.merge($checkbox, $hidden);
        }
    });

    var HideColumnReadView = AJS.RestfulTable.CustomReadView.extend({
        render: function (self) {
            return self.value ? AJS.I18n.getText("custom-apps.manage.hidden") : "";
        }
    });

    var CheckEditabilityReadView = AJS.RestfulTable.CustomReadView.extend({
        render: function (self) {
            if (this.model.attributes.editable) {
                return AJS.escapeHtml(self.value);
            }
            else {
                return AJS.$(customapps.admin.getReadView({value: self.value}));
            }
        },

        isEditable: function (self) {
            return this.model.attributes.editable;
        }
    });

    var CheckEditabilityEditView = AJS.RestfulTable.CustomReadView.extend({
        render: function (data) {
            if (data.allowEdit !== false
                    // editable if the row model is undefined, i.e. rendering the ADD row, or if the row model is editable.
                && (this.model.attributes.editable == undefined || this.model.attributes.editable)) {
                return AJS.$(customapps.admin.getEditView({
                    name: data.name,
                    value: data.value == null ? "" : data.value
                }));
            } else if (data.value) {
                return document.createTextNode(data.value);
            }
        }
    });

    var SourceColumnReadView = AJS.RestfulTable.CustomReadView.extend({
        render: function (self) {
            if (self.value == undefined || self.value == null || self.value == "") {
                return self.value;
            }

            if (this.model.attributes.self != undefined && this.model.attributes.self) {
                return "";
            }

            // FECRU Does not support the admin screen at this time
            if (this.model.attributes.applicationType != undefined && this.model.attributes.applicationType == "fecru") {
                var linkText = AJS.I18n.getText("custom-apps.manage.location");
                return AJS.$(customapps.admin.getSourceReadViewLocationLink({href: self.value, linkText: linkText}));
            }

            // JIRA OD may supply a special BitBucket link, but bitbucket does not support the admin acreen.
            if (this.model.attributes.applicationType != undefined && this.model.attributes.applicationType == "jira"
                && self.value.toLowerCase().indexOf("bitbucket.org") >= 0) {
                var linkText = AJS.I18n.getText("custom-apps.manage.location");
                return AJS.$(customapps.admin.getSourceReadViewLocationLink({href: self.value, linkText: linkText}));
            }

            var linkText = AJS.I18n.getText("custom-apps.manage.manage");
            return AJS.$(customapps.admin.getSourceReadViewManageLink({href: self.value, linkText: linkText}));
        }
    });

    // override default edit row behaviour to pickup Select2 editing changes.
    var CustomAppsEditRow = AJS.RestfulTable.EditRow.extend({
        mapSubmitParams: function (params) {
            params["allowedGroups"] = this.$el.find("input[name=\"allowedGroups\"]").select2("val");
            return this.model.changedAttributes(params);
        }

    });

    // override default read row behaviour to control edit and delete behaviour depending on model values.
    var CustomAppsRow = AJS.RestfulTable.Row.extend({
        initialize: function (options) {

            options = options || {}
            options.allowEdit = true; // this is now taken care of by the render function of this class and the
            // CheckEditabilityRead/EditView classes, as even non editable rows have editable
            // hide and allowedGroups fields.
            options.allowDelete = this.model.attributes.editable;

            // Bind to RestFulTable Row's ajax EDIT_ROW event, to clear any errors..
            // TODO EDIT-ROW is only triggered on the row being edited. Delete this and add an AJS binding,
            // see SERVER_ERROR etc bindings below, for this event if AUI ever changes the EDIT_ROW trigger to AJS.triggerEvtForInst.
            this.bind(AJS.RestfulTable.Events.EDIT_ROW, ajaxErrorClear);

            this.constructor.__super__.initialize.apply(this, [options]);

            // _events was renamed in AUI 4.2 - this needs to be backwards compatible
            this._event = this._event || this._events;
        },

        //TODO get a change similar to this into core AUI
        render: function () {

            var instance = this,
                renderData = this.model.toJSON(),
                $opsCell = AJS.$("<td class='aui-restfultable-operations' />").append(this.renderOperations({}, renderData)),
                $throbberCell = AJS.$("<td class='aui-restfultable-throbber' />");

            // restore state
            this.$el
                .removeClass(this.classNames.DISABLED + " " + this.classNames.FOCUSED + " " + this.classNames.LOADING + " " + this.classNames.EDIT_ROW)
                .addClass(this.classNames.READ_ONLY)
                .empty();


            if (this.allowReorder) {
                AJS.$('<td  class="' + this.classNames.ORDER + '" />').append(this.renderDragHandle()).appendTo(instance.$el);
            }

            this.$el.attr("data-id", this.model.id); // helper for webdriver testing

            AJS.$.each(this.columns, function (i, column) {

                var contents,
                    $cell = AJS.$("<td />"),
                    value = renderData[column.id],
                    fieldName = column.fieldName || column.id,
                    args = [{name: fieldName, value: value, allowEdit: column.allowEdit}, renderData, instance.model];

                if (value) {
                    instance.$el.attr("data-" + column.id, value); // helper for webdriver testing

                }
                var editable = true;

                if (column.readView) {
                    var readView = new column.readView({
                        model: instance.model
                    });
                    contents = readView.render(args[0]);
                    if (readView.isEditable) {
                        editable = readView.isEditable(args[0]);
                    }
                } else {
                    contents = instance.defaultColumnRenderer.apply(instance, args);
                }

                if (instance.allowEdit !== false && column.allowEdit !== false && editable) {
                    var $editableRegion = AJS.$("<span />")
                        .addClass(instance.classNames.EDITABLE)
                        .append('<span class="aui-icon icon-edit-sml aui-icon-small aui-iconfont-edit" />')
                        .append(contents)
                        .attr("data-field-name", fieldName);

                    $cell = AJS.$("<td />").append($editableRegion).appendTo(instance.$el);

                    if (!contents || AJS.$.trim(contents) == "") {
                        $cell.addClass(instance.classNames.NO_VALUE);
                        $editableRegion.html(AJS.$("<em />").text(this.emptyText || AJS.I18n.getText("aui.enter.value")));
                    }

                } else {
                    $cell.append(contents);
                }

                if (column.styleClass) {
                    $cell.addClass(column.styleClass);
                }

                $cell.appendTo(instance.$el);
            });

            this.$el
                .append($opsCell)
                .append($throbberCell)
                .addClass(this.classNames.ROW + " " + this.classNames.READ_ONLY);

            this.trigger(this._event.RENDER, this.$el, renderData);
            this.$el.trigger(this._event.CONTENT_REFRESHED, [this.$el]);
            return this;
        }
    });

    // table definition
    var customAppTable = new AJS.RestfulTable({
        autoFocus: true,
        el: $table,
        allowReorder: true,
        createPosition: "top",
        addPosition: "bottom",
        resources: {
            all: AJS.contextPath() + "/rest/custom-apps/1.0/customapps/list",
            self: AJS.contextPath() + "/rest/custom-apps/1.0/customapps"
        },
        views: {
            row: CustomAppsRow,
            editRow: CustomAppsEditRow
        },
        columns: [
            {
                id: "displayName",
                header: AJS.I18n.getText("common.words.displayName"),
                editView: CheckEditabilityEditView,
                readView: CheckEditabilityReadView,
                styleClass: "custom-apps-restfultable-displayname"
            },
            {
                id: "url",
                header: AJS.I18n.getText("common.words.url"),
                editView: CheckEditabilityEditView,
                readView: CheckEditabilityReadView
            },
            {
                id: "sourceApplicationUrl",
                header: AJS.I18n.getText("common.words.source"),
                readView: SourceColumnReadView,
                allowEdit: false
            },
            {
                id: "hide",
                header: AJS.I18n.getText("common.words.hide"),
                editView: HideColumnEditView,
                readView: HideColumnReadView,
                emptyText: AJS.I18n.getText("common.words.clickToEdit"),
                styleClass: "custom-apps-restfultable-hide"
            },
            {
                id: "allowedGroups",
                header: AJS.I18n.getText("common.words.groups"),
                editView: AllowedGroupsColumnEditView,
                readView: AllowedGroupsColumnReadView,
                emptyText: AJS.I18n.getText("common.words.clickToEdit"),
                styleClass: "custom-apps-restfultable-groups"
            }
        ]
    });

    // TODO binding to AJS only works for those events that are triggered via AJS.triggerEvtForInst. Not all RestfulTable events are triggered in this way.
    // TODO EDIT-ROW is only triggered on the row being edited. Add a AJS binding for this event if AUI ever changes the EDIT_ROW trigger to AJS.triggerEvtForInst.

    /**
     * Bind to RestFulTable's ajax error event, should pick up all but 400 errors.
     */
    jQuery(AJS).bind(AJS.RestfulTable.Events.SERVER_ERROR, function (e, data, jqXHR) {
        ajaxErrorHandler(jqXHR.status);
    });

    /**
     * Bind to RestFulTable's successful ajax call events, to clear any errors..
     */
    AJS.$(AJS).bind(AJS.RestfulTable.Events.REORDER_SUCCESS, ajaxErrorClear);
    AJS.$(AJS).bind(AJS.RestfulTable.Events.ROW_ADDED, ajaxErrorClear);
    AJS.$(AJS).bind(AJS.RestfulTable.Events.ROW_REMOVED, ajaxErrorClear);

    /**
     * Display a User friendly message, determined by the HTTP status code, to the user after AJAX errors.
     * @param httpStatusCode
     */
    function ajaxErrorHandler(httpStatusCode) {
        ajaxErrorClear();

        var title;
        var body;
        if (httpStatusCode === 0 || httpStatusCode >= 400 && httpStatusCode < 600) {
            switch (httpStatusCode) {
                case 401:
                    body = AJS.I18n.getText("custom-apps.ajax.error.occured.body.loggedOut", AJS.$("#custom-apps-login-redirect-url").val());
                    title = AJS.I18n.getText("custom-apps.ajax.error.occured.title.loggedOut");
                    break;
                default:
                    // else we screwed up
                    title = AJS.I18n.getText("custom-apps.ajax.error.occured.title.default");
                    body = AJS.I18n.getText("custom-apps.ajax.error.occured.body.default");
            }
        }
        // add the new error
        AJS.messages.warning({
            title: title,
            body: body,
            id: "custom-apps-ajax-error",
            closeable: false
        });
    }

    /**
     * Clear any existing errors.
     */
    function ajaxErrorClear() {
        // clear the last error
        AJS.$("#custom-apps-ajax-error").closeMessage();
    }

    var refreshInitialized = false;

    var addRefreshButton = function () {
        customAppTable.$theadRow.find("th:last").append(customapps.admin.refreshButton());
        var $refreshLink = AJS.$("#refresh-capabilities-link"),
            $refreshIcon = $refreshLink.find("#refresh-capabilities-icon");
        $refreshLink.click(function (e) {
            e.preventDefault();
            $refreshIcon.removeClass("aui-iconfont-build").addClass("aui-icon-wait");
            AJS.$.ajax({
                url: AJS.contextPath() + "/rest/capabilities-consumer/1.0/admin/refreshcache",
                type: "POST",
                success: function () {
                    AJS.$.each(customAppTable.getRows(), function () {
                        customAppTable.removeRow(this);
                    });
                    AJS.$.get(customAppTable.options.resources.all, function (entries) {
                        customAppTable.populate(entries);
                    });
                    $refreshIcon.removeClass("aui-icon-wait").addClass("aui-iconfont-build");
                },
                error: function () {
                    // ADG does not have a PATTERN for this JUST YET ooops :) silence is golden
                }
            })
        });
        refreshInitialized = true;
    };

    AJS.$(customAppTable).bind(AJS.RestfulTable.Events.INITIALIZED, function () {
        if (!refreshInitialized) {
            addRefreshButton();
        }

    });
});
