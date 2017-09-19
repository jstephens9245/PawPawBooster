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
	
	var _MobileBoardViewContainer = __webpack_require__(/*! ./containers/MobileBoardViewContainer */ 777);
	
	var _MobileBoardViewContainer2 = _interopRequireDefault(_MobileBoardViewContainer);
	
	var _board = __webpack_require__(/*! ./actions/board */ 581);
	
	var _note = __webpack_require__(/*! ./actions/note */ 552);
	
	var _user = __webpack_require__(/*! ./actions/user */ 554);
	
	var _Index = __webpack_require__(/*! ./components/Index */ 778);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//onEnters
	
	
	//action-creators
	function indexEnter() {
	  _store2.default.dispatch((0, _user.checkLoginStatus)());
	}
	
	//components
	
	// import {getNotes} from './actions/noteboard';
	
	
	//containers
	
	
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
	      _react2.default.createElement(_reactRouter.Route, { path: '/boards/:boardHash/mobile', component: _MobileBoardViewContainer2.default, onEnter: onBoardEnter }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/note' },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _CreateNoteContainer2.default, onEnter: onMyBoardEnter }),
	        _react2.default.createElement(_reactRouter.Route, { path: ':id', component: _ViewNoteContainer2.default })
	      )
	    )
	  );
	}

/***/ },

