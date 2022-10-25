(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/custom-link/CustomLink.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/custom-link/CustomLink.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_custom_link_CustomRouterLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/custom-link/CustomRouterLink */ "./resources/js/components/custom-link/CustomRouterLink.vue");
//
//
//
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
    CustomRouterLink: _components_custom_link_CustomRouterLink__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    path: {
      type: String,
      "default": "",
      required: true
    },
    download: {
      "default": false
    },
    target: {
      type: String,
      "default": ""
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/custom-link/CustomRouterLink.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/custom-link/CustomRouterLink.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    to: {
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/About.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/About.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/admin-table-component */ "./resources/js/mixins/admin-table-component.js");
/* harmony import */ var _components_picture_Picture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/picture/Picture */ "./resources/js/components/picture/Picture.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Picture: _components_picture_Picture__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      origin: window.location.origin,
      table: "about"
    };
  },
  computed: {
    tableData: function tableData() {
      return [this.about];
    },
    about: function about() {
      var _this$$store$state$Ab;

      return (_this$$store$state$Ab = this.$store.state.About) === null || _this$$store$state$Ab === void 0 ? void 0 : _this$$store$state$Ab.about;
    },
    contact: function contact() {
      return this.$store.getters.contact;
    }
  },
  methods: {
    prepareTitle: function prepareTitle(title) {
      return title.replace("{", "<span>").replace("}", "</span>");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Attributes.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Attributes.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/admin-table-component */ "./resources/js/mixins/admin-table-component.js");
/* harmony import */ var _components_picture_Picture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/picture/Picture */ "./resources/js/components/picture/Picture.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    Picture: _components_picture_Picture__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      origin: window.location.origin,
      table: "attributes"
    };
  },
  computed: {
    attributes: function attributes() {
      var _this$$store$state$At;

      return ((_this$$store$state$At = this.$store.state.Attributes) === null || _this$$store$state$At === void 0 ? void 0 : _this$$store$state$At.attributes) || window.global.cms.homePage.attributes || [];
    },
    attributesDesc: function attributesDesc() {
      var _this$$store$state$At2;

      return ((_this$$store$state$At2 = this.$store.state.AttributeDesc) === null || _this$$store$state$At2 === void 0 ? void 0 : _this$$store$state$At2.attributesDesc) || window.global.cms.homePage.attributesDesc || {};
    },
    tableData: function tableData() {
      return this.attributes;
    }
  },
  methods: {
    prepareTitle: function prepareTitle(title) {
      return title.replaceAll("{", "<span>").replaceAll("}", "</span>");
    }
  },
  created: function created() {
    this.registerModule("AttributesDesc");
    if (this.attributes.length === 0) this.fetchData();
    if (Object.values(this.attributesDesc).length === 0) this.$store.dispatch("AttributesDesc/attributesDesc");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/CallUs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/CallUs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/admin-table-component */ "./resources/js/mixins/admin-table-component.js");
/* harmony import */ var _components_picture_Picture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/picture/Picture */ "./resources/js/components/picture/Picture.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Picture: _components_picture_Picture__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      origin: window.location.origin,
      table: "homeCallUs"
    };
  },
  computed: {
    homeCallUs: function homeCallUs() {
      var _this$$store$state$Ho;

      return (_this$$store$state$Ho = this.$store.state.HomeCallUs) === null || _this$$store$state$Ho === void 0 ? void 0 : _this$$store$state$Ho.homeCallUs;
    },
    contact: function contact() {
      return this.$store.getters["contact"];
    },
    tableData: function tableData() {
      return [this.homeCallUs];
    }
  },
  created: function created() {
    if (Object.values(this.homeCallUs).length === 0) this.fetchData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/admin-table-component */ "./resources/js/mixins/admin-table-component.js");
/* harmony import */ var _components_picture_Picture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/picture/Picture */ "./resources/js/components/picture/Picture.vue");
/* harmony import */ var _store_modules_executionProcessDesc_executionProcessDescModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/modules/executionProcessDesc/executionProcessDescModule */ "./resources/js/store/modules/executionProcessDesc/executionProcessDescModule.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Picture: _components_picture_Picture__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      origin: window.location.origin,
      innerWidth: window.innerWidth,
      table: "executionProcess"
    };
  },
  computed: {
    executionProcess: function executionProcess() {
      var _this$$store$state$Ex;

      return (_this$$store$state$Ex = this.$store.state.ExecutionProcess) === null || _this$$store$state$Ex === void 0 ? void 0 : _this$$store$state$Ex.executionProcess;
    },
    executionProcessDesc: function executionProcessDesc() {
      var _this$$store$state$Ex2;

      return (_this$$store$state$Ex2 = this.$store.state.ExecutionProcessDesc) === null || _this$$store$state$Ex2 === void 0 ? void 0 : _this$$store$state$Ex2.executionProcessDesc;
    },
    tableData: function tableData() {
      return this.executionProcess;
    }
  },
  created: function created() {
    this.registerModule("ExecutionProcessDesc", _store_modules_executionProcessDesc_executionProcessDescModule__WEBPACK_IMPORTED_MODULE_2__["default"]);
    if (this.executionProcess.length === 0) this.fetchData();
    if (Object.values(this.executionProcessDesc).length === 0) this.$store.dispatch("ExecutionProcessDesc/executionProcessDesc");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Opinions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Opinions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/admin-table-component */ "./resources/js/mixins/admin-table-component.js");
/* harmony import */ var _components_picture_Picture_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/picture/Picture.vue */ "./resources/js/components/picture/Picture.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      origin: window.location.origin,
      table: "opinions"
    };
  },
  methods: {
    prepareTitle: function prepareTitle(title) {
      return title === null || title === void 0 ? void 0 : title.replaceAll("{", "<span>").replaceAll("}", "</span>");
    }
  },
  computed: {
    opinions: function opinions() {
      var _this$$store$state$Op;

      return ((_this$$store$state$Op = this.$store.state.Opinions) === null || _this$$store$state$Op === void 0 ? void 0 : _this$$store$state$Op.opinions) || window.global.cms.homePage.opinions;
    },
    opinionsDesc: function opinionsDesc() {
      var _this$$store$state$Op2;

      return ((_this$$store$state$Op2 = this.$store.state.OpinionsDesc) === null || _this$$store$state$Op2 === void 0 ? void 0 : _this$$store$state$Op2.opinionsDesc) || window.global.cms.homePage.opinionsDesc;
    },
    tableData: function tableData() {
      return this.opinions;
    }
  },
  created: function created() {
    var _this$opinions;

    this.registerModule("OpinionsDesc");
    if (((_this$opinions = this.opinions) === null || _this$opinions === void 0 ? void 0 : _this$opinions.constructor) === Array && this.opinions.length === 0) this.fetchData();
    if (Object.values(this.opinionsDesc).length === 0) this.$store.dispatch("OpinionsDesc/opinionsDesc");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Services.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Services.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-owl-carousel2 */ "./node_modules/vue-owl-carousel2/dist/vue-owl-carousel2.js");
/* harmony import */ var vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_links_slug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/links/slug */ "./resources/js/helpers/links/slug.js");
/* harmony import */ var _mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mixins/admin-table-component */ "./resources/js/mixins/admin-table-component.js");
/* harmony import */ var _components_picture_Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/picture/Picture */ "./resources/js/components/picture/Picture.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    carousel: vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_0___default.a,
    Picture: _components_picture_Picture__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      origin: window.location.origin,
      carouselItems: 3.5,
      screenWidth: window.innerWidth,
      table: "homeServices"
    };
  },
  computed: {
    homeServices: function homeServices() {
      var _this$$store$state$Ho;

      return ((_this$$store$state$Ho = this.$store.state.HomeServices) === null || _this$$store$state$Ho === void 0 ? void 0 : _this$$store$state$Ho.homeServices) || [];
    },
    homeServicesDesc: function homeServicesDesc() {
      var _this$$store$state$Ho2;

      return ((_this$$store$state$Ho2 = this.$store.state.HomeServicesDesc) === null || _this$$store$state$Ho2 === void 0 ? void 0 : _this$$store$state$Ho2.homeServicesDesc) || {};
    },
    tableData: function tableData() {
      return this.homeServices;
    }
  },
  methods: {
    setCarouselItems: function setCarouselItems() {
      if (this.screenWidth < 992) this.carouselItems = 2;
      if (this.screenWidth < 768) this.carouselItems = 1;
    },
    slug: _helpers_links_slug__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    this.registerModule("HomeServicesDesc");
    this.setCarouselItems();
    if (this.homeServices.length === 0) this.$store.dispatch("HomeServices/homeServices");
    if (Object.values(this.homeServicesDesc).length === 0) this.$store.dispatch("HomeServicesDesc/homeServicesDesc");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Slider.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Slider.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-owl-carousel2 */ "./node_modules/vue-owl-carousel2/dist/vue-owl-carousel2.js");
