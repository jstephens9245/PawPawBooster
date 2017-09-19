webpackHotUpdate(0,{

/***/ 9:
/*!***********************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./client/styles/main.scss ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, "/** Settings\n */\n/** Tools\n * Mixins / Functions\n */\n/** Generic\n * Resets\n */\n/** Base\n * Element styles (no classes)\n */\n/** Objects\n * Reusable layout patterns\n * class prefix: `o-`\n */\n/** Components\n * Patterns with a visual design\n * class prefix: `c-`\n */\n.navbar {\n  border-bottom: 1px solid black; }\n\n.navbar a {\n  color: black; }\n\n.icon-bar {\n  background-color: black; }\n\n.navbar-toggle {\n  border-color: black; }\n\n.addBoard {\n  text-decoration: none;\n  font-size: 1.5em;\n  opacity: 0.5;\n  color: black;\n  text-align: center;\n  background-color: grey;\n  padding-top: 4%;\n  padding-bottom: 4%; }\n  .addBoard:hover, .addBoard:focus {\n    text-decoration: none;\n    color: black; }\n\n.screen {\n  height: 80vh;\n  width: 100%;\n  border: thin solid black;\n  background-color: #ffffff;\n  padding-bottom: 10%;\n  padding-top: 2%;\n  overflow: auto; }\n\n.note {\n  width: 100%;\n  height: 100%; }\n\ninput:focus {\n  outline: none; }\n\n.signup-form-container {\n  width: 90vw;\n  height: 80vh;\n  min-height: 30em;\n  background-color: #fff;\n  margin: 0 auto;\n  border: 1px solid black; }\n\n.signup-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  margin-top: 1em; }\n\n.login-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  margin-top: 1em; }\n\n.signup-input-field {\n  border: 1px solid darkgrey;\n  width: 90%;\n  text-align: left;\n  line-height: 2em;\n  height: 2em;\n  display: block;\n  margin: 0 auto;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field {\n  border: 1px solid darkgrey;\n  width: 100%;\n  text-align: left;\n  line-height: 2em;\n  display: block;\n  height: 2em;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.signup-disclaimer {\n  font-size: 0.65em;\n  margin-left: 3.7em;\n  margin-right: 3.7em; }\n\n.login-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n.signup-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n.login-link-container {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center; }\n\n.signup-link-container {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center; }\n\n@media screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 2), screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {\n  .signup-form-container {\n    width: 50vw;\n    height: 60vh;\n    background-color: #fff;\n    margin: 0 auto;\n    border: 1px solid black; } }\n\n/** Controls\n * Override / Helper / Utility classes\n * class prefix: `ctrl-`\n */\n", ""]);
	
	// exports


/***/ },

/***/ 221:
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
	
	var _store = __webpack_require__(/*! ./store */ 222);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 233);
	
	var _BoardContainer = __webpack_require__(/*! ./containers/BoardContainer */ 286);
	
	var _BoardContainer2 = _interopRequireDefault(_BoardContainer);
	
	var _CreateBoardContainer = __webpack_require__(/*! ./containers/CreateBoardContainer */ 288);
	
	var _CreateBoardContainer2 = _interopRequireDefault(_CreateBoardContainer);
	
	var _SignupContainer = __webpack_require__(/*! ./containers/SignupContainer */ 290);
	
	var _SignupContainer2 = _interopRequireDefault(_SignupContainer);
	
	var _board = __webpack_require__(/*! ./actions/board */ 320);
	
	var _Index = __webpack_require__(/*! ./components/Index */ 317);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//onEnters
	
	
	//action-creators
	function onBoardEnter(nextRouterState) {
	  var boardId = nextRouterState.params.boardId;
	  _store2.default.dispatch((0, _board.getBoard)(boardId));
	}
	
	//components
	
	
	//containers
	
	
	function onMyBoardEnter(nextRouterState) {
	  _store2.default.dispatch((0, _board.getAllBoards)());
	}
	
	function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Index2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: '/boards/:boardId', component: _BoardContainer2.default, onEnter: onBoardEnter }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _SignupContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/myboards', component: _CreateBoardContainer2.default, onEnter: onMyBoardEnter })
	    )
	  );
	}

