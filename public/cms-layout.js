(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cms-layout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/AdminHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_photo_avatar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/photo/avatar.js */ "./resources/js/helpers/photo/avatar.js");
/* harmony import */ var _components_picture_Picture_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/picture/Picture.vue */ "./resources/js/components/picture/Picture.vue");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Picture: _components_picture_Picture_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      avatar: _helpers_photo_avatar_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      drawer: true,
      items: [{
        title: "Strona główna",
        icon: "mdi-view-dashboard",
        path: "/admin-panel/main"
      }, {
        title: "Usługi",
        icon: "mdi-tag-multiple",
        path: "/admin-panel/services"
      }, {
        title: "Realizacje",
        icon: "mdi-image-multiple",
        path: "/admin-panel/realizations"
      }, {
        title: "O nas",
        icon: "mdi-violin",
        path: "/admin-panel/about_page"
      }, {
        title: "Kontakt",
        icon: "mdi-phone",
        path: "/admin-panel/contact"
      }, {
        title: "Pozostałe opisy",
        icon: "mdi-table-of-contents",
        path: "/admin-panel/descriptions"
      }, {
        title: "Skrzynka pocztowa",
        icon: "mdi-mailbox",
        path: "/admin-panel/mails"
      }, {
        title: "Podstrony",
        icon: "mdi-folder-multiple",
        path: "/admin-panel/subpages"
      }, {
        title: "Ustawienia",
        icon: "mdi-cog",
        path: "/admin-panel/settings"
      }]
    };
  },
  created: function created() {
    this.$store.dispatch("fetchSomeUsers");
  },
  computed: {
    placeholder: function placeholder() {
      return window.location.origin + "/storage/img/avatar/avatar.png";
    },
    settings: function settings() {
      return this.$store.getters.settings;
    },
    selectedItem: function selectedItem() {
      var selectedItem = undefined;

      var _iterator = _createForOfIteratorHelper(this.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (item.path.split("/")[2] == this.$route.path.split("/")[2]) {
            selectedItem = this.items.indexOf(item);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this.$route.path.split("/")[2] == "price_list") selectedItem = this.items.indexOf(this.items.find(function (item) {
        return item.path == "/admin-panel/price_list_categories";
      }));
      return selectedItem;
    }
  },
  methods: {
    logout: function logout() {
      this.$store.dispatch("logout");
      this.$router.push({
        name: "AdminLogin"
      });
    }
  }
});

