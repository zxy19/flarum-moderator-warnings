module.exports=function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=31)}({0:function(e,r){e.exports=flarum.core.compat.app},27:function(e,r){e.exports=flarum.core.compat["components/PermissionGrid"]},3:function(e,r){e.exports=flarum.core.compat.extend},31:function(e,r,n){"use strict";n.r(r);var t=n(0),o=n.n(t),a=n(3),i=n(27),s=n.n(i);o.a.initializers.add("askvortsov/flarum-moderator-warnings",(function(){Object(a.extend)(s.a.prototype,"moderateItems",(function(e){e.add("moderator-warnings-view",{icon:"fas fa-images",label:o.a.translator.trans("askvortsov-moderator-warnings.admin.permissions.view_warnings"),permission:"user.viewWarnings"},3),e.add("moderator-warnings-manage",{icon:"fas fa-edit",label:o.a.translator.trans("askvortsov-moderator-warnings.admin.permissions.manage_warnings"),permission:"user.manageWarnings"},3),e.add("moderator-warnings-delete",{icon:"fas fa-times",label:o.a.translator.trans("askvortsov-moderator-warnings.admin.permissions.delete_warnings"),permission:"user.deleteWarnings"},3)}))}))}});
//# sourceMappingURL=admin.js.map