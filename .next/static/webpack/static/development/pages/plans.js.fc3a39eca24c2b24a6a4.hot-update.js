webpackHotUpdate("static/development/pages/plans.js",{

/***/ "./components/Plans.js":
/*!*****************************!*\
  !*** ./components/Plans.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _GetPlansList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetPlansList */ "./components/GetPlansList.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jakecasey/Documents/Projects/skeleton-key/skeleton-key-frontend/components/Plans.js";





var Protected = function Protected(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GetPlansList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, function (_ref) {
    var getPlansList = _ref.data.getPlansList,
        error = _ref.error;
    console.log(getPlansList);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, " Our Plans "), getPlansList.map(function (a, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, a.planId);
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Protected);

/***/ })

})
//# sourceMappingURL=plans.js.fc3a39eca24c2b24a6a4.hot-update.js.map