(function ($, NL) {
    var IS_USER_ADMIN_KEY = 'is-user-admin';
    var SIDEBAR_SELECTOR = '#app-switcher';

    NL.SideBar = function (options) {
        var that = this;
        this.$sidebar = null;

        options = $.extend({
            sidebarContents: null
        }, options);

        this.getLinks = function () {
            return $.ajax({
                url: AJS.contextPath() + '/rest/menu/latest/appswitcher',
                cache: false,
                dataType: 'json'
            }).done(this.updateAppLinks).fail(this.showAppSwitcherError);
        };

        this.populateProjectHeader = function (name, avatarUrl) {
            that.getSidebar().find('.app-switcher-shortcuts .aui-nav-heading').after(navlinks.templates.appswitcher.projectHeaderSection({
                avatarUrl: avatarUrl,
                name: name
            }));
        };

        this.getProjectData = function () {
            var $projectData = $('.project-shortcut-dialog-trigger'),
                projectKey = $projectData.data('key'),
                projectEntityType = $projectData.data('entity-type');
            // if we have no project data, we are not in a project context, so delete the shortcuts section and return.
            if ($projectData.size() == 0 || !projectKey || !projectEntityType) {
                $('.app-switcher-shortcuts').remove();
                return;
            }

            var remote, local;

            local = $.ajax({
                url: AJS.contextPath() + '/rest/project-shortcuts/1.0/local/' + projectKey,
                cache: false,
                data: {entityType: projectEntityType},
                dataType: 'json'
            });

            remote = $.ajax({
                url: AJS.contextPath() + '/rest/project-shortcuts/1.0/remote/' + projectKey,
                cache: false,
                data: {entityType: projectEntityType},
                dataType: 'json'
            });

            // wrap a closure around updateProjectShortcuts so we can bind projectKey
            $.when(local, remote).then(function (localData, remoteData) {
                that.updateProjectShortcuts(localData, remoteData, {
                    key: projectKey,
                    entityType: projectEntityType,
                    name: $projectData.data('name'),
                    avatarUrl: $projectData.find('img').prop('src')
                });
            }, that.showProjectShortcutsError);
        }

        this.getSidebar = function () {
            if (!this.$sidebar) {
                this.$sidebar = $(options.sidebarContents);
            }
            return this.$sidebar;
        };

        this.addApplicationsCog = function () {
            $('.app-switcher-applications .aui-nav-heading').before(navlinks.templates.appswitcher.cogDropdown({
                id: 'sidebar-applications-admin-dropdown',
                links: [{
                    href: AJS.contextPath() + '/plugins/servlet/customize-application-navigator',
                    label: AJS.I18n.getText('sidebar.applications.configure.navigator.label'),
                    title: AJS.I18n.getText('sidebar.applications.configure.navigator.title')
                }, {
                    href: AJS.contextPath() + '/plugins/servlet/applinks/listApplicationLinks',
                    label: AJS.I18n.getText('sidebar.applications.configure.applinks.label'),
                    title: AJS.I18n.getText('sidebar.applications.configure.applinks.title')
                }]
            }));
        };

        this.addProjectShortcutsCog = function (projectKey, entityType) {
            var links = [{
                href: AJS.contextPath() + '/plugins/servlet/custom-content-links-admin?entityKey=' + projectKey,
                label: AJS.I18n.getText('sidebar.projectshortcuts.configure.contentlinks.label'),
                title: AJS.I18n.getText('sidebar.projectshortcuts.configure.contentlinks.title')
            }];

            if (that.entityMappings[entityType]) {
                links.push({
                    href: that.generateEntityLinksUrl(projectKey, that.entityMappings[entityType]),
                    label: AJS.I18n.getText('sidebar.projectshortcuts.configure.applinks.label'),
                    title: AJS.I18n.getText('sidebar.projectshortcuts.configure.applinks.title')
                });
            }

            that.getSidebar().find('.app-switcher-shortcuts .aui-nav-heading').before(navlinks.templates.appswitcher.cogDropdown({
                id: 'sidebar-project-shortcuts-admin-dropdown',
                links: links
            }));
        };

        this.updateAppLinks = function (data) {
            $(function () {
                that.getSidebar().find('.app-switcher-applications').html(navlinks.templates.appswitcher.linkSection({
                    title: AJS.I18n.getText('appswitcher.applicationSectionTitle'),
                    list: data
                }));

                if (that.getSidebar().data(IS_USER_ADMIN_KEY)) {
                    that.addApplicationsCog();
                }

                that.bindAnalyticsHandlers(that.getSidebar(), data);
            });
        };

        this.updateProjectShortcuts = function (localData, remoteData, projectData) {
            var localLinks = localData[0].shortcuts,
                remoteLinks = remoteData[0].shortcuts

            that.getSidebar().find('.app-switcher-shortcuts').html(navlinks.templates.appswitcher.linkSection({
                title: AJS.I18n.getText('appswitcher.projectShortcutSectionTitle'),
                list: localLinks.concat(remoteLinks)
            }));

            // if we're an admin, put some project admin links in too
            if (that.getSidebar().data(IS_USER_ADMIN_KEY)) {
                that.addProjectShortcutsCog(projectData.key, projectData.entityType);
            }

            that.populateProjectHeader(projectData.name, projectData.avatarUrl);

            that.bindAnalyticsHandlers(that.getSidebar(), data);
        };

        // Warning: ick.
        this.entityMappings = {
            'confluence.space': 'com.atlassian.applinks.api.application.confluence.ConfluenceSpaceEntityType',
            'jira.project': 'com.atlassian.applinks.api.application.jira.JiraProjectEntityType',
            'bamboo.project': 'com.atlassian.applinks.api.application.bamboo.BambooProjectEntityType',
            'stash.project': 'com.atlassian.applinks.api.application.stash.StashProjectEntityType'
        }
        this.generateEntityLinksUrl = function (projectKey, entityType) {
            // special case for confluence which has a much nicer entity links page
            if (entityType === that.entityMappings['confluence.space']) {
                return AJS.contextPath() + '/spaces/listentitylinks.action?typeId=' + entityType + '&key=' + projectKey;
            } else {
                return AJS.contextPath() + '/plugins/servlet/applinks/listEntityLinks/' + entityType + '/' + projectKey;
            }
        }

        this.showAppSwitcherError = function () {
            $(function () {
                var $sidebar = that.getSidebar();
                $sidebar.find('.app-switcher-applications .app-switcher-loading')
                    .replaceWith(navlinks.templates.appswitcher.error())
                $sidebar.off('.appswitcher')
                    .on('click.appswitcher', '.app-switcher-retry', $.proxy(that.retryLoading, that));
            });
        };

        this.showProjectShortcutsError = function () {
            $(function () {
                var $sidebar = that.getSidebar();
                $sidebar.find('.app-switcher-shortcuts .app-switcher-loading')
                    .replaceWith(navlinks.templates.appswitcher.error());
                $sidebar.off('.appswitcher')
                    .on('click.appswitcher', '.app-switcher-retry', $.proxy(that.retryLoading, that));
            });
        };

        this.retryLoading = function (e) {
            this.getSidebar().html(navlinks.templates.appswitcher.sidebarContents());
            this.getLinks();
            this.getProjectData();
            e && e.stopPropagation();
        };

        this.bindAnalyticsHandlers = function ($sidebar, apps) {
            // TODO: reconsider what we want to capture
        };

        this.getLinks();
        $(this.getProjectData);

        this.toggleSidebar = function (event) {
            var sidebar = that.getSidebar(),
                body = $('body'), document = $(window.document);

            if (!body.hasClass('app-switcher-open')) {
                var header = $('#header');

                //append the sidebar to the body if this is the first toggle call.
                sidebar.css('left', -sidebar.width());
                sidebar.parent('body').length || sidebar.appendTo('body');
                sidebarStalk({data: sidebar});
                //Animation can be kicked off now that things are in position
                sidebar.animate({'left': 0}, 300);

                function closeSidebar(closeEvent) {
                    var target = closeEvent.target && $(closeEvent.target),
                        keyCode = closeEvent.keyCode;

                    //shortcut out if this is the same even which bound the event to begin with
                    if (closeEvent.originalEvent === event.originalEvent) {
                        return;
                    }

                    if (target && !keyCode && !(target.closest(sidebar).length || target.closest(header).length)
                        && event.which == 1 && !(closeEvent.shiftKey || closeEvent.ctrlKey || closeEvent.metaKey)) {
                        //event is a click outside of the toolbar or header
                        that.toggleSidebar();
                    } else if (keyCode === 27) {
                        //event is the escape key
                        that.toggleSidebar();
                    }
                }

                document.on('click.appSwitcher', closeSidebar);
                document.on('keydown.appSwitcher', closeSidebar);
                document.on('scroll.appSwitcher', sidebar, sidebarStalk);
            } else {
                document.off('.appSwitcher');
            }
            body.toggleClass('app-switcher-open');
        }

        $('#header').on('click', '.app-switcher-trigger', this.toggleSidebar);
    };

    function sidebarStalk(event) {
        var scrollPosition = $(document).scrollTop(),
            header = $('#header'),
            topOffset = (header.height() + header.offset().top) - scrollPosition;

        if (topOffset >= 0) {
            event.data.css({top: topOffset, position: 'fixed'});
        } else {
            event.data.css({top: 0, left: 0, position: 'fixed'});
        }
    }

    $(function () {
        if ($(SIDEBAR_SELECTOR).data('is-sidebar') === true) {
            new NL.SideBar({
                sidebarContents: SIDEBAR_SELECTOR
            });
        }
    })
}(jQuery, window.NL = (window.NL || {})));
