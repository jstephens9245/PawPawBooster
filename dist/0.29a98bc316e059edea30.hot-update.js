webpackHotUpdate(0,{

/***/ 234:
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
	
	var _constants = __webpack_require__(/*! ../constants */ 235);
	
	var _redux = __webpack_require__(/*! redux */ 55);
	
	var _navbarReducer = __webpack_require__(/*! ./navbarReducer */ 236);
	
	var _navbarReducer2 = _interopRequireDefault(_navbarReducer);
	
	var _eventReducer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./eventReducer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _eventReducer2 = _interopRequireDefault(_eventReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import userReducer from './userReducer';
	var combinedReducer = exports.combinedReducer = (0, _redux.combineReducers)({
	  // userReducer,
	  nav: _navbarReducer2.default,
	  event: _eventReducer2.default
	
	});
	
	function rootReducer(store, action) {
	  if (action.type === _constants.CLEAR_STORE) return combinedReducer();
	
	  return combinedReducer(store, action);
	}

/***/ }

})
//# sourceMappingURL=0.29a98bc316e059edea30.hot-update.js.map