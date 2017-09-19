webpackHotUpdate(0,{

/***/ 229:
/*!****************************************!*\
  !*** ./client/reducers/noteReducer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = noteReducer;
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initState = {
	  all: [],
	  selected: null,
	  allBoardSpecificNotes: {}
	
	};
	
	function noteReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	  var action = arguments[1];
	
	  var nextState = Object.assign({}, state);
	
	  switch (action.type) {
	    case _constants.RECEIVE_NOTE:
	      nextState.all = [].concat(_toConsumableArray(nextState.all), [action.payload]);
	      break;
	    case _constants.RECEIVE_NOTES:
	      nextState.all = action.payload;
	      break;
	
	    case _constants.RECEIVE_MYBOARDS_NOTES:
	      nextState.allBoardSpecificNotes[action.boardId] = action.notes;
	      break;
	
	    case _constants.SELECT_NOTE:
	      nextState.selected = nextState.all.find(function (note) {
	        return note.id == action.payload.noteId;
	      });
	      break;
	
	    case _constants.MOVE_NOTE:
	      var keys = Object.keys(action.notes);
	      nextState.all = nextState.all.map(function (note, i) {
	
	        var keyId = note.id;
	        if (action.notes[keyId]) {
	          return Object.assign({}, note, { left: action.notes[keyId].left, top: action.notes[keyId].top });
	        } else {
	          return note;
	        }
	      });
	      console.log('sadfasdfsadfd', nextState.all);
	      break;
	
	    default:
	      return state;
	  }
	  return nextState;
	}

/***/ }

})
//# sourceMappingURL=0.a26d2f4cb7a2b408cbc0.hot-update.js.map