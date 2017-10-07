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
	
	var _EventContainer = __webpack_require__(/*! ./containers/EventContainer */ 463);
	
	var _EventContainer2 = _interopRequireDefault(_EventContainer);
	
	var _user = __webpack_require__(/*! ./actions/user */ 293);
	
	var _event = __webpack_require__(/*! ./actions/event */ 462);
	
	var _Index = __webpack_require__(/*! ./components/Index */ 319);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	var _Sponsers = __webpack_require__(/*! ./components/Sponsers */ 458);
	
	var _Sponsers2 = _interopRequireDefault(_Sponsers);
	
	var _AboutUs = __webpack_require__(/*! ./components/AboutUs */ 459);
	
	var _AboutUs2 = _interopRequireDefault(_AboutUs);
	
	var _Signup = __webpack_require__(/*! ./components/Signup */ 461);
	
	var _Signup2 = _interopRequireDefault(_Signup);
	
	var _Events = __webpack_require__(/*! ./components/Events */ 460);
	
	var _Events2 = _interopRequireDefault(_Events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//onEnters
	// function indexEnter() {
	//   store.dispatch(checkLoginStatus());
	// }
	
	function eventsOnEnter(nextRouterState) {
	  _store2.default.dispatch((0, _event.getAllEvents)());
	}
	
	//components
	
	
	//action-creators
	
	
	//containers
	function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Index2.default },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomepageContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'sponsers', component: _Sponsers2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'aboutus', component: _AboutUs2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'events', component: _EventContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'signup', component: _Signup2.default })
	    )
	  );
	}

/***/ },

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
	
	    _this.state = {
	      Date: '',
	      Time: '',
	      Title: '',
	      Description: '',
	      dirty: false,
	      wobbleError: ''
	    };
	
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
	      this.props.createEvent(this.state.firstName, this.state.lastName, this.state.email, this.state.username, this.state.password).then(function (result) {
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
	    // loggedInUser: state.userReducer.loggedInUser
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    createEvent: function (_createEvent) {
	      function createEvent(_x, _x2, _x3, _x4, _x5) {
	        return _createEvent.apply(this, arguments);
	      }
	
	      createEvent.toString = function () {
	        return _createEvent.toString();
	      };
	
	      return createEvent;
	    }(function (firstName, lastName, email, username, password) {
	      return dispatch(createEvent(firstName, lastName, email, username, password));
	    })
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EventContainer);

/***/ },

/***/ 464:
/*!******************************************************!*\
  !*** ./~/react-addons-css-transition-group/index.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(/*! react-transition-group/CSSTransitionGroup */ 465);


/***/ },

/***/ 465:
/*!********************************************************!*\
  !*** ./~/react-transition-group/CSSTransitionGroup.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(/*! prop-types */ 48);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _TransitionGroup = __webpack_require__(/*! ./TransitionGroup */ 466);
	
	var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);
	
	var _CSSTransitionGroupChild = __webpack_require__(/*! ./CSSTransitionGroupChild */ 469);
	
	var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);
	
	var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ 476);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  transitionName: _PropTypes.nameShape.isRequired,
	
	  transitionAppear: _propTypes2.default.bool,
	  transitionEnter: _propTypes2.default.bool,
	  transitionLeave: _propTypes2.default.bool,
	  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
	  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
	  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
	};
	
	var defaultProps = {
	  transitionAppear: false,
	  transitionEnter: true,
	  transitionLeave: true
	};
	
	var CSSTransitionGroup = function (_React$Component) {
	  _inherits(CSSTransitionGroup, _React$Component);
	
	  function CSSTransitionGroup() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, CSSTransitionGroup);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
	      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
	        name: _this.props.transitionName,
	        appear: _this.props.transitionAppear,
	        enter: _this.props.transitionEnter,
	        leave: _this.props.transitionLeave,
	        appearTimeout: _this.props.transitionAppearTimeout,
	        enterTimeout: _this.props.transitionEnterTimeout,
	        leaveTimeout: _this.props.transitionLeaveTimeout
	      }, child);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  // We need to provide this childFactory so that
	  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	  // leave while it is leaving.
	
	
	  CSSTransitionGroup.prototype.render = function render() {
	    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
	  };
	
	  return CSSTransitionGroup;
	}(_react2.default.Component);
	
	CSSTransitionGroup.displayName = 'CSSTransitionGroup';
	
	
	CSSTransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
	CSSTransitionGroup.defaultProps = defaultProps;
	
	exports.default = CSSTransitionGroup;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 12)))

/***/ },

