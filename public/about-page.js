(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/AboutPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/AboutPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_cool_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-cool-lightbox */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.esm.js");
/* harmony import */ var vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-cool-lightbox/dist/vue-cool-lightbox.min.css */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css");
/* harmony import */ var vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_picture_Picture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/picture/Picture */ "./resources/js/components/picture/Picture.vue");
/* harmony import */ var _mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/mixins/admin-table-component */ "./resources/js/mixins/admin-table-component.js");
/* harmony import */ var _helpers_links_existing_photo_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/links/existing-photo-path */ "./resources/js/helpers/links/existing-photo-path.js");


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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CoolLightBox: vue_cool_lightbox__WEBPACK_IMPORTED_MODULE_2__["default"],
    Picture: _components_picture_Picture__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_5__["default"]],
  data: function data() {
    return {
      origin: window.location.origin,
      table: "aboutPage",
      index: null,
      gallery: window.global.cms.aboutPage.aboutPageGallery || []
    };
  },
  computed: {
    aboutPage: function aboutPage() {
      var _this$$store$state$Ab;

      return ((_this$$store$state$Ab = this.$store.state.AboutPage) === null || _this$$store$state$Ab === void 0 ? void 0 : _this$$store$state$Ab.aboutPage) || {};
    },
    tableData: function tableData() {
      return [this.aboutPage];
    }
  },
  methods: {
    existingPhotoPath: _helpers_links_existing_photo_path__WEBPACK_IMPORTED_MODULE_6__["default"],
    fetchGallery: function fetchGallery() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/gallery/get_photos/about_page/1").then(function (res) {
                  _this.gallery = res.data;
                })["catch"](function (err) {
                  console.log(err);

                  _this.$store.commit("setSnackbar", "Przepraszamy, nie udało się załadować galerii...");
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    if (this.gallery.length === 0) this.fetchGallery();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/AboutPage.vue?vue&type=style&index=0&id=53348175&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/AboutPage.vue?vue&type=style&index=0&id=53348175&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-53348175] .img {\n  max-width: 100%;\n  height: auto;\n  cursor: pointer;\n}\nsection.about-page[data-v-53348175] {\n  padding-left: var(--global-padding-x-desktop);\n  padding-right: var(--global-padding-x-desktop);\n  padding-top: 7rem;\n  padding-bottom: 7rem;\n}\n@media (max-width: 992px) {\nsection.about-page[data-v-53348175] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.about-page .gallery[data-v-53348175] {\n  display: flex;\n  flex-wrap: wrap;\n}\nsection.about-page .gallery .photo[data-v-53348175] {\n  width: 33%;\n}\n@media (max-width: 992px) {\nsection.about-page .gallery .photo[data-v-53348175] {\n    width: 100%;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/AboutPage.vue?vue&type=style&index=0&id=53348175&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/AboutPage.vue?vue&type=style&index=0&id=53348175&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutPage.vue?vue&type=style&index=0&id=53348175&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/AboutPage.vue?vue&type=style&index=0&id=53348175&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/AboutPage.vue?vue&type=template&id=53348175&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/AboutPage.vue?vue&type=template&id=53348175&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "about-page" }, [
    _c("div", {
      staticClass: "content",
      domProps: { innerHTML: _vm._s(_vm.aboutPage.description) }
    }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "gallery" },
      [
        _c("CoolLightBox", {
          attrs: {
            items: _vm.gallery.map(function(photo) {
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
        _vm._l(_vm.gallery, function(photo, i) {
          return _c(
            "div",
            { key: "photo-" + photo.id, staticClass: "photo" },
            [
              _c("Picture", {
                attrs: {
                  width: photo.photo_sizes.width,
                  height: photo.photo_sizes.height,
                  alt: photo.photo_alt,
                  src: _vm.origin + "/storage/media/" + photo.path,
                  classImg: "img"
                },
                on: {
                  click: function($event) {
                    _vm.index = i
                  }
                }
              })
            ],
            1
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/public/AboutPage.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/public/AboutPage.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutPage_vue_vue_type_template_id_53348175_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutPage.vue?vue&type=template&id=53348175&scoped=true& */ "./resources/js/views/public/AboutPage.vue?vue&type=template&id=53348175&scoped=true&");
/* harmony import */ var _AboutPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutPage.vue?vue&type=script&lang=js& */ "./resources/js/views/public/AboutPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AboutPage_vue_vue_type_style_index_0_id_53348175_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutPage.vue?vue&type=style&index=0&id=53348175&lang=scss&scoped=true& */ "./resources/js/views/public/AboutPage.vue?vue&type=style&index=0&id=53348175&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AboutPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutPage_vue_vue_type_template_id_53348175_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutPage_vue_vue_type_template_id_53348175_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53348175",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/public/AboutPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/public/AboutPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/public/AboutPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/AboutPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/public/AboutPage.vue?vue&type=style&index=0&id=53348175&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/public/AboutPage.vue?vue&type=style&index=0&id=53348175&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutPage_vue_vue_type_style_index_0_id_53348175_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutPage.vue?vue&type=style&index=0&id=53348175&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/AboutPage.vue?vue&type=style&index=0&id=53348175&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutPage_vue_vue_type_style_index_0_id_53348175_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutPage_vue_vue_type_style_index_0_id_53348175_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutPage_vue_vue_type_style_index_0_id_53348175_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutPage_vue_vue_type_style_index_0_id_53348175_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/public/AboutPage.vue?vue&type=template&id=53348175&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/public/AboutPage.vue?vue&type=template&id=53348175&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutPage_vue_vue_type_template_id_53348175_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutPage.vue?vue&type=template&id=53348175&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/AboutPage.vue?vue&type=template&id=53348175&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutPage_vue_vue_type_template_id_53348175_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutPage_vue_vue_type_template_id_53348175_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);