webpackHotUpdate(0,{

/***/ 9:
/*!***********************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./client/styles/main.scss ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Comfortaa);", ""]);
	
	// module
	exports.push([module.id, "/** Settings\n */\n/** Tools\n * Mixins / Functions\n */\n/** Generic\n * Resets\n */\nbody {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  position: relative;\n  box-sizing: inherit; }\n\n/** Base\n * Element styles (no classes)\n */\n/** Objects\n * Reusable layout patterns\n * class prefix: `o-`\n */\n/** Components\n * Patterns with a visual design\n * class prefix: `c-`\n */\n.navbar {\n  border-bottom: 1px solid black; }\n\n.navbar a {\n  color: black; }\n\n.icon-bar {\n  background-color: black; }\n\n.navbar-toggle {\n  border-color: black; }\n\n.addBoard {\n  text-decoration: none;\n  font-size: 1.5em;\n  opacity: 0.5;\n  color: black;\n  text-align: center;\n  background-color: grey;\n  padding-top: 4%;\n  padding-bottom: 4%; }\n  .addBoard:hover, .addBoard:focus {\n    text-decoration: none;\n    color: black; }\n\n.screen {\n  height: 80vh;\n  width: 100%;\n  border: thin solid black;\n  background-color: #ffffff;\n  padding-bottom: 10%;\n  padding-top: 2%;\n  overflow: auto; }\n\n.note {\n  width: 100%;\n  height: 100%; }\n\n.grid {\n  background-color: #EF2D29; }\n\n#table {\n  background-color: #CEE3F8;\n  height: 100vh;\n  width: 100vw; }\n\n#table {\n  background-color: #CEE3F8;\n  height: 100vh;\n  width: 100vw; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.signup-form-container {\n  width: 90vw;\n  height: 80vh;\n  min-height: 30em;\n  background-color: #fff;\n  margin: 0 auto;\n  border: 1px solid black; }\n\n.signup-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  margin-top: 1em; }\n\n.login-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  margin-top: 1em; }\n\n.signup-input-field {\n  border: 1px solid darkgrey;\n  width: 90%;\n  text-align: left;\n  line-height: 2em;\n  height: 2em;\n  display: block;\n  margin: 0 auto;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field {\n  border: 1px solid darkgrey;\n  width: 100%;\n  text-align: left;\n  line-height: 2em;\n  display: block;\n  height: 2em;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.signup-disclaimer {\n  font-size: 0.65em;\n  margin-left: 3.7em;\n  margin-right: 3.7em; }\n\n.login-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n.signup-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n.login-link-container {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center; }\n\n.signup-link-container {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center; }\n\n@media screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 2), screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {\n  .signup-form-container {\n    width: 50vw;\n    height: 60vh;\n    background-color: #fff;\n    margin: 0 auto;\n    border: 1px solid black; } }\n\n.c-note {\n  display: block;\n  background: #edd00d;\n  padding-top: 100%; }\n\n.c-note--focused {\n  box-shadow: 0.1em 0.1em 1em 0 #8c7b08; }\n\n.c-note__inner {\n  display: block;\n  position: absolute;\n  width: calc(100% - 2em);\n  top: 1em;\n  right: 1em;\n  bottom: 1em;\n  left: 1em; }\n\n.c-note__content {\n  display: block;\n  font-size: inherit;\n  word-wrap: break-word;\n  font-family: \"Comfortaa\";\n  font-weight: 600; }\n\n.c-note__input {\n  position: absolute;\n  left: -200vw;\n  top: -200vh; }\n\n.participants-container {\n  display: none; }\n\n.participant-number-container {\n  text-align: left;\n  margin-top: 0.6em;\n  border-bottom: 2px solid black; }\n\n.participant-number i {\n  margin: 0 0.6em; }\n\n.participant-list-container {\n  margin: 0.6em;\n  height: 53rem; }\n\n.participant-list {\n  list-style-type: none;\n  padding: 0;\n  text-align: center; }\n\n.participant {\n  margin: 0.3em;\n  text-align: left; }\n  .participant i {\n    margin-right: 0.5em; }\n\n@media screen and (min-device-width: 1281px) and (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 2), screen and (min-device-width: 1281px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {\n  .participants-container {\n    width: 10%;\n    height: 58rem;\n    float: right;\n    border: 1px solid black;\n    margin: 0 0.8em;\n    display: block; } }\n\n@media screen and (min-device-width: 1281px) and (-webkit-min-device-pixel-ratio: 1) and (-webkit-min-device-pixel-ratio: 2), screen and (min-device-width: 1281px) and (-webkit-min-device-pixel-ratio: 1) and (min-resolution: 192dpi) {\n  .participants-container {\n    width: 10%;\n    height: 58rem;\n    float: right;\n    border: 1px solid black;\n    margin: 0 0.8em;\n    display: block; } }\n\n/** Controls\n * Override / Helper / Utility classes\n * class prefix: `ctrl-`\n */\n.ctrl-centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n", ""]);
	
	// exports


/***/ },

/***/ 217:
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
	
	var _store = __webpack_require__(/*! ./store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 232);
	
	var _BoardContainer = __webpack_require__(/*! ./containers/BoardContainer */ 285);
	
	var _BoardContainer2 = _interopRequireDefault(_BoardContainer);
	
	var _CreateBoardContainer = __webpack_require__(/*! ./containers/CreateBoardContainer */ 505);
	
	var _CreateBoardContainer2 = _interopRequireDefault(_CreateBoardContainer);
	
	var _CreateNoteContainer = __webpack_require__(/*! ./containers/CreateNoteContainer */ 518);
	
	var _CreateNoteContainer2 = _interopRequireDefault(_CreateNoteContainer);
	
	var _ViewNoteContainer = __webpack_require__(/*! ./containers/ViewNoteContainer */ 584);
	
	var _ViewNoteContainer2 = _interopRequireDefault(_ViewNoteContainer);
	
	var _SignupContainer = __webpack_require__(/*! ./containers/SignupContainer */ 544);
	
	var _SignupContainer2 = _interopRequireDefault(_SignupContainer);
	
	var _ParticipantsContainer = __webpack_require__(/*! ./containers/ParticipantsContainer */ 586);
	
	var _ParticipantsContainer2 = _interopRequireDefault(_ParticipantsContainer);
	
	var _board = __webpack_require__(/*! ./actions/board */ 479);
	
	var _note = __webpack_require__(/*! ./actions/note */ 543);
	
	var _Index = __webpack_require__(/*! ./components/Index */ 549);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//onEnters
	
	// import {getNotes} from './actions/noteboard';
	function onBoardEnter(nextRouterState) {
	  var boardId = nextRouterState.params.boardId;
	  _store2.default.dispatch((0, _board.getBoard)(boardId));
	  _store2.default.dispatch((0, _note.getAllNotes)({ boardId: boardId }));
	}
	
	//components
	
	
	//action-creators
	
	
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
	      _react2.default.createElement(_reactRouter.Route, { path: '/myboards', component: _CreateBoardContainer2.default, onEnter: onMyBoardEnter }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/note' },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _CreateNoteContainer2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: ':id', component: _ViewNoteContainer2.default })
	      ),
	      _react2.default.createElement(_reactRouter.Route, { path: '/participants/:room', component: _ParticipantsContainer2.default })
	    )
	  );
	}