/***/ 466:
/*!*****************************************************!*\
  !*** ./~/react-transition-group/TransitionGroup.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _chainFunction = __webpack_require__(/*! chain-function */ 467);
	
	var _chainFunction2 = _interopRequireDefault(_chainFunction);
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(/*! prop-types */ 48);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _warning = __webpack_require__(/*! warning */ 245);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ 468);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  component: _propTypes2.default.any,
	  childFactory: _propTypes2.default.func,
	  children: _propTypes2.default.node
	};
	
	var defaultProps = {
	  component: 'span',
	  childFactory: function childFactory(child) {
	    return child;
	  }
	};
	
	var TransitionGroup = function (_React$Component) {
	  _inherits(TransitionGroup, _React$Component);
	
	  function TransitionGroup(props, context) {
	    _classCallCheck(this, TransitionGroup);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.performAppear = function (key, component) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      if (component.componentWillAppear) {
	        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
	      } else {
	        _this._handleDoneAppearing(key, component);
	      }
	    };
	
	    _this._handleDoneAppearing = function (key, component) {
	      if (component.componentDidAppear) {
	        component.componentDidAppear();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);
	
	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully appeared. Remove it.
	        _this.performLeave(key, component);
	      }
	    };
	
	    _this.performEnter = function (key, component) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      if (component.componentWillEnter) {
	        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
	      } else {
	        _this._handleDoneEntering(key, component);
	      }
	    };
	
	    _this._handleDoneEntering = function (key, component) {
	      if (component.componentDidEnter) {
	        component.componentDidEnter();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);
	
	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully entered. Remove it.
	        _this.performLeave(key, component);
	      }
	    };
	
	    _this.performLeave = function (key, component) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      if (component.componentWillLeave) {
	        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
	      } else {
	        // Note that this is somewhat dangerous b/c it calls setState()
	        // again, effectively mutating the component before all the work
	        // is done.
	        _this._handleDoneLeaving(key, component);
	      }
	    };
	
	    _this._handleDoneLeaving = function (key, component) {
	      if (component.componentDidLeave) {
	        component.componentDidLeave();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);
	
	      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	        // This entered again before it fully left. Add it again.
	        _this.keysToEnter.push(key);
	      } else {
	        _this.setState(function (state) {
	          var newChildren = _extends({}, state.children);
	          delete newChildren[key];
	          return { children: newChildren };
	        });
	      }
	    };
	
	    _this.childRefs = Object.create(null);
	
	    _this.state = {
	      children: (0, _ChildMapping.getChildMapping)(props.children)
	    };
	    return _this;
	  }
	
	  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  };
	
	  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key, this.childRefs[key]);
	      }
	    }
	  };
	
	  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
	    });
	
	    for (var key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (var _key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
	      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
	        this.keysToLeave.push(_key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  };
	
	  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
	    var _this2 = this;
	
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(function (key) {
	      return _this2.performEnter(key, _this2.childRefs[key]);
	    });
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(function (key) {
	      return _this2.performLeave(key, _this2.childRefs[key]);
	    });
	  };
	
	  TransitionGroup.prototype.render = function render() {
	    var _this3 = this;
	
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	
	    var _loop = function _loop(key) {
	      var child = _this3.state.children[key];
	      if (child) {
	        var isCallbackRef = typeof child.ref !== 'string';
	        var factoryChild = _this3.props.childFactory(child);
	        var ref = function ref(r) {
	          _this3.childRefs[key] = r;
	        };
	
	        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;
	
	        // Always chaining the refs leads to problems when the childFactory
	        // wraps the child. The child ref callback gets called twice with the
	        // wrapper and the child. So we only need to chain the ref if the
	        // factoryChild is not different from child.
	        if (factoryChild === child && isCallbackRef) {
	          ref = (0, _chainFunction2.default)(child.ref, ref);
	        }
	
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
	          key: key,
	          ref: ref
	        }));
	      }
	    };
	
	    for (var key in this.state.children) {
	      _loop(key);
	    }
	
	    // Do not forward TransitionGroup props to primitive DOM nodes
	    var props = _extends({}, this.props);
	    delete props.transitionLeave;
	    delete props.transitionName;
	    delete props.transitionAppear;
	    delete props.transitionEnter;
	    delete props.childFactory;
	    delete props.transitionLeaveTimeout;
	    delete props.transitionEnterTimeout;
	    delete props.transitionAppearTimeout;
	    delete props.component;
	
	    return _react2.default.createElement(this.props.component, props, childrenToRender);
	  };
	
	  return TransitionGroup;
	}(_react2.default.Component);
	
	TransitionGroup.displayName = 'TransitionGroup';
	
	
	TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
	TransitionGroup.defaultProps = defaultProps;
	
	exports.default = TransitionGroup;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 12)))

