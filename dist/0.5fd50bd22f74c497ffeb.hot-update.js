webpackHotUpdate(0,{

/***/ 217:
/*!***************************!*\
  !*** ./client/Routes.jsx ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Routes;
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ./store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 312);
	
	var _BoardContainer = __webpack_require__(/*! ./containers/BoardContainer */ 365);
	
	var _BoardContainer2 = _interopRequireDefault(_BoardContainer);
	
	var _CreateBoardContainer = __webpack_require__(/*! ./containers/CreateBoardContainer */ 558);
	
	var _CreateBoardContainer2 = _interopRequireDefault(_CreateBoardContainer);
	
	var _CreateNoteContainer = __webpack_require__(/*! ./containers/CreateNoteContainer */ 572);
	
	var _CreateNoteContainer2 = _interopRequireDefault(_CreateNoteContainer);
	
	var _ViewNoteContainer = __webpack_require__(/*! ./containers/ViewNoteContainer */ 736);
	
	var _ViewNoteContainer2 = _interopRequireDefault(_ViewNoteContainer);
	
	var _SignupContainer = __webpack_require__(/*! ./containers/SignupContainer */ 738);
	
	var _SignupContainer2 = _interopRequireDefault(_SignupContainer);
	
	var _ParticipantsContainer = __webpack_require__(/*! ./containers/ParticipantsContainer */ 742);
	
	var _ParticipantsContainer2 = _interopRequireDefault(_ParticipantsContainer);
	
	var _board = __webpack_require__(/*! ./actions/board */ 554);
	
	var _note = __webpack_require__(/*! ./actions/note */ 511);
	
	var _user = __webpack_require__(/*! ./actions/user */ 739);
	
	var _Index = __webpack_require__(/*! ./components/Index */ 743);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//onEnters
	
	
	//action-creators
	
	
	//containers
	function indexEnter() {
	  _store2.default.dispatch((0, _user.checkLoginStatus)());
	}
	
	//components
	
	// import {getNotes} from './actions/noteboard';
	
	
	function onBoardEnter(nextRouterState) {
	  var boardId = nextRouterState.params.boardId;
	  _store2.default.dispatch((0, _board.getBoard)(boardId));
	  _store2.default.dispatch((0, _note.getAllNotes)({ boardId: boardId }));
	}
	
	function onMyBoardEnter(nextRouterState) {
	  _store2.default.dispatch((0, _board.getAllBoards)());
	}
	
	function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Index2.default, onEnter: indexEnter },
	      _react2.default.createElement(_reactRouter.Route, { path: '/boards/:boardId', component: _BoardContainer2.default, onEnter: onBoardEnter }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _SignupContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/myboards', component: _CreateBoardContainer2.default, onEnter: onMyBoardEnter }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/note' },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _CreateNoteContainer2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: ':id', component: _ViewNoteContainer2.default })
	      ),
	      _react2.default.createElement(_reactRouter.Route, { path: '/participants/:room', component: _ParticipantsContainer2.default })
	    )
	  );
	}

/***/ },

/***/ 743:
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
	
	var _reactDndHtml5Backend = __webpack_require__(/*! react-dnd-html5-backend */ 483);
	
	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 367);
	
	var _SidebarContainer = __webpack_require__(/*! ../containers/SidebarContainer */ 744);
	
	var _SidebarContainer2 = _interopRequireDefault(_SidebarContainer);
	
	var _NavbarContainer = __webpack_require__(/*! ../containers/NavbarContainer */ 747);
	
	var _NavbarContainer2 = _interopRequireDefault(_NavbarContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Index = function Index(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_NavbarContainer2.default, null),
	    _react2.default.createElement(
	      'div',
	      null,
	      props.children && _react2.default.cloneElement(props.children, props)
	    )
	  );
	};
	
	exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(Index);

/***/ },