/***/ },

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
	
	var _noteReducer = __webpack_require__(/*! ./noteReducer */ 333);
	
	var _noteReducer2 = _interopRequireDefault(_noteReducer);
	
	var _userReducer = __webpack_require__(/*! ./userReducer */ 321);
	
	var _userReducer2 = _interopRequireDefault(_userReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var combinedReducer = exports.combinedReducer = (0, _redux.combineReducers)({
	  boardReducer: _boardReducer2.default,
	  noteReducer: _noteReducer2.default,
	  userReducer: _userReducer2.default
	});
	
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
	/* SHARED CONSTANTS */
	var CLEAR_STORE = exports.CLEAR_STORE = 'CLEAR_STORE';
	
	/* BOARD CONSTANTS */
	
	var RECEIVE_BOARD = exports.RECEIVE_BOARD = 'RECEIVE_BOARD';
	var RECEIVE_BOARDS = exports.RECEIVE_BOARDS = 'RECEIVE_BOARDS';
	var ADD_NEW_BOARD = exports.ADD_NEW_BOARD = 'ADD_NEW_BOARD';
	var RECEIVE_BOARD_NOTES = exports.RECEIVE_BOARD_NOTES = 'RECEIVE_BOARD_NOTES';
	
	/* NOTE CONSTANTS */
	var RECEIVE_NOTE = exports.RECEIVE_NOTE = 'RECEIVE_NOTE';
	var RECEIVE_NOTES = exports.RECEIVE_NOTES = 'RECEIVE_NOTES';
	
	/* USER CONSTANTS */
	var SET_LOGIN_USER = exports.SET_LOGIN_USER = 'SET_LOGIN_USER';
	var REMOVE_LOGIN_USER = exports.REMOVE_LOGIN_USER = 'REMOVE_LOGIN_USER';

/***/ },

/***/ 232:
/*!*****************************************!*\
  !*** ./client/reducers/boardReducer.js ***!
  \*****************************************/
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
	
	    case _constants.RECEIVE_BOARD:
	      newState.selectedBoard = action.board;
	      break;
	    case _constants.RECEIVE_BOARDS:
	      newState.allBoards = action.boards;
	      newState.permissions = action.permissions;
	      break;
	    case _constants.RECEIVE_BOARD_NOTES:
	      newState.selectedBoardNotes = action.notes;
	      break;
	    case _constants.ADD_NEW_BOARD:
	      newState.allBoards = [].concat(_toConsumableArray(newState.allBoards), [action.board]);
	      break;
	    default:
	      return state;
	
	  }
	
	  return newState;
	};
	
	var _constants = __webpack_require__(/*! ../constants */ 231);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initialState = { selectedBoard: {}, allBoards: [], selectedBoardNotes: [], permissions: [] };

/***/ },

/***/ 286:
/*!*********************************************!*\
  !*** ./client/containers/BoardContainer.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ../store */ 222);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _Board = __webpack_require__(/*! ../components/Board */ 334);
	
	var _Board2 = _interopRequireDefault(_Board);
	
	var _socket = __webpack_require__(/*! socket.io-client */ 335);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _board = __webpack_require__(/*! ../actions/board */ 320);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// const socket = io('', { path: '/api/board/1' });
	
	var BoardContainer = function (_Component) {
	  _inherits(BoardContainer, _Component);
	
	  function BoardContainer() {
	    _classCallCheck(this, BoardContainer);
	
	    return _possibleConstructorReturn(this, (BoardContainer.__proto__ || Object.getPrototypeOf(BoardContainer)).apply(this, arguments));
	  }
	
	  _createClass(BoardContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('THIS BOARD CONTAINER props', this.props);
	      var _props = this.props,
	          dispatch = _props.dispatch,
	          board = _props.board;
	
	
	      var boardId = board.id;
	
	      // dispatch(getBoardNotes(boardId));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Board2.default, this.props);
	    }
	  }]);
	
	  return BoardContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return { board: state.boardReducer.selectedBoard, notes: state.boardReducer.selectedBoardNotes };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BoardContainer);

/***/ },

