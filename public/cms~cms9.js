(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cms~cms9"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
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
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/media/add", formData).then(function () {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_gallery_picker_AddPhotos_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/gallery-picker/AddPhotos.vue */ "./resources/js/components/gallery-picker/AddPhotos.vue");
/* harmony import */ var _helpers_photo_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/photo/url.js */ "./resources/js/helpers/photo/url.js");
/* harmony import */ var _components_picture_Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/picture/Picture */ "./resources/js/components/picture/Picture.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
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

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/media/get_photos").then(function (res) {
        _this2.photos = res.data;

        _this2.setApiGallery();
      });
    },
    deletePhoto: function deletePhoto(id) {
      var _this3 = this;

      if (confirm("Czy na pewno?")) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/media/delete/" + id).then(function (res) {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/Gallery.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_gallery_picker_GalleryPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/gallery-picker/GalleryPicker */ "./resources/js/components/gallery-picker/GalleryPicker.vue");
/* harmony import */ var _data_snackbar_alerts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/snackbar-alerts.js */ "./resources/js/data/snackbar-alerts.js");
/* harmony import */ var _helpers_photo_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/photo/url.js */ "./resources/js/helpers/photo/url.js");
/* harmony import */ var _components_picture_Picture_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/picture/Picture.vue */ "./resources/js/components/picture/Picture.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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





/* harmony default export */ __webpack_exports__["default"] = ({
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
      return Object(_helpers_photo_url_js__WEBPACK_IMPORTED_MODULE_3__["default"])(src);
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
        this.activePhoto = Object(_helpers_photo_url_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event);
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

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/gallery/add", formData, {
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

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/gallery/edit", formData, {
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
      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/gallery/delete/" + id).then(function (res) {
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

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/".concat(this.$route.path.split("/")[2], "/get_one/").concat(this.$route.params.id)).then(function (res) {
        _this4.currentObject = res.data;
      });
    },
    loadGallery: function loadGallery() {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/gallery/get_photos/".concat(this.$route.path.split("/")[2], "/").concat(this.$route.params.id)).then(function (res) {
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fade-enter-active {\n  -webkit-animation: fade 0.2s;\n          animation: fade 0.2s;\n}\n.fade-leave-active {\n  animation: fade 0.2s reverse;\n}\n@-webkit-keyframes fade {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 0.7;\n}\n}\n@keyframes fade {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 0.7;\n}\n}\n.gallery-picker-menu {\n  position: -webkit-sticky;\n  position: sticky;\n  width: 100%;\n  z-index: 1;\n  background: white;\n  top: 0;\n}\n@media (max-width: 992px) {\n.gallery-picker-menu {\n    position: -webkit-sticky;\n    position: sticky;\n    width: unset;\n}\n}\n.gallery-picker-photo {\n  cursor: pointer;\n  height: auto;\n  width: 100%;\n}\n.gallery-picker-photo-mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background-color: var(--first-color);\n  opacity: 0.7;\n  cursor: pointer;\n  filter: drop-shadow(2px 4px 6px black);\n}\n.gallery-picker-close {\n  position: absolute !important;\n  top: 14%;\n  right: 2%;\n}\n.v-dialog {\n  background-color: white !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.gallery-form-photo {\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: auto;\r\n  margin: auto;\n}\n.close-icon {\r\n  /*filter: invert(1);*/\n}\n.close-icon-container {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: flex-start;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryPicker.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=template&id=c6abc2f2&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=template&id=c6abc2f2& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=template&id=c42e31f6&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=template&id=c42e31f6& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/Gallery.vue?vue&type=template&id=28895f3a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/forms/Gallery.vue?vue&type=template&id=28895f3a& ***!
  \*****************************************************************************************************************************************************************************************************************/
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



/***/ }),

/***/ "./resources/js/components/gallery-picker/AddPhotos.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/gallery-picker/AddPhotos.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddPhotos_vue_vue_type_template_id_c6abc2f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPhotos.vue?vue&type=template&id=c6abc2f2& */ "./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=template&id=c6abc2f2&");
/* harmony import */ var _AddPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPhotos.vue?vue&type=script&lang=js& */ "./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddPhotos_vue_vue_type_template_id_c6abc2f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddPhotos_vue_vue_type_template_id_c6abc2f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/gallery-picker/AddPhotos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPhotos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=template&id=c6abc2f2&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=template&id=c6abc2f2& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPhotos_vue_vue_type_template_id_c6abc2f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPhotos.vue?vue&type=template&id=c6abc2f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gallery-picker/AddPhotos.vue?vue&type=template&id=c6abc2f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPhotos_vue_vue_type_template_id_c6abc2f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPhotos_vue_vue_type_template_id_c6abc2f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/gallery-picker/GalleryPicker.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/gallery-picker/GalleryPicker.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GalleryPicker_vue_vue_type_template_id_c42e31f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryPicker.vue?vue&type=template&id=c42e31f6& */ "./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=template&id=c42e31f6&");
/* harmony import */ var _GalleryPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryPicker.vue?vue&type=script&lang=js& */ "./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GalleryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GalleryPicker.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GalleryPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GalleryPicker_vue_vue_type_template_id_c42e31f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GalleryPicker_vue_vue_type_template_id_c42e31f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/gallery-picker/GalleryPicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryPicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryPicker.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=template&id=c42e31f6&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=template&id=c42e31f6& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_template_id_c42e31f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryPicker.vue?vue&type=template&id=c42e31f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/gallery-picker/GalleryPicker.vue?vue&type=template&id=c42e31f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_template_id_c42e31f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryPicker_vue_vue_type_template_id_c42e31f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/forms/Gallery.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/admin/forms/Gallery.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gallery_vue_vue_type_template_id_28895f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery.vue?vue&type=template&id=28895f3a& */ "./resources/js/views/admin/forms/Gallery.vue?vue&type=template&id=28895f3a&");
/* harmony import */ var _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/forms/Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gallery_vue_vue_type_template_id_28895f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Gallery_vue_vue_type_template_id_28895f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/forms/Gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/forms/Gallery.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/forms/Gallery.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/Gallery.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/admin/forms/Gallery.vue?vue&type=template&id=28895f3a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/forms/Gallery.vue?vue&type=template&id=28895f3a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_28895f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=template&id=28895f3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/forms/Gallery.vue?vue&type=template&id=28895f3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_28895f3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_28895f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);