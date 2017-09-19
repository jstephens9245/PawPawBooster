webpackHotUpdate(0,{

/***/ 1:
/*!**************************!*\
  !*** ./client/index.jsx ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! normalize.css */ 2);
	
	__webpack_require__(/*! basscss */ 6);
	
	__webpack_require__(/*! ./styles/main.scss */ 8);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 71);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Routes = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Routes.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Routes2 = _interopRequireDefault(_Routes);
	
	var _store = __webpack_require__(/*! ./store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** Style Imports **/
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(_Routes2.default, null)
	), document.getElementById('root'));
	
	/** END: Style Imports **/

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
	
	var _constants = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../constants\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _boardReducer = __webpack_require__(/*! ./boardReducer */ 228);
	
	var _boardReducer2 = _interopRequireDefault(_boardReducer);
	
	var _noteReducer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./noteReducer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _noteReducer2 = _interopRequireDefault(_noteReducer);
	
	var _userReducer = __webpack_require__(/*! ./userReducer */ 230);
	
	var _userReducer2 = _interopRequireDefault(_userReducer);
	
	var _navbarReducer = __webpack_require__(/*! ./navbarReducer */ 231);
	
	var _navbarReducer2 = _interopRequireDefault(_navbarReducer);
	
	var _socketioReducer = __webpack_require__(/*! ./socketioReducer */ 232);
	
	var _socketioReducer2 = _interopRequireDefault(_socketioReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var combinedReducer = exports.combinedReducer = (0, _redux.combineReducers)({
	  board: _boardReducer2.default,
	  noteReducer: _noteReducer2.default,
	  userReducer: _userReducer2.default,
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
	
	    case _constants.ADD_NEW_BOARD:
	      newState.allBoards = [].concat(_toConsumableArray(newState.allBoards), [action.board]);
	      break;
	    default:
	      return state;
	
	  }
	
	  return newState;
	};
	
	var _constants = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../constants\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initialState = { selectedBoard: {}, allBoards: [], selectedBoardNotes: [], permissions: [] };

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
	
	var _constants = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../constants\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var initialState = {
	  loggedInUser: {}
	};

/***/ },

/***/ 231:
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
	
	var _constants = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../constants\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var initialState = { sidebarToggle: false, boardTemplateToggle: false };

/***/ },

/***/ 232:
/*!********************************************!*\
  !*** ./client/reducers/socketioReducer.js ***!
  \********************************************/
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
	
	    case _constants.ADD_LISTENER:
	      newState.events = [].concat(_toConsumableArray(newState.events), [action.eventName]);
	      break;
	
	    case _constants.REMOVE_LISTENER:
	      newState.events = [];
	      break;
	
	    default:
	      return state;
	  }
	
	  return newState;
	};
	
	var _socket = __webpack_require__(/*! socket.io-client */ 233);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 283);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _constants = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../constants\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var io = _socket2.default;
	
	
	var initialState = {
	  events: []
	};

/***/ }

})
//# sourceMappingURL=0.faf6a5d0ebdb409d17b9.hot-update.js.map