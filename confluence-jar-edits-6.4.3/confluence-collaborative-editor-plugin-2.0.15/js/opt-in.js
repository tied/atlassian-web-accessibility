define('confluence-collaborative-editor-plugin/opt-in', [
    'jquery',
    'ajs'
], function(
    $,
    AJS
) {
    'use strict';

    function setXsrfToken($form) {
        var atlToken = AJS.Meta.get("atl-token");
        $form.find("input[name='atl_token']").val(atlToken);
    }

    // Hack to not show html in title
    $('title').text(AJS.I18n.getText('collab.opt-in.title'));

    $('#enable-collab').click(function() {
        var result = confirm(AJS.I18n.getText('collab.opt-in.confirm'));

        if (result) {
            var $form = $("#opt-in-form");
            setXsrfToken($form);
            $form.submit();
        }
    });

    // This code is to put the issues collector on the opt-in page.
    // See https://jira.atlassian.com/secure/ViewCollector!default.jspa?projectKey=FEEDBACK&collectorId=4cab8892
    $.ajax({
        url: "https://jira.atlassian.com/s/4a88772e29890bb96f2b2b1ec4a9de7a-T/en_UK-zad234/71006/b6b48b2829824b869586ac216d119363/2.0.11/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-UK&collectorId=4cab8892",
        type: "get",
        cache: true,
        dataType: "script"
    });

     window.ATL_JQ_PAGE_PROPS =  {
    	"triggerFunction": function(showCollectorDialog) {
    		$("#collabFeedbackTrigger").click(function(e) {
    			e.preventDefault();
    			showCollectorDialog();
    		});
    	}};

});

require(['ajs'], function(AJS) {
    AJS.toInit(function() {
        require(['confluence-collaborative-editor-plugin/opt-in']);
    });
});