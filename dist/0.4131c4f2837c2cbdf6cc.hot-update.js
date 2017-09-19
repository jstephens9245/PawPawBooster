webpackHotUpdate(0,{

/***/ 9:
/*!***********************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./client/styles/main.scss ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Comfortaa);", ""]);
	
	// module
	exports.push([module.id, "/** Settings\n */\n/** Tools\n * Mixins / Functions\n */\n/** Generic\n * Resets\n */\nbody {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  position: relative;\n  box-sizing: inherit; }\n\n/** Base\n * Element styles (no classes)\n */\n/** Objects\n * Reusable layout patterns\n * class prefix: `o-`\n */\n.o-aspect-ratio, .c-color-picker {\n  display: block; }\n\n.o-aspect-ratio__inner, .c-color-picker__inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.o-aspect-ratio--sq, .c-color-picker {\n  padding: 100% 0 0 0; }\n\n.o-aspect-ratio--2-1 {\n  padding: 50% 0 0 0; }\n\n.o-aspect-ratio--1-2 {\n  padding: 200% 0 0 0; }\n\n/** Components\n * Patterns with a visual design\n * class prefix: `c-`\n */\n.navbar {\n  border-bottom: 1px solid black;\n  margin-bottom: 0; }\n\n.navbar a {\n  color: black; }\n\n.icon-bar {\n  background-color: black; }\n\n.navbar-toggle {\n  border-color: black; }\n\n.navClass {\n  top: -100%;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n.navToggle {\n  top: 0; }\n\n@media screen and (min-device-width: 768px) {\n  .navbarGearIcon {\n    display: none; } }\n\n.addBoard {\n  text-decoration: none;\n  font-size: 1.5em;\n  opacity: 0.5;\n  color: black;\n  text-align: center;\n  background-color: grey;\n  padding-top: 4%;\n  padding-bottom: 4%; }\n  .addBoard:hover, .addBoard:focus {\n    text-decoration: none;\n    color: black; }\n\n.screen {\n  height: 80vh;\n  width: 100%;\n  border: thin solid black;\n  background-color: #ffffff;\n  padding-bottom: 10%;\n  padding-top: 2%;\n  overflow: auto; }\n\n.note {\n  width: 100%;\n  height: 100%; }\n\n.grid {\n  background-color: #EF2D29; }\n\n#table {\n  background-color: #CEE3F8;\n  height: 100vh;\n  width: 100vw; }\n\n#table {\n  background-color: #CEE3F8;\n  height: 100vh;\n  width: 100vw; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.signup-form-container {\n  width: 90vw;\n  height: 80vh;\n  min-height: 30em;\n  background-color: #fff;\n  margin: 0 auto;\n  margin-top: 2em;\n  border: 1px solid black; }\n\n.signup-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  margin-top: 1em; }\n\n.login-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  margin-top: 1em; }\n\n.signup-input-field {\n  border: 1px solid darkgrey;\n  width: 90%;\n  text-align: left;\n  line-height: 2em;\n  height: 2em;\n  display: block;\n  margin: 0 auto;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field {\n  border: 1px solid darkgrey;\n  width: 100%;\n  text-align: left;\n  line-height: 2em;\n  display: block;\n  height: 2em;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.signup-disclaimer {\n  font-size: 0.65em;\n  margin-left: 3.7em;\n  margin-right: 3.7em; }\n\n.login-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n.signup-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n.login-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #111;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n.signup-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #111;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n@media screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 2), screen and (min-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {\n  .signup-form-container {\n    width: 50vw;\n    height: 60vh;\n    background-color: #fff;\n    margin: 0 auto;\n    margin-top: 2em;\n    border: 1px solid black; } }\n\n.c-note {\n  display: block;\n  background: #edd00d;\n  padding-top: 100%; }\n\n.c-note--focused {\n  box-shadow: 0.1em 0.1em 1em 0 #8c7b08; }\n\n.c-note__inner {\n  display: block;\n  position: absolute;\n  width: calc(100% - 2em);\n  top: 1em;\n  right: 1em;\n  bottom: 1em;\n  left: 1em; }\n\n.c-note__content {\n  display: block;\n  font-size: inherit;\n  word-wrap: break-word;\n  font-family: \"Comfortaa\";\n  font-weight: 600; }\n\n.c-note__input {\n  position: absolute;\n  left: -200vw;\n  top: -200vh; }\n\n/*!\n * Start Bootstrap - Simple Sidebar HTML Template (http://startbootstrap.com)\n * Code licensed under the Apache License v2.0.\n * For details, see http://www.apache.org/licenses/LICENSE-2.0.\n */\n/* Toggle Styles */\n#wrapper {\n  padding-left: 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled {\n  padding-left: 250px; }\n\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #000;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px; }\n\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px; }\n\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px; }\n\n/* Sidebar Styles */\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px; }\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999; }\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2); }\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none; }\n\n.sidebar-nav > .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px; }\n\n.sidebar-nav > .sidebar-brand a {\n  color: #999999; }\n\n.sidebar-nav > .sidebar-brand a:hover {\n  color: #fff;\n  background: none; }\n\n@media (min-width: 768px) {\n  #wrapper {\n    padding-left: 250px; }\n  #wrapper.toggled {\n    padding-left: 0; }\n  #sidebar-wrapper {\n    width: 250px; }\n  #wrapper.toggled #sidebar-wrapper {\n    width: 0; }\n  #page-content-wrapper {\n    padding: 20px;\n    position: relative; }\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0; } }\n\n.ion-gear-b {\n  border: none;\n  background: white;\n  -webkit-appearance: none; }\n\n.c-color-picker__wrapper--modal {\n  width: 80%;\n  margin: 0 auto; }\n  .c-color-picker__wrapper--modal .c-color-picker {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\n.participants-container {\n  display: none; }\n\n.participant-number-container {\n  text-align: center;\n  padding: 0.8em 0;\n  border-bottom: 2px solid black;\n  font-size: 1.5rem; }\n\n.participant-number i {\n  margin: 0 0.6em; }\n\n.participant-list-container {\n  margin: 0.6em;\n  height: 100%; }\n\n.participant-list {\n  list-style-type: none;\n  padding: 0;\n  text-align: left; }\n\n.participant-item {\n  margin: 0.4em 0; }\n\n.participant-image {\n  background: #3a3f41;\n  border-radius: 50%;\n  width: 4rem;\n  height: 4rem;\n  display: inline-block;\n  color: #fff;\n  vertical-align: middle;\n  position: relative; }\n\n.participant {\n  margin: 0 1em;\n  text-align: left;\n  display: inline-block;\n  height: 4rem;\n  line-height: 4rem;\n  vertical-align: middle; }\n\n.participant-icon {\n  text-align: center;\n  position: absolute;\n  top: 30%;\n  left: 32%; }\n\n@media screen and (min-device-width: 1281px) {\n  .participants-container {\n    position: fixed;\n    width: 15vw;\n    height: 100vh;\n    float: right;\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32);\n    display: block;\n    top: 0%;\n    z-index: 1000;\n    background: #fff;\n    margin-top: 3.7em;\n    transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -webkit-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -moz-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05); }\n  .participants-container-show {\n    right: 0%; }\n  .participants-container-hide {\n    right: -14.5%; } }\n\n/** Controls\n * Override / Helper / Utility classes\n * class prefix: `ctrl-`\n */\n.ctrl-centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n", ""]);
	
	// exports


/***/ },

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
	
	var _CreateBoardContainer = __webpack_require__(/*! ./containers/CreateBoardContainer */ 564);
	
	var _CreateBoardContainer2 = _interopRequireDefault(_CreateBoardContainer);
	
	var _CreateNoteContainer = __webpack_require__(/*! ./containers/CreateNoteContainer */ 579);
	
	var _CreateNoteContainer2 = _interopRequireDefault(_CreateNoteContainer);
	
	var _ViewNoteContainer = __webpack_require__(/*! ./containers/ViewNoteContainer */ 738);
	
	var _ViewNoteContainer2 = _interopRequireDefault(_ViewNoteContainer);
	
	var _SignupContainer = __webpack_require__(/*! ./containers/SignupContainer */ 740);
	
	var _SignupContainer2 = _interopRequireDefault(_SignupContainer);
	
	var _board = __webpack_require__(/*! ./actions/board */ 578);
	
	var _note = __webpack_require__(/*! ./actions/note */ 511);
	
	var _user = __webpack_require__(/*! ./actions/user */ 538);
	
	var _Index = __webpack_require__(/*! ./components/Index */ 743);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//onEnters
	
	
	//action-creators
	function indexEnter() {
	  _store2.default.dispatch((0, _user.checkLoginStatus)());
	}
	
	//components
	
	// import {getNotes} from './actions/noteboard';
	
	
	//containers
	
	
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
	      _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _SignupContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/myboards', component: _CreateBoardContainer2.default, onEnter: onMyBoardEnter }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/boards/:boardId', component: _BoardContainer2.default, onEnter: onBoardEnter }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/note' },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _CreateNoteContainer2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: ':id', component: _ViewNoteContainer2.default })
	      )
	    )
	  );
	}

