"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["cms9"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_files_is_photo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/files/is-photo */ "./resources/js/helpers/files/is-photo.js");
/* harmony import */ var _helpers_files_photo_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/files/photo-types */ "./resources/js/helpers/files/photo-types.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      file: [],
      loading: false,
      valid: true,
      rules: [function (value) {
        var MAX_SIZE = 25 * 1000000;
        var invalidSizeFileNames = [];
        var _iterator = _createForOfIteratorHelper(value),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var file = _step.value;
            if (file.size > MAX_SIZE) invalidSizeFileNames.push(file.name);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return invalidSizeFileNames.length === 0 || "Pliki [".concat(invalidSizeFileNames.join(", "), "] nie powinny by\u0107 wi\u0119ksze ni\u017C 25 MB!");
      }, function (value) {
        var invalidSizeFileTypes = [];
        var _iterator2 = _createForOfIteratorHelper(value),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var file = _step2.value;
            if (!(0,_helpers_files_is_photo__WEBPACK_IMPORTED_MODULE_1__["default"])(file.type)) invalidSizeFileTypes.push(file.name);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return invalidSizeFileTypes.length === 0 || "Pliki [".concat(invalidSizeFileTypes.join(", "), "] powinny by\u0107 zdj\u0119ciami!");
      }]
    };
  },
  computed: {
    photoTypes: function photoTypes() {
      return _helpers_files_photo_types__WEBPACK_IMPORTED_MODULE_2__["default"].join(", ");
    },
    img: function img() {
      return this.file.length == 0 ? "https://via.placeholder.com/250" : URL.createObjectURL(this.file[0]);
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;
      if (this.file.length == 0 || !this.valid) return;
      this.loading = true;
      for (var i = 0; i < this.file.length; i++) {
        var formData = new FormData();
        formData.append("file", this.file[i]);
        axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/media/add", formData).then(function () {
          _this.loading = false;
          _this.$emit("loadPhotos");
          _this.file = [];
          _this.$store.commit("setSnackbar", "Pomyślnie dodano!");
        })["catch"](function (err) {
          _this.loading = false;
          console.error(err);
          _this.$store.commit("setSnackbar", "Coś poszło nie tak...");
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_gallery_picker_AddPhotos_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/gallery-picker/AddPhotos.vue */ "./resources/js/components/gallery-picker/AddPhotos.vue");
/* harmony import */ var _helpers_photo_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/photo/url.js */ "./resources/js/helpers/photo/url.js");
/* harmony import */ var _components_picture_Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/picture/Picture */ "./resources/js/components/picture/Picture.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["apiGallery", "title"],
  data: function data() {
    return {
      dialog: false,
      tab: null,
      tabs: ["Wybierz zdjęcia", "Dodaj Nowe Zdjęcie"],
      photos: [],
      activePhotos: [],
      multiple: true,
      closeIcon: 0,
      placeholder: "/storage/img/placeholder/250.png",
      search: "",
      page: 1
    };
  },
  components: {
    AddPhotos: _components_gallery_picker_AddPhotos_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Picture: _components_picture_Picture__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  watch: {
    apiGallery: function apiGallery() {
      this.loadPhotos();
      this.activePhotos = [];
    }
  },
  computed: {
    filteredPhotos: function filteredPhotos() {
      var filteredPhotos = [];
      var _iterator = _createForOfIteratorHelper(this.photos),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var photo = _step.value;
          if (photo.path.toLowerCase().includes(this.search.toLowerCase())) {
            filteredPhotos.push(photo);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return filteredPhotos.reverse().slice((this.page - 1) * 12, (this.page - 1) * 12 + 12);
    }
  },
  methods: {
    url: _helpers_photo_url_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    showCloseIcon: function showCloseIcon(id) {
      this.closeIcon = id;
    },
    isActivePhotoDeleted: function isActivePhotoDeleted(id) {
      if (this.activePhotoPath !== null) {
        var _iterator2 = _createForOfIteratorHelper(this.photos),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var photo = _step2.value;
            if (photo.id == id && this.activePhotos.includes(id)) {
              this.$emit("updateDeletedPhoto", photo.path);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    },
    setApiGallery: function setApiGallery() {
      var _this = this;
      if (this.apiGallery) {
        var photos = [];
        var _loop = function _loop(i) {
          if (!_this.apiGallery.some(function (a) {
            return a.path == _this.photos[i].path;
          })) {
            if (!photos.includes(_this.photos[i])) photos.push(_this.photos[i]);
          }
        };
        for (var i = 0; i < this.photos.length; i++) {
          _loop(i);
        }
        this.photos = photos;
      }
    },
    loadPhotos: function loadPhotos() {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/media/get_photos").then(function (res) {
        _this2.photos = res.data;
        _this2.setApiGallery();
      });
    },
    deletePhoto: function deletePhoto(id) {
      var _this3 = this;
      if (confirm("Czy na pewno?")) {
        axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("/api/media/delete/" + id).then(function (res) {
          _this3.isActivePhotoDeleted(id);
          _this3.loadPhotos();
        })["catch"](function (err) {
          return console.log(err);
        });
      }
    },
    getPhotoLinks: function getPhotoLinks() {
      var links = [];
      for (var i = 0; i < this.photos.length; i++) {
        for (var j = 0; j < this.activePhotos.length; j++) {
          if (this.photos[i].id == this.activePhotos[j]) links[0] = this.photos[i];
        }
      }
      return links;
    },
    sendImageIdToPlaceholder: function sendImageIdToPlaceholder() {
      var data = [];
      var _iterator3 = _createForOfIteratorHelper(this.activePhotos),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var activePhoto = _step3.value;
          data.push(this.getPhotoById(activePhoto));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.$emit("loadedImage", data);
    },
    setPhotoClass: function setPhotoClass(id) {
      if (!this.activePhotos.includes(id)) this.activePhotos.push(id);else this.activePhotos.splice(this.activePhotos.indexOf(id), 1);
      this.sendImageIdToPlaceholder();
    },
    getPhotoById: function getPhotoById(id) {
      for (var i = 0; i < this.photos.length; i++) {
        if (this.photos[i].id == id) {
          return this.photos[i].path;
        }
      }
    }
  },
  created: function created() {
    this.loadPhotos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
      return this.webp ? (0,_helpers_links_existing_photo_path__WEBPACK_IMPORTED_MODULE_1__["default"])(encodeURI(this.src)) : encodeURI(this.src);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_gallery_picker_GalleryPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/gallery-picker/GalleryPicker */ "./resources/js/components/gallery-picker/GalleryPicker.vue");
/* harmony import */ var _data_snackbar_alerts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/snackbar-alerts.js */ "./resources/js/data/snackbar-alerts.js");
/* harmony import */ var _helpers_photo_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/photo/url.js */ "./resources/js/helpers/photo/url.js");
/* harmony import */ var _components_picture_Picture_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/picture/Picture.vue */ "./resources/js/components/picture/Picture.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    GalleryPicker: _components_gallery_picker_GalleryPicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    Picture: _components_picture_Picture_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      name: "",
      rules: {
        titleRules: [function (v) {
          return !!v || "Tytuł jest wymagany!";
        }]
      },
      apiGallery: [],
      pickedGallery: [],
      gallery: [],
      currentObject: {},
      activePhoto: "https://via.placeholder.com/250",
      img: ""
    };
  },
  computed: {
    formTitle: function formTitle() {
      if (this.$route.path.split("/")[2] == "players") return "".concat(this.currentObject.first_name, " ").concat(this.currentObject.last_name);else return this.currentObject.title;
    }
  },
  methods: {
    getUrl: function getUrl(src) {
      return (0,_helpers_photo_url_js__WEBPACK_IMPORTED_MODULE_3__["default"])(src);
    },
    getImageDefaultPlaceholder: function getImageDefaultPlaceholder() {
      return "https://via.placeholder.com/250";
    },
    setGallery: function setGallery(event) {
      var pickedGallery = [];
      var _iterator = _createForOfIteratorHelper(event),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var photo = _step.value;
          pickedGallery.push({
            path: photo,
            photo_alt: "",
            item_id: this.$route.params.id,
            table_name: this.$route.params.table
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.pickedGallery = pickedGallery;
      this.gallery = [].concat(_toConsumableArray(this.apiGallery), _toConsumableArray(this.pickedGallery));
    },
    setImagePlaceholder: function setImagePlaceholder(event) {
      if (event === "placeholder") {
        this.img = "", this.activePhoto = this.getImageDefaultPlaceholder();
      } else {
        this.setGallery(event);
        this.activePhoto = (0,_helpers_photo_url_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event);
      }
    },
    getFormData: function getFormData() {
      return this.gallery;
    },
    resetForm: function resetForm() {
      this.activePhoto = this.getImageDefaultPlaceholder();
    },
    setLoading: function setLoading(state) {
      this.$store.commit("loading", state);
    },
    add: function add(formData) {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/gallery/add", formData, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (res) {
        _this.setLoading(false);
        _this.$store.commit("setSnackbar", _data_snackbar_alerts_js__WEBPACK_IMPORTED_MODULE_2__["default"].success);
        _this.loadGallery();
        _this.resetForm();
      })["catch"](function (err) {
        _this.$store.commit("setSnackbar", _data_snackbar_alerts_js__WEBPACK_IMPORTED_MODULE_2__["default"].error);
        _this.setLoading(false);
      });
    },
    edit: function edit(formData) {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().put("/api/gallery/edit", formData, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (res) {
        _this2.setLoading(false);
        _this2.$store.commit("setSnackbar", _data_snackbar_alerts_js__WEBPACK_IMPORTED_MODULE_2__["default"].success);
        _this2.loadGallery();
      })["catch"](function (err) {
        _this2.$store.commit("setSnackbar", _data_snackbar_alerts_js__WEBPACK_IMPORTED_MODULE_2__["default"].error);
        _this2.setLoading(false);
        console.log(err);
      });
    },
    destroy: function destroy(id) {
      var _this3 = this;
      if (!confirm("Czy na pewno chcesz usunąć to zdjęcie z galerii?")) return;
      this.setLoading(true);
      axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("/api/gallery/delete/" + id).then(function (res) {
        _this3.setLoading(false);
        _this3.$store.commit("setSnackbar", _data_snackbar_alerts_js__WEBPACK_IMPORTED_MODULE_2__["default"].success);
        _this3.loadGallery();
      })["catch"](function (err) {
        _this3.$store.commit("setSnackbar", _data_snackbar_alerts_js__WEBPACK_IMPORTED_MODULE_2__["default"].error);
        _this3.setLoading(false);
        console.log(err);
      });
    },
    send: function send() {
      if (this.getFormData().length > 0) this.setLoading(true);
      var _iterator2 = _createForOfIteratorHelper(this.getFormData()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var photo = _step2.value;
          photo.id ? this.edit(photo) : this.add(photo);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    },
    updateDeletedPhoto: function updateDeletedPhoto(path) {
      this.gallery.splice(this.gallery.findIndex(function (photo) {
        return photo.path == path;
      }));
    },
    loadCurrentObject: function loadCurrentObject() {
      var _this4 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/".concat(this.$route.path.split("/")[2], "/get_one/").concat(this.$route.params.id)).then(function (res) {
        _this4.currentObject = res.data;
      });
    },
    loadGallery: function loadGallery() {
      var _this5 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/gallery/get_photos/".concat(this.$route.path.split("/")[2], "/").concat(this.$route.params.id)).then(function (res) {
        _this5.apiGallery = res.data;
        _this5.gallery = res.data;
        _this5.setLoading(false);
      });
    }
  },
  created: function created() {
    if (this.$route.path.split("/")[2] != "realizations") this.loadCurrentObject();
    this.loadGallery();
    this.setLoading(true);
  }
});

