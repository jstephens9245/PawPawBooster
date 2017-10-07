webpackHotUpdate(0,{

/***/ 225:
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
	
	var _store = __webpack_require__(/*! ./store */ 226);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 238);
	
	var _HomepageContainer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./containers/HomepageContainer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _HomepageContainer2 = _interopRequireDefault(_HomepageContainer);
	
	var _EventContainer = __webpack_require__(/*! ./containers/EventContainer */ 294);
	
	var _EventContainer2 = _interopRequireDefault(_EventContainer);
	
	var _user = __webpack_require__(/*! ./actions/user */ 364);
	
	var _event = __webpack_require__(/*! ./actions/event */ 321);
	
	var _Index = __webpack_require__(/*! ./components/Index */ 365);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	var _Sponsers = __webpack_require__(/*! ./components/Sponsers */ 475);
	
	var _Sponsers2 = _interopRequireDefault(_Sponsers);
	
	var _AboutUs = __webpack_require__(/*! ./components/AboutUs */ 476);
	
	var _AboutUs2 = _interopRequireDefault(_AboutUs);
	
	var _Signup = __webpack_require__(/*! ./components/Signup */ 477);
	
	var _Signup2 = _interopRequireDefault(_Signup);
	
	var _Events = __webpack_require__(/*! ./components/Events */ 320);
	
	var _Events2 = _interopRequireDefault(_Events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//onEnters
	// function indexEnter() {
	//   store.dispatch(checkLoginStatus());
	// }
	
	function eventsOnEnter(nextRouterState) {
	  _store2.default.dispatch((0, _event.getAllEvents)());
	}
	
	//components
	
	
	//action-creators
	
	
	//containers
	function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Index2.default },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomepageContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'sponsers', component: _Sponsers2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'aboutus', component: _AboutUs2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'events', component: _EventContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'signup', component: _Signup2.default })
	    )
	  );
	}

/***/ }

})
//# sourceMappingURL=0.409f8017191fdccd99fa.hot-update.js.map