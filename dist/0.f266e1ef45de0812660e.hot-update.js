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
	
	var _HomepageContainer = __webpack_require__(/*! ./containers/HomepageContainer */ 366);
	
	var _HomepageContainer2 = _interopRequireDefault(_HomepageContainer);
	
	var _BoardContainer = __webpack_require__(/*! ./containers/BoardContainer */ 368);
	
	var _BoardContainer2 = _interopRequireDefault(_BoardContainer);
	
	var _CreateBoardContainer = __webpack_require__(/*! ./containers/CreateBoardContainer */ 597);
	
	var _CreateBoardContainer2 = _interopRequireDefault(_CreateBoardContainer);
	
	var _CreateNoteContainer = __webpack_require__(/*! ./containers/CreateNoteContainer */ 601);
	
	var _CreateNoteContainer2 = _interopRequireDefault(_CreateNoteContainer);
	
	var _ViewNoteContainer = __webpack_require__(/*! ./containers/ViewNoteContainer */ 772);
	
	var _ViewNoteContainer2 = _interopRequireDefault(_ViewNoteContainer);
	
	var _SignupContainer = __webpack_require__(/*! ./containers/SignupContainer */ 774);
	
	var _SignupContainer2 = _interopRequireDefault(_SignupContainer);
	
	var _board = __webpack_require__(/*! ./actions/board */ 581);
	
	var _note = __webpack_require__(/*! ./actions/note */ 552);
	
	var _user = __webpack_require__(/*! ./actions/user */ 554);
	
	var _Index = __webpack_require__(/*! ./components/Index */ 777);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//onEnters
	
	
	//action-creators
	
	
	//containers
	function indexEnter() {
	  _store2.default.dispatch((0, _user.checkLoginStatus)());
	}
	
	//components
	
	// import {getNotes} from './actions/noteboard';
	
	
	function onBoardEnter(nextRouterState) {
	  var boardHash = nextRouterState.params.boardHash;
	  _store2.default.dispatch((0, _board.getBoard)(boardHash));
	  _store2.default.dispatch((0, _board.getAllBoards)());
	  if (!_store2.default.getState().noteReducer.all.length) {
	    _store2.default.dispatch((0, _note.getAllNotes)({ boardHash: boardHash }));
	  }
	}
	
	function onMyBoardEnter(nextRouterState) {
	  _store2.default.dispatch((0, _board.getAllBoards)());
	  // store.dispatch(clearBoard());
	}
	
	function onNoteEnter(nextRouterState) {
	  _store2.default.dispatch((0, _board.getAllBoards)());
	}
	
	function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Index2.default, onEnter: indexEnter },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomepageContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _SignupContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/boards', component: _CreateBoardContainer2.default, onEnter: onMyBoardEnter }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/boards/:boardHash', component: _BoardContainer2.default, onEnter: onBoardEnter }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/note' },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _CreateNoteContainer2.default, onEnter: onNoteEnter }),
	        _react2.default.createElement(_reactRouter.Route, { path: ':id', component: _ViewNoteContainer2.default })
	      )
	    )
	  );
	}

/***/ },

/***/ 597:
/*!***************************************************!*\
  !*** ./client/containers/CreateBoardContainer.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CB = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _CreateBoard = __webpack_require__(/*! ../components/CreateBoard */ 598);
	
	var _CreateBoard2 = _interopRequireDefault(_CreateBoard);
	
	var _board = __webpack_require__(/*! ../actions/board */ 581);
	
	var _note = __webpack_require__(/*! ../actions/note */ 552);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    user: state.userReducer.loggedInUser,
	    boards: state.board.allBoards,
	    permissions: state.board.permissions
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    create: function create(boardName) {
	      dispatch((0, _board.createBoard)(boardName));
	    },
	    onBoardEnter: function onBoardEnter() {
	      dispatch((0, _note.getAllNotes)({}));
	    },
	    delete: function _delete(boardId) {
	      dispatch((0, _board.deleteBoard)(boardId));
	    },
	    getAllBoards: _note.getAllBoards
	  };
	};
	
	var CB = exports.CB = function (_Component) {
	  _inherits(CB, _Component);
	
	  function CB(props) {
	    _classCallCheck(this, CB);
	
	    var _this = _possibleConstructorReturn(this, (CB.__proto__ || Object.getPrototypeOf(CB)).call(this, props));
	
	    _this.state = {
	      filterStatus: 'all'
	    };
	
	    _this.filterChange = _this.filterChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(CB, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.onBoardEnter();
	      this.props.getAllBoards();
	    }
	  }, {
	    key: 'filterChange',
	    value: function filterChange(filterValue) {
	      this.setState({ filterStatus: filterValue });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_CreateBoard2.default, {
	        user: this.props.user,
	        boards: this.props.boards,
	        permissions: this.props.permissions,
	        create: this.props.create,
	        filterStatus: this.state.filterStatus,
	        filterChange: this.filterChange,
	        'delete': this.props.delete
	      });
	    }
	  }]);
	
	  return CB;
	}(_react.Component);
	
	var CreateBoardContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CB);
	
	exports.default = CreateBoardContainer;