/***/ }),

/***/ "./resources/js/data/snackbar-alerts.js":
/*!**********************************************!*\
  !*** ./resources/js/data/snackbar-alerts.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  success: 'Pomyślnie dodano/edytowano!',
  error: 'Coś poszło nie tak...',
  edit: 'Pomyślnie edytowano!',
  "delete": 'Pomyślnie usunięto!'
});

/***/ }),

/***/ "./resources/js/helpers/files/get-extension-from-path.js":
/*!***************************************************************!*\
  !*** ./resources/js/helpers/files/get-extension-from-path.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getExtensionFromPath)
/* harmony export */ });
function getExtensionFromPath(path) {
  if (!path) return "";
  return path.split(".").slice(-1).join("");
}

/***/ }),

/***/ "./resources/js/helpers/files/is-photo.js":
/*!************************************************!*\
  !*** ./resources/js/helpers/files/is-photo.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPhoto)
/* harmony export */ });
/* harmony import */ var _helpers_files_photo_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/files/photo-types */ "./resources/js/helpers/files/photo-types.js");

function isPhoto(mime) {
  return _helpers_files_photo_types__WEBPACK_IMPORTED_MODULE_0__["default"].includes(mime);
}

/***/ }),

/***/ "./resources/js/helpers/files/photo-types.js":
/*!***************************************************!*\
  !*** ./resources/js/helpers/files/photo-types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["image/jpeg", "image/jpg", "image/png", "image/svg", "image/jfif", "image/webp", "image/svg+xml", "image/bmp", "image/gif"]);

/***/ }),

