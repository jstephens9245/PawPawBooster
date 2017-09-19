webpackHotUpdate(0,{

/***/ 460:
/*!*************************************!*\
  !*** ./client/components/Events.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBigCalendar = __webpack_require__(/*! react-big-calendar */ 461);
	
	var _reactBigCalendar2 = _interopRequireDefault(_reactBigCalendar);
	
	var _moment = __webpack_require__(/*! moment */ 656);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import NavbarContainer from '../containers/NavbarContainer';
	_reactBigCalendar2.default.globalizeLocalize(_moment2.default); // or globalizeLocalizer
	var myEventsList = [];
	
	var Events = function Events(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_reactBigCalendar2.default, {
	      events: myEventsList,
	      startAccessor: 'startDate',
	      endAccessor: 'endDate'
	    })
	  );
	};
	
	exports.default = Events;

/***/ }

})
//# sourceMappingURL=0.9c63b4b07bc165bdacf6.hot-update.js.map