/* harmony import */ var vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_custom_link_CustomLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/custom-link/CustomLink */ "./resources/js/components/custom-link/CustomLink.vue");
/* harmony import */ var _mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mixins/admin-table-component */ "./resources/js/mixins/admin-table-component.js");
/* harmony import */ var _components_picture_Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/picture/Picture */ "./resources/js/components/picture/Picture.vue");
/* harmony import */ var _helpers_photo_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/photo/url */ "./resources/js/helpers/photo/url.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    carousel: vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_0___default.a,
    CustomLink: _components_custom_link_CustomLink__WEBPACK_IMPORTED_MODULE_1__["default"],
    Picture: _components_picture_Picture__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mixins: [_mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_2__["default"]],
  watch: {
    slider: function slider() {
      var _this = this;

      this.emitData();
      this.carousel = false;
      setTimeout(function () {
        return _this.carousel = true;
      }, 1);
    }
  },
  data: function data() {
    return {
      origin: window.location.origin,
      table: "slider",
      carousel: true
    };
  },
  computed: {
    slider: function slider() {
      var _this$$store$state$Sl;

      return ((_this$$store$state$Sl = this.$store.state.Slider) === null || _this$$store$state$Sl === void 0 ? void 0 : _this$$store$state$Sl.slider) || [];
    },
    tableData: function tableData() {
      return this.slider;
    }
  },
  methods: {
    url: _helpers_photo_url__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/SolarSystem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/SolarSystem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/admin-table-component */ "./resources/js/mixins/admin-table-component.js");
/* harmony import */ var _components_picture_Picture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/picture/Picture */ "./resources/js/components/picture/Picture.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Picture: _components_picture_Picture__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      origin: window.location.origin,
      table: "homeSolarSystemDesc"
    };
  },
  computed: {
    homeSolarSystemDesc: function homeSolarSystemDesc() {
      var _this$$store$state$Ho;

      return (_this$$store$state$Ho = this.$store.state.HomeSolarSystemDesc) === null || _this$$store$state$Ho === void 0 ? void 0 : _this$$store$state$Ho.homeSolarSystemDesc;
    },
    tableData: function tableData() {
      return [this.homeSolarSystemDesc];
    }
  },
  created: function created() {
    if (Object.values(this.homeSolarSystemDesc).length === 0) this.$store.dispatch("homeSolarSystemDesc");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Main.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Main.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_photo_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/photo/url */ "./resources/js/helpers/photo/url.js");
//
//
//
//
//
//
//
//
//
//
//
//
//


var Slider = function Slider() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/pages/main/Slider */ "./resources/js/components/pages/main/Slider.vue"));
};

var About = function About() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/pages/main/About */ "./resources/js/components/pages/main/About.vue"));
};

var Services = function Services() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/pages/main/Services */ "./resources/js/components/pages/main/Services.vue"));
};

var SolarSystem = function SolarSystem() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/pages/main/SolarSystem */ "./resources/js/components/pages/main/SolarSystem.vue"));
};

var ExecutionProcess = function ExecutionProcess() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/pages/main/ExecutionProcess */ "./resources/js/components/pages/main/ExecutionProcess.vue"));
};

var Attributes = function Attributes() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/pages/main/Attributes */ "./resources/js/components/pages/main/Attributes.vue"));
};

var CallUs = function CallUs() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/pages/main/CallUs */ "./resources/js/components/pages/main/CallUs.vue"));
};

