(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{VyjZ:function(t,e,a){"use strict";a.r(e);var r={mixins:[a("L1sZ").a]},l=a("KHd+"),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",{},[a("v-container",[a("v-card",[a("v-card-title",{staticClass:"justify-content-center"},[a("h2",{staticClass:"pt-4 font-weight-bold panel-title-header first-color"},[t._v("\n          Użytkownik - "+t._s(t.currentObject.name)+"\n        ")])]),t._v(" "),a("v-divider",{staticClass:"mt-0"}),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"pa-5"},[a("v-text-field",{attrs:{color:"primary",rules:t.rules.titleRules,label:"Imię i nazwisko *",required:""},model:{value:t.currentObject.name,callback:function(e){t.$set(t.currentObject,"name",e)},expression:"currentObject.name"}}),t._v(" "),a("v-select",{attrs:{items:["Admin","Klient","Zawodnik"],color:"primary",label:"Typ użytkownika"},model:{value:t.currentObject.type,callback:function(e){t.$set(t.currentObject,"type",e)},expression:"currentObject.type"}}),t._v(" "),a("v-text-field",{attrs:{disabled:"",color:"primary",label:"Adres e-mail"},model:{value:t.currentObject.email,callback:function(e){t.$set(t.currentObject,"email",e)},expression:"currentObject.email"}})],1)])],1),t._v(" "),a("v-divider",{staticClass:"mb-0"}),t._v(" "),a("v-card-actions",{staticClass:"pa-4"},[a("v-btn",{staticClass:"mr-2",attrs:{disabled:!t.valid||""==t.currentObject.title,color:"primary"},on:{click:t.validate}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),a("span",[t._v("Zatwierdź")])],1),t._v(" "),a("v-btn",{staticClass:"mr-2",attrs:{color:"error"},on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-close")]),t._v(" "),a("span",[t._v("Anuluj")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);
//# sourceMappingURL=cms31.js.map