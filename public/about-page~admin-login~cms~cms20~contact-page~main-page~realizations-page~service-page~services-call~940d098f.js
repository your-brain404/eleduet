(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-page~admin-login~cms~cms20~contact-page~main-page~realizations-page~service-page~services-call~940d098f"],{

/***/ "./resources/js/helpers/store/get-module.js":
/*!**************************************************!*\
  !*** ./resources/js/helpers/store/get-module.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getModule; });
function getModule(name) {
  return __webpack_require__("./resources/js/store/modules sync recursive ^\\.\\/.*Module\\.js$")("./".concat(name, "/").concat(name, "Module.js"))["default"];
}

/***/ }),

/***/ "./resources/js/store/modules sync recursive ^\\.\\/.*Module\\.js$":
/*!************************************************************!*\
  !*** ./resources/js/store/modules sync ^\.\/.*Module\.js$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about/aboutModule.js": "./resources/js/store/modules/about/aboutModule.js",
	"./aboutPage/aboutPageModule.js": "./resources/js/store/modules/aboutPage/aboutPageModule.js",
	"./attributes/attributesModule.js": "./resources/js/store/modules/attributes/attributesModule.js",
	"./attributesDesc/attributesDescModule.js": "./resources/js/store/modules/attributesDesc/attributesDescModule.js",
	"./contactLinks/contactLinksModule.js": "./resources/js/store/modules/contactLinks/contactLinksModule.js",
	"./currentServiceCategories/currentServiceCategoriesModule.js": "./resources/js/store/modules/currentServiceCategories/currentServiceCategoriesModule.js",
	"./example/exampleModule.js": "./resources/js/store/modules/example/exampleModule.js",
	"./executionProcess/executionProcessModule.js": "./resources/js/store/modules/executionProcess/executionProcessModule.js",
	"./executionProcessDesc/executionProcessDescModule.js": "./resources/js/store/modules/executionProcessDesc/executionProcessDescModule.js",
	"./formService/formServiceModule.js": "./resources/js/store/modules/formService/formServiceModule.js",
	"./homeCallUs/homeCallUsModule.js": "./resources/js/store/modules/homeCallUs/homeCallUsModule.js",
	"./homeServices/homeServicesModule.js": "./resources/js/store/modules/homeServices/homeServicesModule.js",
	"./homeServicesDesc/homeServicesDescModule.js": "./resources/js/store/modules/homeServicesDesc/homeServicesDescModule.js",
	"./homeSolarSystemDesc/homeSolarSystemDescModule.js": "./resources/js/store/modules/homeSolarSystemDesc/homeSolarSystemDescModule.js",
	"./languages/languagesModule.js": "./resources/js/store/modules/languages/languagesModule.js",
	"./opinions/opinionsModule.js": "./resources/js/store/modules/opinions/opinionsModule.js",
	"./opinionsDesc/opinionsDescModule.js": "./resources/js/store/modules/opinionsDesc/opinionsDescModule.js",
	"./realizations/realizationsModule.js": "./resources/js/store/modules/realizations/realizationsModule.js",
	"./service/serviceModule.js": "./resources/js/store/modules/service/serviceModule.js",
	"./serviceCategories/serviceCategoriesModule.js": "./resources/js/store/modules/serviceCategories/serviceCategoriesModule.js",
	"./services/servicesModule.js": "./resources/js/store/modules/services/servicesModule.js",
	"./servicesAttributes/servicesAttributesModule.js": "./resources/js/store/modules/servicesAttributes/servicesAttributesModule.js",
	"./servicesCallUs/servicesCallUsModule.js": "./resources/js/store/modules/servicesCallUs/servicesCallUsModule.js",
	"./servicesPageDesc/servicesPageDescModule.js": "./resources/js/store/modules/servicesPageDesc/servicesPageDescModule.js",
	"./servicesServiceCategories/servicesServiceCategoriesModule.js": "./resources/js/store/modules/servicesServiceCategories/servicesServiceCategoriesModule.js",
	"./slider/sliderModule.js": "./resources/js/store/modules/slider/sliderModule.js",
	"./snackbarAlerts/snackbarAlertsModule.js": "./resources/js/store/modules/snackbarAlerts/snackbarAlertsModule.js",
	"./solarSystem/solarSystemModule.js": "./resources/js/store/modules/solarSystem/solarSystemModule.js",
	"./solarSystemCallUs/solarSystemCallUsModule.js": "./resources/js/store/modules/solarSystemCallUs/solarSystemCallUsModule.js",
	"./translations/translationsModule.js": "./resources/js/store/modules/translations/translationsModule.js",
	"./validationRules/validationRulesModule.js": "./resources/js/store/modules/validationRules/validationRulesModule.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/store/modules sync recursive ^\\.\\/.*Module\\.js$";

/***/ }),

