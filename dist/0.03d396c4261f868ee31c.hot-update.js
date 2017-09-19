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
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'h4',
	                            { className: 'menu-item', onClick: function onClick() {
	                                    props.click('colorToggle');
	                                } },
	                            _react2.default.createElement(
	                                'label',
	                                null,
	                                'Template'
	                            )
	                        ),
	                        props.colorToggle ? _react2.default.createElement(
	                            'div',
	                            null,
	                            'Toggling'
	                        )
	                        //  colorArr.map((color, i) => {
	                        //  return <div key={i}>
	                        //    <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
	                        //      onChange={() => {props.addToFilter('color', color)}} /> {color}</p>
	                        //    </div>
	                        //  })
	                        : null
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
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-12' },
	                        _react2.default.createElement('button', { className: 'ion-gear-b', style: { fontSize: '2em' }, type: 'button', onClick: function onClick() {
	                                props.toggleClick('sidebarToggle');
	                            } })
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
//# sourceMappingURL=0.03d396c4261f868ee31c.hot-update.js.map