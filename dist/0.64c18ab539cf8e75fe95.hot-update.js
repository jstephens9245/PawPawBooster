webpackHotUpdate(0,{

/***/ 475:
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
	
	var _reactSlick = __webpack_require__(/*! react-slick */ 479);
	
	var _reactSlick2 = _interopRequireDefault(_reactSlick);
	
	var _link = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"next/link\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _link2 = _interopRequireDefault(_link);
	
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
	  return (
	    // <div>
	    //   <div className="sponsors-list">
	    //     <h2 className="sponsors-title">Corporate Sponsors</h2>
	    //     <div className="sponsor-class">
	    //       <h3>Gold: $1000</h3>
	    //       <p>Advantage Roofing and Exteriors</p>
	    //       <p>Lounsbury Excavating, Inc</p>
	    //       <p>Lakes and Country Rea l Estate</p>
	    //       <p>Honor Credit Union</p>
	    //       <p>Tapper Automotive</p>
	    //       <p>Coca-Cola</p>
	    //       <p>Meijer</p>
	    //       <p>Walmart</p>
	    //       <p>Family Fare</p>
	    //       <p>Hiemstra Optical</p>
	    //       <p>Newell Insurance NEW SPONSOR</p>
	    //     </div>
	    //
	    //     <div className="sponsor-class">
	    //       <h3>Silver: $750</h3>
	    //       <p>Maple Lake Chiropractic</p>
	    //       <p>National Guard – Jason Brautigam</p>
	    //       <p>LaCantina</p>
	    //       <p>HotShotz swap for Reverse Raffle</p>
	    //       {/* <p>Pictures</p> */}
	    //     </div>
	    //
	    //     <div className="sponsor-class">
	    //       <h3>Bronze: $350</h3>
	    //       <p>Subway</p>
	    //       <p>Premier Catering Swap for R.Raffle/TGIS</p>
	    //       <p>Foune Well</p>
	    //       <p>Red’s Rootbeer</p>
	    //       <p>Great Lake Pondscapes</p>
	    //       <p>Brookside Farms</p>
	    //       <p>McDonalds</p>
	    //       <p>Paw Paw Rental</p>
	    //       <p>Rainbow Lanes</p>
	    //     </div>
	    //   </div>
	    // </div>
	    _react2.default.createElement(
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
	    )
	  );
	};
	
	exports.default = Sponsors;

/***/ }

})
//# sourceMappingURL=0.64c18ab539cf8e75fe95.hot-update.js.map