/***/ },

/***/ 598:
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
	
	var _ModalContainer = __webpack_require__(/*! ../containers/ModalContainer */ 599);
	
	var _ModalContainer2 = _interopRequireDefault(_ModalContainer);
	
	var _UserBoardsContainer = __webpack_require__(/*! ../containers/UserBoardsContainer */ 600);
	
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
	      { className: 'clearfix', style: { width: '87%', margin: '0 auto' } },
	      _react2.default.createElement(
	        'h3',
	        { style: { float: 'left' } },
	        'Boards'
	      ),
	      _react2.default.createElement(
	        'h5',
	        { style: { float: 'right', marginTop: '30px', textAlign: 'right' } },
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
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: { textAlign: 'center' } },
	      !!boards.length && boards.map(function (board) {
	        if (filterArr.indexOf(board.id) !== -1) {
	          return _react2.default.createElement(
	            'div',
	            { style: { display: 'inline-block', margin: '0 5px 0 5px' }, key: board.id },
	            _react2.default.createElement(
	              'div',
	              { className: 'thumbnail clearfix', style: { overflow: 'hidden' } },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/boards/' + board.hash },
	                _react2.default.createElement(_UserBoardsContainer2.default, { board: board })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'caption', style: { float: 'left', display: 'inline-block' } },
	                _react2.default.createElement(
	                  'h5',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    { style: { display: 'inline-block', verticalAlign: 'middle', font: 'bold' } },
	                    board.name
	                  )
	                )
	              ),
	              Object.keys(props.user).length ? permissions.map(function (permission) {
	                if (permission.board_id === board.id) {
	                  if (permission.permission === 'admin') {
	                    return _react2.default.createElement(
	                      'button',
	                      { key: permission.id, className: 'btn btn-secondary deleteButton', type: 'button', onClick: function onClick() {
	                          props.delete(board.id);
	                        } },
	                      'Delete'
	                    );
	                  }
	                }
	              }) : null
	            )
	          );
	        }
	      }),
	      _react2.default.createElement(
	        'div',
	        { style: { display: 'inline-block', verticalAlign: 'top' } },
	        _react2.default.createElement(_ModalContainer2.default, { createBoard: props.create })
	      )
	    )
	  );
	};
	exports.default = CreateBoard;

/***/ },