/***/ },

/***/ 228:
/*!*****************************************!*\
  !*** ./client/reducers/boardReducer.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var newState = Object.assign({}, state);
	
	  switch (action.type) {
	
	    case _constants.RECEIVE_BOARD:
	      newState.selectedBoard = action.board;
	      break;
	    case _constants.RECEIVE_BOARDS:
	      newState.allBoards = action.boards;
	      newState.permissions = action.permissions;
	      break;
	
	    case _constants.ADD_NEW_BOARD:
	      newState.allBoards = [].concat(_toConsumableArray(newState.allBoards), [action.board]);
	      break;
	    default:
	      return state;
	
	  }
	
	  return newState;
	};
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initialState = { selectedBoard: {}, allBoards: [], selectedBoardNotes: [], permissions: [] };

/***/ },

/***/ 365:
/*!*********************************************!*\
  !*** ./client/containers/BoardContainer.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _socket = __webpack_require__(/*! socket.io-client */ 233);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _CustomDragLayerContainer = __webpack_require__(/*! ./CustomDragLayerContainer */ 366);
	
	var _CustomDragLayerContainer2 = _interopRequireDefault(_CustomDragLayerContainer);
	
	var _ParticipantsContainer = __webpack_require__(/*! ./ParticipantsContainer */ 562);
	
	var _ParticipantsContainer2 = _interopRequireDefault(_ParticipantsContainer);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 537);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BoardContainer = function (_Component) {
	  _inherits(BoardContainer, _Component);
	
	  function BoardContainer() {
	    _classCallCheck(this, BoardContainer);
	
	    return _possibleConstructorReturn(this, (BoardContainer.__proto__ || Object.getPrototypeOf(BoardContainer)).apply(this, arguments));
	  }
	
	  _createClass(BoardContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          dispatch = _props.dispatch,
	          board = _props.board;
	
	
	      var boardId = board.id;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'col-xs-12', key: this.props.board.id },
	        _react2.default.createElement(
	          'h2',
	          { className: 'text-center' },
	          _react2.default.createElement(
	            'span',
	            null,
	            this.props.board.name
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'screen col-xs-12' },
	            _react2.default.createElement(_CustomDragLayerContainer2.default, this.props)
	          )
	        ),
	        _react2.default.createElement(_ParticipantsContainer2.default, null)
	      );
	    }
	  }]);
	
	  return BoardContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return { board: state.board.selectedBoard };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ socketConnect: _socketio.socketConnect, socketDisconnect: _socketio.socketDisconnect, clearSocketListeners: _socketio.clearSocketListeners }, dispatch);
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BoardContainer);

