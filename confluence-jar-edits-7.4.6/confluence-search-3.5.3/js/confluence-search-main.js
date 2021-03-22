require(['jquery', 'confluence-search/confluence-search'], function ($, setupSearch) {
    $(setupSearch);

    /* SU CUSTOM */
    $('div.cql-filter-field-input-container div ul li a').on('keypress',function(e){
        var keyCode = e.which;
        if ((keyCode===13)||(keyCode===32)) {
            $(this).click();
        }
    });
});