/***/ 599:
/*!*********************************************!*\
  !*** ./client/containers/ModalContainer.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 71);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactModal = __webpack_require__(/*! react-modal */ 514);
	
	var _reactModal2 = _interopRequireDefault(_reactModal);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var customStyles = {
	  content: {
	    top: '50%',
	    left: '50%',
	    right: 'auto',
	    bottom: 'auto',
	    marginRight: '-50%',
	    transform: 'translate(-50%, -50%)'
	  }
	};
	
	var ModalContainer = function (_Component) {
	  _inherits(ModalContainer, _Component);
	
	  function ModalContainer(props) {
	    _classCallCheck(this, ModalContainer);
	
	    var _this = _possibleConstructorReturn(this, (ModalContainer.__proto__ || Object.getPrototypeOf(ModalContainer)).call(this, props));
	
	    _this.state = {
	      modalIsOpen: false,
	      createBoard: props.createBoard,
	      inputValue: ''
	    };
	
	    _this.openModal = _this.openModal.bind(_this);
	    _this.afterOpenModal = _this.afterOpenModal.bind(_this);
	    _this.closeModal = _this.closeModal.bind(_this);
	    return _this;
	  }
	
	  _createClass(ModalContainer, [{
	    key: 'openModal',
	    value: function openModal() {
	      this.setState({ modalIsOpen: true });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.setState({ inputValue: event.target.value });
	    }
	  }, {
	    key: 'afterOpenModal',
	    value: function afterOpenModal() {
	      // references are now sync'd and can be accessed.
	      this.refs.subtitle.style.color = '#f00';
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      this.setState({ modalIsOpen: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'createButton' },
	        _react2.default.createElement(
	          'a',
	          { className: 'addBoard thumbnail', onClick: this.openModal },
	          _react2.default.createElement(
	            'div',
	            { style: { top: '50%', transform: 'translateY(-50%)' } },
	            'Create Board'
	          )
	        ),
	        _react2.default.createElement(
	          _reactModal2.default,
	          {
	            isOpen: this.state.modalIsOpen,
	            onAfterOpen: this.afterOpenModal,
	            onRequestClose: this.closeModal,
	            style: customStyles,
	            contentLabel: 'Example Modal'
	          },
	          _react2.default.createElement(
	            'h2',
	            { ref: 'subtitle' },
	            'Create a new Board'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'Board Name'
	          ),
	          _react2.default.createElement(
	            'form',
	            { id: 'cBoard', onSubmit: function onSubmit(event) {
	                event.preventDefault();
	                _this2.state.createBoard(_this2.state.inputValue);
	                _this2.setState({ inputValue: '' });
	                _this2.closeModal();
	              } },
	            _react2.default.createElement('input', {
	              type: 'text',
	              className: 'form-control',
	              value: this.state.inputValue,
	              onChange: function onChange(event) {
	                _this2.handleChange(event);
	              }
	            })
	          ),
	          _react2.default.createElement(
	            'button',
	            { form: 'cBoard' },
	            'Create'
	          ),
	          _react2.default.createElement(
	            'button',
	            { onClick: this.closeModal },
	            'close'
	          )
	        )
	      );
	    }
	  }]);
	
	  return ModalContainer;
	}(_react.Component);
	
	exports.default = ModalContainer;

/***/ },

/***/ 600:
/*!**************************************************!*\
  !*** ./client/containers/UserBoardsContainer.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserBoardsContainer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _NoteWrapper = __webpack_require__(/*! ../components/NoteWrapper */ 501);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _board = __webpack_require__(/*! ../actions/board */ 581);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UserBoardsContainer = exports.UserBoardsContainer = function (_Component) {
	  _inherits(UserBoardsContainer, _Component);
	
	  function UserBoardsContainer() {
	    _classCallCheck(this, UserBoardsContainer);
	
	    return _possibleConstructorReturn(this, (UserBoardsContainer.__proto__ || Object.getPrototypeOf(UserBoardsContainer)).apply(this, arguments));
	  }
	
	  _createClass(UserBoardsContainer, [{
	    key: 'render',
	    value: function render() {
	      var boardId = this.props.board.id;
	      var boardIdNotes = this.props.notes;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'boardBoxes' },
	        boardIdNotes.length ? boardIdNotes.map(function (note) {
	          var left = note.left,
	              top = note.top;
	
	          return _react2.default.createElement(_NoteWrapper2.default, {
	            key: note.id,
	            id: note.id,
	            left: left / 5,
	            top: top / 5,
	            note: note,
	            height: 40,
	            width: 40,
	            color: note.color
	          });
	        }) : null
	      );
	    }
	  }]);
	
	  return UserBoardsContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    notes: state.noteReducer.all.filter(function (note) {
	      return ownProps.board.id === note.board_id;
	    }),
	    board: ownProps.board
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserBoardsContainer);

/***/ }

})
//# sourceMappingURL=0.f266e1ef45de0812660e.hot-update.js.map