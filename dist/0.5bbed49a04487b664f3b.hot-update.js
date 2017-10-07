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
	
	var _eventReducer = __webpack_require__(/*! ./eventReducer */ 477);
	
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

/***/ },

/***/ 477:
/*!*****************************************!*\
  !*** ./client/reducers/eventReducer.js ***!
  \*****************************************/
/***/ function(module, exports) {

	"use strict";

/***/ }

})
//# sourceMappingURL=0.5bbed49a04487b664f3b.hot-update.js.map