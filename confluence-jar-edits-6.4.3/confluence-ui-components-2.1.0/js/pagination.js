/**
 * A generic, reusable pagination component.
 * You can see an example of usage of Pagination component in Page Properties Report macro
 *
 * Usage:
 *  Confluence.UI.Components.Pagination.build({
 *           'scope': $(obj),
 *           'pageSize': 10,
 *           'totalPages': 30,
 *           'currentPage': 0,
 *           'path': "/rest/masterdetail/1.0/detailssummary",
 *           'data': {
 *               'spaceKey': AJS.Meta.get('space-key'),
 *               'label': $table.data('label'),
 *               'spaces': spaces,
 *               'headings': headings,
 *               'sortBy': sortBy,
 *               'reverseSort': reverseSort
 *           },
 *           'url': "#",
 *           'success': function (data, $container) { }
 *       });
 *
 * Here are options of Confluence.UI.Components.Pagination
 * @param path {String} a string containing the URL to which the request is sent.
 * @param url {String} a url appears in href of anchor links in pagination, such as: next link, previous link. Default value is '#'
 * @param scope {jQuery Object} place HTML of pagination is inserted after that
 * @param data {Object} a object that is sent to server with the request.
 * @param pageSize {Integer} number of items in one page.
 * @param adaptive {boolean} a flag to indicate weather pagination is adaptive (in the case where the total number of pages is not initially known)
 * @param totalPages {Integer} number of pages.
 * @param pageLimit {Integer} the maximum number of pages to display at one time (in the pagination footer)
 * @param currentPage {Integer} current page.
 * @param success {Function} a callback function after calling is success.
 */

(function ($, module) {
    "use strict";

    var handlePagination = function ($paginationObj, totalPages, disable) {

        var links = $paginationObj.find("a").attr("aria-disabled", disable);

        if (disable) {
            links.attr("disabled", "disabled");
        }
        else {
            links.removeAttr("disabled");

            // enable/disable the prev/next buttons
            var selectedIndex = $(".aui-nav-selected", $paginationObj).data('index') + 1;
            $paginationObj.find(".aui-nav-next > a").attr("aria-disabled", selectedIndex == totalPages);
            $paginationObj.find(".aui-nav-previous > a").attr("aria-disabled", selectedIndex == 1);
        }
    };

    var optionDefaults = {
        scope: null, //jQuery object,
        success: null, //function object
        data: null, //object,
        path: "",
        url: "#",
        pageLimit: 7,
        currentPage: 0,
        adaptive: false,
        totalPages: 0,
        pageSize: 0
    };

    var calculateStartPage = function (currentPage, totalPages, pageLimit) {
        // Attempt to center the current page in the range of the pageLimit
        var idealRange = Math.floor(pageLimit / 2);
        var totalIdx = totalPages - 1;

        if (!pageLimit || totalPages <= pageLimit || currentPage - idealRange < 0) {
            return 0; // pages are zero indexed
        }

        if (currentPage + idealRange > totalIdx) {
            return totalPages - pageLimit;
        }

        return currentPage - idealRange;
    };

    var renderPagination = function (opts) {
        var totalPages = opts.totalPages,
            currentPage = opts.currentPage,
            pageLimit = opts.pageLimit,
            adaptive = opts.adaptive,
            itemsToRender;

        if (pageLimit) {
            if (adaptive) {
                totalPages = currentPage + pageLimit;
            }
            itemsToRender = pageLimit;
        } else {
            itemsToRender = totalPages;
        }

        var startPage = calculateStartPage(currentPage, totalPages, pageLimit);

        // Add the pagination footer
        return Confluence.UI.Components.Pagination.Templates.paginationFooter({
            currentPage: currentPage || 0,
            startPage: startPage,
            itemsToRender: itemsToRender,
            totalPages: totalPages,
            pageSize: opts.pageSize,
            url: opts.url || "#"
        });
    };

    // export API
    module.build = function (opts) {
        var options = _.extend({}, optionDefaults, opts);

        if (typeof options.success !== "function") {
            options.success = function () {
            };
        }

        var renderedPagination = renderPagination(options);
        options.scope.after(renderedPagination);

        var $paginationObj = options.scope.next();
        var initialPageIndex = $paginationObj.data("initial-page-index");

        $paginationObj.on('click', "a", function (e) {
            var $this = $(this),
                $tableOrParent = $this.parents('ol').prev(),
                $table = $tableOrParent.is('table') ? $tableOrParent : $tableOrParent.find('table');

            var pageIndex = $table.data('pageIndex') || initialPageIndex,
                $li = $this.parent("li");

            if ($li.hasClass("aui-nav-selected") || $li.find("> a[aria-disabled=true]").length) return;

            //NOTE the indexes are 0-based
            if ($li.hasClass("aui-nav-next")) {
                pageIndex++;
            } else if ($li.hasClass("aui-nav-previous")) {
                pageIndex--;
            } else {
                pageIndex = $li.data("index");
            }

            handlePagination($paginationObj, options.totalPages, true);

            var ajaxOptions = $.extend({}, {
                'pageSize': options.pageSize,
                'pageIndex': pageIndex
            }, options.data);

            $.getJSON(Confluence.getContextPath() + options.path, ajaxOptions)
                .done(function (data) {
                    pageIndex = data.currentPage;

                    var $tbody = $table.find('tbody');

                    $tbody.find('tr').remove();

                    $table.data('pageIndex', pageIndex);

                    _.each(data.detailLines, function (line) {
                        options.success(line, $tbody);
                    });

                    AJS.trigger("ui.components.pagination.updated", [data, options]);

                    var updatedOpts = $.extend({}, options, {
                        totalPages: data.totalPages,
                        adaptive: data.adaptive,
                        currentPage: pageIndex
                    });

                    $paginationObj.html(renderPagination(updatedOpts));
                    handlePagination($paginationObj, updatedOpts.totalPages, false);

                    Confluence.Binder.userHover();
                })
                .fail(function () {
                    handlePagination($paginationObj, options.totalPages, false);
                });
            e.preventDefault();
        });
    };

})(AJS.$, window.Confluence.UI.Components.Pagination);
