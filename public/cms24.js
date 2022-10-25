(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cms24"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/Settings.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/forms/Settings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/Settings.vue?vue&type=template&id=30e474e2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/forms/Settings.vue?vue&type=template&id=30e474e2& ***!
  \******************************************************************************************************************************************************************************************************************/
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
                      "\n          Ustawienia " +
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
                                label: "Nazwa Strony *",
                                required: ""
                              },
                              model: {
                                value: _vm.currentObject.company,
                                callback: function($$v) {
                                  _vm.$set(_vm.currentObject, "company", $$v)
                                },
                                expression: "currentObject.company"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-3" },
                              [
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v("Kolor strony")
                                ]),
                                _vm._v(" "),
                                _c("v-color-picker", {
                                  attrs: {
                                    "dot-size": "25",
                                    "swatches-max-height": "200",
                                    value: _vm.currentObject.first_color
                                  },
                                  on: {
                                    input: function($event) {
                                      _vm.currentObject.first_color = $event
                                    }
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-3" },
                              [
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v("Opis w stopce")
                                ]),
                                _vm._v(" "),
                                _c("vue-editor", {
                                  model: {
                                    value: _vm.currentObject.description,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.currentObject,
                                        "description",
                                        $$v
                                      )
                                    },
                                    expression: "currentObject.description"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-3" },
                              [
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v(
                                    "Zgoda na przetwarzanie danych (rodo1)"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-textarea", {
                                  model: {
                                    value: _vm.currentObject.rodo_1,
                                    callback: function($$v) {
                                      _vm.$set(_vm.currentObject, "rodo_1", $$v)
                                    },
                                    expression: "currentObject.rodo_1"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-3" },
                              [
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v(
                                    "Zgoda na kontakt telefoniczny (rodo2)"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-textarea", {
                                  model: {
                                    value: _vm.currentObject.rodo_2,
                                    callback: function($$v) {
                                      _vm.$set(_vm.currentObject, "rodo_2", $$v)
                                    },
                                    expression: "currentObject.rodo_2"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-3" },
                              [
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v("Cookies")
                                ]),
                                _vm._v(" "),
                                _c("v-textarea", {
                                  model: {
                                    value: _vm.currentObject.cookies,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.currentObject,
                                        "cookies",
                                        $$v
                                      )
                                    },
                                    expression: "currentObject.cookies"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                label: "Tekst na przycisku cookies"
                              },
                              model: {
                                value: _vm.currentObject.cookies_button,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.currentObject,
                                    "cookies_button",
                                    $$v
                                  )
                                },
                                expression: "currentObject.cookies_button"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                label:
                                  "Tekst linku polityki prywatności (cookies)"
                              },
                              model: {
                                value: _vm.currentObject.cookies_privace_button,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.currentObject,
                                    "cookies_privace_button",
                                    $$v
                                  )
                                },
                                expression:
                                  "currentObject.cookies_privace_button"
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
                          {
                            staticClass:
                              "pa-5 d-flex flex-column justify-content-between"
                          },
                          [
                            _c("FilePicker", {
                              attrs: { title: "Logo", "images-only": "" },
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
                                label: "Tekst alternatywny loga"
                              },
                              model: {
                                value: _vm.currentObject.photo_alt,
                                callback: function($$v) {
                                  _vm.$set(_vm.currentObject, "photo_alt", $$v)
                                },
                                expression: "currentObject.photo_alt"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "pa-5 d-flex flex-column justify-content-between"
                          },
                          [
                            _c("FilePicker", {
                              attrs: { title: "Polityka prywatności" },
                              model: {
                                value: _vm.currentObject.privace_policy,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.currentObject,
                                    "privace_policy",
                                    $$v
                                  )
                                },
                                expression: "currentObject.privace_policy"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "pa-5 d-flex flex-column justify-content-between"
                          },
                          [
                            _c("FilePicker", {
                              attrs: { title: "Favicon", "images-only": "" },
                              model: {
                                value: _vm.currentObject.favicon,
                                callback: function($$v) {
                                  _vm.$set(_vm.currentObject, "favicon", $$v)
                                },
                                expression: "currentObject.favicon"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "pa-5 d-flex flex-column justify-content-between"
                          },
                          [
                            _c("FilePicker", {
                              attrs: {
                                title: "Punktor listy",
                                "images-only": ""
                              },
                              model: {
                                value: _vm.currentObject.li_marker,
                                callback: function($$v) {
                                  _vm.$set(_vm.currentObject, "li_marker", $$v)
                                },
                                expression: "currentObject.li_marker"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                label: "Tekst alternatywny punktora listy"
                              },
                              model: {
                                value: _vm.currentObject.li_marker_alt,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.currentObject,
                                    "li_marker_alt",
                                    $$v
                                  )
                                },
                                expression: "currentObject.li_marker_alt"
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

/***/ "./resources/js/views/admin/forms/Settings.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/admin/forms/Settings.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_30e474e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=30e474e2& */ "./resources/js/views/admin/forms/Settings.vue?vue&type=template&id=30e474e2&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/forms/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_30e474e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_30e474e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/forms/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/forms/Settings.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/forms/Settings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/forms/Settings.vue?vue&type=template&id=30e474e2&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/forms/Settings.vue?vue&type=template&id=30e474e2& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_30e474e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=30e474e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/Settings.vue?vue&type=template&id=30e474e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_30e474e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_30e474e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);