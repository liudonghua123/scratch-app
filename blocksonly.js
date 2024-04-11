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
return (self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([["blocksonly"],{

/***/ "./src/playground/blocks-only.jsx":
/*!****************************************!*\
  !*** ./src/playground/blocks-only.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_controls_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/controls.jsx */ "./src/containers/controls.jsx");
/* harmony import */ var _containers_blocks_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/blocks.jsx */ "./src/containers/blocks.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _blocks_only_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks-only.css */ "./src/playground/blocks-only.css");
/* harmony import */ var _blocks_only_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blocks_only_css__WEBPACK_IMPORTED_MODULE_8__);









const mapStateToProps = state => ({
  vm: state.scratchGui.vm
});
const VMBlocks = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(_containers_blocks_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]);
const VMControls = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(_containers_controls_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);
const BlocksOnly = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VMBlocks, {
  grow: 1,
  options: {
    media: "static/blocks-media/"
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VMControls, {
  className: (_blocks_only_css__WEBPACK_IMPORTED_MODULE_8___default().controls)
}));
const App = (0,_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])(BlocksOnly));
const appTarget = document.createElement('div');
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), appTarget);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[2]!./src/playground/blocks-only.css":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[2]!./src/playground/blocks-only.css ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".blocks-only_controls_2GEvs {\n    position: absolute;\n    z-index: 2;\n    top: 10px;\n    right: 15px;\n}\n", ""]);
// Exports
exports.locals = {
	"controls": "blocks-only_controls_2GEvs"
};
module.exports = exports;


/***/ }),

/***/ "./src/playground/blocks-only.css":
/*!****************************************!*\
  !*** ./src/playground/blocks-only.css ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[2]!./blocks-only.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[2]!./src/playground/blocks-only.css");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_microbit_microbit-universal-hex_dist_esm5_universal-hex_js-node_modules_-2b526b","src_containers_gui_jsx-src_lib_app-state-hoc_jsx-src_lib_hash-parser-hoc_jsx"], () => (__webpack_exec__("./src/playground/blocks-only.jsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=blocksonly.js.map