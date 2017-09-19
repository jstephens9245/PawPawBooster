webpackHotUpdate(0,{

/***/ 474:
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
	  height: 20,
	  width: 20,
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
	        { style: _extends({}, styles, { left: left, top: top }) },
	        _react2.default.createElement(_Note2.default, { color: note.color })
	      ));
	    }
	  }]);
	
	  return NoteWrapper;
	}(_react.Component);
	
	exports.default = (0, _reactDnd.DragSource)(_constants.NOTE, noteSource, collect)(NoteWrapper);

/***/ }

})
//# sourceMappingURL=0.754c8c891fa2dd9271ec.hot-update.js.map