"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8278],{9142:(t,e,o)=>{function i(t){return null!=t?window.location.origin+"/storage/media/"+t:""}o.d(e,{Z:()=>i})},1987:(t,e,o)=>{o.d(e,{Z:()=>s});var i=o(1519),n=o.n(i)()((function(t){return t[1]}));n.push([t.id,".cookies{height:100vh;position:fixed;top:0;width:100vw;z-index:9999}.cookies__overlay{background:#000;height:100%;left:0;opacity:.7;position:absolute;top:0;width:100%}.cookies__content{align-items:center;background:#fff;bottom:0;display:flex;justify-content:space-between;padding:12px;position:fixed;width:100%;z-index:2}.cookies__text{padding-right:12px}",""]);const s=n},8402:(t,e,o)=>{o.r(e),o.d(e,{default:()=>u});var i=o(9142);var n=o(9765);const s={data:function(){return{url:i.Z,cookies:!0}},computed:{settings:function(){return window.global.config.settings}},methods:{accept:function(){!function(t,e,o){var i=new Date;i.setTime(i.getTime()+24*o*60*60*1e3);var n="expires="+i.toUTCString();document.cookie=t+"="+e+";"+n+";path=/"}("cookies",!0,365),document.querySelector("html").style.overflow="",this.cookies=!1}},created:function(){this.cookies=!(0,n.Z)("cookies"),document.querySelector("html").style.overflow="hidden"}};var c=o(3379),a=o.n(c),r=o(1987),l={insert:"head",singleton:!1};a()(r.Z,l);r.Z.locals;const u=(0,o(1900).Z)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.cookies?o("div",{staticClass:"cookies"},[o("div",{staticClass:"cookies__overlay"}),t._v(" "),o("div",{staticClass:"cookies__content"},[o("div",{staticClass:"cookies__text"},[t._v("\n      "+t._s(t.settings.cookies)),o("a",{attrs:{target:"_blank",href:t.url(t.settings.privace_policy)}},[t._v(t._s(" "+t.settings.cookies_privace_button))])]),t._v(" "),o("button",{staticClass:"button first-button",domProps:{textContent:t._s(t.settings.cookies_button)},on:{click:t.accept}})])]):t._e()}),[],!1,null,null,null).exports}}]);