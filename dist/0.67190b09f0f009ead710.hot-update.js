webpackHotUpdate(0,{

/***/ 782:
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _Navbar = __webpack_require__(/*! ../components/Navbar */ 783);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _user = __webpack_require__(/*! ../actions/user */ 554);
	
	var _navbar = __webpack_require__(/*! ../actions/navbar */ 781);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    user: state.userReducer.loggedInUser,
	    sidebarToggle: state.nav.sidebarToggle,
	    board: state.board.selectedBoard,
	    location: ownProps.location.pathname
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    logoutUser: function logoutUser() {
	      dispatch((0, _user.logoutUser)()).then(function () {
	        return _reactRouter.browserHistory.push('/signup');
	      });
	    },
	    toggleSidebar: function toggleSidebar(field) {
	      return dispatch((0, _navbar.toggleClick)(field));
	    }
	  };
	};
	
	var NB = function (_Component) {
	  _inherits(NB, _Component);
	
	  function NB(props) {
	    _classCallCheck(this, NB);
	
	    var _this = _possibleConstructorReturn(this, (NB.__proto__ || Object.getPrototypeOf(NB)).call(this, props));
	
	    _this.state = {
	      aria: false,
	      toggleClass: 'navClass navbar-collapse collapse',
	      toggleTitle: 'navbar-brand navTitle'
	    };
	    _this.expandNav = _this.expandNav.bind(_this);
	    return _this;
	  }
	
	  _createClass(NB, [{
	    key: 'expandNav',
	    value: function expandNav() {
	      var newToggleClassValue = '';
	      var newToggleTitleValue = '';
	
	      if (this.state.toggleClass === 'navClass navbar-collapse collapse') {
	        newToggleClassValue = 'navClass navbar-collapse collapse in navToggle';
	        newToggleTitleValue = 'navbar-brand navTitle hideTitle';
	      } else {
	        newToggleTitleValue = 'navbar-brand navTitle';
	        newToggleClassValue = 'navClass navbar-collapse collapse';
	      }
	      this.setState({
	        aria: !this.state.aria,
	        toggleClass: newToggleClassValue,
	        toggleTitle: newToggleTitleValue
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Navbar2.default, {
	        aria: this.state.aria,
	        expandNav: this.expandNav,
	        navClass: this.state.toggleClass,
	        titleClass: this.state.toggleTitle,
	        user: this.props.user,
	        logoutUser: this.props.logoutUser,
	        toggleSidebar: this.props.toggleSidebar,
	        board: this.props.board,
	        location: this.props.location
	      });
	    }
	  }]);
	
	  return NB;
	}(_react.Component);
	
	var NavbarContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NB);
	
	exports.default = NavbarContainer;

/***/ }

})
//# sourceMappingURL=0.67190b09f0f009ead710.hot-update.js.map