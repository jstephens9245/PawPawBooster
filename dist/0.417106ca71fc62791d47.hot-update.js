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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var About = function About(props) {
	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement(
	      "div",
	      { className: "about-us-container" },
	      _react2.default.createElement(
	        "h2",
	        { className: "aboutus-title" },
	        "Paw Paw Redskins Athletic Booster Inc."
	      ),
	      _react2.default.createElement(
	        "h3",
	        null,
	        "What are we?"
	      ),
	      _react2.default.createElement(
	        "p",
	        null,
	        "A non-profit, 501c3 volunteer organization, made up of parents, coaches and community members that work to compliment the high school athletic department. The Booster Club works to enhance the facilities, equipment and opportunities for our student athletes and coaches."
	      ),
	      _react2.default.createElement(
	        "h3",
	        null,
	        "What do we do?"
	      ),
	      _react2.default.createElement(
	        "p",
	        null,
	        "The following are a few examples of what the Booster Club provides funds for: coaching clinics, team camps, upgrades to sports facilities and possible needed equipment and much more!"
	      ),
	      _react2.default.createElement(
	        "h3",
	        null,
	        "What do we need from you?"
	      ),
	      _react2.default.createElement(
	        "p",
	        null,
	        "We need your help! We are in need of more parent involvement. A parent\u2019s level of involvement is completely up to you! Your willingness to become involved with the Booster Club would be greatly appreciated no matter how big or small. We are looking for parents to assist with concession stands and get involved with fund raising possibilities."
	      ),
	      _react2.default.createElement(
	        "h3",
	        null,
	        "Why should you get involved?"
	      ),
	      _react2.default.createElement(
	        "p",
	        null,
	        "Participating in the Boosters is a great way to volunteer your time to provide Paw Paw athletes, coaches and sports programs with additional opportunities that they may not be able to experience otherwise! It\u2019s also a great way to meet more of the parents your kids go to school with and have some fun and laughs at the same time! Another perk for getting involved with the Boosters, if you work a minimum of 10 athletic events, you can receive a free sports pass the following year. A person receiving a complimentary pass can apply $55 (cost of a single pass) towards the purchase of a family pass."
	      ),
	      _react2.default.createElement(
	        "h3",
	        null,
	        "When do we meet? Anyone is welcome to attend a meeting!"
	      ),
	      _react2.default.createElement(
	        "p",
	        null,
	        "Meetings are held on the first Monday of each month unless it falls on a holiday, in the high school teacher\u2019s lounge @ 6:30. Meeting information is typically located in the Paw Paw High School daily announcements. The following is contact information for the officers on the Booster Board. Feel free to contact any of them if you have additional questions or if you would like more information about getting involved."
	      )
	    ),
	    _react2.default.createElement(
	      "h2",
	      { className: "council-title" },
	      "Council Members"
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "booster-council" },
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Chairperson"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Missy Burch"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "mburch@vbisd.org"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Vice-Chairperson"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Ashley Bowen"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "jashli31@hotmail.com"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Treasurer"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Trish Downard"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "trish.downard@gmail.com"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Publicity Chairperson"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Brenda Atkinson"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Brenda@bluefrogfundraising.com"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Concession Stand Trustee"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Kellee Davis"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "clarksfamily@hotmail.com"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Concession Stand Trustee"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Sandy Curtis"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "curtissj@comcast.net"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Fundraiser Chairperson"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Andrea Toliver"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "jtoliver_andrea@yahoo.com"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Fundraiser Chairperson"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member" },
	        "Janet LeForge"
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "council-member", style: { marginBottom: "1em" } },
	        "Jfroe67001@aol.com"
	      )
	    )
	  );
	};
	
	exports.default = About;

/***/ }

})
//# sourceMappingURL=0.417106ca71fc62791d47.hot-update.js.map