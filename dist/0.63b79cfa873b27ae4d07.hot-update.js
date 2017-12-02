webpackHotUpdate(0,{

/***/ 341:
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
	
	var _Footer = __webpack_require__(/*! ./Footer */ 342);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Modify = __webpack_require__(/*! ./Modify */ 499);
	
	var _Modify2 = _interopRequireDefault(_Modify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var myEventsList = [{
	  'id': 1,
	  'date': '9/16/17',
	  'time': '5:00pm',
	  'title': 'Homecomming'
	}, {
	  'id': 2,
	  'date': '9/17/17',
	  'time': '7:00pm',
	  'title': 'Homecomming2'
	}];
	
	function add(a, b) {
	  return Number(a) + Number(b);
	}
	
	function dateConverter(dateString) {
	  var num = dateString.split('-').reduce(add, 0);
	  return num;
	}
	
	function timeConverter(dateString) {
	  var pm = dateString.split(':')[1].substr(2);
	  var hour = Number(dateString.split(':')[0]);
	  var min = Number(dateString.split(':')[1].slice(0, 2));
	  if (pm === 'pm' && hour !== 12) {
	    hour += 12;
	    return [hour, min].join('.');
	  }
	  return [hour, min].join('.');
	}
	
	var Events = function Events(props) {
	
	  var sortedEventArray = [];
	  if (props.events.length) {
	    props.events.sort(function (a, b) {
	      var date = dateConverter(a['date']) - dateConverter(b['date']);
	      var time = parseFloat(timeConverter(a['time'])) - parseFloat(timeConverter(b['time']));
	      if (date !== 0) {
	        return date;
	      }
	      return time;
	    });
	  };
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'event-list' },
	      props.events.length ? props.events.map(function (event) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'event', key: event.id },
	          _react2.default.createElement(
	            'h2',
	            { className: 'event-title' },
	            event.title
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'event-schedule' },
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                'Day '
	              ),
	              event.date
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                'Time '
	              ),
	              event.time
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'event-description' },
	            event.description
	          )
	        );
	      }) : null
	    ),
	    _react2.default.createElement(_Modify2.default, {
	      events: props.events }),
	    _react2.default.createElement(_Footer2.default, null)
	  );
	};
	
	exports.default = Events;

/***/ }

})
//# sourceMappingURL=0.63b79cfa873b27ae4d07.hot-update.js.map