/***/ 288:
/*!***************************************************!*\
  !*** ./client/containers/CreateBoardContainer.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _CreateBoard = __webpack_require__(/*! ../components/CreateBoard */ 289);
	
	var _CreateBoard2 = _interopRequireDefault(_CreateBoard);
	
	var _board = __webpack_require__(/*! ../actions/board */ 320);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    user: state.userReducer.loggedInUser,
	    boards: state.boardReducer.allBoards,
	    permissions: state.boardReducer.permissions
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    create: function create(boardName) {
	      dispatch((0, _board.createBoard)(boardName));
	    }
	  };
	};
	
	var CB = function (_Component) {
	  _inherits(CB, _Component);
	
	  function CB(props) {
	    _classCallCheck(this, CB);
	
	    var _this = _possibleConstructorReturn(this, (CB.__proto__ || Object.getPrototypeOf(CB)).call(this, props));
	
	    _this.state = {
	      filterStatus: 'all'
	    };
	
	    _this.filterChange = _this.filterChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(CB, [{
	    key: 'filterChange',
	    value: function filterChange(filterValue) {
	      this.setState({ filterStatus: filterValue });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_CreateBoard2.default, {
	        user: this.props.user,
	        boards: this.props.boards,
	        permissions: this.props.permissions,
	        create: this.props.create,
	        filterStatus: this.state.filterStatus,
	        filterChange: this.filterChange
	      });
	    }
	  }]);
	
	  return CB;
	}(_react.Component);
	
	var CreateBoardContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CB);
	
	exports.default = CreateBoardContainer;

/***/ },

