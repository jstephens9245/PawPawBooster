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
	var RECEIVE_BOARDS = exports.RECEIVE_BOARDS = 'RECEIVE_BOARDS';
	var SET_LOGIN_USER = exports.SET_LOGIN_USER = 'SET_LOGIN_USER';
	var CLEAR_STORE = exports.CLEAR_STORE = 'CLEAR_STORE';

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
	      break;
	    default:
	      return state;
	  }
	
	  return newState;
	};
	
	var _constants = __webpack_require__(/*! ../constants */ 231);
	
	var initialState = { selectedBoard: {}, allBoards: [] };

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

/***/ 320:
/*!*********************************!*\
  !*** ./client/actions/board.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBoard = exports.getAllBoards = exports.receiveAllBoards = exports.receiveBoard = undefined;
	
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
	
	var receiveAllBoards = exports.receiveAllBoards = function receiveAllBoards(boards) {
	  return {
	    type: _constants.RECEIVE_BOARDS,
	    boards: boards
	  };
	};
	
	var getAllBoards = exports.getAllBoards = function getAllBoards(userId) {
	  return function (dispatch) {
	    _axios2.default.get('/api/boards/', { params: { userId: userId } }).then(function (res) {
	      return res.data;
	    }).then(function (boards) {
	      console.log(boards);
	      dispatch(receiveAllBoards(boards));
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
//# sourceMappingURL=0.199a2f02276b5685ee06.hot-update.js.map