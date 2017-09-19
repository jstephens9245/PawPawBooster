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
	
	__webpack_require__(/*! react-big-calendar/lib/css/react-big-calendar.css */ 773);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import NavbarContainer from '../containers/NavbarContainer';
	// BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
	
	_reactBigCalendar2.default.setLocalizer(_reactBigCalendar2.default.momentLocalizer(_moment2.default));
	
	var myEventsList = [{
	  'title': 'All Day Event',
	  'allDay': true,
	  'start': new Date(2017, 7, 0),
	  'end': new Date(2015, 7, 0)
	}, {
	  'title': 'Long Event',
	  'start': new Date(2017, 3, 7),
	  'end': new Date(2017, 3, 10)
	}];
	
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
//# sourceMappingURL=0.f069695ea79791d5f4b4.hot-update.js.map