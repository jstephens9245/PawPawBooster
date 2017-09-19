webpackHotUpdate(0,{

/***/ 500:
/*!******************************************!*\
  !*** ./client/components/NoteWrapper.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 369);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _Note = __webpack_require__(/*! ./Note */ 501);
	
	var _Note2 = _interopRequireDefault(_Note);
	
	var _ShouldCompUpdate = __webpack_require__(/*! ./ShouldCompUpdate */ 511);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var noteSource = {
	  beginDrag: function beginDrag(props) {
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
	
	var NoteWrapper = function (_PureComponent) {
	  _inherits(NoteWrapper, _PureComponent);
	
	  function NoteWrapper() {
	    _classCallCheck(this, NoteWrapper);
	
	    return _possibleConstructorReturn(this, (NoteWrapper.__proto__ || Object.getPrototypeOf(NoteWrapper)).apply(this, arguments));
	  }
	
	  _createClass(NoteWrapper, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _ShouldCompUpdate.shallowEqual)(this.props, nextProps);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          color = _props.color,
	          red = _props.red,
	          content = _props.content;
	
	
	      var styles = {
	        cursor: 'move',
	        height: this.props.height || 100,
	        width: this.props.width || 100,
	        left: this.props.left || 0,
	        top: this.props.top || 0,
	        position: 'absolute'
	      };
	
	      var backgroundColor = red ? 'red' : 'white';
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'enlarge', style: _extends({}, styles) },
	        _react2.default.createElement(_Note2.default, { color: color, content: content, value: this.props.content })
	      );
	    }
	  }]);
	
	  return NoteWrapper;
	}(_react.PureComponent);
	
	exports.default = NoteWrapper;

/***/ }

})
//# sourceMappingURL=0.9f8cd6f7966b680abbc4.hot-update.js.map