/***/ "./resources/js/helpers/files/webp-extensions.js":
/*!*******************************************************!*\
  !*** ./resources/js/helpers/files/webp-extensions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["jpg", "png", "jpeg", "jfif"]);

/***/ }),

/***/ "./resources/js/helpers/links/existing-photo-path.js":
/*!***********************************************************!*\
  !*** ./resources/js/helpers/links/existing-photo-path.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ existingPhotoPath)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/store */ "./resources/js/store/store.js");
/* harmony import */ var _helpers_files_webp_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/files/webp-extensions */ "./resources/js/helpers/files/webp-extensions.js");
/* harmony import */ var _helpers_files_get_extension_from_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/files/get-extension-from-path */ "./resources/js/helpers/files/get-extension-from-path.js");



function existingPhotoPath(path) {
  var extension = (0,_helpers_files_get_extension_from_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ url)
/* harmony export */ });
function url(url) {
  return url != null ? window.location.origin + '/storage/media/' + url : '';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".fade-enter-active {\n  animation: fade 0.2s;\n}\n.fade-leave-active {\n  animation: fade 0.2s reverse;\n}\n@keyframes fade {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 0.7;\n}\n}\n.gallery-picker-menu {\n  position: sticky;\n  width: 100%;\n  z-index: 1;\n  background: white;\n  top: 0;\n}\n@media (max-width: 992px) {\n.gallery-picker-menu {\n    position: sticky;\n    width: unset;\n}\n}\n.gallery-picker-photo {\n  cursor: pointer;\n  height: auto;\n  width: 100%;\n}\n.gallery-picker-photo-mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background-color: var(--first-color);\n  opacity: 0.7;\n  cursor: pointer;\n  filter: drop-shadow(2px 4px 6px black);\n}\n.gallery-picker-close {\n  position: absolute !important;\n  top: 14%;\n  right: 2%;\n}\n.v-dialog {\n  background-color: white !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\npicture {\r\n  display: flex;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.gallery-form-photo {\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: auto;\r\n  margin: auto;\n}\n.close-icon {\r\n  /*filter: invert(1);*/\n}\n.close-icon-container {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: flex-start;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GalleryPicker.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Picture.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/gallery-picker/AddPhotos.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/gallery-picker/AddPhotos.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddPhotos_vue_vue_type_template_id_c6abc2f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPhotos.vue?vue&type=template&id=c6abc2f2& */ "./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=template&id=c6abc2f2&");
/* harmony import */ var _AddPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPhotos.vue?vue&type=script&lang=js& */ "./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddPhotos_vue_vue_type_template_id_c6abc2f2___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddPhotos_vue_vue_type_template_id_c6abc2f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/gallery-picker/AddPhotos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/gallery-picker/GalleryPicker.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/gallery-picker/GalleryPicker.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GalleryPicker_vue_vue_type_template_id_c42e31f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryPicker.vue?vue&type=template&id=c42e31f6& */ "./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=template&id=c42e31f6&");
/* harmony import */ var _GalleryPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryPicker.vue?vue&type=script&lang=js& */ "./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=script&lang=js&");
/* harmony import */ var _GalleryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GalleryPicker.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GalleryPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GalleryPicker_vue_vue_type_template_id_c42e31f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _GalleryPicker_vue_vue_type_template_id_c42e31f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/gallery-picker/GalleryPicker.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/picture/Picture.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/picture/Picture.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Picture_vue_vue_type_template_id_b058725c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picture.vue?vue&type=template&id=b058725c& */ "./resources/js/components/picture/Picture.vue?vue&type=template&id=b058725c&");
/* harmony import */ var _Picture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Picture.vue?vue&type=script&lang=js& */ "./resources/js/components/picture/Picture.vue?vue&type=script&lang=js&");
/* harmony import */ var _Picture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Picture.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Picture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Picture_vue_vue_type_template_id_b058725c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Picture_vue_vue_type_template_id_b058725c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/picture/Picture.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/forms/Gallery.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/admin/forms/Gallery.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gallery_vue_vue_type_template_id_28895f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery.vue?vue&type=template&id=28895f3a& */ "./resources/js/views/admin/forms/Gallery.vue?vue&type=template&id=28895f3a&");
/* harmony import */ var _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/forms/Gallery.vue?vue&type=script&lang=js&");
/* harmony import */ var _Gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gallery_vue_vue_type_template_id_28895f3a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Gallery_vue_vue_type_template_id_28895f3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/forms/Gallery.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddPhotos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GalleryPicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/picture/Picture.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/picture/Picture.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Picture.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/forms/Gallery.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/forms/Gallery.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GalleryPicker.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Picture.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=template&id=c6abc2f2&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=template&id=c6abc2f2& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPhotos_vue_vue_type_template_id_c6abc2f2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPhotos_vue_vue_type_template_id_c6abc2f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPhotos_vue_vue_type_template_id_c6abc2f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddPhotos.vue?vue&type=template&id=c6abc2f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=template&id=c6abc2f2&");


