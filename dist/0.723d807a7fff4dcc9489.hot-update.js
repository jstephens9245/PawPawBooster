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
	  var permissions = props.permissions;
	  var filterArr = [];
	
	  if (props.filterStatus !== 'all') {
	    filterArr = permissions.filter(function (permission) {
	      return permission.permission === props.filterStatus;
	    }).map(function (permission) {
	      return permission.board_id;
	    });
	  } else {
	    filterArr = permissions.map(function (permission) {
	      return permission.board_id;
	    });
	  }
	
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
	      'h5',
	      { style: { right: '8.5%' } },
	      _react2.default.createElement(
	        'a',
	        { onClick: function onClick() {
	            props.filterChange('all');
	          } },
	        'all '
	      ),
	      '/',
	      _react2.default.createElement(
	        'a',
	        { onClick: function onClick() {
	            props.filterChange('admin');
	          } },
	        ' admin '
	      ),
	      '/',
	      _react2.default.createElement(
	        'a',
	        { onClick: function onClick() {
	            props.filterChange('user');
	          } },
	        ' user'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      !!boards.length && boards.map(function (board) {
	        if (filterArr.indexOf(board.id) !== -1) {
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
	        }
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: 'col-xs-10 col-md-8 col-lg-4 col-xs-offset-1' },
	        _react2.default.createElement(_ModalContainer2.default, { createBoard: props.create })
	      )
	    )
	  );
	};
	exports.default = CreateBoard;

/***/ }

})
//# sourceMappingURL=0.723d807a7fff4dcc9489.hot-update.js.map