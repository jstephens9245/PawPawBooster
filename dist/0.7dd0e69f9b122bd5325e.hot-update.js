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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
	
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
	    _react2.default.createElement(BigCalendar, {
	      events: myEventsList,
	      startAccessor: 'startDate',
	      endAccessor: 'endDate'
	    })
	  );
	};
	
	exports.default = Events;

/***/ }

})
//# sourceMappingURL=0.7dd0e69f9b122bd5325e.hot-update.js.map