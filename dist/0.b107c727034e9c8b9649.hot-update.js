webpackHotUpdate(0,{

/***/ 443:
/*!*************************************!*\
  !*** ./client/components/Navbar.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 237);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Navbar = function Navbar(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'nav-header' },
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { href: '/' },
	        _react2.default.createElement(
	          'a',
	          { className: 'logo' },
	          'Paw Paw Boosters'
	        )
	      ),
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/signup' },
	        _react2.default.createElement(
	          'a',
	          { className: 'link-style' },
	          'SignUp'
	        )
	      ),
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { href: '/events' },
	        _react2.default.createElement(
	          'a',
	          { className: 'link-style' },
	          'Events'
	        )
	      ),
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/assets/pawpaw_bilaws.pdf', target: '_blank' },
	        _react2.default.createElement(
	          'a',
	          { className: 'link-style' },
	          'Bi-laws'
	        )
	      ),
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { href: '/aboutus' },
	        _react2.default.createElement(
	          'a',
	          { className: 'link-style' },
	          'About Us'
	        )
	      )
	    )
	  );
	};
	exports.default = Navbar;

/***/ }

})
//# sourceMappingURL=0.b107c727034e9c8b9649.hot-update.js.map