/***/ },

/***/ 467:
/*!***********************************!*\
  !*** ./~/chain-function/index.js ***!
  \***********************************/
/***/ function(module, exports) {

	
	module.exports = function chain(){
	  var len = arguments.length
	  var args = [];
	
	  for (var i = 0; i < len; i++)
	    args[i] = arguments[i]
	
	  args = args.filter(function(fn){ return fn != null })
	
	  if (args.length === 0) return undefined
	  if (args.length === 1) return args[0]
	
	  return args.reduce(function(current, next){
	    return function chainedFunction() {
	      current.apply(this, arguments);
	      next.apply(this, arguments);
	    };
	  })
	}


/***/ },

/***/ 468:
/*!********************************************************!*\
  !*** ./~/react-transition-group/utils/ChildMapping.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getChildMapping = getChildMapping;
	exports.mergeChildMappings = mergeChildMappings;
	
	var _react = __webpack_require__(/*! react */ 13);
	
	/**
	 * Given `this.props.children`, return an object mapping key to child.
	 *
	 * @param {*} children `this.props.children`
	 * @return {object} Mapping of key to child
	 */
	function getChildMapping(children) {
	  if (!children) {
	    return children;
	  }
	  var result = {};
	  _react.Children.map(children, function (child) {
	    return child;
	  }).forEach(function (child) {
	    result[child.key] = child;
	  });
	  return result;
	}
	
	/**
	 * When you're adding or removing children some may be added or removed in the
	 * same render pass. We want to show *both* since we want to simultaneously
	 * animate elements in and out. This function takes a previous set of keys
	 * and a new set of keys and merges them with its best guess of the correct
	 * ordering. In the future we may expose some of the utilities in
	 * ReactMultiChild to make this easy, but for now React itself does not
	 * directly have this concept of the union of prevChildren and nextChildren
	 * so we implement it here.
	 *
	 * @param {object} prev prev children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @param {object} next next children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @return {object} a key set that contains all keys in `prev` and all keys
	 * in `next` in a reasonable order.
	 */
	function mergeChildMappings(prev, next) {
	  prev = prev || {};
	  next = next || {};
	
	  function getValueForKey(key) {
	    if (next.hasOwnProperty(key)) {
	      return next[key];
	    }
	
	    return prev[key];
	  }
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextKeysPending = {};
	
	  var pendingKeys = [];
	  for (var prevKey in prev) {
	    if (next.hasOwnProperty(prevKey)) {
	      if (pendingKeys.length) {
	        nextKeysPending[prevKey] = pendingKeys;
	        pendingKeys = [];
	      }
	    } else {
	      pendingKeys.push(prevKey);
	    }
	  }
	
	  var i = void 0;
	  var childMapping = {};
	  for (var nextKey in next) {
	    if (nextKeysPending.hasOwnProperty(nextKey)) {
	      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	        var pendingNextKey = nextKeysPending[nextKey][i];
	        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	      }
	    }
	    childMapping[nextKey] = getValueForKey(nextKey);
	  }
	
	  // Finally, add the keys which didn't appear before any key in `next`
	  for (i = 0; i < pendingKeys.length; i++) {
	    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	  }
	
	  return childMapping;
	}

/***/ },

