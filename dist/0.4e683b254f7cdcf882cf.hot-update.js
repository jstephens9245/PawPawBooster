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
	    type: _constants.RECEIVE_EVENTS,
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
	    return _axios2.default.get('/api/event').then(function (res) {
	      return res.data;
	    }).then(function (events) {
	      // console.log(events.events[0]);
	      dispatch(receiveAllEvents(events.events[0]));
	    });
	  };
	};
	
	var createEvent = exports.createEvent = function createEvent(date, time, title, description) {
	  console.log({ date: date, time: time, title: title, description: description });
	  return function (dispatch) {
	    return _axios2.default.post('/api/event', { date: date, time: time, title: title, description: description }).then(function (res) {
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
	      dispatch(getAllEvent());
	    });
	  };
	};

/***/ }

})
//# sourceMappingURL=0.4e683b254f7cdcf882cf.hot-update.js.map