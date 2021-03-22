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

    <!-- Make advanced search csl filters clickable through keyboard -->
    $('div.cql-filter-field-input-container div ul li a').on('keypress',function(e){
        var keyCode = e.which;
        if ((keyCode===13)||(keyCode===32)) {
            $(this).click();
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
