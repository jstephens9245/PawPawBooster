webpackHotUpdate(0,{

/***/ 775:
/*!*************************************!*\
  !*** ./client/components/Signup.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Signup = function Signup(props) {
	  var warning = props.warning;
	  return _react2.default.createElement(
	    "form",
	    { className: "form", onSubmit: function onSubmit(e) {
	        props.submitForm(e);
	      } },
	    _react2.default.createElement(
	      "div",
	      { className: "" },
	      _react2.default.createElement(
	        "label",
	        { className: "signup-label" },
	        " Sign up with your email address "
	      )
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement("input", { type: "text", name: "firstName", placeholder: "First name",
	        className: "input signup-input-field",
	        id: "signup-firstname-input-field",
	        onChange: function onChange(e) {
	          props.handleInput(e);
	        },
	        required: true })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement("input", { type: "text", name: "lastName", placeholder: "Last name",
	        className: "signup-input-field",
	        id: "signup-lastname-input-field",
	        onChange: function onChange(e) {
	          props.handleInput(e);
	        },
	        required: true })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement("input", { type: "text", name: "username", placeholder: "Username",
	        className: "signup-input-field",
	        id: "signup-username-input-field",
	        onChange: function onChange(e) {
	          props.handleInput(e);
	        },
	        required: true })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement("input", { type: "email", name: "email", placeholder: "Email",
	        className: "signup-input-field",
	        id: "signup-email-input-field",
	        onChange: function onChange(e) {
	          props.handleInput(e);
	        },
	        required: true })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement("input", { type: "password", name: "password", placeholder: "Password",
	        className: "signup-input-field",
	        id: "signup-password-input-field",
	        onChange: function onChange(e) {
	          props.handleInput(e);
	        },
	        required: true })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "signup-disclaimer-container" },
	      _react2.default.createElement(
	        "label",
	        { className: "signup-disclaimer" },
	        "By clicking on Sign up, you agree to notion's terms & conditions and privacy policy"
	      )
	    ),
	    !!warning && _react2.default.createElement(
	      "div",
	      { className: "alert alert-warning" },
	      warning
	    ),
	    _react2.default.createElement(
	      "button",
	      { className: "signup-submit-button " + props.wobbleError, type: "submit", onClick: function onClick() {
	          console.log(warning);
	          if (warning) {
	            props.wobbler();
	          }
	        } },
	      "SIGN UP"
	    ),
	    _react2.default.createElement(
	      "button",
	      { className: "login-link-container login-link", type: "button",
	        onClick: function onClick() {
	          props.changeForm('login');
	        } },
	      "Already have an account? Login"
	    )
	  );
	};
	
	exports.default = Signup;

/***/ }

})
//# sourceMappingURL=0.360708f9ee3d145cd442.hot-update.js.map