/***/ 289:
/*!******************************************!*\
  !*** ./client/components/CreateBoard.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 233);
	
	var _ModalContainer = __webpack_require__(/*! ../containers/ModalContainer */ 322);
	
	var _ModalContainer2 = _interopRequireDefault(_ModalContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CreateBoard = function CreateBoard(props) {
	  var boards = props.boards;
	  var permissions = props.permissions;
	  var filterArr = [];
	
	  if (props.filterStatus !== 'all') {
	    filterArr = permissions.filter(function (permission) {
	      return permission.permission === props.filterStatus;
	    }).map(function (permission) {
	      return permission.board_id;
	    });
	  } else {
	    filterArr = permissions.map(function (permission) {
	      return permission.board_id;
	    });
	  }
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      _react2.default.createElement(
	        'div',
	        { className: 'col-xs-4 col-md-4 col-lg-4 col-xs-offset-1' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Boards'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'col-xs-5 col-md-3 col-lg-4 col-xs-offset-1' },
	        _react2.default.createElement(
	          'h5',
	          { style: { float: 'right', marginTop: '30px' } },
	          _react2.default.createElement(
	            'a',
	            { onClick: function onClick() {
	                props.filterChange('all');
	              } },
	            'all '
	          ),
	          '/',
	          _react2.default.createElement(
	            'a',
	            { onClick: function onClick() {
	                props.filterChange('admin');
	              } },
	            ' admin '
	          ),
	          '/',
	          _react2.default.createElement(
	            'a',
	            { onClick: function onClick() {
	                props.filterChange('user');
	              } },
	            ' user'
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      !!boards.length && boards.map(function (board) {
	        if (filterArr.indexOf(board.id) !== -1) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10 col-md-8 col-lg-4 col-xs-offset-1', key: board.id },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { className: 'thumbnail', to: '/myboards/' + board.id },
	              _react2.default.createElement(
	                'div',
	                { className: 'caption' },
	                _react2.default.createElement(
	                  'h5',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    board.name
	                  )
	                )
	              )
	            )
	          );
	        }
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: 'col-xs-10 col-md-8 col-lg-4 col-xs-offset-1' },
	        _react2.default.createElement(_ModalContainer2.default, { createBoard: props.create })
	      )
	    )
	  );
	};
	exports.default = CreateBoard;

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
	
	var _Signup = __webpack_require__(/*! ../components/Signup */ 385);
	
	var _Signup2 = _interopRequireDefault(_Signup);
	
	var _Login = __webpack_require__(/*! ../components/Login */ 386);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SignupContainer = function (_Component) {
	  _inherits(SignupContainer, _Component);
	
	  function SignupContainer(props) {
	    _classCallCheck(this, SignupContainer);
	
	    var _this = _possibleConstructorReturn(this, (SignupContainer.__proto__ || Object.getPrototypeOf(SignupContainer)).call(this, props));
	
	    _this.state = {
	      type: 'signup',
	      firstName: '',
	      lastName: '',
	      email: '',
	      password: ''
	    };
	
	    _this.submitForm = _this.submitForm.bind(_this);
	    _this.handleInput = _this.handleInput.bind(_this);
	    _this.changeForm = _this.changeForm.bind(_this);
	    _this.loginForm = _this.loginForm.bind(_this);
	    return _this;
	  }
	
	  _createClass(SignupContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.checkLoginStatus();
	    }
	  }, {
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
	    key: 'changeForm',
	    value: function changeForm(type) {
	      this.setState({ type: type });
	    }
	  }, {
	    key: 'handleInput',
	    value: function handleInput(e) {
	      this.setState(_defineProperty({}, e.target.name, e.target.value));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'signup-form-container' },
	          this.state.type === 'signup' ? _react2.default.createElement(_Signup2.default, { submitForm: this.submitForm,
	            changeForm: this.changeForm,
	            handleInput: this.handleInput }) : _react2.default.createElement(_Login2.default, { loginForm: this.loginForm,
	            handleInput: this.handleInput,
	            changeForm: this.changeForm })
	        )
	      );
	    }
	  }]);
	
	  return SignupContainer;
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
	    },
	    checkLoginStatus: function checkLoginStatus() {
	      return dispatch((0, _user.checkLoginStatus)());
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SignupContainer);

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
	exports.checkLoginStatus = exports.logoutUser = exports.loginUser = exports.createUser = exports.removeLoginUser = exports.setLoginUser = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 291);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 233);
	
	var _constants = __webpack_require__(/*! ../constants */ 231);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var setLoginUser = exports.setLoginUser = function setLoginUser(user) {
	  return {
	    type: _constants.SET_LOGIN_USER,
	    user: user
	  };
	};
	
	var removeLoginUser = exports.removeLoginUser = function removeLoginUser() {
	  return {
	    type: _constants.REMOVE_LOGIN_USER
	  };
	};
	
	var createUser = exports.createUser = function createUser(firstName, lastName, email, password) {
	  return function (dispatch) {
	    _axios2.default.post('/api/user/', { first_name: firstName, last_name: lastName, email: email, password: password }).then(function (res) {
	      if (res.data.message) {
	        return; //email already exists
	      } else {
	        dispatch(setLoginUser(res.data));
	        _reactRouter.browserHistory.push('/');
	      }
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};
	
	var loginUser = exports.loginUser = function loginUser(email, password) {
	  return function (dispatch) {
	    _axios2.default.post('/api/auth/', { email: email, password: password }).then(function (res) {
	      if (res.data.message) {
	        return; // password is incorrect
	      } else {
	        dispatch(setLoginUser(res.data));
	        _reactRouter.browserHistory.push('/');
	      }
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};
	
	var logoutUser = exports.logoutUser = function logoutUser() {
	  return function (dispatch) {
	    _axios2.default.delete('/api/auth/').then(function (res) {
	      return dispatch(removeLoginUser(res.data));
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};
	
	/* check login state by calling server and checking user sessions */
	var checkLoginStatus = exports.checkLoginStatus = function checkLoginStatus() {
	  return function (dispatch) {
	    _axios2.default.get('/api/auth/').then(function (res) {
	      return dispatch(setLoginUser(res.data));
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};

/***/ },

/***/ 317:
/*!************************************!*\
  !*** ./client/components/Index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NavbarContainer = __webpack_require__(/*! ../containers/NavbarContainer */ 318);
	
	var _NavbarContainer2 = _interopRequireDefault(_NavbarContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Index = function Index(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_NavbarContainer2.default, null),
	    _react2.default.createElement(
	      'div',
	      null,
	      props.children && _react2.default.cloneElement(props.children, props)
	    )
	  );
	};
	
	exports.default = Index;

/***/ },

/***/ 319:
/*!*************************************!*\
  !*** ./client/components/Navbar.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 233);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Navbar = function Navbar(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'nav',
	      { className: 'navbar navbar navbar-static-top', role: 'navigation' },
	      _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'navbar-header' },
	          _react2.default.createElement(
	            'button',
	            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar',
	              'aria-expanded': props.aria, 'aria-controls': 'navbar', onClick: function onClick() {
	                props.expandNav();
	              } },
	            _react2.default.createElement(
	              'span',
	              { className: 'sr-only' },
	              'Toggle navigation'
	            ),
	            _react2.default.createElement('span', { className: 'icon-bar' }),
	            _react2.default.createElement('span', { className: 'icon-bar' }),
	            _react2.default.createElement('span', { className: 'icon-bar' })
	          ),
	          _react2.default.createElement(
	            'a',
	            { className: 'navbar-brand', href: '/' },
	            'Notion'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'navbar', className: props.navClass, 'aria-expanded': props.aria },
	          _react2.default.createElement(
	            'ul',
	            { className: 'nav navbar-nav', onClick: function onClick() {
	                props.expandNav();
	              } },
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/' },
	                'Home'
	              )
	            ),
	            !Object.keys(props.user).length ? _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/signup' },
	                'Login/SignUp'
	              )
	            ) : _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { onClick: function onClick() {
	                    props.logoutUser();
	                  } },
	                'Logout'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/myboards' },
	                'My Boards'
	              )
	            )
	          )
	        )
	      )
	    )
	  );
	};
	exports.default = Navbar;

/***/ },

/***/ 320:
/*!*********************************!*\
  !*** ./client/actions/board.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBoardNotes = exports.getBoard = exports.createBoard = exports.receiveBoardNotes = exports.getAllBoards = exports.addNewBoard = exports.receiveAllBoards = exports.receiveBoard = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 291);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 231);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var receiveBoard = exports.receiveBoard = function receiveBoard(board) {
	  return {
	    type: _constants.RECEIVE_BOARD,
	    board: board
	  };
	};
	
	var receiveAllBoards = exports.receiveAllBoards = function receiveAllBoards(boards, permissions) {
	  return {
	    type: _constants.RECEIVE_BOARDS,
	    boards: boards,
	    permissions: permissions
	  };
	};
	
	var addNewBoard = exports.addNewBoard = function addNewBoard(board) {
	  return {
	    type: _constants.ADD_NEW_BOARD,
	    board: board
	  };
	};
	
	var getAllBoards = exports.getAllBoards = function getAllBoards() {
	  return function (dispatch) {
	    _axios2.default.get('/api/boards/').then(function (res) {
	      return res.data;
	    }).then(function (boards) {
	      console.log(boards);
	      dispatch(receiveAllBoards(boards.boards, boards.permissions));
	    });
	  };
	};
	
	var receiveBoardNotes = exports.receiveBoardNotes = function receiveBoardNotes(notes) {
	  return {
	    type: _constants.RECEIVE_BOARD_NOTES,
	    notes: notes
	  };
	};
	
	var createBoard = exports.createBoard = function createBoard(boardName) {
	  return function (dispatch) {
	    _axios2.default.post('/api/boards/', { boardName: boardName }).then(function (res) {
	      return res.data;
	    }).then(function (board) {
	      dispatch(addNewBoard(board));
	    });
	  };
	};
	
	var getBoard = exports.getBoard = function getBoard(boardId) {
	  return function (dispatch) {
	    _axios2.default.get('/api/boards/' + boardId).then(function (res) {
	      return res.data;
	    }).then(function (board) {
	      dispatch(receiveBoard(board));
	    });
	  };
	};
	
	var getBoardNotes = exports.getBoardNotes = function getBoardNotes(boardId) {
	  return function (dispatch) {
	    console.log('IN GBN');
	    _axios2.default.get('/api/notes/', { params: { board_id: boardId } }).then(function (res) {
	      return res.data;
	    }).then(function (boardNotes) {
	      dispatch(receiveBoardNotes(boardNotes));
	    });
	  };
	};

/***/ },

/***/ 333:
/*!****************************************!*\
  !*** ./client/reducers/noteReducer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = noteReducer;
	
	var _constants = __webpack_require__(/*! ../constants */ 231);
	
	var initState = {
	  all: [],
	  selected: null
	};
	
	function noteReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	  var action = arguments[1];
	
	  var nextState = Object.assign({}, state);
	
	  switch (action.type) {
	    case _constants.RECEIVE_NOTES:
	      nextState.all = action.payload;
	      break;
	    case _constants.SELECT_NOTE:
	      nextState.selected = nextState.all.find(function (note) {
	        return note.id === action.payload.id;
	      });
	      break;
	    default:
	      return state;
	  }
	  return nextState;
	}

/***/ },

/***/ 334:
/*!************************************!*\
  !*** ./client/components/Board.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	
	  var table = [];
	
	  var notes = [{ id: 1, img: '/assets/postit.jpeg' }, { id: 2, img: '/assets/postit.jpeg' }, { id: 3, img: '/assets/postit.jpeg' }, { id: 1, img: '/assets/postit.jpeg' }];
	  // console.log(notes);
	
	
	  console.log('IN BOARD', props);
	  return _react2.default.createElement(
	    'div',
	    { className: 'col-xs-12', key: props.board.id },
	    _react2.default.createElement(
	      'h2',
	      { className: 'text-center' },
	      _react2.default.createElement(
	        'span',
	        null,
	        props.board.name
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'screen col-xs-12' },
	        notes.map(function (note) {
	          return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'div',
	              { className: 'note' },
	              _react2.default.createElement('img', { src: note.img })
	            )
	          );
	        })
	      )
	    )
	  );
	};

/***/ },

/***/ 385:
/*!*************************************!*\
  !*** ./client/components/Signup.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Signup = function Signup(props) {
	  return _react2.default.createElement(
	    "form",
	    { className: "form" },
	    _react2.default.createElement(
	      "div",
	      { className: "" },
	      _react2.default.createElement(
	        "label",
	        { className: "signup-label" },
	        " Sign up with your email address "
	      )
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement("input", { type: "text", name: "firstName", placeholder: "First name",
	        className: "input signup-input-field",
	        onChange: function onChange(e) {
	          props.handleInput(e);
	        } })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement("input", { type: "text", name: "lastName", placeholder: "Last name",
	        className: "signup-input-field",
	        onChange: function onChange(e) {
	          props.handleInput(e);
	        } })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement("input", { type: "email", name: "email", placeholder: "Email",
	        className: "signup-input-field",
	        onChange: function onChange(e) {
	          props.handleInput(e);
	        } })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement("input", { type: "password", name: "password", placeholder: "Password",
	        className: "signup-input-field",
	        onChange: function onChange(e) {
	          props.handleInput(e);
	        } })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "" },
	      _react2.default.createElement(
	        "label",
	        { className: "signup-disclaimer" },
	        "By clicking on Sign up, you agree to notion's terms & conditions and privacy policy"
	      )
	    ),
	    _react2.default.createElement(
	      "button",
	      { className: "signup-submit-button", type: "submit", onClick: function onClick(e) {
	          props.submitForm(e);
	        } },
	      " SIGN UP "
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "login-link-container" },
	      "Already have an account? ",
	      _react2.default.createElement(
	        "label",
	        null,
	        _react2.default.createElement(
	          "a",
	          { onClick: function onClick() {
	              props.changeForm('login');
	            } },
	          " Login"
	        ),
	        " "
	      )
	    )
	  );
	};
	
	exports.default = Signup;

/***/ },

/***/ 386:
/*!************************************!*\
  !*** ./client/components/Login.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Login = function Login(props) {
	  return _react2.default.createElement(
	    "form",
	    { className: "form" },
	    _react2.default.createElement(
	      "div",
	      { className: "" },
	      _react2.default.createElement(
	        "label",
	        { className: "login-label" },
	        " Login with your email address "
	      )
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement("input", { type: "email", name: "email", placeholder: "E-mail",
	        className: "signup-input-field",
	        onChange: function onChange(e) {
	          props.handleInput(e);
	        } })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement("input", {
	        type: "password",
	        name: "password",
	        placeholder: "password",
	        className: "signup-input-field",
	        onChange: function onChange(e) {
	          props.handleInput(e);
	        } })
	    ),
	    _react2.default.createElement(
	      "button",
	      { className: "login-submit-button", type: "submit", onClick: function onClick(e) {
	          props.loginForm(e);
	        } },
	      " Login "
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "signup-link-container" },
	      "Don't have an account? ",
	      _react2.default.createElement(
	        "label",
	        null,
	        _react2.default.createElement(
	          "a",
	          { onClick: function onClick() {
	              props.changeForm('signup');
	            } },
	          " Signup"
	        ),
	        " "
	      )
	    )
	  );
	};
	
	exports.default = Login;

/***/ }

})
//# sourceMappingURL=0.8fc56304ff1fa925edff.hot-update.js.map