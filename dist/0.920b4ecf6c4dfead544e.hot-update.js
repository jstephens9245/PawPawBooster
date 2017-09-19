webpackHotUpdate(0,{

/***/ 217:
/*!***************************!*\
  !*** ./client/Routes.jsx ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.io = undefined;
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
	
	var _SignupContainer = __webpack_require__(/*! ./containers/SignupContainer */ 544);
	
	var _SignupContainer2 = _interopRequireDefault(_SignupContainer);
	
	var _SocketIOContainer = __webpack_require__(/*! ./containers/SocketIOContainer */ 548);
	
	var _SocketIOContainer2 = _interopRequireDefault(_SocketIOContainer);
	
	var _board = __webpack_require__(/*! ./actions/board */ 479);
	
	var _noteboard = __webpack_require__(/*! ./actions/noteboard */ 411);
	
	var _Index = __webpack_require__(/*! ./components/Index */ 549);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	var _socket = __webpack_require__(/*! socket.io-client */ 429);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//components
	
	
	//action-creators
	var io = exports.io = _socket2.default;
	
	//onEnters
	
	
	// //socket-io
	
	
	//containers
	function onBoardEnter(nextRouterState) {
	  var boardId = nextRouterState.params.boardId;
	  _store2.default.dispatch((0, _board.getBoard)(boardId));
	  _store2.default.dispatch((0, _noteboard.getNotes)());
	}
	
	function onMyBoardEnter(nextRouterState) {
	  var userId = _store2.default.getState().userReducer.loggedInUser.id;
	  _store2.default.dispatch((0, _board.getAllBoards)(userId));
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
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _CreateNoteContainer2.default })
	      ),
	      _react2.default.createElement(_reactRouter.Route, { path: '/sockets/:room', component: _SocketIOContainer2.default })
	    )
	  );
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
	
	var initialState = { selectedBoard: {}, allBoards: [], selectedBoardNotes: [] };

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
	exports.getBoardNotes = exports.getBoard = exports.createBoard = exports.receiveBoardNotes = exports.getAllBoards = exports.addNewBoard = exports.receiveAllBoards = exports.receiveBoard = undefined;
	
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
	
	var receiveAllBoards = exports.receiveAllBoards = function receiveAllBoards(boards) {
	  return {
	    type: _constants.RECEIVE_BOARDS,
	    boards: boards
	  };
	};
	
	var addNewBoard = exports.addNewBoard = function addNewBoard(board) {
	  return {
	    type: _constants.ADD_NEW_BOARD,
	    board: board
	  };
	};
	
	var getAllBoards = exports.getAllBoards = function getAllBoards(userId) {
	  return function (dispatch) {
	    _axios2.default.get('/api/boards/', { params: { userId: userId } }).then(function (res) {
	      return res.data;
	    }).then(function (boards) {
	      dispatch(receiveAllBoards(boards));
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

/***/ 505:
/*!***************************************************!*\
  !*** ./client/containers/CreateBoardContainer.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _CreateBoard = __webpack_require__(/*! ../components/CreateBoard */ 506);
	
	var _CreateBoard2 = _interopRequireDefault(_CreateBoard);
	
	var _board = __webpack_require__(/*! ../actions/board */ 479);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    user: state.user,
	    boards: state.boardReducer.allBoards
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    create: function create(boardName) {
	      dispatch((0, _board.createBoard)(boardName));
	    }
	  };
	};
	
	var CreateBoardContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CreateBoard2.default);
	
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
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { style: { paddingLeft: '8.5%' } },
	      _react2.default.createElement(
	        'h3',
	        null,
	        'Boards'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      !!boards.length && boards.map(function (board) {
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

/***/ }

})
//# sourceMappingURL=0.920b4ecf6c4dfead544e.hot-update.js.map