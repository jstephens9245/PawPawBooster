webpackHotUpdate(0,{

/***/ 577:
/*!****************************************************!*\
  !*** ./client/containers/ParticipantsContainer.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ParticipantsContainer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 312);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 551);
	
	var _Participants = __webpack_require__(/*! ../components/Participants */ 578);
	
	var _Participants2 = _interopRequireDefault(_Participants);
	
	var _stringHash = __webpack_require__(/*! ../utils/stringHash */ 569);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 283);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ParticipantsContainer = exports.ParticipantsContainer = function (_Component) {
	  _inherits(ParticipantsContainer, _Component);
	
	  function ParticipantsContainer(props) {
	    _classCallCheck(this, ParticipantsContainer);
	
	    var _this = _possibleConstructorReturn(this, (ParticipantsContainer.__proto__ || Object.getPrototypeOf(ParticipantsContainer)).call(this, props));
	
	    _this.state = {
	      totalParticipants: 0,
	      participants: [],
	      display: false
	    };
	
	    _this.connect = _this.connect.bind(_this);
	    _this.disconnect = _this.disconnect.bind(_this);
	    _this.joined = _this.joined.bind(_this);
	    _this.getRoomHash = _this.joined.bind(_this);
	    _this.toggleParticipantsMenu = _this.toggleParticipantsMenu.bind(_this);
	    return _this;
	  }
	
	  _createClass(ParticipantsContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.socketConnect('board');
	      this.props.addSocketListener('connect', this.connect);
	      this.props.addSocketListener('disconnect', this.disconnect);
	      this.props.addSocketListener('joined', this.joined);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.socketEmit('leave', {
	        room: (0, _stringHash.genShortHash)(this.props.selectedBoard.id) });
	      this.props.clearSocketListeners();
	      this.props.socketDisconnect();
	    }
	  }, {
	    key: 'connect',
	    value: function connect() {
	      var _this2 = this;
	
	      this.setState({ status: 'connected' });
	      if (false) {
	        _reactRouter.browserHistory.push('/signup');
	      } else if (this.props.selectedBoard && !(0, _isEmpty2.default)(this.props.selectedBoard)) {
	        console.log(this.props.permissions.findIndex(function (permission) {
	          return permission.user_id = _this2.props.loggedInUser;
	        }));
	        this.props.socketEmit('join', {
	          room: (0, _stringHash.genShortHash)(this.props.selectedBoard.id),
	          name: this.props.loggedInUser.first_name + ' ' + this.props.loggedInUser.last_name
	        });
	      }
	    }
	  }, {
	    key: 'disconnect',
	    value: function disconnect() {
	      this.setState({ status: 'disconnected' });
	    }
	  }, {
	    key: 'joined',
	    value: function joined(_ref) {
	      var participants = _ref.participants,
	          totalParticipants = _ref.totalParticipants;
	
	      this.setState({ participants: participants });
	      this.setState({ totalParticipants: totalParticipants });
	    }
	  }, {
	    key: 'toggleParticipantsMenu',
	    value: function toggleParticipantsMenu() {
	      this.setState({ display: !this.state.display });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Participants2.default, {
	        className: 'participants-wrapper',
	        totalParticipants: this.state.totalParticipants,
	        participants: this.state.participants,
	        display: this.state.display,
	        toggleParticipantsMenu: this.toggleParticipantsMenu });
	    }
	  }]);
	
	  return ParticipantsContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    loggedInUser: state.userReducer.loggedInUser,
	    socket: state.socket,
	    selectedBoard: state.board.selectedBoard,
	    permissions: state.board.permissions
	
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    addSocketListener: function addSocketListener(eventName, method) {
	      dispatch((0, _socketio.addSocketListener)(eventName, method));
	    },
	    clearSocketListeners: function clearSocketListeners(eventName, method) {
	      dispatch((0, _socketio.clearSocketListeners)(eventName, method));
	    },
	    socketEmit: function socketEmit(eventName, payload) {
	      dispatch((0, _socketio.socketEmit)(eventName, payload));
	    },
	    socketConnect: function socketConnect(namespace) {
	      dispatch((0, _socketio.socketConnect)(namespace));
	    },
	    socketDisconnect: function socketDisconnect() {
	      dispatch((0, _socketio.socketDisconnect)());
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ParticipantsContainer);

/***/ }

})
//# sourceMappingURL=0.cc2043ed883c5cd021d5.hot-update.js.map