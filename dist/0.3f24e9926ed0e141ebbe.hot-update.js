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
	exports.default = Routes;
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ./store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _BoardContainer = __webpack_require__(/*! ./containers/BoardContainer */ 366);
	
	var _BoardContainer2 = _interopRequireDefault(_BoardContainer);
	
	var _CreateBoardContainer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./containers/CreateBoardContainer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _CreateBoardContainer2 = _interopRequireDefault(_CreateBoardContainer);
	
	var _CreateNoteContainer = __webpack_require__(/*! ./containers/CreateNoteContainer */ 542);
	
	var _CreateNoteContainer2 = _interopRequireDefault(_CreateNoteContainer);
	
	var _ViewNoteContainer = __webpack_require__(/*! ./containers/ViewNoteContainer */ 545);
	
	var _ViewNoteContainer2 = _interopRequireDefault(_ViewNoteContainer);
	
	var _SignupContainer = __webpack_require__(/*! ./containers/SignupContainer */ 547);
	
	var _SignupContainer2 = _interopRequireDefault(_SignupContainer);
	
	var _ParticipantsContainer = __webpack_require__(/*! ./containers/ParticipantsContainer */ 551);
	
	var _ParticipantsContainer2 = _interopRequireDefault(_ParticipantsContainer);
	
	var _board = __webpack_require__(/*! ./actions/board */ 528);
	
	var _note = __webpack_require__(/*! ./actions/note */ 486);
	
	var _Index = __webpack_require__(/*! ./components/Index */ 553);
	
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

/***/ }

})
//# sourceMappingURL=0.3f24e9926ed0e141ebbe.hot-update.js.map