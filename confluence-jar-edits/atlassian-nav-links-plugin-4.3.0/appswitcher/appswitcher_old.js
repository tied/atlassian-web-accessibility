var APPSWITCHER_TRIGGER_CLICK = "appswitcher.trigger.click";
var APPSWITCHER_DROPDOWN_SHOW = "appswitcher.dropdown.show";
var APPSWITCHER_DROPDOWN_DISPLAY_ERROR = "appswitcher.dropdown.display.error";
var APPSWITCHER_APP_LINK_CLICK = "appswitcher.app.link.click";
var APPSWITCHER_CONFIGURE_LINK_CLICK = "appswitcher.configure.link.click";

(function ($, NL) {
    var APP_SUGGESTION_KEY = 'isAppSuggestionAvailable';
    var SITE_ADMIN_KEY = 'isSiteAdminUser';
    var USER_ADMIN_KEY = 'isUserAdmin';
    var SWITCHER_SELECTOR = '#app-switcher';

    NL.AppSwitcher = function (options) {
        var ADMIN_EDIT_PATH = AJS.contextPath() + "/plugins/servlet/customize-application-navigator";
        var GLOBAL_BILLING_SYSTEM_DARK_FEATURE_KEY = "unified.usermanagement";
        var that = this;
        this.$dropdown = null;

        options = $.extend({
            dropdownContents: null
        }, options);

        this.getLinks = function () {
            return $.ajax({
                url: AJS.contextPath() + '/rest/menu/latest/appswitcher',
                cache: false,
                dataType: 'json'
            }).done(this.updateDropdown).fail(this.showError);
        };

        this.getDropdown = function () {
            if (!this.$dropdown) {
                this.$dropdown = $(options.dropdownContents);
                this.envData = this.$dropdown.data('environment');
            }
            return this.$dropdown;
        };

        this.updateDropdown = function (data) {
            $(function () {
                that.getDropdown().html(navlinks.templates.appswitcher_old.applications({
                    apps: data,
                    showAdminLink: that.envData[USER_ADMIN_KEY],
                    adminLink: ADMIN_EDIT_PATH
                }));

                that.bindAnalyticsHandlers();
                if (that.envData[APP_SUGGESTION_KEY] === true) {
                    that.handleSuggestionApps(data);
                }
            });
        };

        this.bindAnalyticsHandlers = function () {
            $(".app-switcher-trigger").on("click", function () {
                AJS.trigger("analyticsEvent", {name: APPSWITCHER_TRIGGER_CLICK});
            });

            $("#app-switcher").on("aui-dropdown2-show", function () {
                AJS.trigger("analyticsEvent", {name: APPSWITCHER_DROPDOWN_SHOW});
            });

            $('#app-switcher .nav-link').on('click', function () {
                var product = "custom";
                var productLink = $(this).find("a");
                var url = productLink.attr("href");
                var hostname = window.location.hostname;

                if (url && url.indexOf("bitbucket.org") > -1) {
                    product = "bitbucket-cloud";
                } else if (url.indexOf(hostname + "/wiki") > -1) {
                    product = "confluence";
                } else if (url.indexOf(hostname + "/build") > -1) {
                    product = "bamboo";
                } else if (url.indexOf(hostname) > -1) {
                    product = "jira";
                }

                AJS.trigger("analyticsEvent", {
                    name: APPSWITCHER_APP_LINK_CLICK,
                    data: {product: product}
                });
            });

            $('.nav-link-edit-wrapper').on('click', function () {
                AJS.trigger("analyticsEvent", {name: APPSWITCHER_CONFIGURE_LINK_CLICK});
            })
        };

        this.isBillingSystemEnabled = function () {
            return (this.envData[SITE_ADMIN_KEY] === true) && AJS.DarkFeatures.isEnabled(GLOBAL_BILLING_SYSTEM_DARK_FEATURE_KEY);
        };

        this.handleSuggestionApps = function (data) {

            var installedApps = _.map(data, function (app) {
                return app.applicationType.toLowerCase();
            });

            var $suggestionApps = $("<div id='app-switcher-suggestion-apps' class='aui-dropdown2-section'/>");
            $suggestionApps.html(navlinks.templates.appswitcher_old.suggestionApps);

            var apps = $suggestionApps.find('.suggestion-apps');
            var hasSuggestionApps = false;
            _.each(suggestions, function (value) {
                if (!_.contains(installedApps, value.appName)) {
                    hasSuggestionApps = true;
                    apps.append(navlinks.templates.appswitcher_old.suggestionApp({
                        suggestionApp: value,
                        isBillingSystemEnabled: that.isBillingSystemEnabled()
                    }));
                }
            });

            if (!hasSuggestionApps) return;

            $("#app-switcher").append($suggestionApps);

            $('.app-discovery-suggestion-app').click(function () {
                var $suggestionAppLink = $(this).find("a");
                var eventName;
                if (that.envData[SITE_ADMIN_KEY] === true) {
                    eventName = 'appswitcher.discovery.siteadmin.select.inproduct.';
                } else {
                    eventName = 'appswitcher.discovery.user.select.';
                }
                eventName = eventName + $suggestionAppLink.attr("id").toLowerCase();
                AJS.trigger("analytics", {name: eventName});
            });

            $('.app-discovery-suggestion-app').hover(function () {
                $(this).find("a").removeClass("active").removeClass("aui-dropdown2-active");
            });

            $('.app-discovery-cancel-button').click(function () {
                AJS.trigger("analytics", {name: "appswitcher.discovery.nothanks.button.click"});
                storeUserStorageData(KEY_NO_THANKS, "true");
                $suggestionApps.remove();
            });
        };

        this.showError = function () {
            $(function () {
                AJS.trigger("analyticsEvent", {name: APPSWITCHER_DROPDOWN_DISPLAY_ERROR});
                that.getDropdown()
                    .html(navlinks.templates.appswitcher_old.error())
                    .off('.appswitcher')
                    .on('click.appswitcher', '.app-switcher-retry', $.proxy(that.retryLoading, that));
            });
        };

        this.retryLoading = function (e) {
            this.getDropdown().html(navlinks.templates.appswitcher_old.loading());
            this.getLinks();
            e && e.stopPropagation();
        };

        this.getLinks();
    };

    var KEY_NO_THANKS = "key-no-thanks";
    var suggestions = [
        {
            appName: "jira",
            appDesc: AJS.I18n.getText('appswitcher.suggestion.jira.desc'),
            discoveryUrl: 'https://www.atlassian.com/software/jira',
            billingSystemDiscoveryUrl: '/admin/billing/addapplication'
        },
        {
            appName: "confluence",
            appDesc: AJS.I18n.getText('appswitcher.suggestion.confluence.desc'),
            discoveryUrl: 'https://www.atlassian.com/software/confluence',
            billingSystemDiscoveryUrl: '/admin/billing/addapplication?product=confluence.ondemand'
        },
        {
            appName: "bamboo",
            appDesc: AJS.I18n.getText('appswitcher.suggestion.bamboo.desc'),
            discoveryUrl: 'https://www.atlassian.com/software/bamboo',
            billingSystemDiscoveryUrl: '/admin/billing/addapplication?product=bamboo.ondemand'
        }];

    var storeUserStorageData = function (key, value) {
        $.ajax({
            url: AJS.contextPath() + '/rest/menu/latest/userdata/',
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify({
                key: key,
                value: value
            })
        });
    };

    $(function () {
        if ($(SWITCHER_SELECTOR).data('is-switcher') === true) {
            new NL.AppSwitcher({
                dropdownContents: SWITCHER_SELECTOR
            });
        }
    })
}(jQuery, window.NL = (window.NL || {})));