/***/ },

/***/ 226:
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
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _boardReducer = __webpack_require__(/*! ./boardReducer */ 228);
	
	var _boardReducer2 = _interopRequireDefault(_boardReducer);
	
	var _noteReducer = __webpack_require__(/*! ./noteReducer */ 229);
	
	var _noteReducer2 = _interopRequireDefault(_noteReducer);
	
	var _userReducer = __webpack_require__(/*! ./userReducer */ 230);
	
	var _userReducer2 = _interopRequireDefault(_userReducer);
	
	var _socketioReducer = __webpack_require__(/*! ./socketioReducer */ 582);
	
	var _socketioReducer2 = _interopRequireDefault(_socketioReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var combinedReducer = exports.combinedReducer = (0, _redux.combineReducers)({
	  board: _boardReducer2.default,
	  noteReducer: _noteReducer2.default,
	  userReducer: _userReducer2.default,
	  socket: _socketioReducer2.default
	
	});
	
	function rootReducer(store, action) {
	  if (action.type === _constants.CLEAR_STORE) return combinedReducer();
	
	  return combinedReducer(store, action);
	}

/***/ },

/***/ 227:
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
	var SELECT_NOTE = exports.SELECT_NOTE = 'SELECT_NOTE';
	var RECEIVE_NOTE = exports.RECEIVE_NOTE = 'RECEIVE_NOTE';
	var RECEIVE_NOTES = exports.RECEIVE_NOTES = 'RECEIVE_NOTES';
	
	/* USER CONSTANTS */
	var SET_LOGIN_USER = exports.SET_LOGIN_USER = 'SET_LOGIN_USER';
	var REMOVE_LOGIN_USER = exports.REMOVE_LOGIN_USER = 'REMOVE_LOGIN_USER';
	
	/* NOTEBOARD CONSTANTS */
	var MOVE_NOTE = exports.MOVE_NOTE = 'MOVE_NOTE';
	/* ITEM TYPES FOR REACT DND*/
	var NOTE = exports.NOTE = 'note';
	
	/* SOCKETS */
	var EMIT = exports.EMIT = 'EMIT';
	var CONNECT = exports.CONNECT = 'CONNECT';
	var ADD_LISTENER = exports.ADD_LISTENER = 'ADD_LISTENER';
	var REMOVE_LISTENER = exports.REMOVE_LISTENER = 'REMOVE_LISTENER';

