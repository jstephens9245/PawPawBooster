webpackHotUpdate(0,{

/***/ 293:
/*!********************************!*\
  !*** ./client/actions/user.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.searchUsername = exports.logoutUser = exports.loginUser = exports.createUser = exports.receiveUserQuery = exports.removeLoginUser = exports.setLoginUser = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 294);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 237);
	
	var _constants = __webpack_require__(/*! ../constants */ 235);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var setLoginUser = exports.setLoginUser = function setLoginUser(user) {
	  return {
	    type: _constants.SET_LOGIN_USER,
	    user: user
	  };
	};
	
	var removeLoginUser = exports.removeLoginUser = function removeLoginUser() {
	  return {
	    type: _constants.REMOVE_LOGIN_USER
	  };
	};
	
	var receiveUserQuery = exports.receiveUserQuery = function receiveUserQuery(matchedUsers) {
	  return {
	    type: _constants.RECEIVE_USER_QUERY,
	    payload: matchedUsers
	  };
	};
	
	var createUser = exports.createUser = function createUser(firstName, lastName, email, username, password) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/user/', { first_name: firstName, last_name: lastName, username: username, email: email, password: password }).then(function (res) {
	      dispatch(setLoginUser(res.data));
	    }).catch(function (err) {
	      console.error(err);return err;
	    });
	  };
	};
	
	var loginUser = exports.loginUser = function loginUser(email, password) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/auth/', { email: email, password: password }).then(function (res) {
	      dispatch(setLoginUser(res.data));
	    }).catch(function (err) {
	      return err;
	    });
	  };
	};
	
	var logoutUser = exports.logoutUser = function logoutUser() {
	  return function (dispatch) {
	    return _axios2.default.delete('/api/auth/').then(function (res) {
	      return dispatch(removeLoginUser(res.data));
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};
	
	var searchUsername = exports.searchUsername = function searchUsername(username) {
	  return function (dispatch) {
	    return _axios2.default.get('/api/user/', {
	      params: {
	        searchUsername: username,
	        limit: 6
	      }
	    }).then(function (res) {
	      dispatch(receiveUserQuery(res.data));
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};
	
	/* check login state by calling server and checking user sessions */
	// export const checkLoginStatus = () => dispatch => {
	//   return axios.get('/api/auth/')
	//     .then(res => {
	//       return res;
	//     })
	//     .then(res => dispatch(setLoginUser(res.data)))
	//     .catch(err => console.error(err));
	// };

/***/ }

})
//# sourceMappingURL=0.7a6c7d7aad8c62034c2e.hot-update.js.map