/***/ 370:
/*!*************************************************!*\
  !*** ./client/containers/NoteBoardContainer.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 371);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _reactResponsive = __webpack_require__(/*! react-responsive */ 475);
	
	var _reactResponsive2 = _interopRequireDefault(_reactResponsive);
	
	var _axios = __webpack_require__(/*! axios */ 476);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _NoteWrapper = __webpack_require__(/*! ../components/NoteWrapper */ 501);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _DraggableNote = __webpack_require__(/*! ../components/DraggableNote */ 524);
	
	var _DraggableNote2 = _interopRequireDefault(_DraggableNote);
	
	var _snapToGrid3 = __webpack_require__(/*! ../components/snapToGrid */ 551);
	
	var _snapToGrid4 = _interopRequireDefault(_snapToGrid3);
	
	var _note = __webpack_require__(/*! ../actions/note */ 552);
	
	var _user = __webpack_require__(/*! ../actions/user */ 554);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 553);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _flow = __webpack_require__(/*! lodash/flow */ 555);
	
	var _flow2 = _interopRequireDefault(_flow);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 284);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _stringHash = __webpack_require__(/*! ../utils/stringHash */ 571);
	
	var _NoteBoardTrashCan = __webpack_require__(/*! ../components/NoteBoardTrashCan */ 576);
	
	var _NoteBoardTrashCan2 = _interopRequireDefault(_NoteBoardTrashCan);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  height: '100vh',
	  width: '100%',
	  border: '1px black line',
	  position: 'relative'
	
	};
	
	var noteStyles = {
	  height: '50px',
	  width: '50px',
	  fontSize: '.5em',
	  position: 'relative'
	};
	
	var noteTarget = {
	  drop: function drop(props, monitor, component) {
	
	    var delta = monitor.getDifferenceFromInitialOffset();
	    var item = monitor.getItem();
	    if (delta === null) {
	      return;
	    } else {
	      var left = Math.round(item.left + delta.x);
	      var top = Math.round(item.top + delta.y);
	      if (props.snapToGrid) {
	        var _snapToGrid = (0, _snapToGrid4.default)(left, top);
	
	        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
	
	        left = _snapToGrid2[0];
	        top = _snapToGrid2[1];
	      }
	      props.IndexToZIndex(props.notes, item.id);
	      props.noteMover(item.id, left, top);
	      // const newdata = {[item.id]: {left, top}};
	    }
	  }
	};
	
	var collect = function collect(connector, monitor) {
	
	  return {
	    connectDropTarget: connector.dropTarget(),
	    isOver: monitor.isOver()
	  };
	};
	
	var NoteBoardContainer = function (_Component) {
	  _inherits(NoteBoardContainer, _Component);
	
	  function NoteBoardContainer(props) {
	    _classCallCheck(this, NoteBoardContainer);
	
	    var _this = _possibleConstructorReturn(this, (NoteBoardContainer.__proto__ || Object.getPrototypeOf(NoteBoardContainer)).call(this, props));
	
	    _this.boardUpdate = _this.boardUpdate.bind(_this);
	    _this.participantMoveNote = _this.participantMoveNote.bind(_this);
	    return _this;
	  }
	
	  _createClass(NoteBoardContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.socketConnect('board');
	      this.props.addSocketListener('note', this.boardUpdate);
	      this.props.addSocketListener('moveNote', this.participantMoveNote);
	    }
	  }, {
	    key: 'boardUpdate',
	    value: function boardUpdate(note) {
	      if (note.board_id === this.props.board.id) {
	        _store2.default.dispatch((0, _note.addNoteToBoard)(note));
	      }
	    }
	  }, {
	    key: 'participantMoveNote',
	    value: function participantMoveNote(data) {
	      var key = Object.keys(data);
	      var left = void 0;
	      var top = void 0;
	      var coordObj = data[key];
	      for (var coords in coordObj) {
	        if (coords === 'left') {
	          left = coordObj[coords];
	        } else {
	          top = coordObj[coords];
	        }
	      }
	      _store2.default.dispatch((0, _note.moveNote)(Number(key[0]), left, top));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.clearSocketListeners();
	      this.props.socketDisconnect();
	      (0, _note.deleteNotesFromDatabase)(this.props.deletedNotes);
	    }
	  }, {
	    key: 'renderNote',
	    value: function renderNote(item, key) {
	      console.log('NB comments', this.props);
	      return _react2.default.createElement(
	        _DraggableNote2.default,
	        _extends({ key: key, id: key }, item, { showNoteComments: this.props.showNoteComments }),
	        item.content
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          notesDelete = _props.notesDelete,
	          movedNote = _props.movedNote,
	          notes = _props.notes,
	          connectDropTarget = _props.connectDropTarget,
	          board = _props.board;
	
	      var backgroundColor = void 0;
	
	      return connectDropTarget(_react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactResponsive2.default,
	          { query: '(min-device-width: 800px)' },
	          ' ',
	          _react2.default.createElement(
	            'div',
	            { style: styles },
	            notes.map(function (note) {
	              return _this2.renderNote(note, note.id);
	            })
	          )
	        ),
	        _react2.default.createElement(
	          _reactResponsive2.default,
	          { query: '(max-device-width: 799px)' },
	          ' ',
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'ol',
	              { className: 'mobileOL' },
	              notes.map(function (note, index) {
	                backgroundColor = note.color.replace(/^#*/, '#');
	                return _react2.default.createElement(
	                  'li',
	                  { key: 'noteboard_' + note.id, className: 'mobileListItem col-xs-12',
	                    onClick: function onClick() {
	                      _this2.props.showNoteComments(note.color, note.content, note.id);
	                    } },
	                  _react2.default.createElement('div', { className: 'noteBlock col-xs-2', style: _extends({}, noteStyles, { backgroundColor: backgroundColor }) }),
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'mobileNoteContent col-xs-10' },
	                    note.content
	                  )
	                );
	              })
	            )
	          )
	        )
	      ));
	    }
	  }]);
	
	  return NoteBoardContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	
	  return {
	    notes: state.noteReducer.all.filter(function (note) {
	
	      return ownProps.board.id === note.board_id;
	    }),
	    user: state.userReducer.loggedInUser,
	    zIndexNotes: state.noteReducer.zIndexNotes,
	    deletedNotes: state.noteReducer.deletedNotes,
	
	    board: state.board.selectedBoard
	
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ noteMover: _note.noteMover, notesDelete: _note.notesDelete, participantMoveNote: _note.participantMoveNote, socketConnect: _socketio.socketConnect, socketEmit: _socketio.socketEmit, clearSocketListeners: _socketio.clearSocketListeners, socketDisconnect: _socketio.socketDisconnect, addSocketListener: _socketio.addSocketListener, addNoteToBoard: _note.addNoteToBoard, IndexToZIndex: _note.IndexToZIndex }, dispatch);
	};
	
	exports.default = (0, _flow2.default)((0, _reactDnd.DropTarget)(_constants.NOTE, noteTarget, collect), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(NoteBoardContainer);

/***/ },