/***/ },

/***/ 228:
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
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initialState = { selectedBoard: {}, allBoards: [], selectedBoardNotes: [], permissions: [] };

/***/ },

/***/ 229:
/*!****************************************!*\
  !*** ./client/reducers/noteReducer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = noteReducer;
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initState = {
	  all: [],
	  selected: null
	
	};
	
	function noteReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	  var action = arguments[1];
	
	  var nextState = Object.assign({}, state);
	
	  switch (action.type) {
	    case _constants.RECEIVE_NOTE:
	      nextState.all = [].concat(_toConsumableArray(nextState.all), [action.payload]);
	      break;
	    case _constants.RECEIVE_NOTES:
	      nextState.all = action.payload;
	      break;
	
	    case _constants.SELECT_NOTE:
	      nextState.selected = nextState.all.find(function (note) {
	        return note.id == action.payload.noteId;
	      });
	      break;
	
	    case _constants.MOVE_NOTE:
	      var keys = Object.keys(action.notes);
	      nextState.all = nextState.all.map(function (note, i) {
	
	        var keyId = note.id;
	        if (action.notes[keyId]) {
	          return Object.assign({}, note, { left: action.notes[keyId].left, top: action.notes[keyId].top });
	        } else {
	          return note;
	        }
	      });
	      console.log('sadfasdfsadfd', nextState.all);
	      break;
	
	    default:
	      return state;
	  }
	  return nextState;
	}

/***/ },

/***/ 285:
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
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _Board = __webpack_require__(/*! ../components/Board */ 286);
	
	var _Board2 = _interopRequireDefault(_Board);
	
	var _socket = __webpack_require__(/*! socket.io-client */ 429);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _board = __webpack_require__(/*! ../actions/board */ 479);
	
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
	  return { board: state.board.selectedBoard };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BoardContainer);

/***/ },

/***/ 286:
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
	
	var _NoteBoard = __webpack_require__(/*! ./NoteBoard */ 287);
	
	var _NoteBoard2 = _interopRequireDefault(_NoteBoard);
	
	var _NoteBoardContainer = __webpack_require__(/*! ../containers/NoteBoardContainer */ 288);
	
	var _NoteBoardContainer2 = _interopRequireDefault(_NoteBoardContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	
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
	        _react2.default.createElement(_NoteBoardContainer2.default, null)
	      )
	    )
	  );
	};

/***/ },

