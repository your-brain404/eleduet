(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1GfX":function(t,a,n){"use strict";n("EDvg")},"3aSW":function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,"section.about-page[data-v-71b9ff5e] {\n  padding-left: var(--global-padding-x-desktop);\n  padding-right: var(--global-padding-x-desktop);\n  padding-top: 7rem;\n  padding-bottom: 7rem;\n}\n@media (max-width: 992px) {\nsection.about-page[data-v-71b9ff5e] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.about-page .gallery[data-v-71b9ff5e] {\n  display: flex;\n  flex-wrap: wrap;\n}\nsection.about-page .gallery .photo[data-v-71b9ff5e] {\n  width: 33%;\n}\n@media (max-width: 992px) {\nsection.about-page .gallery .photo[data-v-71b9ff5e] {\n    width: 100%;\n}\n}\nsection.about-page .gallery .photo .img[data-v-71b9ff5e] {\n  max-width: 100%;\n  height: auto;\n  cursor: pointer;\n}",""])},EDvg:function(t,a,n){var e=n("3aSW");"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,o);e.locals&&(t.exports=e.locals)},lbUy:function(t,a,n){"use strict";n.r(a);var e=n("o0o1"),o=n.n(e),i=n("vDqi"),r=n.n(i),s=n("VUdy");n("IiNc");function c(t,a,n,e,o,i,r){try{var s=t[i](r),c=s.value}catch(t){return void n(t)}s.done?a(c):Promise.resolve(c).then(e,o)}function l(t){return function(){var a=this,n=arguments;return new Promise((function(e,o){var i=t.apply(a,n);function r(t){c(i,e,o,r,s,"next",t)}function s(t){c(i,e,o,r,s,"throw",t)}r(void 0)}))}}var d={components:{CoolLightBox:s.a},props:["reloadFlag"],watch:{reloadFlag:function(){this.reloadFlag&&this.reloadData()}},data:function(){return{origin:window.location.origin,table:"about_page",index:null,gallery:[]}},computed:{data:function(){return this.$store.getters.aboutPage}},methods:{emitData:function(){this.$emit("blockDataEmit",[this.data])},fetchData:function(){var t=this;return l(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("aboutPage");case 2:t.emitData();case 3:case"end":return a.stop()}}),a)})))()},reloadData:function(){var t=this;return l(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.$store.commit("aboutPage",[]),a.next=3,t.fetchData();case 3:case"end":return a.stop()}}),a)})))()},fetchGallery:function(){var t=this;return l(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.get("/api/gallery/get_photos/".concat(t.table,"/1")).then((function(a){t.gallery=a.data})).catch((function(a){console.log(a),t.$store.commit("setSnackbar","Przepraszamy, nie udało się załadować galerii...")}));case 2:case"end":return a.stop()}}),a)})))()}},created:function(){this.fetchData(),this.fetchGallery()}},u=(n("1GfX"),n("KHd+")),p=Object(u.a)(d,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("section",{staticClass:"about-page"},[n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.data.description)}}),t._v(" "),n("div",{staticClass:"gallery"},[n("CoolLightBox",{attrs:{items:t.gallery.map((function(a){return t.origin+"/storage/media/"+a.path})),index:t.index},on:{close:function(a){t.index=null}}}),t._v(" "),t._l(t.gallery,(function(a,e){return n("div",{key:"photo-"+a.id,staticClass:"photo"},[n("img",{staticClass:"img",attrs:{src:t.origin+"/storage/media/"+a.path,alt:a.photo_alt},on:{click:function(a){t.index=e}}})])}))],2)])}),[],!1,null,"71b9ff5e",null);a.default=p.exports}}]);
//# sourceMappingURL=about-page.js.map