/***/ 554:
/*!********************************!*\
  !*** ./client/actions/user.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.checkLoginStatus = exports.searchUsername = exports.logoutUser = exports.loginUser = exports.createUser = exports.receiveUserQuery = exports.removeLoginUser = exports.setLoginUser = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 476);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var setLoginUser = exports.setLoginUser = function setLoginUser(user) {
	  return {
	    type: _constants.SET_LOGIN_USER,
	    user: user
	  };
	};
	
	var removeLoginUser = exports.removeLoginUser = function removeLoginUser() {
	  return {
	    type: _constants.REMOVE_LOGIN_USER
	  };
	};
	
	var receiveUserQuery = exports.receiveUserQuery = function receiveUserQuery(matchedUsers) {
	  return {
	    type: _constants.RECEIVE_USER_QUERY,
	    payload: matchedUsers
	  };
	};
	
	var createUser = exports.createUser = function createUser(firstName, lastName, email, username, password) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/user/', { first_name: firstName, last_name: lastName, username: username, email: email, password: password }).then(function (res) {
	      dispatch(setLoginUser(res.data));
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};
	
	var loginUser = exports.loginUser = function loginUser(email, password) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/auth/', { email: email, password: password }).then(function (res) {
	      dispatch(setLoginUser(res.data));
	    }).catch(function (err) {
	      return err;
	    });
	  };
	};
	
	var logoutUser = exports.logoutUser = function logoutUser() {
	  return function (dispatch) {
	    return _axios2.default.delete('/api/auth/').then(function (res) {
	      return dispatch(removeLoginUser(res.data));
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};
	
	var searchUsername = exports.searchUsername = function searchUsername(username) {
	  return function (dispatch) {
	    return _axios2.default.get('/api/user/', {
	      params: {
	        searchUsername: username,
	        limit: 6
	      }
	    }).then(function (res) {
	      dispatch(receiveUserQuery(res.data));
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};
	
	/* check login state by calling server and checking user sessions */
	var checkLoginStatus = exports.checkLoginStatus = function checkLoginStatus() {
	  return function (dispatch) {
	    return _axios2.default.get('/api/auth/').then(function (res) {
	      return res;
	    }).then(function (res) {
	      return dispatch(setLoginUser(res.data));
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};

/***/ },

/***/ 601:
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
	
	var _CreateNote = __webpack_require__(/*! ../components/CreateNote */ 602);
	
	var _CreateNote2 = _interopRequireDefault(_CreateNote);
	
	var _board = __webpack_require__(/*! ../actions/board */ 581);
	
	var _note = __webpack_require__(/*! ../actions/note */ 552);
	
	var _user = __webpack_require__(/*! ../actions/user */ 554);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 553);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CreateNote2.default);
	
	
	function mapStateToProps(state) {
	  return {
	    board: state.board.selectedBoard,
	    user: state.userReducer.loggedInUser,
	    queriedUsers: state.userReducer.queriedUsers,
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
	    searchUsername: _user.searchUsername,
	    addUserPermission: _board.addUserPermission
	  }, dispatch);
	}

/***/ },

/***/ 774:
/*!**********************************************!*\
  !*** ./client/containers/SignupContainer.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SignupContainer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(/*! axios */ 476);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _user = __webpack_require__(/*! ../actions/user */ 554);
	
	var _Signup = __webpack_require__(/*! ../components/Signup */ 775);
	
	var _Signup2 = _interopRequireDefault(_Signup);
	
	var _Login = __webpack_require__(/*! ../components/Login */ 776);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 284);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(/*! react-addons-css-transition-group */ 584);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SignupContainer = exports.SignupContainer = function (_Component) {
	  _inherits(SignupContainer, _Component);
	
	  function SignupContainer(props) {
	    _classCallCheck(this, SignupContainer);
	
	    var _this = _possibleConstructorReturn(this, (SignupContainer.__proto__ || Object.getPrototypeOf(SignupContainer)).call(this, props));
	
	    _this.state = {
	      type: 'signup',
	      firstName: '',
	      lastName: '',
	      email: '',
	      username: '',
	      password: '',
	      display: false,
	      dirty: false
	    };
	
	    _this.submitForm = _this.submitForm.bind(_this);
	    _this.handleInput = _this.handleInput.bind(_this);
	    _this.changeForm = _this.changeForm.bind(_this);
	    _this.loginForm = _this.loginForm.bind(_this);
	    return _this;
	  }
	
	  _createClass(SignupContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.checkLoginStatus();
	      this.setState({ display: true });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props, nextProps) {
	      if (!(0, _isEmpty2.default)(props.loggedInUser)) {
	        this.props.router.push('/');
	      } else {
	        this.setState({ dirty: false });
	      }
	    }
	  }, {
	    key: 'submitForm',
	    value: function submitForm(e) {
	      e.preventDefault();
	      this.props.createUser(this.state.firstName, this.state.lastName, this.state.email, this.state.username, this.state.password);
	    }
	  }, {
	    key: 'loginForm',
	    value: function loginForm(e) {
	      e.preventDefault();
	      this.props.loginUser(this.state.email, this.state.password);
	      this.setState({ dirty: true });
	    }
	  }, {
	    key: 'changeForm',
	    value: function changeForm(type) {
	      this.setState({ type: type });
	    }
	  }, {
	    key: 'handleInput',
	    value: function handleInput(e) {
	      this.setState(_defineProperty({}, e.target.name, e.target.value));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var dirty = this.state.dirty;
	      var warning = '';
	
	      if (dirty) warning = 'Password or Email is Invalid';
	
	      return _react2.default.createElement(
	        _reactAddonsCssTransitionGroup2.default,
	        {
	          transitionName: 'slideIn',
	          transitionAppear: true,
	          transitionAppearTimeout: 500,
	          transitionEnterTimeout: 500,
	          transitionLeaveTimeout: 500 },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-container ' + this.state.type },
	          this.state.type === 'signup' ? _react2.default.createElement(_Signup2.default, { submitForm: this.submitForm,
	            changeForm: this.changeForm,
	            handleInput: this.handleInput,
	            warning: warning }) : _react2.default.createElement(_Login2.default, { loginForm: this.loginForm,
	            handleInput: this.handleInput,
	            changeForm: this.changeForm,
	            warning: warning })
	        )
	      );
	    }
	  }]);
	
	  return SignupContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    loggedInUser: state.userReducer.loggedInUser
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    createUser: function createUser(firstName, lastName, email, username, password) {
	      return dispatch((0, _user.createUser)(firstName, lastName, email, username, password));
	    },
	    loginUser: function loginUser(email, password) {
	      return dispatch((0, _user.loginUser)(email, password));
	    },
	    checkLoginStatus: function checkLoginStatus() {
	      return dispatch((0, _user.checkLoginStatus)());
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SignupContainer);