/***/ }),

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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=0&id=b69f61ca&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=0&id=b69f61ca&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-b69f61ca] .avatar {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n}\n.admin-drawer[data-v-b69f61ca] {\n  min-width: 66px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=1&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n* {\r\n  /* font-family: \"Candara\" !important; */\n}\n.nav-drawer {\r\n  background-color: blue;\n}\n.ql-editor strong {\r\n  font-weight: bold;\n}\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\r\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\r\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\r\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\r\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\r\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\r\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\r\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\r\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\r\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\r\n.ql-snow .ql-toolbar button:focus .ql-stroke,\r\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\r\n.ql-snow .ql-toolbar button:hover .ql-stroke,\r\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\r\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\r\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\r\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\r\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\r\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\r\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\r\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\r\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\r\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\r\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\r\n.ql-snow.ql-toolbar button:focus .ql-stroke,\r\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\r\n.ql-snow.ql-toolbar button:hover .ql-stroke,\r\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter {\r\n  stroke: var(--first-color) !important;\n}\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected,\r\n.ql-snow .ql-toolbar .ql-picker-item:hover,\r\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\r\n.ql-snow .ql-toolbar .ql-picker-label:hover,\r\n.ql-snow .ql-toolbar button.ql-active,\r\n.ql-snow .ql-toolbar button:focus,\r\n.ql-snow .ql-toolbar button:hover,\r\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\r\n.ql-snow.ql-toolbar .ql-picker-item:hover,\r\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\r\n.ql-snow.ql-toolbar .ql-picker-label:hover,\r\n.ql-snow.ql-toolbar button.ql-active,\r\n.ql-snow.ql-toolbar button:focus,\r\n.ql-snow.ql-toolbar button:hover {\r\n  color: var(--first-color) !important;\n}\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\r\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\r\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\r\n.ql-snow .ql-toolbar button:focus .ql-fill,\r\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\r\n.ql-snow .ql-toolbar button:hover .ql-fill,\r\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\r\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\r\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\r\n.ql-snow.ql-toolbar button:focus .ql-fill,\r\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\r\n.ql-snow.ql-toolbar button:hover .ql-fill,\r\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill {\r\n  fill: var(--first-color) !important;\n}\r\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=0&id=b69f61ca&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=0&id=b69f61ca&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminHeader.vue?vue&type=style&index=0&id=b69f61ca&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=0&id=b69f61ca&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=1&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=1&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminHeader.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminHeader.vue?vue&type=template&id=b69f61ca&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/AdminHeader.vue?vue&type=template&id=b69f61ca&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "v-navigation-drawer",
    {
      staticClass: "admin-header admin-drawer",
      attrs: {
        color: _vm.$store.getters.settings.first_color,
        left: "",
        permanent: true,
        "expand-on-hover": "",
        app: "",
        dark: ""
      },
      model: {
        value: _vm.drawer,
        callback: function($$v) {
          _vm.drawer = $$v
        },
        expression: "drawer"
      }
    },
    [
      _c(
        "v-list",
        { staticClass: "py-0", attrs: { dense: "", nav: "" } },
        [
          _c(
            "v-list-item",
            { class: "px-0", attrs: { "two-line": "" } },
            [
              _c(
                "v-list-item-avatar",
                [
                  _c("Picture", {
                    attrs: {
                      classImg: "avatar",
                      src: _vm.placeholder,
                      webp: false
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", [_vm._v("Panel Administracyjny")]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { attrs: { to: "/" } },
                    [
                      _c(
                        "v-list-item-subtitle",
                        {
                          staticStyle: {
                            overflow: "unset",
                            "text-overflow": "unset",
                            "white-space": "unset"
                          }
                        },
                        [_vm._v(_vm._s(_vm.settings.company))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mt-5",
                      staticStyle: { "border-radius": "unset !important" },
                      attrs: { "x-small": "", color: "gray", icon: "" },
                      on: { click: _vm.logout }
                    },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("mdi-logout")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v("Wyloguj")])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list-item-group",
            {
              model: {
                value: _vm.selectedItem,
                callback: function($$v) {
                  _vm.selectedItem = $$v
                },
                expression: "selectedItem"
              }
            },
            _vm._l(_vm.items, function(item, i) {
              return _c(
                "v-list-item",
                {
                  key: item.title,
                  attrs: { link: "", "active-class": "nav-link" },
                  on: {
                    load: function($event) {
                      item.path.split("/")[1] == _vm.$route.path.split("/")[1]
                        ? (_vm.selectedItem = i)
                        : true
                    },
                    click: function($event) {
                      _vm.$route.path == item.path
                        ? true
                        : _vm.$router.push(item.path)
                    }
                  }
                },
                [
                  _c(
                    "v-list-item-icon",
                    [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v(_vm._s(item.title))])],
                    1
                  )
                ],
                1
              )
            }),
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

/***/ "./resources/js/components/layouts/AdminHeader.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/layouts/AdminHeader.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminHeader_vue_vue_type_template_id_b69f61ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminHeader.vue?vue&type=template&id=b69f61ca&scoped=true& */ "./resources/js/components/layouts/AdminHeader.vue?vue&type=template&id=b69f61ca&scoped=true&");
/* harmony import */ var _AdminHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/AdminHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdminHeader_vue_vue_type_style_index_0_id_b69f61ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminHeader.vue?vue&type=style&index=0&id=b69f61ca&lang=scss&scoped=true& */ "./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=0&id=b69f61ca&lang=scss&scoped=true&");
/* harmony import */ var _AdminHeader_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdminHeader.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _AdminHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminHeader_vue_vue_type_template_id_b69f61ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminHeader_vue_vue_type_template_id_b69f61ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b69f61ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/AdminHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/AdminHeader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/layouts/AdminHeader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=0&id=b69f61ca&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=0&id=b69f61ca&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_0_id_b69f61ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminHeader.vue?vue&type=style&index=0&id=b69f61ca&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=0&id=b69f61ca&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_0_id_b69f61ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_0_id_b69f61ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_0_id_b69f61ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_0_id_b69f61ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=1&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=1&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminHeader.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminHeader.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/layouts/AdminHeader.vue?vue&type=template&id=b69f61ca&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/layouts/AdminHeader.vue?vue&type=template&id=b69f61ca&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_template_id_b69f61ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminHeader.vue?vue&type=template&id=b69f61ca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/AdminHeader.vue?vue&type=template&id=b69f61ca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_template_id_b69f61ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHeader_vue_vue_type_template_id_b69f61ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/helpers/photo/avatar.js":
/*!**********************************************!*\
  !*** ./resources/js/helpers/photo/avatar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return url; });
function url(url) {
  return url != null ? window.location.origin + '/storage/avatars/' + url : '';
}

/***/ })

}]);