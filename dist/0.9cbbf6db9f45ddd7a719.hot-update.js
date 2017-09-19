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
	
	var myEventsList = [{
	  'date': '9/16/17',
	  'time': '5:00pm',
	  'eventTitle': 'Homecomming'
	}, {
	  'date': '9/17/17',
	  'time': '7:00pm',
	  'eventTitle': 'Homecomming2'
	}];
	
	var Events = function Events(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'event-container' },
	    _react2.default.createElement(
	      'div',
	      { className: 'event-list' },
	      myEventsList.length ? myEventsList.map(function (event) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          event.date,
	          ' ',
	          event.time,
	          ' ',
	          event.eventTitle
	        );
	      }) : null
	    ),
	    _react2.default.createElement('div', { className: 'event-submit-form' })
	  );
	};
	
	exports.default = Events;

/***/ }

})
//# sourceMappingURL=0.9cbbf6db9f45ddd7a719.hot-update.js.map