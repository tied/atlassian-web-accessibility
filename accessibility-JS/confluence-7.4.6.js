$(document).ready(function() {
    <!-- Robots/Crawlers -->
    if (window.location.href.indexOf("viewpreviousversions.action") > -1 || window.location.href.indexOf("diffpagesbyversion.action") > -1 || window.location.href.indexOf("viewpageattachments.action") > -1 || window.location.href.indexOf("viewinfo.action") > -1 || window.location.href.indexOf("/label/") > -1 || window.location.href.indexOf("configurerssfeed.action") > -1 || $('#page-intrash-container').length) {
        $("head").append('<meta name="robots" content="noindex, nofollow, noydir, noodp, noarchive, nocache" />');
    }
    $('a.aui-label-split-main[href^="/label/"]').attr('rel','tag nofollow');
	
    <!-- Fix Document Language -->
    $('html').attr('lang', 'en');

    <!-- Answers ITS Menu Link Adjustment -->
    $('#its-menu-link-content a[href$="/display/answers31"].spacelist-spacelink').attr('href', '/x/B4C6');

    <!-- Remove quick search from tab; can be entered through '/' -->
    $("#quick-search-query").attr("tabindex",[-1]);
    $("#quick-search-query").attr("placeholder","Search (Hotkey: ' / ')");

    /* Wait for element function */
    var waitForEl = function(selector,callback) {
        if (jQuery(selector).length) {
            callback();
        } else {
            setTimeout(function() {
                waitForEl(selector, callback);
            }, 100);
        }
    }; 

    /* 
     * COMPLETE: Allows filters in advanced search to be selectable by keyboard.
     *           This pairs with custom Jar modification of confluence-search-ui-plugin-3.0.0.jar.
     *           Only runs on the search page, then waits for the elements to appear.
     */
    var url = document.location.href;
    if (url.indexOf("dosearchsite.action") > -1) {
        //console.log("***** FOUND DOSEARCHSITE IN URL *****")
        waitForEl('div.cql-filter-field-input-container div ul li a', function() {
            //console.log("FOUND ELEMENT");
            $('div.cql-filter-field-input-container div ul li a').on('keypress',function(e){
                var keyCode = e.which;
                if ((keyCode===13)||(keyCode===32)) {
                    $(this).click();
                }
            });
        });
        waitForEl('#s2id_autogen1', function() {
            //console.log("FOUND ELEMENT");
            $('#s2id_autogen1').before('<label for="s2id_autogen1" class="assistive">Contributor Filter Field</label>');
        });
        waitForEl('#s2id_autogen2', function() {
            //console.log("FOUND ELEMENT");
            $('#s2id_autogen2').before('<label for="s2id_autogen2" class="assistive">Space Filter Field</label>');
        });
        waitForEl('#s2id_autogen3', function() {
            //console.log("FOUND ELEMENT");
            $('#s2id_autogen3').before('<label for="s2id_autogen3" class="assistive">Filter Field 3</label>');
        });
        waitForEl('#cql-add-filter-field', function() {
            //console.log("FOUND ELEMENT");
            $('#cql-add-filter-field').before('<label for="cql-add-filter-field" class="assistive">CQL Add Filter Field</label>');
        });
        waitForEl('div.select2-search input.select2-input', function() {
            //console.log("FOUND ELEMENT");
            $('div.select2-search input.select2-input').prop('id','rand_input_1');
            $('#rand_input_1').before('<label for="rand_input_1" class="assistive">Rand Field 1</label>');
        });

    };

    /**** Top Menu Link Fix: Add role="menu-item" for ARIA ****/

    $('ul.spaces-by-category-user-macro li a').attr('role','menuitem');

    /**** Top Keyboard Navigation Fix ****/
    
    var ddFocus; // Retain focused element after selecting drop down section with keyboard

    /* Following function brings focus to the first link element in each 
     * section's corresponding drop down, as well as sets the ddFocus 
     * variable.
     */
    $('div.aui-header-primary ul.aui-nav li a.aui-dropdown2-trigger').on('keydown', function(e){
        
        // Enter, space, or Down Arrow keys
        if ((e.keyCode===13)||(e.keyCode===32)||(e.keyCode===40)) {

            console.log("***** BEGIN DROP DOWN CHECKS *****");

            // Element ID 
            var eID=$(this).attr('id');
            //console.log("Element ID: "+eID);

            // Element ID Content Container Selector
            var eIDC=eID+"-content";
            //console.log("Content Selector: "+eIDC);

            // Create full element selector
            var eSelector="#"+eIDC+" div:first-child span:first-child ul li:first-child a";
            //console.log("Full Selector: "+eSelector);

            // Set focus to first link element in content container
            $(eSelector).attr('tabindex','-1').focus();

            // Set drop down focus
            ddFocus=$(eSelector);
        }
    });
    
    // Allows keyboard navigation by arrow keys to the drop downs 
    $('li a').on('keydown', function(e){
        // DOWN
        if (e.keyCode == 40) {
            isNext=$(ddFocus).parent().next().length
            //console.log("Next Parent Length (Down): "+isNext);
            if (isNext > 0){
                //console.log("DOWN");
                $(ddFocus).parent().next().children().focus();
                ddFocus=$(':focus');
                //console.log(ddFocus);
            } else {
                //isNextSection=$(ddFocus).closest('span.conf-macro').nextAll('span.conf-macro:first').find('ul>li>a').length;
                isNextSection=$(ddFocus).closest('span.conf-macro').nextAll('span.conf-macro:first').length;
                //nextSection=$(ddFocus).closest('span.conf-macro').nextAll('span.conf-macro:first').find('ul>li>a');
                nextSection=$(ddFocus).closest('span.conf-macro').nextAll('span.conf-macro:first');
                //console.log("Next Section Length (Down): "+isNextSection);
                //console.log("Next Section: "+nextSection.html());
                if (isNextSection > 0){
                    nextSectionFirstLink=nextSection.find('ul>li:first-child>a').focus();
                    ddFocus=$(':focus');
                }
            }
        // UP
        } else if (e.keyCode == 38) {
            isPrev=$(ddFocus).parent().prev().length
            //console.log("Prev Parent Length (Up): "+isPrev);
            if (isPrev > 0){
                //console.log("DOWN");
                $(ddFocus).parent().prev().children().focus();
                ddFocus=$(':focus');
                //console.log(ddFocus);
            } else {
                //isNextSection=$(ddFocus).closest('span.conf-macro').nextAll('span.conf-macro:first').find('ul>li>a').length;
                isPrevSection=$(ddFocus).closest('span.conf-macro').prevAll('span.conf-macro:first').length;
                //nextSection=$(ddFocus).closest('span.conf-macro').nextAll('span.conf-macro:first').find('ul>li>a');
                prevSection=$(ddFocus).closest('span.conf-macro').prevAll('span.conf-macro:first');
                //console.log("Prev Section Length (Up): "+isPrevSection);
                //console.log("Prev Section: "+prevSection.html());
                if (isPrevSection > 0){
                    prevSectionFirstLink=prevSection.find('ul>li:last-child>a').focus();
                    ddFocus=$(':focus');
                }
            }
        }
    });

    <!-- Fix Skip Links -->
    if (window.location.href.indexOf("editpage.action") > -1 || window.location.href.indexOf("resumedraft.action") > -1) {
        $('a[href^="#title-heading"]').attr('href', '#content-title-div').text('Skip to Content').attr('onclick', '$(\'#content-title-div\')[0].focus()');
        $('a[href^="#header-menu-bar"]').attr('href', '#rte-toolbar').text('Skip to Edit Toolbar').attr('onclick', '$(\'#rte-toolbar\')[0].focus()');
        $('a[href^="#navigation"]').remove();
        $('a[href^="#quick-search-query"]').text('Skip to Quick Search').attr('onclick', '$(\'#quick-search-query\')[0].focus()');
        $('#rte-savebar .aui-buttons, #rte-button-publish').prop('tabindex', '0');
    } else if (window.location.href.indexOf("/spacedirectory/view.action") > -1) {
        $('a[href^="#header-menu-bar"]').attr('href', '#space-directory').text('Skip to Side Navigation').attr('onclick', '$(\'#space-directory\')[0].focus()');
        $('#main, #space-directory, #space-search-result').attr('tabindex', '-1');
        $('a[href^="#title-heading"]').attr('href', '#main-content').text('Skip to Content').attr('onclick', '$(\'#main-content\')[0].focus()');
        $('a[href^="#breadcrumbs"]').remove();
        $('a[href^="#navigation"]').remove();
    } else if (window.location.href.indexOf("dashboard.action") > -1) {
        $('a.aui-sidebar-toggle').attr('role','button').attr('aria-label','Sidebar toggle');
        $('a[href^="#header-menu-bar"]').attr('href', '#nav-sidebar').text('Skip to Side Navigation').attr('onclick', '$(\'#nav-sidebar\')[0].focus()');
        $('div.aui-page-panel-inner').attr('id', 'main-content').attr('tabindex', '-1');
        $('a[href^="#title-heading"]').attr('href', '#main-content').text('Skip to Content').attr('onclick', '$(\'#main-content\')[0].focus()');
        $('a[href^="#breadcrumbs"]').remove();
        $('a[href^="#navigation"]').remove();
    } else if (window.location.href.indexOf("configurerssfeed.action") > -1) {
        $('select#spaces').removeAttr('tabindex');
        $('#spaces option, #excludedSpaceKeys option').removeAttr('title');
        $('a[href^="#nav-sidebar"]').remove();
        $('a[href^="#breadcrumbs"]').remove();
        $('a[href^="#header-menu-bar"]').remove();
        $('a[href^="#navigation"]').remove();
    } else if (window.location.href.indexOf("/spaces/") > -1) {
        $('#title-text').attr('tabindex', '-1');
        $('#content.space-activity #space-tools-body img').attr('alt','Graph displaying activity results');
        $('a[href^="#navigation"]').remove();
        $('a[href^="#breadcrumbs"]').remove();
        $('a[href^="#title-heading"]').attr('href', '#title-text').text('Skip to Content').attr('onclick', '$(\'#title-text\')[0].focus()');
        $('div.acs-side-bar.ia-scrollable-section').attr('id', 'nav-sidebar').attr('tabindex', '-1');
        $('a[href^="#header-menu-bar"]').attr('href', '#nav-sidebar').text('Skip to Side Navigation').attr('onclick', '$(\'#nav-sidebar\')[0].focus()');
        $('a[href^="#quick-search-query"]').text('Skip to Quick Search').attr('onclick', '$(\'#quick-search-query\')[0].focus()');
	} else if (window.location.href.indexOf("dosearchsite.action") > -1) {
        $('#title-text, #filter-form').attr('tabindex', '-1');
        $('a[href^="#title-heading"]').attr('href', '#title-text').text('Skip to Content').attr('onclick', '$(\'#title-text\')[0].focus()');
        $('a[href^="#breadcrumbs"]').remove();
		$('a[href^="#navigation"]').remove();
        $('a[href^="#nav-sidebar"]').attr('href', '#filter-form').text('Skip to Filters').attr('onclick', '$(\'#filter-form\')[0].focus()');
        $('a[href^="#quick-search-query"]').text('Skip to Quick Search').attr('onclick', '$(\'#quick-search-query\')[0].focus()');			
    } else {
        $('#title-text').attr('tabindex', '-1');
        $('a[href^="#title-heading"]').attr('href', '#title-text').text('Skip to Content').attr('onclick', '$(\'#title-text\')[0].focus()');
        $('a[href^="#breadcrumbs"]').text('Skip to Breadcrumbs').attr('onclick', '$(\'#breadcrumbs\')[0].focus()');
        $('div.acs-side-bar.ia-scrollable-section').attr('id', 'nav-sidebar').attr('tabindex', '-1');
        $('a[href^="#header-menu-bar"]').attr('href', '#nav-sidebar').text('Skip to Side Navigation').attr('onclick', '$(\'#nav-sidebar\')[0].focus()');
        $('a[href^="#navigation"]').text('Skip to Page Action Menu').attr('onclick', '$(\'#navigation\')[0].focus()');
        $('a[href^="#quick-search-query"]').text('Skip to Quick Search').attr('onclick', '$(\'#quick-search-query\')[0].focus()');
    }
	
    <!-- Adjust Nav Menu Height -->
    windowHeight = $(window).height();
    headHeight = $('#header').height();
    warnHeight = $('#site-wide-warning').height();
    headPrecurserHeight = $('#header-precursor').height();
    navDropdownHeight = windowHeight - headHeight - warnHeight - headPrecurserHeight - 50;
    $('div#its-menu-link-content').css({
        'max-height': navDropdownHeight + 'px'
    });

    <!-- Remove Metadata and Banner Skip Links -->
    $('a[href^="#page-metadata-end"], a[href^="#page-metadata-start"], a[href^="#page-banner-end"], a[href^="#page-banner-start"], div#page-metadata-start, div#page-metadata-end, div#page-banner-start, div#page-banner-end').remove();

    <!-- Remove Site Name From H Tag -->
    if (window.location.href.indexOf("/admin/") < 1 && window.location.href.indexOf("/plugins/") < 1) {
        $('h1#logo').contents().unwrap();
        $('div.aui-header-logo a').wrap('<div class="aui-header-logo aui-header-logo-custom" id="logo"/>');
    }

    <!-- No Search Results Message -->
    if ($('div.search-results-container:contains("No results found for ")').length > 0) {
        $('div.search-results-container ul li:first-child').before('<li>Be sure to log in for complete results.</li>');
    }

    <!-- Dropdown Menus -->
    var checkExist = setInterval(function() {
        if ($('#help-menu-link').length) {
			$('#help-menu-link-leading, #admin-menu-link-content, #space-tools-menu, #user-menu-link-content, #action-menu-primary').attr('tabindex', '-1');
			$('a#help-menu-link').click(function() {
				$('#help-menu-link-leading').focus();
			});
			$('a#admin-menu-link').click(function() {
				$('#admin-menu-link-content').focus();
			});
			$('a#user-menu-link').click(function() {
				$('#user-menu-link-content').focus();
			});
			$('#space-tools-menu-trigger').click(function() {
				$('#space-tools-menu .space-tools-navigation li:first-child a').focus();
			});
			$('a#action-menu-link').click(function() {
				$('#action-menu-primary').focus();
			});
        }
    }, 1000);
    if ($(window).width() < 1300) {
	   var checkExistMoreMenu = setInterval(function() {
			if ($('a#aui-responsive-header-dropdown-0-trigger').length) {	
				console.log('More Button Adjustment');
				$('#aui-responsive-header-dropdown-0 aui-section, #aui-responsive-header-dropdown-0 strong, aui-responsive-header-dropdown-0 aui-item-link, aui-responsive-header-dropdown-0 a').removeAttr('role').removeAttr('aria-role');
				$('a#aui-responsive-header-dropdown-0-trigger').click(function() {
					$('#aui-responsive-header-dropdown-0 aui-item-link:first-child a').focus();
				});
				clearInterval(checkExistMoreMenu);
			}
		}, 1000);
	}
	
	<!-- Collapse Sidebar Small Display -->
	if ($(window).width() < 700 && !$('div.ia-fixed-sidebar.collased').length) {
		$('.ia-splitter-handle').click();
	}
});
