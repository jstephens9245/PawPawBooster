webpackHotUpdate(0,{

/***/ 320:
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
	
	var _Footer = __webpack_require__(/*! ./Footer */ 321);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
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
	    // console.log(dateString);
	    // console.log(num);
	    // console.log(pm);
	    // console.log("-----------");
	    return [hour, min].join('');
	  }
	  return [hour, min].join('');
	}
	var Events = function Events(props) {
	
	  var sortedEventArray = [];
	  if (props.events.length) {
	    props.events.sort(function (a, b) {
	      var num = parseFloat([dateConverter(a['date']), timeConverter(a['time'])].join('.')) - parseFloat([dateConverter(b['date']), timeConverter(b['time'])].join('.'));
	      var num1 = parseFloat([dateConverter(a['date']), timeConverter(a['time'])].join('.'));
	      var num2 = parseFloat([dateConverter(b['date']), timeConverter(b['time'])].join('.'));
	      console.log('num1', num1, a);
	      console.log('num2', num2, b);
	      console.log('--------------------');
	      return num;
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
	          { key: event.id },
	          event.date,
	          ' ',
	          event.time,
	          ' ',
	          event.title
	        );
	      }) : null
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'form-container ' + props.type + ' ' + props.wobbleError },
	      _react2.default.createElement(
	        'div',
	        { className: 'event-container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'event-submit-form' },
	          _react2.default.createElement(
	            'form',
	            { className: 'form', onSubmit: function onSubmit(e) {
	                props.submitForm(e);
	              } },
	            _react2.default.createElement(
	              'div',
	              { className: '' },
	              _react2.default.createElement(
	                'label',
	                { className: 'signup-label' },
	                ' Create event here! '
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'form-group' },
	              _react2.default.createElement('input', { type: 'date', name: 'date', placeholder: 'Date',
	                className: 'input signup-input-field',
	                id: 'signup-firstname-input-field',
	                onChange: function onChange(e) {
	                  props.handleInput(e);
	                },
	                required: true })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'form-group' },
	              _react2.default.createElement('input', { type: 'text', name: 'time', placeholder: 'Time',
	                className: 'input signup-input-field',
	                id: 'signup-firstname-input-field',
	                onChange: function onChange(e) {
	                  props.handleInput(e);
	                },
	                required: true })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'form-group' },
	              _react2.default.createElement('input', { type: 'text', name: 'title', placeholder: 'Title',
	                className: 'signup-input-field',
	                id: 'signup-lastname-input-field',
	                onChange: function onChange(e) {
	                  props.handleInput(e);
	                },
	                required: true })
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: 'signup-submit-button', type: 'submit' },
	              'Create Event'
	            )
	          ),
	          props.events.length ? props.events.map(function (event) {
	            return _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'div',
	                { key: event.id },
	                event.date,
	                ' ',
	                event.time,
	                ' ',
	                event.title,
	                _react2.default.createElement(
	                  'button',
	                  { value: event.id, onClick: function onClick(e) {
	                      return props.deleteEvent(e.target.value);
	                    } },
	                  'X'
	                )
	              )
	            );
	          }) : null
	        )
	      )
	    ),
	    _react2.default.createElement(_Footer2.default, null)
	  );
	};
	
	exports.default = Events;

/***/ }

})
//# sourceMappingURL=0.8f55a638b0ce0afdca1c.hot-update.js.map