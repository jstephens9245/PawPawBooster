webpackHotUpdate(0,{

/***/ 776:
/*!************************************!*\
  !*** ./client/components/Login.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Login = function Login(props) {
	  var warning = props.warning;
	  return _react2.default.createElement(
	    "form",
	    { className: "form " + undefined.state.wobbleError, onSubmit: function onSubmit(e) {
	        props.loginForm(e);
	      } },
	    _react2.default.createElement(
	      "div",
	      { className: "" },
	      _react2.default.createElement(
	        "label",
	        { className: "login-label" },
	        " Login with your email address "
	      )
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement("input", { type: "email", name: "email", placeholder: "E-mail",
	        className: "signup-input-field",
	        id: "login-email-input-field",
	        onChange: function onChange(e) {
	          props.handleInput(e);
	        },
	        required: true })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement("input", {
	        type: "password",
	        name: "password",
	        placeholder: "password",
	        className: "signup-input-field",
	        id: "login-password-input-field",
	        onChange: function onChange(e) {
	          props.handleInput(e);
	        },
	        required: true })
	    ),
	    warning && _react2.default.createElement(
	      "div",
	      { className: "alert alert-warning" },
	      warning
	    ),
	    _react2.default.createElement(
	      "button",
	      { className: 'login-submit-button', type: "submit", onClick: function onClick() {
	          // console.log(warning);
	          // if (warning) {
	          props.wobbler();
	          // }
	        } },
	      "Login"
	    ),
	    _react2.default.createElement(
	      "button",
	      { className: "signup-link-container signup-link", type: "button",
	        onClick: function onClick() {
	          props.changeForm('signup');
	        } },
	      "Don't have an account? Signup"
	    )
	  );
	};
	
	exports.default = Login;

/***/ }

})
//# sourceMappingURL=0.f64bdd5317cec637d1ce.hot-update.js.map