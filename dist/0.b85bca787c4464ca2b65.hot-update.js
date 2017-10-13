webpackHotUpdate(0,{

/***/ 476:
/*!***************************************!*\
  !*** ./client/components/Sponsers.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSlick = __webpack_require__(/*! react-slick */ 477);
	
	var _reactSlick2 = _interopRequireDefault(_reactSlick);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 238);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var partnersArray = [{
	  logo: '/assets/pawpawphoto.jpg'
	}, {
	  logo: '/assets/pawpawphoto.jpg'
	}, {
	  logo: '/assets/pawpawphoto.jpg'
	}, {
	  logo: '/assets/pawpawphoto.jpg'
	}, {
	  logo: '/assets/pawpawphoto.jpg'
	}, {
	  logo: '/assets/pawpawphoto.jpg'
	}];
	
	// import NavbarContainer from '../containers/NavbarContainer';
	var settings = {
	  centerMode: true,
	  slidesToShow: 4,
	  swipeToSlide: true,
	  arrows: false
	};
	
	var Sponsors = function Sponsors(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'container' },
	    _react2.default.createElement(
	      _reactSlick2.default,
	      settings,
	      partnersArray.map(function (partner) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'partner-slider-tabs' },
	          _react2.default.createElement('img', { className: 'partner-img-alignment', src: partner.logo })
	        );
	      })
	    )
	  );
	};
	
	exports.default = Sponsors;

/***/ }

})
//# sourceMappingURL=0.b85bca787c4464ca2b65.hot-update.js.map