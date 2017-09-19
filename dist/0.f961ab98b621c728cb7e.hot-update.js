webpackHotUpdate(0,{

/***/ 578:
/*!***********************************************!*\
  !*** ./client/containers/SidebarContainer.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _Sidebar = __webpack_require__(/*! ../components/Sidebar */ 579);
	
	var _Sidebar2 = _interopRequireDefault(_Sidebar);
	
	var _navbar = __webpack_require__(/*! ../actions/navbar */ 580);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    sidebarToggle: state.nav.sidebarToggle
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    toggleTemplate: function toggleTemplate(field) {
	      return dispatch((0, _navbar.toggleClick)(field));
	    }
	
	  };
	};
	
	var SidebarContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Sidebar2.default);
	
	exports.default = SidebarContainer;

/***/ }

})
//# sourceMappingURL=0.f961ab98b621c728cb7e.hot-update.js.map