/***/ },

/***/ 497:
/*!*************************************************!*\
  !*** ./client/containers/NoteBoardContainer.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 367);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 312);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _NoteWrapper = __webpack_require__(/*! ../components/NoteWrapper */ 498);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _DraggableNote = __webpack_require__(/*! ../components/DraggableNote */ 509);
	
	var _DraggableNote2 = _interopRequireDefault(_DraggableNote);
	
	var _snapToGrid3 = __webpack_require__(/*! ../components/snapToGrid */ 510);
	
	var _snapToGrid4 = _interopRequireDefault(_snapToGrid3);
	
	var _note = __webpack_require__(/*! ../actions/note */ 511);
	
	var _user = __webpack_require__(/*! ../actions/user */ 538);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 537);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _flow = __webpack_require__(/*! lodash/flow */ 539);
	
	var _flow2 = _interopRequireDefault(_flow);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 283);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _stringHash = __webpack_require__(/*! ../utils/stringHash */ 555);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  height: 1000,
	  width: 1000,
	  position: 'relative'
	};
	
	var queStyles = {
	  height: 100,
	  width: 1000,
	  color: '#FD543D',
	  position: 'relative'
	};
	
	var noteTarget = {
	  drop: function drop(props, monitor, component) {
	    var delta = monitor.getDifferenceFromInitialOffset();
	    var item = monitor.getItem();
	
	    var left = Math.round(item.left + delta.x);
	    var top = Math.round(item.top + delta.y);
	    if (props.snapToGrid) {
	      var _snapToGrid = (0, _snapToGrid4.default)(left, top);
	
	      var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
	
	      left = _snapToGrid2[0];
	      top = _snapToGrid2[1];
	    }
	
	    props.noteMover(item.id, left, top);
	  }
	};
	
	var collect = function collect(connector, monitor) {
	
	  return {
	    connectDropTarget: connector.dropTarget(),
	    isOver: monitor.isOver()
	  };
	};
	
	var NoteBoardContainer = function (_Component) {
	  _inherits(NoteBoardContainer, _Component);
	
	  function NoteBoardContainer(props) {
	    _classCallCheck(this, NoteBoardContainer);
	
	    var _this = _possibleConstructorReturn(this, (NoteBoardContainer.__proto__ || Object.getPrototypeOf(NoteBoardContainer)).call(this, props));
	
	    _this.boardUpdate = _this.boardUpdate.bind(_this);
	    _this.participantMoveNote = _this.participantMoveNote.bind(_this);
	    return _this;
	  }
	
	  _createClass(NoteBoardContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.socketConnect('board');
	
	      this.props.addSocketListener('note', this.boardUpdate);
	      this.props.addSocketListener('moveNote', this.participantMoveNote);
	    }
	  }, {
	    key: 'boardUpdate',
	    value: function boardUpdate(note) {
	      console.log('RECEIVED NOTE', note);
	      console.log('BOARD ID', this.props.board.id);
	      if (note.board_id === this.props.board.id) {
	        _store2.default.dispatch((0, _note.addNoteToBoard)(note));
	      }
	    }
	  }, {
	    key: 'participantMoveNote',
	    value: function participantMoveNote(data) {
	      var key = Object.keys(data);
	      var left = void 0;
	      var top = void 0;
	      var coordObj = data[key];
	      for (var coords in coordObj) {
	        if (coords === 'left') {
	          left = coordObj[coords];
	        } else {
	          top = coordObj[coords];
	        }
	      }
	      _store2.default.dispatch((0, _note.moveNote)(Number(key[0]), left, top));
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(_ref) {
	      /* join room is done in participants container instead */
	      // if (!this.props.board || isEmpty(this.props.board)) {
	      //   return;
	      // } else {
	      //   this.props.socketEmit('join', {
	
	      //     room: genShortHash(board.id),
	      //     name: user.first_name + user.last_name
	      //   });
	      // }
	
	
	      var board = _ref.board,
	          user = _ref.user,
	          note = _ref.note,
	          room = _ref.room;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.clearSocketListeners();
	      this.props.socketDisconnect();
	    }
	  }, {
	    key: 'renderNote',
	    value: function renderNote(item, key) {
	
	      return _react2.default.createElement(_DraggableNote2.default, _extends({ key: key, id: key }, item));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          movedNote = _props.movedNote,
	          notes = _props.notes,
	          connectDropTarget = _props.connectDropTarget;
	
	
	      return connectDropTarget(_react2.default.createElement(
	        'div',
	        { style: styles },
	        _react2.default.createElement(
	          'div',
	          { style: queStyles },
	          notes.map(function (note) {
	            return _this2.renderNote(note, note.id);
	          })
	        )
	      ));
	    }
	  }]);
	
	  return NoteBoardContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	
	  return { notes: state.noteReducer.all, user: state.userReducer.loggedInUser };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ noteMover: _note.noteMover, socketConnect: _socketio.socketConnect, socketEmit: _socketio.socketEmit, clearSocketListeners: _socketio.clearSocketListeners, socketDisconnect: _socketio.socketDisconnect, addSocketListener: _socketio.addSocketListener, addNoteToBoard: _note.addNoteToBoard }, dispatch);
	};
	
	exports.default = (0, _flow2.default)((0, _reactDnd.DropTarget)(_constants.NOTE, noteTarget, collect), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(NoteBoardContainer);

/***/ },

