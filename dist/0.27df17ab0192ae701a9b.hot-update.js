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
	      'Welcome For nowww...'
	    )
	  );
	};
	
	exports.default = Index;

/***/ }

})
//# sourceMappingURL=0.27df17ab0192ae701a9b.hot-update.js.map