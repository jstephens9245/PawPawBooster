webpackHotUpdate(0,{

/***/ 9:
/*!***********************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./client/styles/main.scss ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, "/** Settings\n */\n/** Tools\n * Mixins / Functions\n */\n/** Generic\n * Resets\n */\n/** Base\n * Element styles (no classes)\n */\n/** Objects\n * Reusable layout patterns\n * class prefix: `o-`\n */\n/** Components\n * Patterns with a visual design\n * class prefix: `c-`\n */\n/** Controls\n * Override / Helper / Utility classes\n * class prefix: `ctrl-`\n */\n", ""]);
	
	// exports


/***/ },

/***/ 221:
/*!***************************!*\
  !*** ./client/Routes.jsx ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Routes;
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ./store */ 222);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 226);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Index() {
		return _react2.default.createElement(
			'h1',
			null,
			'Capstone'
		);
	}
	
	function Routes() {
		return _react2.default.createElement(
			_reactRouter.Router,
			{ history: _reactRouter.browserHistory },
			_react2.default.createElement(_reactRouter.Route, { path: '/', component: Index })
		);
	}

/***/ }

})
//# sourceMappingURL=0.fc754986944471de71fc.hot-update.js.map