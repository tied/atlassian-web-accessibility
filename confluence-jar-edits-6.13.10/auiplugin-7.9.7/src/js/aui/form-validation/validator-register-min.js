("undefined"===typeof window?global:window).__5746c3dc0d9d4c30df5b0c1dc2a92a90=function(){var d={};"use strict";Object.defineProperty(d,"__esModule",{value:!0});var a=__700a145ba3db9966cc95664c892049f8,h=a&&a.__esModule?a:{"default":a},e;if((a=__c1e961001275c079e48525ad3a48c8c2)&&a.__esModule)e=a;else{var f={};if(null!=a)for(var b in a)Object.prototype.hasOwnProperty.call(a,b)&&(f[b]=a[b]);f.default=a;e=f}b=(b=__65ca28a9d6b0f244027266ff8e6a6d1c)&&b.__esModule?b:{"default":b};var i=["displayfield",
"watchfield","when","novalidate","state"],g=[],a={register:function(a,b){var c;if("string"===typeof a)c=a;else{var d=!1;a.some(function(a){var b=-1!==h.default.inArray(a,i);b&&(d=a);return b});if(c=d)return e.warn('Validators cannot be registered with the argument "'+c+'", as it is a reserved argument.'),!1;c="[data-aui-validation-"+a.join("],[data-aui-validation-")+"]"}c={validatorFunction:b,validatorTrigger:c};g.push(c);return c},validators:function(){return g}};(0,b.default)("aui/form-validation/validator-register",
a);d.default=a;return d=d["default"]}.call(this);