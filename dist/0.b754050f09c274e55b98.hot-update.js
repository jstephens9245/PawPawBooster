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
	        { to: 'http://www.signupgenius.com/go/4090c4da4aa2faafc1-football1', target: '_blank' },
	        _react2.default.createElement(
	          'a',
	          { className: 'link-style' },
	          'SignUp'
	        )
	      ),
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { href: '/about' },
	        _react2.default.createElement(
	          'a',
	          { className: 'link-style' },
	          'Events'
	        )
	      ),
	      _react2.default.createElement(
	        _reactRouter.Link,
	        null,
	        _react2.default.createElement(
	          'a',
	          { target: '_blank', className: 'link-style' },
	          'Bi-laws'
	        )
	      ),
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { href: '/' },
	        _react2.default.createElement(
	          'a',
	          { className: 'link-style' },
	          'Home'
	        )
	      )
	    )
	  );
	};
	exports.default = Navbar;

/***/ }

})
//# sourceMappingURL=0.b754050f09c274e55b98.hot-update.js.map