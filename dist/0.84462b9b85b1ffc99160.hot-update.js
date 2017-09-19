webpackHotUpdate(0,{

/***/ 230:
/*!****************************************!*\
  !*** ./client/reducers/rootReducer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combinedReducer = undefined;
	exports.default = rootReducer;
	
	var _constants = __webpack_require__(/*! ../constants */ 231);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _boardReducer = __webpack_require__(/*! ./boardReducer */ 232);
	
	var _boardReducer2 = _interopRequireDefault(_boardReducer);
	
	var _userReducer = __webpack_require__(/*! ./userReducer */ 321);
	
	var _userReducer2 = _interopRequireDefault(_userReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var combinedReducer = exports.combinedReducer = (0, _redux.combineReducers)({ boardReducer: _boardReducer2.default, userReducer: _userReducer2.default });
	
	function rootReducer(store, action) {
	  if (action.type === _constants.CLEAR_STORE) return combinedReducer();
	
	  return combinedReducer(store, action);
	}

/***/ },

/***/ 231:
/*!*****************************!*\
  !*** ./client/constants.js ***!
  \*****************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var RECEIVE_BOARD = exports.RECEIVE_BOARD = 'RECEIVE_BOARD';
	
	var SET_LOGIN_USER = exports.SET_LOGIN_USER = 'SET_LOGIN_USER';
	
	var CLEAR_STORE = exports.CLEAR_STORE = 'CLEAR_STORE';

/***/ },

/***/ 290:
/*!**********************************************!*\
  !*** ./client/containers/SignupContainer.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(/*! axios */ 291);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _user = __webpack_require__(/*! ../actions/user */ 316);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Signup = function (_Component) {
		_inherits(Signup, _Component);
	
		function Signup(props) {
			_classCallCheck(this, Signup);
	
			var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));
	
			_this.state = {
				type: 'signup',
				firstName: '',
				lastName: '',
				email: '',
				password: ''
			};
	
			_this.submitForm = _this.submitForm.bind(_this);
			_this.handleInput = _this.handleInput.bind(_this);
			return _this;
		}
	
		_createClass(Signup, [{
			key: 'submitForm',
			value: function submitForm(e) {
				e.preventDefault();
				this.props.createUser(this.state.firstName, this.state.lastName, this.state.email, this.state.password);
			}
		}, {
			key: 'loginForm',
			value: function loginForm(e) {
				e.preventDefault();
				this.props.loginUser(this.state.email, this.state.password);
			}
		}, {
			key: 'handleInput',
			value: function handleInput(e) {
				this.setState(_defineProperty({}, e.target.name, e.target.value));
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;
	
				return _react2.default.createElement(
					'div',
					{ className: 'signup-form-container' },
					_react2.default.createElement(
						'form',
						{ className: 'form' },
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'form-label' },
								'First Name'
							),
							_react2.default.createElement('input', { type: 'text', name: 'firstName', placeholder: 'First name',
								className: 'input',
								onChange: function onChange(e) {
									_this2.handleInput(e);
								} })
						),
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'form-label' },
								'Last Name'
							),
							_react2.default.createElement('input', { type: 'text', name: 'lastName', placeholder: 'Last name',
								className: 'input',
								onChange: function onChange(e) {
									_this2.handleInput(e);
								} })
						),
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'form-label' },
								' E-mail '
							),
							_react2.default.createElement('input', { type: 'email', name: 'email', placeholder: 'E-mail',
								className: 'input',
								onChange: function onChange(e) {
									_this2.handleInput(e);
								} })
						),
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'form-label' },
								' Password '
							),
							_react2.default.createElement('input', { type: 'password', name: 'password', placeholder: 'password',
								className: 'input',
								onChange: function onChange(e) {
									_this2.handleInput(e);
								} })
						),
						this.state.type === 'signup' ? _react2.default.createElement(
							'button',
							{ type: 'submit', onClick: function onClick(e) {
									_this2.submitForm(e);
								} },
							' Submit '
						) : _react2.default.createElement(
							'button',
							{ type: 'submit', onClick: function onClick(e) {
									_this2.loginForm(e);
								} },
							' Login '
						)
					)
				);
			}
		}]);
	
		return Signup;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
		return {};
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
		return {
			createUser: function createUser(firstName, lastName, email, password) {
				return dispatch((0, _user.createUser)(firstName, lastName, email, password));
			},
			loginUser: function loginUser(email, password) {
				return dispatch((0, _user.loginUser)(email, password));
			}
		};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Signup);

/***/ },

/***/ 316:
/*!********************************!*\
  !*** ./client/actions/user.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.loginUser = exports.createUser = exports.setLoginUser = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 291);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 231);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var setLoginUser = exports.setLoginUser = function setLoginUser(user) {
	  return {
	    type: _constants.SET_LOGIN_USER,
	    user: user
	  };
	};
	
	var createUser = exports.createUser = function createUser(firstName, lastName, email, password) {
	  return function (dispatch) {
	    _axios2.default.post('/api/user/', { first_name: firstName, last_name: lastName, email: email, password: password }).then(function (res) {
	      return dispatch(setLoginUser(res.data));
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};
	
	var loginUser = exports.loginUser = function loginUser(email, password) {
	  return function (dispatch) {
	    _axios2.default.post('/api/auth/', { email: email, password: password }).then(function (res) {
	      return dispatch(setLoginUser(res.data));
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};

/***/ },

/***/ 321:
/*!****************************************!*\
  !*** ./client/reducers/userReducer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var newState = Object.assign({}, state);
	  switch (action.type) {
	    case _constants.SET_LOGIN_USER:
	      newState.loggedInUser = action.user;
	      break;
	    default:
	      return state;
	  }
	  return newState;
	};
	
	var _constants = __webpack_require__(/*! ../constants */ 231);
	
	var initialState = { loggedInUser: {} };

/***/ }

})
//# sourceMappingURL=0.84462b9b85b1ffc99160.hot-update.js.map