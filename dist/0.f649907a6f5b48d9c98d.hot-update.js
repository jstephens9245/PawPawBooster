webpackHotUpdate(0,{

/***/ 237:
/*!*****************************************!*\
  !*** ./client/reducers/eventReducer.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var newState = Object.assign({}, state);
	
	  switch (action.type) {
	
	    case _constants.RECEIVE_EVENTS:
	      newState.events = action.events;
	      break;
	    case _constants.ADD_NEW_EVENT:
	      newState.events = [].concat(_toConsumableArray(newState.events), [action.event]);
	      break;
	    case _constants.TOGGLE_CLICK:
	      if (action.login === "PPRedskins") {
	        newState.toggle = !newState.toggle;
	      }
	      console.log(newState.toggle);
	      console.log(action.login);
	      break;
	    default:
	      return state;
	
	  }
	
	  return newState;
	};
	
	var _constants = __webpack_require__(/*! ../constants */ 235);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initialState = { events: [], toggle: false };

/***/ }

})
//# sourceMappingURL=0.f649907a6f5b48d9c98d.hot-update.js.map