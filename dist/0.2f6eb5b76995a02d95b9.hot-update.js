webpackHotUpdate(0,{

/***/ 279:
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
	
	var _NavbarContainer = __webpack_require__(/*! ../containers/NavbarContainer */ 280);
	
	var _NavbarContainer2 = _interopRequireDefault(_NavbarContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Index = function Index(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_NavbarContainer2.default, null),
	    _react2.default.createElement(
	      'div',
	      { className: 'col-xs-10', style: { marginTop: 50, marginBottom: 70 } },
	      props.children && _react2.default.cloneElement(props.children, props)
	    )
	  );
	};
	
	exports.default = Index;

/***/ },

/***/ 280:
/*!**********************************************!*\
  !*** ./client/containers/NavbarContainer.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _Navbar = __webpack_require__(/*! ../components/Navbar */ 281);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    aria: false
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {};
	};
	
	var NavbarContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Navbar2.default);
	
	exports.default = NavbarContainer;

/***/ },

/***/ 281:
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 226);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Navbar = function Navbar(props) {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'nav',
				{ className: 'navbar navbar-inverse navbar-static-top', role: 'navigation' },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'navbar-header' },
						_react2.default.createElement(
							'button',
							{ type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar',
								'aria-expanded': 'true', 'aria-controls': 'navbar', onClick: function onClick() {} },
							_react2.default.createElement(
								'span',
								{ className: 'sr-only' },
								'Toggle navigation'
							),
							_react2.default.createElement('span', { className: 'icon-bar' }),
							_react2.default.createElement('span', { className: 'icon-bar' }),
							_react2.default.createElement('span', { className: 'icon-bar' })
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'navbar', className: 'navbar-collapse collapse in', 'aria-expanded': 'true' },
						_react2.default.createElement(
							'ul',
							{ className: 'nav navbar-nav' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'a',
									{ href: '/' },
									'Home'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'a',
									{ href: '/' },
									'About'
								)
							)
						)
					)
				)
			)
		);
	};
	exports.default = Navbar;

/***/ }

})
//# sourceMappingURL=0.2f6eb5b76995a02d95b9.hot-update.js.map