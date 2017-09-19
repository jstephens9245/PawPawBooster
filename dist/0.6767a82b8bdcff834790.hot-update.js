webpackHotUpdate(0,{

/***/ 317:
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
	
	var _NavbarContainer = __webpack_require__(/*! ../containers/NavbarContainer */ 318);
	
	var _NavbarContainer2 = _interopRequireDefault(_NavbarContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Index = function Index(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_NavbarContainer2.default, null),
	    _react2.default.createElement(
	      'div',
	      { className: 'col-xs-10' },
	      props.children && _react2.default.cloneElement(props.children, props),
	      'Welcome For nowww...',
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'a',
	          { 'class': 'btn btn-primary', 'data-toggle': 'collapse', href: '#collapseExample', 'aria-expanded': 'false', 'aria-controls': 'collapseExample' },
	          'Link with href'
	        ),
	        _react2.default.createElement(
	          'button',
	          { 'class': 'btn btn-primary', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapseExample', 'aria-expanded': 'false', 'aria-controls': 'collapseExample' },
	          'Button with data-target'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { 'class': 'collapse', id: 'collapseExample' },
	        _react2.default.createElement(
	          'div',
	          { 'class': 'card card-block' },
	          'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
	        )
	      )
	    )
	  );
	};
	
	exports.default = Index;

/***/ }

})
//# sourceMappingURL=0.6767a82b8bdcff834790.hot-update.js.map