/***/ 288:
/*!*************************************************!*\
  !*** ./client/containers/NoteBoardContainer.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 289);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _NoteWrapper = __webpack_require__(/*! ../components/NoteWrapper */ 583);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _note = __webpack_require__(/*! ../actions/note */ 543);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _flow = __webpack_require__(/*! lodash/flow */ 412);
	
	var _flow2 = _interopRequireDefault(_flow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  width: 1000,
	  height: 1000,
	  position: 'relative'
	};
	
	var noteTarget = {
	  drop: function drop(props, monitor, component) {
	
	    var delta = monitor.getDifferenceFromInitialOffset();
	    var item = monitor.getItem();
	
	    var left = Math.round(item.left + delta.x);
	    var top = Math.round(item.top + delta.y);
	
	    props.moveNote(item.id, left, top);
	  }
	};
	
	var collect = function collect(connector, monitor) {
	
	  return {
	    connectDropTarget: connector.dropTarget(),
	    isOver: monitor.isOver()
	  };
	};
	
	var NoteBoardContainer = function (_Component) {
	  _inherits(NoteBoardContainer, _Component);
	
	  function NoteBoardContainer() {
	    _classCallCheck(this, NoteBoardContainer);
	
	    return _possibleConstructorReturn(this, (NoteBoardContainer.__proto__ || Object.getPrototypeOf(NoteBoardContainer)).apply(this, arguments));
	  }
	
	  _createClass(NoteBoardContainer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          movedNote = _props.movedNote,
	          notes = _props.notes,
	          connectDropTarget = _props.connectDropTarget;
	
	      return connectDropTarget(_react2.default.createElement(
	        'div',
	        { style: styles },
	        notes.map(function (note) {
	          var left = note.left,
	              top = note.top;
	
	
	          return _react2.default.createElement(_NoteWrapper2.default, {
	            key: note.id,
	            id: note.id,
	            left: left,
	            top: top,
	            note: note
	          });
	        })
	      ));
	    }
	  }]);
	
	  return NoteBoardContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    notes: state.noteReducer.all
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    moveNote: function moveNote(id, left, top) {
	      return dispatch((0, _note.moveNote)(id, left, top));
	    }
	  };
	};
	
	exports.default = (0, _flow2.default)((0, _reactDnd.DropTarget)(_constants.NOTE, noteTarget, collect), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(NoteBoardContainer);

/***/ },

/***/ 479:
/*!*********************************!*\
  !*** ./client/actions/board.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBoard = exports.createBoard = exports.getAllBoards = exports.addNewBoard = exports.receiveAllBoards = exports.receiveBoard = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 480);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
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
	      dispatch(receiveAllBoards(boards.boards, boards.permissions));
	    });
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

/***/ },

/***/ 505:
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
	
	var _CreateBoard = __webpack_require__(/*! ../components/CreateBoard */ 506);
	
	var _CreateBoard2 = _interopRequireDefault(_CreateBoard);
	
	var _board = __webpack_require__(/*! ../actions/board */ 479);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	
	    user: state.userReducer.loggedInUser,
	    boards: state.board.allBoards,
	    permissions: state.board.permissions
	
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

/***/ 506:
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 232);
	
	var _ModalContainer = __webpack_require__(/*! ../containers/ModalContainer */ 507);
	
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

/***/ 518:
/*!**************************************************!*\
  !*** ./client/containers/CreateNoteContainer.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _CreateNote = __webpack_require__(/*! ../components/CreateNote */ 519);
	
	var _CreateNote2 = _interopRequireDefault(_CreateNote);
	
	var _board = __webpack_require__(/*! ../actions/board */ 479);
	
	var _note = __webpack_require__(/*! ../actions/note */ 543);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CreateNote2.default);
	
	
	function mapStateToProps(state) {
	  return {
	    board: state.board.selectedBoard
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    createNote: (0, _redux.bindActionCreators)(_note.createNote, dispatch),
	    getBoard: (0, _redux.bindActionCreators)(_board.getBoard, dispatch)
	  };
	}

/***/ },

/***/ 519:
/*!*****************************************!*\
  !*** ./client/components/CreateNote.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 520);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _bindHandlers = __webpack_require__(/*! ../utils/bindHandlers */ 532);
	
	var _bindHandlers2 = _interopRequireDefault(_bindHandlers);
	
	var _NoteContainer = __webpack_require__(/*! ../containers/NoteContainer */ 533);
	
	var _NoteContainer2 = _interopRequireDefault(_NoteContainer);
	
	var _color = __webpack_require__(/*! color */ 535);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var initState = {
	  content: '',
	  color: _color2.default.rgb([237, 208, 13]).hex().slice(1)
	};
	
	var CreateNote = function (_Component) {
	  _inherits(CreateNote, _Component);
	
	  function CreateNote(props) {
	    _classCallCheck(this, CreateNote);
	
	    var _this = _possibleConstructorReturn(this, (CreateNote.__proto__ || Object.getPrototypeOf(CreateNote)).call(this, props));
	
	    _this.state = initState;
	    (0, _bindHandlers2.default)(_this, _this.changeHandler, _this.submitHandler);
	    return _this;
	  }
	
	  _createClass(CreateNote, [{
	    key: 'changeHandler',
	    value: function changeHandler(content) {
	      this.setState({ content: content });
	    }
	  }, {
	    key: 'submitHandler',
	    value: function submitHandler(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	      this.props.createNote({
	        content: this.state.content,
	        color: this.state.color
	      }, this.props.board.id).then(function () {
	        return _this2.setState(initState);
	      });
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if ((!this.props.board || (0, _isEmpty2.default)(this.props.board)) && !this.props.location.query.board) {
	        // If no board is selected and no board ID is provided
	        // redirect to myBoards page
	        this.props.router.push('/myboards');
	      } else if (!this.props.board || (0, _isEmpty2.default)(this.props.board)) {
	        // if no board is selected but a board ID is provided
	        // select board by ID
	        this.props.getBoard(this.props.location.query.board);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'h1',
	          { className: 'center' },
	          this.props.board ? this.props.board.name : ''
	        ),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10 col-xs-offset-1', style: { fontSize: '6vw' } },
	            _react2.default.createElement(_NoteContainer2.default, {
	              editable: true,
	              content: this.state.content,
	              color: this.state.color,
	              onChange: this.changeHandler })
	          )
	        ),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'button',
	            {
	              onClick: this.submitHandler,
	              className: 'btn btn-primary block ml-auto mr-auto' },
	            'Submit Note'
	          )
	        )
	      );
	    }
	  }]);
	
	  return CreateNote;
	}(_react.Component);
	
	exports.default = CreateNote;

