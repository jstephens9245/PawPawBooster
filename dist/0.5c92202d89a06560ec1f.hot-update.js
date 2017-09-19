webpackHotUpdate(0,{

/***/ 553:
/*!************************************!*\
  !*** ./client/components/Index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDndHtml5Backend = __webpack_require__(/*! react-dnd-html5-backend */ 554);
	
	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 370);
	
	var _SidebarContainer = __webpack_require__(/*! ../containers/SidebarContainer */ 580);
	
	var _SidebarContainer2 = _interopRequireDefault(_SidebarContainer);
	
	var _NavbarContainer = __webpack_require__(/*! ../containers/NavbarContainer */ 583);
	
	var _NavbarContainer2 = _interopRequireDefault(_NavbarContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Index = function Index(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_NavbarContainer2.default, null),
	    _react2.default.createElement(_SidebarContainer2.default, null),
	    props.children && _react2.default.cloneElement(props.children, props)
	  );
	};
	
	exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(Index);

/***/ }

})
//# sourceMappingURL=0.5c92202d89a06560ec1f.hot-update.js.map