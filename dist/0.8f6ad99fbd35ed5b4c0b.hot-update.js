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
	        { id: 'page-content-wrapper' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-lg-12' },
	              _react2.default.createElement(
	                'h1',
	                null,
	                'Simple Sidebar'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                'This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                'Make sure to keep all page content within the ',
	                _react2.default.createElement(
	                  'code',
	                  null,
	                  '#page-content-wrapper'
	                ),
	                '.'
	              ),
	              _react2.default.createElement(
	                'a',
	                { href: '#menu-toggle', className: 'btn btn-default toggled', id: 'menu-toggle' },
	                'Toggle Menu'
	              )
	            )
	          )
	        )
	      ),
	      props.children && _react2.default.cloneElement(props.children, props)
	    )
	  );
	};
	
	exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(Index);

/***/ }

})
//# sourceMappingURL=0.8f6ad99fbd35ed5b4c0b.hot-update.js.map