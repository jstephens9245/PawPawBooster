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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//onEnters
	
	
	//components
	
	
	//containers
	function indexEnter() {
	  _store2.default.dispatch((0, _user.checkLoginStatus)());
	}
	
	//action-creators
	function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Index2.default, onEnter: indexEnter },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomepageContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'Sponsers', component: _Sponsers2.default })
	    )
	  );
	}

/***/ },

/***/ 458:
/*!***************************************!*\
  !*** ./client/components/Sponsers.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import NavbarContainer from '../containers/NavbarContainer';
	
	var Sponsors = function Sponsors(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      null,
	      'Corporate Sponsor Gold: $1000 Advantage Roofing and Exteriors emailed info Lounsbury Excavating, Inc emailed info Lakes and Country Rea l Estate paid Honor Credit Union emailed info Tapper Automotive emailed info Coca-Cola emailed info Meijer paid Walmart paid Family Fare emailed info Hiemstra Optical paid Newell Insurance NEW SPONSOR confirmed/bill Silver: $750 Maple Lake Chiropractic emailed info National Guard \u2013 Jason Brautigam emailed info LaCantina emailed info HotShotz swap for Reverse Raffle Pictures Bronze: $350 Subway emailed info Premier Catering Swap for R.Raffle/TGIS Foune Well emailed info Red\u2019s Rootbeer emailed info Great Lake Pondscapes Confirmed/bill Brookside Farms Janet working on McDonalds Confirmed/pick up Paw Paw Rental Janet working on Rainbow Lanes Need to call Chemical Bank emailed info Daves Window and Glass Confirmed/bill Paw Paw Blend Coffee Shop need to call Muffler Man Confirmed/bill Ace Hardware Confirmed/bill Chinn Chinn need to call Copper Grill need to call Short Stop Driving School emailed info Chicken Coop Swap for meals Burger King emailed info Look Sharp Marketing emailed info Attorney Matt Cooper Janet working on Wolf Lake Fish Hatchery need to call Big C Lumber emailed info Home Improvement Salvage need to call Other Companies to ask for 2017-2018 Strand Theater need to contact O Rileys need to contact State Farm need to contact Prudential emailed info Mattawan Landscape need to contact Mit-E- Extermination need to contact Meyer Wood need to contact Studio 204 emailed info Nations Title need to contact The Shack need to contact Fast Signs need to contact Jimmy Johns need to contact Target emailed info Wilcox Electric/Bronco Dev mailed info Autumn House need to contact Paw Paw Pharmancy need to contact Maple Lake Assisted Living need to contact Zhang Financial need to contact Applebees need to contact Big B Missy working on Impact Nutrition need to contact H&R Block need to contact'
	    )
	  );
	};
	
	exports.default = DragDropContext(TouchBackend({ enableMouseEvents: true }))(Index);

/***/ }

})
//# sourceMappingURL=0.be600d0a2c385ab69fd3.hot-update.js.map