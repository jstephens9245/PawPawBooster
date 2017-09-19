webpackHotUpdate(0,{

/***/ 584:
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
	
	var _CreateNote = __webpack_require__(/*! ../components/CreateNote */ 585);
	
	var _CreateNote2 = _interopRequireDefault(_CreateNote);
	
	var _board = __webpack_require__(/*! ../actions/board */ 583);
	
	var _note = __webpack_require__(/*! ../actions/note */ 525);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 551);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CreateNote2.default);
	
	
	function mapStateToProps(state) {
	  return {
	    board: state.board.selectedBoard,
	    user: state.userReducer.loggedInUser,
	    permissions: state.board.permissions
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({
	    createNote: _note.createNote,
	    getBoard: _board.getBoard,
	    socketConnect: _socketio.socketConnect,
	    addSocketListener: _socketio.addSocketListener,
	    socketEmit: _socketio.socketEmit,
	    clearSocketListeners: _socketio.clearSocketListeners,
	    socketDisconnect: _socketio.socketDisconnect,
	    addUserPermission: _board.addUserPermission
	  }, dispatch);
	}

/***/ }

})
//# sourceMappingURL=0.5be64e52da79e85fc84c.hot-update.js.map