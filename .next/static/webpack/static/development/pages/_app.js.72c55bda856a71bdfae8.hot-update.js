webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/SignoutButton.js":
/*!*************************************!*\
  !*** ./components/SignoutButton.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignoutButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wrappers_User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wrappers/User */ "./components/wrappers/User.js");






var _jsxFileName = "/Users/jakecasey/Documents/Projects/skeleton-key-frontend/components/SignoutButton.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  mutation SIGN_OUT_MUTATION {\n    signout {\n      message\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SIGN_OUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());

var SignoutButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SignoutButton, _Component);

  function SignoutButton() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignoutButton);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SignoutButton).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignoutButton, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Mutation"], {
        mutation: SIGN_OUT_MUTATION,
        refetchQueries: [{
          query: _wrappers_User__WEBPACK_IMPORTED_MODULE_10__["CURRENT_USER_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, function (signout, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          onClick: function onClick() {
            return signout();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, "Sign Out ");
      });
    }
  }]);

  return SignoutButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=_app.js.72c55bda856a71bdfae8.hot-update.js.map