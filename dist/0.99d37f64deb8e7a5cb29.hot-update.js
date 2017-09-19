webpackHotUpdate(0,{

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
	
	var _Index = __webpack_require__(/*! ./components/Index.js */ 279);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	var _CreateBoardContainer = __webpack_require__(/*! ./containers/CreateBoardContainer.js */ 282);
	
	var _CreateBoardContainer2 = _interopRequireDefault(_CreateBoardContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Index2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: '/myboards', component: _CreateBoardContainer2.default })
	    )
	  );
	}

/***/ }

})
//# sourceMappingURL=0.99d37f64deb8e7a5cb29.hot-update.js.map