var Opinions = function Opinions() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/pages/main/Opinions */ "./resources/js/components/pages/main/Opinions.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Slider: Slider,
    About: About,
    Attributes: Attributes,
    CallUs: CallUs,
    ExecutionProcess: ExecutionProcess,
    SolarSystem: SolarSystem,
    Services: Services,
    Opinions: Opinions
  },
  methods: {
    url: _helpers_photo_url__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/About.vue?vue&type=style&index=0&id=350747e6&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/About.vue?vue&type=style&index=0&id=350747e6&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-350747e6] .ellipse {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transform: translate(-50%, 50%);\n  height: 170px;\n  z-index: 0;\n}\n[data-v-350747e6] .photo-container .photo {\n  position: relative;\n  z-index: 2;\n  height: auto;\n  width: 100%;\n  border-bottom-left-radius: var(--global-border-radius);\n  border-top-left-radius: var(--global-border-radius);\n}\n@media (max-width: 992px) {\n[data-v-350747e6] .photo-container .photo {\n    margin-top: 3rem;\n}\n}\n[data-v-350747e6] .bolt {\n  height: 75px;\n  padding-right: 1.3rem;\n}\n@media (max-width: 400px) {\n[data-v-350747e6] .bolt {\n    margin-bottom: 0.5rem;\n}\n}\nsection.about[data-v-350747e6] {\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: 7rem;\n  z-index: 1;\n}\nsection.about .content[data-v-350747e6] {\n  width: 66%;\n}\nsection.about .photo-container[data-v-350747e6] {\n  width: 33%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n@media (max-width: 992px) {\nsection.about .content[data-v-350747e6],\nsection.about .photo-container[data-v-350747e6] {\n    width: 100%;\n}\n}\nsection.about .content[data-v-350747e6] {\n  padding-left: var(--global-padding-x-desktop);\n  padding-right: var(--global-padding-x-desktop);\n  z-index: 3;\n}\n@media (max-width: 992px) {\nsection.about .content[data-v-350747e6] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.about .content .section-content[data-v-350747e6] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 400px) {\nsection.about .content .section-content[data-v-350747e6] {\n    flex-direction: column;\n}\n}\nsection.about .content .description[data-v-350747e6] {\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 17px;\n  margin-top: 1rem;\n}\nsection.about .content a.phone-link[data-v-350747e6] {\n  display: flex;\n  margin-top: 3rem;\n  background-color: #fff;\n  box-shadow: 0px 10px 40px #0000000f;\n  border-radius: var(--global-border-radius);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 1rem 2rem;\n  transition: 0.2s background-color;\n}\n@media (max-width: 400px) {\nsection.about .content a.phone-link[data-v-350747e6] {\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n}\nsection.about .content a.phone-link[data-v-350747e6]:hover {\n  background-color: var(--first-color);\n}\nsection.about .content a.phone-link:hover .phone-content[data-v-350747e6],\nsection.about .content a.phone-link:hover .phone-content span[data-v-350747e6] {\n  color: white;\n}\nsection.about .content a.phone-link .icon-container[data-v-350747e6] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 0px 10px 40px #0000000f;\n}\nsection.about .content a.phone-link .icon-container svg[data-v-350747e6] {\n  height: 20px;\n}\nsection.about .content a.phone-link .phone-content[data-v-350747e6] {\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n  line-height: 26px;\n  padding-left: 2rem;\n  color: black;\n}\n@media (max-width: 400px) {\nsection.about .content a.phone-link .phone-content[data-v-350747e6] {\n    padding-left: 0;\n    margin-top: 1rem;\n    width: 100%;\n}\n}\nsection.about .content a.phone-link .phone-content span[data-v-350747e6] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #333333;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=0&id=716f4507&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=0&id=716f4507&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-716f4507] .attribute .icon {\n  height: 65px;\n  padding-right: 1.5rem;\n  width: auto;\n}\n[data-v-716f4507] .bolt {\n  padding-right: 1.3rem;\n}\n@media (max-width: 400px) {\n[data-v-716f4507] .bolt {\n    margin-bottom: 0.5rem;\n}\n}\nsection.attributes .content[data-v-716f4507] {\n  padding: var(--global-padding-x-desktop);\n  padding-top: 0;\n}\n@media (max-width: 992px) {\nsection.attributes .content[data-v-716f4507] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.attributes .content .section-content[data-v-716f4507] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 400px) {\nsection.attributes .content .section-content[data-v-716f4507] {\n    flex-direction: column;\n}\n}\nsection.attributes .content .section-content .section-title span[data-v-716f4507] {\n  font-weight: 700;\n}\nsection.attributes .content .attributes-container[data-v-716f4507] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n}\nsection.attributes .content .attributes-container .attribute[data-v-716f4507] {\n  width: 33.33%;\n  margin-bottom: 1rem;\n}\n@media (max-width: 992px) {\nsection.attributes .content .attributes-container .attribute[data-v-716f4507] {\n    width: 100%;\n}\n}\n@media (min-width: 992px) {\nsection.attributes .content .attributes-container .attribute[data-v-716f4507]:nth-child(3n+2) {\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n}\nsection.attributes .content .attributes-container .attribute .attribute-content[data-v-716f4507] {\n  box-shadow: 0px 10px 40px #0000000f;\n  padding: 1.5rem 2rem;\n  display: flex;\n  align-items: center;\n  border-radius: 12px;\n  height: 100%;\n}\n@media (max-width: 576px) {\nsection.attributes .content .attributes-container .attribute .attribute-content[data-v-716f4507] {\n    flex-direction: column;\n}\nsection.attributes .content .attributes-container .attribute .attribute-content[data-v-716f4507] .icon {\n    padding-right: 0 !important;\n    margin-bottom: 0.9rem;\n}\nsection.attributes .content .attributes-container .attribute .attribute-content .description[data-v-716f4507] {\n    text-align: center;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=1&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".attribute-content .description {\n  font-weight: 700 !important;\n  font-size: 1rem;\n  color: black;\n  line-height: 19px;\n}\n.attribute-content .description span {\n  color: var(--first-color) !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/CallUs.vue?vue&type=style&index=0&id=4d313a68&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/CallUs.vue?vue&type=style&index=0&id=4d313a68&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-4d313a68] .bg {\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  position: relative;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: 50% 50%;\n     object-position: 50% 50%;\n}\nsection.call-us .call-us-container[data-v-4d313a68] {\n  position: relative;\n}\nsection.call-us .mask[data-v-4d313a68] {\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent linear-gradient(90deg, #00000073 0%, #00000000 38%) 0% 0% no-repeat padding-box;\n}\nsection.call-us .content[data-v-4d313a68] {\n  padding: 3rem var(--global-padding-x-desktop);\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n}\n@media (max-width: 992px) {\nsection.call-us .content[data-v-4d313a68] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n    flex-direction: column;\n}\n}\nsection.call-us .content .section-title[data-v-4d313a68] {\n  color: white;\n  text-shadow: 0 0 10px black;\n}\nsection.call-us .content a.phone-link[data-v-4d313a68] {\n  display: flex;\n  background-color: white;\n  box-shadow: 0px 10px 40px #0000000f;\n  border-radius: var(--global-border-radius);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 1rem 2rem;\n  transition: 0.2s background-color;\n}\n@media (max-width: 400px) {\nsection.call-us .content a.phone-link[data-v-4d313a68] {\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n}\n@media (max-width: 992px) {\nsection.call-us .content a.phone-link[data-v-4d313a68] {\n    margin-top: 3rem;\n}\n}\nsection.call-us .content a.phone-link[data-v-4d313a68]:hover {\n  background-color: var(--first-color);\n}\nsection.call-us .content a.phone-link:hover .phone-content[data-v-4d313a68],\nsection.call-us .content a.phone-link:hover .phone-content span[data-v-4d313a68] {\n  color: white;\n}\nsection.call-us .content a.phone-link .icon-container[data-v-4d313a68] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 0px 10px 40px #0000000f;\n}\nsection.call-us .content a.phone-link .icon-container svg[data-v-4d313a68] {\n  height: 20px;\n}\nsection.call-us .content a.phone-link .phone-content[data-v-4d313a68] {\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n  line-height: 26px;\n  padding-left: 2rem;\n  color: black;\n}\n@media (max-width: 400px) {\nsection.call-us .content a.phone-link .phone-content[data-v-4d313a68] {\n    padding-left: 0;\n    margin-top: 1rem;\n    width: 100%;\n}\n}\nsection.call-us .content a.phone-link .phone-content span[data-v-4d313a68] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #333333;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=style&index=0&id=5ae3d9e7&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=style&index=0&id=5ae3d9e7&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-5ae3d9e7] .bolt {\n  padding-right: 1.3rem;\n}\n@media (max-width: 400px) {\n[data-v-5ae3d9e7] .bolt {\n    margin-bottom: 0.5rem;\n}\n}\nsection.execution-process .content[data-v-5ae3d9e7] {\n  padding: var(--global-padding-x-desktop);\n}\n@media (max-width: 992px) {\nsection.execution-process .content[data-v-5ae3d9e7] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.execution-process .content .section-content[data-v-5ae3d9e7] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 400px) {\nsection.execution-process .content .section-content[data-v-5ae3d9e7] {\n    flex-direction: column;\n}\n}\nsection.execution-process .content .icon-section[data-v-5ae3d9e7] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\nsection.execution-process .content .icon-section .icon-container[data-v-5ae3d9e7] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--first-color);\n  border-radius: 100%;\n  padding: 1.5rem;\n}\nsection.execution-process .content .icon-section .icon-container .icon[data-v-5ae3d9e7] {\n  height: 60px;\n}\nsection.execution-process .content .icon-section .separator[data-v-5ae3d9e7] {\n  background-color: var(--first-color);\n  margin: 0 1.2rem;\n  height: 1px;\n  width: 100%;\n}\nsection.execution-process .content .steps[data-v-5ae3d9e7] {\n  display: flex;\n  flex-wrap: wrap;\n}\nsection.execution-process .content .steps .step[data-v-5ae3d9e7] {\n  width: 25%;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 992px) {\nsection.execution-process .content .steps .step[data-v-5ae3d9e7] {\n    width: 100%;\n}\n}\nsection.execution-process .content .steps .step .step-title[data-v-5ae3d9e7] {\n  margin-top: 1rem;\n  font-weight: 600;\n  font-size: 1rem;\n  text-align: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Opinions.vue?vue&type=style&index=0&id=356b21e1&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Opinions.vue?vue&type=style&index=0&id=356b21e1&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-356b21e1] .bolt {\n  padding-right: 1.3rem;\n}\n@media (max-width: 400px) {\n[data-v-356b21e1] .bolt {\n    margin-bottom: 0.5rem;\n}\n}\n[data-v-356b21e1] .ellipse {\n  position: absolute;\n  left: 50%;\n  top: 0;\n}\n[data-v-356b21e1] .avatar {\n  height: 60px;\n  border-radius: 100%;\n  margin-right: 1rem;\n}\nsection.opinions[data-v-356b21e1] {\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\nsection.opinions .content[data-v-356b21e1] {\n  position: relative;\n  padding: var(--global-padding-x-desktop);\n}\n@media (max-width: 992px) {\nsection.opinions .content[data-v-356b21e1] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.opinions .content .section-content[data-v-356b21e1] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 400px) {\nsection.opinions .content .section-content[data-v-356b21e1] {\n    flex-direction: column;\n}\n}\nsection.opinions .content .section-content .section-title span[data-v-356b21e1] {\n  font-weight: 700;\n}\nsection.opinions .content .opinions-container[data-v-356b21e1] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n}\nsection.opinions .content .opinions-container .opinion[data-v-356b21e1] {\n  width: 33.33%;\n  margin-bottom: 1rem;\n  background-color: white;\n}\n@media (min-width: 992px) {\nsection.opinions .content .opinions-container .opinion[data-v-356b21e1]:nth-child(3n+2) {\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n}\n@media (max-width: 992px) {\nsection.opinions .content .opinions-container .opinion[data-v-356b21e1] {\n    width: 100%;\n}\n}\nsection.opinions .content .opinions-container .opinion .opinion-container[data-v-356b21e1] {\n  box-shadow: 0px 10px 40px #0000000f;\n  padding: 1.7rem;\n  border-radius: 12px;\n  height: 100%;\n}\nsection.opinions .content .opinions-container .opinion .opinion-container .author[data-v-356b21e1] {\n  display: flex;\n  align-items: center;\n}\nsection.opinions .content .opinions-container .opinion .opinion-container .author .name[data-v-356b21e1] {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\nsection.opinions .content .opinions-container .opinion .opinion-container .author .date[data-v-356b21e1] {\n  margin-bottom: 0;\n  font-weight: 600;\n  font-size: 1rem;\n}\nsection.opinions .content .opinions-container .opinion .opinion-container .stars[data-v-356b21e1] {\n  display: flex;\n  padding-top: 1.2rem;\n  padding-bottom: 0.5rem;\n}\nsection.opinions .content .opinions-container .opinion .opinion-container .stars .star[data-v-356b21e1] {\n  height: 15px;\n  padding-right: 0.2rem;\n}\nsection.opinions .content .opinions-container .opinion .opinion-container .description[data-v-356b21e1] {\n  font-weight: 600;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Services.vue?vue&type=style&index=0&id=c61fd2e4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Services.vue?vue&type=style&index=0&id=c61fd2e4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-c61fd2e4] .service img {\n  height: 200px;\n  border-radius: var(--global-border-radius);\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n[data-v-c61fd2e4] .bolt {\n  height: 75px;\n  padding-right: 1.3rem;\n}\n@media (max-width: 400px) {\n[data-v-c61fd2e4] .bolt {\n    margin-bottom: 0.5rem;\n}\n}\nsection.services[data-v-c61fd2e4] {\n  margin-top: 7rem;\n  padding-bottom: 3rem;\n}\nsection.services .content[data-v-c61fd2e4] {\n  padding-left: var(--global-padding-x-desktop);\n}\n@media (max-width: 992px) {\nsection.services .content[data-v-c61fd2e4] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.services .content .section-content[data-v-c61fd2e4] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 3rem;\n}\n@media (max-width: 400px) {\nsection.services .content .section-content[data-v-c61fd2e4] {\n    flex-direction: column;\n}\n}\nsection.services .content .section-content .section-title span[data-v-c61fd2e4] {\n  font-weight: 500;\n  font-size: 1rem;\n}\nsection.services .content .owl-carousel .owl-stage-outer[data-v-c61fd2e4] {\n  overflow: unset !important;\n}\nsection.services .content .service[data-v-c61fd2e4] {\n  padding: 1.5rem;\n  transition: 0.2s background-color, 0.2s transform;\n  border-radius: var(--global-border-radius);\n  box-shadow: 0px 10px 40px #0000000f;\n  margin-right: 0.8rem;\n  display: block;\n}\nsection.services .content .service[data-v-c61fd2e4]:hover {\n  background-color: var(--first-color);\n  transform: translateY(-10px);\n}\nsection.services .content .service:hover .service-title[data-v-c61fd2e4],\nsection.services .content .service:hover .description[data-v-c61fd2e4] {\n  color: white !important;\n}\nsection.services .content .service .service-title[data-v-c61fd2e4] {\n  font-weight: 700;\n  font-size: 1.5rem;\n  margin-top: 1rem;\n  color: var(--first-color);\n}\nsection.services .content .service .description[data-v-c61fd2e4] {\n  font-weight: 600;\n  line-height: 16px;\n  color: black;\n}\nsection.services .content .button[data-v-c61fd2e4] {\n  margin-top: 1.5rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Services.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Services.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section.services .owl-carousel .owl-item {\n  display: flex;\n  align-items: stretch;\n}\nsection.services .owl-carousel .owl-stage {\n  display: flex;\n}\nsection.services .owl-carousel .owl-stage-outer {\n  overflow: unset !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Slider.vue?vue&type=style&index=0&id=8d4d68de&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Slider.vue?vue&type=style&index=0&id=8d4d68de&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-8d4d68de] .slide-photo {\n  -o-object-fit: cover;\n     object-fit: cover;\n  min-height: 500px;\n  max-height: 500px;\n}\nsection.slider[data-v-8d4d68de] {\n  min-height: 500px;\n  max-height: 500px;\n}\nsection.slider .slide[data-v-8d4d68de] {\n  background-position: 50% 50%;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\nsection.slider .slide .content[data-v-8d4d68de] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  z-index: 1;\n  padding-left: var(--global-padding-x-desktop);\n  width: 50%;\n}\n@media (max-width: 992px) {\nsection.slider .slide .content[data-v-8d4d68de] {\n    width: 100%;\n    padding-left: var(--global-padding-x-mobile);\n}\n}\nsection.slider .slide .content .slide-title[data-v-8d4d68de],\nsection.slider .slide .content .slide-subtitle[data-v-8d4d68de] {\n  color: white;\n  text-shadow: 0 0 10px black;\n}\nsection.slider .slide .content .slide-title[data-v-8d4d68de] {\n  font-size: 2.9rem !important;\n  font-weight: 600;\n}\nsection.slider .slide .content .slide-subtitle[data-v-8d4d68de] {\n  font-size: 1.4rem !important;\n  font-weight: 300;\n}\nsection.slider .slide .mask[data-v-8d4d68de] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.69) 0%, rgba(0, 0, 0, 0) 41%);\n}\nsection.slider .slider-carousel .owl-dots[data-v-8d4d68de] {\n  position: absolute !important;\n  bottom: 0;\n  transform: translateY(50%);\n}\nsection.slider .slider-carousel .owl-carousel > .slide[data-v-8d4d68de] {\n  display: none !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Slider.vue?vue&type=style&index=1&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Slider.vue?vue&type=style&index=1&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section.slider .slider-carousel .owl-dots {\n  position: absolute !important;\n  left: 50%;\n  bottom: 0;\n  transform: translate(-50%, 50%);\n  margin-top: 0 !important;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  border-radius: 15px;\n  padding: 0.3rem 0.5rem;\n}\nsection.slider .slider-carousel .owl-dots .owl-dot.active span, section.slider .slider-carousel .owl-dots .owl-dot:hover span {\n  background-color: var(--first-color);\n}\nsection.slider .slider-carousel .owl-dots .owl-dot span {\n  width: 14px;\n  height: 14px;\n  margin-left: 4px;\n  margin-right: 4px;\n  transition: 0.2s background-color;\n  background-color: #efefef;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/SolarSystem.vue?vue&type=style&index=0&id=f0e8bf60&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/SolarSystem.vue?vue&type=style&index=0&id=f0e8bf60&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-f0e8bf60] .ellipse {\n  position: absolute;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 142%;\n  width: auto;\n}\n[data-v-f0e8bf60] .solar-system-bg {\n  min-height: 435px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: var(--global-border-radius);\n}\nsection.solar-system[data-v-f0e8bf60] {\n  position: relative;\n  z-index: 1;\n  margin: 8rem 0;\n  padding-bottom: 3rem;\n}\nsection.solar-system .content[data-v-f0e8bf60] {\n  padding: var(--global-padding-x-desktop);\n  width: 50%;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  z-index: 1;\n}\n@media (max-width: 992px) {\nsection.solar-system .content[data-v-f0e8bf60] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n    width: 100%;\n}\n}\nsection.solar-system .content .section-title[data-v-f0e8bf60],\nsection.solar-system .content .short-description[data-v-f0e8bf60], section.solar-system .content[data-v-f0e8bf60] {\n  text-shadow: 0 0 10px black;\n}\nsection.solar-system .content .section-title[data-v-f0e8bf60],\nsection.solar-system .content .short-description[data-v-f0e8bf60] {\n  color: white;\n}\nsection.solar-system .content .short-description[data-v-f0e8bf60] {\n  line-height: 25px;\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/About.vue?vue&type=style&index=0&id=350747e6&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/About.vue?vue&type=style&index=0&id=350747e6&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=style&index=0&id=350747e6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/About.vue?vue&type=style&index=0&id=350747e6&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=0&id=716f4507&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=0&id=716f4507&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Attributes.vue?vue&type=style&index=0&id=716f4507&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=0&id=716f4507&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=1&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=1&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Attributes.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/CallUs.vue?vue&type=style&index=0&id=4d313a68&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/CallUs.vue?vue&type=style&index=0&id=4d313a68&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CallUs.vue?vue&type=style&index=0&id=4d313a68&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/CallUs.vue?vue&type=style&index=0&id=4d313a68&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=style&index=0&id=5ae3d9e7&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=style&index=0&id=5ae3d9e7&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExecutionProcess.vue?vue&type=style&index=0&id=5ae3d9e7&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=style&index=0&id=5ae3d9e7&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Opinions.vue?vue&type=style&index=0&id=356b21e1&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Opinions.vue?vue&type=style&index=0&id=356b21e1&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Opinions.vue?vue&type=style&index=0&id=356b21e1&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Opinions.vue?vue&type=style&index=0&id=356b21e1&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Services.vue?vue&type=style&index=0&id=c61fd2e4&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Services.vue?vue&type=style&index=0&id=c61fd2e4&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=0&id=c61fd2e4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Services.vue?vue&type=style&index=0&id=c61fd2e4&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Services.vue?vue&type=style&index=1&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Services.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Services.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Slider.vue?vue&type=style&index=0&id=8d4d68de&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Slider.vue?vue&type=style&index=0&id=8d4d68de&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=style&index=0&id=8d4d68de&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Slider.vue?vue&type=style&index=0&id=8d4d68de&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Slider.vue?vue&type=style&index=1&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Slider.vue?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Slider.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/SolarSystem.vue?vue&type=style&index=0&id=f0e8bf60&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/SolarSystem.vue?vue&type=style&index=0&id=f0e8bf60&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SolarSystem.vue?vue&type=style&index=0&id=f0e8bf60&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/SolarSystem.vue?vue&type=style&index=0&id=f0e8bf60&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/custom-link/CustomLink.vue?vue&type=template&id=080d200f&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/custom-link/CustomLink.vue?vue&type=template&id=080d200f& ***!
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
    _vm.$isLinkExternal(_vm.path) ? "a" : "custom-router-link",
    {
      tag: "component",
      attrs: {
        download: Boolean(_vm.download),
        target: _vm.target,
        href: _vm.$isLinkExternal(_vm.path) ? _vm.path : undefined,
        to: _vm.$isLinkExternal(_vm.path) ? null : _vm.path
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/custom-link/CustomRouterLink.vue?vue&type=template&id=5c4b30b8&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/custom-link/CustomRouterLink.vue?vue&type=template&id=5c4b30b8& ***!
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
  return _c("router-link", { attrs: { to: _vm.to } }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/About.vue?vue&type=template&id=350747e6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/About.vue?vue&type=template&id=350747e6&scoped=true& ***!
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
  return _vm.about.id && _vm.contact.id
    ? _c("section", { staticClass: "about" }, [
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
                  innerHTML: _vm._s(_vm.prepareTitle(_vm.about.title))
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", {
            staticClass: "description",
            domProps: { innerHTML: _vm._s(_vm.about.short_description) }
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
                _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "27.01",
                      height: "27.008",
                      viewBox: "0 0 27.01 27.008"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        id: "Icon_ionic-ios-call",
                        "data-name": "Icon ionic-ios-call",
                        d:
                          "M30.72,25.65a22.686,22.686,0,0,0-4.739-3.171c-1.42-.682-1.941-.668-2.946.056-.837.6-1.378,1.167-2.341.956s-2.862-1.645-4.7-3.48-3.277-3.741-3.48-4.7.359-1.5.956-2.341c.724-1.005.745-1.526.056-2.946A22.238,22.238,0,0,0,10.35,5.28c-1.034-1.034-1.266-.809-1.835-.6a10.443,10.443,0,0,0-1.68.893A5.069,5.069,0,0,0,4.816,7.7c-.4.865-.865,2.475,1.5,6.68a37.272,37.272,0,0,0,6.553,8.74h0l.007.007.007.007h0a37.418,37.418,0,0,0,8.74,6.553c4.2,2.362,5.815,1.9,6.68,1.5a4.983,4.983,0,0,0,2.13-2.018,10.443,10.443,0,0,0,.893-1.68C31.528,26.916,31.76,26.684,30.72,25.65Z",
                        transform: "translate(-4.49 -4.502)",
                        fill: _vm.$store.getters.settings.first_color
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "phone-content" }, [
                _vm._v(
                  "\n        " + _vm._s(_vm.about.button_name) + "\n        "
                ),
                _c("span", { staticClass: "number" }, [
                  _vm._v(_vm._s(_vm.contact.phone_1))
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "position-relative photo-container" },
          [
            _c("Picture", {
              attrs: {
                width: _vm.about.photo_sizes.width,
                height: _vm.about.photo_sizes.height,
                alt: _vm.about.photo_alt,
                classImg: "photo bg",
                src: _vm.origin + "/storage/media/" + _vm.about.photo,
                "mobile-version": 576
              }
            }),
            _vm._v(" "),
            _c("Picture", {
              attrs: {
                width: 170,
                height: 170,
                alt: "elipsa",
                classImg: "ellipse",
                src: _vm.origin + "/storage/img/home/ellipse1.svg"
              }
            })
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Attributes.vue?vue&type=template&id=716f4507&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Attributes.vue?vue&type=template&id=716f4507&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "attributes" }, [
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
          _vm.attributesDesc.id
            ? _c("h3", {
                staticClass: "section-title",
                domProps: {
                  innerHTML: _vm._s(_vm.prepareTitle(_vm.attributesDesc.title))
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "attributes-container" },
        _vm._l(_vm.attributes, function(attribute, i) {
          return _c(
            "div",
            { key: "attribute-" + i, staticClass: "attribute" },
            [
              _c(
                "div",
                { staticClass: "attribute-content" },
                [
                  _c("Picture", {
                    attrs: {
                      width: "150",
                      height: "65",
                      alt: attribute.photo_alt,
                      classImg: "icon",
                      src: _vm.origin + "/storage/media/" + attribute.photo
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "description",
                    domProps: {
                      innerHTML: _vm._s(_vm.prepareTitle(attribute.title))
                    }
                  })
                ],
                1
              )
            ]
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/CallUs.vue?vue&type=template&id=4d313a68&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/CallUs.vue?vue&type=template&id=4d313a68&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return Object.entries(_vm.homeCallUs).length > 0
    ? _c(
        "section",
        { staticClass: "call-us" },
        [
          _c("style", { tag: "component" }, [
            _vm._v(
              "\n    .call-us-container { height: " +
                _vm._s(_vm.homeCallUs.min_height) +
                "px; }\n    @media(min-width: 768px) { .call-us-container { height:\n    " +
                _vm._s(_vm.homeCallUs.min_height_md) +
                "px; } } @media(min-width: 992px) {\n    .call-us-container { height: " +
                _vm._s(_vm.homeCallUs.min_height_lg) +
                "px; } }\n  "
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "call-us-container" },
            [
              _c("Picture", {
                staticClass: "w-100 h-100",
                attrs: {
                  src: _vm.origin + "/storage/media/" + _vm.homeCallUs.photo,
                  alt: _vm.homeCallUs.photo_alt,
                  width: _vm.homeCallUs.photo_sizes.width,
                  height: _vm.homeCallUs.photo_sizes.height,
                  classImg: "bg",
                  styleImg: {
                    "object-position": _vm.homeCallUs.photo_background_position
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "mask" }),
              _vm._v(" "),
              _c("div", { staticClass: "content" }, [
                _c("h3", { staticClass: "section-title" }, [
                  _vm._v(_vm._s(_vm.homeCallUs.title))
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "phone-link",
                    attrs: { href: "tel:" + _vm.contact.phone_1 }
                  },
                  [
                    _c("div", { staticClass: "icon-container" }, [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "27.01",
                            height: "27.008",
                            viewBox: "0 0 27.01 27.008"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              id: "Icon_ionic-ios-call",
                              "data-name": "Icon ionic-ios-call",
                              d:
                                "M30.72,25.65a22.686,22.686,0,0,0-4.739-3.171c-1.42-.682-1.941-.668-2.946.056-.837.6-1.378,1.167-2.341.956s-2.862-1.645-4.7-3.48-3.277-3.741-3.48-4.7.359-1.5.956-2.341c.724-1.005.745-1.526.056-2.946A22.238,22.238,0,0,0,10.35,5.28c-1.034-1.034-1.266-.809-1.835-.6a10.443,10.443,0,0,0-1.68.893A5.069,5.069,0,0,0,4.816,7.7c-.4.865-.865,2.475,1.5,6.68a37.272,37.272,0,0,0,6.553,8.74h0l.007.007.007.007h0a37.418,37.418,0,0,0,8.74,6.553c4.2,2.362,5.815,1.9,6.68,1.5a4.983,4.983,0,0,0,2.13-2.018,10.443,10.443,0,0,0,.893-1.68C31.528,26.916,31.76,26.684,30.72,25.65Z",
                              transform: "translate(-4.49 -4.502)",
                              fill: _vm.$store.getters.settings.first_color
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "phone-content" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.homeCallUs.button_name) +
                          "\n          "
                      ),
                      _c("span", { staticClass: "number" }, [
                        _vm._v(_vm._s(_vm.contact.phone_1))
                      ])
                    ])
                  ]
                )
              ])
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=template&id=5ae3d9e7&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=template&id=5ae3d9e7&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "execution-process" }, [
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
          _c("h3", { staticClass: "section-title" }, [
            _vm._v(_vm._s(_vm.executionProcessDesc.title))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "steps" },
        _vm._l(_vm.executionProcess, function(step, i) {
          return _c("div", { key: "step-" + i, staticClass: "step" }, [
            _c("div", { staticClass: "icon-section" }, [
              _c(
                "div",
                { staticClass: "icon-container" },
                [
                  _c("Picture", {
                    attrs: {
                      width: "60",
                      height: "60",
                      alt: step.photo_alt,
                      classImg: "icon",
                      src: _vm.origin + "/storage/media/" + step.photo
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              (i !== _vm.executionProcess.length - 1 ||
                _vm.innerWidth <= 992) &&
              false
                ? _c("div", { staticClass: "separator" })
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "step-title" }, [
              _vm._v(_vm._s(step.title))
            ])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Opinions.vue?vue&type=template&id=356b21e1&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Opinions.vue?vue&type=template&id=356b21e1&scoped=true& ***!
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
  return _vm.opinions && _vm.opinions.length > 0
    ? _c(
        "section",
        { staticClass: "opinions" },
        [
          _c("Picture", {
            attrs: {
              src: "/storage/img/stock/opinions-ellipse.svg",
              alt: "elipsa",
              width: 1461,
              height: 1461,
              classImg: "ellipse"
            }
          }),
          _vm._v(" "),
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
                    innerHTML: _vm._s(_vm.prepareTitle(_vm.opinionsDesc.title))
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "opinions-container" },
              _vm._l(_vm.opinions, function(opinion, i) {
                return _c(
                  "div",
                  { key: "opinion-" + i, staticClass: "opinion" },
                  [
                    _c("div", { staticClass: "opinion-container" }, [
                      _c(
                        "div",
                        { staticClass: "author" },
                        [
                          _c("Picture", {
                            attrs: {
                              src:
                                _vm.origin + "/storage/media/" + opinion.photo,
                              alt: opinion.photo_alt,
                              width: 60,
                              height: 60,
                              classImg: "avatar"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", [
                            _c("b", { staticClass: "name" }, [
                              _vm._v(_vm._s(opinion.title))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "date" }, [
                              _vm._v(
                                "\n                " +
                                  _vm._s(
                                    new Date(
                                      opinion.created_at
                                    ).toLocaleString()
                                  ) +
                                  "\n              "
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "stars" },
                        [
                          _vm._l(opinion.stars, function(star, j) {
                            return _c(
                              "svg",
                              {
                                key: "opinion-" + i + "-star-" + j,
                                staticClass: "star star-filled",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "22.589",
                                  height: "20.976",
                                  viewBox: "0 0 22.589 20.976"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    id: "Icon_ionic-ios-star",
                                    "data-name": "Icon ionic-ios-star",
                                    d:
                                      "M23.982,10.636H16.565L14.311,3.909a.817.817,0,0,0-1.533,0l-2.254,6.726H3.057a.809.809,0,0,0-.807.807.593.593,0,0,0,.015.136.775.775,0,0,0,.338.57l6.1,4.3-2.34,6.8a.809.809,0,0,0,.277.908.78.78,0,0,0,.454.2.988.988,0,0,0,.5-.182l5.95-4.241,5.95,4.241a.945.945,0,0,0,.5.182.724.724,0,0,0,.449-.2.8.8,0,0,0,.277-.908l-2.34-6.8,6.046-4.336.146-.126a.846.846,0,0,0,.262-.54A.854.854,0,0,0,23.982,10.636Z",
                                    transform: "translate(-2.25 -3.375)",
                                    fill:
                                      _vm.$store.getters.settings.first_color
                                  }
                                })
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _vm._l(5 - opinion.stars, function(star, j) {
                            return _c(
                              "svg",
                              {
                                key: "opinion-" + i + "-star-" + j,
                                staticClass: "star star-outline",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "22.589",
                                  height: "20.976",
                                  viewBox: "0 0 22.589 20.976"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    id: "Icon_ionic-ios-star-outline",
                                    "data-name": "Icon ionic-ios-star-outline",
                                    d:
                                      "M23.982,10.636H16.565L14.311,3.909a.817.817,0,0,0-1.533,0l-2.254,6.726H3.057a.809.809,0,0,0-.807.807.593.593,0,0,0,.015.136.775.775,0,0,0,.338.57l6.1,4.3-2.34,6.8a.809.809,0,0,0,.277.908.78.78,0,0,0,.454.2.988.988,0,0,0,.5-.182l5.95-4.241,5.95,4.241a.945.945,0,0,0,.5.182.724.724,0,0,0,.449-.2.8.8,0,0,0,.277-.908l-2.34-6.8,6.046-4.336.146-.126a.846.846,0,0,0,.262-.54A.854.854,0,0,0,23.982,10.636ZM17.568,15.3a1.416,1.416,0,0,0-.514,1.6l1.518,4.422a.2.2,0,0,1-.308.232l-3.9-2.783a1.409,1.409,0,0,0-.822-.262,1.383,1.383,0,0,0-.817.262l-3.9,2.778a.2.2,0,0,1-.308-.232L10.03,16.9a1.421,1.421,0,0,0-.519-1.614L5.427,12.406a.2.2,0,0,1,.116-.368h4.977a1.41,1.41,0,0,0,1.336-.963l1.493-4.447a.2.2,0,0,1,.383,0l1.493,4.447a1.41,1.41,0,0,0,1.336.963h4.906a.2.2,0,0,1,.116.363Z",
                                    transform: "translate(-2.25 -3.375)",
                                    fill: "#e4e4e4"
                                  }
                                })
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "description",
                        domProps: {
                          innerHTML: _vm._s(opinion.short_description)
                        }
                      })
                    ])
                  ]
                )
              }),
              0
            )
          ])
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Services.vue?vue&type=template&id=c61fd2e4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Services.vue?vue&type=template&id=c61fd2e4&scoped=true& ***!
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
  return _c("section", { staticClass: "services" }, [
    _c(
      "div",
      { staticClass: "content" },
      [
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
            _c("h3", { staticClass: "section-title" }, [
              _vm._v("\n        " + _vm._s(_vm.homeServicesDesc.title) + " "),
              _c("br"),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.homeServicesDesc.subtitle))])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm.homeServices.length > 0
          ? _c(
              "carousel",
              {
                staticClass: "service-carousel",
                attrs: { items: _vm.carouselItems, nav: false, dots: false }
              },
              _vm._l(_vm.homeServices, function(service, i) {
                return _c(
                  "router-link",
                  {
                    key: "home-service-" + i,
                    staticClass: "service",
                    attrs: {
                      to: {
                        name: "Service",
                        params: {
                          id: service.id,
                          title: _vm.slug(service.title)
                        }
                      }
                    }
                  },
                  [
                    _c("Picture", {
                      attrs: {
                        width: service.photo_sizes.width,
                        height: service.photo_sizes.height,
                        alt: service.photo_alt,
                        classImg: "photo bg",
                        src: _vm.origin + "/storage/media/" + service.photo,
                        "mobile-version": 576
                      }
                    }),
                    _vm._v(" "),
                    _c("h4", { staticClass: "service-title" }, [
                      _vm._v(_vm._s(service.title))
                    ]),
                    _vm._v(" "),
                    service.short_description
                      ? _c("div", { staticClass: "description" }, [
                          _vm._v(
                            "\n          " +
                              _vm._s(
                                service.short_description
                                  .replace(/(<([^>]+)>)/gi, "")
                                  .substring(0, 100) + "..."
                              ) +
                              "\n        "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              }),
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "router-link",
          { attrs: { to: { path: _vm.homeServicesDesc.link } } },
          [
            _c("button", { staticClass: "button first-button" }, [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.homeServicesDesc.button_name) +
                  "\n      "
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Slider.vue?vue&type=template&id=8d4d68de&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/Slider.vue?vue&type=template&id=8d4d68de&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _vm.slider.length > 0
    ? _c(
        "section",
        { staticClass: "slider" },
        [
          _vm.carousel
            ? _c(
                "carousel",
                {
                  staticClass: "slider-carousel",
                  attrs: {
                    items: 1,
                    nav: false,
                    loop: true,
                    autoplay: true,
                    autoplaySpeed: 2000
                  },
                  on: { update: _vm.update }
                },
                _vm._l(_vm.slider, function(slide, i) {
                  return _c(
                    "div",
                    { key: "slide-" + i, staticClass: "slide" },
                    [
                      _c("Picture", {
                        staticClass: "w-100",
                        attrs: {
                          src: _vm.url(slide.photo),
                          alt: slide.photo_alt,
                          width: slide.photo_sizes.width,
                          height: slide.photo_sizes.height,
                          classImg: "slide-photo",
                          styleImg: {
                            "object-size": slide.photo_background_size,
                            "object-position": slide.photo_background_position
                          },
                          "mobile-version": 576
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "content" },
                        [
                          _c("h2", { staticClass: "slide-title" }, [
                            _vm._v(_vm._s(slide.title))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "slide-subtitle" }, [
                            _vm._v(_vm._s(slide.subtitle))
                          ]),
                          _vm._v(" "),
                          _c(
                            "custom-link",
                            {
                              staticClass: "mr-2",
                              attrs: {
                                path: slide.button_link_1,
                                download: slide.button_download_1
                              }
                            },
                            [
                              _c(
                                "button",
                                { staticClass: "button first-button" },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(slide.button_name_1) +
                                      "\n          "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "custom-link",
                            {
                              attrs: {
                                path: slide.button_link_2,
                                download: slide.button_download_2
                              }
                            },
                            [
                              _c(
                                "button",
                                { staticClass: "button second-button" },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(slide.button_name_2) +
                                      "\n          "
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "mask" })
                    ],
                    1
                  )
                }),
                0
              )
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/SolarSystem.vue?vue&type=template&id=f0e8bf60&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/main/SolarSystem.vue?vue&type=template&id=f0e8bf60&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _vm.homeSolarSystemDesc.id
    ? _c(
        "section",
        { staticClass: "solar-system" },
        [
          _c("Picture", {
            attrs: {
              width: "680",
              height: "680",
              alt: "elipsa",
              classImg: "ellipse",
              src: _vm.origin + "/storage/img/home/solar-system-ellipse.svg"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "position-relative" },
            [
              _c("style", { tag: "component" }, [
                _vm._v(
                  "\n      .solar-system-bg { height: " +
                    _vm._s(_vm.homeSolarSystemDesc.height) +
                    "px; }\n      @media(min-width: 768px) { .solar-system-bg { height:\n      " +
                    _vm._s(_vm.homeSolarSystemDesc.height_md) +
                    "px; } } @media(min-width: 992px) {\n      .solar-system-bg { height: " +
                    _vm._s(_vm.homeSolarSystemDesc.height_lg) +
                    "px; } }\n    "
                )
              ]),
              _vm._v(" "),
              _c("Picture", {
                attrs: {
                  width: _vm.homeSolarSystemDesc.photo_sizes.width,
                  height: _vm.homeSolarSystemDesc.photo_sizes.height,
                  alt: _vm.homeSolarSystemDesc.photo_alt,
                  classImg: "bg solar-system-bg",
                  src:
                    _vm.origin +
                    "/storage/media/" +
                    _vm.homeSolarSystemDesc.photo,
                  styleImg: {
                    "background-position":
                      _vm.homeSolarSystemDesc.photo_background_position
                  },
                  "mobile-version": 576
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "content" },
                [
                  _c("h3", { staticClass: "section-title" }, [
                    _vm._v(_vm._s(_vm.homeSolarSystemDesc.title))
                  ]),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "short-description",
                    domProps: {
                      innerHTML: _vm._s(_vm.homeSolarSystemDesc.description)
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { attrs: { to: { path: _vm.homeSolarSystemDesc.link } } },
                    [
                      _c("button", { staticClass: "button second-button" }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.homeSolarSystemDesc.button_name) +
                            "\n        "
                        )
                      ])
                    ]
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Main.vue?vue&type=template&id=9392bbe0&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Main.vue?vue&type=template&id=9392bbe0&scoped=true& ***!
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
    "section",
    { staticClass: "main" },
    [
      _c("Slider"),
      _vm._v(" "),
      _c("About"),
      _vm._v(" "),
      _c("Services"),
      _vm._v(" "),
      _c("SolarSystem"),
      _vm._v(" "),
      _c("ExecutionProcess"),
      _vm._v(" "),
      _c("Attributes"),
      _vm._v(" "),
      _c("CallUs"),
      _vm._v(" "),
      _c("Opinions")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/custom-link/CustomLink.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/custom-link/CustomLink.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomLink_vue_vue_type_template_id_080d200f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomLink.vue?vue&type=template&id=080d200f& */ "./resources/js/components/custom-link/CustomLink.vue?vue&type=template&id=080d200f&");
/* harmony import */ var _CustomLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomLink.vue?vue&type=script&lang=js& */ "./resources/js/components/custom-link/CustomLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomLink_vue_vue_type_template_id_080d200f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomLink_vue_vue_type_template_id_080d200f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/custom-link/CustomLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/custom-link/CustomLink.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/custom-link/CustomLink.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/custom-link/CustomLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/custom-link/CustomLink.vue?vue&type=template&id=080d200f&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/custom-link/CustomLink.vue?vue&type=template&id=080d200f& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomLink_vue_vue_type_template_id_080d200f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomLink.vue?vue&type=template&id=080d200f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/custom-link/CustomLink.vue?vue&type=template&id=080d200f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomLink_vue_vue_type_template_id_080d200f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomLink_vue_vue_type_template_id_080d200f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/custom-link/CustomRouterLink.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/custom-link/CustomRouterLink.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomRouterLink_vue_vue_type_template_id_5c4b30b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomRouterLink.vue?vue&type=template&id=5c4b30b8& */ "./resources/js/components/custom-link/CustomRouterLink.vue?vue&type=template&id=5c4b30b8&");
/* harmony import */ var _CustomRouterLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomRouterLink.vue?vue&type=script&lang=js& */ "./resources/js/components/custom-link/CustomRouterLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomRouterLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomRouterLink_vue_vue_type_template_id_5c4b30b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomRouterLink_vue_vue_type_template_id_5c4b30b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/custom-link/CustomRouterLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/custom-link/CustomRouterLink.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/custom-link/CustomRouterLink.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomRouterLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomRouterLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/custom-link/CustomRouterLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomRouterLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/custom-link/CustomRouterLink.vue?vue&type=template&id=5c4b30b8&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/custom-link/CustomRouterLink.vue?vue&type=template&id=5c4b30b8& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomRouterLink_vue_vue_type_template_id_5c4b30b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomRouterLink.vue?vue&type=template&id=5c4b30b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/custom-link/CustomRouterLink.vue?vue&type=template&id=5c4b30b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomRouterLink_vue_vue_type_template_id_5c4b30b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomRouterLink_vue_vue_type_template_id_5c4b30b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/main/About.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/pages/main/About.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_350747e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=350747e6&scoped=true& */ "./resources/js/components/pages/main/About.vue?vue&type=template&id=350747e6&scoped=true&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/main/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _About_vue_vue_type_style_index_0_id_350747e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.vue?vue&type=style&index=0&id=350747e6&lang=scss&scoped=true& */ "./resources/js/components/pages/main/About.vue?vue&type=style&index=0&id=350747e6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_350747e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_350747e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "350747e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/main/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/main/About.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pages/main/About.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/main/About.vue?vue&type=style&index=0&id=350747e6&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/About.vue?vue&type=style&index=0&id=350747e6&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_350747e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=style&index=0&id=350747e6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/About.vue?vue&type=style&index=0&id=350747e6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_350747e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_350747e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_350747e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_350747e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/main/About.vue?vue&type=template&id=350747e6&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/About.vue?vue&type=template&id=350747e6&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_350747e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=350747e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/About.vue?vue&type=template&id=350747e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_350747e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_350747e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/main/Attributes.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/pages/main/Attributes.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Attributes_vue_vue_type_template_id_716f4507_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attributes.vue?vue&type=template&id=716f4507&scoped=true& */ "./resources/js/components/pages/main/Attributes.vue?vue&type=template&id=716f4507&scoped=true&");
/* harmony import */ var _Attributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Attributes.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/main/Attributes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Attributes_vue_vue_type_style_index_0_id_716f4507_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Attributes.vue?vue&type=style&index=0&id=716f4507&lang=scss&scoped=true& */ "./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=0&id=716f4507&lang=scss&scoped=true&");
/* harmony import */ var _Attributes_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Attributes.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Attributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Attributes_vue_vue_type_template_id_716f4507_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Attributes_vue_vue_type_template_id_716f4507_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "716f4507",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/main/Attributes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/main/Attributes.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pages/main/Attributes.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Attributes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Attributes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=0&id=716f4507&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=0&id=716f4507&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_style_index_0_id_716f4507_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Attributes.vue?vue&type=style&index=0&id=716f4507&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=0&id=716f4507&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_style_index_0_id_716f4507_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_style_index_0_id_716f4507_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_style_index_0_id_716f4507_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_style_index_0_id_716f4507_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=1&lang=scss&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Attributes.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Attributes.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/main/Attributes.vue?vue&type=template&id=716f4507&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/Attributes.vue?vue&type=template&id=716f4507&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_template_id_716f4507_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Attributes.vue?vue&type=template&id=716f4507&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Attributes.vue?vue&type=template&id=716f4507&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_template_id_716f4507_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Attributes_vue_vue_type_template_id_716f4507_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/main/CallUs.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pages/main/CallUs.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CallUs_vue_vue_type_template_id_4d313a68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CallUs.vue?vue&type=template&id=4d313a68&scoped=true& */ "./resources/js/components/pages/main/CallUs.vue?vue&type=template&id=4d313a68&scoped=true&");
/* harmony import */ var _CallUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CallUs.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/main/CallUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CallUs_vue_vue_type_style_index_0_id_4d313a68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CallUs.vue?vue&type=style&index=0&id=4d313a68&lang=scss&scoped=true& */ "./resources/js/components/pages/main/CallUs.vue?vue&type=style&index=0&id=4d313a68&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CallUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CallUs_vue_vue_type_template_id_4d313a68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CallUs_vue_vue_type_template_id_4d313a68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4d313a68",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/main/CallUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/main/CallUs.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/main/CallUs.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CallUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/CallUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/main/CallUs.vue?vue&type=style&index=0&id=4d313a68&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/CallUs.vue?vue&type=style&index=0&id=4d313a68&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_style_index_0_id_4d313a68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CallUs.vue?vue&type=style&index=0&id=4d313a68&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/CallUs.vue?vue&type=style&index=0&id=4d313a68&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_style_index_0_id_4d313a68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_style_index_0_id_4d313a68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_style_index_0_id_4d313a68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_style_index_0_id_4d313a68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/main/CallUs.vue?vue&type=template&id=4d313a68&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/CallUs.vue?vue&type=template&id=4d313a68&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_template_id_4d313a68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CallUs.vue?vue&type=template&id=4d313a68&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/CallUs.vue?vue&type=template&id=4d313a68&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_template_id_4d313a68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CallUs_vue_vue_type_template_id_4d313a68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/main/ExecutionProcess.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/pages/main/ExecutionProcess.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExecutionProcess_vue_vue_type_template_id_5ae3d9e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExecutionProcess.vue?vue&type=template&id=5ae3d9e7&scoped=true& */ "./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=template&id=5ae3d9e7&scoped=true&");
/* harmony import */ var _ExecutionProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExecutionProcess.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExecutionProcess_vue_vue_type_style_index_0_id_5ae3d9e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExecutionProcess.vue?vue&type=style&index=0&id=5ae3d9e7&lang=scss&scoped=true& */ "./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=style&index=0&id=5ae3d9e7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExecutionProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExecutionProcess_vue_vue_type_template_id_5ae3d9e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExecutionProcess_vue_vue_type_template_id_5ae3d9e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ae3d9e7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/main/ExecutionProcess.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutionProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExecutionProcess.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutionProcess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=style&index=0&id=5ae3d9e7&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=style&index=0&id=5ae3d9e7&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutionProcess_vue_vue_type_style_index_0_id_5ae3d9e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExecutionProcess.vue?vue&type=style&index=0&id=5ae3d9e7&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=style&index=0&id=5ae3d9e7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutionProcess_vue_vue_type_style_index_0_id_5ae3d9e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutionProcess_vue_vue_type_style_index_0_id_5ae3d9e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutionProcess_vue_vue_type_style_index_0_id_5ae3d9e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutionProcess_vue_vue_type_style_index_0_id_5ae3d9e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=template&id=5ae3d9e7&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=template&id=5ae3d9e7&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutionProcess_vue_vue_type_template_id_5ae3d9e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExecutionProcess.vue?vue&type=template&id=5ae3d9e7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/ExecutionProcess.vue?vue&type=template&id=5ae3d9e7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutionProcess_vue_vue_type_template_id_5ae3d9e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutionProcess_vue_vue_type_template_id_5ae3d9e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/main/Opinions.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/main/Opinions.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Opinions_vue_vue_type_template_id_356b21e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Opinions.vue?vue&type=template&id=356b21e1&scoped=true& */ "./resources/js/components/pages/main/Opinions.vue?vue&type=template&id=356b21e1&scoped=true&");
/* harmony import */ var _Opinions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Opinions.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/main/Opinions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Opinions_vue_vue_type_style_index_0_id_356b21e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Opinions.vue?vue&type=style&index=0&id=356b21e1&lang=scss&scoped=true& */ "./resources/js/components/pages/main/Opinions.vue?vue&type=style&index=0&id=356b21e1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Opinions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Opinions_vue_vue_type_template_id_356b21e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Opinions_vue_vue_type_template_id_356b21e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "356b21e1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/main/Opinions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/main/Opinions.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/main/Opinions.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Opinions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Opinions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Opinions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Opinions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/main/Opinions.vue?vue&type=style&index=0&id=356b21e1&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/Opinions.vue?vue&type=style&index=0&id=356b21e1&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Opinions_vue_vue_type_style_index_0_id_356b21e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Opinions.vue?vue&type=style&index=0&id=356b21e1&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Opinions.vue?vue&type=style&index=0&id=356b21e1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Opinions_vue_vue_type_style_index_0_id_356b21e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Opinions_vue_vue_type_style_index_0_id_356b21e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Opinions_vue_vue_type_style_index_0_id_356b21e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Opinions_vue_vue_type_style_index_0_id_356b21e1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/main/Opinions.vue?vue&type=template&id=356b21e1&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/Opinions.vue?vue&type=template&id=356b21e1&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Opinions_vue_vue_type_template_id_356b21e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Opinions.vue?vue&type=template&id=356b21e1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Opinions.vue?vue&type=template&id=356b21e1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Opinions_vue_vue_type_template_id_356b21e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Opinions_vue_vue_type_template_id_356b21e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/main/Services.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/main/Services.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_vue_vue_type_template_id_c61fd2e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services.vue?vue&type=template&id=c61fd2e4&scoped=true& */ "./resources/js/components/pages/main/Services.vue?vue&type=template&id=c61fd2e4&scoped=true&");
/* harmony import */ var _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/main/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Services_vue_vue_type_style_index_0_id_c61fd2e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.vue?vue&type=style&index=0&id=c61fd2e4&lang=scss&scoped=true& */ "./resources/js/components/pages/main/Services.vue?vue&type=style&index=0&id=c61fd2e4&lang=scss&scoped=true&");
/* harmony import */ var _Services_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/components/pages/main/Services.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Services_vue_vue_type_template_id_c61fd2e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Services_vue_vue_type_template_id_c61fd2e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c61fd2e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/main/Services.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/main/Services.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/main/Services.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/main/Services.vue?vue&type=style&index=0&id=c61fd2e4&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/Services.vue?vue&type=style&index=0&id=c61fd2e4&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_c61fd2e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=0&id=c61fd2e4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Services.vue?vue&type=style&index=0&id=c61fd2e4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_c61fd2e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_c61fd2e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_c61fd2e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_c61fd2e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/main/Services.vue?vue&type=style&index=1&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/main/Services.vue?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Services.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/main/Services.vue?vue&type=template&id=c61fd2e4&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/Services.vue?vue&type=template&id=c61fd2e4&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_c61fd2e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=template&id=c61fd2e4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Services.vue?vue&type=template&id=c61fd2e4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_c61fd2e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_c61fd2e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/main/Slider.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pages/main/Slider.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider_vue_vue_type_template_id_8d4d68de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider.vue?vue&type=template&id=8d4d68de&scoped=true& */ "./resources/js/components/pages/main/Slider.vue?vue&type=template&id=8d4d68de&scoped=true&");
/* harmony import */ var _Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/main/Slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Slider_vue_vue_type_style_index_0_id_8d4d68de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.vue?vue&type=style&index=0&id=8d4d68de&scoped=true&lang=scss& */ "./resources/js/components/pages/main/Slider.vue?vue&type=style&index=0&id=8d4d68de&scoped=true&lang=scss&");
/* harmony import */ var _Slider_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slider.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/components/pages/main/Slider.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Slider_vue_vue_type_template_id_8d4d68de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Slider_vue_vue_type_template_id_8d4d68de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8d4d68de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/main/Slider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/main/Slider.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/main/Slider.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/main/Slider.vue?vue&type=style&index=0&id=8d4d68de&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/Slider.vue?vue&type=style&index=0&id=8d4d68de&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_8d4d68de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=style&index=0&id=8d4d68de&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Slider.vue?vue&type=style&index=0&id=8d4d68de&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_8d4d68de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_8d4d68de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_8d4d68de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_8d4d68de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/main/Slider.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pages/main/Slider.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Slider.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/main/Slider.vue?vue&type=template&id=8d4d68de&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/Slider.vue?vue&type=template&id=8d4d68de&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_8d4d68de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=template&id=8d4d68de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/Slider.vue?vue&type=template&id=8d4d68de&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_8d4d68de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_8d4d68de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/main/SolarSystem.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/pages/main/SolarSystem.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SolarSystem_vue_vue_type_template_id_f0e8bf60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SolarSystem.vue?vue&type=template&id=f0e8bf60&scoped=true& */ "./resources/js/components/pages/main/SolarSystem.vue?vue&type=template&id=f0e8bf60&scoped=true&");
/* harmony import */ var _SolarSystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SolarSystem.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/main/SolarSystem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SolarSystem_vue_vue_type_style_index_0_id_f0e8bf60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SolarSystem.vue?vue&type=style&index=0&id=f0e8bf60&lang=scss&scoped=true& */ "./resources/js/components/pages/main/SolarSystem.vue?vue&type=style&index=0&id=f0e8bf60&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SolarSystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SolarSystem_vue_vue_type_template_id_f0e8bf60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SolarSystem_vue_vue_type_template_id_f0e8bf60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f0e8bf60",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/main/SolarSystem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/main/SolarSystem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/main/SolarSystem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SolarSystem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/SolarSystem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/main/SolarSystem.vue?vue&type=style&index=0&id=f0e8bf60&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/SolarSystem.vue?vue&type=style&index=0&id=f0e8bf60&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystem_vue_vue_type_style_index_0_id_f0e8bf60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SolarSystem.vue?vue&type=style&index=0&id=f0e8bf60&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/SolarSystem.vue?vue&type=style&index=0&id=f0e8bf60&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystem_vue_vue_type_style_index_0_id_f0e8bf60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystem_vue_vue_type_style_index_0_id_f0e8bf60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystem_vue_vue_type_style_index_0_id_f0e8bf60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystem_vue_vue_type_style_index_0_id_f0e8bf60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pages/main/SolarSystem.vue?vue&type=template&id=f0e8bf60&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/pages/main/SolarSystem.vue?vue&type=template&id=f0e8bf60&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystem_vue_vue_type_template_id_f0e8bf60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SolarSystem.vue?vue&type=template&id=f0e8bf60&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/main/SolarSystem.vue?vue&type=template&id=f0e8bf60&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystem_vue_vue_type_template_id_f0e8bf60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolarSystem_vue_vue_type_template_id_f0e8bf60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/links/slug.js":
/*!********************************************!*\
  !*** ./resources/js/helpers/links/slug.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slug; });
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function slug(title) {
  var search = ['ą', 'ć', 'ś', 'ó', 'ż', 'ź', 'ę', 'ł', 'ń', ' ', '?', '!', '(', ')', '.', ',', '/'];
  var replace = ['a', 'c', 's', 'o', 'z', 'z', 'e', 'l', 'n', '-', '', '', '', '', '', '', ''];
  var sluggedTitle = '';

  var _iterator = _createForOfIteratorHelper(title),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var letter = _step.value;

      if (search.includes(letter)) {
        var indexOfSearch = search.indexOf(letter);
        letter = replace[indexOfSearch];
      }

      sluggedTitle += letter;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return sluggedTitle.toLowerCase();
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

/***/ "./resources/js/views/public/Main.vue":
/*!********************************************!*\
  !*** ./resources/js/views/public/Main.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_9392bbe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=9392bbe0&scoped=true& */ "./resources/js/views/public/Main.vue?vue&type=template&id=9392bbe0&scoped=true&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/views/public/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_9392bbe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_9392bbe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9392bbe0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/public/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/public/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/public/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/public/Main.vue?vue&type=template&id=9392bbe0&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/public/Main.vue?vue&type=template&id=9392bbe0&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_9392bbe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=9392bbe0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Main.vue?vue&type=template&id=9392bbe0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_9392bbe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_9392bbe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);