/***/ },

/***/ 777:
/*!*******************************************************!*\
  !*** ./client/containers/MobileBoardViewContainer.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _axios = __webpack_require__(/*! axios */ 476);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _reactResponsive = __webpack_require__(/*! react-responsive */ 475);
	
	var _reactResponsive2 = _interopRequireDefault(_reactResponsive);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _NoteWrapper = __webpack_require__(/*! ../components/NoteWrapper */ 501);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _snapToGrid = __webpack_require__(/*! ../components/snapToGrid */ 551);
	
	var _snapToGrid2 = _interopRequireDefault(_snapToGrid);
	
	var _note = __webpack_require__(/*! ../actions/note */ 552);
	
	var _user = __webpack_require__(/*! ../actions/user */ 554);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 553);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _flow = __webpack_require__(/*! lodash/flow */ 555);
	
	var _flow2 = _interopRequireDefault(_flow);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 284);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _stringHash = __webpack_require__(/*! ../utils/stringHash */ 571);
	
	var _NoteBoardTrashCan = __webpack_require__(/*! ../components/NoteBoardTrashCan */ 576);
	
	var _NoteBoardTrashCan2 = _interopRequireDefault(_NoteBoardTrashCan);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var noteStyles = {
	  height: '50px',
	  width: '50px',
	  border: '1px solid black',
	  position: 'relative'
	
	};
	
	var MobileBoardViewContainer = function (_Component) {
	  _inherits(MobileBoardViewContainer, _Component);
	
	  function MobileBoardViewContainer(props) {
	    _classCallCheck(this, MobileBoardViewContainer);
	
	    var _this = _possibleConstructorReturn(this, (MobileBoardViewContainer.__proto__ || Object.getPrototypeOf(MobileBoardViewContainer)).call(this, props));
	
	    _this.boardUpdate = _this.boardUpdate.bind(_this);
	    // this.participantMoveNote = this.participantMoveNote.bind(this);
	    // this.deleteNotesFromDatabase = this.deleteNotesFromDatabase.bind(this);
	    return _this;
	  }
	
	  _createClass(MobileBoardViewContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.socketConnect('board');
	      this.props.addSocketListener('note', this.boardUpdate);
	      this.props.addSocketListener('moveNote', this.participantMoveNote);
	    }
	  }, {
	    key: 'boardUpdate',
	    value: function boardUpdate(note) {
	      if (note.board_id === this.props.board.id) {
	        _store2.default.dispatch((0, _note.addNoteToBoard)(note));
	      }
	    }
	
	    // participantMoveNote(data) {
	    //   const key = Object.keys(data);
	    //   let left;
	    //   let top;
	    //   const coordObj = data[key];
	    //   for (const coords in coordObj) {
	    //     if (coords === 'left') {
	    //       left = coordObj[coords];
	    //     } else {
	    //       top = coordObj[coords];
	    //     }
	    //   }
	    //   store.dispatch(moveNote(Number(key[0]), left, top));
	    // }
	
	
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.clearSocketListeners();
	      this.props.socketDisconnect();
	      this.deleteNotesFromDatabase();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          notes = _props.notes,
	          board = _props.board;
	
	      console.log('PROPS NOTESasdfadsfads', this.props);
	      var backgroundColor = void 0;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactResponsive2.default,
	          { query: '(min-device-width: 800px)' },
	          _react2.default.createElement(
	            'h4',
	            { style: { textAlign: 'center' } },
	            board.name
	          ),
	          _react2.default.createElement(
	            'ol',
	            null,
	            notes.map(function (note, index) {
	              backgroundColor = '#' + note.color;
	              return _react2.default.createElement(
	                'li',
	                { key: note.id, className: 'mobileListItem col-xs-12' },
	                _react2.default.createElement('div', { className: 'noteBlock col-xs-2', style: _extends({}, noteStyles, { backgroundColor: backgroundColor }) }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'mobileNoteContent col-xs-10' },
	                  note.content
	                )
	              );
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'trashcan' },
	            _react2.default.createElement(_NoteBoardTrashCan2.default, { notesDelete: _note.notesDelete, notes: notes })
	          )
	        )
	      );
	    }
	  }]);
	
	  return MobileBoardViewContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  var hash = ownProps.params.boardHash;
	
	  return {
	    notes: state.noteReducer.all.filter(function (note) {
	
	      return hash === (0, _stringHash.genShortHash)(note.board_id);
	    }),
	
	    user: state.userReducer.loggedInUser,
	    zIndexNotes: state.noteReducer.zIndexNotes,
	    deletedNotes: state.noteReducer.deletedNotes,
	    board: state.board.selectedBoard
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ noteMover: _note.noteMover, notesDelete: _note.notesDelete, participantMoveNote: _note.participantMoveNote, socketConnect: _socketio.socketConnect, socketEmit: _socketio.socketEmit, clearSocketListeners: _socketio.clearSocketListeners, socketDisconnect: _socketio.socketDisconnect, addSocketListener: _socketio.addSocketListener, addNoteToBoard: _note.addNoteToBoard, IndexToZIndex: _note.IndexToZIndex }, dispatch);
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MobileBoardViewContainer);

