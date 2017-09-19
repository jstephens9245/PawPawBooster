webpackHotUpdate(0,{

/***/ 226:
/*!*************************!*\
  !*** ./client/store.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 55);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 227);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(/*! redux-logger */ 228);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _rootReducer = __webpack_require__(/*! ./reducers/rootReducer */ 456);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
	
	exports.default = (0, _redux.createStore)(_rootReducer2.default, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)())));

/***/ },

/***/ 456:
/*!****************************************!*\
  !*** ./client/reducers/rootReducer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combinedReducer = undefined;
	exports.default = rootReducer;
	
	var _constants = __webpack_require__(/*! ../constants */ 441);
	
	var _redux = __webpack_require__(/*! redux */ 55);
	
	var _boardReducer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./boardReducer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _boardReducer2 = _interopRequireDefault(_boardReducer);
	
	var _noteReducer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./noteReducer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _noteReducer2 = _interopRequireDefault(_noteReducer);
	
	var _userReducer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./userReducer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _userReducer2 = _interopRequireDefault(_userReducer);
	
	var _navbarReducer = __webpack_require__(/*! ./navbarReducer */ 457);
	
	var _navbarReducer2 = _interopRequireDefault(_navbarReducer);
	
	var _commentsReducer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./commentsReducer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _commentsReducer2 = _interopRequireDefault(_commentsReducer);
	
	var _socketioReducer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./socketioReducer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _socketioReducer2 = _interopRequireDefault(_socketioReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var combinedReducer = exports.combinedReducer = (0, _redux.combineReducers)({
	  board: _boardReducer2.default,
	  noteReducer: _noteReducer2.default,
	  userReducer: _userReducer2.default,
	  nav: _navbarReducer2.default,
	  socket: _socketioReducer2.default,
	  commentsReducer: _commentsReducer2.default
	
	});
	
	function rootReducer(store, action) {
	  if (action.type === _constants.CLEAR_STORE) return combinedReducer();
	
	  return combinedReducer(store, action);
	}

/***/ },

/***/ 457:
/*!******************************************!*\
  !*** ./client/reducers/navbarReducer.js ***!
  \******************************************/
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
	
	    case _constants.TOGGLE_CLICK:
	      newState[action.field] = !newState[action.field];
	      break;
	    default:
	      return state;
	
	  }
	
	  return newState;
	};
	
	var _constants = __webpack_require__(/*! ../constants */ 441);
	
	var initialState = { sidebarToggle: false, boardTemplateToggle: false };

/***/ }

})
//# sourceMappingURL=0.f83e18740a571df6c43a.hot-update.js.map