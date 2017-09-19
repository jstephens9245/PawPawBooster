webpackHotUpdate(0,{

/***/ 598:
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _ModalContainer = __webpack_require__(/*! ../containers/ModalContainer */ 599);
	
	var _ModalContainer2 = _interopRequireDefault(_ModalContainer);
	
	var _UserBoardsContainer = __webpack_require__(/*! ../containers/UserBoardsContainer */ 600);
	
	var _UserBoardsContainer2 = _interopRequireDefault(_UserBoardsContainer);
	
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
	      { className: 'clearfix', style: { width: '87%', margin: '0 auto' } },
	      _react2.default.createElement(
	        'h3',
	        { style: { float: 'left' } },
	        'Boards'
	      ),
	      _react2.default.createElement(
	        'h5',
	        { style: { float: 'right', marginTop: '30px', textAlign: 'right' } },
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
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: { textAlign: 'center' } },
	      !!boards.length && boards.map(function (board) {
	        if (filterArr.indexOf(board.id) !== -1) {
	          return _react2.default.createElement(
	            'div',
	            { style: { display: 'inline-block', margin: '0 5px 0 5px' }, key: board.id },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { className: 'thumbnail', style: { overflow: 'hidden' }, to: '/boards/' + board.hash },
	              _react2.default.createElement(_UserBoardsContainer2.default, { board: board }),
	              _react2.default.createElement(
	                'div',
	                { className: 'caption' },
	                _react2.default.createElement(
	                  'h5',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    { style: { textAlign: 'left' } },
	                    board.name
	                  )
	                ),
	                _react2.default.createElement(
	                  'button',
	                  { style: { textAlign: 'right' } },
	                  board.name
	                )
	              )
	            )
	          );
	        }
	      }),
	      _react2.default.createElement(
	        'div',
	        { style: { display: 'inline-block', verticalAlign: 'top' } },
	        _react2.default.createElement(_ModalContainer2.default, { createBoard: props.create })
	      )
	    )
	  );
	};
	exports.default = CreateBoard;

/***/ }

})
//# sourceMappingURL=0.69c2d5f659cedd2475cc.hot-update.js.map