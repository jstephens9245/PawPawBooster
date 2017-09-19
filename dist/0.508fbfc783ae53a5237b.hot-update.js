webpackHotUpdate(0,{

/***/ 581:
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
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var initialState = { sidebarToggle: false, boardTemplateToggle: false };

/***/ }

})
//# sourceMappingURL=0.508fbfc783ae53a5237b.hot-update.js.map