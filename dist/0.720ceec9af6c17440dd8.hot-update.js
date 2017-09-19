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
	      _react2.default.createElement(_reactRouter.Route, { path: 'aboutus', component: _AboutUs2.default })
	    )
	  );
	}

/***/ },

/***/ 459:
/*!**************************************!*\
  !*** ./client/components/AboutUs.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var About = function About(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      null,
	      'Chairperson \u2013 Missy Burch mburch@vbisd.org Vice-Chairperson \u2013 Ashley Bowen jashli31@hotmail.com Secretary \u2013 Jessica Wressel jwressel@aol.com Treasurer \u2013 Trish Downard trish.downard@gmail.com Publicity Chairperson \u2013 Brenda Atkinson Brenda@bluefrogfundraising.com Concession Stand Trustee \u2013 Kellee Davis clarksfamily@hotmail.com Concession Stand Trustee \u2013 Sandy Curtis curtissj@comcast.net Fundraiser Chairperson \u2013 Andrea Toliver jtoliver_andrea@yahoo.com Fundraiser Chairperson \u2013 Janet LeForge Jfroe67001@aol.com'
	    )
	  );
	};
	
	exports.default = About;

/***/ }

})
//# sourceMappingURL=0.720ceec9af6c17440dd8.hot-update.js.map