webpackHotUpdate(0,{

/***/ 291:
/*!************************************************!*\
  !*** ./client/containers/HomepageContainer.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 237);
	
	var _reactTypist = __webpack_require__(/*! react-typist */ 292);
	
	var _reactTypist2 = _interopRequireDefault(_reactTypist);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HomePageContainer = function (_Component) {
	  _inherits(HomePageContainer, _Component);
	
	  function HomePageContainer(props) {
	    _classCallCheck(this, HomePageContainer);
	
	    var _this = _possibleConstructorReturn(this, (HomePageContainer.__proto__ || Object.getPrototypeOf(HomePageContainer)).call(this, props));
	
	    _this.state = {};
	    return _this;
	  }
	
	  _createClass(HomePageContainer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'homepage-container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'homepage-main-image-container' },
	          _react2.default.createElement('img', { className: 'homepage-main-image', src: '/assets/brainstorm.jpg' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'main-slogan' },
	            _react2.default.createElement(
	              _reactTypist2.default,
	              { avgTypingDelay: 130 },
	              'THINK BETTER. FASTER. TOGETHER.'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'main-mini-desc' },
	            ' Your collaboration & brainstorming platform'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'main-signup-button-container' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/signup' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'main-signup-button' },
	                'GET STARTED'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'postit-view' },
	            _react2.default.createElement(
	              'div',
	              { className: 'postit yellow' },
	              _react2.default.createElement('img', { className: 'bulb-img', src: '/assets/bulb.png' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'postit lightyellow' },
	              'N'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'postit brightgreen' },
	              'O'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'postit pink' },
	              'T'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'postit yellow' },
	              'I'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'postit blue' },
	              'O'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'postit green' },
	              'N'
	            )
	          )
	        ),
	        _react2.default.createElement('div', { className: 'border-line' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'desc-container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'left-desc' },
	            _react2.default.createElement(
	              'div',
	              { className: 'left-desc-title' },
	              'Real-time collaboration.'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'left-desc-content' },
	              'Unite with your team and brainstorm ideas in your own dynamic board. Create context around your projects with Boards\u2014flexible spaces to store, share, and talk about your own ideas.'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'right-desc' },
	            _react2.default.createElement('img', { className: 'right-desc-img', src: '../assets/redskin_indian_logo.jpg' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'team-desc' },
	          'Made by Alvin Yuen, Spencer Goodwine, Hal Carleton & Joe Stephens'
	        )
	      );
	    }
	  }]);
	
	  return HomePageContainer;
	}(_react.Component);
	
	exports.default = HomePageContainer;

/***/ }

})
//# sourceMappingURL=0.41349c618b1315b531a4.hot-update.js.map