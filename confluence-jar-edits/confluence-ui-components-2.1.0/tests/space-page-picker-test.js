(function ($) {
    "use strict";

    AJS.$(function ($) {
        $("#qunit-fixture").append("<div id='test-space-page-picker'></div>");
    });

    AJS.test.require("com.atlassian.confluence.plugins.confluence-ui-components:space-page-picker", AJS.$.noop);

    var commonSetup = function () {
        this.sandbox = sinon.sandbox.create();

        this.xhr = sinon.useFakeXMLHttpRequest();
        var requests = this.requests = [];

        this.xhr.onCreate = function (xhr) {
            requests.push(xhr);
        };
    };

    var commonTearDown = function () {
        this.sandbox.restore();
        this.xhr.restore();
    };

    var holder;
    var spageCom;
    var moduleOptions = {
        setup: function () {
            commonSetup.call(this);

            holder = $("#test-space-page-picker");
            spageCom = $('<input id="space-page-picker-component">');
            holder.append(spageCom);
        },
        teardown: function () {
            holder.empty();
            commonTearDown.call(this);
        }
    };

    module("Confluence.UI.Components.SpacePagePicker", moduleOptions);

    test("test options with orgElement only", function () {
        var options = {orgElement: spageCom};
        spageCom.auiSelect2(Confluence.UI.Components.SpacePagePicker.build(options));

        var spaceCatCom = $("#space-page-picker-componentSpaceCat");
        var spaceCom = $("#space-page-picker-componentSpace");
        var pageCom = $("#space-page-picker-componentPage");

        ok(spaceCatCom.length === 1);
        ok(spaceCom.length === 1);
        ok(pageCom.length === 1);

        ok(spageCom.val() === '');
        ok(spaceCatCom.val() === '');
        ok(spaceCom.val() === '');
        ok(pageCom.val() === '');
    });

    test("test options with orgElement; pre-fill by javascript", function () {
        var options = {
            orgElement: spageCom,
            spaceCatKeys: ['conf_all'],
            spaceKeys: ['TST'],
            pageIds: ['1234567']
        };

        spageCom.auiSelect2(Confluence.UI.Components.SpacePagePicker.build(options));

        this.requests[0].respond(200, {"Content-Type": "application/json"},
            "[{key: 'TST', name: 'Test Space'}]");
        this.requests[1].respond(200, {"Content-Type": "application/json"},
            "{ id: '1234567', title: 'Test Page' }");

        var spaceCatCom = $("#space-page-picker-componentSpaceCat");
        var spaceCom = $("#space-page-picker-componentSpace");
        var pageCom = $("#space-page-picker-componentPage");

        ok(spaceCatCom.length === 1);
        ok(spaceCom.length === 1);
        ok(pageCom.length === 1);

        ok(spageCom.val() === 'space-cat:conf_all,space:TST,page:1234567');
        ok(spaceCatCom.val() === 'conf_all');
        ok(spaceCom.val() === 'TST');
        ok(pageCom.val() === '1234567');
    });

    test("test options with orgElement; pre-fill by input hidden fields", function () {
        var options = {orgElement: spageCom};
        var originSpaceCatCom = $('<input type="hidden" id="space-page-picker-componentSpaceCat" value="conf_all">');
        var originSpaceCom = $('<input type="hidden" id="space-page-picker-componentSpace" value="TST">');
        var originPageCom = $('<input type="hidden" id="space-page-picker-componentPage" value="1234567">');
        spageCom.after(originSpaceCatCom).after(originSpaceCom).after(originPageCom);

        spageCom.auiSelect2(Confluence.UI.Components.SpacePagePicker.build(options));

        this.requests[0].respond(200, {"Content-Type": "application/json"},
            "[{key: 'TST', name: 'Test Space'}]");
        this.requests[1].respond(200, {"Content-Type": "application/json"},
            "{ id: '1234567', title: 'Test Page' }");

        var spaceCatCom = $("#space-page-picker-componentSpaceCat");
        var spaceCom = $("#space-page-picker-componentSpace");
        var pageCom = $("#space-page-picker-componentPage");

        ok(spaceCatCom.length === 1);
        ok(spaceCom.length === 1);
        ok(pageCom.length === 1);

        ok(spageCom.val() === 'space-cat:conf_all,space:TST,page:1234567');
        ok(spaceCatCom.val() === 'conf_all');
        ok(spaceCom.val() === 'TST');
        ok(pageCom.val() === '1234567');
    });

    test("test options with orgElement; pre-fill in the component", function () {
        var options = {orgElement: spageCom};
        spageCom.val("space-cat:conf_all,space:TST,page:1234567");

        spageCom.auiSelect2(Confluence.UI.Components.SpacePagePicker.build(options));

        this.requests[0].respond(200, {"Content-Type": "application/json"},
            "[{key: 'TST', name: 'Test Space'}]");
        this.requests[1].respond(200, {"Content-Type": "application/json"},
            "{ id: '1234567', title: 'Test Page' }");

        var spaceCatCom = $("#space-page-picker-componentSpaceCat");
        var spaceCom = $("#space-page-picker-componentSpace");
        var pageCom = $("#space-page-picker-componentPage");

        ok(spaceCatCom.length === 1);
        ok(spaceCom.length === 1);
        ok(pageCom.length === 1);

        ok(spageCom.val() === 'space-cat:conf_all,space:TST,page:1234567');
        ok(spaceCatCom.val() === 'conf_all');
        ok(spaceCom.val() === 'TST');
        ok(pageCom.val() === '1234567');
    });

    test("test options with orgElement; pre-fill by all ways", function () {
        var options = {
            orgElement: spageCom,
            spaceCatKeys: ['conf_all'],
            spaceKeys: ['TST'],
            pageIds: ['1234567']
        };
        spageCom.val("space-cat:conf_global,space:TST2,page:2234567");
        var originSpaceCatCom = $('<input type="hidden" id="space-page-picker-componentSpaceCat" value="conf_personal">');
        var originSpaceCom = $('<input type="hidden" id="space-page-picker-componentSpace" value="TST3">');
        var originPageCom = $('<input type="hidden" id="space-page-picker-componentPage" value="3234567">');
        spageCom.after(originSpaceCatCom).after(originSpaceCom).after(originPageCom);

        spageCom.auiSelect2(Confluence.UI.Components.SpacePagePicker.build(options));

        this.requests[0].respond(200, {"Content-Type": "application/json"},
            "[{key: 'TST2', name: 'Test Space2'},{key: 'TST', name: 'Test Space'},{key: 'TST3', name: 'Test Space3'}]");
        this.requests[1].respond(200, {"Content-Type": "application/json"},
            "{ id: '2234567', title: 'Test Page2' }");
        this.requests[2].respond(200, {"Content-Type": "application/json"},
            "{ id: '1234567', title: 'Test Page' }");
        this.requests[3].respond(200, {"Content-Type": "application/json"},
            "{ id: '31234567', title: 'Test Page3' }");

        var spaceCatCom = $("#space-page-picker-componentSpaceCat");
        var spaceCom = $("#space-page-picker-componentSpace");
        var pageCom = $("#space-page-picker-componentPage");

        ok(spaceCatCom.length === 1);
        ok(spaceCom.length === 1);
        ok(pageCom.length === 1);

        ok(spageCom.val() === 'space-cat:conf_global,space:TST2,page:2234567,space-cat:conf_all,space-cat:conf_personal,space:TST,space:TST3,page:1234567,page:3234567');
        ok(spaceCatCom.val() === 'conf_global,conf_all,conf_personal');
        ok(spaceCom.val() === 'TST2,TST,TST3');
        ok(pageCom.val() === '2234567,1234567,3234567');
    });

    test("test options with orgElement; pre-fill by all ways with empty values", function () {
        var options = {
            orgElement: spageCom,
            spaceCatKeys: [],
            spaceKeys: [],
            pageIds: []
        };
        spageCom.val("");
        var originSpaceCatCom = $('<input type="hidden" id="space-page-picker-componentSpaceCat">');
        var originSpaceCom = $('<input type="hidden" id="space-page-picker-componentSpace">');
        var originPageCom = $('<input type="hidden" id="space-page-picker-componentPage">');
        spageCom.after(originSpaceCatCom).after(originSpaceCom).after(originPageCom);

        spageCom.auiSelect2(Confluence.UI.Components.SpacePagePicker.build(options));

        var spaceCatCom = $("#space-page-picker-componentSpaceCat");
        var spaceCom = $("#space-page-picker-componentSpace");
        var pageCom = $("#space-page-picker-componentPage");

        ok(spaceCatCom.length === 1);
        ok(spaceCom.length === 1);
        ok(pageCom.length === 1);

        ok(spageCom.val() === '');
        ok(spaceCatCom.val() === '');
        ok(spaceCom.val() === '');
        ok(pageCom.val() === '');
    });

    test("test options with orgElement; pre-fill by all ways with duplicate values", function () {
        var options = {
            orgElement: spageCom,
            spaceCatKeys: ['conf_all'],
            spaceKeys: ['TST'],
            pageIds: ['1234567']
        };
        spageCom.val("space-cat:conf_all,space:TST,page:1234567");
        var originSpaceCatCom = $('<input type="hidden" id="space-page-picker-componentSpaceCat" value="conf_all">');
        var originSpaceCom = $('<input type="hidden" id="space-page-picker-componentSpace" value="TST">');
        var originPageCom = $('<input type="hidden" id="space-page-picker-componentPage" value="1234567">');
        holder.append(originSpaceCatCom).append(originSpaceCom).append(originPageCom);

        spageCom.auiSelect2(Confluence.UI.Components.SpacePagePicker.build(options));

        this.requests[0].respond(200, {"Content-Type": "application/json"},
            "[{key: 'TST', name: 'Test Space'}]");
        this.requests[1].respond(200, {"Content-Type": "application/json"},
            "{ id: '1234567', title: 'Test Page' }");

        var spaceCatCom = $("#space-page-picker-componentSpaceCat");
        var spaceCom = $("#space-page-picker-componentSpace");
        var pageCom = $("#space-page-picker-componentPage");

        ok(spaceCatCom.length === 1);
        ok(spaceCom.length === 1);
        ok(pageCom.length === 1);

        ok(spageCom.val() === 'space-cat:conf_all,space:TST,page:1234567');
        ok(spaceCatCom.val() === 'conf_all');
        ok(spaceCom.val() === 'TST');
        ok(pageCom.val() === '1234567');
    });

    test("test options with orgElement, predefined input hidden field names; pre-fill by all ways with duplicate values", function () {
        var options = {
            orgElement: spageCom,
            spaceCatKeys: ['conf_all'],
            spaceKeys: ['TST'],
            pageIds: ['1234567'],
            inputSpaceCatId: 'spaceCats',
            inputSpaceId: 'spaces',
            inputPageId: 'pages'
        };
        spageCom.val("space-cat:conf_all,space:TST,page:1234567");
        var originSpaceCatCom = $('<input type="hidden" id="spaceCats" value="conf_all">');
        var originSpaceCom = $('<input type="hidden" id="spaces" value="TST">');
        var originPageCom = $('<input type="hidden" id="pages" value="1234567">');
        holder.append(originSpaceCatCom).append(originSpaceCom).append(originPageCom);

        spageCom.auiSelect2(Confluence.UI.Components.SpacePagePicker.build(options));

        this.requests[0].respond(200, {"Content-Type": "application/json"},
            "[{key: 'TST', name: 'Test Space'}]");
        this.requests[1].respond(200, {"Content-Type": "application/json"},
            "{ id: '1234567', title: 'Test Page' }");

        var spaceCatCom = $("#spaceCats");
        var spaceCom = $("#spaces");
        var pageCom = $("#pages");

        ok(spaceCatCom.length === 1);
        ok(spaceCom.length === 1);
        ok(pageCom.length === 1);

        ok(spageCom.val() === 'space-cat:conf_all,space:TST,page:1234567');
        ok(spaceCatCom.val() === 'conf_all');
        ok(spaceCom.val() === 'TST');
        ok(pageCom.val() === '1234567');
    });

    test("test options with orgElement, predefined input hidden field names; pre-fill by javascript", function () {
        var options = {
            orgElement: spageCom,
            spaceCatKeys: ['conf_all'],
            spaceKeys: ['TST'],
            pageIds: ['1234567'],
            inputSpaceCatId: 'spaceCats',
            inputSpaceId: 'spaces',
            inputPageId: 'pages'
        };

        spageCom.auiSelect2(Confluence.UI.Components.SpacePagePicker.build(options));

        this.requests[0].respond(200, {"Content-Type": "application/json"},
            "[{key: 'TST', name: 'Test Space'}]");
        this.requests[1].respond(200, {"Content-Type": "application/json"},
            "{ id: '1234567', title: 'Test Page' }");

        var spaceCatCom = $("#spaceCats");
        var spaceCom = $("#spaces");
        var pageCom = $("#pages");

        ok(spaceCatCom.length === 1);
        ok(spaceCom.length === 1);
        ok(pageCom.length === 1);

        ok(spageCom.val() === 'space-cat:conf_all,space:TST,page:1234567');
        ok(spaceCatCom.val() === 'conf_all');
        ok(spaceCom.val() === 'TST');
        ok(pageCom.val() === '1234567');
    });

    test("test options with orgElement, predefined input hidden field names, manualInit; pre-fill by input hidden fields; setValue with normal values", function () {
        var options = {
            orgElement: spageCom,
            inputSpaceCatId: 'spaceCats',
            inputSpaceId: 'spaces',
            inputPageId: 'pages',
            manualInit: true
        };

        var originSpaceCatCom = $('<input type="hidden" id="spaceCats" value="conf_all">');
        var originSpaceCom = $('<input type="hidden" id="spaces" value="TST">');
        var originPageCom = $('<input type="hidden" id="pages" value="1234567">');
        holder.append(originSpaceCatCom).append(originSpaceCom).append(originPageCom);

        spageCom.auiSelect2(Confluence.UI.Components.SpacePagePicker.build(options));
        Confluence.UI.Components.SpacePagePicker.setValue("space-cat:conf_all,space:TST,page:1234567", spageCom);

        this.requests[0].respond(200, {"Content-Type": "application/json"},
            "[{key: 'TST', name: 'Test Space'}]");
        this.requests[1].respond(200, {"Content-Type": "application/json"},
            "{ id: '1234567', title: 'Test Page' }");

        var spaceCatCom = $("#spaceCats");
        var spaceCom = $("#spaces");
        var pageCom = $("#pages");

        ok(spaceCatCom.length === 1);
        ok(spaceCom.length === 1);
        ok(pageCom.length === 1);

        ok(spageCom.val() === 'space-cat:conf_all,space:TST,page:1234567');
        ok(spaceCatCom.val() === 'conf_all');
        ok(spaceCom.val() === 'TST');
        ok(pageCom.val() === '1234567');
    });

    test("test options with orgElement, predefined input hidden field names, manualInit; pre-fill by input hidden fields; setValue with trigger value", function () {
        var options = {
            orgElement: spageCom,
            inputSpaceCatId: 'spaceCats',
            inputSpaceId: 'spaces',
            inputPageId: 'pages',
            manualInit: true
        };

        var originSpaceCatCom = $('<input type="hidden" id="spaceCats" value="conf_all">');
        var originSpaceCom = $('<input type="hidden" id="spaces" value="TST">');
        var originPageCom = $('<input type="hidden" id="pages" value="1234567">');
        holder.append(originSpaceCatCom).append(originSpaceCom).append(originPageCom);

        spageCom.auiSelect2(Confluence.UI.Components.SpacePagePicker.build(options));

        var spaceCatCom = $("#spaceCats");
        var spaceCom = $("#spaces");
        var pageCom = $("#pages");

        ok(spageCom.val() === '');

        Confluence.UI.Components.SpacePagePicker.setValue("SPACE-PAGE-TRIGGER-VALUE", spageCom);

        this.requests[0].respond(200, {"Content-Type": "application/json"},
            "[{key: 'TST', name: 'Test Space'}]");
        this.requests[1].respond(200, {"Content-Type": "application/json"},
            "{ id: '1234567', title: 'Test Page' }");

        ok(spaceCatCom.length === 1);
        ok(spaceCom.length === 1);
        ok(pageCom.length === 1);

        ok(spageCom.val() === 'space-cat:conf_all,space:TST,page:1234567');
        ok(spaceCatCom.val() === 'conf_all');
        ok(spaceCom.val() === 'TST');
        ok(pageCom.val() === '1234567');
    });
}(AJS.$));