/***/ }),

/***/ "./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=template&id=c42e31f6&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=template&id=c42e31f6& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_template_id_c42e31f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_template_id_c42e31f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_template_id_c42e31f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GalleryPicker.vue?vue&type=template&id=c42e31f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=template&id=c42e31f6&");


/***/ }),

/***/ "./resources/js/components/picture/Picture.vue?vue&type=template&id=b058725c&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/picture/Picture.vue?vue&type=template&id=b058725c& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_template_id_b058725c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_template_id_b058725c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picture_vue_vue_type_template_id_b058725c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Picture.vue?vue&type=template&id=b058725c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=template&id=b058725c&");


/***/ }),

/***/ "./resources/js/views/admin/forms/Gallery.vue?vue&type=template&id=28895f3a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/forms/Gallery.vue?vue&type=template&id=28895f3a& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_28895f3a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_28895f3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_28895f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=template&id=28895f3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=template&id=28895f3a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=template&id=c6abc2f2&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=template&id=c6abc2f2& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { flat: "" } },
    [
      _c(
        "v-card-text",
        [
          _c(
            "v-row",
            { staticClass: "d-flex justify-content-center" },
            [
              _c(
                "v-col",
                { attrs: { lg: "4", sm: "12", md: "4" } },
                [
                  _c(
                    "v-form",
                    {
                      ref: "form",
                      attrs: { "lazy-validation": "" },
                      model: {
                        value: _vm.valid,
                        callback: function($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid"
                      }
                    },
                    [
                      _c("v-file-input", {
                        attrs: {
                          id: "file",
                          multiple: "",
                          "show-size": "",
                          counter: "",
                          label: "Zdjęcie",
                          accept: _vm.photoTypes,
                          "prepend-icon": "mdi-camera",
                          rules: _vm.rules
                        },
                        model: {
                          value: _vm.file,
                          callback: function($$v) {
                            _vm.file = $$v
                          },
                          expression: "file"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mt-3",
                          attrs: {
                            disabled: _vm.loading || _vm.file.length === 0,
                            loading: _vm.loading,
                            color: "success"
                          },
                          on: { click: _vm.submit }
                        },
                        [
                          _c("v-icon", { attrs: { left: "" } }, [
                            _vm._v("mdi-check")
                          ]),
                          _vm._v(" "),
                          _c("span", [_vm._v("Wyślij")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=template&id=c42e31f6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=template&id=c42e31f6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    [
      _c(
        "v-row",
        {
          staticClass: "mt-5 mb-2 px-3 gallery-picker",
          attrs: { justify: "center" }
        },
        [
          _c(
            "v-dialog",
            {
              staticStyle: { "background-color": "white !important" },
              attrs: { persistent: "" },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._g(
                          _vm._b(
                            {
                              staticClass: "w-100",
                              attrs: { color: "primary", dark: "" }
                            },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.title || "Dodaj galerię") +
                              "\n        "
                          )
                        ]
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c(
                    "div",
                    { staticClass: "gallery-picker-menu" },
                    [
                      _c(
                        "v-card-title",
                        {
                          staticClass:
                            "d-flex justify-content-between position-relative"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "d-flex align-items-center flex-wrap"
                            },
                            [
                              _c("div", [_vm._v("GalleryPicker")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "ml-3" },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Szukaj",
                                      "prepend-icon": "mdi-magnify"
                                    },
                                    on: { change: _vm.searchPhoto },
                                    model: {
                                      value: _vm.search,
                                      callback: function($$v) {
                                        _vm.search = $$v
                                      },
                                      expression: "search"
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-icon",
                            {
                              staticClass: "gallery-picker-close",
                              on: {
                                click: function($event) {
                                  _vm.dialog = false
                                }
                              }
                            },
                            [_vm._v("mdi-close")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tabs",
                        {
                          attrs: { "background-color": "primary", dark: "" },
                          model: {
                            value: _vm.tab,
                            callback: function($$v) {
                              _vm.tab = $$v
                            },
                            expression: "tab"
                          }
                        },
                        _vm._l(_vm.tabs, function(tab) {
                          return _c("v-tab", { key: tab }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(tab) +
                                "\n            "
                            )
                          ])
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs-items",
                    {
                      model: {
                        value: _vm.tab,
                        callback: function($$v) {
                          _vm.tab = $$v
                        },
                        expression: "tab"
                      }
                    },
                    [
                      _c(
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        {
                                          staticClass:
                                            "d-flex align-items-center"
                                        },
                                        [
                                          _vm._l(_vm.filteredPhotos, function(
                                            photo
                                          ) {
                                            return _c(
                                              "v-col",
                                              {
                                                key: photo.id,
                                                staticClass:
                                                  "d-flex align-items-between flex-column",
                                                attrs: {
                                                  lg: "2",
                                                  md: "3",
                                                  cols: "6",
                                                  sm: "4"
                                                },
                                                on: {
                                                  mouseout: function($event) {
                                                    _vm.closeIcon = 0
                                                  },
                                                  mouseover: function($event) {
                                                    return _vm.showCloseIcon(
                                                      photo.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-end"
                                                  },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass:
                                                          "close-icon",
                                                        attrs: {
                                                          color:
                                                            _vm.closeIcon ==
                                                            photo.id
                                                              ? "black"
                                                              : "white"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.deletePhoto(
                                                              photo.id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("mdi-close")]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-tooltip",
                                                  {
                                                    attrs: { top: "" },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "activator",
                                                          fn: function(ref) {
                                                            var on = ref.on
                                                            var attrs =
                                                              ref.attrs
                                                            return [
                                                              _c(
                                                                "div",
                                                                _vm._g(
                                                                  _vm._b(
                                                                    {
                                                                      staticClass:
                                                                        "position-relative",
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.setPhotoClass(
                                                                            photo.id
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    "div",
                                                                    attrs,
                                                                    false
                                                                  ),
                                                                  on
                                                                ),
                                                                [
                                                                  _c(
                                                                    "Transition",
                                                                    {
                                                                      attrs: {
                                                                        name:
                                                                          "fade"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm.activePhotos.includes(
                                                                        photo.id
                                                                      )
                                                                        ? _c(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "mask gallery-picker-photo-mask"
                                                                            }
                                                                          )
                                                                        : _vm._e()
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "Picture",
                                                                    {
                                                                      attrs: {
                                                                        classImg:
                                                                          "gallery-picker-photo",
                                                                        src: _vm.url(
                                                                          photo.path
                                                                        )
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            ]
                                                          }
                                                        }
                                                      ],
                                                      null,
                                                      true
                                                    )
                                                  },
                                                  [
                                                    _vm._v(" "),
                                                    _c("span", [
                                                      _vm._v(_vm._s(photo.path))
                                                    ])
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-pagination", {
                                                staticClass:
                                                  "file-picker-pagination",
                                                attrs: {
                                                  length: Math.ceil(
                                                    _vm.photos.length / 12
                                                  )
                                                },
                                                model: {
                                                  value: _vm.page,
                                                  callback: function($$v) {
                                                    _vm.page = $$v
                                                  },
                                                  expression: "page"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        2
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        [
                          _c("AddPhotos", {
                            on: { loadPhotos: _vm.loadPhotos }
                          })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=template&id=b058725c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/picture/Picture.vue?vue&type=template&id=b058725c& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=template&id=28895f3a&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=template&id=28895f3a& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
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
                _vm.formTitle != "undefined undefined"
                  ? _c(
                      "h2",
                      {
                        staticClass:
                          "pt-4 font-weight-bold panel-title-header first-color"
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              _vm.$route.path.split("/")[2] == "realizations"
                                ? "Realizacje"
                                : "Galeria - " + _vm.formTitle
                            ) +
                            "\n        "
                        )
                      ]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("v-divider", { staticClass: "mt-0" }),
              _vm._v(" "),
              _c(
                "v-form",
                { ref: "form" },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "12", md: "8" } }, [
                        _c("div", { staticClass: "pa-5" }, [
                          _c(
                            "div",
                            { staticClass: "gallery-container" },
                            [
                              _c(
                                "v-row",
                                _vm._l(_vm.gallery, function(photo) {
                                  return _c(
                                    "v-col",
                                    {
                                      key: photo.path,
                                      attrs: { cols: "12", sm: "6", md: "4" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "position-relative" },
                                        [
                                          _c("Picture", {
                                            attrs: {
                                              classImg: "img-fluid",
                                              src: _vm.getUrl(photo.path)
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "close-icon-container"
                                            },
                                            [
                                              photo.id
                                                ? _c(
                                                    "v-icon",
                                                    {
                                                      staticClass:
                                                        "pr-1 pt-1 close-icon",
                                                      attrs: { color: "grey" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.destroy(
                                                            photo.id
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("mdi-close")]
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: { label: "Tekst alternatywny" },
                                        model: {
                                          value: photo.photo_alt,
                                          callback: function($$v) {
                                            _vm.$set(photo, "photo_alt", $$v)
                                          },
                                          expression: "photo.photo_alt"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ])
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
                            _c(
                              "div",
                              [
                                _c("GalleryPicker", {
                                  attrs: { apiGallery: _vm.apiGallery },
                                  on: {
                                    updateDeletedPhoto: _vm.updateDeletedPhoto,
                                    loadedImage: _vm.setImagePlaceholder
                                  }
                                })
                              ],
                              1
                            )
                          ]
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
                            disabled: _vm.gallery.length === 0,
                            color: "primary"
                          },
                          on: { click: _vm.send }
                        },
                        [
                          _c("v-icon", { attrs: { left: "" } }, [
                            _vm._v("mdi-check")
                          ]),
                          _vm._v(" "),
                          _c("span", [_vm._v("Zatwierdź")])
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
                          _c("span", [_vm._v("Anuluj")])
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



/***/ })

}]);