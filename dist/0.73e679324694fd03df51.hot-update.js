webpackHotUpdate(0,{

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
						{ 'class': 'dropdown' },
						_react2.default.createElement(
							'button',
							{ 'class': 'btn btn-secondary dropdown-toggle', type: 'button', id: 'dropdownMenuButton', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
							_react2.default.createElement(
								'div',
								{ className: 'navbar-header' },
								_react2.default.createElement(
									'button',
									{ type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1' },
									_react2.default.createElement(
										'span',
										{ className: 'sr-only' },
										'Toggle navigation'
									),
									_react2.default.createElement('span', { className: 'icon-bar' }),
									_react2.default.createElement('span', { className: 'icon-bar' }),
									_react2.default.createElement('span', { className: 'icon-bar' })
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ 'class': 'dropdown-menu', 'aria-labelledby': 'dropdownMenuButton' },
							_react2.default.createElement(
								'a',
								{ 'class': 'dropdown-item', href: '#' },
								'Action'
							),
							_react2.default.createElement(
								'a',
								{ 'class': 'dropdown-item', href: '#' },
								'Another action'
							),
							_react2.default.createElement(
								'a',
								{ 'class': 'dropdown-item', href: '#' },
								'Something else here'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
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
//# sourceMappingURL=0.73e679324694fd03df51.hot-update.js.map