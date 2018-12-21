(function(d){d.fn.autocomplete=function(n,g,j){function m(){f.hide();d(document).unbind("click",m)}function o(){var e=b.val();e.length>=g&&e!=b[0].lastQuery&&e!=b[0].lastSelectedValue?(d.getJSON(n+encodeURI(e),function(a){var b="";e=e.toLowerCase();for(var i=e.split(" "),c=0,g=a.length;c<g;c++){var j=!1;if(a[c].fullName&&a[c].username){for(var n=a[c].fullName+" ("+a[c].username+")",k=a[c].fullName.split(" "),l=0,o=k.length;l<o;l++)for(var h=0;h<i.length;h++)0==k[l].toLowerCase().indexOf(i[h])&&(k[l]=
"<strong>"+k[l].substring(0,i[h].length)+"</strong>"+k[l].substring(i[h].length),j=!0);if(!j)for(h=0;h<i.length;h++)a[c].username&&0==a[c].username.toLowerCase().indexOf(i[h])&&(a[c].username="<strong>"+a[c].username.substring(0,i[h].length)+"</strong>"+a[c].username.substring(i[h].length));a[c].fullName=k.join(" ");b+="<li><span>"+a[c].fullName+"</span> <span class='username-in-autocomplete-list'>("+a[c].username+")</span><i class='fullDetails'>"+n+"</i><i class='username'>"+a[c].username+"</i><i class='fullName'>"+
a[c].fullName+"</i></li>"}a[c].status&&(b+="<li>"+a[c].status+"</li>")}f.html(b);d("li",f).click(function(a){a.stopPropagation();a=d("i.fullDetails",this).html();p(a)}).hover(function(){d(".focused").removeClass("focused");d(this).addClass("focused")},function(){});d(document).click(m);f.show()}),b[0].lastQuery=e):e.length<g&&m()}function p(e){var a=b.val();e&&(b[0].lastSelectedValue=e,b.val(e),e={input:b,originalValue:a,value:e,fullName:d(".focused i.fullName").text(),username:d(".focused i.username").text()},
j(e),m())}var j="function"==typeof g?g:"function"==typeof j?j:function(){},g=!isNaN(Number(g))?g:3,b=this;b[0].lastSelectedValue=b.val();var f=d(document.createElement("ol"));b.offset();parseInt(d("body").css("border-left-width"));f.css({position:"absolute",width:b.outerWidth()-2+"px"});f.addClass("autocompleter");this.after(f);f.css({margin:Math.abs(this.offset().left-f.offset().left)>=Math.abs(this.offset().top-f.offset().top)?b.outerHeight()+"px 0 0 -"+b.outerWidth()+"px":"-1px 0 0 0"});f.hide();
b.keydown(function(b){var a=this;this.timer&&clearTimeout(this.timer);var g={40:function(){var a=d(".focused").removeClass("focused").next();a.length?a.addClass("focused"):d(".autocompleter li:first").addClass("focused")},38:function(){var a=d(".focused").removeClass("focused").prev();a.length?a.addClass("focused"):d("li:last",f).addClass("focused")},27:function(){m()},13:function(){var a=d(".focused i.fullDetails").html();p(a)},9:function(){this[13]();setTimeout(function(){a.focus()},0)}};"none"!=
f.css("display")&&b.keyCode in g&&(b.preventDefault(),g[b.keyCode]());this.timer=setTimeout(o,300)})};AJS.deprecate.prop(d.fn,"autocomplete",{displayName:"jquery.autocomplete.js",extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-393."})})(jQuery);