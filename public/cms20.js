(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"5JJx":function(e,t,r){"use strict";r("eob7")},eob7:function(e,t,r){var c=r("nToc");"string"==typeof c&&(c=[[e.i,c,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(c,i);c.locals&&(e.exports=c.locals)},nToc:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,".checkboxes label {\n  margin-bottom: 0 !important;\n}",""])},zuzJ:function(e,t,r){"use strict";r.r(t);var c={mixins:[r("L1sZ").a],computed:{serviceCategories:function(){return this.$store.getters.serviceCategories},currentServiceCategories:function(){return this.$store.getters.currentServiceCategories.map((function(e){return e.service_category_id}))}},methods:{serviceCategoryChange:function(e,t){var r=this.currentObject;t?r.service_categories.push(e):r.service_categories.splice(r.service_categories.indexOf(e),1),this.$store.commit("FormService/setCurrentObject",r)},setCheckboxState:function(e){return this.currentServiceCategories.includes(e)}},created:function(){this.$store.dispatch("serviceCategories"),this.$store.dispatch("currentServiceCategories",this.$route.params.id)},destroyed:function(){this.$store.commit("currentServiceCategories",[])}},i=(r("5JJx"),r("KHd+")),o=Object(i.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-main",[r("v-container",[r("v-card",[r("v-card-title",{staticClass:"justify-content-center"},[r("h2",{staticClass:"pt-4 font-weight-bold panel-title-header first-color"},[e._v("\n          Usługi "+e._s(e.formTitle)+"\n        ")])]),e._v(" "),r("v-divider",{staticClass:"mt-0"}),e._v(" "),r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"8"}},[r("div",{staticClass:"pa-5"},[r("v-checkbox",{attrs:{color:"primary",label:"Pokaż na stronie głównej","input-value":e.currentObject.home_page,value:e.currentObject.home_page},on:{change:function(t){e.currentObject.home_page=t}}}),e._v(" "),r("v-text-field",{attrs:{color:"primary",rules:e.rules.titleRules,label:"Tytuł *",required:""},model:{value:e.currentObject.title,callback:function(t){e.$set(e.currentObject,"title",t)},expression:"currentObject.title"}}),e._v(" "),r("div",{staticClass:"checkboxes"},[r("p",{staticClass:"mb-1"},[e._v("Wybierz kategorie:")]),e._v(" "),e._l(e.serviceCategories,(function(t,c){return r("v-checkbox",{key:"service-category-"+c,attrs:{color:"primary",label:t.title.replace("<br>"," ").replace("{","").replace("}",""),"input-value":e.setCheckboxState(t.id)},on:{change:function(r){return e.serviceCategoryChange(t.id,r)}}})}))],2),e._v(" "),r("div",{staticClass:"mt-3"},[r("p",{staticClass:"mb-1"},[e._v("Krótki opis")]),e._v(" "),r("vue-editor",{model:{value:e.currentObject.short_description,callback:function(t){e.$set(e.currentObject,"short_description",t)},expression:"currentObject.short_description"}})],1),e._v(" "),r("div",{staticClass:"mt-3"},[r("p",{staticClass:"mb-1"},[e._v("Opis")]),e._v(" "),r("vue-editor",{model:{value:e.currentObject.description,callback:function(t){e.$set(e.currentObject,"description",t)},expression:"currentObject.description"}})],1)],1)]),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("div",{staticClass:"pa-5"},[r("FilePicker",{attrs:{"images-only":""},model:{value:e.currentObject.photo,callback:function(t){e.$set(e.currentObject,"photo",t)},expression:"currentObject.photo"}}),e._v(" "),r("v-text-field",{attrs:{color:"primary",label:"Tekst alternatywny zdjęcia"},model:{value:e.currentObject.photo_alt,callback:function(t){e.$set(e.currentObject,"photo_alt",t)},expression:"currentObject.photo_alt"}}),e._v(" "),r("v-text-field",{attrs:{color:"primary",label:"Pozycja zdjęcia"},model:{value:e.currentObject.photo_background_position,callback:function(t){e.$set(e.currentObject,"photo_background_position",t)},expression:"currentObject.photo_background_position"}})],1)])],1),e._v(" "),r("v-divider",{staticClass:"mb-0"}),e._v(" "),r("form-footer")],1)],1)],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);
//# sourceMappingURL=cms20.js.map