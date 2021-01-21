AJS.toInit(function($) {

    function getHighlighterId(id) {
        var prefix = 'highlighter_';
        return id.indexOf(prefix) == 0 ? id : prefix + id;
    };

    $(function() {
        $('.codeHeader .expand-control').keypress(function(e) {
            if (e.keyCode == 13) {
                $(this).click();
            }
        });
    });

    $('.codeHeader .expand-control').attr('role','button').attr('tabindex','0');
    if ($('.codeHeader .collapse-source').hasClass('expanded')) {
        $('.codeHeader .expand-control').attr('aria-expanded','true');
    } else {
        $('.codeHeader .expand-control').attr('aria-expanded','false');
    }

    $(".codeHeader .collapse-source").click(function() {
        var $codeHeaderCollapse = $(this);
        var $codeContent = $codeHeaderCollapse.parent().parent().children('.codeContent');
        var $highlighter = $codeContent.children().children('.syntaxhighlighter').attr('id');
        var $expandControlIcon = $codeHeaderCollapse.children('.expand-control-icon');
        var $div = $(document.getElementById(getHighlighterId($highlighter)));

        if($div.hasClass('collapsed')) {
            $div.removeClass('collapsed');
            $div.addClass('expanded');
            $codeHeaderCollapse.attr('aria-expanded','true');
            $codeContent.addClass('show-border-top');
            $(".expand-control-text", $codeHeaderCollapse).text(AJS.I18n.getText("newcode.config.collapse.source"));
            $expandControlIcon.addClass('expanded');
        }
        else if ($div.hasClass('expanded')) {
            $div.removeClass('expanded');
            $div.addClass('collapsed');
            $codeHeaderCollapse.attr('aria-expanded','false');
            $codeContent.removeClass('show-border-top');
            $(".expand-control-text", $codeHeaderCollapse).text(AJS.I18n.getText("newcode.config.expand.source"));
            $expandControlIcon.removeClass('expanded');
        }
    });

});

