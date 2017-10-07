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
	  'id': 1,
	  'date': '9/16/17',
	  'time': '5:00pm',
	  'eventTitle': 'Homecomming'
	}, {
	  'id': 2,
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
	          { key: event.id },
	          event.date,
	          ' ',
	          event.time,
	          ' ',
	          event.eventTitle
	        );
	      }) : null
	    ),
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
	          _react2.default.createElement('input', { type: 'date', name: 'firstName', placeholder: 'Date',
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
	          _react2.default.createElement('input', { type: 'time', name: 'firstName', placeholder: 'Time',
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
	          _react2.default.createElement('input', { type: 'text', name: 'lastName', placeholder: 'Title',
	            className: 'signup-input-field',
	            id: 'signup-lastname-input-field',
	            onChange: function onChange(e) {
	              console.log(e.target.name);
	              console.log(e.target.value);
	              props.handleInput(e);
	            },
	            required: true })
	        ),
	        _react2.default.createElement(
	          'button',
	          { className: 'signup-submit-button', type: 'submit' },
	          'Create Event'
	        )
	      )
	    )
	  );
	};
	
	exports.default = Events;

/***/ }

})
//# sourceMappingURL=0.c77448b032f2b7692071.hot-update.js.map