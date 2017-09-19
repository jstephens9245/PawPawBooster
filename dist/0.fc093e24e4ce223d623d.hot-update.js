webpackHotUpdate(0,{

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
	
	var _navbarReducer = __webpack_require__(/*! ./navbarReducer */ 457);
	
	var _navbarReducer2 = _interopRequireDefault(_navbarReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var combinedReducer = exports.combinedReducer = (0, _redux.combineReducers)({
	  // userReducer,
	  nav: _navbarReducer2.default
	
	});
	// import userReducer from './userReducer';
	function rootReducer(store, action) {
	  if (action.type === _constants.CLEAR_STORE) return combinedReducer();
	
	  return combinedReducer(store, action);
	}

/***/ }

})
//# sourceMappingURL=0.fc093e24e4ce223d623d.hot-update.js.map