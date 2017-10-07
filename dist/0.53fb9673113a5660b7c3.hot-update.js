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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 237);
	
	var _HomepageContainer = __webpack_require__(/*! ./containers/HomepageContainer */ 291);
	
	var _HomepageContainer2 = _interopRequireDefault(_HomepageContainer);
	
	var _user = __webpack_require__(/*! ./actions/user */ 293);
	
	var _Index = __webpack_require__(/*! ./components/Index */ 319);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	var _Sponsers = __webpack_require__(/*! ./components/Sponsers */ 458);
	
	var _Sponsers2 = _interopRequireDefault(_Sponsers);
	
	var _AboutUs = __webpack_require__(/*! ./components/AboutUs */ 459);
	
	var _AboutUs2 = _interopRequireDefault(_AboutUs);
	
	var _Signup = __webpack_require__(/*! ./components/Signup */ 461);
	
	var _Signup2 = _interopRequireDefault(_Signup);
	
	var _Events = __webpack_require__(/*! ./components/Events */ 460);
	
	var _Events2 = _interopRequireDefault(_Events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//onEnters
	
	
	//action-creators
	function indexEnter() {
	  _store2.default.dispatch((0, _user.checkLoginStatus)());
	}
	
	//components
	
	
	//containers
	function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Index2.default, onEnter: indexEnter },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomepageContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'sponsers', component: _Sponsers2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'aboutus', component: _AboutUs2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'events', component: _Events2.default })
	    )
	  );
	}

/***/ },

/***/ 461:
/*!*************************************!*\
  !*** ./client/components/Signup.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import NavbarContainer from '../containers/NavbarContainer';
	
	var Signup = function Signup(props) {
	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement(
	      "div",
	      { className: "signup-list" },
	      _react2.default.createElement(
	        "h2",
	        { className: "signup-title" },
	        "Corporate Sponsors"
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "signup-football" },
	        _react2.default.createElement(
	          Link,
	          { to: "http://www.signupgenius.com/go/4090c4da4aa2faafc1-football1", target: "_blank" },
	          _react2.default.createElement(
	            "a",
	            { className: "link-style" },
	            "Football"
	          )
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "signup-basketball" },
	        _react2.default.createElement(
	          Link,
	          { to: "http://www.signupgenius.com/go/4090c4da4aa2faafc1-football1", target: "_blank" },
	          _react2.default.createElement(
	            "a",
	            { className: "link-style" },
	            "Basketball"
	          )
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "signup-baseball" },
	        _react2.default.createElement(
	          Link,
	          { to: "http://www.signupgenius.com/go/4090c4da4aa2faafc1-football1", target: "_blank" },
	          _react2.default.createElement(
	            "a",
	            { className: "link-style" },
	            "Baseball"
	          )
	        )
	      )
	    )
	  );
	};
	
	exports.default = Signup;

/***/ }

})
//# sourceMappingURL=0.53fb9673113a5660b7c3.hot-update.js.map