/***/ "./resources/js/store/modules/about/aboutModule.js":
/*!*********************************************************!*\
  !*** ./resources/js/store/modules/about/aboutModule.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router_routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router/routes.js */ "./resources/js/router/routes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    about: window.global.cms.homePage.about || {}
  },
  getters: {
    about: function about(state) {
      return state.about;
    }
  },
  mutations: {
    about: function about(state, _about) {
      return state.about = _about;
    }
  },
  actions: {
    about: function about(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return _router_routes_js__WEBPACK_IMPORTED_MODULE_2__["default"];

              case 3:
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/about/get_one/1").then(function (res) {
                  commit("about", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować sekcji pod sliderem...");
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/aboutPage/aboutPageModule.js":
/*!*****************************************************************!*\
  !*** ./resources/js/store/modules/aboutPage/aboutPageModule.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: false,
  state: {
    aboutPage: window.global.cms.aboutPage.aboutPage || {}
  },
  getters: {
    aboutPage: function aboutPage(state) {
      return state.aboutPage;
    }
  },
  mutations: {
    aboutPage: function aboutPage(state, _aboutPage) {
      return state.aboutPage = _aboutPage;
    }
  },
  actions: {
    aboutPage: function aboutPage(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/about_page/get_one/1").then(function (res) {
                  commit("aboutPage", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/attributes/attributesModule.js":
/*!*******************************************************************!*\
  !*** ./resources/js/store/modules/attributes/attributesModule.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    attributes: window.global.cms.homePage.attributes || []
  },
  getters: {
    attributes: function attributes(state) {
      return state.attributes;
    }
  },
  mutations: {
    attributes: function attributes(state, _attributes) {
      return state.attributes = _attributes;
    }
  },
  actions: {
    attributes: function attributes(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/attributes/get_all").then(function (res) {
                  commit("attributes", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/attributesDesc/attributesDescModule.js":
/*!***************************************************************************!*\
  !*** ./resources/js/store/modules/attributesDesc/attributesDescModule.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    attributesDesc: window.global.cms.homePage.attributesDesc || {}
  },
  getters: {
    attributesDesc: function attributesDesc(state) {
      return state.attributesDesc;
    }
  },
  mutations: {
    attributesDesc: function attributesDesc(state, _attributesDesc) {
      return state.attributesDesc = _attributesDesc;
    }
  },
  actions: {
    attributesDesc: function attributesDesc(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/attributes_desc/get_one/1").then(function (res) {
                  commit("attributesDesc", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/contactLinks/contactLinksModule.js":
/*!***********************************************************************!*\
  !*** ./resources/js/store/modules/contactLinks/contactLinksModule.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    contactLinks: window.global.cms.contactPage.contactLinks || []
  },
  getters: {
    contactLinks: function contactLinks(state) {
      return state.contactLinks;
    }
  },
  mutations: {
    contactLinks: function contactLinks(state, _contactLinks) {
      return state.contactLinks = _contactLinks;
    }
  },
  actions: {
    contactLinks: function contactLinks(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/contact_links/get_all").then(function (res) {
                  commit("contactLinks", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/currentServiceCategories/currentServiceCategoriesModule.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/store/modules/currentServiceCategories/currentServiceCategoriesModule.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    currentServiceCategories: []
  },
  getters: {
    currentServiceCategories: function currentServiceCategories(state) {
      return state.currentServiceCategories;
    }
  },
  mutations: {
    currentServiceCategories: function currentServiceCategories(state, _currentServiceCategories) {
      return state.currentServiceCategories = _currentServiceCategories;
    }
  },
  actions: {
    currentServiceCategories: function currentServiceCategories(_ref, serviceId) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit, rootGetters;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit, rootGetters = _ref.rootGetters;

                if (serviceId) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/services_service_categories/get_where?service_id=".concat(serviceId)).then(function (res) {
                  commit("currentServiceCategories", res.data);
                  commit("FormService/setCurrentObject", _objectSpread(_objectSpread({}, rootGetters["FormService/getCurrentObject"]), {}, {
                    service_categories: res.data.map(function (row) {
                      return row.service_category_id;
                    })
                  }), {
                    root: true
                  });
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych usługi...");
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/example/exampleModule.js":
/*!*************************************************************!*\
  !*** ./resources/js/store/modules/example/exampleModule.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    example: []
  },
  getters: {
    example: function example(state) {
      return state.example;
    }
  },
  mutations: {
    example: function example(state, _example) {
      return state.example = _example;
    }
  },
  actions: {
    example: function example(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/table_name/get_all").then(function (res) {
                  commit("example", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/executionProcess/executionProcessModule.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/store/modules/executionProcess/executionProcessModule.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    executionProcess: window.global.cms.homePage.executionProcess || []
  },
  getters: {
    executionProcess: function executionProcess(state) {
      return state.executionProcess;
    }
  },
  mutations: {
    executionProcess: function executionProcess(state, _executionProcess) {
      return state.executionProcess = _executionProcess;
    }
  },
  actions: {
    executionProcess: function executionProcess(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/execution_process/get_all").then(function (res) {
                  commit("executionProcess", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/executionProcessDesc/executionProcessDescModule.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/store/modules/executionProcessDesc/executionProcessDescModule.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    executionProcessDesc: window.global.cms.homePage.executionProcessDesc || {}
  },
  getters: {
    executionProcessDesc: function executionProcessDesc(state) {
      return state.executionProcessDesc;
    }
  },
  mutations: {
    executionProcessDesc: function executionProcessDesc(state, _executionProcessDesc) {
      return state.executionProcessDesc = _executionProcessDesc;
    }
  },
  actions: {
    executionProcessDesc: function executionProcessDesc(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/execution_process_desc/get_one/1").then(function (res) {
                  commit("executionProcessDesc", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/homeCallUs/homeCallUsModule.js":
/*!*******************************************************************!*\
  !*** ./resources/js/store/modules/homeCallUs/homeCallUsModule.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    homeCallUs: window.global.cms.homePage.homeCallUs || {}
  },
  getters: {
    homeCallUs: function homeCallUs(state) {
      return state.homeCallUs;
    }
  },
  mutations: {
    homeCallUs: function homeCallUs(state, _homeCallUs) {
      return state.homeCallUs = _homeCallUs;
    }
  },
  actions: {
    homeCallUs: function homeCallUs(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/home_call_us/get_one/1").then(function (res) {
                  commit("homeCallUs", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/homeServices/homeServicesModule.js":
/*!***********************************************************************!*\
  !*** ./resources/js/store/modules/homeServices/homeServicesModule.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    homeServices: window.global.cms.homePage.homeServices || []
  },
  getters: {
    homeServices: function homeServices(state) {
      return state.homeServices;
    }
  },
  mutations: {
    homeServices: function homeServices(state, _homeServices) {
      return state.homeServices = _homeServices;
    }
  },
  actions: {
    homeServices: function homeServices(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/services/get_where?home_page=1").then(function (res) {
                  commit("homeServices", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych usługi...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/homeServicesDesc/homeServicesDescModule.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/store/modules/homeServicesDesc/homeServicesDescModule.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    homeServicesDesc: window.global.cms.homePage.homeServicesDesc || {}
  },
  getters: {
    homeServicesDesc: function homeServicesDesc(state) {
      return state.homeServicesDesc;
    }
  },
  mutations: {
    homeServicesDesc: function homeServicesDesc(state, _homeServicesDesc) {
      return state.homeServicesDesc = _homeServicesDesc;
    }
  },
  actions: {
    homeServicesDesc: function homeServicesDesc(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/home_services_desc/get_one/1").then(function (res) {
                  commit("homeServicesDesc", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/homeSolarSystemDesc/homeSolarSystemDescModule.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/store/modules/homeSolarSystemDesc/homeSolarSystemDescModule.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    homeSolarSystemDesc: window.global.cms.homePage.homeSolarSystemDesc || {}
  },
  getters: {
    homeSolarSystemDesc: function homeSolarSystemDesc(state) {
      return state.homeSolarSystemDesc;
    }
  },
  mutations: {
    homeSolarSystemDesc: function homeSolarSystemDesc(state, _homeSolarSystemDesc) {
      return state.homeSolarSystemDesc = _homeSolarSystemDesc;
    }
  },
  actions: {
    homeSolarSystemDesc: function homeSolarSystemDesc(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/home_solar_system_desc/get_one/1").then(function (res) {
                  commit("homeSolarSystemDesc", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/languages/languagesModule.js":
/*!*****************************************************************!*\
  !*** ./resources/js/store/modules/languages/languagesModule.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    languages: window.global.config.languages || [],
    currentLanguage: window.global.config.currentLanguage || {},
    defaultPrefix: "pl"
  },
  getters: {
    languages: function languages(state) {
      return state.languages;
    },
    currentLanguage: function currentLanguage(state) {
      return state.currentLanguage;
    },
    getPrefix: function getPrefix(state) {
      return state.currentLanguage.prefix;
    }
  },
  mutations: {
    languages: function languages(state, _languages) {
      return state.languages = _languages;
    },
    currentLanguage: function currentLanguage(state, _currentLanguage) {
      return state.currentLanguage = _currentLanguage;
    }
  },
  actions: {
    languages: function languages(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/languages/get_all").then(function (res) {
                  commit("languages", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setCurrentLanguage: function setCurrentLanguage(_ref2, payload) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref2.commit;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/set_lang/".concat(payload.lang)).then(function (res) {
                  commit("currentLanguage", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się zmienić języka");
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/opinions/opinionsModule.js":
/*!***************************************************************!*\
  !*** ./resources/js/store/modules/opinions/opinionsModule.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    opinions: window.global.cms.homePage.opinions
  },
  getters: {
    opinions: function opinions(state) {
      return state.opinions;
    }
  },
  mutations: {
    opinions: function opinions(state, _opinions) {
      return state.opinions = _opinions;
    }
  },
  actions: {
    opinions: function opinions(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/opinions/get_all").then(function (res) {
                  commit("opinions", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/opinionsDesc/opinionsDescModule.js":
/*!***********************************************************************!*\
  !*** ./resources/js/store/modules/opinionsDesc/opinionsDescModule.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    opinionsDesc: window.global.cms.homePage.opinionsDesc || {}
  },
  getters: {
    opinionsDesc: function opinionsDesc(state) {
      return state.opinionsDesc;
    }
  },
  mutations: {
    opinionsDesc: function opinionsDesc(state, _opinionsDesc) {
      return state.opinionsDesc = _opinionsDesc;
    }
  },
  actions: {
    opinionsDesc: function opinionsDesc(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/opinions_desc/get_one/1").then(function (res) {
                  commit("opinionsDesc", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/realizations/realizationsModule.js":
/*!***********************************************************************!*\
  !*** ./resources/js/store/modules/realizations/realizationsModule.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router_routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router/routes.js */ "./resources/js/router/routes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    realizations: window.global.cms.realizationsPage.realizations || []
  },
  getters: {
    realizations: function realizations(state) {
      return state.realizations;
    }
  },
  mutations: {
    realizations: function realizations(state, _realizations) {
      return state.realizations = _realizations;
    }
  },
  actions: {
    realizations: function realizations(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return _router_routes_js__WEBPACK_IMPORTED_MODULE_2__["default"];

              case 3:
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/gallery/get_photos/realizations/1").then(function (res) {
                  commit("realizations", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować realizacji...");
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/service/serviceModule.js":
/*!*************************************************************!*\
  !*** ./resources/js/store/modules/service/serviceModule.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    service: window.global.cms.servicePage.service || {}
  },
  getters: {
    service: function service(state) {
      return state.service;
    }
  },
  mutations: {
    service: function service(state, _service) {
      return state.service = _service;
    }
  },
  actions: {
    service: function service(_ref, id) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/services/get_one/".concat(id)).then(function (res) {
                  commit("service", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych usługi...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/serviceCategories/serviceCategoriesModule.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/store/modules/serviceCategories/serviceCategoriesModule.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    serviceCategories: window.global.cms.servicesPage.serviceCategories || []
  },
  getters: {
    serviceCategories: function serviceCategories(state) {
      return state.serviceCategories;
    }
  },
  mutations: {
    serviceCategories: function serviceCategories(state, _serviceCategories) {
      return state.serviceCategories = _serviceCategories;
    }
  },
  actions: {
    serviceCategories: function serviceCategories(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/service_categories/get_all").then(function (res) {
                  commit("serviceCategories", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych usługi...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/services/servicesModule.js":
/*!***************************************************************!*\
  !*** ./resources/js/store/modules/services/servicesModule.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    services: window.global.cms.servicesPage.services || []
  },
  getters: {
    services: function services(state) {
      return state.services;
    }
  },
  mutations: {
    services: function services(state, _services) {
      return state.services = _services;
    }
  },
  actions: {
    services: function services(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/services/get_all").then(function (res) {
                  commit("services", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych usługi...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/servicesAttributes/servicesAttributesModule.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/store/modules/servicesAttributes/servicesAttributesModule.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    servicesAttributes: window.global.cms.servicesPage.servicesAttributes || []
  },
  getters: {
    servicesAttributes: function servicesAttributes(state) {
      return state.servicesAttributes;
    }
  },
  mutations: {
    servicesAttributes: function servicesAttributes(state, _servicesAttributes) {
      return state.servicesAttributes = _servicesAttributes;
    }
  },
  actions: {
    servicesAttributes: function servicesAttributes(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/services_attributes/get_all").then(function (res) {
                  commit("servicesAttributes", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/servicesCallUs/servicesCallUsModule.js":
/*!***************************************************************************!*\
  !*** ./resources/js/store/modules/servicesCallUs/servicesCallUsModule.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    servicesCallUs: window.global.cms.servicesPage.servicesCallUs || {}
  },
  getters: {
    servicesCallUs: function servicesCallUs(state) {
      return state.servicesCallUs;
    }
  },
  mutations: {
    servicesCallUs: function servicesCallUs(state, _servicesCallUs) {
      return state.servicesCallUs = _servicesCallUs;
    }
  },
  actions: {
    servicesCallUs: function servicesCallUs(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/services_call_us/get_one/1").then(function (res) {
                  commit("servicesCallUs", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/servicesPageDesc/servicesPageDescModule.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/store/modules/servicesPageDesc/servicesPageDescModule.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    servicesPageDesc: window.global.cms.servicesPage.servicesPageDesc || {}
  },
  getters: {
    servicesPageDesc: function servicesPageDesc(state) {
      return state.servicesPageDesc;
    }
  },
  mutations: {
    servicesPageDesc: function servicesPageDesc(state, _servicesPageDesc) {
      return state.servicesPageDesc = _servicesPageDesc;
    }
  },
  actions: {
    servicesPageDesc: function servicesPageDesc(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/services_page_desc/get_one/1").then(function (res) {
                  commit("servicesPageDesc", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/servicesServiceCategories/servicesServiceCategoriesModule.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/store/modules/servicesServiceCategories/servicesServiceCategoriesModule.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    servicesServiceCategories: window.global.cms.servicesPage.servicesServiceCategories || []
  },
  getters: {
    servicesServiceCategories: function servicesServiceCategories(state) {
      return state.servicesServiceCategories;
    }
  },
  mutations: {
    servicesServiceCategories: function servicesServiceCategories(state, _servicesServiceCategories) {
      return state.servicesServiceCategories = _servicesServiceCategories;
    }
  },
  actions: {
    servicesServiceCategories: function servicesServiceCategories(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/services_service_categories/get_all").then(function (res) {
                  commit("servicesServiceCategories", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych wiążących usługi z ich kategoriami...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/slider/sliderModule.js":
/*!***********************************************************!*\
  !*** ./resources/js/store/modules/slider/sliderModule.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router/routes */ "./resources/js/router/routes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    slider: window.global.cms.homePage.slider || []
  },
  mutations: {
    slider: function slider(state, _slider) {
      return state.slider = _slider;
    }
  },
  getters: {
    slider: function slider(state) {
      return state.slider;
    }
  },
  actions: {
    slider: function () {
      var _slider2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var commit, endpoint;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return _router_routes__WEBPACK_IMPORTED_MODULE_2__["default"];

              case 3:
                endpoint = "/api/slider/".concat(_router_routes__WEBPACK_IMPORTED_MODULE_2__["default"].history.current.meta.adminRoute ? "get_all" : "get_where?active=1");
                axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(endpoint).then(function (res) {
                  commit("loading", false, {
                    root: true
                  });
                  commit("slider", res.data);
                })["catch"](function (err) {
                  commit("loading", false, {
                    root: true
                  });
                  console.log(err);
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function slider(_x) {
        return _slider2.apply(this, arguments);
      }

      return slider;
    }()
  }
});

/***/ }),

/***/ "./resources/js/store/modules/snackbarAlerts/snackbarAlertsModule.js":
/*!***************************************************************************!*\
  !*** ./resources/js/store/modules/snackbarAlerts/snackbarAlertsModule.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    snackbarAlerts: window.global.config.snackbarAlerts || {}
  },
  mutations: {
    snackbarAlerts: function snackbarAlerts(state, _snackbarAlerts) {
      return state.snackbarAlerts = _snackbarAlerts;
    }
  },
  getters: {
    snackbarAlerts: function snackbarAlerts(state) {
      return state.snackbarAlerts;
    }
  },
  actions: {
    snackbarAlerts: function () {
      var _snackbarAlerts2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("api/snackbar_alerts/get_one/1").then(function (res) {
                  return commit("snackbarAlerts", res.data);
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function snackbarAlerts(_x) {
        return _snackbarAlerts2.apply(this, arguments);
      }

      return snackbarAlerts;
    }()
  }
});

/***/ }),