/***/ },

/***/ 534:
/*!***********************************!*\
  !*** ./client/components/Note.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _bindHandlers = __webpack_require__(/*! ../utils/bindHandlers */ 532);
	
	var _bindHandlers2 = _interopRequireDefault(_bindHandlers);
	
	var _color = __webpack_require__(/*! color */ 535);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var initState = {
	  focused: false,
	  color: _color2.default.rgb([257, 208, 13])
	};
	
	var Note = function (_Component) {
	  _inherits(Note, _Component);
	
	  function Note(props) {
	    _classCallCheck(this, Note);
	
	    var _this = _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).call(this, props));
	
	    _this.state = initState;
	
	    if (_this.props.color) {
	      _this.state.color = new _color2.default('#' + _this.props.color).rgb();
	    }
	
	    (0, _bindHandlers2.default)(_this, _this.clickHandler, _this.focusHandler, _this.blurHandler, _this.changeHandler);
	    return _this;
	  }
	
	  _createClass(Note, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      console.log('STATE COLOR', this.state.color);
	      if (nextProps.color) {
	        this.setState({ color: (0, _color2.default)('#' + nextProps.color) });
	      }
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler(e) {
	      e.preventDefault();
	      this.input.focus();
	    }
	  }, {
	    key: 'focusHandler',
	    value: function focusHandler() {
	      this.setState({ focused: true });
	    }
	  }, {
	    key: 'blurHandler',
	    value: function blurHandler() {
	      this.setState({ focused: false });
	    }
	  }, {
	    key: 'changeHandler',
	    value: function changeHandler(e) {
	      e.preventDefault();
	      this.props.onChange(e.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var noteStyle = {
	        backgroundColor: this.state.color.rgb().string(),
	        color: (0, _color2.default)(this.state.color.hex()).rotate(180).rgb().string()
	
	      };
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'c-note ' + (this.state.focused ? 'c-note--focused' : ''),
	          onClick: this.clickHandler,
	          style: noteStyle },
	        _react2.default.createElement(
	          'div',
	          { className: 'c-note__inner' },
	          _react2.default.createElement(
	            'div',
	            { className: 'c-note__content' },
	            this.props.content
	          ),
	          this.props.editable && _react2.default.createElement('input', { type: 'text',
	            value: this.props.content,
	            className: 'c-note__input',
	            ref: function ref(input) {
	              _this2.input = input;
	            },
	            onFocus: this.focusHandler,
	            onBlur: this.blurHandler,
	            onChange: this.changeHandler })
	        )
	      );
	    }
	  }]);
	
	  return Note;
	}(_react.Component);
	
	exports.default = Note;

/***/ },

