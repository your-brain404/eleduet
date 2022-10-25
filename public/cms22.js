(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cms22"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/ServicesCallUs.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/forms/ServicesCallUs.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_FormService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/FormService.js */ "./resources/js/mixins/FormService.js");
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_FormService_js__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/ServicesCallUs.vue?vue&type=template&id=3e64a0ce&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/forms/ServicesCallUs.vue?vue&type=template&id=3e64a0ce& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    "v-content",
    [
      _c(
        "v-container",
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "justify-content-center" }, [
                _c(
                  "h2",
                  {
                    staticClass:
                      "pt-4 font-weight-bold panel-title-header first-color"
                  },
                  [
                    _vm._v(
                      "\n          Masz pytania? Zadzwoń! " +
                        _vm._s(_vm.formTitle) +
                        "\n        "
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("v-divider", { staticClass: "mt-0" }),
              _vm._v(" "),
              _c(
                "v-form",
                {
                  ref: "form",
                  model: {
                    value: _vm.valid,
                    callback: function($$v) {
                      _vm.valid = $$v
                    },
                    expression: "valid"
                  }
                },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "12", md: "8" } }, [
                        _c(
                          "div",
                          { staticClass: "pa-5" },
                          [
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                rules: _vm.rules.titleRules,
                                label: "Tytuł *",
                                required: ""
                              },
                              model: {
                                value: _vm.currentObject.title,
                                callback: function($$v) {
                                  _vm.$set(_vm.currentObject, "title", $$v)
                                },
                                expression: "currentObject.title"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                label: "Napis na przycisku",
                                required: ""
                              },
                              model: {
                                value: _vm.currentObject.button_name,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.currentObject,
                                    "button_name",
                                    $$v
                                  )
                                },
                                expression: "currentObject.button_name"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                        _c(
                          "div",
                          { staticClass: "pa-5" },
                          [
                            _c("FilePicker", {
                              attrs: { "images-only": "" },
                              model: {
                                value: _vm.currentObject.photo,
                                callback: function($$v) {
                                  _vm.$set(_vm.currentObject, "photo", $$v)
                                },
                                expression: "currentObject.photo"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                label: "Tekst alternatywny zdjęcia"
                              },
                              model: {
                                value: _vm.currentObject.photo_alt,
                                callback: function($$v) {
                                  _vm.$set(_vm.currentObject, "photo_alt", $$v)
                                },
                                expression: "currentObject.photo_alt"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                label: "Pozycja zdjęcia"
                              },
                              model: {
                                value:
                                  _vm.currentObject.photo_background_position,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.currentObject,
                                    "photo_background_position",
                                    $$v
                                  )
                                },
                                expression:
                                  "currentObject.photo_background_position"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                type: "number",
                                label: "Wysokość (mobile) w pikselach"
                              },
                              model: {
                                value: _vm.currentObject.height,
                                callback: function($$v) {
                                  _vm.$set(_vm.currentObject, "height", $$v)
                                },
                                expression: "currentObject.height"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                type: "number",
                                label: "Wysokość (tablet) w pikselach"
                              },
                              model: {
                                value: _vm.currentObject.height_md,
                                callback: function($$v) {
                                  _vm.$set(_vm.currentObject, "height_md", $$v)
                                },
                                expression: "currentObject.height_md"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                type: "number",
                                label: "Wysokość (desktop) w pikselach"
                              },
                              model: {
                                value: _vm.currentObject.height_lg,
                                callback: function($$v) {
                                  _vm.$set(_vm.currentObject, "height_lg", $$v)
                                },
                                expression: "currentObject.height_lg"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "mb-0" }),
                  _vm._v(" "),
                  _c("form-footer")
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/forms/ServicesCallUs.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/admin/forms/ServicesCallUs.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServicesCallUs_vue_vue_type_template_id_3e64a0ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServicesCallUs.vue?vue&type=template&id=3e64a0ce& */ "./resources/js/views/admin/forms/ServicesCallUs.vue?vue&type=template&id=3e64a0ce&");
/* harmony import */ var _ServicesCallUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServicesCallUs.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/forms/ServicesCallUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ServicesCallUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServicesCallUs_vue_vue_type_template_id_3e64a0ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ServicesCallUs_vue_vue_type_template_id_3e64a0ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/forms/ServicesCallUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/forms/ServicesCallUs.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/forms/ServicesCallUs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesCallUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ServicesCallUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/ServicesCallUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesCallUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/forms/ServicesCallUs.vue?vue&type=template&id=3e64a0ce&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/admin/forms/ServicesCallUs.vue?vue&type=template&id=3e64a0ce& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesCallUs_vue_vue_type_template_id_3e64a0ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ServicesCallUs.vue?vue&type=template&id=3e64a0ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/ServicesCallUs.vue?vue&type=template&id=3e64a0ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesCallUs_vue_vue_type_template_id_3e64a0ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesCallUs_vue_vue_type_template_id_3e64a0ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);