/***/ 511:
/*!********************************!*\
  !*** ./client/actions/note.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noteMover = exports.setNoteCoords = exports.addNoteToBoard = exports.moveNote = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.receiveNote = receiveNote;
	exports.receiveNotes = receiveNotes;
	exports.selectNote = selectNote;
	exports.getNote = getNote;
	exports.getAllNotes = getAllNotes;
	exports.createNote = createNote;
	
	var _axios = __webpack_require__(/*! axios */ 512);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _socketio = __webpack_require__(/*! ./socketio */ 537);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function receiveNote(note) {
	  return {
	    type: _constants.RECEIVE_NOTE,
	    payload: note
	  };
	}
	
	function receiveNotes(notes) {
	  return {
	    type: _constants.RECEIVE_NOTES,
	    payload: notes
	  };
	}
	
	function selectNote(noteId) {
	  return {
	    type: _constants.SELECT_NOTE,
	    payload: { noteId: noteId }
	  };
	}
	
	var moveNote = exports.moveNote = function moveNote(id, left, top) {
	  return {
	    type: _constants.MOVE_NOTE,
	    notes: _defineProperty({}, id, { left: left, top: top })
	  };
	};
	
	var addNoteToBoard = exports.addNoteToBoard = function addNoteToBoard(note) {
	  return {
	    type: _constants.ADD_NOTE_TO_BOARD,
	    newNote: note
	  };
	};
	
	var setNoteCoords = exports.setNoteCoords = function setNoteCoords(note) {
	  return {
	    type: _constants.ADD_NOTE_TO_BOARD,
	    note: note
	  };
	};
	
	function getNote(noteId) {
	  return function (dispatch) {
	    return _axios2.default.get('/api/notes/' + noteId).then(function (res) {
	      return res.data;
	    }).then(function (note) {
	      return dispatch(receiveNote(note));
	    }).then(function (note) {
	      return Promise.all([note, dispatch(selectNote(noteId))]);
	    }).then(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          note = _ref2[0];
	
	      return note;
	    }).catch(function (err) {
	      return console.warn(err);
	    });
	  };
	}
	
	var noteMover = exports.noteMover = function noteMover(id, left, top) {
	  var data = _defineProperty({}, id, { left: left, top: top });
	
	  return function (dispatch) {
	
	    dispatch(moveNote(id, left, top));
	
	    dispatch((0, _socketio.socketEmit)('moveNote', data));
	  };
	};
	
	function getAllNotes(_ref3) {
	  var userId = _ref3.userId,
	      boardId = _ref3.boardId;
	
	  return function (dispatch) {
	    return _axios2.default.get('/api/notes/', { params: { userId: userId, boardId: boardId } }).then(function (res) {
	      return res.data;
	    }).then(function (notes) {
	      return dispatch(receiveNotes(notes));
	    }).catch(function (err) {
	      return console.warn(err);
	    });
	  };
	}
	
	function createNote(note, boardId) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/notes/', {
	      content: note.content,
	      color: note.color,
	      boardId: boardId || note.boardId
	    }).then(function (_ref4) {
	      var data = _ref4.data;
	
	      console.log('DISPATCH SOCKET', data);
	      dispatch((0, _socketio.socketEmit)('note', data));
	    }).catch(function (err) {
	      return console.warn(err);
	    });
	  };
	}