/***/ 543:
/*!********************************!*\
  !*** ./client/actions/note.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.moveNote = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.receiveNote = receiveNote;
	exports.receiveNotes = receiveNotes;
	exports.selectNote = selectNote;
	exports.getNote = getNote;
	exports.getAllNotes = getAllNotes;
	exports.createNote = createNote;
	
	var _axios = __webpack_require__(/*! axios */ 480);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function receiveNote(note) {
	  return {
	    type: _constants.RECEIVE_NOTE,
	    payload: note
	  };
	}
	
	function receiveNotes(notes) {
	  return {
	    type: _constants.RECEIVE_NOTES,
	    payload: notes
	  };
	}
	
	function selectNote(noteId) {
	  return {
	    type: _constants.SELECT_NOTE,
	    payload: { noteId: noteId }
	  };
	};
	
	var moveNote = exports.moveNote = function moveNote(id, left, top) {
	  return {
	    type: _constants.MOVE_NOTE,
	    notes: _defineProperty({}, id, { left: left, top: top })
	  };
	};
	
	function getNote(noteId) {
	  return function (dispatch) {
	    return _axios2.default.get('/api/notes/' + noteId).then(function (res) {
	      return res.data;
	    }).then(function (note) {
	      return dispatch(receiveNote(note));
	    }).then(function (note) {
	      return Promise.all([note, dispatch(selectNote(noteId))]);
	    }).then(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          note = _ref2[0];
	
	      return note;
	    }).catch(function (err) {
	      return console.warn(err);
	    });
	  };
	}
	
	function getAllNotes(_ref3) {
	  var userId = _ref3.userId,
	      boardId = _ref3.boardId;
	
	  return function (dispatch) {
	    return _axios2.default.get('/api/notes/', { params: { userId: userId, boardId: boardId } }).then(function (res) {
	      return res.data;
	    }).then(function (notes) {
	      return dispatch(receiveNotes(notes));
	    }).catch(function (err) {
	      return console.warn(err);
	    });
	  };
	}
	
	function createNote(note, boardId) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/notes/', {
	      content: note.content,
	      color: note.color,
	      boardId: boardId || note.boardId
	    }).then(function () {
	      // TODO: dispatch to sockets
	    }).catch(function (err) {
	      return console.warn(err);
	    });
	  };
	}

/***/ },

/***/ 577:
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 232);
	
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
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/participants/111' },
	                ' Participants Test '
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

/***/ 582:
/*!********************************************!*\
  !*** ./client/reducers/socketioReducer.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var socket = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var newSocket = Object.assign(socket);
	  switch (action.type) {
	    case _constants.CONNECT:
	      newSocket = io('http://localhost:3030/' + action.namespace);
	      break;
	    case _constants.EMIT:
	      if (!(0, _isEmpty2.default)(newSocket)) {
	        newSocket.emit(action.eventName, action.payload);
	      }
	      break;
	    case _constants.ADD_LISTENER:
	      if (!(0, _isEmpty2.default)(newSocket)) {
	        newSocket.on(action.eventName, action.method);
	      }
	      break;
	    case _constants.REMOVE_LISTENER:
	      if (!(0, _isEmpty2.default)(newSocket)) {
	        newSocket.removeListener(action.eventName, action.method);
	      }
	      break;
	    default:
	      return socket;
	  }
	  return newSocket;
	};
	
	var _socket = __webpack_require__(/*! socket.io-client */ 429);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 520);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var io = _socket2.default;
	
	
	var initialState = {};

/***/ },

/***/ 583:
/*!******************************************!*\
  !*** ./client/components/NoteWrapper.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 289);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _shouldPureComponentUpdate = __webpack_require__(/*! ./shouldPureComponentUpdate */ 410);
	
	var _shouldPureComponentUpdate2 = _interopRequireDefault(_shouldPureComponentUpdate);
	
	var _Note = __webpack_require__(/*! ./Note */ 534);
	
	var _Note2 = _interopRequireDefault(_Note);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  border: '1px dashed gray',
	  padding: '0.5rem 1rem',
	  cursor: 'move',
	  height: 100,
	  width: 100,
	  position: 'absolute'
	};
	
	var noteSource = {
	  beginDrag: function beginDrag(props) {
	    console.log('NS', props);
	    var id = props.id,
	        left = props.left,
	        top = props.top;
	
	    return { id: id, left: left, top: top };
	  }
	};
	
	var collect = function collect(connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource(),
	    isDragging: monitor.isDragging()
	  };
	};
	
	var NoteWrapper = function (_Component) {
	  _inherits(NoteWrapper, _Component);
	
	  function NoteWrapper() {
	    _classCallCheck(this, NoteWrapper);
	
	    return _possibleConstructorReturn(this, (NoteWrapper.__proto__ || Object.getPrototypeOf(NoteWrapper)).apply(this, arguments));
	  }
	
	  _createClass(NoteWrapper, [{
	    key: 'render',
	
	
	    // shouldComponentUpdate = shouldPureComponentUpdate;
	
	    value: function render() {
	      // console.log('NOTEWRAPPER PROPS', this.props);
	      var _props = this.props,
	          hideSourceOnDrag = _props.hideSourceOnDrag,
	          left = _props.left,
	          top = _props.top,
	          connectDragSource = _props.connectDragSource,
	          isDragging = _props.isDragging,
	          children = _props.children,
	          note = _props.note;
	
	      if (isDragging && hideSourceOnDrag) {
	        return null;
	      }
	      return connectDragSource(_react2.default.createElement(
	        'div',
	        { style: _extends({}, styles, { left: left, top: top }) },
	        _react2.default.createElement(_Note2.default, { color: note.color })
	      ));
	    }
	  }]);
	
	  return NoteWrapper;
	}(_react.Component);
	
	exports.default = (0, _reactDnd.DragSource)(_constants.NOTE, noteSource, collect)(NoteWrapper);