/***/ },

/***/ 783:
/*!**********************************************!*\
  !*** ./client/containers/NavbarContainer.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _Navbar = __webpack_require__(/*! ../components/Navbar */ 784);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _user = __webpack_require__(/*! ../actions/user */ 554);
	
	var _navbar = __webpack_require__(/*! ../actions/navbar */ 782);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    user: state.userReducer.loggedInUser,
	    sidebarToggle: state.nav.sidebarToggle
	
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    logoutUser: function logoutUser() {
	      dispatch((0, _user.logoutUser)()).then(function () {
	        return _reactRouter.browserHistory.push('/signup');
	      });
	    },
	    toggleSidebar: function toggleSidebar(field) {
	      return dispatch((0, _navbar.toggleClick)(field));
	    }
	  };
	};
	
	var NB = function (_Component) {
	  _inherits(NB, _Component);
	
	  function NB(props) {
	    _classCallCheck(this, NB);
	
	    var _this = _possibleConstructorReturn(this, (NB.__proto__ || Object.getPrototypeOf(NB)).call(this, props));
	
	    _this.state = {
	      aria: false,
	      toggleClass: 'navClass navbar-collapse collapse'
	    };
	    _this.expandNav = _this.expandNav.bind(_this);
	    return _this;
	  }
	
	  _createClass(NB, [{
	    key: 'expandNav',
	    value: function expandNav() {
	      var newToggleClassValue = '';
	
	      if (this.state.toggleClass === 'navClass navbar-collapse collapse') {
	        newToggleClassValue = 'navClass navbar-collapse collapse in navToggle';
	      } else {
	        newToggleClassValue = 'navClass navbar-collapse collapse';
	      }
	      this.setState({
	        aria: !this.state.aria,
	        toggleClass: newToggleClassValue
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Navbar2.default, {
	        aria: this.state.aria,
	        expandNav: this.expandNav,
	        navClass: this.state.toggleClass,
	        user: this.props.user,
	        logoutUser: this.props.logoutUser,
	        toggleSidebar: this.props.toggleSidebar
	      });
	    }
	  }]);
	
	  return NB;
	}(_react.Component);
	
	var NavbarContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NB);
	
	exports.default = NavbarContainer;

/***/ }

})
//# sourceMappingURL=0.df7b68256c98ead92505.hot-update.js.map