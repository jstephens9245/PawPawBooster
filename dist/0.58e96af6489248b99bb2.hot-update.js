webpackHotUpdate(0,{

/***/ 218:
/*!*************************!*\
  !*** ./client/store.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 219);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(/*! redux-logger */ 220);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _rootReducer = __webpack_require__(/*! ./reducers/rootReducer */ 226);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
	
	exports.default = (0, _redux.createStore)(_rootReducer2.default, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)())));

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
	
	var _noteBoardReducer = __webpack_require__(/*! ./noteBoardReducer */ 231);
	
	var _noteBoardReducer2 = _interopRequireDefault(_noteBoardReducer);
	
	var _navbarReducer = __webpack_require__(/*! ./navbarReducer */ 581);
	
	var _navbarReducer2 = _interopRequireDefault(_navbarReducer);
	
	var _socketioReducer = __webpack_require__(/*! ./socketioReducer */ 582);
	
	var _socketioReducer2 = _interopRequireDefault(_socketioReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var combinedReducer = exports.combinedReducer = (0, _redux.combineReducers)({
	  board: _boardReducer2.default,
	  noteReducer: _noteReducer2.default,
	  userReducer: _userReducer2.default,
	  noteBoard: _noteBoardReducer2.default,
	  nav: _navbarReducer2.default,
	  socket: _socketioReducer2.default
	
	});
	
	function rootReducer(store, action) {
	  if (action.type === _constants.CLEAR_STORE) return combinedReducer();
	
	  return combinedReducer(store, action);
	}

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

/***/ 230:
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
	    case _constants.REMOVE_LOGIN_USER:
	      newState.loggedInUser = {};
	      break;
	    default:
	      return state;
	  }
	  return newState;
	};
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var initialState = { loggedInUser: {} };

/***/ },

/***/ 231:
/*!*********************************************!*\
  !*** ./client/reducers/noteBoardReducer.js ***!
  \*********************************************/
/***/ function(module, exports) {

	// import {MOVE_NOTE, RECEIVE_NOTES, RECEIVE_BOARD_NOTES} from '../constants';
	//
	//
	// const initialState = {
	//   notes: {}
	// };
	//
	//
	// export default function(state = initialState, action) {
	//   const newState = Object.assign({}, state);
	//   console.log('ACTION', action.type);
	//   switch (action.type) {
	//
	//   case MOVE_NOTE:
	//     const keys = Object.keys(action.notes);
	//     keys.forEach(key => {
	//       newState.notes[key].left = action.notes[key].left;
	//       newState.notes[key].top = action.notes[key].top;
	//     });
	//     break;
	//
	//
	//   default:
	//
	//     return state;
	//
	//   }
	//
	//   return newState;
	// }
	"use strict";

/***/ },

/***/ 581:
/*!******************************************!*\
  !*** ./client/reducers/navbarReducer.js ***!
  \******************************************/
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
	
	    case _constants.TOGGLE_CLICK:
	      newState[action.field] = !newState[action.field];
	      break;
	    default:
	      return state;
	
	  }
	
	  return newState;
	};
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var initialState = { sidebarToggle: false, boardTemplateToggle: false };

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

/***/ }

})
//# sourceMappingURL=0.58e96af6489248b99bb2.hot-update.js.map