/***/ },

/***/ 564:
/*!***************************************************!*\
  !*** ./client/containers/CreateBoardContainer.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _CreateBoard = __webpack_require__(/*! ../components/CreateBoard */ 565);
	
	var _CreateBoard2 = _interopRequireDefault(_CreateBoard);
	
	var _board = __webpack_require__(/*! ../actions/board */ 578);
	
	var _note = __webpack_require__(/*! ../actions/note */ 511);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	
	    user: state.userReducer.loggedInUser,
	    boards: state.board.allBoards,
	    permissions: state.board.permissions
	
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    create: function create(boardName) {
	      dispatch((0, _board.createBoard)(boardName));
	    },
	    onBoardEnter: function onBoardEnter() {
	      dispatch((0, _note.getAllNotes)({}));
	    }
	  };
	};
	
	var CB = function (_Component) {
	  _inherits(CB, _Component);
	
	  function CB(props) {
	    _classCallCheck(this, CB);
	
	    var _this = _possibleConstructorReturn(this, (CB.__proto__ || Object.getPrototypeOf(CB)).call(this, props));
	
	    _this.state = {
	      filterStatus: 'all'
	    };
	
	    _this.filterChange = _this.filterChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(CB, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.onBoardEnter();
	    }
	  }, {
	    key: 'filterChange',
	    value: function filterChange(filterValue) {
	      this.setState({ filterStatus: filterValue });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_CreateBoard2.default, {
	        user: this.props.user,
	        boards: this.props.boards,
	        permissions: this.props.permissions,
	        create: this.props.create,
	        filterStatus: this.state.filterStatus,
	        filterChange: this.filterChange
	      });
	    }
	  }]);
	
	  return CB;
	}(_react.Component);
	
	var CreateBoardContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CB);
	
	exports.default = CreateBoardContainer;

