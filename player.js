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
return (self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([["player"],{

/***/ "./src/playground/player.jsx":
/*!***********************************!*\
  !*** ./src/playground/player.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _components_box_box_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/box/box.jsx */ "./src/components/box/box.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _reducers_mode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/mode */ "./src/reducers/mode.js");
/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./player.css */ "./src/playground/player.css");
/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_player_css__WEBPACK_IMPORTED_MODULE_10__);











if (false) {}

const Player = _ref => {
  let {
    isPlayerOnly,
    onSeeInside,
    projectId
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_box_box_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(isPlayerOnly ? (_player_css__WEBPACK_IMPORTED_MODULE_10___default().stageOnly) : (_player_css__WEBPACK_IMPORTED_MODULE_10___default().editor))
  }, isPlayerOnly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    onClick: onSeeInside
  }, 'See inside'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    canEditTitle: true,
    enableCommunity: true,
    isPlayerOnly: isPlayerOnly,
    projectId: projectId
  }));
};
Player.propTypes = {
  isPlayerOnly: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
  onSeeInside: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  projectId: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)
};
const mapStateToProps = state => ({
  isPlayerOnly: state.scratchGui.mode.isPlayerOnly
});
const mapDispatchToProps = dispatch => ({
  onSeeInside: () => dispatch((0,_reducers_mode__WEBPACK_IMPORTED_MODULE_9__.setPlayer)(false))
});
const ConnectedPlayer = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Player);

// note that redux's 'compose' function is just being used as a general utility to make
// the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
// ability to compose reducers.
const WrappedPlayer = (0,redux__WEBPACK_IMPORTED_MODULE_4__.compose)(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(ConnectedPlayer);
const appTarget = document.createElement('div');
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(WrappedPlayer, {
  isPlayerOnly: true
}), appTarget);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[2]!./src/playground/player.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[2]!./src/playground/player.css ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".player_stage-only_3WHZN {\n    width: calc(480px + 1rem);\n}\n\n.player_editor_wkTja {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.player_stage-only_3WHZN * {\n    box-sizing: border-box;\n}\n", ""]);
// Exports
exports.locals = {
	"stage-only": "player_stage-only_3WHZN",
	"stageOnly": "player_stage-only_3WHZN",
	"editor": "player_editor_wkTja"
};
module.exports = exports;


/***/ }),

/***/ "./src/playground/player.css":
/*!***********************************!*\
  !*** ./src/playground/player.css ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!../../node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[2]!./player.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[2]!./src/playground/player.css");

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_microbit_microbit-universal-hex_dist_esm5_universal-hex_js-node_modules_-2b526b","src_containers_gui_jsx-src_lib_app-state-hoc_jsx-src_lib_hash-parser-hoc_jsx"], () => (__webpack_exec__("./src/playground/player.jsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=player.js.map