webpackHotUpdate(0,{

/***/ 226:
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
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _boardReducer = __webpack_require__(/*! ./boardReducer */ 228);
	
	var _boardReducer2 = _interopRequireDefault(_boardReducer);
	
	var _noteReducer = __webpack_require__(/*! ./noteReducer */ 229);
	
	var _noteReducer2 = _interopRequireDefault(_noteReducer);
	
	var _userReducer = __webpack_require__(/*! ./userReducer */ 230);
	
	var _userReducer2 = _interopRequireDefault(_userReducer);
	
	var _noteBoardReducer = __webpack_require__(/*! ./noteBoardReducer */ 231);
	
	var _noteBoardReducer2 = _interopRequireDefault(_noteBoardReducer);
	
	var _navbarReducer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./navbarReducer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _navbarReducer2 = _interopRequireDefault(_navbarReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var combinedReducer = exports.combinedReducer = (0, _redux.combineReducers)({
	  board: _boardReducer2.default,
	  noteReducer: _noteReducer2.default,
	  userReducer: _userReducer2.default,
	  noteBoard: _noteBoardReducer2.default,
	  nav: _navbarReducer2.default
	});
	
	function rootReducer(store, action) {
	  if (action.type === _constants.CLEAR_STORE) return combinedReducer();
	
	  return combinedReducer(store, action);
	}

/***/ }

})
//# sourceMappingURL=0.78cf1f8ae384930ee3c2.hot-update.js.map