(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GUI"] = factory();
	else
		root["GUI"] = factory();
})(self, () => {
return (self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([["gui"],{

/***/ "./src/playground/index.jsx":
/*!**********************************!*\
  !*** ./src/playground/index.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-object-assign/auto */ "./node_modules/es6-object-assign/auto.js");
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! intl */ "./node_modules/intl/index.js");
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/browser-modal/browser-modal.jsx */ "./src/components/browser-modal/browser-modal.jsx");
/* harmony import */ var _lib_supported_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/supported-browser */ "./src/lib/supported-browser.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ "./src/playground/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__);
// Polyfills



 // For Safari 9







const appTarget = document.createElement('div');
appTarget.className = (_index_css__WEBPACK_IMPORTED_MODULE_9___default().app);
document.body.appendChild(appTarget);
if ((0,_lib_supported_browser__WEBPACK_IMPORTED_MODULE_8__["default"])()) {
  // require needed here to avoid importing unsupported browser-crashing code
  // at the top level
  (__webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx")["default"])(appTarget);
} else {
  _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_7__["default"].setAppElement(appTarget);
  const WrappedBrowserModalComponent = (0,_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])(_components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], true /* localesOnly */);
  const handleBack = () => {};
  // eslint-disable-next-line react/jsx-no-bind
  react_dom__WEBPACK_IMPORTED_MODULE_5__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(WrappedBrowserModalComponent, {
    onBack: handleBack
  }), appTarget);
}

/***/ }),

/***/ "./src/playground/render-gui.jsx":
/*!***************************************!*\
  !*** ./src/playground/render-gui.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_log_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/log.js */ "./src/lib/log.js");







const onClickLogo = () => {
  window.location = 'https://scratch.mit.edu';
};
const handleTelemetryModalCancel = () => {
  (0,_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User canceled telemetry modal');
};
const handleTelemetryModalOptIn = () => {
  (0,_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User opted into telemetry');
};
const handleTelemetryModalOptOut = () => {
  (0,_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User opted out of telemetry');
};

/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appTarget => {
  _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].setAppElement(appTarget);

  // note that redux's 'compose' function is just being used as a general utility to make
  // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
  // ability to compose reducers.
  const WrappedGui = (0,redux__WEBPACK_IMPORTED_MODULE_2__.compose)(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]);

  // TODO a hack for testing the backpack, allow backpack host to be set by url param
  const backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
  const backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;
  const scratchDesktopMatches = window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);
  let simulateScratchDesktop;
  if (scratchDesktopMatches) {
    try {
      // parse 'true' into `true`, 'false' into `false`, etc.
      simulateScratchDesktop = JSON.parse(scratchDesktopMatches[1]);
    } catch (_unused) {
      // it's not JSON so just use the string
      // note that a typo like "falsy" will be treated as true
      simulateScratchDesktop = scratchDesktopMatches[1];
    }
  }
  if (false) {}
  react_dom__WEBPACK_IMPORTED_MODULE_1__.render(
  // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!
  simulateScratchDesktop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedGui, {
    canEditTitle: true,
    isScratchDesktop: true,
    showTelemetryModal: true,
    canSave: false,
    onTelemetryModalCancel: handleTelemetryModalCancel,
    onTelemetryModalOptIn: handleTelemetryModalOptIn,
    onTelemetryModalOptOut: handleTelemetryModalOptOut
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedGui, {
    canEditTitle: true,
    backpackVisible: true,
    showComingSoon: true,
    backpackHost: backpackHost,
    canSave: false,
    onClickLogo: onClickLogo
  }), appTarget);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[2]!./src/playground/index.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[2]!./src/playground/index.css ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "html,\nbody,\n.index_app_3Qs6X {\n    /* probably unecessary, transitional until layout is refactored */\n    width: 100%; \n    height: 100%;\n    margin: 0;\n\n    /* Setting min height/width makes the UI scroll below those sizes */\n    min-width: 1024px;\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\n}\n\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\n\n* { box-sizing: border-box; }\n", ""]);
// Exports
exports.locals = {
	"app": "index_app_3Qs6X"
};
module.exports = exports;


/***/ }),

/***/ "./src/playground/index.css":
/*!**********************************!*\
  !*** ./src/playground/index.css ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[2]!./src/playground/index.css");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "?2dd4":
/*!*******************************************!*\
  !*** ./locale-data/complete.js (ignored) ***!
  \*******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_microbit_microbit-universal-hex_dist_esm5_universal-hex_js-node_modules_-2b526b","vendors-node_modules_core-js_fn_array_includes_js-node_modules_core-js_fn_promise_finally_js--1b5d1a","src_containers_gui_jsx-src_lib_app-state-hoc_jsx-src_lib_hash-parser-hoc_jsx"], () => (__webpack_exec__("./src/playground/index.jsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=gui.js.map