/***/ },

/***/ 584:
/*!************************************************!*\
  !*** ./client/containers/ViewNoteContainer.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _ViewNote = __webpack_require__(/*! ../components/ViewNote */ 585);
	
	var _ViewNote2 = _interopRequireDefault(_ViewNote);
	
	var _board = __webpack_require__(/*! ../actions/board */ 479);
	
	var _note = __webpack_require__(/*! ../actions/note */ 543);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ViewNote2.default);
	
	
	function mapStateToProps(state) {
	  return {
	    board: state.boardReducer.selectedBoard,
	    note: state.noteReducer.selected
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({
	    getNote: _note.getNote,
	    getBoard: _board.getBoard
	  }, dispatch);
	}

/***/ },

/***/ 585:
/*!***************************************!*\
  !*** ./client/components/ViewNote.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 520);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _bindHandlers = __webpack_require__(/*! ../utils/bindHandlers */ 532);
	
	var _bindHandlers2 = _interopRequireDefault(_bindHandlers);
	
	var _NoteContainer = __webpack_require__(/*! ../containers/NoteContainer */ 533);
	
	var _NoteContainer2 = _interopRequireDefault(_NoteContainer);
	
	var _color = __webpack_require__(/*! color */ 535);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ViewNote = function (_Component) {
	  _inherits(ViewNote, _Component);
	
	  function ViewNote() {
	    _classCallCheck(this, ViewNote);
	
	    return _possibleConstructorReturn(this, (ViewNote.__proto__ || Object.getPrototypeOf(ViewNote)).apply(this, arguments));
	  }
	
	  _createClass(ViewNote, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      if ((!this.props.note || (0, _isEmpty2.default)(this.props.note)) && !this.props.params.id) {
	        // If no note is selected and no note ID is provided
	        // redirect to myBoards page
	        this.props.router.push('/mynotes');
	      } else {
	        this.props.getNote(this.props.params.id).then(function (_ref) {
	          var payload = _ref.payload;
	          return _this2.props.getBoard(payload.board_id);
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.note) return _react2.default.createElement('div', null);
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'h1',
	          { className: 'center' },
	          this.props.board ? this.props.board.name : ''
	        ),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10 col-xs-offset-1', style: { fontSize: '5vw' } },
	            _react2.default.createElement(_NoteContainer2.default, { content: this.props.note.content, color: this.props.note.color })
	          )
	        )
	      );
	    }
	  }]);
	
	  return ViewNote;
	}(_react.Component);
	
	exports.default = ViewNote;

/***/ },

