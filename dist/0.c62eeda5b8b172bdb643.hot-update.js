webpackHotUpdate(0,{

/***/ 283:
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 226);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var boards = [{ id: 1, name: 'board1' }, { id: 2, name: 'board2' }];
	
	var CreateBoard = function CreateBoard(props) {
		// const boards = props.boards;
	
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h3',
				null,
				'Boards'
			),
			_react2.default.createElement(
				'div',
				{ className: 'row' },
				boards && boards.map(function (board) {
					return _react2.default.createElement(
						'div',
						{ className: 'col-xs-4', key: board.id },
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
					{ className: 'col-xs-4' },
					_react2.default.createElement(
						'a',
						{ style: { padding: '0 10% 10% 0', textDecoration: 'none',
								color: 'black', backgroundColor: 'grey' } },
						'+'
					)
				)
			)
		);
	};
	exports.default = CreateBoard;

/***/ }

})
//# sourceMappingURL=0.c62eeda5b8b172bdb643.hot-update.js.map