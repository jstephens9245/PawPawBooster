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
	    console.log(props.boardTemplateToggle);
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
	                        'div',
	                        { style: { color: '#999999' } },
	                        _react2.default.createElement(
	                            'h4',
	                            { className: 'menu-item', onClick: function onClick() {
	                                    props.toggleTemplate('boardTemplateToggle');
	                                } },
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                'Template'
	                            )
	                        ),
	                        props.boardTemplateToggle ? _react2.default.createElement(
	                            'label',
	                            { style: { paddingLeft: '5%' } },
	                            'Toggling'
	                        ) : null
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
//# sourceMappingURL=0.15b97b8ee6a701f9a53a.hot-update.js.map