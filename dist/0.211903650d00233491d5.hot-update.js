webpackHotUpdate(0,{

/***/ 280:
/*!**********************************************!*\
  !*** ./client/containers/NavbarContainer.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _Navbar = __webpack_require__(/*! ../components/Navbar */ 281);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
		return {
			user: state.user
		};
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
		return {};
	};
	
	var NB = function (_Component) {
		_inherits(NB, _Component);
	
		function NB(props) {
			_classCallCheck(this, NB);
	
			var _this = _possibleConstructorReturn(this, (NB.__proto__ || Object.getPrototypeOf(NB)).call(this, props));
	
			_this.state = {
				aria: false,
				toggleClass: 'navbar-collapse collapse'
			};
			_this.expandNav = _this.expandNav.bind(_this);
			return _this;
		}
	
		_createClass(NB, [{
			key: 'expandNav',
			value: function expandNav() {
				var newToggleClassValue = void 0;
				if (this.state.toggleClass === 'navbar-collapse collapse') {
					newToggleClassValue = 'navbar-collapse collapse in';
				} else {
					newToggleClassValue = 'navbar-collapse collapse';
				}
				this.setState({
					aria: !this.state.aria,
					toggleClass: newToggleClassValue
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(_Navbar2.default, {
					aria: this.state.aria,
					expandNav: this.expandNav,
					navClass: this.state.toggleClass
				});
			}
		}]);
	
		return NB;
	}(_react.Component);
	
	var NavbarContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NB);
	
	exports.default = NavbarContainer;

/***/ }

})
//# sourceMappingURL=0.211903650d00233491d5.hot-update.js.map