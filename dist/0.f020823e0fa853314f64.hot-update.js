webpackHotUpdate(0,{

/***/ 549:
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
	
	var _reactDndHtml5Backend = __webpack_require__(/*! react-dnd-html5-backend */ 550);
	
	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 289);
	
	var _SidebarContainer = __webpack_require__(/*! ../containers/SidebarContainer */ 578);
	
	var _SidebarContainer2 = _interopRequireDefault(_SidebarContainer);
	
	var _NavbarContainer = __webpack_require__(/*! ../containers/NavbarContainer */ 576);
	
	var _NavbarContainer2 = _interopRequireDefault(_NavbarContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Index = function Index(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_NavbarContainer2.default, null),
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'col-xs-2 col-md-2 col-lg-2 sidebar', style: { marginTop: 50 } },
	        _react2.default.createElement(_SidebarContainer2.default, null)
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'col-xs-10 col-md-10 col-lg-10 col-xs-offset-1', style: { marginTop: 50 } },
	        props.children && _react2.default.cloneElement(props.children, props)
	      )
	    )
	  );
	};
	
	exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(Index);

/***/ }

})
//# sourceMappingURL=0.f020823e0fa853314f64.hot-update.js.map