var NavLinks = (function (NavLinks) {

    NavLinks.ApplicationHeader = function (ApplicationHeader) {

        ApplicationHeader.Cog = (function () {

            var _get = function () {

                var jiraSection = AJS.$("#system-admin-menu-content");
                if (jiraSection.length > 0) {
                    return jiraSection;
                }

                var confluenceSection = AJS.$("#admin-menu-link-content");
                if (confluenceSection.length > 0) {
                    return confluenceSection;
                }

                // Bamboo
                return AJS.$("#bamboo\\.global\\.header-admin\\.menu");
            };

            return {
                getDropdown: _get
            };
        }());
        return ApplicationHeader;
    }(NavLinks.ApplicationHeader || {});

    return NavLinks;
}(NavLinks || {}));