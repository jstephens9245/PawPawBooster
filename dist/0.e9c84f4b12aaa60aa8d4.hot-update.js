webpackHotUpdate(0,{

/***/ 462:
/*!*********************************!*\
  !*** ./client/actions/event.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteBoard = exports.getBoard = exports.createBoard = exports.addUserPermission = exports.getAllBoards = exports.changeNoteSize = exports.setNotesSize = exports.addNewBoard = exports.receiveAllBoards = exports.receiveNewPermission = exports.receiveBoard = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 294);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 235);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var receiveBoard = exports.receiveBoard = function receiveBoard(board) {
	  return {
	    type: RECEIVE_BOARD,
	    board: board
	  };
	};
	
	var receiveNewPermission = exports.receiveNewPermission = function receiveNewPermission(permission) {
	  return {
	    type: RECEIVE_PERMISSION,
	    permission: permission
	  };
	};
	
	var receiveAllBoards = exports.receiveAllBoards = function receiveAllBoards(boards, permissions) {
	  return {
	    type: RECEIVE_BOARDS,
	    boards: boards,
	    permissions: permissions
	  };
	};
	
	var addNewBoard = exports.addNewBoard = function addNewBoard(event) {
	  return {
	    type: _constants.ADD_NEW_EVENT,
	    event: event
	  };
	};
	
	var setNotesSize = exports.setNotesSize = function setNotesSize(size) {
	  return {
	    type: SET_NOTES_SIZE,
	    notesSize: size
	  };
	};
	
	var changeNoteSize = exports.changeNoteSize = function changeNoteSize(size, board) {
	  var noteSize = size;
	  return function (dispatch) {
	    var changedBoard = Object.assign({}, board, { noteSize: size });
	    return _axios2.default.put('/api/boards/' + board.id, { changedBoard: changedBoard }).then(function (updated) {
	      dispatch(setNotesSize(size));
	      return updated;
	    }).then(function (updated) {
	      return console.log('UPDATED Size', updated);
	    }).catch(function (err) {
	      return console.log('ERROR IN Note SIZE UPDATE in Board Action');
	    });
	  };
	};
	
	var getAllBoards = exports.getAllBoards = function getAllBoards() {
	  return function (dispatch) {
	    return _axios2.default.get('/api/boards/').then(function (res) {
	      return res.data;
	    }).then(function (boards) {
	      dispatch(receiveAllBoards(boards.boards, boards.permissions));
	    });
	  };
	};
	
	var addUserPermission = exports.addUserPermission = function addUserPermission(board) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/boards/permissions', { board: board }).then(function (res) {
	      return res.data;
	    }).then(function (permission) {
	      dispatch(receiveNewPermission(permission));
	    });
	  };
	};
	
	var createBoard = exports.createBoard = function createBoard(boardName) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/boards', { boardName: boardName }).then(function (res) {
	      return res.data;
	    }).then(function (board) {
	      dispatch(addNewBoard(board.board, board.permission));
	    });
	  };
	};
	
	var getBoard = exports.getBoard = function getBoard(boardHash) {
	  return function (dispatch) {
	    return _axios2.default.get('/api/boards/' + boardHash).then(function (res) {
	      return res.data;
	    }).then(function (board) {
	      dispatch(receiveBoard(board));
	    });
	  };
	};
	
	var deleteBoard = exports.deleteBoard = function deleteBoard(boardId) {
	  return function (dispatch) {
	    return _axios2.default.delete('/api/boards/' + boardId).then(function (res) {
	      return res.data;
	    }).then(function (board) {
	      dispatch(getAllBoards());
	    });
	  };
	};

/***/ }

})
//# sourceMappingURL=0.e9c84f4b12aaa60aa8d4.hot-update.js.map