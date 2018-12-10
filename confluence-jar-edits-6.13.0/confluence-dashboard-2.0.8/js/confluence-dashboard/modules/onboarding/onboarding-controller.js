define('confluence-dashboard/modules/onboarding/onboarding-view', ['module', 'exports', '../../core/shared/base-dialog', 'confluence-dashboard/soy-templates', 'configuration', '../../utils/feature-discovery', 'underscore'], function (module, exports, _baseDialog, _soyTemplates, _configuration, _featureDiscovery, _underscore) {
    'use strict';

    var BaseDialog = _interopRequireDefault(_baseDialog).default;

    var DashboardTemplates = _interopRequireDefault(_soyTemplates).default;

    var pluginKey = _configuration.pluginKey;
    var staticResourceUrl = _configuration.staticResourceUrl;

    var FeatureDiscovery = _interopRequireDefault(_featureDiscovery).default;

    var _ = _interopRequireDefault(_underscore).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = BaseDialog.extend({
        attributes: {
            id: 'dashboard-onboarding-dialog',
            'aria-hidden': true
        },

        ui: {
            btnShow: '.show-onboarding',
            btnSkip: '.skip-onboarding'
        },

        events: {
            'click @ui.btnShow': 'showOnboarding',
            'click @ui.btnSkip': 'skipOnboarding'
        },

        initialize: function initialize() {
            this.featureDiscovery = FeatureDiscovery.forPlugin(pluginKey);

            if (this.featureDiscovery.canShow('dialog')) {
                this.openDialog();
            } else {
                this.remove();
            }
        },
        onDestroy: function onDestroy() {
            this.featureDiscovery = null;
        },
        getTemplate: function getTemplate() {
            if (this.options.isNewUser) {
                return DashboardTemplates.Onboarding.newUser;
            }

            return DashboardTemplates.Onboarding.existingUser;
        },
        showOnboarding: function showOnboarding() {
            this.featureDiscovery.markDiscoveredSafe('dialog');
            this.closeDialog();

            if (this.options.onConfirm && _.isFunction(this.options.onConfirm)) {
                this.options.onConfirm();
            }
        },
        skipOnboarding: function skipOnboarding() {
            this.featureDiscovery.markDiscoveredSafe('dialog');
            this.featureDiscovery.markDiscoveredSafe('tips');

            this.closeDialog();
        }
    });
    module.exports = exports['default'];
});
define('confluence-dashboard/modules/onboarding/onboarding-tooltip-view', ['module', 'exports', 'marionette', 'configuration', 'jquery', '../../utils/feature-discovery', '../../utils/ensure-component', '../../utils/event-manager'], function (module, exports, _marionette, _configuration, _jquery, _featureDiscovery, _ensureComponent, _eventManager) {
    'use strict';

    var ItemView = _marionette.ItemView;
    var pluginKey = _configuration.pluginKey;

    var $ = _interopRequireDefault(_jquery).default;

    var FeatureDiscovery = _interopRequireDefault(_featureDiscovery).default;

    var ensureComponent = _interopRequireDefault(_ensureComponent).default;

    var EventManager = _eventManager.EventManager;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = ItemView.extend({

        className: 'onboarding-tooltip-wrapper',

        initialize: function initialize() {
            this.featureDiscovery = FeatureDiscovery.forPlugin(pluginKey);

            this.target = this.options.placedNextTo;
            this.tipId = this.options.tipId;

            this.addToScreen();
        },
        addToScreen: function addToScreen() {
            var _this = this;

            if (this.featureDiscovery.canShow(this.tipId)) {
                $(this.target).append(this.render().el);

                var inlineDialog = this.$('.onboarding-tooltips');

                // Skate components are initialized asynchronous so we need to check if they are ready before
                // binding callbacks for click event on buttons.
                // There were issues about no event callbacks for buttons in most of browsers except for Chrome.
                // And this issue happened with AUI^5.9 .
                ensureComponent(inlineDialog[0]).then(function () {
                    inlineDialog.find('.btn-next').on('click', _this.showNext.bind(_this));
                    inlineDialog.find('.btn-skip').on('click', _this.skipTooltips.bind(_this));
                });

                this.listenTo(EventManager, 'sidebar:collapse', this.close.bind(this));
                this.listenTo(EventManager, 'window:scroll', this.close.bind(this));

                this.inlineDialog = inlineDialog[0];
            } else {
                this.destroy();
            }
        },
        open: function open() {
            var _this2 = this;

            // Skate components are initialized asynchronous so we need to check if they are ready before
            ensureComponent(this.inlineDialog).then(function () {
                _this2.inlineDialog.open = true;
            });
        },
        close: function close() {
            var _this3 = this;

            ensureComponent(this.inlineDialog).then(function () {
                _this3.inlineDialog.open = false;
            });
        },
        showNext: function showNext() {
            this.featureDiscovery.markDiscovered(this.tipId);
            this.close();
            this.trigger('next', this);
            this.destroy();
        },
        skipTooltips: function skipTooltips() {
            this.trigger('skip', this);
        },
        onDestroy: function onDestroy() {
            var _this4 = this;

            // make sure we remove it from the DOM
            if (this.inlineDialog) {
                ensureComponent(this.inlineDialog).then(function () {
                    return _this4.inlineDialog.remove();
                });
            }
        }
    });
    module.exports = exports['default'];
});
define('confluence-dashboard/modules/onboarding/onboarding-tooltips-manager', ['module', 'exports', 'marionette', 'confluence-dashboard/soy-templates', './onboarding-tooltip-view', 'underscore', 'configuration', '../../utils/feature-discovery', '../../utils/event-manager', 'window'], function (module, exports, _marionette, _soyTemplates, _onboardingTooltipView, _underscore, _configuration, _featureDiscovery, _eventManager, _window) {
    'use strict';

    var Object = _marionette.Object;

    var DashboardTemplates = _interopRequireDefault(_soyTemplates).default;

    var Tooltip = _interopRequireDefault(_onboardingTooltipView).default;

    var _ = _interopRequireDefault(_underscore).default;

    var pluginKey = _configuration.pluginKey;

    var FeatureDiscovery = _interopRequireDefault(_featureDiscovery).default;

    var ReqRes = _eventManager.ReqRes;

    var window = _interopRequireDefault(_window).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = Object.extend({
        initialize: function initialize() {
            // we still need to load inline-dialog2 manually
            window.require(['aui/inline-dialog2']);
            var app = ReqRes.request("app");
            app.expandSidebar();
            this.featureDiscovery = FeatureDiscovery.forPlugin(pluginKey);
        },
        getTooltipDefinitions: function getTooltipDefinitions(data) {
            return [{
                element: '.sidebar-discover',
                tipId: 'tour-step-sidebar',
                template: DashboardTemplates.Onboarding[data.isNew ? 'newUserStep1' : 'existingUserStep1']
            }, {
                element: '.sidebar-spaces',
                tipId: 'tour-step-favourite-spaces',
                template: DashboardTemplates.Onboarding[data.isNew ? 'newUserStep2' : 'existingUserStep2']
            }];
        },
        showTips: function showTips(data) {
            var tourInlineDialogs = this.getTooltipDefinitions(data);

            this.createSteps(tourInlineDialogs);
        },
        createSteps: function createSteps(steps) {
            var _this = this;

            if (!steps) {
                return false;
            }
            // if 'tips' is marked as discovered, we don't show it
            if (!this.featureDiscovery.canShow('tips')) {
                return false;
            }

            this.steps = [];

            _.each(steps, function (step) {
                // each specific tip can be marked as discovered. If it's true, we don't show it again
                if (_this.featureDiscovery.canShow(step.tipId)) {
                    // we add it to a list so we can perform batch operations later
                    _this.steps.push(_this.createTooltip(step));
                }
            });

            // the first one should be open
            this.openFirst();
        },
        createTooltip: function createTooltip(step) {
            var tooltip = new Tooltip({
                tipId: step.tipId,
                placedNextTo: step.element,
                template: step.template,
                templateHelpers: {
                    id: step.tipId
                }
            });

            this.listenTo(tooltip, 'skip', this.onSkip);
            this.listenTo(tooltip, 'next', this.onNext);

            return tooltip;
        },
        openFirst: function openFirst() {
            if (this.steps.length > 0) {
                this.steps[0].open();
            }
        },
        onSkip: function onSkip() {
            this.featureDiscovery.markDiscovered('tips');
            _.invoke(this.steps, 'destroy');
            this.destroy();
        },
        onNext: function onNext(target) {
            var index = this.steps.indexOf(target);
            this.steps.splice(index, 1);
            this.openFirst();
        }
    });
    module.exports = exports['default'];
});
define('confluence-dashboard/modules/onboarding/onboarding-saved-for-later-view', ['module', 'exports', './onboarding-tooltip-view'], function (module, exports, _onboardingTooltipView) {
    'use strict';

    var TooltipView = _interopRequireDefault(_onboardingTooltipView).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = TooltipView.extend({
        showNext: function showNext() {},
        skipTooltips: function skipTooltips() {
            this.featureDiscovery.markDiscovered(this.tipId);
            this.close();
            this.destroy();
        }
    });
    module.exports = exports['default'];
});
define('confluence-dashboard/modules/onboarding/onboarding-controller', ['../../utils/event-manager', './onboarding-view', './onboarding-tooltips-manager', '../../utils/module-starter', 'confluence/meta', '../../utils/conditions', 'ajs', 'confluence-dashboard/soy-templates', './onboarding-saved-for-later-view', 'configuration', '../../utils/feature-discovery'], function (_eventManager, _onboardingView, _onboardingTooltipsManager, _moduleStarter, _meta, _conditions, _ajs, _soyTemplates, _onboardingSavedForLaterView, _configuration, _featureDiscovery) {
    'use strict';

    var Commands = _eventManager.Commands;

    var OnboardingView = _interopRequireDefault(_onboardingView).default;

    var OnboardingTooltipsManager = _interopRequireDefault(_onboardingTooltipsManager).default;

    var ModuleStarter = _interopRequireDefault(_moduleStarter).default;

    var Meta = _interopRequireDefault(_meta).default;

    var conditions = _interopRequireDefault(_conditions).default;

    var AJS = _interopRequireDefault(_ajs).default;

    var DashboardTemplates = _interopRequireDefault(_soyTemplates).default;

    var SavedForLaterTooltip = _interopRequireDefault(_onboardingSavedForLaterView).default;

    var pluginKey = _configuration.pluginKey;

    var FeatureDiscovery = _interopRequireDefault(_featureDiscovery).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function showTips(data) {
        var tooltipManager = new OnboardingTooltipsManager();
        tooltipManager.showTips(data);
    }

    var initOnboarding = function initOnboarding() {
        var isNewUser = Meta.getBoolean('is-new-user');
        var shouldShowDialog = Meta.getBoolean('show-dashboard-onboarding-dialog');
        var shouldShowTips = Meta.getBoolean('show-dashboard-onboarding-tips');

        var SAVED_FOR_LATER_TIP_ID = 'transition-saved-for-later';

        var user = {
            isNew: isNewUser
        };

        if (shouldShowDialog) {
            var dialog = new OnboardingView({
                isNewUser: isNewUser,

                onConfirm: function onConfirm() {
                    showTips(user);
                }
            });

            Commands.execute('main-app:showDialog', dialog);
        } else if (shouldShowTips) {
            showTips(user);
        } else if (!isNewUser) {
            // CONFDEV-38752
            // show the "saved for later instead of favourites" tooltip
            // this won't show at all for NEW users due to the feature discovery code below
            // this won't show for existing users as part of the tour. It will appear for them after a refresh though.
            // this should only show for existing users who have already done the tour.
            var tooltip = new SavedForLaterTooltip({
                tipId: SAVED_FOR_LATER_TIP_ID,
                placedNextTo: '.nav-item-container-starred',
                template: DashboardTemplates.Onboarding['transitionSavedForLater'],
                templateHelpers: {
                    id: SAVED_FOR_LATER_TIP_ID
                }
            });
        }

        // new users should never see the saved for later tooltip
        if (isNewUser) {
            var featureDiscovery = FeatureDiscovery.forPlugin(pluginKey);
            featureDiscovery.markDiscovered(SAVED_FOR_LATER_TIP_ID);
        }
    };

    AJS.toInit(function () {
        if (conditions.canShowDashboard()) {
            ModuleStarter.register(initOnboarding);
        }
    });
});

require(["confluence-dashboard/modules/onboarding/onboarding-controller"]);
