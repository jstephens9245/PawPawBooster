webpackHotUpdate(0,{

/***/ 773:
/*!***************************************!*\
  !*** ./client/components/ViewNote.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 284);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _bindHandlers = __webpack_require__(/*! ../utils/bindHandlers */ 503);
	
	var _bindHandlers2 = _interopRequireDefault(_bindHandlers);
	
	var _Note = __webpack_require__(/*! ./Note */ 502);
	
	var _Note2 = _interopRequireDefault(_Note);
	
	var _color = __webpack_require__(/*! color */ 504);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ViewNote = function (_Component) {
	  _inherits(ViewNote, _Component);
	
	  function ViewNote() {
	    _classCallCheck(this, ViewNote);
	
	    return _possibleConstructorReturn(this, (ViewNote.__proto__ || Object.getPrototypeOf(ViewNote)).apply(this, arguments));
	  }
	
	  _createClass(ViewNote, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      if ((!this.props.note || (0, _isEmpty2.default)(this.props.note)) && !this.props.params.id) {
	        // If no note is selected and no note ID is provided
	        // redirect to myBoards page
	        this.props.router.push('/mynotes');
	      } else {
	        this.props.getNote(this.props.params.id).then(function (_ref) {
	          var payload = _ref.payload;
	          return _this2.props.getBoard(payload.board_id);
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.note) return _react2.default.createElement('div', null);
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'h1',
	          { className: 'center' },
	          this.props.board ? this.props.board.name : ''
	        ),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10 col-xs-offset-1', style: { fontSize: '5vw' } },
	            _react2.default.createElement(_Note2.default, { content: this.props.note.content, color: this.props.note.color })
	          )
	        )
	      );
	    }
	  }]);
	
	  return ViewNote;
	}(_react.Component);
	
	exports.default = ViewNote;

/***/ }

})
//# sourceMappingURL=0.2997fe338bd2bf7481c1.hot-update.js.map