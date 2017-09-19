webpackHotUpdate(0,{

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
	  var userId = _store2.default.getState().user;
	  _store2.default.dispatch((0, _board.getAllBoards)(userId.id));
	}
	
	function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Index2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _SignupContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/myboards', component: _CreateBoardContainer2.default, onEnter: onMyBoardEnter })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: '/boards/:boardId', component: _BoardContainer2.default, onEnter: onBoardEnter })
	  );
	}

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
	    _axios2.default.get('/api/board/' + userId).then(function (res) {
	      return res.data;
	    }).then(function (board) {
	      dispatch(receiveAllBoards(board));
	    });
	  };
	};
	
	var getBoard = exports.getBoard = function getBoard(boardId) {
	  return function (dispatch) {
	    _axios2.default.get('/api/board/' + boardId).then(function (res) {
	      return res.data;
	    }).then(function (board) {
	      dispatch(receiveBoard(board));
	    });
	  };
	};

/***/ }

})
//# sourceMappingURL=0.08f0831871d9c9c14c55.hot-update.js.map