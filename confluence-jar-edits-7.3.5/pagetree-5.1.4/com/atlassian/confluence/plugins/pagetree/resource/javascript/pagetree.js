(function() {

    var MobileMacroHelper = function(jz) {
        this.$ = jz;
        var $ = this.$;

        var MAX_DEPTH = 999;
        var MODE_EXPAND = true;
        var MODE_COLLAPSE = false;

        var treeRequests = {};
        var targetPages = {};

        /**
         * Expands or collapses the tree
         *
         * @param {Boolean} doExpand - expands or collapses the tree
         */
        var toggleChild = function (link, doExpand, startDepth, clearStatusMessage, mobile) {
            var expanded = link.dataset.expanded === 'true';

            // if no doExpand is set, toggle current mode
            if (doExpand == undefined || doExpand == null) {
                doExpand = !expanded;
            }

            //if no startDepth is set, default to zero
            if (startDepth == undefined || startDepth == null) {
                startDepth = 0;
            }

            var childrenAreLoaded = link.getAttribute('data-children-loaded') === 'true';

            // execute only if current state is different with target mode
            if (expanded !== doExpand) {
                var id = link.getAttribute('data-page-id') + '-' + link.getAttribute('data-tree-id');
                var childrenDiv = $("#children" + id);
                if (childrenAreLoaded) {
                    if (doExpand == MODE_EXPAND) {
                        link.classList.remove("aui-iconfont-chevron-right");
                        link.classList.add("aui-iconfont-chevron-down");
                        link.setAttribute('data-expanded', true);
                    } else {
                        link.classList.remove("aui-iconfont-chevron-down");
                        link.classList.add("aui-iconfont-chevron-right");
                        link.setAttribute('data-expanded', false);
                    }

                    if (doExpand == MODE_EXPAND) {
                        if(mobile == false) {
                            childrenDiv.slideDown(300);
                        } else {
                            childrenDiv.removeClass("plugin-pagetree-hide-children");
                            childrenDiv.animate({opacity:1});
                        }
                    } else {
                        if(mobile == false) {
                            childrenDiv.slideUp(300);
                        } else {
                            childrenDiv.animate({opacity:0}, {
                                complete : function() {
                                    childrenDiv.addClass("plugin-pagetree-hide-children");
                                }
                            });
                        }

                    }
                    if (clearStatusMessage) {
                        finishLoadingMessage(id);
                    }
                } else {
                    loadChildren(link, id, new Array(), startDepth, "", clearStatusMessage, mobile, true);
                }
            }

            if (clearStatusMessage) {
                finishLoadingMessage(id);
            }
        };

        var expandAll = function(id, e, mobile) {
            doExpandCollapseAll(id, MODE_EXPAND, e, mobile);
        };

        var collapseAll = function(id, e, mobile) {
            doExpandCollapseAll(id, MODE_COLLAPSE, e, mobile);
        };

        /**
         * mode: true=expand, false=collapse
         */
        var doExpandCollapseAll = function(id, mode, e, mobile) {
            startLoadingMessage(id);
            var containerDiv = $("#" + id);
            var childDivs = containerDiv.find('a.plugin_pagetree_childtoggle[data-type="toggle"]');

            childDivs.each(
                function(index) {
                    // check if last item before removing the loading message
                    toggleChild(this, mode, MAX_DEPTH, index == childDivs.length - 1, mobile);
                }
            );
            e.preventDefault();
            e.stopPropagation();
        };

        /**
         * name would be in a format like "children393219-1" or "plusminus393219-1".
         * This function would just extract the "393219-1" part and return it.
         */
        var getIdFromElementName = function(name) {
            if (!name || name == undefined) return null;

            if (name.indexOf("plusminus") != -1) return name.substring("plusminus".length);
            if (name.indexOf("children") != -1) return name.substring("children".length);
            return null;
        };

        /**
         * elementId would be in a format like "393219-1".
         * This function would just extract the "1" part and return it.
         */
        var getTreeIdFromElementId = function(elementId) {
            if (!elementId || elementId == undefined) return null;

            // split the elementId and return the pageId
            return parseId(elementId)[1];
        };

        /**
         * elementId would be in a format like "393219-1".
         * This function would just return an array with format ["393219", "1"]
         */
        var parseId = function(elementId) {
            if (!elementId || elementId == undefined) return null;

            // split the elementId and return the pageId
            return elementId.split("-");
        };

        var startLoadingMessage = function(id) {
            var treeId = getTreeIdFromElementId(id);

            $("div.plugin_pagetree").each(
                function(pagetreeId) {
                    if (pagetreeId == treeId) {
                        $(this).find("span.plugin_pagetree_status").removeClass("hidden");
                        $(this).find("div.plugin_pagetree_expandcollapse").addClass("hidden");
                    }
                }
            );
        };

        var finishLoadingMessage = function(id) {
            var treeId = getTreeIdFromElementId(id);

            $("div.plugin_pagetree").each(
                function(pagetreeId) {
                    if (pagetreeId == treeId) {
                        $(this).find("span.plugin_pagetree_status").addClass("hidden");
                        $(this).find("div.plugin_pagetree_expandcollapse").removeClass("hidden");
                    }
                }
            );
        };

        var generateRequestString = function(treeId, pageId, ancestors, startDepth, spaceKey, treePageId, mobile, loadMore, onlyElementsAfter, onlyElementsBefore) {
            var reqString = treeRequests[treeId];

            if (pageId == "Orphan")
                reqString += "&hasRoot=false&spaceKey=" + spaceKey;
            else
                reqString += "&hasRoot=true&pageId=" + pageId;

            reqString += "&treeId=" + treeId + "&startDepth=" + startDepth + "&mobile=" + mobile;

            $.each(ancestors, function() {
                reqString += "&ancestors=" + this;
            });

            if (loadMore) {
                reqString += "&loadMore=true";
            }

            if (onlyElementsAfter != null) {
                reqString += "&elementsAfter=" + onlyElementsAfter;
            }

            if (onlyElementsBefore != null) {
                reqString += "&elementsBefore=" + onlyElementsBefore;
            }

            reqString += "&treePageId=" + treePageId;

            if(mobile == false) {
                reqString = (AJS.params.serverUrl || "") + reqString;
            }

            return reqString;
        };

        var getPageTreeDiv = function(treeId) {
            var pagetreeId = treeId;
            var pagetreeDiv = null;

            $("div.plugin_pagetree").each(
                function(index) {
                    if (index == pagetreeId)
                        pagetreeDiv = $(this);
                }
            );

            return pagetreeDiv;
        };

        var getPageTreeParams = function(pagetreeDiv) {
            var paramsFieldSet = pagetreeDiv.children("fieldset");
            var params = new Object();

            if (paramsFieldSet.length > 0) {
                paramsFieldSet.children("input").each(function() {
                    params[this.name] = this.value;
                });
            }

            return params;
        };

        var getPageTreeAncestorIds = function(pagetreeDiv) {
            var paramsFieldSet = pagetreeDiv.children("fieldset");
            var ancestorIds = new Array();

            if (paramsFieldSet.length > 0) {
                var ancestorIdFieldset = paramsFieldSet.children("fieldset");
                if (ancestorIdFieldset.length > 0) {
                    ancestorIdFieldset.children("input").each(function() {
                        ancestorIds.push(this.value);
                    });
                }
            }

            return ancestorIds;
        };

        var isChildrenHtml = function(html) {
            var testDiv = $(document.createElement("div"));

            testDiv.html(html);
            return testDiv.find("ul[id^='child_ul']").length;
        };

        var loadChildren = function(link, rootPage, ancestorIds, startDepth, spaceKey, clearStatusMessage, mobile, delaySpinner, loadMore, onlyElementsAfter, onlyElementsBefore, anchorId) {
            var _rootPage = rootPage;
            var _clearStatusMesssage = clearStatusMessage;
            var ids = parseId(rootPage);
            var pageId = ids[0];
            var treeId = ids[1];
            var pagetreeChildrenDiv = $("#children" + rootPage);
            var pagetreeParams = getPageTreeParams(getPageTreeDiv(treeId));
            var requestComplete = false;

            function initSpinner() {
                if (onlyElementsAfter || onlyElementsBefore) {
                    link.innerHTML = "Loading...";
                } else {
                    var loadingIndicator = Confluence.Templates.Pagetree.Macro.loadingIndicator();
                    pagetreeChildrenDiv.find('.plugin_pagetree_children_loading_wrapper .spinner').spin('small');

                    if (onlyElementsBefore) {
                        pagetreeChildrenDiv.html(loadingIndicator + pagetreeChildrenDiv.html());
                    } else {
                        pagetreeChildrenDiv.append(loadingIndicator);
                    }
                }
            }

            // used for automatic scrolling when we load "previous" elements
            var prevTop = 0;
            if (typeof anchorId !== 'undefined' && anchorId) {
                prevTop = $("#" + anchorId).offset().top;
            }

            if (delaySpinner) {
                setTimeout(function () {
                    if (!requestComplete) {
                        initSpinner()
                    }
                }, 250);
            } else {
                initSpinner();
            }

            $.ajax({
                type : "GET",
                url :  generateRequestString(treeId, pageId, ancestorIds, startDepth, pagetreeParams["spaceKey"], pagetreeParams["treePageId"], mobile, loadMore, onlyElementsAfter, onlyElementsBefore),
                dataType : 'text',
                success : function(responseText) {
                    if (isChildrenHtml(responseText)) {
                        $('.plugin_pagetree_children_loading_wrapper').remove();
                        if (onlyElementsBefore != null) {
                            var content = pagetreeChildrenDiv.html();
                            pagetreeChildrenDiv.html(responseText + content);
                        } else {
                            pagetreeChildrenDiv.append(responseText);
                        }
                        requestComplete = true;

                        // when we load previous elements, we have to scroll tree back
                        if (typeof anchorId !== 'undefined') {
                            var diff = $("#" + anchorId).offset().top - prevTop;
                            document.getElementsByClassName('acs-side-bar')[0].scrollTop = document.getElementsByClassName('acs-side-bar')[0].scrollTop + diff;
                        }

                        // In IE, empty divs have height and it causes the UI to look like shit, which will be hidden by hideEmptyChildrenContainers() and unhidden here
                        if (pagetreeChildrenDiv.children().length && pagetreeChildrenDiv.hasClass("hidden"))
                            pagetreeChildrenDiv.removeClass("hidden");

                        /* Make the + a - */
                        $("#plusminus" + _rootPage).addClass("aui-iconfont-chevron-down").removeClass("aui-iconfont-chevron-right");

                        /* Highlight target page if it exists */
                        $("#childrenspan" + targetPages[parseInt(treeId)] + "-" + treeId).addClass("plugin_pagetree_current");

                        if (_clearStatusMesssage)
                            finishLoadingMessage(_rootPage);


                        if(typeof link !== "undefined") {
                            link.setAttribute('data-children-loaded', true);
                            link.setAttribute('data-expanded', true);
                        }

                        if (onlyElementsAfter) {
                            $('#children' + rootPage + ' > ul > .page-tree-load-more-link-after').remove();
                        }
                        if (onlyElementsBefore) {
                            $('#children' + rootPage + ' > ul > .page-tree-load-more-link-before').remove();
                        }

                        hideEmptyChildrenContainers(pagetreeChildrenDiv);
                        if (AJS.PageGadget && AJS.PageGadget.contentsUpdated) {
                            AJS.PageGadget.contentsUpdated();
                        }
                    } else {
                        window.location = pagetreeParams["loginUrl"];
                    }
                    AJS.trigger('pagetree-children-loaded');
                },
                error : function(request) {
                    if (request.status == "403") {
                        // PGTR-76 - If current user doesn't has view permission to the root page, the page will keep refreshing. To fix that, we'll be displaying a message.
                        pagetreeChildrenDiv.text(pagetreeParams["i18n-pagetree.error.permission"]);
                    } else {
                        pagetreeChildrenDiv.text(pagetreeParams["i18n-pagetree.error.general"]);
                    }
                }
            });
        };

        var hideEmptyChildrenContainers = function(pagetreeChildrenDiv) {
            $("div.plugin_pagetree_children_container:empty", pagetreeChildrenDiv).addClass("hidden");
        };

        function eventHandler(e) {
            var link = e.target;
            var type = link.getAttribute("data-type");
            var mobile = e.currentTarget.getAttribute("data-mobile") === "true";

            if (type === 'toggle') {
                e.preventDefault();
                e.stopPropagation();
                toggleChild(e.target, null, null, null, mobile);
            } else if (type === 'load-all-after') {
                var lastRenderedId = link.getAttribute("data-last-rendered-id");
                var id = link.getAttribute('data-page-id') + '-' + link.getAttribute('data-tree-id');
                loadChildren(e.target, id, new Array(), null, "", "", mobile, false, true, lastRenderedId, null);
            } else if (type === 'load-all-before') {
                var firstRenderedId = link.getAttribute("data-first-rendered-id");
                var id = link.getAttribute('data-page-id') + '-' + link.getAttribute('data-tree-id');
                var nextSpanId = "childrenspan" + firstRenderedId + '-' + link.getAttribute('data-tree-id');
                loadChildren(e.target, id, new Array(), null, "", "", mobile, false, false, null, firstRenderedId, nextSpanId);
            } else {
                return;
            }

            e.preventDefault();
            e.stopPropagation();
        }

        var initPageTree = function(pagetreeDiv, pagetreeId, loadMore) {
            pagetreeDiv[0].addEventListener("click", eventHandler, {passive: false});
            var pagetreeParams = getPageTreeParams(pagetreeDiv);
            var noRoot = pagetreeParams["noRoot"] == "true";
            var rootPage =  noRoot ? "Orphan-" + pagetreeId : pagetreeParams["rootPageId"] + "-" + pagetreeId;
            var mobile = pagetreeParams["mobile"] == "true";
            if (mobile) {
                pagetreeDiv[0].setAttribute("data-mobile", mobile);
            }

            treeRequests[pagetreeId] = pagetreeParams["treeRequestId"];

            if (mobile == false) {
                targetPages[pagetreeId] = AJS.params.pageId;
            } else {
                targetPages[pagetreeId] = $("div.content-container").parent().attr('data-content-id');
            }

            pagetreeDiv.children("fieldset").each(
                function() {
                    var jQueryThis = $(this);

                    jQueryThis.children("input[treeId]").attr("value", pagetreeId);
                    jQueryThis.children("input[rootPage]").attr("value", rootPage);
                }
            );

            if (noRoot) {
                pagetreeDiv.find("div.plugin_pagetree_children").attr("id", "childrenOrphan-" + pagetreeId);
                pagetreeDiv.find("a.plugin_pagetree_expandall").click(
                    function(e) {
                        expandAll("childrenOrphan-" + pagetreeId, e, mobile);
                        return false;
                    }
                );
                pagetreeDiv.find("a.plugin_pagetree_collapseall").click(
                    function(e) {
                        collapseAll("childrenOrphan-" + pagetreeId, e, mobile);
                        return false;
                    }
                );
            } else {
                pagetreeDiv.find("div.plugin_pagetree_children").attr("id", "children" + rootPage);
                pagetreeDiv.find("a.plugin_pagetree_expandall").click(
                    function(e) {
                        expandAll("children" + rootPage, e, mobile);
                        return false;
                    }
                );
                pagetreeDiv.find("a.plugin_pagetree_collapseall").click(
                    function(e) {
                        collapseAll("children" + rootPage, e, mobile);
                        return false;
                    }
                );
            }

            var pagetreeAncestorIds = getPageTreeAncestorIds(pagetreeDiv);
            loadChildren(
                undefined, rootPage, pagetreeAncestorIds, pagetreeParams["startDepth"], pagetreeParams["spaceKey"], "", mobile, false, loadMore, null, null
            );
        };

        this.initPageTrees = function(loadMore) {
            $("div.plugin_pagetree").each(function(pagetreeId) {
                initPageTree($(this), pagetreeId, loadMore);
            });
            avoidBeingFocusedByBodyLoadFunction();
        };

        // The placeFocus() function won't focus on fields belonging to the form 'inlinecommentform'
        var avoidBeingFocusedByBodyLoadFunction = function() {
            var placeFocusFunction = self["placeFocus"];
            if (placeFocusFunction) {
                self["placeFocus"] = function() {
                    var pagetreeSearchForms = $("form[name='pagetreesearchform']");

                    pagetreeSearchForms.attr("name", "inlinecommentform");
                    placeFocusFunction();
                    pagetreeSearchForms.attr("name", "pagetreesearchform");
                };
            }
        };

        $(".open-flyout-to-search").bind("click",
            function(event) {
                if($(".fly-out-open").length)
                {
                    setTimeout(function() {
                        ConfluenceMobile.flyout.hide();
                    }, 400);
                }
                else
                {
                    setTimeout(function() {
                        ConfluenceMobile.flyout.show();

                    }, 400);
                }
                event.stopPropagation();
                event.preventDefault();
            }
        );
    };

    Confluence = Confluence || {};
    Confluence.Plugins = Confluence.Plugins || {};

    Confluence.Plugins.PagetreeMacro = {
        bind: function(jz) {
            var helper = new MobileMacroHelper(jz);
            helper.initPageTrees(false);
        }
    };

})();