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
	
	var _board = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./actions/board\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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
	
	var _board = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../actions/board\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _CreateBoard = __webpack_require__(/*! ../components/CreateBoard */ 289);
	
	var _CreateBoard2 = _interopRequireDefault(_CreateBoard);
	
	var _board = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../actions/board\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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

/***/ }

})
//# sourceMappingURL=0.0bfe656bea898b20bb39.hot-update.js.map