/***/ },

/***/ 565:
/*!******************************************!*\
  !*** ./client/components/CreateBoard.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 312);
	
	var _ModalContainer = __webpack_require__(/*! ../containers/ModalContainer */ 566);
	
	var _ModalContainer2 = _interopRequireDefault(_ModalContainer);
	
	var _UserBoardsContainer = __webpack_require__(/*! ../containers/UserBoardsContainer */ 577);
	
	var _UserBoardsContainer2 = _interopRequireDefault(_UserBoardsContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CreateBoard = function CreateBoard(props) {
	  var boards = props.boards;
	  var permissions = props.permissions;
	  var filterArr = [];
	
	  if (props.filterStatus !== 'all') {
	    filterArr = permissions.filter(function (permission) {
	      return permission.permission === props.filterStatus;
	    }).map(function (permission) {
	      return permission.board_id;
	    });
	  } else {
	    filterArr = permissions.map(function (permission) {
	      return permission.board_id;
	    });
	  }
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      _react2.default.createElement(
	        'div',
	        { className: 'col-xs-4 col-md-4 col-lg-4 col-xs-offset-1' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Boards'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'col-xs-5 col-md-3 col-lg-4 col-xs-offset-1' },
	        _react2.default.createElement(
	          'h5',
	          { style: { float: 'right', marginTop: '30px' } },
	          _react2.default.createElement(
	            'a',
	            { onClick: function onClick() {
	                props.filterChange('all');
	              } },
	            'all '
	          ),
	          '/',
	          _react2.default.createElement(
	            'a',
	            { onClick: function onClick() {
	                props.filterChange('admin');
	              } },
	            ' admin '
	          ),
	          '/',
	          _react2.default.createElement(
	            'a',
	            { onClick: function onClick() {
	                props.filterChange('user');
	              } },
	            ' user'
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      !!boards.length && boards.map(function (board) {
	        if (filterArr.indexOf(board.id) !== -1) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10 col-md-8 col-lg-4 col-xs-offset-1', key: board.id },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { className: 'thumbnail', to: '/boards/' + board.id },
	              _react2.default.createElement(_UserBoardsContainer2.default, { board: board }),
	              _react2.default.createElement(
	                'div',
	                { className: 'caption' },
	                _react2.default.createElement(
	                  'h5',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    board.name
	                  )
	                )
	              )
	            )
	          );
	        }
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: 'col-xs-10 col-md-8 col-lg-4 col-xs-offset-1' },
	        _react2.default.createElement(_ModalContainer2.default, { createBoard: props.create })
	      )
	    )
	  );
	};
	exports.default = CreateBoard;

