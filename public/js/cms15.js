/*! For license information please see cms15.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[963],{7742:(t,e,r)=>{r.r(e),r.d(e,{default:()=>w});var n=r(9669),o=r.n(n);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h={};function v(){}function d(){}function p(){}var y={};l(y,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==e&&r.call(g,o)&&(y=g);var w=p.prototype=v.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,a,c,s){var l=f(t[o],t,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==i(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,s)}))}s(l.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=p,l(w,"constructor",p),l(p,"constructor",d),d.displayName=l(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,s,"Generator"),l(w,o,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function c(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function s(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const u={data:function(){return{users:[],selectedUsers:[],search:"",checkboxes:[],selectPlayersFlag:!1}},watch:{selectedUsers:function(){this.$emit("users",this.selectedUsers)},search:function(){this.search=null==this.search?"":this.search}},computed:{likesAllFruit:function(){return this.selectedUsers.length===this.users.length},likesSomeFruit:function(){return this.selectedUsers.length>0&&!this.likesAllFruit},icon:function(){return this.likesAllFruit?"mdi-close-box":this.likesSomeFruit?"mdi-minus-box":"mdi-checkbox-blank-outline"},playersIcon:function(){return this.selectPlayersFlag?"mdi-close-box":"mdi-checkbox-blank-outline"}},methods:{selectPlayers:function(){if(this.selectPlayersFlag=!this.selectPlayersFlag,this.selectedUsers=[],this.selectPlayersFlag){var t,e=s(this.users);try{for(e.s();!(t=e.n()).done;){var r=t.value;"Zawodnik"==r.type&&this.selectedUsers.push(r)}}catch(t){e.e(t)}finally{e.f()}}},getUsers:function(){var t,e=this;return(t=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/api/users/get_all").then((function(t){e.users=t.data})).catch((function(t){e.$store.commit("setSnackbar","Nie udało się załadować użytkowników...")}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,s,"next",t)}function s(t){c(i,n,o,a,s,"throw",t)}a(void 0)}))})()},itemText:function(t){return"".concat(t.name," (").concat(t.email,")")},toggle:function(){var t=this;this.selectPlayersFlag=!1,this.$nextTick((function(){t.likesAllFruit?t.selectedUsers=[]:t.selectedUsers=t.users.slice()}))},searchUser:function(){var t,e=[],r=s(this.users);try{for(r.s();!(t=r.n()).done;){var n=t.value;!n.name.toLowerCase().includes(this.search.toLowerCase())&&!n.email.toLowerCase().includes(this.search.toLowerCase())||e.push(n)}}catch(t){r.e(t)}finally{r.f()}return e}},created:function(){this.getUsers()}};var f=r(1900);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function f(){}function d(){}function p(){}var y={};c(y,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==e&&r.call(g,o)&&(y=g);var w=p.prototype=f.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==h(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=p,c(w,"constructor",p),c(p,"constructor",d),d.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),c(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),c(w,a,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function y(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){y(i,n,o,a,c,"next",t)}function c(t){y(i,n,o,a,c,"throw",t)}a(void 0)}))}}const g={data:function(){return{files:[],mail:{subject:"",message:"",newsletter:!0},users:[],loading:!1,valid:!0,rules:{titleRules:[function(t){return!!t||"To pole jest wymagane!"}]}}},components:{Select:(0,f.Z)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-select",{attrs:{items:t.searchUser(),"return-object":"","item-text":t.itemText,label:"Użytkownicy",multiple:"",chips:""},scopedSlots:t._u([{key:"prepend-item",fn:function(){return[r("v-list-item",[r("v-text-field",{attrs:{label:"Znajdź"},on:{keyup:t.searchUser},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-list-item",{attrs:{ripple:""},on:{click:t.toggle}},[r("v-list-item-action",[r("v-icon",{attrs:{color:t.selectedUsers.length>0?"primary":""}},[t._v("\n\t\t\t\t\t\t"+t._s(t.icon)+"\n\t\t\t\t\t")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("\n\t\t\t\t\t\tWybierz wszystkich\n\t\t\t\t\t")])],1)],1),t._v(" "),r("v-list-item",{attrs:{ripple:""},on:{click:t.selectPlayers}},[r("v-list-item-action",[r("v-icon",{attrs:{color:t.selectedUsers.length>0?"primary":""}},[t._v("\n\t\t\t\t\t\t"+t._s(t.playersIcon)+"\n\t\t\t\t\t")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("\n\t\t\t\t\t\tTylko zawodnicy\n\t\t\t\t\t")])],1)],1),t._v(" "),r("v-divider",{staticClass:"mt-2"})]},proxy:!0},{key:"selection",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:"primary"}},[t._v(t._s(n.name))])]}}]),model:{value:t.selectedUsers,callback:function(e){t.selectedUsers=e},expression:"selectedUsers"}})],1)}),[],!1,null,null,null).exports},methods:{deleteMail:function(t){o().delete("/api/mails/delete/"+t.id)},sendMail:function(t){var e=this;return m(v().mark((function r(){var n,i,a,c;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=0,i=d(e.users),r.prev=2,i.s();case 4:if((a=i.n()).done){r.next=14;break}return c=a.value,t.email=c.email,t.newsletter=1,n==e.users.length-1&&(t.delete=1),r.next=11,o().post("/api/mails/send",t).then((function(r){e.loading=!1,null!=r.data.error?e.$store.commit("setSnackbar",r.data.error.message):null!=r.data.success&&e.$store.commit("setSnackbar",r.data.success.message),n==e.users.length-1&&r.data.success&&(e.$refs.form.reset(),e.$refs.form.resetValidation(),e.deleteMail(t))})).catch((function(t){console.log(t),e.loading=!1,e.$store.commit("setSnackbar","Przepraszamy, nie udało się wysłać maila...")}));case 11:n++;case 12:r.next=4;break;case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(2),i.e(r.t0);case 19:return r.prev=19,i.f(),r.finish(19);case 22:case"end":return r.stop()}}),r,null,[[2,16,19,22]])})))()},saveAttachments:function(t){var e=this;return m(v().mark((function r(){var n,i;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=v().mark((function r(n){var i;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(i=new FormData).append("file",e.files[n]),i.append("mail_id",t.id),r.next=5,o().post("/api/attachments/add",i).then((function(r){n==e.files.length-1&&e.sendMail(t)})).catch((function(t){e.loading=!1,console.log(t),e.$store.commit("setSnackbar","Przepraszamy, nie udało się wysłać załączników...")}));case 5:case"end":return r.stop()}}),r)})),i=0;case 2:if(!(i<e.files.length)){r.next=7;break}return r.delegateYield(n(i),"t0",4);case 4:i++,r.next=2;break;case 7:case"end":return r.stop()}}),r)})))()},saveMail:function(){var t=this;this.valid&&(this.loading=!0,o().post("/api/mails/add",this.mail).then((function(e){t.files.length>0?t.saveAttachments(e.data):t.sendMail(e.data)})).catch((function(e){console.log(e),t.loading=!1,t.$store.commit("setSnackbar","Przepraszamy, błąd serwera...")})))}}};const w=(0,f.Z)(g,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",[r("v-card",[r("v-card-title",{staticClass:"justify-content-center"},[r("h2",{staticClass:"pt-4 font-weight-bold panel-title-header first-color"},[t._v("\n          Wysyłanie maila do użytkowników\n        ")])]),t._v(" "),r("v-divider",{staticClass:"mt-0"}),t._v(" "),r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",{staticClass:"px-5"},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{color:"primary",rules:t.rules.titleRules,label:"Temat Twojej wiadomości"},model:{value:t.mail.subject,callback:function(e){t.$set(t.mail,"subject",e)},expression:"mail.subject"}}),t._v(" "),r("v-textarea",{attrs:{color:"primary",rules:t.rules.titleRules,rows:"5",label:"Twoja wiadomość"},model:{value:t.mail.message,callback:function(e){t.$set(t.mail,"message",e)},expression:"mail.message"}}),t._v(" "),r("Select",{on:{users:function(e){t.users=e}}})],1)],1),t._v(" "),r("v-divider",{staticClass:"mb-0"}),t._v(" "),r("v-card-actions",{staticClass:"pa-4"},[r("v-btn",{staticClass:"mr-2",attrs:{loading:t.loading,disabled:!t.valid||0==t.users.length,color:"primary"},on:{click:t.saveMail}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),r("span",[t._v("Wyślij")])],1),t._v(" "),r("v-btn",{staticClass:"mr-2",attrs:{color:"error"},on:{click:function(e){return t.$router.go(-1)}}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-close")]),t._v(" "),r("span",[t._v("Wróć")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);