/***/ 586:
/*!****************************************************!*\
  !*** ./client/containers/ParticipantsContainer.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 232);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 587);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ParticipantsContainer = function (_Component) {
	  _inherits(ParticipantsContainer, _Component);
	
	  function ParticipantsContainer(props) {
	    _classCallCheck(this, ParticipantsContainer);
	
	    var _this = _possibleConstructorReturn(this, (ParticipantsContainer.__proto__ || Object.getPrototypeOf(ParticipantsContainer)).call(this, props));
	
	    _this.state = {
	      totalParticipants: 0,
	      participants: []
	    };
	
	    _this.connect = _this.connect.bind(_this);
	    _this.disconnect = _this.disconnect.bind(_this);
	    _this.joined = _this.joined.bind(_this);
	    return _this;
	  }
	
	  _createClass(ParticipantsContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (!Object.keys(this.props.loggedInUser).length) {
	        _reactRouter.browserHistory.push('/signup');
	      }
	      this.props.socketConnect('board');
	      this.props.addSocketListener('connect', this.connect);
	      this.props.addSocketListener('disconnect', this.disconnect);
	      this.props.addSocketListener('joined', this.joined);
	      this.props.socketEmit('join', { room: this.props.params.room, name: this.props.loggedInUser.first_name });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.socketEmit('leave', this.props.params.room);
	      this.props.removeSocketListener('connect', this.connect);
	      this.props.removeSocketListener('joined', this.joined);
	      this.props.removeSocketListener('disconnect', this.disconnect);
	    }
	  }, {
	    key: 'connect',
	    value: function connect() {
	      this.setState({ status: 'connected' });
	    }
	  }, {
	    key: 'disconnect',
	    value: function disconnect() {
	      this.setState({ status: 'disconnected' });
	    }
	  }, {
	    key: 'joined',
	    value: function joined(_ref) {
	      var participants = _ref.participants,
	          totalParticipants = _ref.totalParticipants;
	
	      this.setState({ participants: participants });
	      this.setState({ totalParticipants: totalParticipants });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'participants-container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'participant-number-container' },
	          _react2.default.createElement(
	            'span',
	            { className: 'participant-number' },
	            _react2.default.createElement('i', { className: 'glyphicon glyphicon-globe' }),
	            this.state.totalParticipants,
	            ' Users Online'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'participant-list-container' },
	          _react2.default.createElement(
	            'ul',
	            { className: 'participant-list' },
	            this.state.participants.map(function (participant) {
	              return _react2.default.createElement(
	                'li',
	                { className: 'participant-item', key: participant.id },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'participant' },
	                  _react2.default.createElement('i', { className: 'glyphicon glyphicon-user' }),
	                  participant.name
	                )
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return ParticipantsContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    loggedInUser: state.userReducer.loggedInUser,
	    socket: state.socket
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    socketConnect: function socketConnect(namespace) {
	      dispatch((0, _socketio.socketConnect)(namespace));
	    },
	    addSocketListener: function addSocketListener(eventName, method) {
	      dispatch((0, _socketio.addSocketListener)(eventName, method));
	    },
	    removeSocketListener: function removeSocketListener(eventName, method) {
	      dispatch((0, _socketio.removeSocketListener)(eventName, method));
	    },
	    socketEmit: function socketEmit(eventName, payload) {
	      dispatch((0, _socketio.socketEmit)(eventName, payload));
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ParticipantsContainer);

/***/ },

/***/ 587:
/*!************************************!*\
  !*** ./client/actions/socketio.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.removeSocketListener = exports.addSocketListener = exports.socketEmit = exports.socketConnect = exports.removeListener = exports.addListener = exports.emit = exports.initiateNameSpaceConnection = undefined;
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var initiateNameSpaceConnection = exports.initiateNameSpaceConnection = function initiateNameSpaceConnection(namespace) {
	  return {
	    type: _constants.CONNECT,
	    namespace: namespace
	  };
	};
	
	var emit = exports.emit = function emit(eventName, payload) {
	  return {
	    type: _constants.EMIT,
	    eventName: eventName,
	    payload: payload
	  };
	};
	
	var addListener = exports.addListener = function addListener(eventName, method) {
	  return {
	    type: _constants.ADD_LISTENER,
	    eventName: eventName,
	    method: method
	  };
	};
	
	var removeListener = exports.removeListener = function removeListener(eventName, method) {
	  return {
	    type: _constants.REMOVE_LISTENER,
	    eventName: eventName,
	    method: method
	  };
	};
	
	var socketConnect = exports.socketConnect = function socketConnect(namespace) {
	  return function (dispatch) {
	    dispatch(initiateNameSpaceConnection(namespace));
	  };
	};
	
	var socketEmit = exports.socketEmit = function socketEmit(eventName, payload) {
	  return function (dispatch) {
	    dispatch(emit(eventName, payload));
	  };
	};
	
	var addSocketListener = exports.addSocketListener = function addSocketListener(eventName, method) {
	  return function (dispatch) {
	    dispatch(addListener(eventName, method));
	  };
	};
	
	var removeSocketListener = exports.removeSocketListener = function removeSocketListener(eventName, method) {
	  return function (dispatch) {
	    dispatch(removeListener(eventName, method));
	  };
	};

/***/ }

})
//# sourceMappingURL=0.428c402edc68c7ab9a01.hot-update.js.map