/***/ 744:
/*!***********************************************!*\
  !*** ./client/containers/SidebarContainer.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _Sidebar = __webpack_require__(/*! ../components/Sidebar */ 745);
	
	var _Sidebar2 = _interopRequireDefault(_Sidebar);
	
	var _navbar = __webpack_require__(/*! ../actions/navbar */ 746);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    sidebarToggle: state.nav.sidebarToggle,
	    boardTemplateToggle: state.nav.boardTemplateToggle
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    toggleTemplate: function toggleTemplate(field) {
	      return dispatch((0, _navbar.toggleClick)(field));
	    }
	
	  };
	};
	
	var SidebarContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Sidebar2.default);
	
	exports.default = SidebarContainer;

/***/ },

/***/ 745:
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 312);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 746:
/*!**********************************!*\
  !*** ./client/actions/navbar.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleClick = toggleClick;
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function toggleClick(field) {
	  return {
	    type: _constants.TOGGLE_CLICK,
	    field: field
	  };
	}

/***/ },

/***/ 747:
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
	
	var _Navbar = __webpack_require__(/*! ../components/Navbar */ 748);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _user = __webpack_require__(/*! ../actions/user */ 739);
	
	var _navbar = __webpack_require__(/*! ../actions/navbar */ 746);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    user: state.userReducer.loggedInUser,
	    sidebarToggle: state.nav.sidebarToggle
	
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    logoutUser: function logoutUser() {
	      return dispatch((0, _user.logoutUser)());
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
	      toggleClass: 'navClass navbar-collapse collapse'
	    };
	    _this.expandNav = _this.expandNav.bind(_this);
	    return _this;
	  }
	
	  _createClass(NB, [{
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
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Navbar2.default, {
	        aria: this.state.aria,
	        expandNav: this.expandNav,
	        navClass: this.state.toggleClass,
	        user: this.props.user,
	        logoutUser: this.props.logoutUser,
	        toggleSidebar: this.props.toggleSidebar
	      });
	    }
	  }]);
	
	  return NB;
	}(_react.Component);
	
	var NavbarContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NB);
	
	exports.default = NavbarContainer;

/***/ },

/***/ 748:
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 312);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Navbar = function Navbar(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'nav',
	      { className: 'navbar navbar navbar-static-top', role: 'navigation' },
	      _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'div',
	          { className: 'navbar-header', id: 'navHeader' },
	          _react2.default.createElement(
	            'button',
	            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar',
	              'aria-expanded': props.aria, 'aria-controls': 'navbar', onClick: function onClick() {
	                props.expandNav();
	              } },
	            _react2.default.createElement(
	              'span',
	              { className: 'sr-only' },
	              'Toggle navigation'
	            ),
	            _react2.default.createElement('span', { className: 'icon-bar' }),
	            _react2.default.createElement('span', { className: 'icon-bar' }),
	            _react2.default.createElement('span', { className: 'icon-bar' })
	          ),
	          _react2.default.createElement(
	            'a',
	            { className: 'navbar-brand', style: { float: 'right' }, href: '/' },
	            'Notion'
	          ),
	          _react2.default.createElement('button', { className: 'ion-gear-b navbarGearIcon', style: { fontSize: '2em', marginTop: '10px', paddingLeft: '10px' }, type: 'button', onClick: function onClick() {
	              props.toggleSidebar('sidebarToggle');
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'navbar', className: props.navClass, 'aria-expanded': props.aria },
	          _react2.default.createElement(
	            'ul',
	            { className: 'nav navbar-nav', onClick: function onClick() {
	                props.expandNav();
	              } },
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/' },
	                'Home'
	              )
	            ),
	            !Object.keys(props.user).length ? _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/signup' },
	                'Login/SignUp'
	              )
	            ) : _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { onClick: function onClick() {
	                    props.logoutUser();
	                  } },
	                'Logout'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/myboards' },
	                'My Boards'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/participants/111' },
	                ' Participants Test '
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
//# sourceMappingURL=0.5fd50bd22f74c497ffeb.hot-update.js.map