/***/ 469:
/*!*************************************************************!*\
  !*** ./~/react-transition-group/CSSTransitionGroupChild.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _addClass = __webpack_require__(/*! dom-helpers/class/addClass */ 470);
	
	var _addClass2 = _interopRequireDefault(_addClass);
	
	var _removeClass = __webpack_require__(/*! dom-helpers/class/removeClass */ 472);
	
	var _removeClass2 = _interopRequireDefault(_removeClass);
	
	var _requestAnimationFrame = __webpack_require__(/*! dom-helpers/util/requestAnimationFrame */ 473);
	
	var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);
	
	var _properties = __webpack_require__(/*! dom-helpers/transition/properties */ 475);
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(/*! prop-types */ 48);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 78);
	
	var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ 476);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var events = [];
	if (_properties.transitionEnd) events.push(_properties.transitionEnd);
	if (_properties.animationEnd) events.push(_properties.animationEnd);
	
	function addEndListener(node, listener) {
	  if (events.length) {
	    events.forEach(function (e) {
	      return node.addEventListener(e, listener, false);
	    });
	  } else {
	    setTimeout(listener, 0);
	  }
	
	  return function () {
	    if (!events.length) return;
	    events.forEach(function (e) {
	      return node.removeEventListener(e, listener, false);
	    });
	  };
	}
	
	var propTypes = {
	  children: _propTypes2.default.node,
	  name: _PropTypes.nameShape.isRequired,
	
	  // Once we require timeouts to be specified, we can remove the
	  // boolean flags (appear etc.) and just accept a number
	  // or a bool for the timeout flags (appearTimeout etc.)
	  appear: _propTypes2.default.bool,
	  enter: _propTypes2.default.bool,
	  leave: _propTypes2.default.bool,
	  appearTimeout: _propTypes2.default.number,
	  enterTimeout: _propTypes2.default.number,
	  leaveTimeout: _propTypes2.default.number
	};
	
	var CSSTransitionGroupChild = function (_React$Component) {
	  _inherits(CSSTransitionGroupChild, _React$Component);
	
	  function CSSTransitionGroupChild() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, CSSTransitionGroupChild);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
	      if (_this.props.appear) {
	        _this.transition('appear', done, _this.props.appearTimeout);
	      } else {
	        done();
	      }
	    }, _this.componentWillEnter = function (done) {
	      if (_this.props.enter) {
	        _this.transition('enter', done, _this.props.enterTimeout);
	      } else {
	        done();
	      }
	    }, _this.componentWillLeave = function (done) {
	      if (_this.props.leave) {
	        _this.transition('leave', done, _this.props.leaveTimeout);
	      } else {
	        done();
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
	    this.classNameAndNodeQueue = [];
	    this.transitionTimeouts = [];
	  };
	
	  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unmounted = true;
	
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });
	
	    this.classNameAndNodeQueue.length = 0;
	  };
	
	  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
	    var node = (0, _reactDom.findDOMNode)(this);
	
	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }
	
	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timer = null;
	    var removeListeners = void 0;
	
	    (0, _addClass2.default)(node, className);
	
	    // Need to do this to actually trigger a transition.
	    this.queueClassAndNode(activeClassName, node);
	
	    // Clean-up the animation after the specified delay
	    var finish = function finish(e) {
	      if (e && e.target !== node) {
	        return;
	      }
	
	      clearTimeout(timer);
	      if (removeListeners) removeListeners();
	
	      (0, _removeClass2.default)(node, className);
	      (0, _removeClass2.default)(node, activeClassName);
	
	      if (removeListeners) removeListeners();
	
	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };
	
	    if (timeout) {
	      timer = setTimeout(finish, timeout);
	      this.transitionTimeouts.push(timer);
	    } else if (_properties.transitionEnd) {
	      removeListeners = addEndListener(node, finish);
	    }
	  };
	
	  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
	    var _this2 = this;
	
	    this.classNameAndNodeQueue.push({
	      className: className,
	      node: node
	    });
	
	    if (!this.rafHandle) {
	      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
	        return _this2.flushClassNameAndNodeQueue();
	      });
	    }
	  };
	
	  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
	    if (!this.unmounted) {
	      this.classNameAndNodeQueue.forEach(function (obj) {
	        // This is for to force a repaint,
	        // which is necessary in order to transition styles when adding a class name.
	        /* eslint-disable no-unused-expressions */
	        obj.node.scrollTop;
	        /* eslint-enable no-unused-expressions */
	        (0, _addClass2.default)(obj.node, obj.className);
	      });
	    }
	    this.classNameAndNodeQueue.length = 0;
	    this.rafHandle = null;
	  };
	
	  CSSTransitionGroupChild.prototype.render = function render() {
	    var props = _extends({}, this.props);
	    delete props.name;
	    delete props.appear;
	    delete props.enter;
	    delete props.leave;
	    delete props.appearTimeout;
	    delete props.enterTimeout;
	    delete props.leaveTimeout;
	    delete props.children;
	    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
	  };
	
	  return CSSTransitionGroupChild;
	}(_react2.default.Component);
	
	CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';
	
	
	CSSTransitionGroupChild.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
	
	exports.default = CSSTransitionGroupChild;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 12)))

/***/ },

/***/ 470:
/*!*****************************************!*\
  !*** ./~/dom-helpers/class/addClass.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addClass;
	
	var _hasClass = __webpack_require__(/*! ./hasClass */ 471);
	
	var _hasClass2 = _interopRequireDefault(_hasClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function addClass(element, className) {
	  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
	}
	module.exports = exports['default'];

/***/ },

/***/ 471:
/*!*****************************************!*\
  !*** ./~/dom-helpers/class/hasClass.js ***!
  \*****************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hasClass;
	function hasClass(element, className) {
	  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
	}
	module.exports = exports["default"];

/***/ },

