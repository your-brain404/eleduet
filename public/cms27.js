(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{p68U:function(t,e,r){"use strict";r.r(e);var a={mixins:[r("L1sZ").a]},c=r("KHd+"),l=Object(c.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-main",{},[r("v-container",[r("v-card",[r("v-card-title",{staticClass:"justify-content-center"},[r("h2",{staticClass:"pt-4 font-weight-bold panel-title-header first-color"},[t._v("\n          Fotowoltaika "+t._s(t.formTitle)+"\n        ")])]),t._v(" "),r("v-divider",{staticClass:"mt-0"}),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"8"}},[r("div",{staticClass:"pa-5"},[r("v-text-field",{attrs:{color:"primary",rules:t.rules.titleRules,label:"Tytuł *",required:""},model:{value:t.currentObject.title,callback:function(e){t.$set(t.currentObject,"title",e)},expression:"currentObject.title"}}),t._v(" "),r("div",{staticClass:"mt-3"},[r("p",{staticClass:"mb-1"},[t._v("Krótki opis")]),t._v(" "),r("vue-editor",{model:{value:t.currentObject.short_description,callback:function(e){t.$set(t.currentObject,"short_description",e)},expression:"currentObject.short_description"}})],1)],1)]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("div",{staticClass:"pa-5"},[r("FilePicker",{attrs:{"images-only":""},model:{value:t.currentObject.photo,callback:function(e){t.$set(t.currentObject,"photo",e)},expression:"currentObject.photo"}}),t._v(" "),r("v-text-field",{attrs:{color:"primary",label:"Tekst alternatywny zdjęcia"},model:{value:t.currentObject.photo_alt,callback:function(e){t.$set(t.currentObject,"photo_alt",e)},expression:"currentObject.photo_alt"}})],1)])],1),t._v(" "),r("v-divider",{staticClass:"mb-0"}),t._v(" "),r("v-card-actions",{staticClass:"pa-4"},[r("v-btn",{staticClass:"mr-2",attrs:{disabled:!t.valid||""==t.currentObject.title,color:"primary"},on:{click:t.validate}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),r("span",[t._v("Zatwierdź")])],1),t._v(" "),r("v-btn",{staticClass:"mr-2",attrs:{color:"error"},on:{click:function(e){return t.$router.go(-1)}}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-close")]),t._v(" "),r("span",[t._v("Anuluj")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);
//# sourceMappingURL=cms27.js.map