/***/ },

/***/ 566:
/*!*********************************************!*\
  !*** ./client/containers/ModalContainer.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 71);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactModal = __webpack_require__(/*! react-modal */ 567);
	
	var _reactModal2 = _interopRequireDefault(_reactModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var customStyles = {
	  content: {
	    top: '50%',
	    left: '50%',
	    right: 'auto',
	    bottom: 'auto',
	    marginRight: '-50%',
	    transform: 'translate(-50%, -50%)'
	  }
	};
	
	var ModalContainer = function (_Component) {
	  _inherits(ModalContainer, _Component);
	
	  function ModalContainer(props) {
	    _classCallCheck(this, ModalContainer);
	
	    var _this = _possibleConstructorReturn(this, (ModalContainer.__proto__ || Object.getPrototypeOf(ModalContainer)).call(this, props));
	
	    _this.state = {
	      modalIsOpen: false,
	      createBoard: props.createBoard,
	      inputValue: ''
	    };
	
	    _this.openModal = _this.openModal.bind(_this);
	    _this.afterOpenModal = _this.afterOpenModal.bind(_this);
	    _this.closeModal = _this.closeModal.bind(_this);
	    return _this;
	  }
	
	  _createClass(ModalContainer, [{
	    key: 'openModal',
	    value: function openModal() {
	      this.setState({ modalIsOpen: true });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.setState({ inputValue: event.target.value });
	    }
	  }, {
	    key: 'afterOpenModal',
	    value: function afterOpenModal() {
	      // references are now sync'd and can be accessed.
	      this.refs.subtitle.style.color = '#f00';
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      this.setState({ modalIsOpen: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'a',
	          { className: 'addBoard thumbnail', onClick: this.openModal },
	          'Create Board'
	        ),
	        _react2.default.createElement(
	          _reactModal2.default,
	          {
	            isOpen: this.state.modalIsOpen,
	            onAfterOpen: this.afterOpenModal,
	            onRequestClose: this.closeModal,
	            style: customStyles,
	            contentLabel: 'Example Modal'
	          },
	          _react2.default.createElement(
	            'h2',
	            { ref: 'subtitle' },
	            'Create a new Board'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'Board Name'
	          ),
	          _react2.default.createElement(
	            'form',
	            { id: 'cBoard', onSubmit: function onSubmit(event) {
	                event.preventDefault();
	                _this2.state.createBoard(_this2.state.inputValue);
	                _this2.setState({ inputValue: '' });
	                _this2.closeModal();
	              } },
	            _react2.default.createElement('input', {
	              type: 'text',
	              className: 'form-control',
	              value: this.state.inputValue,
	              onChange: function onChange(event) {
	                _this2.handleChange(event);
	              }
	            })
	          ),
	          _react2.default.createElement(
	            'button',
	            { form: 'cBoard' },
	            'Create'
	          ),
	          _react2.default.createElement(
	            'button',
	            { onClick: this.closeModal },
	            'close'
	          )
	        )
	      );
	    }
	  }]);
	
	  return ModalContainer;
	}(_react.Component);
	
	exports.default = ModalContainer;

/***/ },

