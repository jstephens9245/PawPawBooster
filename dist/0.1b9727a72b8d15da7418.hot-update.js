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
	  'title': 'Homecomming'
	}, {
	  'id': 2,
	  'date': '9/17/17',
	  'time': '7:00pm',
	  'title': 'Homecomming2'
	}];
	
	var Events = function Events(props) {
	  // console.log(props.events.sort((a,b) => {
	  //   return
	  // }));
	  if (!props.events[0]['date']) {
	    console.log(1);
	    console.log(props.events[0]['date']);
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
	    )
	  );
	};
	
	exports.default = Events;

/***/ }

})
//# sourceMappingURL=0.1b9727a72b8d15da7418.hot-update.js.map