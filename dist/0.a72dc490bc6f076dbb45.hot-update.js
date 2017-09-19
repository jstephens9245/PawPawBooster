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
	  height: '150vh',
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
	        do {
	          console.log('call board update');
	          _store2.default.dispatch((0, _note.addNoteToBoard)(note));
	        } while (false);{}
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
	            { style: { marginTop: '70px' } },
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

/***/ 552:
/*!********************************!*\
  !*** ./client/actions/note.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteNotesFromDatabase = exports.notesDelete = exports.IndexToZIndex = exports.noteMover = exports.deleteNote = exports.setNoteCoords = exports.addNoteToBoard = exports.noteArrayIndexPush = exports.selectedNoteDetail = exports.moveNote = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.receiveNote = receiveNote;
	exports.receiveNotes = receiveNotes;
	exports.selectNote = selectNote;
	exports.getNote = getNote;
	exports.getAllNotes = getAllNotes;
	exports.createNote = createNote;
	
	var _axios = __webpack_require__(/*! axios */ 476);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _socketio = __webpack_require__(/*! ./socketio */ 553);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function receiveNote(note) {
	  return {
	    type: _constants.RECEIVE_NOTE,
	    payload: note
	  };
	}
	
	function receiveNotes(notes) {
	  return {
	    type: _constants.RECEIVE_NOTES,
	    payload: notes
	  };
	}
	
	function selectNote(noteId) {
	  return {
	    type: _constants.SELECT_NOTE,
	    payload: { noteId: noteId }
	  };
	}
	
	var moveNote = exports.moveNote = function moveNote(id, left, top) {
	  return {
	    type: _constants.MOVE_NOTE,
	    notes: _defineProperty({}, id, { left: left, top: top })
	  };
	};
	
	var selectedNoteDetail = exports.selectedNoteDetail = function selectedNoteDetail(selectedNoteDetails) {
	  return {
	    type: _constants.NOTE_DETAIL,
	    selectedNoteDetails: selectedNoteDetails
	  };
	};
	
	var noteArrayIndexPush = exports.noteArrayIndexPush = function noteArrayIndexPush(noteArr) {
	  return {
	    type: _constants.NOTE_ARRAY_INDEX_PUSH,
	    zIndexNotes: noteArr
	  };
	};
	
	var addNoteToBoard = exports.addNoteToBoard = function addNoteToBoard(note) {
	  console.log(note);
	  return {
	    type: _constants.ADD_NOTE_TO_BOARD,
	    newNote: note
	  };
	};
	
	var setNoteCoords = exports.setNoteCoords = function setNoteCoords(note) {
	  return {
	    type: _constants.ADD_NOTE_TO_BOARD,
	    note: note
	  };
	};
	
	var deleteNote = exports.deleteNote = function deleteNote(note) {
	  return {
	    type: _constants.DELETE_NOTE,
	    deletedNote: note
	  };
	};
	
	function getNote(noteId) {
	  return function (dispatch) {
	    return _axios2.default.get('/api/notes/' + noteId).then(function (res) {
	      return res.data;
	    }).then(function (note) {
	      return dispatch(receiveNote(note));
	    }).then(function (note) {
	      return Promise.all([note, dispatch(selectNote(noteId))]);
	    }).then(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          note = _ref2[0];
	
	      return note;
	    }).catch(function (err) {
	      return console.warn(err);
	    });
	  };
	}
	
	var noteMover = exports.noteMover = function noteMover(id, left, top) {
	  var data = _defineProperty({}, id, { left: left, top: top });
	
	  return function (dispatch) {
	    dispatch((0, _socketio.socketEmit)('moveNote', data));
	    dispatch(moveNote(id, left, top));
	  };
	};
	
	var IndexToZIndex = exports.IndexToZIndex = function IndexToZIndex(notes, dragNoteId) {
	  return function (dispatch) {
	
	    var newNoteArr = notes;
	    var dragNoteIndex = notes.map(function (note) {
	      return note.id;
	    }).indexOf(dragNoteId);
	    var dragNote = notes[dragNoteIndex];
	
	    newNoteArr.splice(dragNoteIndex, 1);
	    newNoteArr.push(dragNote);
	
	    dispatch(noteArrayIndexPush(newNoteArr));
	  };
	};
	
	var notesDelete = exports.notesDelete = function notesDelete(noteId, notes) {
	  return function (dispatch) {
	    var newArr = notes;
	    var deleteNoteId = noteId;
	    var deleteNoteIndex = notes.map(function (note) {
	      return note.id;
	    }).indexOf(deleteNoteId);
	    var deletedNote = notes[deleteNoteIndex];
	
	    newArr.splice(deleteNoteIndex, 1);
	    dispatch(deleteNote(deletedNote));
	    dispatch(receiveNotes(newArr));
	  };
	};
	
	var deleteNotesFromDatabase = exports.deleteNotesFromDatabase = function deleteNotesFromDatabase(deleteNotesArr) {
	  deleteNotesArr.forEach(function (note) {
	    _axios2.default.delete('/api/notes/' + note.id).then(function (deleted) {
	      return console.log('DELETED NOTES', deleted);
	    }).catch(function (err) {
	      return console.log('deleteNotes from datatbase had an error');
	    });
	  });
	};
	
	function getAllNotes(_ref3) {
	  var userId = _ref3.userId,
	      boardId = _ref3.boardId;
	
	  return function (dispatch) {
	    return _axios2.default.get('/api/notes/', { params: { userId: userId, boardId: boardId } }).then(function (res) {
	      return res.data;
	    }).then(function (notes) {
	      console.log(notes);
	      dispatch(receiveNotes(notes));
	    }).catch(function (err) {
	      return console.warn(err);
	    });
	  };
	}
	
	function createNote(note, boardId) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/notes/', {
	      content: note.content,
	      color: note.color,
	      mentions: note.mentions || [],
	      boardId: boardId || note.boardId
	    }).then(function (_ref4) {
	      var data = _ref4.data;
	
	      console.log(data);
	      dispatch((0, _socketio.socketEmit)('note', data));
	    }).catch(function (err) {
	      return console.warn(err);
	    });
	  };
	}