/***/ "./resources/js/store/modules/solarSystem/solarSystemModule.js":
/*!*********************************************************************!*\
  !*** ./resources/js/store/modules/solarSystem/solarSystemModule.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    solarSystem: {}
  },
  getters: {
    solarSystem: function solarSystem(state) {
      return state.solarSystem;
    }
  },
  mutations: {
    solarSystem: function solarSystem(state, _solarSystem) {
      return state.solarSystem = _solarSystem;
    }
  },
  actions: {
    solarSystem: function solarSystem(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/solar_system/get_one/1").then(function (res) {
                  commit("solarSystem", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/solarSystemCallUs/solarSystemCallUsModule.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/store/modules/solarSystemCallUs/solarSystemCallUsModule.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    solarSystemCallUs: {}
  },
  getters: {
    solarSystemCallUs: function solarSystemCallUs(state) {
      return state.solarSystemCallUs;
    }
  },
  mutations: {
    solarSystemCallUs: function solarSystemCallUs(state, _solarSystemCallUs) {
      return state.solarSystemCallUs = _solarSystemCallUs;
    }
  },
  actions: {
    solarSystemCallUs: function solarSystemCallUs(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/solar_system_call_us/get_one/1").then(function (res) {
                  commit("solarSystemCallUs", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/translations/translationsModule.js":
/*!***********************************************************************!*\
  !*** ./resources/js/store/modules/translations/translationsModule.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    translations: window.global.translations || []
  },
  getters: {
    translations: function translations(state) {
      return state.translations;
    }
  },
  mutations: {
    translations: function translations(state, _translations) {
      return state.translations = _translations;
    }
  },
  actions: {
    translations: function translations(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/translations/get_all").then(function (res) {
                  commit("translations", res.data);
                })["catch"](function (err) {
                  console.log(err);
                  commit("setSnackbar", "Przepraszamy, nie udało się załadować danych...");
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/modules/validationRules/validationRulesModule.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/store/modules/validationRules/validationRulesModule.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    validationRules: {}
  },
  mutations: {
    validationRules: function validationRules(state, _validationRules) {
      return state.validationRules = _validationRules;
    }
  },
  getters: {
    validationRules: function validationRules(state) {
      return state.validationRules;
    }
  },
  actions: {
    validationRules: function () {
      var _validationRules2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("api/validation_rules/get_one/1").then(function (res) {
                  return commit("validationRules", res.data);
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function validationRules(_x) {
        return _validationRules2.apply(this, arguments);
      }

      return validationRules;
    }()
  }
});

/***/ })

}]);