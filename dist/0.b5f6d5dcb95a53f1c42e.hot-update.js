webpackHotUpdate(0,{

/***/ 292:
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 238);
	
	var _reactTypist = __webpack_require__(/*! react-typist */ 293);
	
	var _reactTypist2 = _interopRequireDefault(_reactTypist);
	
	var _Sponsers = __webpack_require__(/*! ../components/Sponsers */ 476);
	
	var _Sponsers2 = _interopRequireDefault(_Sponsers);
	
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
	          _react2.default.createElement('img', { className: 'homepage-main-image', src: '/assets/pawpawphoto.jpg' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'main-slogan' },
	            _react2.default.createElement(
	              _reactTypist2.default,
	              { avgTypingDelay: 130 },
	              'WORKING. BUILDING. TOGETHER.'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'main-mini-desc' },
	            ' Your collaboration makes us Great'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'main-signup-button-container' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'main-signup-button' },
	                'GET STARTED'
	              )
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
	              { className: 'left-desc-content' },
	              _react2.default.createElement(
	                'div',
	                { className: 'left-desc-title' },
	                'Paw Paw Boosters'
	              ),
	              'Complementing the Athletic Department by supporting, encouraging and promoting athletic programs at Paw Paw Public Schools while initiating and supporting worthwhile fundraising projects for the sole purpose of enhancing the facilities, equipment and programs sponsored by the Athletic Department.'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'volunteer' },
	              _react2.default.createElement(
	                'p',
	                { className: 'volunteer-title' },
	                'Volunteer'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                '2017-2018 - If you might be  interested in volunteering to help on one of our committees , please contact us at PawPawBoosters@gmail.com or Sign Up Now!'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'right-desc' },
	            _react2.default.createElement('img', { className: 'right-desc-img', src: '/assets/redskinlogo.png' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'sponsors-list' },
	          _react2.default.createElement(
	            'h2',
	            { className: 'sponsors-title' },
	            'Corporate Sponsors'
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'sponsors-title-text' },
	            ' - The people that have made this possible'
	          ),
	          _react2.default.createElement(_Sponsers2.default, null),
	          _react2.default.createElement(
	            'div',
	            { className: 'team-desc' },
	            'Made by Joe Stephens'
	          )
	        )
	      );
	    }
	  }]);
	
	  return HomePageContainer;
	}(_react.Component);
	
	exports.default = HomePageContainer;

/***/ }

})
//# sourceMappingURL=0.b5f6d5dcb95a53f1c42e.hot-update.js.map