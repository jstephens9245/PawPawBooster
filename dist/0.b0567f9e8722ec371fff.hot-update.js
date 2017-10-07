webpackHotUpdate(0,{

/***/ 462:
/*!*********************************!*\
  !*** ./client/actions/event.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteEvent = exports.createEvent = exports.getAllEvents = exports.addNewEvent = exports.receiveAllEvents = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 294);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 235);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var receiveAllEvents = exports.receiveAllEvents = function receiveAllEvents(events) {
	  return {
	    type: RECEIVE_BOARDS,
	    events: events
	  };
	};
	
	var addNewEvent = exports.addNewEvent = function addNewEvent(event) {
	  return {
	    type: _constants.ADD_NEW_EVENT,
	    event: event
	  };
	};
	
	var getAllEvents = exports.getAllEvents = function getAllEvents() {
	  return function (dispatch) {
	    return _axios2.default.get('/api/event/').then(function (res) {
	      return res.data;
	    }).then(function (events) {
	      dispatch(receiveAllBoards(boards.boards, boards.permissions));
	    });
	  };
	};
	
	var createEvent = exports.createEvent = function createEvent(newEvent) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/event', { newEvent: newEvent }).then(function (res) {
	      return res.data;
	    }).then(function (event) {
	      dispatch(addNewEvent(event));
	    });
	  };
	};
	
	var deleteEvent = exports.deleteEvent = function deleteEvent(eventId) {
	  return function (dispatch) {
	    return _axios2.default.delete('/api/event/' + eventId).then(function (res) {
	      return res.data;
	    }).then(function (event) {
	      dispatch(getAllBoards());
	    });
	  };
	};

/***/ }

})
//# sourceMappingURL=0.b0567f9e8722ec371fff.hot-update.js.map