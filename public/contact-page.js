(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/picture/Picture.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_files_webp_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/files/webp-extensions */ "./resources/js/helpers/files/webp-extensions.js");
/* harmony import */ var _helpers_links_existing_photo_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/links/existing-photo-path */ "./resources/js/helpers/links/existing-photo-path.js");
/* harmony import */ var _helpers_files_get_extension_from_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/files/get-extension-from-path */ "./resources/js/helpers/files/get-extension-from-path.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      error: false
    };
  },
  props: {
    mobileVersion: {
      type: [String, Number],
      "default": ""
    },
    src: {
      type: String,
      "default": ""
    },
    webp: {
      type: Boolean,
      "default": true
    },
    loading: {
      type: String,
      "default": "lazy"
    },
    alt: String,
    classImg: String,
    styleImg: String,
    width: String,
    height: String
  },
  computed: {
    isWebpType: function isWebpType() {
      var regex = new RegExp(".(".concat(_helpers_files_webp_extensions__WEBPACK_IMPORTED_MODULE_0__["default"].join("|"), ")$"), "i");
      return this.src.match(regex);
    },
    webpSrc: function webpSrc() {
      return this.isWebpType && "".concat(this.src, ".webp");
    },
    srcEncodeExtension: function srcEncodeExtension() {
      return this.getExtensionFromPath(this.srcEncode);
    },
    srcEncode: function srcEncode() {
      return this.webp ? Object(_helpers_links_existing_photo_path__WEBPACK_IMPORTED_MODULE_1__["default"])(encodeURI(this.src)) : encodeURI(this.src);
    }
  },
  methods: {
    existingPhotoPath: _helpers_links_existing_photo_path__WEBPACK_IMPORTED_MODULE_1__["default"],
    getExtensionFromPath: _helpers_files_get_extension_from_path__WEBPACK_IMPORTED_MODULE_2__["default"],
    imgError: function imgError() {
      if (this.error === false) this.error = true;
    },
    srcEncodeCustomWidth: function srcEncodeCustomWidth(width) {
      var path = this.src.split("/");
      var name = path.slice(-1);
      return path.slice(0, path.length - 1).join("/") + "/width_".concat(width, "_").concat(name);
    },
    webpSrcCustomWidth: function webpSrcCustomWidth(width) {
      return this.isWebpType && this.srcEncodeCustomWidth(width) + ".webp";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Contact.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Contact.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_recaptcha_v3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-recaptcha-v3 */ "./node_modules/vue-recaptcha-v3/dist/ReCaptchaVuePlugin.js");
/* harmony import */ var vue_recaptcha_v3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_recaptcha_v3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_picture_Picture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/picture/Picture */ "./resources/js/components/picture/Picture.vue");
/* harmony import */ var _helpers_store_get_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/store/get-module */ "./resources/js/helpers/store/get-module.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Picture: _components_picture_Picture__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      origin: window.location.origin,
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
        rodo1: false,
        rodo2: false
      },
      formDataDefault: {
        name: "",
        email: "",
        subject: "",
        message: "",
        rodo1: false,
        rodo2: false
      }
    };
  },
  computed: {
    contact: function contact() {
      return this.$store.getters.contact;
    },
    settings: function settings() {
      return this.$store.getters.settings;
    },
    contactLinks: function contactLinks() {
      var _this$$store$state$Co;

      return ((_this$$store$state$Co = this.$store.state.ContactLinks) === null || _this$$store$state$Co === void 0 ? void 0 : _this$$store$state$Co.contactLinks) || [];
    }
  },
  methods: {
    validation: function validation() {
      if (!Object.values(this.formData).every(function (value) {
        return value.constructor == String ? Boolean(value) : true;
      })) {
        this.$store.commit("setSnackbar", "Wszystkie pola muszą być uzupełnione!");
        return false;
      }

      var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!pattern.test(this.formData.email)) {
        this.$store.commit("setSnackbar", "Email jest nieprawidłowy!");
        return false;
      }

      if (!this.formData.rodo1) {
        this.$store.commit("setSnackbar", "Proszę zaznaczyć potrzebne rodo!");
        return false;
      }

      return true;
    },
    prepareBlockHtml: function prepareBlockHtml(text) {
      return text.replace("{", "<b>").replace("}", "</b>");
    },
    prepareRodo: function prepareRodo(rodo) {
      return rodo === null || rodo === void 0 ? void 0 : rodo.replaceAll("{NAZWA_FIRMY}", this.settings.company).replaceAll("{ADRES_FIRMY}", "".concat(this.contact.address, ", ").concat(this.contact.zip_code, " ").concat(this.contact.city));
    },
    sendMail: function sendMail(mail) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/mails/send", mail).then(function (res) {
                  console.log(res);

                  _this.$store.commit("loading", false);

                  if (res.data.error != undefined) _this.$store.commit("setSnackbar", res.data.error.message);else if (res.data.success != undefined) _this.$store.commit("setSnackbar", res.data.success.message);

                  if (res.status == 200) {
                    _this.$store.commit("setSnackbar", "Pomyślnie wysłano wiadomość!");

                    _this.formData = _this.formDataDefault;
                  }
                })["catch"](function (err) {
                  console.log(err);

                  _this.$store.commit("loading", false);

                  _this.$store.commit("setSnackbar", _this.$store.getters.snackbarAlerts.mail_error);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveMail: function saveMail() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.validation()) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _this2.$store.commit("loading", true);

                _context2.t0 = !!_this2.$recaptcha;

                if (!_context2.t0) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 7;
                return _this2.$recaptcha("login");

              case 7:
                _context2.t0 = _context2.sent;

              case 8:
                response = _context2.t0;

                if (!(_this2.$recaptcha && !response)) {
                  _context2.next = 13;
                  break;
                }

                _this2.$store.commit("setSnackbar", _this2.$store.getters.snackbarAlerts.recaptcha_error);

                _this2.$store.commit("loading", false);

                return _context2.abrupt("return");

              case 13:
                _context2.next = 15;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/mails/add", _objectSpread(_objectSpread({}, _this2.formData), {}, {
                  response: response
                })).then(function (res) {
                  console.log(res);

                  if (res.data.error != undefined) {
                    _this2.$store.commit("setSnackbar", res.data.error.message);

                    _this2.$store.commit("loading", false);

                    return;
                  } else _this2.sendMail(res.data);
                })["catch"](function (err) {
                  console.log(err);

                  _this2.$store.commit("loading", false);

                  _this2.$store.commit("setSnackbar", _this2.$store.getters.snackbarAlerts.error);
                });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  created: function created() {
    if (!this.$store.hasModule("contactLinks")) this.$store.registerModule("ContactLinks", Object(_helpers_store_get_module__WEBPACK_IMPORTED_MODULE_5__["default"])("contactLinks"));
    if (!this.$store.hasModule("snackbarAlerts")) this.$store.registerModule("snackbarAlerts", Object(_helpers_store_get_module__WEBPACK_IMPORTED_MODULE_5__["default"])("snackbarAlerts"));
    if (this.contactLinks.length === 0) this.$store.dispatch("ContactLinks/contactLinks");
    var siteKey = this.$route.path.includes("localhost") ? "6Lf3c-AUAAAAAFZvqKdtC2NCcYG_wVDSBccSYJBP" : "6LeyGAsiAAAAAKPkdvmjIaVmMc3VLtez7v4Exj_L";
    vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(vue_recaptcha_v3__WEBPACK_IMPORTED_MODULE_3__["VueReCaptcha"], {
      siteKey: siteKey
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Contact.vue?vue&type=style&index=0&id=ae9787ce&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Contact.vue?vue&type=style&index=0&id=ae9787ce&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-ae9787ce] .ellipse {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  height: 125px;\n  transform: translate(50%, calc(50% - 0.3rem));\n  z-index: 1;\n}\n[data-v-ae9787ce] .square img {\n  height: 100%;\n  width: 100%;\n}\n[data-v-ae9787ce] .square img:not(.show) {\n  display: none;\n}\n[data-v-ae9787ce] .form-ellipse {\n  position: absolute;\n  bottom: -51%;\n  left: -20%;\n  height: 800px;\n}\n@media (max-width: 992px) {\n[data-v-ae9787ce] .form-ellipse {\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: -800px;\n}\n}\nsection.contact[data-v-ae9787ce] {\n  margin-bottom: 7rem;\n  position: relative;\n}\nsection.contact .links-container[data-v-ae9787ce] {\n  position: relative;\n  margin-left: var(--global-padding-x-desktop);\n  margin-right: var(--global-padding-x-desktop);\n}\n@media (max-width: 992px) {\nsection.contact .links-container[data-v-ae9787ce] {\n    margin-left: var(--global-padding-x-mobile);\n    margin-right: var(--global-padding-x-mobile);\n}\n}\nsection.contact .links-container .links[data-v-ae9787ce] {\n  z-index: 2;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n  position: relative;\n}\nsection.contact .links-container .links .link[data-v-ae9787ce] {\n  width: 33.33%;\n  padding: 0.3rem;\n  border-radius: 12px;\n}\n@media (min-width: 992px) {\nsection.contact .links-container .links .link[data-v-ae9787ce]:nth-child(3n) {\n    padding-right: 0;\n}\nsection.contact .links-container .links .link[data-v-ae9787ce]:nth-child(3n-2) {\n    padding-left: 0;\n}\n}\n@media (max-width: 992px) {\nsection.contact .links-container .links .link[data-v-ae9787ce] {\n    width: 100%;\n}\n}\nsection.contact .links-container .links .link .wrapper[data-v-ae9787ce] {\n  display: block;\n  box-shadow: 0px 10px 40px #0000000f;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  border-radius: 12px;\n  padding: 2rem;\n  background-color: #fff;\n}\nsection.contact .links-container .links .link .wrapper[data-v-ae9787ce]  :is(img, svg) {\n  height: 25px;\n  margin-bottom: 1rem;\n}\nsection.contact .links-container .links .link .wrapper[data-v-ae9787ce]  svg path {\n  fill: var(--first-color);\n}\nsection.contact .links-container .links .link .wrapper .text[data-v-ae9787ce] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 700;\n  justify-content: center;\n  color: black;\n}\nsection.contact .links-container .links .link .wrapper .text b[data-v-ae9787ce] {\n  color: var(--first-color);\n  text-align: center;\n}\nsection.contact form[data-v-ae9787ce] {\n  position: relative;\n  z-index: 2;\n  margin-left: var(--global-padding-x-desktop);\n  margin-right: var(--global-padding-x-desktop);\n}\n@media (max-width: 992px) {\nsection.contact form[data-v-ae9787ce] {\n    margin-left: var(--global-padding-x-mobile);\n    margin-right: var(--global-padding-x-mobile);\n}\n}\nsection.contact form .contact-form-title[data-v-ae9787ce] {\n  font-weight: 700;\n  color: black;\n  text-align: center;\n  font-size: 2rem;\n}\nsection.contact form .contact-form-title b[data-v-ae9787ce] {\n  color: var(--first-color);\n}\nsection.contact form .inputs[data-v-ae9787ce] {\n  display: flex;\n  flex-wrap: wrap;\n}\nsection.contact form .inputs .textarea-container[data-v-ae9787ce] {\n  width: 100%;\n}\nsection.contact form .inputs .input-container[data-v-ae9787ce] {\n  padding: 0.3rem;\n  width: 33.33%;\n}\n@media (max-width: 992px) {\nsection.contact form .inputs .input-container[data-v-ae9787ce] {\n    width: 100%;\n}\n}\n@media (min-width: 992px) {\nsection.contact form .inputs .input-container[data-v-ae9787ce]:nth-child(3n) {\n    padding-right: 0;\n}\nsection.contact form .inputs .input-container[data-v-ae9787ce]:nth-child(3n-2) {\n    padding-left: 0;\n}\n}\nsection.contact form .inputs .textarea-container[data-v-ae9787ce] {\n  padding: 0.3rem;\n}\nsection.contact form .inputs input[data-v-ae9787ce],\nsection.contact form .inputs textarea[data-v-ae9787ce] {\n  border-radius: 12px;\n  outline: unset;\n  border: unset;\n  padding: 1.6rem 1.5rem;\n  background-color: #fff;\n  box-shadow: 0px 10px 40px #0000000f;\n  display: block;\n  width: 100%;\n  caret-color: var(--first-color);\n}\nsection.contact form .inputs input[data-v-ae9787ce]::-moz-placeholder, section.contact form .inputs textarea[data-v-ae9787ce]::-moz-placeholder {\n  color: black;\n  font-weight: 600;\n  font-size: 1rem;\n}\nsection.contact form .inputs input[data-v-ae9787ce]:-ms-input-placeholder, section.contact form .inputs textarea[data-v-ae9787ce]:-ms-input-placeholder {\n  color: black;\n  font-weight: 600;\n  font-size: 1rem;\n}\nsection.contact form .inputs input[data-v-ae9787ce]::placeholder, section.contact form .inputs input[data-v-ae9787ce],\nsection.contact form .inputs textarea[data-v-ae9787ce]::placeholder,\nsection.contact form .inputs textarea[data-v-ae9787ce] {\n  color: black;\n  font-weight: 600;\n  font-size: 1rem;\n}\nsection.contact form .checkboxes[data-v-ae9787ce] {\n  display: flex;\n  margin-top: 0.5rem;\n  flex-wrap: wrap;\n}\nsection.contact form .checkboxes .checkbox[data-v-ae9787ce] {\n  display: flex;\n  justify-content: space-between;\n  width: 50%;\n  cursor: pointer;\n  margin-bottom: 1rem;\n}\n@media (max-width: 992px) {\nsection.contact form .checkboxes .checkbox[data-v-ae9787ce] {\n    width: 100%;\n}\n}\nsection.contact form .checkboxes .checkbox .square-container[data-v-ae9787ce] {\n  background-color: #fff;\n  width: 25px;\n  height: 25px;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0px 2px 8px #0000000f;\n  justify-content: center;\n}\nsection.contact form .checkboxes .checkbox .square-container .square[data-v-ae9787ce] {\n  border-radius: inherit;\n  background-color: var(--first-color);\n  width: 60%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60%;\n}\nsection.contact form .checkboxes .checkbox .text[data-v-ae9787ce] {\n  font-weight: 600;\n  width: 94%;\n  font-size: 0.8rem;\n}\nsection.contact form .button-container[data-v-ae9787ce] {\n  display: flex;\n  justify-content: center;\n  margin-top: 3rem;\n}\nsection.contact form .button-container button[data-v-ae9787ce] {\n  padding-left: 4rem;\n  padding-right: 4rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\npicture {\r\n  display: block;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Contact.vue?vue&type=style&index=0&id=ae9787ce&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Contact.vue?vue&type=style&index=0&id=ae9787ce&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&id=ae9787ce&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Contact.vue?vue&type=style&index=0&id=ae9787ce&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Picture.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/picture/Picture.vue?vue&type=template&id=b058725c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=template&id=b058725c& ***!
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
  return _c("picture", [
    _vm.webp && _vm.isWebpType
      ? _c("source", {
          attrs: {
            srcset: _vm.webpSrc,
            type: "image/webp",
            media: _vm.mobileVersion
              ? "(min-width: " + (_vm.mobileVersion + 1) + "px)"
              : ""
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.webp && _vm.isWebpType && _vm.mobileVersion
      ? _c("source", {
          attrs: {
            srcset: _vm.webpSrcCustomWidth(_vm.mobileVersion),
            media: _vm.mobileVersion
              ? "(max-width: " + _vm.mobileVersion + "px)"
              : "",
            type: "image/webp"
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.srcEncodeExtension != "webp"
      ? _c("source", {
          attrs: {
            srcset: _vm.srcEncode,
            media:
              _vm.mobileVersion &&
              _vm.webpExtensions.includes(_vm.srcEncodeExtension)
                ? "(min-width: " + (_vm.mobileVersion + 1) + "px)"
                : ""
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.mobileVersion && _vm.srcEncodeExtension != "webp"
      ? _c("source", {
          attrs: {
            srcset: _vm.srcEncodeCustomWidth(_vm.mobileVersion),
            media:
              _vm.mobileVersion &&
              _vm.webpExtensions.includes(_vm.srcEncodeExtension)
                ? "(max-width: " + _vm.mobileVersion + "px)"
                : ""
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _c("img", {
      class: _vm.classImg,
      style: _vm.styleImg,
      attrs: {
        loading: _vm.loading,
        src: _vm.srcEncode,
        alt: _vm.alt,
        width: _vm.width,
        height: _vm.height
      },
      on: {
        click: function($event) {
          return _vm.$emit("click")
        },
        error: _vm.imgError
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Contact.vue?vue&type=template&id=ae9787ce&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Contact.vue?vue&type=template&id=ae9787ce&scoped=true& ***!
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
    "section",
    { staticClass: "contact" },
    [
      _vm.contactLinks.length > 0
        ? _c(
            "div",
            { staticClass: "links-container" },
            [
              _c(
                "div",
                { staticClass: "links" },
                _vm._l(_vm.contactLinks, function(link) {
                  return _c(
                    "div",
                    { key: "contact-link-" + link.id, staticClass: "link" },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "wrapper",
                          attrs: {
                            href: link.link || "",
                            target:
                              link.link && link.link.includes("http")
                                ? "_blank"
                                : ""
                          }
                        },
                        [
                          link.icon_svg
                            ? _c("span", {
                                domProps: { innerHTML: _vm._s(link.icon_svg) }
                              })
                            : _c("Picture", {
                                attrs: {
                                  width: "auto",
                                  height: 25,
                                  alt: link.photo_alt,
                                  src:
                                    _vm.origin + "/storage/media/" + link.photo,
                                  classImg: "img"
                                }
                              }),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "text",
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.prepareBlockHtml(link.title)
                              )
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c("Picture", {
                attrs: {
                  width: 125,
                  height: 125,
                  alt: "elipsa",
                  src: _vm.origin + "/storage/img/home/ellipse1.svg",
                  classImg: "ellipse"
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("form", [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "inputs" }, [
          _c("div", { staticClass: "input-container" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.name,
                  expression: "formData.name"
                }
              ],
              attrs: { type: "text", placeholder: "Imię i nazwisko" },
              domProps: { value: _vm.formData.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "name", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-container" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.email,
                  expression: "formData.email"
                }
              ],
              attrs: { type: "email", placeholder: "Adres e-mail" },
              domProps: { value: _vm.formData.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "email", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-container" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.subject,
                  expression: "formData.subject"
                }
              ],
              attrs: { type: "text", placeholder: "Temat" },
              domProps: { value: _vm.formData.subject },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "subject", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "textarea-container" }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.message,
                  expression: "formData.message"
                }
              ],
              attrs: { rows: "5", placeholder: "Treść wiadomości" },
              domProps: { value: _vm.formData.message },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "message", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "checkboxes" }, [
          _c(
            "div",
            {
              staticClass: "checkbox",
              on: {
                click: function($event) {
                  _vm.formData.rodo1 = !_vm.formData.rodo1
                }
              }
            },
            [
              _c("div", { staticClass: "square-container" }, [
                _c(
                  "div",
                  { staticClass: "square" },
                  [
                    _c("Picture", {
                      attrs: {
                        width: 15,
                        height: 15,
                        alt: "check",
                        src: "/storage/img/stock/white-check.svg",
                        classImg: { show: _vm.formData.rodo1 }
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.prepareRodo(_vm.settings.rodo_1)) +
                    "\n          "
                ),
                _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "checkbox",
              on: {
                click: function($event) {
                  _vm.formData.rodo2 = !_vm.formData.rodo2
                }
              }
            },
            [
              _c("div", { staticClass: "square-container" }, [
                _c(
                  "div",
                  { staticClass: "square" },
                  [
                    _c("Picture", {
                      attrs: {
                        width: 15,
                        height: 15,
                        alt: "check",
                        src: "/storage/img/stock/white-check.svg",
                        classImg: { show: _vm.formData.rodo2 }
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.prepareRodo(_vm.settings.rodo_2)) +
                    "\n        "
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "button-container" }, [
          _c(
            "button",
            {
              staticClass: "button first-button",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.saveMail($event)
                }
              }
            },
            [_vm._v("\n        Wyślij\n      ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("Picture", {
        attrs: {
          width: 800,
          height: 800,
          alt: "ellipsa",
          src: "/storage/img/contact/form-ellipse.svg",
          classImg: "form-ellipse"
        }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "contact-form-title" }, [
      _vm._v("Formularz "),
      _c("b", [_vm._v("kontakowy")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/picture/Picture.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/picture/Picture.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Picture_vue_vue_type_template_id_b058725c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picture.vue?vue&type=template&id=b058725c& */ "./resources/js/components/picture/Picture.vue?vue&type=template&id=b058725c&");
/* harmony import */ var _Picture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Picture.vue?vue&type=script&lang=js& */ "./resources/js/components/picture/Picture.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Picture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Picture.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Picture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Picture_vue_vue_type_template_id_b058725c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Picture_vue_vue_type_template_id_b058725c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/picture/Picture.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/picture/Picture.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/picture/Picture.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Picture.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/picture/Picture.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Picture.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/picture/Picture.vue?vue&type=template&id=b058725c&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/picture/Picture.vue?vue&type=template&id=b058725c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_template_id_b058725c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Picture.vue?vue&type=template&id=b058725c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/picture/Picture.vue?vue&type=template&id=b058725c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_template_id_b058725c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_template_id_b058725c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/files/get-extension-from-path.js":
/*!***************************************************************!*\
  !*** ./resources/js/helpers/files/get-extension-from-path.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getExtensionFromPath; });
function getExtensionFromPath(path) {
  if (!path) return "";
  return path.split(".").slice(-1).join("");
}

/***/ }),

/***/ "./resources/js/helpers/files/webp-extensions.js":
/*!*******************************************************!*\
  !*** ./resources/js/helpers/files/webp-extensions.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (["jpg", "png", "jpeg", "jfif"]);

/***/ }),

/***/ "./resources/js/helpers/links/existing-photo-path.js":
/*!***********************************************************!*\
  !*** ./resources/js/helpers/links/existing-photo-path.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return existingPhotoPath; });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/store */ "./resources/js/store/store.js");
/* harmony import */ var _helpers_files_webp_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/files/webp-extensions */ "./resources/js/helpers/files/webp-extensions.js");
/* harmony import */ var _helpers_files_get_extension_from_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/files/get-extension-from-path */ "./resources/js/helpers/files/get-extension-from-path.js");



function existingPhotoPath(path) {
  var extension = Object(_helpers_files_get_extension_from_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path);
  var destroyPrimalPhoto = _store_store__WEBPACK_IMPORTED_MODULE_0__["default"].state.Settings.settings.destroy_primal_photo;

  if (destroyPrimalPhoto && _helpers_files_webp_extensions__WEBPACK_IMPORTED_MODULE_1__["default"].includes(extension)) {
    return "".concat(path, ".webp");
  }

  return path;
}

/***/ }),

/***/ "./resources/js/views/public/Contact.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/public/Contact.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_ae9787ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=ae9787ce&scoped=true& */ "./resources/js/views/public/Contact.vue?vue&type=template&id=ae9787ce&scoped=true&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/views/public/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Contact_vue_vue_type_style_index_0_id_ae9787ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.vue?vue&type=style&index=0&id=ae9787ce&lang=scss&scoped=true& */ "./resources/js/views/public/Contact.vue?vue&type=style&index=0&id=ae9787ce&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_ae9787ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_ae9787ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ae9787ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/public/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/public/Contact.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/public/Contact.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/public/Contact.vue?vue&type=style&index=0&id=ae9787ce&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/public/Contact.vue?vue&type=style&index=0&id=ae9787ce&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_ae9787ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&id=ae9787ce&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Contact.vue?vue&type=style&index=0&id=ae9787ce&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_ae9787ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_ae9787ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_ae9787ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_ae9787ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/public/Contact.vue?vue&type=template&id=ae9787ce&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/public/Contact.vue?vue&type=template&id=ae9787ce&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_ae9787ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=ae9787ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Contact.vue?vue&type=template&id=ae9787ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_ae9787ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_ae9787ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);