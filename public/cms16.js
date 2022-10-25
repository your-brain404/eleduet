(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cms16"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/MailsAnswer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/forms/MailsAnswer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_attachments_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/attachments/link.js */ "./resources/js/helpers/attachments/link.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_recaptcha_v3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-recaptcha-v3 */ "./node_modules/vue-recaptcha-v3/dist/ReCaptchaVuePlugin.js");
/* harmony import */ var vue_recaptcha_v3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_recaptcha_v3__WEBPACK_IMPORTED_MODULE_3__);
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
  data: function data() {
    return {
      mail: {},
      loading: false,
      answer: {
        answer_message: "",
        answer: 1,
        id: this.$route.params.id,
        subject: "",
        email: ""
      },
      files: [],
      rules: {
        titleRules: [function (v) {
          return !!v || "To pole jest wymagane!";
        }]
      },
      valid: true,
      attachments: []
    };
  },
  watch: {
    mail: function mail() {
      this.answer.subject = this.mail.subject;
      this.answer.email = this.mail.email;
    }
  },
  methods: {
    getMail: function getMail() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/mails/get_one/".concat(this.$route.params.id)).then(function (res) {
        _this.mail = res.data;
      });
    },
    getAttachment: function getAttachment(src) {
      return Object(_helpers_attachments_link_js__WEBPACK_IMPORTED_MODULE_1__["default"])(src);
    },
    sendMail: function sendMail(mail) {
      var _this2 = this;

      mail["delete"] = 1;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/mails/send", mail).then(function (res) {
        console.log(res);
        _this2.loading = false;
        if (res.data.error != undefined) _this2.$store.commit("setSnackbar", res.data.error.message);else if (res.data.success != undefined) _this2.$store.commit("setSnackbar", res.data.success.message);

        _this2.$store.commit("setSnackbar", "Pomyślnie wysłano odpowiedź!");
      })["catch"](function (err) {
        console.log(err);
        _this2.loading = false;

        _this2.$store.commit("setSnackbar", "Przepraszamy, nie udało się wysłać maila...");
      });
    },
    editMail: function editMail() {
      var _this3 = this;

      if (!this.valid) return;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/mails/answer", this.answer).then(function (res) {
        _this3.sendMail(res.data);
      })["catch"](function (err) {
        _this3.loading = false;

        _this3.$store.commit("setSnackbar", "Nie udało się zapisać wiadomości, skontaktuj się z Danielem");
      });
    }
  },
  created: function created() {
    this.getMail();
    vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(vue_recaptcha_v3__WEBPACK_IMPORTED_MODULE_3__["VueReCaptcha"], {
      siteKey: "6Lfdvf0cAAAAAAMO211eYJE2wG8AlbWfQZQwbIS5"
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/MailsAnswer.vue?vue&type=template&id=703bd90b&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/forms/MailsAnswer.vue?vue&type=template&id=703bd90b& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "v-main",
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
                      "\n          Odpowiedź na mail o temacie '" +
                        _vm._s(_vm.mail.subject) +
                        "'\n        "
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
                    { staticClass: "px-5" },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "8" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              color: "primary",
                              rules: _vm.rules.titleRules,
                              rows: "5",
                              label: "Twoja wiadomość"
                            },
                            model: {
                              value: _vm.answer.answer_message,
                              callback: function($$v) {
                                _vm.$set(_vm.answer, "answer_message", $$v)
                              },
                              expression: "answer.answer_message"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                        _c(
                          "div",
                          { staticClass: "pa-5" },
                          [
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                disabled: "",
                                label: "Imię i nazwisko"
                              },
                              model: {
                                value: _vm.mail.name,
                                callback: function($$v) {
                                  _vm.$set(_vm.mail, "name", $$v)
                                },
                                expression: "mail.name"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                disabled: "",
                                label: "E-mail"
                              },
                              model: {
                                value: _vm.mail.email,
                                callback: function($$v) {
                                  _vm.$set(_vm.mail, "email", $$v)
                                },
                                expression: "mail.email"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                disabled: "",
                                label: "Telefon"
                              },
                              model: {
                                value: _vm.mail.phone,
                                callback: function($$v) {
                                  _vm.$set(_vm.mail, "phone", $$v)
                                },
                                expression: "mail.phone"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                color: "primary",
                                disabled: "",
                                label: "Temat"
                              },
                              model: {
                                value: _vm.mail.subject,
                                callback: function($$v) {
                                  _vm.$set(_vm.mail, "subject", $$v)
                                },
                                expression: "mail.subject"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-textarea", {
                              attrs: {
                                color: "primary",
                                rows: "5",
                                disabled: "",
                                label: "Wiadomość"
                              },
                              model: {
                                value: _vm.mail.message,
                                callback: function($$v) {
                                  _vm.$set(_vm.mail, "message", $$v)
                                },
                                expression: "mail.message"
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
                  _c(
                    "v-card-actions",
                    { staticClass: "pa-4" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-2",
                          attrs: {
                            loading: _vm.loading,
                            disabled: !_vm.valid,
                            color: "primary"
                          },
                          on: { click: _vm.editMail }
                        },
                        [
                          _c("v-icon", { attrs: { left: "" } }, [
                            _vm._v("mdi-check")
                          ]),
                          _vm._v(" "),
                          _c("span", [_vm._v("Wyślij")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-2",
                          attrs: { color: "error" },
                          on: {
                            click: function($event) {
                              return _vm.$router.go(-1)
                            }
                          }
                        },
                        [
                          _c("v-icon", { attrs: { left: "" } }, [
                            _vm._v("mdi-close")
                          ]),
                          _vm._v(" "),
                          _c("span", [_vm._v("Wróć")])
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

/***/ "./resources/js/helpers/attachments/link.js":
/*!**************************************************!*\
  !*** ./resources/js/helpers/attachments/link.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return attachment; });
function attachment(url) {
  return window.location.origin + '/storage/attachments/' + url;
}

/***/ }),

/***/ "./resources/js/views/admin/forms/MailsAnswer.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/admin/forms/MailsAnswer.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MailsAnswer_vue_vue_type_template_id_703bd90b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailsAnswer.vue?vue&type=template&id=703bd90b& */ "./resources/js/views/admin/forms/MailsAnswer.vue?vue&type=template&id=703bd90b&");
/* harmony import */ var _MailsAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailsAnswer.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/forms/MailsAnswer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MailsAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MailsAnswer_vue_vue_type_template_id_703bd90b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MailsAnswer_vue_vue_type_template_id_703bd90b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/forms/MailsAnswer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/forms/MailsAnswer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/admin/forms/MailsAnswer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailsAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailsAnswer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/MailsAnswer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailsAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/forms/MailsAnswer.vue?vue&type=template&id=703bd90b&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/admin/forms/MailsAnswer.vue?vue&type=template&id=703bd90b& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailsAnswer_vue_vue_type_template_id_703bd90b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailsAnswer.vue?vue&type=template&id=703bd90b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/MailsAnswer.vue?vue&type=template&id=703bd90b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailsAnswer_vue_vue_type_template_id_703bd90b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailsAnswer_vue_vue_type_template_id_703bd90b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);