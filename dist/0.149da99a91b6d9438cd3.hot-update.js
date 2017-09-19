webpackHotUpdate(0,{

/***/ 368:
/*!*********************************************!*\
  !*** ./client/containers/BoardContainer.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _socket = __webpack_require__(/*! socket.io-client */ 234);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _CustomDragLayerContainer = __webpack_require__(/*! ./CustomDragLayerContainer */ 369);
	
	var _CustomDragLayerContainer2 = _interopRequireDefault(_CustomDragLayerContainer);
	
	var _ParticipantsContainer = __webpack_require__(/*! ./ParticipantsContainer */ 579);
	
	var _ParticipantsContainer2 = _interopRequireDefault(_ParticipantsContainer);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 553);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _bindHandlers = __webpack_require__(/*! ../utils/bindHandlers */ 503);
	
	var _bindHandlers2 = _interopRequireDefault(_bindHandlers);
	
	var _NoteDetailsContainer = __webpack_require__(/*! ./NoteDetailsContainer */ 582);
	
	var _NoteDetailsContainer2 = _interopRequireDefault(_NoteDetailsContainer);
	
	var _note = __webpack_require__(/*! ../actions/note */ 552);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ReactDOM = __webpack_require__(/*! react-dom */ 71);
	
	
	// import Clipboard from 'react-clipboard';
	
	// localhost:3030/note?board=${this.props.board.hash}
	function noop() {}
	
	var Clipboard = _react2.default.createClass({
	  displayName: 'Clipboard',
	
	
	  propTypes: {
	    value: _react2.default.PropTypes.string.isRequired,
	    className: _react2.default.PropTypes.string,
	    style: _react2.default.PropTypes.object,
	    onCopy: _react2.default.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      className: 'clipboard',
	      style: {
	        position: 'fixed',
	        overflow: 'hidden',
	        clip: 'rect(0 0 0 0)',
	        height: 1,
	        width: 1,
	        margin: -1,
	        padding: 0,
	        border: 0
	      },
	      onCopy: noop
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    document.addEventListener('keydown', this.handleKeyDown, false);
	    document.addEventListener('keyup', this.handleKeyUp, false);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    document.removeEventListener('keydown', this.handleKeyDown, false);
	    document.removeEventListener('keyup', this.handleKeyUp, false);
	  },
	
	  render: function render() {
	    return _react2.default.createElement('textarea', _extends({}, this.props, { readOnly: true, onCopy: this.handleCopy }));
	  },
	
	  handleCopy: function handleCopy(e) {
	    this.props.onCopy(e);
	  },
	
	  handleKeyDown: function handleKeyDown(e) {
	    var metaKeyIsDown = e.ctrlKey || e.metaKey;
	    var textIsSelected = window.getSelection().toString();
	
	    if (!metaKeyIsDown || textIsSelected) {
	      return;
	    }
	
	    var element = ReactDOM.findDOMNode(this);
	    element.focus();
	    element.select();
	  },
	
	  handleKeyUp: function handleKeyUp(e) {
	    var element = ReactDOM.findDOMNode(this);
	    element.blur();
	  }
	
	});
	
	var BoardContainer = function (_Component) {
	  _inherits(BoardContainer, _Component);
	
	  function BoardContainer(props) {
	    _classCallCheck(this, BoardContainer);
	
	    var _this = _possibleConstructorReturn(this, (BoardContainer.__proto__ || Object.getPrototypeOf(BoardContainer)).call(this, props));
	
	    (0, _bindHandlers2.default)(_this, _this.showNoteComments, _this.hideNoteComments);
	
	    return _this;
	  }
	
	  _createClass(BoardContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          dispatch = _props.dispatch,
	          board = _props.board,
	          notes = _props.notes;
	
	      var boardId = board.id;
	    }
	  }, {
	    key: 'showNoteComments',
	    value: function showNoteComments(color, content, noteId) {
	      console.log('show note comments');
	      this.props.selectedNoteDetail({ color: color, content: content, noteId: noteId });
	    }
	  }, {
	    key: 'hideNoteComments',
	    value: function hideNoteComments() {
	      this.props.selectedNoteDetail();
	    }
	  }, {
	    key: 'handleCopy',
	    value: function handleCopy(e) {
	      console.log('copied', e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var value = '' + window.location.host + (window.location.host === 'localhost' ? window.location.port : '') + '/note?board=' + this.props.board.hash;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'col-xs-12 board-page-container', key: this.props.board.id },
	        this.props.selectedNoteDetails ? _react2.default.createElement(_NoteDetailsContainer2.default, {
	          note: this.props.selectedNoteDetails,
	          hideNoteComments: this.hideNoteComments
	        }) : null,
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-12 clearfix' },
	          _react2.default.createElement(
	            'div',
	            { className: 'text-right ClipboardBlocking', style: { position: 'absolute', right: '0', top: '0', zIndex: '100' } },
	            _react2.default.createElement(
	              'p',
	              null,
	              'create note:'
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/note?board=' + this.props.board.hash },
	              _react2.default.createElement(
	                'div',
	                null,
	                value
	              ),
	              _react2.default.createElement(Clipboard, { value: value,
	                onCopy: this.handleCopy })
	            )
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/note?board=' + this.props.board.hash },
	            _react2.default.createElement(
	              'h2',
	              { className: 'boardTitle text-center', style: { width: '10em', margin: '.5em auto', zIndex: 30 } },
	              this.props.board.name
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_CustomDragLayerContainer2.default, _extends({}, this.props, { showNoteComments: this.showNoteComments }))
	          )
	        ),
	        _react2.default.createElement(_ParticipantsContainer2.default, null)
	      );
	    }
	  }]);
	
	  return BoardContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    board: state.board.selectedBoard,
	    notes: state.noteReducer.all,
	    hash: state.board.selectedBoard.hash,
	    selectedNoteDetails: state.noteReducer.selectedNoteDetails
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ socketConnect: _socketio.socketConnect, socketDisconnect: _socketio.socketDisconnect, clearSocketListeners: _socketio.clearSocketListeners, selectedNoteDetail: _note.selectedNoteDetail }, dispatch);
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BoardContainer);

/***/ }

})
//# sourceMappingURL=0.149da99a91b6d9438cd3.hot-update.js.map