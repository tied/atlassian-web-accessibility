/**
 * Handler for the Create-from-template Macro button.
 */
AJS.toInit(function ($) {

    // Hook a tooltip to the button explaining that the user cannot create content in the space specified.
    $(document).tooltip({
        live: ".create-from-template-button[aria-disabled=\"true\"]", // Created links are handled automatically
        gravity: 'n', // Point the arrow to the top
        title: 'data-tooltip',
        delayIn: 250,
        delayOut: 0
    });
        
    var createFromTemplateButtons = $(".create-from-template-button");

    createFromTemplateButtons.each(function() {
        var $button = $(this);
        if ($button.attr('aria-disabled') !== "true") {
            // Hook the button to the Create dialog
            $button.click(function () {
                $button.addClass('launching-dialog');   // for diagnosing a flaky WebDriver test; confirm click handler

                Confluence.Blueprint.loadDialogAndOpenTemplate($button.data());

                return false;
            });
        }
    });
});