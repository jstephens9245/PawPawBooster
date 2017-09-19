webpackHotUpdate(0,{

/***/ 602:
/*!*****************************************!*\
  !*** ./client/components/CreateNote.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 284);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _bindHandlers = __webpack_require__(/*! ../utils/bindHandlers */ 503);
	
	var _bindHandlers2 = _interopRequireDefault(_bindHandlers);
	
	var _Note = __webpack_require__(/*! ./Note */ 502);
	
	var _Note2 = _interopRequireDefault(_Note);
	
	var _ColorPicker = __webpack_require__(/*! ./ColorPicker */ 603);
	
	var _ColorPicker2 = _interopRequireDefault(_ColorPicker);
	
	var _reactAutosuggest = __webpack_require__(/*! react-autosuggest */ 759);
	
	var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);
	
	var _color = __webpack_require__(/*! color */ 504);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _stringHash = __webpack_require__(/*! ../utils/stringHash */ 571);
	
	var _presetColors = __webpack_require__(/*! ../presetColors.json */ 771);
	
	var _presetColors2 = _interopRequireDefault(_presetColors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var initState = {
	  content: '',
	  mentions: [],
	  parsedContent: [],
	  color: _color2.default.rgb([237, 208, 13]).hex(),
	  caretPos: 0,
	  displayColorPicker: false,
	  hasJoined: false,
	  flickState: false,
	  dragStart: null,
	  position: 0,
	  colorLocked: true
	};
	
	var CreateNote = function (_Component) {
	  _inherits(CreateNote, _Component);
	
	  function CreateNote(props) {
	    _classCallCheck(this, CreateNote);
	
	    var _this = _possibleConstructorReturn(this, (CreateNote.__proto__ || Object.getPrototypeOf(CreateNote)).call(this, props));
	
	    _this.input = {};
	    _this.state = initState;
	    (0, _bindHandlers2.default)(_this, _this.changeHandler, _this.submitHandler, _this.clickHandler, _this.modalClickHandler, _this.updateColor, _this.toggleColorPicker, _this.join, _this.focusHandler, _this.blurHandler, _this.touchStartHandler, _this.touchEndHandler, _this.touchMoveHandler, _this.parseContent, _this.autoComplete);
	    return _this;
	  }
	
	  _createClass(CreateNote, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if ((!this.props.board || (0, _isEmpty2.default)(this.props.board)) && !this.props.location.query.board) {
	        // If no board is selected and no board ID is provided
	        // redirect to myBoards page
	        this.props.router.push('/myboards');
	      } else if (!this.props.board || (0, _isEmpty2.default)(this.props.board)) {
	        // if no board is selected but a board ID is provided
	        // select board by ID
	        this.props.getBoard(this.props.location.query.board);
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // document.addEventListener('keyup', this.updateCursor);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // document.removeEventListener('keyup', this.updateCursor);
	      this.props.clearSocketListeners();
	      this.props.socketDisconnect();
	      this.props.socketEmit('leave', {
	        room: (0, _stringHash.genShortHash)(this.props.board.id),
	        userId: this.props.user.id
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(_ref) {
	      var board = _ref.board,
	          user = _ref.user,
	          queriedUsers = _ref.queriedUsers;
	
	      if (board && user && !(0, _isEmpty2.default)(board) && !(0, _isEmpty2.default)(user) && !this.state.hasJoined) {
	        this.props.socketConnect('board');
	        this.props.addSocketListener('connect', this.join);
	        this.setState({ hasJoined: true });
	      }
	    }
	  }, {
	    key: 'join',
	    value: function join() {
	      var _this2 = this;
	
	      if (Object.keys(this.props.user).length) {
	        if (this.props.permissions.findIndex(function (permission) {
	          return permission.board_id === _this2.props.board.id;
	        }) === -1) {
	          this.props.addUserPermission(this.props.board);
	        }
	      }
	      this.props.socketEmit('join', {
	        room: (0, _stringHash.genShortHash)(this.props.board.id),
	        name: this.props.user.first_name + ' ' + this.props.user.last_name,
	        userId: this.props.user.id
	      });
	    }
	  }, {
	    key: 'toggleColorPicker',
	    value: function toggleColorPicker() {
	      this.setState(function (prevState) {
	        return Object.assign({}, prevState, { displayColorPicker: !prevState.displayColorPicker });
	      });
	    }
	  }, {
	    key: 'updateColor',
	    value: function updateColor(color) {
	      var newState = {};
	      if (typeof color === 'string') newState.color = color;else if (Array.isArray(color)) newState.color = _color2.default.rgb(color).hex();
	      this.setState(newState);
	    }
	  }, {
	    key: 'changeHandler',
	    value: function changeHandler(e) {
	      e.preventDefault();
	      this.parseContent(e.target.value);
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler(e) {
	      e.preventDefault();
	      e.stopPropagation();
	      this.input.focus();
	    }
	  }, {
	    key: 'modalClickHandler',
	    value: function modalClickHandler(e, cb) {
	      e.stopPropagation();
	      if (e.target === e.currentTarget) cb(e);
	    }
	  }, {
	    key: 'focusHandler',
	    value: function focusHandler() {
	
	      this.setState({ focused: true });
	    }
	  }, {
	    key: 'blurHandler',
	    value: function blurHandler() {
	      this.setState({ focused: false });
	    }
	  }, {
	    key: 'touchStartHandler',
	    value: function touchStartHandler(e) {
	      this.setState({ flickState: 'positioning', dragStart: e.touches[0].pageY });
	    }
	  }, {
	    key: 'touchMoveHandler',
	    value: function touchMoveHandler(e) {
	      var dragPosition = e.touches[0].pageY;
	      if (this.state.dragStart && dragPosition < this.state.dragStart) {
	        this.setState({ position: dragPosition - this.state.dragStart });
	      }
	    }
	  }, {
	    key: 'touchEndHandler',
	    value: function touchEndHandler(e) {
	      var _this3 = this;
	
	      var viewportWidth = window.innerWidth ? window.innerWidth : window.screen.width;
	      if (Math.abs(this.state.position) > viewportWidth / 2) {
	        this.setState({ flickState: 'sending', position: -viewportWidth });
	        setTimeout(function () {
	          _this3.submitHandler();
	        }, 100);
	      } else this.setState({ flickState: 'resting', dragStart: null, position: 0 });
	    }
	  }, {
	    key: 'submitHandler',
	    value: function submitHandler(e) {
	      var _this4 = this;
	
	      if (e) e.preventDefault();
	
	      this.setState({
	        flickState: 'positioning',
	        position: window.innerHeight || window.screen.height
	      });
	      this.props.createNote({
	        content: this.state.content,
	        color: this.state.color,
	        mentions: this.state.mentions
	      }, this.props.board.id).then(function () {
	        var newState = { flickState: 'returning', colorLocked: _this4.state.colorLocked };
	        if (_this4.state.colorLocked) newState.color = _this4.state.color;
	        _this4.setState(Object.assign({}, initState, newState));
	      });
	    }
	  }, {
	    key: 'parseContent',
	    value: function parseContent(content) {
	      var caretPos = this.input.selectionStart;
	      var users = this.props.queriedUsers;
	      var parsedContent = [];
	      var currentWord = '';
	
	      for (var i = 0; i < content.length; i++) {
	        var char = content[i];
	        var startIndex = i;
	
	        if (char === '@') {
	          do {
	            currentWord += char;
	            i++;
	            char = content[i];
	          } while (char !== ' ' && i < content.length);
	          var tail = trimTail(currentWord.slice(1));
	          currentWord = currentWord.slice(0, -tail.length || undefined);
	
	          if (caretPos > startIndex && caretPos <= startIndex + currentWord.length) {
	            this.props.searchUsername(currentWord.slice(1));
	            parsedContent.push({ content: currentWord, isMention: true, isSuggesting: true });
	          } else {
	            parsedContent.push({ content: currentWord, isMention: true, isSuggesting: false });
	          }
	          parsedContent.push({ content: tail + (char || '') });
	        } else {
	          currentWord = '';
	          parsedContent.push({ content: char });
	        }
	      }
	
	      this.setState({ content: content, caretPos: caretPos, parsedContent: parsedContent });
	    }
	  }, {
	    key: 'autoComplete',
	    value: function autoComplete(find, replace, id) {
	      var content = this.state.content.replace(find, replace);
	      this.setState(function (state) {
	        return Object.assign({}, state, { mentions: [].concat(_toConsumableArray(state.mentions), [id]) });
	      });
	      this.parseContent(content);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;
	
	      var colorLocked = this.state.colorLocked;
	
	      var suggestedUsers = this.props.queriedUsers;
	      var noteWrapperStyle = { zIndex: 1 };
	      noteWrapperStyle.transform = 'rotate(' + this.state.position * 0.02 + 'deg)';
	      noteWrapperStyle.top = this.state.position;
	
	      switch (this.state.flickState) {
	        case 'positioning':
	          break;
	        case 'sending':
	          noteWrapperStyle.transition = 'all 0.1s ease-in';
	          break;
	        case 'returning':
	          noteWrapperStyle.top = 0;
	          noteWrapperStyle.transition = 'all 0.25s ease-in-out';
	          break;
	        default:
	          noteWrapperStyle.transition = 'all 0.25s ease-in-out';
	      }
	      var value = '/boards/' + this.props.board.hash;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/boards/' + this.props.board.hash },
	          _react2.default.createElement(
	            'h1',
	            { className: ' noteTitle center' },
	            this.props.board ? this.props.board.name : ''
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4' },
	            _react2.default.createElement(
	              'button',
	              { onClick: function onClick() {
	                  _this5.setState({ content: '', parsedContent: [] });
	                }, className: 'c-note__clear-btn' },
	              'clear note'
	            ),
	            _react2.default.createElement(
	              'div',
	              {
	                className: 'c-note---createwrapper',
	                style: noteWrapperStyle,
	                onClick: !!this.input && this.clickHandler,
	                onTouchStart: this.touchStartHandler,
	                onTouchMove: this.touchMoveHandler,
	                onTouchEnd: this.touchEndHandler },
	              _react2.default.createElement(
	                _Note2.default,
	                {
	                  editable: true,
	                  color: this.state.color },
	                _react2.default.createElement(
	                  'div',
	                  null,
	                  this.state.parsedContent.map(function (part) {
	                    if (part.isMention && part.isSuggesting) {
	                      return _react2.default.createElement(
	                        'span',
	                        { className: 'c-mention c-mention--suggesting' },
	                        part.content,
	                        _react2.default.createElement(
	                          'ul',
	                          { className: 'c-mention__suggestions' },
	                          suggestedUsers.map(function (user) {
	                            return _react2.default.createElement(
	                              'li',
	                              null,
	                              _react2.default.createElement(
	                                'button',
	                                { onClick: function onClick() {
	                                    return _this5.autoComplete(part.content, '@' + user.username, user.id);
	                                  } },
	                                '@',
	                                user.username
	                              )
	                            );
	                          })
	                        )
	                      );
	                    } else if (part.isMention) {
	                      return _react2.default.createElement(
	                        'span',
	                        { className: 'c-mention' },
	                        part.content
	                      );
	                    } else return part.content;
	                  })
	                )
	              ),
	              _react2.default.createElement('input', { type: 'text',
	                value: this.state.content,
	                className: 'c-note__input',
	                ref: function ref(input) {
	                  _this5.input = input;
	                },
	                onFocus: this.focusHandler,
	                onBlur: this.blurHandler,
	                onChange: this.changeHandler })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'clearfix', style: { margin: '0.25em auto' } },
	              _react2.default.createElement('button', {
	                onClick: this.toggleColorPicker,
	                className: 'btn btn-color',
	                style: { background: this.state.color } }),
	              _react2.default.createElement(
	                'label',
	                { htmlFor: 'lock-color', className: 'c-checkbox ' + (colorLocked ? 'c-checkbox--checked' : '') + ' right' },
	                'Lock Color'
	              ),
	              _react2.default.createElement('input', { onChange: function onChange() {
	                  console.log('SDFHGSFJHSDFGJAGSRHJSFDGJGF', _this5.state.colorLocked);
	                  _this5.setState({ colorLocked: !_this5.state.colorLocked });
	                }, id: 'lock-color', className: 'c-checkbox__input', type: 'checkbox', name: 'lock-color', checked: colorLocked })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'row' },
	              _react2.default.createElement(
	                'button',
	                {
	                  onClick: this.submitHandler,
	                  className: 'btn btn-primary block ml-auto mr-auto',
	                  style: { width: '90%' } },
	                'Submit Note'
	              )
	            )
	          ),
	          this.state.displayColorPicker && _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'div',
	              { className: 'c-color-picker__wrapper c-color-picker__wrapper--modal',
	                onClick: function onClick(e) {
	                  _this5.modalClickHandler(e, _this5.toggleColorPicker);
	                } },
	              _react2.default.createElement(_ColorPicker2.default, {
	                color: this.state.color,
	                updateColor: this.updateColor,
	                presets: _presetColors2.default,
	                toggle: this.toggleColorPicker })
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return CreateNote;
	}(_react.Component);
	
	exports.default = CreateNote;
	
	
	function trimTail(str) {
	  var tail = '';
	
	  for (var i = 0; i < str.length; i++) {
	    if (str[i].match(/[^A-Za-z0-9_]/)) {
	      tail = str.slice(i);
	      break;
	    }
	  }
	
	  return tail;
	}

/***/ }

})
//# sourceMappingURL=0.03ee55cde69b53a7e80c.hot-update.js.map