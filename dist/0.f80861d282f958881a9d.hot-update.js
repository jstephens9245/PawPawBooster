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
	
	    case _constants.RECEIVE_EVENTS:
	      console.log(action.events);
	      newState.events = [].concat(_toConsumableArray(newState.events), [[action.events]]);
	      break;
	    case _constants.ADD_NEW_EVENT:
	      newState.events = [].concat(_toConsumableArray(newState.events), [[action.event]]);
	      break;
	    default:
	      return state;
	
	  }
	
	  return newState;
	};
	
	var _constants = __webpack_require__(/*! ../constants */ 235);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initialState = { events: [] };

/***/ }

})
//# sourceMappingURL=0.f80861d282f958881a9d.hot-update.js.map