/***/ },

/***/ 553:
/*!************************************!*\
  !*** ./client/actions/socketio.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.socketDisconnect = exports.clearSocketListeners = exports.addSocketListener = exports.socketEmit = exports.socketConnect = exports.clearAllListeners = exports.addListener = undefined;
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _socket = __webpack_require__(/*! socket.io-client */ 234);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 284);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var io = _socket2.default;
	
	var socket = {};
	
	var addListener = exports.addListener = function addListener(eventName) {
	  return {
	    type: _constants.ADD_LISTENER,
	    eventName: eventName
	  };
	};
	
	var clearAllListeners = exports.clearAllListeners = function clearAllListeners() {
	  return {
	    type: _constants.REMOVE_LISTENER
	  };
	};
	
	//need to change to ip address where board resides
	
	var socketConnect = exports.socketConnect = function socketConnect(namespace) {
	  return function (dispatch) {
	    socket = io('/' + namespace);
	  };
	};
	
	var socketEmit = exports.socketEmit = function socketEmit(eventName, payload) {
	  return function (dispatch) {
	    if (!(0, _isEmpty2.default)(socket)) {
	      socket.emit(eventName, payload);
	    }
	  };
	};
	
	var addSocketListener = exports.addSocketListener = function addSocketListener(eventName, method) {
	  return function (dispatch) {
	    if (!(0, _isEmpty2.default)(socket)) {
	      socket.on(eventName, method);
	      dispatch(addListener(eventName));
	    }
	  };
	};
	
	var clearSocketListeners = exports.clearSocketListeners = function clearSocketListeners() {
	  return function (dispatch, getState) {
	    if (!(0, _isEmpty2.default)(socket)) {
	      var events = getState().socket.events;
	      events.forEach(function (e) {
	        socket.removeListener(e);
	      });
	    }
	    dispatch(clearAllListeners());
	  };
	};
	
	var socketDisconnect = exports.socketDisconnect = function socketDisconnect() {
	  return function (dispatch) {
	    if (socket.disconnect) socket.disconnect();
	  };
	};

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
	        { style: {
	            width: '100%',
	            height: 200,
	            position: 'relative' } },
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
//# sourceMappingURL=0.a72dc490bc6f076dbb45.hot-update.js.map