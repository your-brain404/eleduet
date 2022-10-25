(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cms~cms0~cms1~cms10~cms11~cms12~cms13~cms14~cms17~cms18~cms19~cms2~cms20~cms21~cms22~cms23~cms24~cms~b067ca68"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/AddFiles.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/file-picker/AddFiles.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_files_is_photo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/files/is-photo */ "./resources/js/helpers/files/is-photo.js");
/* harmony import */ var _helpers_files_photo_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/files/photo-types */ "./resources/js/helpers/files/photo-types.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    imagesOnly: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    var _this = this;

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
        if (!_this.imagesOnly) return true;
        var invalidSizeFileTypes = [];

        var _iterator2 = _createForOfIteratorHelper(value),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var file = _step2.value;
            if (!Object(_helpers_files_is_photo__WEBPACK_IMPORTED_MODULE_1__["default"])(file.type)) invalidSizeFileTypes.push(file.name);
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
    }
  },
  methods: {
    submit: function submit() {
      var _this2 = this;

      if (this.file.length == 0 || !this.valid) return;
      this.loading = true;

      for (var i = 0; i < this.file.length; i++) {
        var formData = new FormData();
        formData.append("file", this.file[i]);
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/media/add", formData).then(function (res) {
          _this2.loading = false;

          _this2.$emit("loadFiles");

          _this2.file = [];

          _this2.$store.commit("setSnackbar", "Pomyślnie dodano!");
        })["catch"](function (err) {
          _this2.loading = false;
          console.log(err);

          _this2.$store.commit("setSnackbar", "Coś poszło nie tak...");
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/FilePicker.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/file-picker/FilePicker.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddFiles_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFiles.vue */ "./resources/js/components/file-picker/AddFiles.vue");
/* harmony import */ var _helpers_photo_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/photo/url */ "./resources/js/helpers/photo/url.js");
/* harmony import */ var _helpers_files_is_photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/files/is-photo */ "./resources/js/helpers/files/is-photo.js");
/* harmony import */ var _helpers_files_format_file_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/files/format-file-size */ "./resources/js/helpers/files/format-file-size.js");
/* harmony import */ var _helpers_copy_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/copy/copy-to-clipboard */ "./resources/js/helpers/copy/copy-to-clipboard.js");
/* harmony import */ var _components_picture_Picture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/picture/Picture */ "./resources/js/components/picture/Picture.vue");
/* harmony import */ var _helpers_links_existing_photo_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/links/existing-photo-path */ "./resources/js/helpers/links/existing-photo-path.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AddFiles: _AddFiles_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Picture: _components_picture_Picture__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    value: {
      type: String
    },
    title: {
      type: String
    },
    imagesOnly: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      dialog: false,
      tab: null,
      tabs: ["Wybierz plik", "Dodaj Nowe Pliki"],
      files: [],
      activeFile: 0,
      multiple: false,
      search: "",
      page: 1,
      chosenFileColumnShow: false,
      placeholder: "/storage/img/placeholder/250.png"
    };
  },
  computed: {
    filteredFiles: function filteredFiles() {
      var filteredFiles = [];

      var _iterator = _createForOfIteratorHelper(this.files),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var file = _step.value;

          if (file.path.toLowerCase().includes(this.search.toLowerCase())) {
            filteredFiles.push(file);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return filteredFiles.reverse().slice((this.page - 1) * 12, (this.page - 1) * 12 + 12);
    },
    chosenFile: function chosenFile() {
      var _this = this;

      return this.files.find(function (file) {
        return file.id == _this.activeFile;
      }) || {};
    }
  },
  watch: {
    value: "setInitialActiveFile",
    files: "setInitialActiveFile"
  },
  methods: {
    url: _helpers_photo_url__WEBPACK_IMPORTED_MODULE_2__["default"],
    isPhoto: _helpers_files_is_photo__WEBPACK_IMPORTED_MODULE_3__["default"],
    formatFileSize: _helpers_files_format_file_size__WEBPACK_IMPORTED_MODULE_4__["default"],
    copyToClipboard: _helpers_copy_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__["default"],
    existingPhotoPath: _helpers_links_existing_photo_path__WEBPACK_IMPORTED_MODULE_7__["default"],
    setInitialActiveFile: function setInitialActiveFile() {
      var _this$getFileByPath;

      if (this.files.length > 0 && this.value) this.activeFile = (_this$getFileByPath = this.getFileByPath(this.value)) === null || _this$getFileByPath === void 0 ? void 0 : _this$getFileByPath.id;
    },
    clearActiveFile: function clearActiveFile() {
      this.activeFile = 0;
      this.$emit("input", "");
    },
    isActiveFileDeleted: function isActiveFileDeleted(id) {
      var _this2 = this;

      if (!this.value) return;
      var activeFile = this.files.find(function (file) {
        return file.id == id && id == _this2.activeFile;
      });

      if (activeFile) {
        this.$emit("input", "");
        this.$store.dispatch("FormService/updateDeletedFile");
      }
    },
    loadFiles: function loadFiles() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/media/".concat(this.imagesOnly ? "get_photos" : "get_all")).then(function (res) {
        _this3.files = res.data;
      });
    },
    deleteFile: function deleteFile(id) {
      var _this4 = this;

      if (confirm("Czy na pewno?")) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/media/delete/" + id).then(function () {
          _this4.isActiveFileDeleted(id);

          _this4.loadFiles();

          _this4.chosenFileColumnShow = false;
        })["catch"](function (err) {
          return console.log(err);
        });
      }
    },
    getFileByPath: function getFileByPath(path) {
      return this.files.find(function (file) {
        return file.path === path;
      });
    },
    sendFilePathToPlaceholder: function sendFilePathToPlaceholder() {
      var _this$chosenFile;

      var data = (_this$chosenFile = this.chosenFile) === null || _this$chosenFile === void 0 ? void 0 : _this$chosenFile.path;
      if (data) this.$emit("input", data);
    },
    setFileClass: function setFileClass(id) {
      this.activeFile = id;
      this.chosenFileColumnShow = true;
      this.sendFilePathToPlaceholder();
    }
  },
  created: function created() {
    this.loadFiles();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TinyMCE.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/TinyMCE.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["value"],
  watch: {
    value: function value() {
      this.$emit("input", this.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/FormFooter.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/FormFooter.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tagsinput/TagsInput.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tagsinput/TagsInput.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
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
  props: ['tags'],
  data: function data() {
    return {
      activator: null,
      attach: null,
      editing: null,
      index: -1,
      menu: false,
      model: [],
      items: [],
      x: 0,
      search: null,
      y: 0
    };
  },
  methods: {
    deleteTag: function deleteTag(item) {
      this.model.splice(this.model.indexOf(item), 1);
      if (item.id) axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/news_tags/delete/".concat(item.id));
    }
  },
  watch: {
    tags: function tags() {
      if (this.tags) this.model = this.tags;
    },
    model: function model(val, prev) {
      if (val.length === prev.length) return;
      this.model = val.map(function (v) {
        if (typeof v === 'string') {
          v = {
            text: v
          };
        }

        return v;
      });
      this.$emit('tags', this.model);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/AddFiles.vue?vue&type=style&index=0&id=4ac1bb5e&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/file-picker/AddFiles.vue?vue&type=style&index=0&id=4ac1bb5e&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 992px) {\n.add-files-row[data-v-4ac1bb5e] {\n    padding-top: 150px;\n    overflow-y: auto;\n    max-height: 80vh;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/FilePicker.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/file-picker/FilePicker.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fade-enter-active {\n  -webkit-animation: fade 0.2s;\n          animation: fade 0.2s;\n}\n.fade-leave-active {\n  animation: fade 0.2s reverse;\n}\n@-webkit-keyframes fade {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 0.7;\n}\n}\n@keyframes fade {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 0.7;\n}\n}\n@media (min-width: 992px) {\n.file-picker {\n    overflow-y: unset !important;\n}\n}\n.file-picker__set-file-button .v-btn__content {\n  display: unset;\n  flex: unset;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.file-picker__photo {\n  cursor: pointer;\n  width: 100%;\n}\n.file-picker__photo-mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background-color: var(--first-color);\n  opacity: 0.7;\n  cursor: pointer;\n  filter: drop-shadow(2px 4px 6px black);\n}\n.file-picker-pagination ul {\n  display: flex;\n  flex-wrap: wrap;\n}\n.file-picker-pagination li::before {\n  display: none;\n}\n@media (min-width: 992px) {\n.choose-file-row {\n    height: 80vh;\n}\n}\n@media (max-width: 992px) {\n.choose-file-row {\n    padding-top: 25px;\n}\n}\n.close-file-details-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translate(-100%, -100%);\n  z-index: 1;\n}\n@media (min-width: 992px) {\n.close-file-details-icon {\n    display: none !important;\n}\n}\n@media (max-width: 576px) {\n.close-file-details-icon {\n    transform: translate(-50%, -50%);\n}\n}\n.file-picker-file {\n  cursor: pointer;\n  word-break: break-all;\n}\n@media (min-width: 992px) {\n.files-container {\n    overflow-y: auto;\n    height: calc(80vh - 162px);\n}\n}\n.file-picker-menu {\n  position: fixed;\n  width: calc(100% - 24px * 2);\n  z-index: 1;\n  background: white;\n}\n@media (max-width: 992px) {\n.file-picker-menu {\n    position: -webkit-sticky;\n    position: sticky;\n    width: unset;\n    top: 0;\n}\n}\n.file-picker-close {\n  position: absolute !important;\n  top: 14%;\n  right: 2%;\n}\n.chosen-file-col {\n  padding: 3rem !important;\n}\n@media (min-width: 992px) {\n.chosen-file-col {\n    overflow-y: auto;\n    height: calc(80vh - 162px);\n}\n}\n@media (max-width: 992px) {\n.chosen-file-col {\n    position: fixed;\n    right: 0;\n    top: 5vh;\n    z-index: 1;\n    background: white;\n    width: 50% !important;\n    max-width: unset !important;\n    flex: unset !important;\n    overflow-y: auto;\n    height: 90vh;\n    box-shadow: 1px 1px 10px black;\n    transition: transform 0.5s ease;\n    transform: translateX(100%);\n}\n.chosen-file-col.mobile-show {\n    transform: translateX(0%);\n}\n}\n@media (max-width: 576px) {\n.chosen-file-col {\n    width: 280px !important;\n    padding: 1rem !important;\n}\n}\n.chosen-img-placeholder {\n  border: 2px solid #ebebeb;\n  padding: 1rem;\n}\n.chosen-file-container {\n  position: relative;\n}\n.chosen-file-container ul {\n  padding-left: 0 !important;\n  padding-top: 1rem;\n}\n.chosen-file__parameter {\n  margin-bottom: 0.5rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TinyMCE.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/TinyMCE.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tox-notifications-container {\r\n  display: none !important;\n}\r\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/AddFiles.vue?vue&type=style&index=0&id=4ac1bb5e&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/file-picker/AddFiles.vue?vue&type=style&index=0&id=4ac1bb5e&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddFiles.vue?vue&type=style&index=0&id=4ac1bb5e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/AddFiles.vue?vue&type=style&index=0&id=4ac1bb5e&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/FilePicker.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/file-picker/FilePicker.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilePicker.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/FilePicker.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TinyMCE.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/TinyMCE.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TinyMCE.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TinyMCE.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/AddFiles.vue?vue&type=template&id=4ac1bb5e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/file-picker/AddFiles.vue?vue&type=template&id=4ac1bb5e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { attrs: { flat: "" } },
    [
      _c(
        "v-card-text",
        [
          _c(
            "v-row",
            { staticClass: "d-flex justify-content-center add-files-row" },
            [
              _c(
                "v-col",
                { attrs: { lg: "4", sm: "12", md: "6" } },
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
                          color: _vm.$store.getters.settings.first_color,
                          id: "file",
                          multiple: "",
                          "show-size": "",
                          counter: "",
                          label: "Pliki",
                          "prepend-icon": "mdi-files",
                          rules: _vm.rules,
                          accept: _vm.imagesOnly ? _vm.photoTypes : ""
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
                            disabled:
                              _vm.loading ||
                              !_vm.valid ||
                              _vm.file.length === 0,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/FilePicker.vue?vue&type=template&id=55175a65&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/file-picker/FilePicker.vue?vue&type=template&id=55175a65& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { staticClass: "mt-5 mb-2 px-3", attrs: { justify: "center" } },
    [
      Boolean(_vm.chosenFile.id) || Boolean(_vm.value)
        ? _c(
            "v-col",
            {
              staticClass:
                "\n      w-100\n      d-flex\n      flex-column\n      justify-content-between\n      align-items-center\n      px-0\n    "
            },
            [
              _vm.isPhoto(_vm.chosenFile.type)
                ? _c("Picture", {
                    attrs: {
                      width: "100%",
                      src: _vm.value ? _vm.url(_vm.value) : _vm.placeholder
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex align-items-center justify-content-between w-100"
                },
                [
                  _c("a", { attrs: { target: "_blank", href: _vm.value } }, [
                    _c("div", [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.value.split("/")[
                              _vm.value.split("/").length - 1
                            ]
                          ) +
                          "\n        "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { icon: "" }, on: { click: _vm.clearActiveFile } },
                    [
                      _c("v-icon", { attrs: { right: "" } }, [
                        _vm._v("mdi-close")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "content-class": "file-picker", persistent: "" },
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
                          attrs: {
                            color: _vm.$store.getters.settings.first_color,
                            dark: ""
                          }
                        },
                        "v-btn",
                        attrs,
                        false
                      ),
                      on
                    ),
                    [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.title ? _vm.title : "Dodaj plik") +
                          "\n      "
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
                { staticClass: "file-picker-menu" },
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
                        { staticClass: "d-flex align-items-center flex-wrap" },
                        [
                          _c("div", [
                            _vm._v(
                              "FilePicker" +
                                _vm._s(_vm.title ? " - " + _vm.title : "")
                            )
                          ]),
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
                          staticClass: "file-picker-close",
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
                        _vm._v("\n            " + _vm._s(tab) + "\n          ")
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
                          _c("v-card-text", { staticClass: "p-0" }, [
                            _c("div", { staticClass: "mx-0" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "row mx-0 choose-file-row",
                                  staticStyle: { "align-items": "end" }
                                },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "align-items": "flex-end",
                                        display: "flex"
                                      },
                                      attrs: { cols: "12", lg: "8", md: "8" }
                                    },
                                    [
                                      _c(
                                        "v-row",
                                        {
                                          staticClass:
                                            "d-flex align-items-center pa-5 files-container"
                                        },
                                        [
                                          _vm._l(_vm.filteredFiles, function(
                                            file
                                          ) {
                                            return _c(
                                              "v-col",
                                              {
                                                key: file.id,
                                                staticClass:
                                                  "\n                          d-flex\n                          file-picker-col\n                          align-items-between\n                          flex-column\n                        ",
                                                attrs: {
                                                  lg: "2",
                                                  md: "3",
                                                  sm: "4",
                                                  cols: "6"
                                                }
                                              },
                                              [
                                                file.type.split("/")[0] ==
                                                "image"
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "position-relative",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.setFileClass(
                                                              file.id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "Transition",
                                                          {
                                                            attrs: {
                                                              name: "fade"
                                                            }
                                                          },
                                                          [
                                                            _vm.chosenFile &&
                                                            _vm.chosenFile
                                                              .id === file.id
                                                              ? _c("div", {
                                                                  staticClass:
                                                                    "mask file-picker__photo-mask"
                                                                })
                                                              : _vm._e()
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("Picture", {
                                                          attrs: {
                                                            classImg:
                                                              "file-picker__photo",
                                                            src: _vm.url(
                                                              file.path
                                                            )
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  : _c(
                                                      "v-tooltip",
                                                      {
                                                        attrs: { top: "" },
                                                        scopedSlots: _vm._u(
                                                          [
                                                            {
                                                              key: "activator",
                                                              fn: function(
                                                                ref
                                                              ) {
                                                                var on = ref.on
                                                                var attrs =
                                                                  ref.attrs
                                                                return [
                                                                  _c(
                                                                    "v-btn",
                                                                    _vm._g(
                                                                      _vm._b(
                                                                        {
                                                                          staticClass:
                                                                            "file-picker__set-file-button white--text",
                                                                          attrs: {
                                                                            color:
                                                                              _vm
                                                                                .$store
                                                                                .getters
                                                                                .settings
                                                                                .first_color
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.setFileClass(
                                                                                file.id
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        "v-btn",
                                                                        attrs,
                                                                        false
                                                                      ),
                                                                      on
                                                                    ),
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        {
                                                                          attrs: {
                                                                            left:
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "mdi-file"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              file.path.split(
                                                                                "/"
                                                                              )[1]
                                                                            )
                                                                          )
                                                                        ]
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
                                                          _vm._v(
                                                            _vm._s(
                                                              file.path.split(
                                                                "/"
                                                              )[1]
                                                            )
                                                          )
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
                                                    _vm.files.length / 12
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
                                      ),
                                      _vm._v(" "),
                                      _c("v-row")
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "chosen-file-col",
                                      class: {
                                        "mobile-show": _vm.chosenFileColumnShow
                                      },
                                      attrs: { lg: "4", cols: "12", md: "4" }
                                    },
                                    [
                                      _vm.chosenFile.id
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "chosen-file-container"
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass:
                                                    "close-file-details-icon",
                                                  attrs: { color: "black" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.chosenFileColumnShow = false
                                                    }
                                                  }
                                                },
                                                [_vm._v("mdi-close")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "\n                          d-flex\n                          justify-content-between\n                          align-items-center\n                        "
                                                },
                                                [
                                                  _c("h4", [
                                                    _vm._v("Wybrany plik:")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "u",
                                                    {
                                                      staticClass:
                                                        "text-danger",
                                                      staticStyle: {
                                                        cursor: "pointer"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.deleteFile(
                                                            _vm.chosenFile.id
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Usuń")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm.isPhoto(_vm.chosenFile.type)
                                                ? _c("Picture", {
                                                    attrs: {
                                                      classImg:
                                                        "img-fluid chosen-img-placeholder",
                                                      width: "100%",
                                                      src: _vm.url(
                                                        _vm.chosenFile.path
                                                      )
                                                    }
                                                  })
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "w-100 mt-2 mb-5",
                                                  attrs: { color: "success" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.dialog = false
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass: "check-icon",
                                                      attrs: {
                                                        left: "",
                                                        color: "white"
                                                      }
                                                    },
                                                    [_vm._v("mdi-check")]
                                                  ),
                                                  _vm._v(
                                                    "\n                        Zatwierdź\n                      "
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("ul", [
                                                _c(
                                                  "li",
                                                  {
                                                    staticClass:
                                                      "chosen-file__parameter"
                                                  },
                                                  [
                                                    _c(
                                                      "a",
                                                      {
                                                        attrs: {
                                                          target: "_blank",
                                                          href: _vm.url(
                                                            _vm.chosenFile.path
                                                          )
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            staticClass:
                                                              "white--text",
                                                            attrs: {
                                                              color:
                                                                _vm.$store
                                                                  .getters
                                                                  .settings
                                                                  .first_color
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  left: ""
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "mdi-eye"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("span", [
                                                              _vm._v("PODGLĄD")
                                                            ])
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    "Nazwa: " +
                                                      _vm._s(
                                                        _vm.chosenFile.name
                                                      )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "li",
                                                  {
                                                    staticStyle: {
                                                      "word-break": "break-all"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                          Ścieżka: " +
                                                        _vm._s(
                                                          _vm.existingPhotoPath(
                                                            _vm.chosenFile.path
                                                          )
                                                        ) +
                                                        "\n                        "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    "\n                          Rozmiar: " +
                                                      _vm._s(
                                                        _vm.formatFileSize(
                                                          _vm.chosenFile.size
                                                        )
                                                      ) +
                                                      "\n                        "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _vm.chosenFile.width
                                                  ? _c("li", [
                                                      _vm._v(
                                                        "\n                          Szerokość: " +
                                                          _vm._s(
                                                            _vm.chosenFile.width
                                                          ) +
                                                          "px\n                        "
                                                      )
                                                    ])
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.chosenFile.height
                                                  ? _c("li", [
                                                      _vm._v(
                                                        "\n                          Wysokość: " +
                                                          _vm._s(
                                                            _vm.chosenFile
                                                              .height
                                                          ) +
                                                          "px\n                        "
                                                      )
                                                    ])
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    "Typ: " +
                                                      _vm._s(
                                                        _vm.chosenFile.type
                                                      )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(
                                                    "\n                          Data utworzenia:\n                          " +
                                                      _vm._s(
                                                        new Date(
                                                          _vm.chosenFile.created_at
                                                        ).toLocaleString()
                                                      ) +
                                                      "\n                        "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "li",
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        staticClass:
                                                          "white--text",
                                                        attrs: {
                                                          color:
                                                            _vm.$store.getters
                                                              .settings
                                                              .first_color
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            _vm.copyToClipboard(
                                                              _vm.url(
                                                                _vm.existingPhotoPath(
                                                                  _vm.chosenFile
                                                                    .path
                                                                )
                                                              )
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: { left: "" }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "mdi-content-copy"
                                                            )
                                                          ]
                                                        ),
                                                        _c("span", [
                                                          _vm._v("KOPIUJ LINK")
                                                        ])
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ])
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ],
                                1
                              )
                            ])
                          ])
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
                      _c("AddFiles", {
                        attrs: { "images-only": _vm.imagesOnly },
                        on: { loadFiles: _vm.loadFiles }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TinyMCE.vue?vue&type=template&id=1e0c7698&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/TinyMCE.vue?vue&type=template&id=1e0c7698& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("editor", {
    attrs: {
      "api-key": "m22xj0x6h1pgqb681evsy9sxvg1fgl2qktcekp6e5ef3ni2z",
      init: {
        height: 500,
        menubar: true,
        plugins: [
          "a11ychecker",
          "advlist",
          "advcode",
          "advtable",
          "autolink",
          "checklist",
          "export",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "powerpaste",
          "fullscreen",
          "formatpainter",
          "insertdatetime",
          "media",
          "table",
          "help",
          "wordcount"
        ],
        toolbar:
          "undo redo | casechange blocks | bold italic backcolor | \
         alignleft aligncenter alignright alignjustify | \
         bullist numlist checklist outdent indent | removeformat | a11ycheck code table help"
      }
    },
    model: {
      value: _vm.value,
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/FormFooter.vue?vue&type=template&id=dd165c20&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/FormFooter.vue?vue&type=template&id=dd165c20& ***!
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
    "v-card-actions",
    { staticClass: "pa-4" },
    [
      _c(
        "v-btn",
        {
          staticClass: "mr-2",
          attrs: {
            disabled: !_vm.$store.state.FormService.valid,
            color: "primary"
          },
          on: {
            click: function($event) {
              return _vm.$store.commit("FormService/validate")
            }
          }
        },
        [
          _c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-check")]),
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
          _c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-close")]),
          _vm._v(" "),
          _c("span", [_vm._v("Anuluj")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tagsinput/TagsInput.vue?vue&type=template&id=652fbe58&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tagsinput/TagsInput.vue?vue&type=template&id=652fbe58& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("v-combobox", {
    attrs: {
      "hide-no-data": !_vm.search,
      "search-input": _vm.search,
      "hide-selected": "",
      label: "Tagi",
      multiple: "",
      "small-chips": "",
      "append-icon": ""
    },
    on: {
      "update:searchInput": function($event) {
        _vm.search = $event
      },
      "update:search-input": function($event) {
        _vm.search = $event
      }
    },
    scopedSlots: _vm._u([
      {
        key: "selection",
        fn: function(ref) {
          var attrs = ref.attrs
          var item = ref.item
          var parent = ref.parent
          var selected = ref.selected
          return [
            _c(
              "v-chip",
              _vm._b(
                {
                  attrs: {
                    color: "primary lighten-3",
                    "input-value": selected,
                    label: "",
                    small: ""
                  }
                },
                "v-chip",
                attrs,
                false
              ),
              [
                _c("span", { staticClass: "pr-2" }, [
                  _vm._v("\n        " + _vm._s(item.text) + "\n      ")
                ]),
                _vm._v(" "),
                _c(
                  "v-icon",
                  {
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        return _vm.deleteTag(item)
                      }
                    }
                  },
                  [_vm._v("mdi-close")]
                )
              ],
              1
            )
          ]
        }
      }
    ]),
    model: {
      value: _vm.model,
      callback: function($$v) {
        _vm.model = $$v
      },
      expression: "model"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/file-picker/AddFiles.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/file-picker/AddFiles.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddFiles_vue_vue_type_template_id_4ac1bb5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddFiles.vue?vue&type=template&id=4ac1bb5e&scoped=true& */ "./resources/js/components/file-picker/AddFiles.vue?vue&type=template&id=4ac1bb5e&scoped=true&");
/* harmony import */ var _AddFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFiles.vue?vue&type=script&lang=js& */ "./resources/js/components/file-picker/AddFiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddFiles_vue_vue_type_style_index_0_id_4ac1bb5e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddFiles.vue?vue&type=style&index=0&id=4ac1bb5e&scoped=true&lang=scss& */ "./resources/js/components/file-picker/AddFiles.vue?vue&type=style&index=0&id=4ac1bb5e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddFiles_vue_vue_type_template_id_4ac1bb5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddFiles_vue_vue_type_template_id_4ac1bb5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4ac1bb5e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/file-picker/AddFiles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/file-picker/AddFiles.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/file-picker/AddFiles.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddFiles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/AddFiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/file-picker/AddFiles.vue?vue&type=style&index=0&id=4ac1bb5e&scoped=true&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/file-picker/AddFiles.vue?vue&type=style&index=0&id=4ac1bb5e&scoped=true&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFiles_vue_vue_type_style_index_0_id_4ac1bb5e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddFiles.vue?vue&type=style&index=0&id=4ac1bb5e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/AddFiles.vue?vue&type=style&index=0&id=4ac1bb5e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFiles_vue_vue_type_style_index_0_id_4ac1bb5e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFiles_vue_vue_type_style_index_0_id_4ac1bb5e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFiles_vue_vue_type_style_index_0_id_4ac1bb5e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFiles_vue_vue_type_style_index_0_id_4ac1bb5e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/file-picker/AddFiles.vue?vue&type=template&id=4ac1bb5e&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/file-picker/AddFiles.vue?vue&type=template&id=4ac1bb5e&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFiles_vue_vue_type_template_id_4ac1bb5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddFiles.vue?vue&type=template&id=4ac1bb5e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/AddFiles.vue?vue&type=template&id=4ac1bb5e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFiles_vue_vue_type_template_id_4ac1bb5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFiles_vue_vue_type_template_id_4ac1bb5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/file-picker/FilePicker.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/file-picker/FilePicker.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilePicker_vue_vue_type_template_id_55175a65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilePicker.vue?vue&type=template&id=55175a65& */ "./resources/js/components/file-picker/FilePicker.vue?vue&type=template&id=55175a65&");
/* harmony import */ var _FilePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilePicker.vue?vue&type=script&lang=js& */ "./resources/js/components/file-picker/FilePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FilePicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilePicker.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/file-picker/FilePicker.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FilePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilePicker_vue_vue_type_template_id_55175a65___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilePicker_vue_vue_type_template_id_55175a65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/file-picker/FilePicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/file-picker/FilePicker.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/file-picker/FilePicker.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/FilePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/file-picker/FilePicker.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/file-picker/FilePicker.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilePicker.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/FilePicker.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/file-picker/FilePicker.vue?vue&type=template&id=55175a65&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/file-picker/FilePicker.vue?vue&type=template&id=55175a65& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePicker_vue_vue_type_template_id_55175a65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilePicker.vue?vue&type=template&id=55175a65& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-picker/FilePicker.vue?vue&type=template&id=55175a65&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePicker_vue_vue_type_template_id_55175a65___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePicker_vue_vue_type_template_id_55175a65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/TinyMCE.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/forms/TinyMCE.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TinyMCE_vue_vue_type_template_id_1e0c7698___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TinyMCE.vue?vue&type=template&id=1e0c7698& */ "./resources/js/components/forms/TinyMCE.vue?vue&type=template&id=1e0c7698&");
/* harmony import */ var _TinyMCE_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TinyMCE.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/TinyMCE.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TinyMCE_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TinyMCE.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/forms/TinyMCE.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TinyMCE_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TinyMCE_vue_vue_type_template_id_1e0c7698___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TinyMCE_vue_vue_type_template_id_1e0c7698___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/TinyMCE.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/TinyMCE.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/forms/TinyMCE.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCE_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TinyMCE.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TinyMCE.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCE_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/TinyMCE.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/forms/TinyMCE.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCE_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TinyMCE.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TinyMCE.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCE_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCE_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCE_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCE_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/forms/TinyMCE.vue?vue&type=template&id=1e0c7698&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/forms/TinyMCE.vue?vue&type=template&id=1e0c7698& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCE_vue_vue_type_template_id_1e0c7698___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TinyMCE.vue?vue&type=template&id=1e0c7698& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TinyMCE.vue?vue&type=template&id=1e0c7698&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCE_vue_vue_type_template_id_1e0c7698___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCE_vue_vue_type_template_id_1e0c7698___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/FormFooter.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/layouts/FormFooter.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormFooter_vue_vue_type_template_id_dd165c20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormFooter.vue?vue&type=template&id=dd165c20& */ "./resources/js/components/layouts/FormFooter.vue?vue&type=template&id=dd165c20&");
/* harmony import */ var _FormFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormFooter.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/FormFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormFooter_vue_vue_type_template_id_dd165c20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormFooter_vue_vue_type_template_id_dd165c20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/FormFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/FormFooter.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/layouts/FormFooter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/FormFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/FormFooter.vue?vue&type=template&id=dd165c20&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/layouts/FormFooter.vue?vue&type=template&id=dd165c20& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFooter_vue_vue_type_template_id_dd165c20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormFooter.vue?vue&type=template&id=dd165c20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/FormFooter.vue?vue&type=template&id=dd165c20&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFooter_vue_vue_type_template_id_dd165c20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormFooter_vue_vue_type_template_id_dd165c20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/tagsinput/TagsInput.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/tagsinput/TagsInput.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TagsInput_vue_vue_type_template_id_652fbe58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagsInput.vue?vue&type=template&id=652fbe58& */ "./resources/js/components/tagsinput/TagsInput.vue?vue&type=template&id=652fbe58&");
/* harmony import */ var _TagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagsInput.vue?vue&type=script&lang=js& */ "./resources/js/components/tagsinput/TagsInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagsInput_vue_vue_type_template_id_652fbe58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TagsInput_vue_vue_type_template_id_652fbe58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tagsinput/TagsInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tagsinput/TagsInput.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/tagsinput/TagsInput.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tagsinput/TagsInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tagsinput/TagsInput.vue?vue&type=template&id=652fbe58&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/tagsinput/TagsInput.vue?vue&type=template&id=652fbe58& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_template_id_652fbe58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsInput.vue?vue&type=template&id=652fbe58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tagsinput/TagsInput.vue?vue&type=template&id=652fbe58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_template_id_652fbe58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_template_id_652fbe58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/copy/copy-to-clipboard.js":
/*!********************************************************!*\
  !*** ./resources/js/helpers/copy/copy-to-clipboard.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return copyToClipboard; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store */ "./resources/js/store/store.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function copyToClipboard(_x) {
  return _copyToClipboard.apply(this, arguments);
}

function _copyToClipboard() {
  _copyToClipboard = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(text) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return navigator.clipboard.writeText(text);

          case 3:
            _store_store__WEBPACK_IMPORTED_MODULE_1__["default"].commit("setSnackbar", "Skopiowano link do schowka!");
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _copyToClipboard.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/helpers/files/format-file-size.js":
/*!********************************************************!*\
  !*** ./resources/js/helpers/files/format-file-size.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatFileSize; });
function formatFileSize(size) {
  if (size >= 1000000) {
    return (size / 1000000).toFixed(2) + " MB";
  }

  if (size >= 1000) {
    return (size / 1000).toFixed(2) + " kB";
  }

  return size + " B";
}

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

/***/ }),

/***/ "./resources/js/mixins/FormService.js":
/*!********************************************!*\
  !*** ./resources/js/mixins/FormService.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_file_picker_FilePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/file-picker/FilePicker */ "./resources/js/components/file-picker/FilePicker.vue");
/* harmony import */ var _helpers_photo_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/photo/url.js */ "./resources/js/helpers/photo/url.js");
/* harmony import */ var _components_tagsinput_TagsInput_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/tagsinput/TagsInput.vue */ "./resources/js/components/tagsinput/TagsInput.vue");
/* harmony import */ var _data_admin_panel_blocks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/admin-panel-blocks.js */ "./resources/js/data/admin-panel-blocks.js");
/* harmony import */ var _components_forms_TinyMCE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/forms/TinyMCE */ "./resources/js/components/forms/TinyMCE.vue");
/* harmony import */ var _components_layouts_FormFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/layouts/FormFooter */ "./resources/js/components/layouts/FormFooter.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TagsInput: _components_tagsinput_TagsInput_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    VueEditor: _components_forms_TinyMCE__WEBPACK_IMPORTED_MODULE_5__["default"],
    FilePicker: _components_file_picker_FilePicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormFooter: _components_layouts_FormFooter__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      name: "",
      rules: {
        titleRules: [function (v) {
          return !!v || "To pole jest wymagane!";
        }],
        positiveRules: [function (v) {
          return v > 0 || "To pole musi być większe od zera!";
        }],
        nonNegativeRules: [function (v) {
          return v > -1 || "To pole nie może być ujemne!";
        }],
        priceRules: [function (v) {
          return v * 1000 % 10 == 0 || "To pole musi mieć max. dwa miejsca po przecinku!";
        }],
        amountRules: [function (v) {
          return v % 1 == 0 || "To pole musi być liczbą całkowitą!";
        }]
      },
      activeFile: "",
      parent: {}
    };
  },
  watch: {
    validateFlag: function validateFlag(newValue) {
      if (newValue) this.validate();
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])("FormService", ["validateFlag"])), {}, {
    valid: {
      get: function get() {
        return this.$store.state.FormService.valid;
      },
      set: function set(newValue) {
        this.$store.state.FormService.valid = newValue;
      }
    },
    currentObject: {
      get: function get() {
        return this.$store.state.FormService.currentObject;
      },
      set: function set(newValue) {
        this.$store.commit("FormService/setCurrentObject", newValue);
      }
    },
    formTitle: function formTitle() {
      return this.$route.params.id ? "Edycja" : "Dodawanie";
    },
    parentTable: function parentTable() {
      var _this = this;

      var parentTable = "";
      Object.entries(_data_admin_panel_blocks_js__WEBPACK_IMPORTED_MODULE_4__["default"]).forEach(function (block) {
        block[1].forEach(function (table) {
          if (table.tablename == _this.$route.path.split("/")[2]) {
            parentTable = block[1][0].parent ? block[1][0].parent : "";
          }
        });
      });
      return parentTable;
    }
  }),
  methods: {
    getUrl: function getUrl(src) {
      return Object(_helpers_photo_url_js__WEBPACK_IMPORTED_MODULE_2__["default"])(src);
    },
    getParent: function getParent() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/".concat(this.parentTable, "/get_one/").concat(this.$route.params.parent_id)).then(function (res) {
        return _this2.parent = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    getImageDefaultPlaceholder: function getImageDefaultPlaceholder() {
      return window.location.origin + "/storage/img/placeholder/250.png";
    },
    add: function add(formData) {
      this.$store.dispatch("FormService/add", {
        formData: formData
      });
    },
    edit: function edit(formData, options) {
      this.$store.dispatch("FormService/edit", {
        formData: formData,
        options: options
      });
    },
    validate: function validate() {
      if (!this.$refs.form.validate()) {
        this.$store.commit("setSnackbar", "Formularz zawiera błędy!");
        return;
      }

      this[this.$route.params.id ? "edit" : "add"](this.currentObject);
    },
    updateDeletedPhoto: function updateDeletedPhoto() {
      if (this.$route.params.id) this.edit(this.currentObject, {
        redirect: false
      });
    },
    secureRoutes: function secureRoutes() {
      var user = JSON.parse(localStorage.getItem("user"));
      var status = false;

      if (user) {
        if (user.type == "Admin" || user.type == "Moderator") {
          status = true;
        }
      }

      if (!status) this.$router.push("/admin-panel/".concat(this.$route.path.split("/")[2]));
    }
  },
  created: function created() {
    var _this3 = this;

    if (this.$route.params.id) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/".concat(this.$route.path.split("/")[2], "/get_one/").concat(this.$route.params.id)).then(function (res) {
        _this3.activePhoto = res.data.photo !== null ? Object(_helpers_photo_url_js__WEBPACK_IMPORTED_MODULE_2__["default"])(res.data.photo) : _this3.activePhoto;
        _this3.activeFile = res.data.file !== null ? Object(_helpers_photo_url_js__WEBPACK_IMPORTED_MODULE_2__["default"])(res.data.file) : _this3.activeFile;
        _this3.currentObject = _objectSpread(_objectSpread({}, _this3.currentObject), res.data);
      });
    }

    if (this.$route.params.parent_id) this.getParent();
    this.secureRoutes();
  }
});

/***/ })

}]);