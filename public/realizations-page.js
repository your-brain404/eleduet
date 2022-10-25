(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["realizations-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Realizations.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Realizations.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cool_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cool-lightbox */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.esm.js");
/* harmony import */ var vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-cool-lightbox/dist/vue-cool-lightbox.min.css */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css");
/* harmony import */ var vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mixins/admin-table-component */ "./resources/js/mixins/admin-table-component.js");
/* harmony import */ var _components_picture_Picture_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/picture/Picture.vue */ "./resources/js/components/picture/Picture.vue");
/* harmony import */ var _helpers_links_existing_photo_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/links/existing-photo-path */ "./resources/js/helpers/links/existing-photo-path.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    CoolLightBox: vue_cool_lightbox__WEBPACK_IMPORTED_MODULE_0__["default"],
    Picture: _components_picture_Picture_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      origin: window.location.origin,
      table: "realizations",
      index: null,
      emit: false
    };
  },
  methods: {
    existingPhotoPath: _helpers_links_existing_photo_path__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: {
    realizations: function realizations() {
      var _this$$store$state$Re;

      return ((_this$$store$state$Re = this.$store.state.Realizations) === null || _this$$store$state$Re === void 0 ? void 0 : _this$$store$state$Re.realizations) || [];
    },
    tableData: function tableData() {
      return this.realizations;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Realizations.vue?vue&type=style&index=0&id=d1b190f8&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Realizations.vue?vue&type=style&index=0&id=d1b190f8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section.realizations-page[data-v-d1b190f8] {\n  margin-top: 7rem;\n  margin-bottom: 7rem;\n}\nsection.realizations-page[data-v-d1b190f8]  .content {\n  padding-left: var(--global-padding-x-desktop);\n  padding-right: var(--global-padding-x-desktop);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n}\n@media (max-width: 992px) {\nsection.realizations-page[data-v-d1b190f8]  .content {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.realizations-page[data-v-d1b190f8]  .content .realization {\n  width: 25%;\n  cursor: pointer;\n  border-radius: 12px;\n  background-color: #fff;\n  padding: 0.3rem;\n}\n@media (max-width: 992px) {\nsection.realizations-page[data-v-d1b190f8]  .content .realization {\n    width: 100%;\n}\n}\nsection.realizations-page[data-v-d1b190f8]  .content .realization .wrapper {\n  border-radius: 12px;\n  padding: 1rem;\n  height: 100%;\n  background-color: var(--first-color);\n}\nsection.realizations-page[data-v-d1b190f8]  .content .realization .wrapper .photo {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 12px;\n  width: 100%;\n  height: 200px;\n}\nsection.realizations-page[data-v-d1b190f8]  .content .realization .wrapper .text {\n  margin-top: 1rem;\n  color: white;\n  font-weight: 600;\n  font-size: 1.1rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Realizations.vue?vue&type=style&index=0&id=d1b190f8&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Realizations.vue?vue&type=style&index=0&id=d1b190f8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Realizations.vue?vue&type=style&index=0&id=d1b190f8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Realizations.vue?vue&type=style&index=0&id=d1b190f8&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Realizations.vue?vue&type=template&id=d1b190f8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Realizations.vue?vue&type=template&id=d1b190f8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "realizations-page" },
    [
      _c("CoolLightBox", {
        attrs: {
          items: _vm.realizations.map(function(photo) {
            return _vm.existingPhotoPath(
              _vm.origin + "/storage/media/" + photo.path
            )
          }),
          index: _vm.index
        },
        on: {
          close: function($event) {
            _vm.index = null
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content" },
        _vm._l(_vm.realizations, function(realization, i) {
          return _c(
            "div",
            {
              key: "realization-" + i,
              staticClass: "realization",
              on: {
                click: function($event) {
                  _vm.index = i
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "wrapper" },
                [
                  _c("Picture", {
                    attrs: {
                      classImg: "photo",
                      height: "200",
                      alt: realization.photo_alt,
                      src: _vm.origin + "/storage/media/" + realization.path
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text" }, [
                    _vm._v(_vm._s(realization.photo_alt))
                  ])
                ],
                1
              )
            ]
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/public/Realizations.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/public/Realizations.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Realizations_vue_vue_type_template_id_d1b190f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Realizations.vue?vue&type=template&id=d1b190f8&scoped=true& */ "./resources/js/views/public/Realizations.vue?vue&type=template&id=d1b190f8&scoped=true&");
/* harmony import */ var _Realizations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Realizations.vue?vue&type=script&lang=js& */ "./resources/js/views/public/Realizations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Realizations_vue_vue_type_style_index_0_id_d1b190f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Realizations.vue?vue&type=style&index=0&id=d1b190f8&lang=scss&scoped=true& */ "./resources/js/views/public/Realizations.vue?vue&type=style&index=0&id=d1b190f8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Realizations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Realizations_vue_vue_type_template_id_d1b190f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Realizations_vue_vue_type_template_id_d1b190f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d1b190f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/public/Realizations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/public/Realizations.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/public/Realizations.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Realizations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Realizations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Realizations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Realizations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/public/Realizations.vue?vue&type=style&index=0&id=d1b190f8&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/public/Realizations.vue?vue&type=style&index=0&id=d1b190f8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Realizations_vue_vue_type_style_index_0_id_d1b190f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Realizations.vue?vue&type=style&index=0&id=d1b190f8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Realizations.vue?vue&type=style&index=0&id=d1b190f8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Realizations_vue_vue_type_style_index_0_id_d1b190f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Realizations_vue_vue_type_style_index_0_id_d1b190f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Realizations_vue_vue_type_style_index_0_id_d1b190f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Realizations_vue_vue_type_style_index_0_id_d1b190f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/public/Realizations.vue?vue&type=template&id=d1b190f8&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/public/Realizations.vue?vue&type=template&id=d1b190f8&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Realizations_vue_vue_type_template_id_d1b190f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Realizations.vue?vue&type=template&id=d1b190f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Realizations.vue?vue&type=template&id=d1b190f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Realizations_vue_vue_type_template_id_d1b190f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Realizations_vue_vue_type_template_id_d1b190f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);