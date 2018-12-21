define("confluence-ui-components/js/cql/internal/filterfields/cql-autocomplete-filter-field",["jquery","ajs","confluence-ui-components/js/cql/internal/cql-expression-builder","confluence-ui-components/js/cql/internal/cql-set-value-helper"],function(d,h,b,f){function j(l){var m=l.suggestedResults;var k=l.searchResults;if(!m.length){return k}if(!k.length){return m}return[{text:h.I18n.getText("confluence-ui-components.autocomplete-field.suggested-results"),children:m},{text:h.I18n.getText("confluence-ui-components.autocomplete-field.search-results"),children:k}]}function a(k){return{query:k,searchContext:JSON.stringify({spaceKey:h.Meta.get("space-key"),contentId:h.Meta.get("content-id")})}}var c={placeholder:h.I18n.getText("confluence-ui-components.autocomplete-field.placeholder"),multiple:true,tokenSeparators:[" ",","],createSearchChoice:function(k){if(!k){return null}return{id:k,text:"New result: "+k,isNew:true}},createSearchChoicePosition:"bottom",ajax:{data:a,results:function(k){return{results:j(k)}},quietMillis:300},initSelection:function(k,n){var m=k.val().split(",");var l=m.map(function(o){return{id:o,text:o}});n(l)}};function e(k){return k.indexOf("http://")===0||k.indexOf("https://")===0}function g(k){if(e(k)){return k}else{return h.contextPath()+k}}function i(k){var l;return{setupInput:function(m){l=m;var o=d.extend({},c.ajax,{url:g(k.uiSupport.dataUri)});var n=d.extend({},c,{ajax:o});m.auiSelect2(n)},asCqlFunc:function(){var m=this.input.val().trim();if(!m){return undefined}return b.buildEqualityExpressionFromValuesString(this.fieldName,m)},setValues:function(m){return f.setValues(l,m.values)}}}return{build:i,_getUrl:g,_ajaxData:a}});