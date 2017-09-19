webpackHotUpdate(0,{

/***/ 579:
/*!**************************************!*\
  !*** ./client/components/Sidebar.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (props) {
	
	    return _react2.default.createElement(
	        'div',
	        { id: 'wrapper', className: '' + (props.sidebarToggle ? 'toggled' : '') },
	        _react2.default.createElement(
	            'div',
	            { id: 'sidebar-wrapper' },
	            _react2.default.createElement(
	                'ul',
	                { className: 'sidebar-nav' },
	                _react2.default.createElement(
	                    'li',
	                    { className: 'sidebar-brand' },
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#' },
	                        'Start Bootstrap'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#' },
	                        'Dashboard'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#' },
	                        'Shortcuts'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#' },
	                        'Overview'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#' },
	                        'Events'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#' },
	                        'About'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#' },
	                        'Services'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#' },
	                        'Contact'
	                    )
	                )
	            )
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
	                            'button',
	                            { className: 'btn btn-default', id: 'menu-toggle', type: 'button', onClick: function onClick() {
	                                    props.toggleClick('sidebarToggle');
	                                } },
	                            'Toggle Menu'
	                        )
	                    )
	                )
	            )
	        )
	    );
	};
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 232);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }

})
//# sourceMappingURL=0.2a4e77e0a73876e87a1b.hot-update.js.map