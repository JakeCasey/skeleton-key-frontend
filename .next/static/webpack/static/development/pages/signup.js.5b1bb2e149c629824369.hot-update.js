webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/styles/MediaQueries.js":
/*!*******************************************!*\
  !*** ./components/styles/MediaQueries.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var sizes = {
  desktop: 992,
  tablet: 768,
  mobile: 700
}; // Iterate through the sizes and create a media template

/* harmony default export */ __webpack_exports__["default"] = (media = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (max-width:", "em){", "}"], sizes[label] / 16, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
  };

  return acc;
}, {}));

/***/ })

})
//# sourceMappingURL=signup.js.5b1bb2e149c629824369.hot-update.js.map