webpackHotUpdate(0,{

/***/ 369:
/*!*************************************************!*\
  !*** ./client/containers/NoteBoardContainer.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 370);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _NoteWrapper = __webpack_require__(/*! ../components/NoteWrapper */ 474);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _note = __webpack_require__(/*! ../actions/note */ 486);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _flow = __webpack_require__(/*! lodash/flow */ 512);
	
	var _flow2 = _interopRequireDefault(_flow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  width: 1000,
	  height: 1000,
	  position: 'relative'
	};
	
	var noteTarget = {
	  drop: function drop(props, monitor, component) {
	
	    var delta = monitor.getDifferenceFromInitialOffset();
	    var item = monitor.getItem();
	
	    var left = Math.round(item.left + delta.x);
	    var top = Math.round(item.top + delta.y);
	
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
	
	  function NoteBoardContainer() {
	    _classCallCheck(this, NoteBoardContainer);
	
	    return _possibleConstructorReturn(this, (NoteBoardContainer.__proto__ || Object.getPrototypeOf(NoteBoardContainer)).apply(this, arguments));
	  }
	
	  _createClass(NoteBoardContainer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          movedNote = _props.movedNote,
	          notes = _props.notes,
	          connectDropTarget = _props.connectDropTarget;
	
	      return connectDropTarget(_react2.default.createElement(
	        'div',
	        { style: styles },
	        notes.map(function (note) {
	          var left = note.left,
	              top = note.top;
	
	
	          return _react2.default.createElement(_NoteWrapper2.default, {
	            key: note.id,
	            id: note.id,
	            left: left,
	            top: top,
	            note: note
	          });
	        })
	      ));
	    }
	  }]);
	
	  return NoteBoardContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    notes: state.noteReducer.all
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    moveNote: function moveNote(id, left, top) {
	      return dispatch((0, _note.moveNote)(id, left, top));
	    }
	  };
	};
	
	exports.default = (0, _flow2.default)((0, _reactDnd.DropTarget)(_constants.NOTE, noteTarget, collect), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(NoteBoardContainer);

/***/ },

/***/ 474:
/*!******************************************!*\
  !*** ./client/components/NoteWrapper.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 370);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _shouldPureComponentUpdate = __webpack_require__(/*! ./shouldPureComponentUpdate */ 475);
	
	var _shouldPureComponentUpdate2 = _interopRequireDefault(_shouldPureComponentUpdate);
	
	var _Note = __webpack_require__(/*! ./Note */ 476);
	
	var _Note2 = _interopRequireDefault(_Note);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  border: '1px dashed gray',
	  padding: '0.5rem 1rem',
	  cursor: 'move',
	  height: undefined.props.height || 100,
	  width: 100,
	  position: 'absolute'
	};
	
	var noteSource = {
	  beginDrag: function beginDrag(props) {
	    console.log('NS', props);
	    var id = props.id,
	        left = props.left,
	        top = props.top;
	
	    return { id: id, left: left, top: top };
	  }
	};
	
	var collect = function collect(connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource(),
	    isDragging: monitor.isDragging()
	  };
	};
	
	var NoteWrapper = function (_Component) {
	  _inherits(NoteWrapper, _Component);
	
	  function NoteWrapper() {
	    _classCallCheck(this, NoteWrapper);
	
	    return _possibleConstructorReturn(this, (NoteWrapper.__proto__ || Object.getPrototypeOf(NoteWrapper)).apply(this, arguments));
	  }
	
	  _createClass(NoteWrapper, [{
	    key: 'render',
	
	
	    // shouldComponentUpdate = shouldPureComponentUpdate;
	
	    value: function render() {
	      // console.log('NOTEWRAPPER PROPS', this.props);
	      var _props = this.props,
	          hideSourceOnDrag = _props.hideSourceOnDrag,
	          left = _props.left,
	          top = _props.top,
	          connectDragSource = _props.connectDragSource,
	          isDragging = _props.isDragging,
	          children = _props.children,
	          note = _props.note;
	
	      if (isDragging && hideSourceOnDrag) {
	        return null;
	      }
	      return connectDragSource(_react2.default.createElement(
	        'div',
	        { style: {
	            border: '1px dashed gray',
	            padding: '0.5rem 1rem',
	            cursor: 'move',
	            height: this.props.height || 100,
	            width: this.props.width || 100,
	            position: 'absolute', left: left, top: top } },
	        _react2.default.createElement(_Note2.default, { color: note.color })
	      ));
	    }
	  }]);
	
	  return NoteWrapper;
	}(_react.Component);
	
	exports.default = (0, _reactDnd.DragSource)(_constants.NOTE, noteSource, collect)(NoteWrapper);

/***/ },

/***/ 475:
/*!********************************************************!*\
  !*** ./client/components/shouldPureComponentUpdate.js ***!
  \********************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = shouldPureComponentUpdate;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i += 1) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	
	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];
	
	    if (valA !== valB) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	function shouldPureComponentUpdate(nextProps, nextState) {
	  return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	}

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
	
	var _NoteWrapper = __webpack_require__(/*! ../components/NoteWrapper */ 474);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _board = __webpack_require__(/*! ../actions/board */ 528);
	
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
	    key: 'render',
	    value: function render() {
	      var boardId = this.props.board.id;
	      var boardIdNotes = [];
	
	      if (this.props.notes.length) {
	        boardIdNotes = this.props.notes.filter(function (note) {
	          return boardId === note.board_id;
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { style: {
	            width: 200,
	            height: 200,
	            position: 'relative' } },
	        boardIdNotes.length ? boardIdNotes.map(function (note) {
	          var left = note.left,
	              top = note.top;
	
	          return _react2.default.createElement(_NoteWrapper2.default, {
	            key: note.id,
	            id: note.id,
	            left: left / 10,
	            top: top / 10,
	            note: note
	          });
	        }) : null
	      );
	    }
	  }]);
	
	  return UserBoardsContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    notes: state.noteReducer.all,
	    board: ownProps.board
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserBoardsContainer);

/***/ }

})
//# sourceMappingURL=0.77d2b0a86a1d7d60c747.hot-update.js.map