AJS.Popups = AJS.Popups || {};

/**
 * Coordinate the display of popup dialogs requested from other functions in the application.
 *
 * Its responsibility is to organise the display of these popups so that that they do not come into conflict with
 * each other.
 */
AJS.Popups.DisplayController = function () {

    var _popupDialogRegistry = [];
    var _renderPerformed = false;
    var _dialogShown = false;

    AJS.toInit(function () {
        setTimeout(function () {
            AJS.Popups.DisplayController.render();
        }, 0);
    });

    return {

        /**
         * Request the display of a popup dialog to this controller.
         *
         * @param popupDialog An {Object} containing a request to display a popup dialog.
         */
        request: function (popupDialog) {
            _popupDialogRegistry.push(popupDialog);
            if (_renderPerformed && _dialogShown === false) {
                this.render();
            }
        },

        /**
         * Renders a popup dialog on screen.
         *
         * If more than one popup has been requested, it will render the one that has the lowest "weight",
         * if no popups have been requested, no dialog will be displayed.
         *
         */
        render: function () {
            _popupDialogRegistry.sort(function (first, second) {
                return first.weight - second.weight;
            });

            _renderPerformed = true;

            if (_popupDialogRegistry.length !== 0) {
                _dialogShown = true;
                _popupDialogRegistry[0].show();
            }
        }
    };
}();