/***/ 472:
/*!********************************************!*\
  !*** ./~/dom-helpers/class/removeClass.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function removeClass(element, className) {
	  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	};

/***/ },

/***/ 473:
/*!*****************************************************!*\
  !*** ./~/dom-helpers/util/requestAnimationFrame.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inDOM = __webpack_require__(/*! ./inDOM */ 474);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
	var cancel = 'clearTimeout';
	var raf = fallback;
	var compatRaf = void 0;
	
	var getKey = function getKey(vendor, k) {
	  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
	};
	
	if (_inDOM2.default) {
	  vendors.some(function (vendor) {
	    var rafKey = getKey(vendor, 'request');
	
	    if (rafKey in window) {
	      cancel = getKey(vendor, 'cancel');
	      return raf = function raf(cb) {
	        return window[rafKey](cb);
	      };
	    }
	  });
	}
	
	/* https://github.com/component/raf */
	var prev = new Date().getTime();
	function fallback(fn) {
	  var curr = new Date().getTime(),
	      ms = Math.max(0, 16 - (curr - prev)),
	      req = setTimeout(fn, ms);
	
	  prev = curr;
	  return req;
	}
	
	compatRaf = function compatRaf(cb) {
	  return raf(cb);
	};
	compatRaf.cancel = function (id) {
	  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
	};
	exports.default = compatRaf;
	module.exports = exports['default'];

/***/ },

/***/ 474:
/*!*************************************!*\
  !*** ./~/dom-helpers/util/inDOM.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ },

/***/ 475:
/*!************************************************!*\
  !*** ./~/dom-helpers/transition/properties.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;
	
	var _inDOM = __webpack_require__(/*! ../util/inDOM */ 474);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var transform = 'transform';
	var prefix = void 0,
	    transitionEnd = void 0,
	    animationEnd = void 0;
	var transitionProperty = void 0,
	    transitionDuration = void 0,
	    transitionTiming = void 0,
	    transitionDelay = void 0;
	var animationName = void 0,
	    animationDuration = void 0,
	    animationTiming = void 0,
	    animationDelay = void 0;
	
	if (_inDOM2.default) {
	  var _getTransitionPropert = getTransitionProperties();
	
	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
	
	
	  exports.transform = transform = prefix + '-' + transform;
	  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
	  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
	  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
	  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';
	
	  exports.animationName = animationName = prefix + '-animation-name';
	  exports.animationDuration = animationDuration = prefix + '-animation-duration';
	  exports.animationTiming = animationTiming = prefix + '-animation-delay';
	  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
	}
	
	exports.transform = transform;
	exports.transitionProperty = transitionProperty;
	exports.transitionTiming = transitionTiming;
	exports.transitionDelay = transitionDelay;
	exports.transitionDuration = transitionDuration;
	exports.transitionEnd = transitionEnd;
	exports.animationName = animationName;
	exports.animationDuration = animationDuration;
	exports.animationTiming = animationTiming;
	exports.animationDelay = animationDelay;
	exports.animationEnd = animationEnd;
	exports.default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};
	
	
	function getTransitionProperties() {
	  var style = document.createElement('div').style;
	
	  var vendorMap = {
	    O: function O(e) {
	      return 'o' + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return e.toLowerCase();
	    },
	    Webkit: function Webkit(e) {
	      return 'webkit' + e;
	    },
	    ms: function ms(e) {
	      return 'MS' + e;
	    }
	  };
	
	  var vendors = Object.keys(vendorMap);
	
	  var transitionEnd = void 0,
	      animationEnd = void 0;
	  var prefix = '';
	
	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];
	
	    if (vendor + 'TransitionProperty' in style) {
	      prefix = '-' + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }
	
	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
	
	  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
	
	  style = null;
	
	  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ },

/***/ 476:
/*!*****************************************************!*\
  !*** ./~/react-transition-group/utils/PropTypes.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.nameShape = undefined;
	exports.transitionTimeout = transitionTimeout;
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(/*! prop-types */ 48);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function transitionTimeout(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;
	
	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');
	
	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	      }
	    }
	
	    return null;
	  };
	}
	
	var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	  enter: _propTypes2.default.string,
	  leave: _propTypes2.default.string,
	  active: _propTypes2.default.string
	}), _propTypes2.default.shape({
	  enter: _propTypes2.default.string,
	  enterActive: _propTypes2.default.string,
	  leave: _propTypes2.default.string,
	  leaveActive: _propTypes2.default.string,
	  appear: _propTypes2.default.string,
	  appearActive: _propTypes2.default.string
	})]);

/***/ }

})
//# sourceMappingURL=0.817f31a066e3c74d76dc.hot-update.js.map