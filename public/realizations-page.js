(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"2sy3":function(t,n,a){var e=a("RbXx");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(e,i);e.locals&&(t.exports=e.locals)},Lf0H:function(t,n,a){"use strict";a.r(n);var e=a("o0o1"),i=a.n(e),o=a("VUdy");a("IiNc");function r(t,n,a,e,i,o,r){try{var s=t[o](r),c=s.value}catch(t){return void a(t)}s.done?n(c):Promise.resolve(c).then(e,i)}var s={components:{CoolLightBox:o.a},props:["reloadFlag"],watch:{reloadFlag:function(){this.reloadFlag&&this.reloadData()}},data:function(){return{origin:window.location.origin,table:"realizations",index:null}},computed:{realizations:function(){return this.$store.getters.realizations}},methods:{emitData:function(){this.$emit("blockDataEmit",this.data)},fetchData:function(){this.$store.dispatch(this.table)},reloadData:function(){var t,n=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.$store.commit(n.table,[]),t.next=3,n.fetchData();case 3:n.emitData();case 4:case"end":return t.stop()}}),t)})),function(){var n=this,a=arguments;return new Promise((function(e,i){var o=t.apply(n,a);function s(t){r(o,e,i,s,c,"next",t)}function c(t){r(o,e,i,s,c,"throw",t)}s(void 0)}))})()}},created:function(){this.fetchData()}},c=(a("V8tv"),a("KHd+")),l=Object(c.a)(s,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",{staticClass:"realizations-page"},[a("CoolLightBox",{attrs:{items:t.realizations.map((function(n){return t.origin+"/storage/media/"+n.path})),index:t.index},on:{close:function(n){t.index=null}}}),t._v(" "),a("div",{staticClass:"content"},t._l(t.realizations,(function(n,e){return a("div",{key:"realization-"+e,staticClass:"realization",on:{click:function(n){t.index=e}}},[a("div",{staticClass:"wrapper"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.origin+"/storage/media/"+n.path,expression:"\n                        `${origin}/storage/media/${realization.path}`\n                    ",arg:"background-image"}],staticClass:"photo",attrs:{title:n.photo_alt}}),t._v(" "),a("div",{staticClass:"text"},[t._v(t._s(n.photo_alt))])])])})),0)],1)}),[],!1,null,"19e5b070",null);n.default=l.exports},RbXx:function(t,n,a){(t.exports=a("I1BE")(!1)).push([t.i,"section.realizations-page[data-v-19e5b070] {\n  margin-top: 7rem;\n  margin-bottom: 7rem;\n}\nsection.realizations-page .content[data-v-19e5b070] {\n  padding-left: var(--global-padding-x-desktop);\n  padding-right: var(--global-padding-x-desktop);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n}\n@media (max-width: 992px) {\nsection.realizations-page .content[data-v-19e5b070] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.realizations-page .content .realization[data-v-19e5b070] {\n  width: 25%;\n  cursor: pointer;\n  border-radius: 12px;\n  background-color: #fff;\n  padding: 0.3rem;\n}\n@media (max-width: 992px) {\nsection.realizations-page .content .realization[data-v-19e5b070] {\n    width: 100%;\n}\n}\nsection.realizations-page .content .realization .wrapper[data-v-19e5b070] {\n  border-radius: 12px;\n  padding: 1rem;\n  height: 100%;\n  background-color: var(--first-color);\n}\nsection.realizations-page .content .realization .wrapper .photo[data-v-19e5b070] {\n  background-size: cover;\n  border-radius: 12px;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 100%;\n  height: 200px;\n}\nsection.realizations-page .content .realization .wrapper .text[data-v-19e5b070] {\n  margin-top: 1rem;\n  color: white;\n  font-weight: 600;\n  font-size: 1.1rem;\n}",""])},V8tv:function(t,n,a){"use strict";a("2sy3")}}]);
//# sourceMappingURL=realizations-page.js.map