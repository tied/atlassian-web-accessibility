define("vfm/components/embedded-file-view",["jquery","backbone","ajs","confluence/legacy","vfm/view-file-macro-utils"],function(c,g,f,h,i){function b(s){var r=c(s.el);var q=r.find(".confluence-embedded-image, .confluence-embedded-file");if(q.hasClass("unknown-attachment")||(q.attr("src")&&q.attr("src").indexOf("/confluence/plugins/servlet/confluence/placeholder/unknown-attachment")>=0)){return this}var j={mimeType:"",niceType:""};var k=q.hasClass("confluence-embedded-image");var o=r.parent().is("a");var m=q.attr("data-has-thumbnail")==="true";if(k){j.mimeType="image/png"}else{j.mimeType=q.attr("data-mime-type");j.niceType=q.attr("data-nice-type")!=="null"?q.attr("data-nice-type"):"generic file"}var p=!o?e(q):"";var l=(!k&&m)?a(j):"";if(p||l){var n=h.ViewFileMacro.Templates.overlayEmbeddedFile();r.append(c(n).append(p).append(l));if(l){r.addClass("has-comment-overlay")}}}var d=function(j){j=parseInt(j,10);j=c.isNumeric(j)?j:0;return j>9?"9+":j+""};var e=function(o){var j="",k=o.attr("data-linked-resource-container-id"),m=o.attr("data-linked-resource-id");if(k&&m){var n=o.attr("data-unresolved-comment-count");var l=d(n);if(l!=="0"){j=h.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount({commentCountRep:l})}}return j};var a=function(j){return h.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc({fileType:i.getFileTypeTextFromNiceType(j.niceType),iconClass:f.Confluence.FileTypesUtils.getAUIIconFromMime(j.mimeType)})};return{render:b}});