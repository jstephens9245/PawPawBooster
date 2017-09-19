webpackHotUpdate(0,{

/***/ 530:
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _ModalContainer = __webpack_require__(/*! ../containers/ModalContainer */ 531);
	
	var _ModalContainer2 = _interopRequireDefault(_ModalContainer);
	
	var _UserBoardsContainer = __webpack_require__(/*! ../containers/UserBoardsContainer */ 585);
	
	var _UserBoardsContainer2 = _interopRequireDefault(_UserBoardsContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CreateBoard = function CreateBoard(props) {
	  var boards = props.boards;
	  var permissions = props.permissions;
	  var filterArr = [];
	
	  if (props.filterStatus !== 'all') {
	    filterArr = permissions.filter(function (permission) {
	      return permission.permission === props.filterStatus;
	    }).map(function (permission) {
	      return permission.board_id;
	    });
	  } else {
	    filterArr = permissions.map(function (permission) {
	      return permission.board_id;
	    });
	  }
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      _react2.default.createElement(
	        'div',
	        { className: 'col-xs-4 col-md-4 col-lg-4 col-xs-offset-1' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Boards'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'col-xs-5 col-md-3 col-lg-4 col-xs-offset-1' },
	        _react2.default.createElement(
	          'h5',
	          { style: { float: 'right', marginTop: '30px' } },
	          _react2.default.createElement(
	            'a',
	            { onClick: function onClick() {
	                props.filterChange('all');
	              } },
	            'all '
	          ),
	          '/',
	          _react2.default.createElement(
	            'a',
	            { onClick: function onClick() {
	                props.filterChange('admin');
	              } },
	            ' admin '
	          ),
	          '/',
	          _react2.default.createElement(
	            'a',
	            { onClick: function onClick() {
	                props.filterChange('user');
	              } },
	            ' user'
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      !!boards.length && boards.map(function (board) {
	        if (filterArr.indexOf(board.id) !== -1) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10 col-md-8 col-lg-4 col-xs-offset-1', key: board.id },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { className: 'thumbnail', to: '/boards/' + board.id },
	              _react2.default.createElement(_UserBoardsContainer2.default, { board: board }),
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
	        }
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

/***/ },

/***/ 585:
/*!**************************************************!*\
  !*** ./client/containers/UserBoardsContainer.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _UserBoards = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../components/UserBoards\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _UserBoards2 = _interopRequireDefault(_UserBoards);
	
	var _board = __webpack_require__(/*! ../actions/board */ 528);
	
	var _note = __webpack_require__(/*! ../actions/note */ 486);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UserBoardsContainer = function (_Component) {
	  _inherits(UserBoardsContainer, _Component);
	
	  function UserBoardsContainer() {
	    _classCallCheck(this, UserBoardsContainer);
	
	    return _possibleConstructorReturn(this, (UserBoardsContainer.__proto__ || Object.getPrototypeOf(UserBoardsContainer)).apply(this, arguments));
	  }
	
	  _createClass(UserBoardsContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.onBoardEnter();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log(this.props);
	      return (
	        // <Board {...this.props} />
	        _react2.default.createElement(
	          'div',
	          { style: {
	              width: 1000,
	              height: 1000,
	              position: 'relative' } },
	          this.props.notes.map(function (note) {
	            var left = note.left,
	                top = note.top;
	
	
	            return _react2.default.createElement(NoteWrapper, {
	              key: note.id,
	              id: note.id,
	              left: left,
	              top: top,
	              note: note
	            });
	          })
	        )
	      );
	    }
	  }]);
	
	  return UserBoardsContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return { notes: state.noteReducer.all };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    onBoardEnter: function onBoardEnter() {
	      console.log(ownProps);
	      var boardId = ownProps.board.id;
	      dispatch((0, _board.getBoard)(boardId));
	      dispatch((0, _note.getAllNotes)({ boardId: boardId }));
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserBoardsContainer);

/***/ }

})
//# sourceMappingURL=0.71b10c38a8db1ce4dc43.hot-update.js.map