webpackHotUpdate(0,{

/***/ 460:
/*!*************************************!*\
  !*** ./client/components/Events.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBigCalendar = __webpack_require__(/*! react-big-calendar */ 461);
	
	var _reactBigCalendar2 = _interopRequireDefault(_reactBigCalendar);
	
	var _moment = __webpack_require__(/*! moment */ 656);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	__webpack_require__(/*! react-big-calendar/lib/css/react-big-calendar.css */ 773);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import NavbarContainer from '../containers/NavbarContainer';
	_reactBigCalendar2.default.momentLocalizer(_moment2.default); // or globalizeLocalizer
	var myEventsList = [];
	
	var Events = function Events(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_reactBigCalendar2.default, {
	      events: myEventsList,
	      startAccessor: 'startDate',
	      endAccessor: 'endDate'
	    })
	  );
	};
	
	exports.default = Events;

/***/ },

/***/ 773:
/*!*************************************************************!*\
  !*** ./~/react-big-calendar/lib/css/react-big-calendar.css ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../css-loader!../../../postcss-loader!./react-big-calendar.css */ 774);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(/*! !../../../css-loader!../../../postcss-loader!./react-big-calendar.css */ 774, function() {
				var newContent = __webpack_require__(/*! !../../../css-loader!../../../postcss-loader!./react-big-calendar.css */ 774);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 774:
/*!***********************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/react-big-calendar/lib/css/react-big-calendar.css ***!
  \***********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ 4)();
	// imports
	
	
	// module
	exports.push([module.id, ".rbc-btn {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nbutton.rbc-btn {\n  overflow: visible;\n  text-transform: none;\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled].rbc-btn {\n  cursor: not-allowed;\n}\nbutton.rbc-input::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n.rbc-calendar {\n  box-sizing: border-box;\n  height: 100%;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n  -ms-flex-align: stretch;\n      -webkit-box-align: stretch;\n          align-items: stretch;\n}\n.rbc-calendar *,\n.rbc-calendar *:before,\n.rbc-calendar *:after {\n  box-sizing: inherit;\n}\n.rbc-abs-full,\n.rbc-row-bg {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.rbc-ellipsis,\n.rbc-event-label,\n.rbc-row-segment .rbc-event-content,\n.rbc-show-more {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.rbc-rtl {\n  direction: rtl;\n}\n.rbc-off-range {\n  color: #b3b3b3;\n}\n.rbc-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 3px;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n  font-size: 90%;\n  min-height: 0;\n}\n.rbc-header > a,\n.rbc-header > a:active,\n.rbc-header > a:visited {\n  color: inherit;\n  text-decoration: none;\n}\n.rbc-row-content {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 4;\n}\n.rbc-today {\n  background-color: #eaf6ff;\n}\n.rbc-toolbar {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n      -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n  font-size: 16px;\n}\n.rbc-toolbar .rbc-toolbar-label {\n  width: 100%;\n  padding: 0 10px;\n  text-align: center;\n}\n.rbc-toolbar button {\n  color: #373a3c;\n  display: inline-block;\n  margin: 0;\n  text-align: center;\n  vertical-align: middle;\n  background: none;\n  background-image: none;\n  border: 1px solid #ccc;\n  padding: .375rem 1rem;\n  border-radius: 4px;\n  line-height: normal;\n  white-space: nowrap;\n}\n.rbc-toolbar button:active,\n.rbc-toolbar button.rbc-active {\n  background-image: none;\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.rbc-toolbar button:active:hover,\n.rbc-toolbar button.rbc-active:hover,\n.rbc-toolbar button:active:focus,\n.rbc-toolbar button.rbc-active:focus {\n  color: #373a3c;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n.rbc-toolbar button:focus {\n  color: #373a3c;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.rbc-toolbar button:hover {\n  color: #373a3c;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.rbc-btn-group {\n  display: inline-block;\n  white-space: nowrap;\n}\n.rbc-btn-group > button:first-child:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.rbc-btn-group > button:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.rbc-rtl .rbc-btn-group > button:first-child:not(:last-child) {\n  border-radius: 4px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.rbc-rtl .rbc-btn-group > button:last-child:not(:first-child) {\n  border-radius: 4px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.rbc-btn-group > button:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.rbc-btn-group button + button {\n  margin-left: -1px;\n}\n.rbc-rtl .rbc-btn-group button + button {\n  margin-left: 0;\n  margin-right: -1px;\n}\n.rbc-btn-group + .rbc-btn-group,\n.rbc-btn-group + button {\n  margin-left: 10px;\n}\n.rbc-event {\n  cursor: pointer;\n  padding: 2px 5px;\n  background-color: #3174ad;\n  border-radius: 5px;\n  color: #fff;\n}\n.rbc-event.rbc-selected {\n  background-color: #265985;\n}\n.rbc-event-label {\n  font-size: 80%;\n}\n.rbc-event-overlaps {\n  box-shadow: -1px 1px 5px 0px rgba(51, 51, 51, 0.5);\n}\n.rbc-event-continues-prior {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.rbc-event-continues-after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.rbc-event-continues-earlier {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.rbc-event-continues-later {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.rbc-row {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: row;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.rbc-row-segment {\n  padding: 0 1px 1px 1px;\n}\n.rbc-selected-cell {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.rbc-show-more {\n  background-color: rgba(255, 255, 255, 0.3);\n  z-index: 4;\n  font-weight: bold;\n  font-size: 85%;\n  height: auto;\n  line-height: normal;\n  white-space: nowrap;\n}\n.rbc-month-view {\n  position: relative;\n  border: 1px solid #DDD;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n  -ms-flex: 1 0 0px;\n      -webkit-box-flex: 1;\n          flex: 1 0 0;\n  width: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 100%;\n}\n.rbc-month-view .rbc-header {\n  border-bottom: 1px solid #DDD;\n}\n.rbc-month-view .rbc-header + .rbc-header {\n  border-left: 1px solid #DDD;\n}\n.rbc-rtl .rbc-month-view .rbc-header + .rbc-header {\n  border-left-width: 0;\n  border-right: 1px solid #DDD;\n}\n.rbc-month-header {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: row;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.rbc-month-row {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n  -ms-flex: 1 0 0px;\n      -webkit-box-flex: 1;\n          flex: 1 0 0;\n  overflow: hidden;\n  height: 100%;\n}\n.rbc-month-row + .rbc-month-row {\n  border-top: 1px solid #DDD;\n}\n.rbc-date-cell {\n  padding-right: 5px;\n  text-align: right;\n}\n.rbc-date-cell.rbc-now {\n  font-weight: bold;\n}\n.rbc-date-cell > a,\n.rbc-date-cell > a:active,\n.rbc-date-cell > a:visited {\n  color: inherit;\n  text-decoration: none;\n}\n.rbc-row-bg {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: row;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          flex-direction: row;\n  -ms-flex: 1 0 0px;\n      -webkit-box-flex: 1;\n          flex: 1 0 0;\n  overflow: hidden;\n}\n.rbc-day-bg + .rbc-day-bg {\n  border-left: 1px solid #DDD;\n}\n.rbc-rtl .rbc-day-bg + .rbc-day-bg {\n  border-left-width: 0;\n  border-right: 1px solid #DDD;\n}\n.rbc-overlay {\n  position: absolute;\n  z-index: 5;\n  border: 1px solid #e5e5e5;\n  background-color: #fff;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);\n  padding: 10px;\n}\n.rbc-overlay > * + * {\n  margin-top: 1px;\n}\n.rbc-overlay-header {\n  border-bottom: 1px solid #e5e5e5;\n  margin: -10px -10px 5px -10px;\n  padding: 2px 10px;\n}\n.rbc-agenda-view {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n  -ms-flex: 1 0 0px;\n      -webkit-box-flex: 1;\n          flex: 1 0 0;\n  overflow: auto;\n}\n.rbc-agenda-view table {\n  width: 100%;\n  border: 1px solid #DDD;\n}\n.rbc-agenda-view table tbody > tr > td {\n  padding: 5px 10px;\n  vertical-align: top;\n}\n.rbc-agenda-view table .rbc-agenda-time-cell {\n  padding-left: 15px;\n  padding-right: 15px;\n  text-transform: lowercase;\n}\n.rbc-agenda-view table tbody > tr > td + td {\n  border-left: 1px solid #DDD;\n}\n.rbc-rtl .rbc-agenda-view table tbody > tr > td + td {\n  border-left-width: 0;\n  border-right: 1px solid #DDD;\n}\n.rbc-agenda-view table tbody > tr + tr {\n  border-top: 1px solid #DDD;\n}\n.rbc-agenda-view table thead > tr > th {\n  padding: 3px 5px;\n  text-align: left;\n  border-bottom: 1px solid #DDD;\n}\n.rbc-rtl .rbc-agenda-view table thead > tr > th {\n  text-align: right;\n}\n.rbc-agenda-time-cell {\n  text-transform: lowercase;\n}\n.rbc-agenda-time-cell .rbc-continues-after:after {\n  content: ' \\BB';\n}\n.rbc-agenda-time-cell .rbc-continues-prior:before {\n  content: '\\AB   ';\n}\n.rbc-agenda-date-cell,\n.rbc-agenda-time-cell {\n  white-space: nowrap;\n}\n.rbc-agenda-event-cell {\n  width: 100%;\n}\n.rbc-time-column {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n  min-height: 100%;\n}\n.rbc-time-column .rbc-timeslot-group {\n  -ms-flex: 1;\n      -webkit-box-flex: 1;\n          flex: 1;\n}\n.rbc-timeslot-group {\n  border-bottom: 1px solid #DDD;\n  min-height: 40px;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n}\n.rbc-time-gutter,\n.rbc-header-gutter {\n  -ms-flex: none;\n      -webkit-box-flex: 0;\n          flex: none;\n}\n.rbc-label {\n  padding: 0 5px;\n}\n.rbc-day-slot {\n  position: relative;\n}\n.rbc-day-slot .rbc-event {\n  border: 1px solid #265985;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  max-height: 100%;\n  -ms-flex-flow: column wrap;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-flow: column wrap;\n  -ms-flex-align: start;\n      -webkit-box-align: start;\n          align-items: flex-start;\n  overflow: hidden;\n}\n.rbc-day-slot .rbc-event-label {\n  -ms-flex: none;\n      -webkit-box-flex: 0;\n          flex: none;\n  padding-right: 5px;\n  width: auto;\n}\n.rbc-day-slot .rbc-event-content {\n  width: 100%;\n  -ms-flex: 1 1 0px;\n      -webkit-box-flex: 1;\n          flex: 1 1 0;\n  word-wrap: break-word;\n  line-height: 1;\n  height: 100%;\n  min-height: 1em;\n}\n.rbc-day-slot .rbc-time-slot {\n  border-top: 1px solid #f7f7f7;\n}\n.rbc-time-slot {\n  -ms-flex: 1 0 0px;\n      -webkit-box-flex: 1;\n          flex: 1 0 0;\n}\n.rbc-time-slot.rbc-now {\n  font-weight: bold;\n}\n.rbc-day-header {\n  text-align: center;\n}\n.rbc-day-slot .rbc-event {\n  position: absolute;\n  z-index: 2;\n}\n.rbc-slot-selection {\n  z-index: 10;\n  position: absolute;\n  cursor: default;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 75%;\n  padding: 3px;\n}\n.rbc-time-view {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n  -ms-flex: 1;\n      -webkit-box-flex: 1;\n          flex: 1;\n  width: 100%;\n  border: 1px solid #DDD;\n  min-height: 0;\n}\n.rbc-time-view .rbc-time-gutter {\n  white-space: nowrap;\n}\n.rbc-time-view .rbc-allday-cell {\n  width: 100%;\n  position: relative;\n}\n.rbc-time-view .rbc-allday-events {\n  position: relative;\n  z-index: 4;\n}\n.rbc-time-view .rbc-row {\n  min-height: 20px;\n}\n.rbc-time-header {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex: 0 0 auto;\n      -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.rbc-time-header.rbc-overflowing {\n  border-right: 1px solid #DDD;\n}\n.rbc-rtl .rbc-time-header.rbc-overflowing {\n  border-right-width: 0;\n  border-left: 1px solid #DDD;\n}\n.rbc-time-header > .rbc-row > * + * {\n  border-left: 1px solid #DDD;\n}\n.rbc-rtl .rbc-time-header > .rbc-row > * + * {\n  border-left-width: 0;\n  border-right: 1px solid #DDD;\n}\n.rbc-time-header > .rbc-row:first-child {\n  border-bottom: 1px solid #DDD;\n}\n.rbc-time-header .rbc-gutter-cell {\n  -ms-flex: none;\n      -webkit-box-flex: 0;\n          flex: none;\n}\n.rbc-time-header > .rbc-gutter-cell + * {\n  width: 100%;\n}\n.rbc-time-content {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex: 1 0 0%;\n      -webkit-box-flex: 1;\n          flex: 1 0 0%;\n  -ms-flex-align: start;\n      -webkit-box-align: start;\n          align-items: flex-start;\n  width: 100%;\n  border-top: 2px solid #DDD;\n  overflow-y: auto;\n  position: relative;\n}\n.rbc-time-content > .rbc-time-gutter {\n  -ms-flex: none;\n      -webkit-box-flex: 0;\n          flex: none;\n}\n.rbc-time-content > * + * > * {\n  border-left: 1px solid #DDD;\n}\n.rbc-rtl .rbc-time-content > * + * > * {\n  border-left-width: 0;\n  border-right: 1px solid #DDD;\n}\n.rbc-time-content > .rbc-day-slot {\n  width: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.rbc-current-time-indicator {\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  height: 1px;\n  background-color: #74ad31;\n  pointer-events: none;\n}\n.rbc-current-time-indicator::before {\n  display: block;\n  position: absolute;\n  left: -3px;\n  top: -3px;\n  content: ' ';\n  background-color: #74ad31;\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n}\n.rbc-rtl .rbc-current-time-indicator::before {\n  left: 0;\n  right: -3px;\n}\n", ""]);
	
	// exports


/***/ }

})
//# sourceMappingURL=0.6b5200c07685e4c95f0e.hot-update.js.map