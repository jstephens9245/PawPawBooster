webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/*!**************************!*\
  !*** ./client/index.jsx ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! normalize.css */ 2);
	
	__webpack_require__(/*! basscss */ 6);
	
	__webpack_require__(/*! ./styles/main.scss */ 8);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 71);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Routes = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Routes.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Routes2 = _interopRequireDefault(_Routes);
	
	var _store = __webpack_require__(/*! ./store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Style Imports **/
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(_Routes2.default, null)
	), document.getElementById('root'));
	
	/** END: Style Imports **/

/***/ }
])
//# sourceMappingURL=0.fd2e7b83edc463c6a5cd.hot-update.js.map