/***/ 577:
/*!**************************************************!*\
  !*** ./client/containers/UserBoardsContainer.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _NoteWrapper = __webpack_require__(/*! ../components/NoteWrapper */ 498);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _board = __webpack_require__(/*! ../actions/board */ 578);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UserBoardsContainer = function (_Component) {
	  _inherits(UserBoardsContainer, _Component);
	
	  function UserBoardsContainer() {
	    _classCallCheck(this, UserBoardsContainer);
	
	    return _possibleConstructorReturn(this, (UserBoardsContainer.__proto__ || Object.getPrototypeOf(UserBoardsContainer)).apply(this, arguments));
	  }
	
	  _createClass(UserBoardsContainer, [{
	    key: 'render',
	    value: function render() {
	      var boardId = this.props.board.id;
	      var boardIdNotes = [];
	
	      if (this.props.notes.length) {
	        boardIdNotes = this.props.notes.filter(function (note) {
	          return boardId === note.board_id;
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { style: {
	            // width   : 400,
	            height: 200,
	            position: 'relative' } },
	        boardIdNotes.length ? boardIdNotes.map(function (note) {
	          var left = note.left,
	              top = note.top;
	
	          return _react2.default.createElement(_NoteWrapper2.default, {
	            key: note.id,
	            id: note.id,
	            left: left / 5,
	            top: top / 5,
	            note: note,
	            height: 40,
	            width: 40
	          });
	        }) : null
	      );
	    }
	  }]);
	
	  return UserBoardsContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    notes: state.noteReducer.all,
	    board: ownProps.board
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserBoardsContainer);

/***/ },

/***/ 578:
/*!*********************************!*\
  !*** ./client/actions/board.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBoard = exports.createBoard = exports.getAllBoards = exports.addNewBoard = exports.receiveAllBoards = exports.receiveBoard = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 512);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var receiveBoard = exports.receiveBoard = function receiveBoard(board) {
	  return {
	    type: _constants.RECEIVE_BOARD,
	    board: board
	  };
	};
	
	var receiveAllBoards = exports.receiveAllBoards = function receiveAllBoards(boards, permissions) {
	  return {
	    type: _constants.RECEIVE_BOARDS,
	    boards: boards,
	    permissions: permissions
	  };
	};
	
	var addNewBoard = exports.addNewBoard = function addNewBoard(board) {
	  return {
	    type: _constants.ADD_NEW_BOARD,
	    board: board
	  };
	};
	
	var getAllBoards = exports.getAllBoards = function getAllBoards() {
	  return function (dispatch) {
	    _axios2.default.get('/api/boards/').then(function (res) {
	      return res.data;
	    }).then(function (boards) {
	      dispatch(receiveAllBoards(boards.boards, boards.permissions));
	    });
	  };
	};
	
	var createBoard = exports.createBoard = function createBoard(boardName) {
	  return function (dispatch) {
	    _axios2.default.post('/api/boards/', { boardName: boardName }).then(function (res) {
	      return res.data;
	    }).then(function (board) {
	      dispatch(addNewBoard(board));
	    });
	  };
	};
	
	var getBoard = exports.getBoard = function getBoard(boardId) {
	  return function (dispatch) {
	    _axios2.default.get('/api/boards/' + boardId).then(function (res) {
	      return res.data;
	    }).then(function (board) {
	      dispatch(receiveBoard(board));
	    });
	  };
	};

/***/ },

/***/ 745:
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
	
	var _Sidebar = __webpack_require__(/*! ../components/Sidebar */ 746);
	
	var _Sidebar2 = _interopRequireDefault(_Sidebar);
	
	var _navbar = __webpack_require__(/*! ../actions/navbar */ 747);
	
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

/***/ 749:
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
//# sourceMappingURL=0.4131c4f2837c2cbdf6cc.hot-update.js.map