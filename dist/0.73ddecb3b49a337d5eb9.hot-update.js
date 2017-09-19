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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 233);
	
	var _BoardContainer = __webpack_require__(/*! ./containers/BoardContainer */ 286);
	
	var _BoardContainer2 = _interopRequireDefault(_BoardContainer);
	
	var _CreateBoardContainer = __webpack_require__(/*! ./containers/CreateBoardContainer */ 288);
	
	var _CreateBoardContainer2 = _interopRequireDefault(_CreateBoardContainer);
	
	var _SignupContainer = __webpack_require__(/*! ./containers/SignupContainer */ 290);
	
	var _SignupContainer2 = _interopRequireDefault(_SignupContainer);
	
	var _Index = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./containers/Index\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Index2 = _interopRequireDefault(_Index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//containers
	function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Index2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _SignupContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/myboards', component: _CreateBoardContainer2.default })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: '/boards/:boardId', component: _BoardContainer2.default })
	  );
	}
	
	//components

/***/ }

})
//# sourceMappingURL=0.73ddecb3b49a337d5eb9.hot-update.js.map