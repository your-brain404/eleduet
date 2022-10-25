(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Services.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Services.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pages_services_CallUs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/pages/services/CallUs */ "./resources/js/components/pages/services/CallUs.vue");
/* harmony import */ var _helpers_links_slug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/links/slug */ "./resources/js/helpers/links/slug.js");
/* harmony import */ var _components_picture_Picture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/picture/Picture */ "./resources/js/components/picture/Picture.vue");
/* harmony import */ var _mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mixins/admin-table-component */ "./resources/js/mixins/admin-table-component.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_admin_table_component__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    CallUs: _components_pages_services_CallUs__WEBPACK_IMPORTED_MODULE_0__["default"],
    Picture: _components_picture_Picture__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      origin: window.location.origin,
      table: "services",
      styleText: ".guarantee ul li::before { background-image:\n                url(".concat(origin, "/storage/img/layout/clef.png) }")
    };
  },
  methods: {
    slug: _helpers_links_slug__WEBPACK_IMPORTED_MODULE_1__["default"],
    prepareBlockHtml: function prepareBlockHtml(text) {
      return text.replace("{", "<b>").replace("}", "</b>");
    },
    prepareTitle: function prepareTitle(title) {
      return title === null || title === void 0 ? void 0 : title.replace("{", "<span>").replace("}", "</span>");
    },
    filterServices: function filterServices(serviceCategoryId) {
      var _this$services;

      var categoryServices = this.servicesServiceCategories.filter(function (row) {
        return row.service_category_id == serviceCategoryId;
      }).map(function (row) {
        return row.service_id;
      });
      return (_this$services = this.services) === null || _this$services === void 0 ? void 0 : _this$services.filter(function (service) {
        return categoryServices.includes(service.id);
      });
    }
  },
  computed: {
    services: function services() {
      var _this$$store$state$Se;

      return ((_this$$store$state$Se = this.$store.state.Services) === null || _this$$store$state$Se === void 0 ? void 0 : _this$$store$state$Se.services) || [];
    },
    tableData: function tableData() {
      return this.services;
    },
    servicesPageDesc: function servicesPageDesc() {
      var _this$$store$state$Se2;

      return ((_this$$store$state$Se2 = this.$store.state.ServicesPageDesc) === null || _this$$store$state$Se2 === void 0 ? void 0 : _this$$store$state$Se2.servicesPageDesc) || {};
    },
    servicesAttributes: function servicesAttributes() {
      var _this$$store$state$Se3;

      return ((_this$$store$state$Se3 = this.$store.state.ServicesAttributes) === null || _this$$store$state$Se3 === void 0 ? void 0 : _this$$store$state$Se3.servicesAttributes) || [];
    },
    serviceCategories: function serviceCategories() {
      var _this$$store$state$Se4;

      return ((_this$$store$state$Se4 = this.$store.state.ServiceCategories) === null || _this$$store$state$Se4 === void 0 ? void 0 : _this$$store$state$Se4.serviceCategories) || [];
    },
    servicesServiceCategories: function servicesServiceCategories() {
      var _this$$store$state$Se5;

      return ((_this$$store$state$Se5 = this.$store.state.ServicesServiceCategories) === null || _this$$store$state$Se5 === void 0 ? void 0 : _this$$store$state$Se5.servicesServiceCategories) || [];
    }
  },
  created: function created() {
    this.registerModule("serviceCategories");
    this.registerModule("servicesServiceCategories");
    this.registerModule("servicesPageDesc");
    this.registerModule("servicesAttributes");
    if (this.serviceCategories.length === 0) this.$store.dispatch("ServiceCategories/serviceCategories");
    if (this.servicesServiceCategories.length === 0) this.$store.dispatch("ServicesServiceCategories/servicesServiceCategories");
    if (Object.values(this.servicesPageDesc).length === 0) this.$store.dispatch("ServicesPageDesc/servicesPageDesc");
    if (this.servicesAttributes.length === 0) this.$store.dispatch("ServicesAttributes/servicesAttributes");
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Services.vue?vue&type=style&index=0&id=3ac99ab5&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Services.vue?vue&type=style&index=0&id=3ac99ab5&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-3ac99ab5] section.about .photo-container .ellipse {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transform: translate(-50%, 50%);\n  height: 170px;\n  z-index: 0;\n}\n[data-v-3ac99ab5] section.about .photo {\n  position: relative;\n  z-index: 2;\n  height: 160px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-bottom-left-radius: var(--global-border-radius);\n  border-top-left-radius: var(--global-border-radius);\n}\n@media (max-width: 992px) {\n[data-v-3ac99ab5] section.about .photo {\n    margin-top: 3rem;\n}\n}\n[data-v-3ac99ab5] .section-content .bolt {\n  height: 75px;\n  padding-right: 1.3rem;\n}\n@media (max-width: 400px) {\n[data-v-3ac99ab5] .section-content .bolt {\n    margin-bottom: 0.5rem;\n}\n}\n[data-v-3ac99ab5] .services-blocks .photo {\n  width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 12px;\n  margin-bottom: 1rem;\n}\nsection.services-page .section-content[data-v-3ac99ab5] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 400px) {\nsection.services-page .section-content[data-v-3ac99ab5] {\n    flex-direction: column;\n}\n}\nsection.services-page section.about[data-v-3ac99ab5] {\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: 7rem;\n  z-index: 1;\n}\nsection.services-page section.about .content[data-v-3ac99ab5],\nsection.services-page section.about .photo-container[data-v-3ac99ab5] {\n  width: 50%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n@media (max-width: 992px) {\nsection.services-page section.about .content[data-v-3ac99ab5],\nsection.services-page section.about .photo-container[data-v-3ac99ab5] {\n    width: 100%;\n}\n}\nsection.services-page section.about .content[data-v-3ac99ab5] {\n  padding-left: var(--global-padding-x-desktop);\n  z-index: 3;\n}\n@media (max-width: 992px) {\nsection.services-page section.about .content[data-v-3ac99ab5] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.services-page section.about .content .section-content[data-v-3ac99ab5] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 400px) {\nsection.services-page section.about .content .section-content[data-v-3ac99ab5] {\n    flex-direction: column;\n}\n}\nsection.services-page section.about .content .section-content .bolt[data-v-3ac99ab5] {\n  height: 75px;\n  padding-right: 1.3rem;\n}\n@media (max-width: 400px) {\nsection.services-page section.about .content .section-content .bolt[data-v-3ac99ab5] {\n    margin-bottom: 0.5rem;\n}\n}\nsection.services-page section.about .content .short-description[data-v-3ac99ab5] {\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 17px;\n  margin-top: 1rem;\n}\nsection.services-page section.about .content a.phone-link[data-v-3ac99ab5] {\n  display: flex;\n  margin-top: 3rem;\n  box-shadow: 0px 10px 40px #0000000f;\n  border-radius: var(--global-border-radius);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 1rem 2rem;\n  transition: 0.2s background-color;\n}\n@media (max-width: 400px) {\nsection.services-page section.about .content a.phone-link[data-v-3ac99ab5] {\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n}\nsection.services-page section.about .content a.phone-link[data-v-3ac99ab5]:hover {\n  background-color: var(--first-color);\n}\nsection.services-page section.about .content a.phone-link:hover .phone-content[data-v-3ac99ab5],\nsection.services-page section.about .content a.phone-link:hover .phone-content span[data-v-3ac99ab5] {\n  color: white;\n}\nsection.services-page section.about .content a.phone-link .icon-container[data-v-3ac99ab5] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 0px 10px 40px #0000000f;\n}\nsection.services-page section.about .content a.phone-link .icon-container img[data-v-3ac99ab5] {\n  height: 20px;\n}\nsection.services-page section.about .content a.phone-link .phone-content[data-v-3ac99ab5] {\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n  line-height: 26px;\n  padding-left: 2rem;\n  color: black;\n}\n@media (max-width: 400px) {\nsection.services-page section.about .content a.phone-link .phone-content[data-v-3ac99ab5] {\n    padding-left: 0;\n    margin-top: 1rem;\n    width: 100%;\n}\n}\nsection.services-page section.about .content a.phone-link .phone-content span[data-v-3ac99ab5] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #333333;\n}\nsection.services-page .guarantee[data-v-3ac99ab5] {\n  position: relative;\n  z-index: 1;\n  margin-top: 3rem;\n  padding-left: var(--global-padding-x-desktop);\n  padding-right: var(--global-padding-x-desktop);\n}\n@media (max-width: 992px) {\nsection.services-page .guarantee[data-v-3ac99ab5] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.services-page .skills-blocks[data-v-3ac99ab5] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  margin-top: 4rem;\n  padding-left: var(--global-padding-x-desktop);\n  padding-right: var(--global-padding-x-desktop);\n}\n@media (max-width: 992px) {\nsection.services-page .skills-blocks[data-v-3ac99ab5] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.services-page .skills-blocks .block[data-v-3ac99ab5] {\n  width: 50%;\n  margin-bottom: 1rem;\n}\n@media (min-width: 992px) {\nsection.services-page .skills-blocks .block[data-v-3ac99ab5]:nth-child(2n+1) {\n    padding-right: 0.25rem;\n}\nsection.services-page .skills-blocks .block[data-v-3ac99ab5]:nth-child(2n+2) {\n    padding-left: 0.25rem;\n}\n}\n@media (max-width: 992px) {\nsection.services-page .skills-blocks .block[data-v-3ac99ab5] {\n    width: 100%;\n}\n}\nsection.services-page .skills-blocks .block .content[data-v-3ac99ab5] {\n  padding: 2rem;\n  box-shadow: 0px 10px 40px #0000000f;\n  font-size: 1rem;\n  font-weight: 500;\n  height: 100%;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  border-radius: 20px;\n}\n@media (max-width: 992px) {\nsection.services-page .skills-blocks .block .content[data-v-3ac99ab5] {\n    width: 100%;\n}\n}\nsection.services-page .services-blocks[data-v-3ac99ab5] {\n  position: relative;\n  margin-top: 5rem;\n  z-index: 2;\n  padding-right: var(--global-padding-x-desktop);\n  padding-left: var(--global-padding-x-desktop);\n}\n@media (max-width: 992px) {\nsection.services-page .services-blocks[data-v-3ac99ab5] {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.services-page .services-blocks .content[data-v-3ac99ab5] {\n  margin-bottom: 1rem;\n}\nsection.services-page .services-blocks .blocks[data-v-3ac99ab5] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n}\nsection.services-page .services-blocks .blocks .block[data-v-3ac99ab5] {\n  width: 25%;\n  padding: 0.3rem;\n}\n@media (max-width: 992px) {\nsection.services-page .services-blocks .blocks .block[data-v-3ac99ab5] {\n    width: 100%;\n}\n}\n@media (min-width: 992px) {\nsection.services-page .services-blocks .blocks .block[data-v-3ac99ab5]:nth-child(4n-3) {\n    padding-left: 0;\n}\nsection.services-page .services-blocks .blocks .block[data-v-3ac99ab5]:nth-child(4n) {\n    padding-right: 0;\n}\n}\nsection.services-page .services-blocks .blocks .block .wrapper[data-v-3ac99ab5] {\n  border-radius: 12px;\n  box-shadow: 0px 10px 40px #0000000f;\n  height: 100%;\n  padding: 1rem;\n  background-color: white;\n  display: block;\n}\nsection.services-page .services-blocks .blocks .block .wrapper .service-title[data-v-3ac99ab5] {\n  font-weight: 900;\n  color: black;\n}\nsection.services-page .services-blocks .description[data-v-3ac99ab5] {\n  margin-top: 2rem;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: black;\n}\nsection.services-page .call-us[data-v-3ac99ab5] {\n  margin-top: 5rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Services.vue?vue&type=style&index=1&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Services.vue?vue&type=style&index=1&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".guarantee h3 {\n  color: var(--first-color);\n  font-weight: 700;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\nul {\n  padding-left: 0;\n  list-style-type: none;\n  line-height: 24px;\n}\nul li {\n  display: flex;\n  font-weight: 500;\n  align-items: center;\n  font-size: 1.2rem;\n}\nul li::before {\n  content: \"....\";\n  color: white;\n  display: block;\n  background-image: url(\"/storage/img/layout/clef.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 9px;\n  height: 21px;\n  margin-right: 1rem;\n}\n.skills-blocks .block b {\n  color: var(--first-color);\n  font-weight: 700;\n  font-size: 1.6rem;\n  line-height: 25px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Services.vue?vue&type=style&index=0&id=3ac99ab5&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Services.vue?vue&type=style&index=0&id=3ac99ab5&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=0&id=3ac99ab5&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Services.vue?vue&type=style&index=0&id=3ac99ab5&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Services.vue?vue&type=style&index=1&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Services.vue?vue&type=style&index=1&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Services.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Services.vue?vue&type=template&id=3ac99ab5&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/public/Services.vue?vue&type=template&id=3ac99ab5&scoped=true& ***!
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
    "section",
    { staticClass: "services-page" },
    [
      Object.entries(_vm.servicesPageDesc).length > 0
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
                      innerHTML: _vm._s(
                        _vm.prepareTitle(_vm.servicesPageDesc.title)
                      )
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "short-description",
                domProps: {
                  innerHTML: _vm._s(_vm.servicesPageDesc.short_description)
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "position-relative photo-container" },
              [
                _c("Picture", {
                  attrs: {
                    width: _vm.servicesPageDesc.photo_sizes.width,
                    height: _vm.servicesPageDesc.photo_sizes.height,
                    alt: _vm.servicesPageDesc.photo_alt,
                    src:
                      _vm.origin +
                      "/storage/media/" +
                      _vm.servicesPageDesc.photo,
                    classImg: "photo bg",
                    styleImg: {
                      "object-position":
                        _vm.servicesPageDesc.photo_background_position
                    }
                  }
                }),
                _vm._v(" "),
                _vm.servicesPageDesc.photo
                  ? _c("Picture", {
                      attrs: {
                        width: 170,
                        height: 170,
                        alt: "elipsa",
                        src: _vm.origin + "/storage/img/home/ellipse1.svg",
                        classImg: "ellipse"
                      }
                    })
                  : _vm._e()
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", {
        staticClass: "guarantee",
        domProps: { innerHTML: _vm._s(_vm.servicesPageDesc.description) }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "skills-blocks" },
        _vm._l(_vm.servicesAttributes, function(attribute) {
          return _c(
            "div",
            { key: "service-attribute-" + attribute.id, staticClass: "block" },
            [
              _c("div", {
                staticClass: "content",
                domProps: {
                  innerHTML: _vm._s(_vm.prepareBlockHtml(attribute.title))
                }
              })
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _vm._l(_vm.serviceCategories, function(serviceCategory) {
        return _c(
          "div",
          {
            key: "service-category-" + serviceCategory.title,
            staticClass: "services-blocks"
          },
          [
            _c("div", { staticClass: "content" }, [
              _c(
                "div",
                { staticClass: "section-content" },
                [
                  _c("Picture", {
                    attrs: {
                      width: "auto",
                      height: 75,
                      alt: "marker",
                      src:
                        _vm.origin +
                        "/storage/media/" +
                        _vm.$store.state.Settings.settings.li_marker,
                      classImg: "bolt"
                    }
                  }),
                  _vm._v(" "),
                  _c("h3", {
                    staticClass: "section-title",
                    domProps: {
                      innerHTML: _vm._s(_vm.prepareTitle(serviceCategory.title))
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "blocks" },
              _vm._l(_vm.filterServices(serviceCategory.id), function(
                service,
                i
              ) {
                return _c(
                  "div",
                  { key: "company-service-" + i, staticClass: "block" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "wrapper",
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
                            width: 240,
                            height: 200,
                            alt: service.photo_alt,
                            src: _vm.origin + "/storage/media/" + service.photo,
                            classImg: "photo",
                            styleImg: {
                              "object-position":
                                service.photo_background_position
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "service-title" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(service.title) +
                              "\n          "
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              }),
              0
            ),
            _vm._v(" "),
            serviceCategory.description
              ? _c("div", {
                  staticClass: "description",
                  domProps: { innerHTML: _vm._s(serviceCategory.description) }
                })
              : _vm._e()
          ]
        )
      }),
      _vm._v(" "),
      _c("CallUs")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/views/public/Services.vue":
/*!************************************************!*\
  !*** ./resources/js/views/public/Services.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_vue_vue_type_template_id_3ac99ab5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services.vue?vue&type=template&id=3ac99ab5&scoped=true& */ "./resources/js/views/public/Services.vue?vue&type=template&id=3ac99ab5&scoped=true&");
/* harmony import */ var _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services.vue?vue&type=script&lang=js& */ "./resources/js/views/public/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Services_vue_vue_type_style_index_0_id_3ac99ab5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.vue?vue&type=style&index=0&id=3ac99ab5&lang=scss&scoped=true& */ "./resources/js/views/public/Services.vue?vue&type=style&index=0&id=3ac99ab5&lang=scss&scoped=true&");
/* harmony import */ var _Services_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/views/public/Services.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Services_vue_vue_type_template_id_3ac99ab5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Services_vue_vue_type_template_id_3ac99ab5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ac99ab5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/public/Services.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/public/Services.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/public/Services.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/public/Services.vue?vue&type=style&index=0&id=3ac99ab5&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/public/Services.vue?vue&type=style&index=0&id=3ac99ab5&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_3ac99ab5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=0&id=3ac99ab5&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Services.vue?vue&type=style&index=0&id=3ac99ab5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_3ac99ab5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_3ac99ab5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_3ac99ab5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_3ac99ab5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/public/Services.vue?vue&type=style&index=1&lang=scss&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/public/Services.vue?vue&type=style&index=1&lang=scss& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Services.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/public/Services.vue?vue&type=template&id=3ac99ab5&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/public/Services.vue?vue&type=template&id=3ac99ab5&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_3ac99ab5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=template&id=3ac99ab5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/public/Services.vue?vue&type=template&id=3ac99ab5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_3ac99ab5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_3ac99ab5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);