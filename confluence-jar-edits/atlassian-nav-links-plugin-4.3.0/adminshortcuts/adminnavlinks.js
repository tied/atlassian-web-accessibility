var NavLinks = (function (NavLinks) {

    NavLinks.AdminShortcuts = (function () {

        var _requestLinks = function () {
            return AJS.$.ajax({
                url: AJS.contextPath() + '/rest/menu/latest/admin',
                cache: false,
                dataType: 'json'
            });
        };

        var trackAnalytics = function () {
            AJS.$("#nl-remote-admin-section").on('click', 'a', function () {
                NL.trackEvent('remoteAdminItemSelected', NL.getCurrentApplication(), $(this).attr('href'));
            });
        };

        return {
            render: function () {

                _requestLinks().done(function (linkData) {

                    // filter links to exclude the local admin link
                    linkData = _.reject(linkData, function (link) {
                        return link['local'] === true;
                    });

                    if (linkData.length) {
                        // if we have remote admin links, render them in a new dropdown section
                        var renderedTemplate = navlinks.templates.adminshortcuts.section({links: linkData});
                        NavLinks.ApplicationHeader.Cog.getDropdown().append(renderedTemplate);

                        trackAnalytics();
                    }
                })
            }
        };
    }());

    return NavLinks;
}(NavLinks || {}));