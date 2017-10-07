webpackHotUpdate(0,{

/***/ 463:
/*!*********************************************!*\
  !*** ./client/containers/EventContainer.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EventContainer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(/*! axios */ 294);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _Events = __webpack_require__(/*! ../components/Events */ 460);
	
	var _Events2 = _interopRequireDefault(_Events);
	
	var _event = __webpack_require__(/*! ../actions/event */ 462);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 445);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(/*! react-addons-css-transition-group */ 464);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EventContainer = exports.EventContainer = function (_Component) {
	  _inherits(EventContainer, _Component);
	
	  function EventContainer(props) {
	    _classCallCheck(this, EventContainer);
	
	    var _this = _possibleConstructorReturn(this, (EventContainer.__proto__ || Object.getPrototypeOf(EventContainer)).call(this, props));
	
	    console.log(props);
	
	    _this.state = {
	      date: '',
	      time: '',
	      title: '',
	      description: '',
	      dirty: false,
	      wobbleError: ''
	    };
	
	    console.log(_this.state);
	    _this.submitForm = _this.submitForm.bind(_this);
	    _this.handleInput = _this.handleInput.bind(_this);
	    _this.wobbler = _this.wobbler.bind(_this);
	    return _this;
	  }
	
	  _createClass(EventContainer, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props, nextProps) {
	      if (!(0, _isEmpty2.default)(props.loggedInUser)) {
	        this.props.router.push('/boards');
	      }
	    }
	  }, {
	    key: 'submitForm',
	    value: function submitForm(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	      this.props.createEvent(this.state.date, this.state.time, this.state.title, this.state.description).then(function (result) {
	        if (result && result.message === 'Request failed with status code 409') {
	          _this2.setState({ dirty: true });
	          _this2.wobbler();
	        }
	      });
	    }
	  }, {
	    key: 'handleInput',
	    value: function handleInput(e) {
	      this.setState(_defineProperty({}, e.target.name, e.target.value));
	    }
	  }, {
	    key: 'wobbler',
	    value: function wobbler() {
	      var _this3 = this;
	
	      this.setState({ wobbleError: 'hvr-wobble-horizontal' });
	
	      setTimeout(function () {
	        _this3.setState({ wobbleError: '' });
	      }, 1000);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var dirty = this.state.dirty;
	      var warning = '';
	
	      // if (dirty && this.state.type === 'login') {
	      //   warning = 'Password or Email is Invalid';
	      // } else if (dirty && this.state.type === 'signup') {
	      //   warning = 'Username or Email is Unavailable';
	      // }
	
	      return _react2.default.createElement(
	        _reactAddonsCssTransitionGroup2.default,
	        {
	          transitionName: 'slideIn',
	          transitionAppear: true,
	          transitionAppearTimeout: 500,
	          transitionEnterTimeout: 500,
	          transitionLeaveTimeout: 500 },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-container ' + this.state.type + ' ' + this.state.wobbleError },
	          _react2.default.createElement(_Events2.default, { submitForm: this.submitForm,
	            handleInput: this.handleInput,
	            warning: warning,
	            wobbler: this.wobbler,
	            wobbleError: this.state.wobbleError })
	        )
	      );
	    }
	  }]);
	
	  return EventContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    events: state.event.events
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    createEvent: function createEvent(date, time, title, description) {
	      return dispatch((0, _event.createEvent)(date, time, title, description));
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EventContainer);

/***/ }

})
//# sourceMappingURL=0.c1202bc17fbda7357bf2.hot-update.js.map