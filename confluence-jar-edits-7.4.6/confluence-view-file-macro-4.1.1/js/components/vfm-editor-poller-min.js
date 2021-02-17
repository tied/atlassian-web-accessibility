define("vfm/components/vfm-editor-poller",["ajs","jquery","underscore","tinymce","vfm/view-file-macro-utils","vfm/services/conversion-service"],function(k,e,m,p,q,c){var o;var l=false;var d={};var f=q.THUMBNAIL_POLLING_PERIOD;var h=q.THUMBNAIL_POLLING_BACKOFF_RATIO;function a(){if(!p.activeEditor||!l){return}var s=e("img[data-macro-name='view-file'][src*='thumbnailStatus="+q.THUMBNAIL_STATUS_IN_PROGRESS+"'][data-thumbnail-status!='"+q.THUMBNAIL_STATUS_ERROR+"']",p.activeEditor.dom.doc);if(s.length>0){var r=false;s.each(function(){var u=e(this);var w=u.attr("src");var v=q.getParameterByName(w,"attachmentId");var t=q.getParameterByName(w,"version");if(!d[v]||d[v].version!==t){d[v]={version:t};r=true}});if(r){j()}c.postThumbnailConversionResults(d).then(function(t){if(!p.activeEditor||!l){return}m.each(t,function(x,y){if(!d[y]){return}var w=e("img[data-macro-name='view-file'][src*='attachmentId="+y+"']",p.activeEditor.dom.doc);var v=d[y].version;w.attr("data-thumbnail-status",x);if(x===q.THUMBNAIL_STATUS_CONVERTED){var u=w.attr("src");var z=c.getThumbnailUrl(y,v);z=q.addParamsToUrl(z,{attachmentId:y,mimeType:q.getParameterByName(u,"mimeType")});w.attr("src",z);delete d[y]}else{if(x===q.THUMBNAIL_STATUS_ERROR){delete d[y]}}});if(!m.isEmpty(d)){n()}else{j()}i()})}else{if(s.length===0){j();i()}}}function n(){f=f*h}function j(){f=q.THUMBNAIL_POLLING_PERIOD}function i(){l=true;if(o){clearTimeout(o)}o=setTimeout(a,f)}function g(){if(o){clearTimeout(o);o=undefined}l=false;d={};j()}var b={startPolling:i,stopPolling:g};return b});