webpackHotUpdate(0,{

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
	
	    case TOGGLE_CLICK:
	      newState[action.field] = !newState[action.field];
	      break;
	    default:
	      return state;
	
	  }
	
	  return newState;
	};
	
	var _constants = __webpack_require__(/*! ../constants */ 235);
	
	var initialState = { events: [] };

/***/ }

})
//# sourceMappingURL=0.5a8de7a8a38c3a0b6b04.hot-update.js.map