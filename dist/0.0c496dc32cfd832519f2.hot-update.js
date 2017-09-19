webpackHotUpdate(0,{

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

/***/ }

})
//# sourceMappingURL=0.0c496dc32cfd832519f2.hot-update.js.map