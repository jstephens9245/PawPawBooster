webpackHotUpdate(0,{

/***/ 413:
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 234);
	
	var _Navbar = __webpack_require__(/*! ../components/Navbar */ 414);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _user = __webpack_require__(/*! ../actions/user */ 415);
	
	var _navbar = __webpack_require__(/*! ../actions/navbar */ 442);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 443);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    user: state.userReducer.loggedInUser,
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
	    },
	    getUnreadNotes: function (_getUnreadNotes) {
	      function getUnreadNotes(_x) {
	        return _getUnreadNotes.apply(this, arguments);
	      }
	
	      getUnreadNotes.toString = function () {
	        return _getUnreadNotes.toString();
	      };
	
	      return getUnreadNotes;
	    }(function (userId) {
	      return dispatch(getUnreadNotes(userId));
	    })
	  };
	};
	
	var NB = function (_Component) {
	  _inherits(NB, _Component);
	
	  function NB(props) {
	    _classCallCheck(this, NB);
	
	    var _this = _possibleConstructorReturn(this, (NB.__proto__ || Object.getPrototypeOf(NB)).call(this, props));
	
	    _this.state = {
	      aria: false,
	      toggleClass: 'navClass navbar-collapse collapse'
	    };
	    _this.expandNav = _this.expandNav.bind(_this);
	    _this.newPage = _this.newPage.bind(_this);
	    return _this;
	  }
	
	  _createClass(NB, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(_ref) {
	      var user = _ref.user;
	
	      if (!(0, _isEmpty2.default)(this.props.user)) {
	        this.props.getUnreadNotes(this.props.user.id);
	      }
	    }
	  }, {
	    key: 'expandNav',
	    value: function expandNav() {
	      var newToggleClassValue = '';
	
	      if (this.state.toggleClass === 'navClass navbar-collapse collapse') {
	        newToggleClassValue = 'navClass navbar-collapse collapse in navToggle';
	      } else {
	        newToggleClassValue = 'navClass navbar-collapse collapse';
	      }
	      this.setState({
	        aria: !this.state.aria,
	        toggleClass: newToggleClassValue
	      });
	    }
	  }, {
	    key: 'newPage',
	    value: function newPage() {
	      this.setState({ toggleClass: 'navClass navbar-collapse collapse' });
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
	        location: this.props.location,
	        newPage: this.newPage,
	        numOfUnread: this.props.numOfUnread
	      });
	    }
	  }]);
	
	  return NB;
	}(_react.Component);
	
	var NavbarContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NB);
	
	exports.default = NavbarContainer;

/***/ }

})
//# sourceMappingURL=0.898d201f5cd91238092b.hot-update.js.map