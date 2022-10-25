(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cms9"],{

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

/***/ "./resources/js/helpers/files/is-photo.js":
/*!************************************************!*\
  !*** ./resources/js/helpers/files/is-photo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPhoto; });
/* harmony import */ var _helpers_files_photo_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/files/photo-types */ "./resources/js/helpers/files/photo-types.js");

function isPhoto(mime) {
  return _helpers_files_photo_types__WEBPACK_IMPORTED_MODULE_0__["default"].includes(mime);
}

/***/ }),

/***/ "./resources/js/helpers/files/photo-types.js":
/*!***************************************************!*\
  !*** ./resources/js/helpers/files/photo-types.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (["image/jpeg", "image/jpg", "image/png", "image/svg", "image/jfif", "image/webp", "image/svg+xml", "image/bmp", "image/gif"]);

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

/***/ "./resources/js/helpers/photo/url.js":
/*!*******************************************!*\
  !*** ./resources/js/helpers/photo/url.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return url; });
function url(url) {
  return url != null ? window.location.origin + '/storage/media/' + url : '';
}

/***/ })

}]);