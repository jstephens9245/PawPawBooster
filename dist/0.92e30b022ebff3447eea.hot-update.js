webpackHotUpdate(0,{

/***/ 497:
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
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 367);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 312);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _NoteWrapper = __webpack_require__(/*! ../components/NoteWrapper */ 498);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _DraggableNote = __webpack_require__(/*! ../components/DraggableNote */ 509);
	
	var _DraggableNote2 = _interopRequireDefault(_DraggableNote);
	
	var _snapToGrid3 = __webpack_require__(/*! ../components/snapToGrid */ 510);
	
	var _snapToGrid4 = _interopRequireDefault(_snapToGrid3);
	
	var _note = __webpack_require__(/*! ../actions/note */ 511);
	
	var _user = __webpack_require__(/*! ../actions/user */ 538);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 537);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _flow = __webpack_require__(/*! lodash/flow */ 539);
	
	var _flow2 = _interopRequireDefault(_flow);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 283);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _stringHash = __webpack_require__(/*! ../utils/stringHash */ 555);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  height: 1000,
	  width: 1000,
	  position: 'relative'
	};
	
	var queStyles = {
	  height: 100,
	  width: 1000,
	  color: '#FD543D',
	  position: 'relative'
	};
	
	var noteTarget = {
	  drop: function drop(props, monitor, component) {
	    var delta = monitor.getDifferenceFromInitialOffset();
	    var item = monitor.getItem();
	
	    var left = Math.round(item.left + delta.x);
	    var top = Math.round(item.top + delta.y);
	    if (props.snapToGrid) {
	      var _snapToGrid = (0, _snapToGrid4.default)(left, top);
	
	      var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
	
	      left = _snapToGrid2[0];
	      top = _snapToGrid2[1];
	    }
	
	    props.moveNote(item.id, left, top);
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
	    return _this;
	  }
	
	  _createClass(NoteBoardContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.socketConnect('board');
	      this.props.addSocketListener('note', this.boardUpdate);
	    }
	  }, {
	    key: 'boardUpdate',
	    value: function boardUpdate(note) {
	      _store2.default.dispatch((0, _note.addNoteToBoard)(note));
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(_ref) {
	      var board = _ref.board,
	          user = _ref.user,
	          note = _ref.note,
	          room = _ref.room;
	
	
	      if (!this.props.board || (0, _isEmpty2.default)(this.props.board)) {
	        return;
	      } else {
	        this.props.socketEmit('join', {
	
	          room: (0, _stringHash.genShortHash)(board.id),
	          name: user.first_name + user.last_name
	        });
	      }
	
	      if (!note) {
	        return;
	      } else if (note.room === room) {
	        this.props.socketEmit('updateBoard', {
	          note: note
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      console.log('UNMOUNTED');
	      this.props.clearSocketListeners();
	      this.props.socketDisconnect();
	    }
	  }, {
	    key: 'renderNote',
	    value: function renderNote(item, key) {
	
	      return _react2.default.createElement(_DraggableNote2.default, _extends({ key: key, id: key }, item));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          movedNote = _props.movedNote,
	          notes = _props.notes,
	          connectDropTarget = _props.connectDropTarget;
	
	
	      return connectDropTarget(_react2.default.createElement(
	        'div',
	        { style: styles },
	        _react2.default.createElement(
	          'div',
	          { style: queStyles },
	          notes.map(function (note) {
	            return _this2.renderNote(note, note.id);
	          })
	        )
	      ));
	    }
	  }]);
	
	  return NoteBoardContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	
	  return { notes: state.noteReducer.all.filter(function (note) {
	      return state.userReducer.loggedInUser.id === note.board_id;
	    }),
	    user: state.userReducer.loggedInUser };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ moveNote: _note.moveNote, socketConnect: _socketio.socketConnect, socketEmit: _socketio.socketEmit, clearSocketListeners: _socketio.clearSocketListeners, socketDisconnect: _socketio.socketDisconnect, addSocketListener: _socketio.addSocketListener, addNoteToBoard: _note.addNoteToBoard }, dispatch);
	};
	
	exports.default = (0, _flow2.default)((0, _reactDnd.DropTarget)(_constants.NOTE, noteTarget, collect), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(NoteBoardContainer);

/***/ }

})
//# sourceMappingURL=0.92e30b022ebff3447eea.hot-update.js.map