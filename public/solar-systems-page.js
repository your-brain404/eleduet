(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solar-systems-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _picture_Picture_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../picture/Picture.vue */ "./resources/js/components/picture/Picture.vue");
/* harmony import */ var _mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/admin-table-component */ "./resources/js/mixins/admin-table-component.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    Picture: _picture_Picture_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      origin: window.location.origin,
      table: "solarSystemCallUs"
    };
  },
  computed: {
    solarSystemCallUs: function solarSystemCallUs() {
      return this.$store.getters.solarSystemCallUs;
    },
    tableData: function tableData() {
      return [this.solarSystemCallUs];
    },
    contact: function contact() {
      return this.$store.getters["contact"];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/SolarSystems.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/SolarSystems.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pages_solarSystems_CallUs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/pages/solarSystems/CallUs */ "./resources/js/components/pages/solarSystems/CallUs.vue");
/* harmony import */ var _mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/admin-table-component */ "./resources/js/mixins/admin-table-component.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    CallUs: _components_pages_solarSystems_CallUs__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      origin: window.location.origin,
      table: "solarSystem"
    };
  },
  methods: {
    prepareTitle: function prepareTitle(title) {
      return title === null || title === void 0 ? void 0 : title.replace("{", "<span>").replace("}", "</span>");
    }
  },
  computed: {
    solarSystem: function solarSystem() {
      var _this$$store$state$So;

      return (_this$$store$state$So = this.$store.state.SolarSystem) === null || _this$$store$state$So === void 0 ? void 0 : _this$$store$state$So.solarSystem;
    },
    tableData: function tableData() {
      return [this.solarSystem];
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=style&index=0&id=013d75bc&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=style&index=0&id=013d75bc&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-013d75bc] .ellipse {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: -130%;\n  height: 700px;\n}\n@media (max-width: 992px) {\n[data-v-013d75bc] .ellipse {\n    display: none;\n}\n}\nsection.call-us[data-v-013d75bc] {\n  position: relative;\n  width: 100%;\n}\nsection.call-us .bg[data-v-013d75bc] {\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  position: relative;\n}\nsection.call-us .bg .mask[data-v-013d75bc] {\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent linear-gradient(90deg, #00000073 0%, #00000000 38%) 0% 0% no-repeat padding-box;\n}\nsection.call-us .content[data-v-013d75bc] {\n  padding: 3rem var(--global-padding-x-desktop);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}\n@media (max-width: 992px) {\nsection.call-us .content[data-v-013d75bc] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n    flex-direction: column;\n}\n}\nsection.call-us .content .section-title[data-v-013d75bc] {\n  color: white;\n  text-shadow: 0 0 10px black;\n}\n@media (max-width: 992px) {\nsection.call-us .content .section-title[data-v-013d75bc] {\n    text-align: center;\n}\n}\nsection.call-us .content a.phone-link[data-v-013d75bc] {\n  display: flex;\n  background-color: white;\n  box-shadow: 0px 10px 40px #0000000f;\n  border-radius: var(--global-border-radius);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 1rem 2rem;\n  transition: 0.2s background-color;\n}\n@media (max-width: 400px) {\nsection.call-us .content a.phone-link[data-v-013d75bc] {\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n}\n@media (max-width: 992px) {\nsection.call-us .content a.phone-link[data-v-013d75bc] {\n    margin-top: 3rem;\n}\n}\nsection.call-us .content a.phone-link[data-v-013d75bc]:hover {\n  background-color: var(--first-color);\n}\nsection.call-us .content a.phone-link:hover .phone-content[data-v-013d75bc],\nsection.call-us .content a.phone-link:hover .phone-content span[data-v-013d75bc] {\n  color: white;\n}\nsection.call-us .content a.phone-link .icon-container[data-v-013d75bc] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 0px 10px 40px #0000000f;\n}\nsection.call-us .content a.phone-link .icon-container img[data-v-013d75bc] {\n  height: 20px;\n}\nsection.call-us .content a.phone-link .phone-content[data-v-013d75bc] {\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n  line-height: 26px;\n  padding-left: 2rem;\n  color: black;\n}\n@media (max-width: 400px) {\nsection.call-us .content a.phone-link .phone-content[data-v-013d75bc] {\n    padding-left: 0;\n    margin-top: 1rem;\n    width: 100%;\n}\n}\nsection.call-us .content a.phone-link .phone-content span[data-v-013d75bc] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #333333;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/SolarSystems.vue?vue&type=style&index=0&id=859db90c&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/SolarSystems.vue?vue&type=style&index=0&id=859db90c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section.solar-systems-page[data-v-859db90c] {\n  position: relative;\n}\nsection.solar-systems[data-v-859db90c] {\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: 7rem;\n  z-index: 1;\n  position: relative;\n  margin-bottom: 7rem;\n}\nsection.solar-systems .content[data-v-859db90c],\nsection.solar-systems .photo-container[data-v-859db90c] {\n  width: 50%;\n}\n@media (max-width: 992px) {\nsection.solar-systems .content[data-v-859db90c],\nsection.solar-systems .photo-container[data-v-859db90c] {\n    width: 100%;\n    order: 1;\n}\n}\nsection.solar-systems .photo[data-v-859db90c] {\n  position: relative;\n  z-index: 2;\n  height: 200px;\n  border-bottom-left-radius: var(--global-border-radius);\n  border-top-left-radius: var(--global-border-radius);\n}\n@media (max-width: 992px) {\nsection.solar-systems .photo[data-v-859db90c] {\n    margin-bottom: 3rem;\n}\n}\nsection.solar-systems .content[data-v-859db90c] {\n  position: relative;\n  padding-left: var(--global-padding-x-desktop);\n}\n@media (max-width: 992px) {\nsection.solar-systems .content[data-v-859db90c] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\n@media (max-width: 992px) {\nsection.solar-systems .content[data-v-859db90c] {\n    order: 2;\n}\n}\nsection.solar-systems .content .section-content[data-v-859db90c] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 400px) {\nsection.solar-systems .content .section-content[data-v-859db90c] {\n    flex-direction: column;\n}\n}\nsection.solar-systems .content .section-content .bolt[data-v-859db90c] {\n  height: 75px;\n  padding-right: 1.3rem;\n}\n@media (max-width: 400px) {\nsection.solar-systems .content .section-content .bolt[data-v-859db90c] {\n    margin-bottom: 0.5rem;\n}\n}\nsection.solar-systems .content .short-description[data-v-859db90c] {\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 17px;\n  margin-top: 1rem;\n}\nsection.solar-systems .content a.phone-link[data-v-859db90c] {\n  display: flex;\n  margin-top: 3rem;\n  box-shadow: 0px 10px 40px #0000000f;\n  border-radius: var(--global-border-radius);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 1rem 2rem;\n  transition: 0.2s background-color;\n}\n@media (max-width: 400px) {\nsection.solar-systems .content a.phone-link[data-v-859db90c] {\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n}\nsection.solar-systems .content a.phone-link[data-v-859db90c]:hover {\n  background-color: var(--first-color);\n}\nsection.solar-systems .content a.phone-link:hover .phone-content[data-v-859db90c],\nsection.solar-systems .content a.phone-link:hover .phone-content span[data-v-859db90c] {\n  color: white;\n}\nsection.solar-systems .content a.phone-link .icon-container[data-v-859db90c] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 0px 10px 40px #0000000f;\n}\nsection.solar-systems .content a.phone-link .icon-container img[data-v-859db90c] {\n  height: 20px;\n}\nsection.solar-systems .content a.phone-link .phone-content[data-v-859db90c] {\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n  line-height: 26px;\n  padding-left: 2rem;\n  color: black;\n}\n@media (max-width: 400px) {\nsection.solar-systems .content a.phone-link .phone-content[data-v-859db90c] {\n    padding-left: 0;\n    margin-top: 1rem;\n    width: 100%;\n}\n}\nsection.solar-systems .content a.phone-link .phone-content span[data-v-859db90c] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #333333;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=style&index=0&id=013d75bc&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=style&index=0&id=013d75bc&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CallUs.vue?vue&type=style&index=0&id=013d75bc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=style&index=0&id=013d75bc&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/SolarSystems.vue?vue&type=style&index=0&id=859db90c&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/SolarSystems.vue?vue&type=style&index=0&id=859db90c&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SolarSystems.vue?vue&type=style&index=0&id=859db90c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/SolarSystems.vue?vue&type=style&index=0&id=859db90c&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=template&id=013d75bc&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=template&id=013d75bc&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return Object.entries(_vm.solarSystemCallUs).length > 0
    ? _c(
        "section",
        { staticClass: "call-us" },
        [
          _c("Picture", {
            attrs: {
              width: 700,
              height: 700,
              src:
                _vm.origin + "/storage/img/services/solar-system-ellipse.svg",
              alt: "elipsa",
              classImg: "ellipse"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "lazy",
                  rawName: "v-lazy:background-image",
                  value:
                    _vm.origin +
                    "/storage/media/" +
                    _vm.solarSystemCallUs.photo,
                  expression:
                    "\n      `${origin}/storage/media/${solarSystemCallUs.photo}`\n    ",
                  arg: "background-image"
                }
              ],
              staticClass: "bg",
              attrs: { title: _vm.solarSystemCallUs.photo_alt }
            },
            [
              _c("div", { staticClass: "mask" }),
              _vm._v(" "),
              _c("div", { staticClass: "content" }, [
                _c("h3", {
                  staticClass: "section-title",
                  domProps: { innerHTML: _vm._s(_vm.solarSystemCallUs.title) }
                }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "phone-link",
                    attrs: { href: "tel:" + _vm.contact.phone_1 }
                  },
                  [
                    _c("div", { staticClass: "icon-container" }, [
                      _c("img", {
                        directives: [
                          {
                            name: "lazy",
                            rawName: "v-lazy",
                            value:
                              _vm.origin + "/storage/img/home/about/phone.svg",
                            expression:
                              "`${origin}/storage/img/home/about/phone.svg`"
                          }
                        ],
                        attrs: { alt: "słuchawka" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "phone-content" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.solarSystemCallUs.button_name) +
                          "\n          "
                      ),
                      _c("span", { staticClass: "number" }, [
                        _vm._v(_vm._s(_vm.contact.phone_1))
                      ])
                    ])
                  ]
                )
              ])
            ]
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/SolarSystems.vue?vue&type=template&id=859db90c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/SolarSystems.vue?vue&type=template&id=859db90c&scoped=true& ***!
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
    { staticClass: "solar-systems-page" },
    [
      Object.entries(_vm.solarSystem).length > 0
        ? _c("section", { staticClass: "solar-systems" }, [
            _c("div", { staticClass: "content" }, [
              _c(
                "div",
                { staticClass: "section-content" },
                [
                  _c("Picture", {
                    attrs: {
                      src:
                        _vm.origin +
                        "/storage/media/" +
                        _vm.$store.state.Settings.settings.li_marker,
                      alt: _vm.$store.state.Settings.settings.li_marker_alt,
                      width: 48,
                      height: 75,
                      classImg: "bolt"
                    }
                  }),
                  _vm._v(" "),
                  _c("h3", {
                    staticClass: "section-title",
                    domProps: {
                      innerHTML: _vm._s(_vm.prepareTitle(_vm.solarSystem.title))
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "short-description",
                domProps: {
                  innerHTML: _vm._s(_vm.solarSystem.short_description)
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "position-relative photo-container" }, [
              _c("div", {
                directives: [
                  {
                    name: "lazy",
                    rawName: "v-lazy:background-image",
                    value:
                      _vm.origin + "/storage/media/" + _vm.solarSystem.photo,
                    expression:
                      "\n          `${origin}/storage/media/${solarSystem.photo}`\n        ",
                    arg: "background-image"
                  }
                ],
                staticClass: "photo bg",
                attrs: { title: _vm.solarSystem.photo_alt }
              })
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("CallUs")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/solarSystems/CallUs.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pages/solarSystems/CallUs.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CallUs_vue_vue_type_template_id_013d75bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CallUs.vue?vue&type=template&id=013d75bc&scoped=true& */ "./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=template&id=013d75bc&scoped=true&");
/* harmony import */ var _CallUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CallUs.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CallUs_vue_vue_type_style_index_0_id_013d75bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CallUs.vue?vue&type=style&index=0&id=013d75bc&lang=scss&scoped=true& */ "./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=style&index=0&id=013d75bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CallUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CallUs_vue_vue_type_template_id_013d75bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CallUs_vue_vue_type_template_id_013d75bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "013d75bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/solarSystems/CallUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CallUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=style&index=0&id=013d75bc&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=style&index=0&id=013d75bc&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_style_index_0_id_013d75bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CallUs.vue?vue&type=style&index=0&id=013d75bc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=style&index=0&id=013d75bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_style_index_0_id_013d75bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_style_index_0_id_013d75bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_style_index_0_id_013d75bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_style_index_0_id_013d75bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=template&id=013d75bc&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=template&id=013d75bc&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_template_id_013d75bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CallUs.vue?vue&type=template&id=013d75bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/solarSystems/CallUs.vue?vue&type=template&id=013d75bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_template_id_013d75bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_template_id_013d75bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/public/SolarSystems.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/public/SolarSystems.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SolarSystems_vue_vue_type_template_id_859db90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SolarSystems.vue?vue&type=template&id=859db90c&scoped=true& */ "./resources/js/views/public/SolarSystems.vue?vue&type=template&id=859db90c&scoped=true&");
/* harmony import */ var _SolarSystems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SolarSystems.vue?vue&type=script&lang=js& */ "./resources/js/views/public/SolarSystems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SolarSystems_vue_vue_type_style_index_0_id_859db90c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SolarSystems.vue?vue&type=style&index=0&id=859db90c&lang=scss&scoped=true& */ "./resources/js/views/public/SolarSystems.vue?vue&type=style&index=0&id=859db90c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SolarSystems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SolarSystems_vue_vue_type_template_id_859db90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SolarSystems_vue_vue_type_template_id_859db90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "859db90c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/public/SolarSystems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/public/SolarSystems.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/public/SolarSystems.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SolarSystems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/SolarSystems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/public/SolarSystems.vue?vue&type=style&index=0&id=859db90c&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/public/SolarSystems.vue?vue&type=style&index=0&id=859db90c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystems_vue_vue_type_style_index_0_id_859db90c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SolarSystems.vue?vue&type=style&index=0&id=859db90c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/SolarSystems.vue?vue&type=style&index=0&id=859db90c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystems_vue_vue_type_style_index_0_id_859db90c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystems_vue_vue_type_style_index_0_id_859db90c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystems_vue_vue_type_style_index_0_id_859db90c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystems_vue_vue_type_style_index_0_id_859db90c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/public/SolarSystems.vue?vue&type=template&id=859db90c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/public/SolarSystems.vue?vue&type=template&id=859db90c&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystems_vue_vue_type_template_id_859db90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SolarSystems.vue?vue&type=template&id=859db90c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/SolarSystems.vue?vue&type=template&id=859db90c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystems_vue_vue_type_template_id_859db90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystems_vue_vue_type_template_id_859db90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);