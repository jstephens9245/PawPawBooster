webpackHotUpdate(0,{

/***/ 289:
/*!******************************************!*\
  !*** ./client/components/CreateBoard.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 233);
	
	var _ModalContainer = __webpack_require__(/*! ../containers/ModalContainer */ 322);
	
	var _ModalContainer2 = _interopRequireDefault(_ModalContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CreateBoard = function CreateBoard(props) {
	  var boards = props.boards;
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { style: { paddingLeft: '8.5%' } },
	      _react2.default.createElement(
	        'h3',
	        null,
	        'Boards'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      boards && boards.map(function (board) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'col-xs-10 col-md-8 col-lg-4 col-xs-offset-1', key: board.id },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { className: 'thumbnail', to: '/myboards/' + board.id },
	            _react2.default.createElement(
	              'div',
	              { className: 'caption' },
	              _react2.default.createElement(
	                'h5',
	                null,
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  board.name
	                )
	              )
	            )
	          )
	        );
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: 'col-xs-12 col-md-6 col-lg-3 col-xs-offset-1' },
	        _react2.default.createElement(
	          'a',
	          { className: 'addBoard thumbnail' },
	          _react2.default.createElement(_ModalContainer2.default, { createBoard: props.create })
	        )
	      )
	    )
	  );
	};
	exports.default = CreateBoard;

/***/ }

})
//# sourceMappingURL=0.5c0a11fa5b16f8c42348.hot-update.js.map