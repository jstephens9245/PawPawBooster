webpackHotUpdate(0,{

/***/ 9:
/*!***********************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./client/styles/main.scss ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 4)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Comfortaa);", ""]);
	
	// module
	exports.push([module.id, "/** Settings\n */\n/** Tools\n * Mixins / Functions\n */\n/** Generic\n * Resets\n */\nbody {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  position: relative;\n  box-sizing: inherit; }\n\n/** Base\n * Element styles (no classes)\n */\n/** Objects\n * Reusable layout patterns\n * class prefix: `o-`\n */\n.o-aspect-ratio, .c-color-picker {\n  display: block; }\n\n.o-aspect-ratio__inner, .c-color-picker__inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.o-aspect-ratio--sq, .c-color-picker {\n  padding: 100% 0 0 0; }\n\n.o-aspect-ratio--2-1 {\n  padding: 50% 0 0 0; }\n\n.o-aspect-ratio--1-2 {\n  padding: 200% 0 0 0; }\n\n/** Components\n * Patterns with a visual design\n * class prefix: `c-`\n */\n.btn-color {\n  width: 5em;\n  height: 3em;\n  box-sizing: border-box;\n  border: 0.5em solid #ffffff;\n  box-shadow: 0 0 0.2em 0 #363636; }\n\n.navbar {\n  border-bottom: 1px solid black;\n  margin-bottom: 0;\n  background: #ffffff; }\n\n.navbar a {\n  color: #363636; }\n\n.icon-bar {\n  background-color: black; }\n\n.navbar-toggle {\n  border-color: black; }\n\n.navClass {\n  top: -100%;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n.navToggle {\n  top: 0; }\n\n@media screen and (min-width: 768px) {\n  .navbarGearIcon {\n    display: none; } }\n\n.trashcan_img {\n  max-height: 5rem;\n  max-width: 5rem;\n  -webkit-align-content: \"center\";\n      -ms-flex-line-pack: \"center\";\n          align-content: \"center\";\n  margin: auto; }\n\n.homepage-container {\n  overflow: hidden;\n  position: relative;\n  font-family: \"Open Sans\", sans-serif; }\n\n.homepage-main-image-container {\n  position: relative; }\n\n.homepage-main-image {\n  width: 100vw;\n  max-width: 100%; }\n\n.main-slogan {\n  position: absolute;\n  top: 10%;\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n  z-index: 999;\n  width: 100%;\n  text-shadow: 1px 1px 10px #000; }\n\n.main-mini-desc {\n  position: absolute;\n  top: 20%;\n  font-style: italic;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  z-index: 999;\n  width: 100%;\n  text-shadow: 1px 1px 10px #000; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.main-signup-button-container {\n  position: absolute;\n  top: 40%;\n  font-size: 1.8rem;\n  width: 100%;\n  text-align: center; }\n\n.main-signup-button {\n  width: 80%;\n  border-radius: 500px;\n  background-color: #FFFFA5;\n  color: #333333;\n  font-weight: bold;\n  font-family: \"Permanent Marker\";\n  border: none;\n  padding: 1.5rem 3rem;\n  cursor: pointer; }\n\n.main-signup-button:hover {\n  background-color: #333333;\n  color: #FFFFA5; }\n\n.postit-view {\n  position: absolute;\n  top: 70%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: \"Caveat Brush\"; }\n\n.bulb-img {\n  width: 100%;\n  vertical-align: top; }\n\n.postit {\n  box-sizing: border-box;\n  margin: 0.2em;\n  min-width: 3.9rem;\n  max-width: 3.9rem;\n  height: 3.9rem;\n  padding: 0.1em;\n  border: 1px solid #E8E8E8;\n  font-size: 1.8rem;\n  text-align: center;\n  border-bottom-right-radius: 60px 5px;\n  vertical-align: middle; }\n\n.postit:nth-child(even) {\n  -webkit-transform: rotate(4deg);\n  -moz-transform: rotate(4deg); }\n\n.postit:nth-child(odd) {\n  -webkit-transform: rotate(-4deg);\n  -moz-transform: rotate(-4deg); }\n\n.yellow {\n  background: -webkit-linear-gradient(315deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%); }\n\n.lightyellow {\n  background: -webkit-linear-gradient(315deg, #ffffa5 81%, #ffffa5 82%, #ffffa5 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffffa5 81%, #ffffa5 82%, #ffffa5 82%, #ffffc6 100%); }\n\n.pink {\n  background: -webkit-linear-gradient(315deg, #ff879b 81%, #ff879b 82%, #ffc7d0 100%);\n  background: linear-gradient(135deg, #ff879b 81%, #ff879b 82%, #ffc7d0 100%); }\n\n.green {\n  background: -webkit-linear-gradient(315deg, #b1ff87 81%, #b1ff87 82%, #dbffc7 100%);\n  background: linear-gradient(135deg, #b1ff87 81%, #b1ff87 82%, #dbffc7 100%); }\n\n.blue {\n  background: -webkit-linear-gradient(315deg, #b3e8ff 81%, #b3e8ff 82%, #b3e8ff 100%);\n  background: linear-gradient(135deg, #b3e8ff 81%, #b3e8ff 82%, #b3e8ff 100%); }\n\n.brightgreen {\n  background: -webkit-linear-gradient(315deg, #b3ffc0 81%, #b3ffc0 82%, #dbffc7 100%);\n  background: linear-gradient(135deg, #b3ffc0 81%, #b3ffc0 82%, #dbffc7 100%); }\n\n.border-line {\n  width: 90%;\n  border-bottom: 2px solid #7e8890;\n  margin: 0 auto;\n  margin-top: 3em; }\n\n.desc-container {\n  color: #333c4e; }\n\n.left-desc {\n  width: 100%;\n  padding: 0.8em;\n  line-height: 1.5em; }\n\n.left-desc-title {\n  width: 100%;\n  text-align: center;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.left-desc-content {\n  width: 100%;\n  text-align: center;\n  font-weight: 300;\n  color: #7e8890;\n  font-size: 1rem; }\n\n.right-desc {\n  width: 100%; }\n  .right-desc img {\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); }\n\n.right-desc-img {\n  width: 100%; }\n\n.team-desc {\n  display: none; }\n\n@media screen and (min-device-width: 414px) {\n  .main-slogan {\n    letter-spacing: 0.1em;\n    font-size: 1.9rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    font-size: 1.9rem;\n    font-weight: normal; }\n  .main-signup-button {\n    width: 90%;\n    font-size: 1.9rem; }\n  .postit {\n    min-width: 5rem;\n    max-width: 5rem;\n    height: 5rem;\n    font-size: 3rem; } }\n\n@media screen and (min-device-width: 768px) {\n  .main-slogan {\n    letter-spacing: 0.1em;\n    font-size: 4rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    top: 40%;\n    font-size: 2rem;\n    font-weight: normal; }\n  .main-signup-button-container {\n    top: 50%; }\n  .main-signup-button {\n    width: 60%;\n    font-size: 2.5rem; }\n  .postit {\n    min-width: 7rem;\n    max-width: 7rem;\n    height: 7rem;\n    font-size: 3em; }\n  .desc-container {\n    color: #333c4e;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    min-height: 60rem; }\n  .left-desc {\n    width: 50%;\n    padding: 2em 5em;\n    line-height: 3em;\n    height: 28.8rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .left-desc-title {\n    text-align: left;\n    font-weight: 300;\n    font-size: 2rem; }\n  .left-desc-content {\n    width: 100%;\n    text-align: left;\n    font-weight: 300;\n    color: #7e8890;\n    font-size: 1.5rem; }\n  .right-desc {\n    width: 50%;\n    padding: 2em 5em; }\n  .right-desc-img {\n    width: 100%; }\n  .team-desc {\n    display: block;\n    position: fixed;\n    bottom: 0%;\n    width: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    color: #fff;\n    font-weight: 300;\n    text-align: center;\n    height: 4em;\n    line-height: 4em;\n    letter-spacing: 0.2rem; } }\n\n@media screen and (min-device-width: 1024px) {\n  .homepage-main-image {\n    margin: -11rem 0 -10rem 0; }\n  .main-slogan {\n    top: 30%;\n    letter-spacing: 0.1em;\n    font-size: 4rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    font-size: 2rem;\n    font-weight: 300; }\n  .main-signup-button-container {\n    top: 50%; }\n  .main-signup-button {\n    width: 30%;\n    font-size: 2.5rem; }\n  .left-desc {\n    height: 40rem; }\n  .border-line {\n    margin-top: 15rem; }\n  /* typist css */\n  .Typist .Cursor--blinking {\n    opacity: 1;\n    -webkit-animation: blink 1s linear infinite;\n            animation: blink 1s linear infinite; }\n  @-webkit-keyframes blink {\n    0% {\n      opacity: 1; }\n    50% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  @keyframes blink {\n    0% {\n      opacity: 1; }\n    50% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } } }\n\n.addBoard {\n  text-decoration: none;\n  font-size: 1.5em;\n  opacity: 0.5;\n  color: black;\n  text-align: center;\n  background-color: grey;\n  padding-top: 4%;\n  padding-bottom: 4%; }\n  .addBoard:hover, .addBoard:focus {\n    text-decoration: none;\n    color: black; }\n\n.screen {\n  height: 80vh;\n  width: 100%;\n  border: thin solid black;\n  background-color: #ffffff;\n  padding-bottom: 10%;\n  padding-top: 2%;\n  overflow: auto; }\n\n.note {\n  width: 100%;\n  height: 100%; }\n\n.grid {\n  background-color: #EF2D29; }\n\n#table {\n  background-color: #CEE3F8;\n  height: 100vh;\n  width: 100vw; }\n\n.ClipboardBlocking {\n  display: inline-block; }\n\n#table {\n  background-color: #CEE3F8;\n  height: 100vh;\n  width: 100vw; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.signup-form-container {\n  font-family: \"Open Sans\", sans-serif;\n  width: 90vw;\n  height: 65vh;\n  min-height: 28em;\n  background-color: #fff;\n  margin: 0 auto;\n  margin-top: 2em;\n  box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32);\n  border-bottom-right-radius: 60px 10px;\n  border-bottom-left-radius: 60px 10px; }\n\n.signup-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  padding-top: 2em; }\n\n.login-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  padding-top: 1em; }\n\n.signup-input-field {\n  width: 80%;\n  text-align: left;\n  line-height: 2em;\n  height: 2em;\n  display: block;\n  margin: 0 auto;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field {\n  width: 100%;\n  text-align: left;\n  line-height: 2em;\n  display: block;\n  height: 2em;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field:focus {\n  border: 1px solid #4099FF; }\n\n.signup-input-field:focus {\n  border: 1px solid #4099FF; }\n\n.signup-disclaimer-container {\n  font-size: 0.65em;\n  width: 80%;\n  margin: 0 auto; }\n\n.login-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em;\n  font-weight: bold; }\n\n.signup-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em;\n  font-weight: bold; }\n\n.login-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #4099FF;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n.signup-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #4099FF;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n@media screen and (min-device-width: 768px) {\n  .signup-form-container {\n    width: 40vw;\n    height: 50vh;\n    background-color: #fff;\n    margin: 0 auto;\n    margin-top: 2em;\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); } }\n\n.slideIn-appear {\n  margin-top: -500px; }\n\n.slideIn-appear.slideIn-appear-active {\n  margin-top: 0;\n  -webkit-transition: margin-top .5s ease-in;\n  transition: margin-top .5s ease-in; }\n\n.c-note {\n  display: block;\n  background: #edd00d;\n  padding-top: 100%; }\n\n.c-note--focused {\n  box-shadow: 0.1em 0.1em 1em 0 #8c7b08; }\n\n.c-note__inner {\n  display: block;\n  position: absolute;\n  width: calc(100% - 2em);\n  top: 1em;\n  right: 1em;\n  bottom: 1vw;\n  left: 1em;\n  overflow: hidden;\n  border-bottom: solid transparent; }\n\n.c-note__content {\n  display: block;\n  font-size: inherit;\n  word-wrap: break-word;\n  font-family: \"Comfortaa\";\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.c-note__input {\n  position: absolute;\n  left: -200vw;\n  top: -200vh; }\n\n.top {\n  z-index: 2;\n  position: relative; }\n\n.bottom {\n  z-index: 1;\n  position: relative; }\n\n/*!\n * Start Bootstrap - Simple Sidebar HTML Template (http://startbootstrap.com)\n * Code licensed under the Apache License v2.0.\n * For details, see http://www.apache.org/licenses/LICENSE-2.0.\n */\n/* Toggle Styles */\n#wrapper {\n  padding-left: 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled {\n  padding-left: 250px; }\n\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #000;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px; }\n\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px; }\n\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px; }\n\n/* Sidebar Styles */\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px; }\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999; }\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2); }\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none; }\n\n.sidebar-nav > .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px; }\n\n.sidebar-nav > .sidebar-brand a {\n  color: #999999; }\n\n.sidebar-nav > .sidebar-brand a:hover {\n  color: #fff;\n  background: none; }\n\n@media (min-width: 768px) {\n  #wrapper {\n    padding-left: 250px; }\n  #wrapper.toggled {\n    padding-left: 0; }\n  #sidebar-wrapper {\n    width: 250px; }\n  #wrapper.toggled #sidebar-wrapper {\n    width: 0; }\n  #page-content-wrapper {\n    padding: 20px;\n    position: relative; }\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0; } }\n\n.ion-gear-b {\n  border: none;\n  background: white;\n  -webkit-appearance: none; }\n\n.c-color-picker {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  background: #E6E6EF;\n  border-radius: 0.4em;\n  box-shadow: 0 0 0.5em 0 #363636; }\n\n.c-color-picker__wrapper--modal {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n  margin: 0 auto;\n  background: #ffffff; }\n  .c-color-picker__wrapper--modal .c-color-picker {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 80%;\n    padding-top: 80%; }\n\n.c-color-picker__sample {\n  display: block;\n  width: 100%;\n  padding-top: 5%; }\n\n.c-color-picker__saturation {\n  cursor: pointer;\n  padding-top: 30%; }\n\n.c-color-picker__hue {\n  cursor: pointer;\n  padding-top: 10%; }\n\n.c-color-picker__presets {\n  margin-top: 1em; }\n  .c-color-picker__presets::after {\n    content: '';\n    display: block;\n    clear: both; }\n\n.c-color-picker__preset {\n  float: left;\n  width: 13.7%;\n  margin: 1% 3%;\n  padding-top: 13.6%;\n  cursor: pointer;\n  border-radius: 10%; }\n\n.participants-container {\n  display: none; }\n\n.participant-number-container {\n  text-align: center;\n  padding: 0.8em 0;\n  border-bottom: 2px solid black;\n  font-size: 1.5rem; }\n\n.participant-number i {\n  margin: 0 0.6em; }\n\n.participant-list-container {\n  margin: 0.6em;\n  height: 100%; }\n\n.participant-list {\n  list-style-type: none;\n  padding: 0;\n  text-align: left; }\n\n.participant-item {\n  margin: 0.4em 0; }\n\n.participant-image {\n  background: #3a3f41;\n  border-radius: 50%;\n  width: 4rem;\n  height: 4rem;\n  display: inline-block;\n  color: #fff;\n  vertical-align: middle;\n  position: relative; }\n\n.participant {\n  margin: 0 1em;\n  text-align: left;\n  display: inline-block;\n  height: 4rem;\n  line-height: 4rem;\n  vertical-align: middle; }\n\n.participant-icon {\n  text-align: center;\n  position: absolute;\n  top: 30%;\n  left: 32%; }\n\n@media screen and (min-device-width: 1281px) {\n  .participants-container {\n    position: fixed;\n    width: 15vw;\n    height: 100vh;\n    float: right;\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32);\n    display: block;\n    top: 0%;\n    z-index: 1000;\n    background: #fff;\n    margin-top: 3.7em;\n    transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -webkit-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -moz-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05); }\n  .participants-container-show {\n    right: 0%; }\n  .participants-container-hide {\n    right: -14.5%; } }\n\n/** Controls\n * Override / Helper / Utility classes\n * class prefix: `ctrl-`\n */\n.ctrl-centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n", ""]);
	
	// exports


/***/ },

/***/ 217:
/*!***************************!*\
  !*** ./client/Routes.jsx ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Routes;
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ./store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 312);
	
	var _HomepageContainer = __webpack_require__(/*! ./containers/HomepageContainer */ 365);
	
	var _HomepageContainer2 = _interopRequireDefault(_HomepageContainer);
	
	var _BoardContainer = __webpack_require__(/*! ./containers/BoardContainer */ 367);
	
	var _BoardContainer2 = _interopRequireDefault(_BoardContainer);
	
	var _CreateBoardContainer = __webpack_require__(/*! ./containers/CreateBoardContainer */ 579);
	
	var _CreateBoardContainer2 = _interopRequireDefault(_CreateBoardContainer);
	
	var _CreateNoteContainer = __webpack_require__(/*! ./containers/CreateNoteContainer */ 584);
	
	var _CreateNoteContainer2 = _interopRequireDefault(_CreateNoteContainer);
	
	var _ViewNoteContainer = __webpack_require__(/*! ./containers/ViewNoteContainer */ 744);
	
	var _ViewNoteContainer2 = _interopRequireDefault(_ViewNoteContainer);
	
	var _SignupContainer = __webpack_require__(/*! ./containers/SignupContainer */ 746);
	
	var _SignupContainer2 = _interopRequireDefault(_SignupContainer);
	
	var _MobileBoardViewContainer = __webpack_require__(/*! ./containers/MobileBoardViewContainer */ 769);
	
	var _MobileBoardViewContainer2 = _interopRequireDefault(_MobileBoardViewContainer);
	
	var _board = __webpack_require__(/*! ./actions/board */ 583);
	
	var _note = __webpack_require__(/*! ./actions/note */ 525);
	
	var _user = __webpack_require__(/*! ./actions/user */ 552);
	
	var _Index = __webpack_require__(/*! ./components/Index */ 762);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//onEnters
	
	
	//action-creators
	function indexEnter() {
	  _store2.default.dispatch((0, _user.checkLoginStatus)());
	}
	
	//components
	
	// import {getNotes} from './actions/noteboard';
	
	
	//containers
	
	
	function onBoardEnter(nextRouterState) {
	  var boardHash = nextRouterState.params.boardHash;
	  _store2.default.dispatch((0, _board.getBoard)(boardHash));
	  if (!_store2.default.getState().noteReducer.all.length) {
	    _store2.default.dispatch((0, _note.getAllNotes)({ boardHash: boardHash }));
	  }
	}
	
	function onMyBoardEnter(nextRouterState) {
	  _store2.default.dispatch((0, _board.getAllBoards)());
	}
	
	function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Index2.default, onEnter: indexEnter },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomepageContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _SignupContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/myboards', component: _CreateBoardContainer2.default, onEnter: onMyBoardEnter }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/boards/:boardHash', component: _BoardContainer2.default, onEnter: onBoardEnter }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/note' },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _CreateNoteContainer2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: ':id', component: _ViewNoteContainer2.default })
	      )
	    )
	  );
	}

/***/ },

/***/ 227:
/*!*****************************!*\
  !*** ./client/constants.js ***!
  \*****************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* SHARED CONSTANTS */
	var CLEAR_STORE = exports.CLEAR_STORE = 'CLEAR_STORE';
	var TOGGLE_CLICK = exports.TOGGLE_CLICK = 'TOGGLE_CLICK';
	
	/* COMMENTS CONSTANTS */
	var RECEIVE_COMMENT = exports.RECEIVE_COMMENT = 'RECEIVE_COMMENT';
	var ADD_NEW_COMMENT = exports.ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
	
	/* BOARD CONSTANTS */
	var RECEIVE_BOARD = exports.RECEIVE_BOARD = 'RECEIVE_BOARD';
	var RECEIVE_BOARDS = exports.RECEIVE_BOARDS = 'RECEIVE_BOARDS';
	var ADD_NEW_BOARD = exports.ADD_NEW_BOARD = 'ADD_NEW_BOARD';
	var RECEIVE_BOARD_NOTES = exports.RECEIVE_BOARD_NOTES = 'RECEIVE_BOARD_NOTES';
	
	/* NOTE CONSTANTS */
	var SELECT_NOTE = exports.SELECT_NOTE = 'SELECT_NOTE';
	var RECEIVE_NOTE = exports.RECEIVE_NOTE = 'RECEIVE_NOTE';
	var RECEIVE_NOTES = exports.RECEIVE_NOTES = 'RECEIVE_NOTES';
	var ADD_NOTE_TO_BOARD = exports.ADD_NOTE_TO_BOARD = 'ADD_NOTE_TO_BOARD';
	var SET_NOTE_COORDS = exports.SET_NOTE_COORDS = 'SET_NOTE_COORDS';
	var NOTE_ARRAY_INDEX_PUSH = exports.NOTE_ARRAY_INDEX_PUSH = 'NOTE_ARRAY_INDEX_PUSH';
	var DELETE_NOTE = exports.DELETE_NOTE = 'DELETE_NOTE';
	
	/* USER CONSTANTS */
	var SET_LOGIN_USER = exports.SET_LOGIN_USER = 'SET_LOGIN_USER';
	var REMOVE_LOGIN_USER = exports.REMOVE_LOGIN_USER = 'REMOVE_LOGIN_USER';
	
	/* NOTEBOARD CONSTANTS */
	var MOVE_NOTE = exports.MOVE_NOTE = 'MOVE_NOTE';
	var RECEIVE_MYBOARDS_NOTES = exports.RECEIVE_MYBOARDS_NOTES = 'RECEIVE_MYBOARDS_NOTES';
	
	/* ITEM TYPES FOR REACT DND*/
	var NOTE = exports.NOTE = 'note';
	
	/* SOCKETS */
	var EMIT = exports.EMIT = 'EMIT';
	var CONNECT = exports.CONNECT = 'CONNECT';
	var ADD_LISTENER = exports.ADD_LISTENER = 'ADD_LISTENER';
	var REMOVE_LISTENER = exports.REMOVE_LISTENER = 'REMOVE_LISTENER';

/***/ },

/***/ 229:
/*!****************************************!*\
  !*** ./client/reducers/noteReducer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = noteReducer;
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initState = {
	  all: [],
	  selected: null,
	  allBoardSpecificNotes: {},
	  deletedNotes: []
	
	};
	
	function noteReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	  var action = arguments[1];
	
	  var nextState = Object.assign({}, state);
	
	  switch (action.type) {
	    case _constants.RECEIVE_NOTE:
	      nextState.all = [].concat(_toConsumableArray(nextState.all), [action.payload]);
	      break;
	
	    case _constants.ADD_NEW_COMMENT:
	      var commentArr = nextState.all[action.noteId].comments;
	      nextState.all[action.noteId].comments = [].concat(_toConsumableArray(commentArr), [action.comment]);
	      break;
	
	    case _constants.RECEIVE_NOTES:
	      nextState.all = action.payload;
	      break;
	
	    case _constants.SELECT_NOTE:
	      nextState.selected = nextState.all.find(function (note) {
	        return note.id == action.payload.noteId;
	      });
	      break;
	
	    case _constants.MOVE_NOTE:
	      nextState.all = nextState.all.map(function (note) {
	        var keyId = note.id;
	        if (action.notes[keyId]) {
	          return Object.assign({}, note, { left: action.notes[keyId].left, top: action.notes[keyId].top });
	        } else {
	          return note;
	        }
	      });
	      break;
	
	    case _constants.ADD_NOTE_TO_BOARD:
	      var newNote = action.newNote;
	      nextState.all = [].concat(_toConsumableArray(nextState.all), [newNote]);
	
	      break;
	
	    case _constants.NOTE_ARRAY_INDEX_PUSH:
	
	      nextState.all = action.zIndexNotes;
	      break;
	
	    case _constants.SET_NOTE_COORDS:
	      nextState.all = nextState.all.map(function (note) {
	        var keyId = note.id;
	        if (action.notes[keyId]) {
	          return Object.assign({}, note, { left: action.notes[keyId].left, top: action.notes[keyId].top });
	        } else {
	          return note;
	        }
	      });
	      break;
	
	    case _constants.DELETE_NOTE:
	
	      nextState.deletedNotes = [].concat(_toConsumableArray(nextState.deletedNotes), [action.deletedNote]);
	      break;
	
	    default:
	      return state;
	  }
	
	  return nextState;
	}

/***/ },

/***/ 499:
/*!*************************************************!*\
  !*** ./client/containers/NoteBoardContainer.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 369);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 312);
	
	var _axios = __webpack_require__(/*! axios */ 526);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _NoteWrapper = __webpack_require__(/*! ../components/NoteWrapper */ 500);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _DraggableNote = __webpack_require__(/*! ../components/DraggableNote */ 523);
	
	var _DraggableNote2 = _interopRequireDefault(_DraggableNote);
	
	var _snapToGrid3 = __webpack_require__(/*! ../components/snapToGrid */ 524);
	
	var _snapToGrid4 = _interopRequireDefault(_snapToGrid3);
	
	var _note = __webpack_require__(/*! ../actions/note */ 525);
	
	var _user = __webpack_require__(/*! ../actions/user */ 552);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 551);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _flow = __webpack_require__(/*! lodash/flow */ 553);
	
	var _flow2 = _interopRequireDefault(_flow);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 283);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _stringHash = __webpack_require__(/*! ../utils/stringHash */ 569);
	
	var _NoteBoardTrashCan = __webpack_require__(/*! ../components/NoteBoardTrashCan */ 574);
	
	var _NoteBoardTrashCan2 = _interopRequireDefault(_NoteBoardTrashCan);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  height: 1000,
	  width: 1000,
	  position: 'relative'
	};
	
	var trashStyles = {
	  top: 900,
	  left: 900
	};
	
	var noteTarget = {
	  drop: function drop(props, monitor, component) {
	
	    var delta = monitor.getDifferenceFromInitialOffset();
	    var item = monitor.getItem();
	    if (delta === null) {
	      return;
	    } else {
	      var left = Math.round(item.left + delta.x);
	      var top = Math.round(item.top + delta.y);
	      if (props.snapToGrid) {
	        var _snapToGrid = (0, _snapToGrid4.default)(left, top);
	
	        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
	
	        left = _snapToGrid2[0];
	        top = _snapToGrid2[1];
	      }
	      props.IndexToZIndex(props.notes, item.id);
	      props.noteMover(item.id, left, top);
	      // const newdata = {[item.id]: {left, top}};
	    }
	  }
	};
	
	var collect = function collect(connector, monitor) {
	
	  return {
	    connectDropTarget: connector.dropTarget(),
	    isOver: monitor.isOver()
	  };
	};
	
	var NoteBoardContainer = function (_Component) {
	  _inherits(NoteBoardContainer, _Component);
	
	  function NoteBoardContainer(props) {
	    _classCallCheck(this, NoteBoardContainer);
	
	    var _this = _possibleConstructorReturn(this, (NoteBoardContainer.__proto__ || Object.getPrototypeOf(NoteBoardContainer)).call(this, props));
	
	    _this.boardUpdate = _this.boardUpdate.bind(_this);
	    _this.participantMoveNote = _this.participantMoveNote.bind(_this);
	
	    return _this;
	  }
	
	  _createClass(NoteBoardContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.socketConnect('board');
	      this.props.addSocketListener('note', this.boardUpdate);
	      this.props.addSocketListener('moveNote', this.participantMoveNote);
	    }
	  }, {
	    key: 'boardUpdate',
	    value: function boardUpdate(note) {
	      if (note.board_id === this.props.board.id) {
	        _store2.default.dispatch((0, _note.addNoteToBoard)(note));
	      }
	    }
	  }, {
	    key: 'participantMoveNote',
	    value: function participantMoveNote(data) {
	      var key = Object.keys(data);
	      var left = void 0;
	      var top = void 0;
	      var coordObj = data[key];
	      for (var coords in coordObj) {
	        if (coords === 'left') {
	          left = coordObj[coords];
	        } else {
	          top = coordObj[coords];
	        }
	      }
	      _store2.default.dispatch((0, _note.moveNote)(Number(key[0]), left, top));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.clearSocketListeners();
	      this.props.socketDisconnect();
	      (0, _note.deleteNotesFromDatabase)(this.props.deletedNotes);
	    }
	  }, {
	    key: 'renderNote',
	    value: function renderNote(item, key, index) {
	
	      return _react2.default.createElement(
	        _DraggableNote2.default,
	        _extends({ key: key, id: key }, item),
	        item.content
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          notesDelete = _props.notesDelete,
	          movedNote = _props.movedNote,
	          notes = _props.notes,
	          connectDropTarget = _props.connectDropTarget;
	
	      return connectDropTarget(_react2.default.createElement(
	        'div',
	        { style: styles },
	        notes.map(function (note) {
	          return _this2.renderNote(note, note.id);
	        }),
	        _react2.default.createElement(
	          'div',
	          { className: 'trashcan' },
	          _react2.default.createElement(_NoteBoardTrashCan2.default, { style: trashStyles, notesDelete: notesDelete, notes: notes })
	        )
	      ));
	    }
	  }]);
	
	  return NoteBoardContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	
	  return {
	    notes: state.noteReducer.all.filter(function (note) {
	      return ownProps.board.id === note.board_id;
	    }),
	    user: state.userReducer.loggedInUser,
	    zIndexNotes: state.noteReducer.zIndexNotes,
	    deletedNotes: state.noteReducer.deletedNotes
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ noteMover: _note.noteMover, notesDelete: _note.notesDelete, participantMoveNote: _note.participantMoveNote, socketConnect: _socketio.socketConnect, socketEmit: _socketio.socketEmit, clearSocketListeners: _socketio.clearSocketListeners, socketDisconnect: _socketio.socketDisconnect, addSocketListener: _socketio.addSocketListener, addNoteToBoard: _note.addNoteToBoard, IndexToZIndex: _note.IndexToZIndex }, dispatch);
	};
	
	exports.default = (0, _flow2.default)((0, _reactDnd.DropTarget)(_constants.NOTE, noteTarget, collect), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(NoteBoardContainer);

/***/ },

/***/ 501:
/*!***********************************!*\
  !*** ./client/components/Note.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Note;
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _bindHandlers = __webpack_require__(/*! ../utils/bindHandlers */ 502);
	
	var _bindHandlers2 = _interopRequireDefault(_bindHandlers);
	
	var _color = __webpack_require__(/*! color */ 503);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Note(props) {
	  var content = props.content,
	      focused = props.focused;
	
	  var color = props.color ? props.color.replace(/^#*/, '#') : '#EDD00D';
	  var hslArr = (0, _color2.default)(color).hsl().array();
	  hslArr[2] = hslArr[2] > 32 ? 25 : 85;
	  var noteStyle = {
	    backgroundColor: color,
	    color: _color2.default.hsl(hslArr).rotate(180).hex()
	  };
	
	  return _react2.default.createElement(
	    'div',
	    {
	      className: 'c-note ' + (focused ? 'c-note--focused' : ''),
	      style: noteStyle },
	    _react2.default.createElement(
	      'div',
	      { className: 'c-note__inner' },
	      _react2.default.createElement(
	        'div',
	        { className: 'c-note__content' },
	        content
	      )
	    )
	  );
	}

/***/ },

/***/ 525:
/*!********************************!*\
  !*** ./client/actions/note.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteNotesFromDatabase = exports.notesDelete = exports.IndexToZIndex = exports.noteMover = exports.deleteNote = exports.setNoteCoords = exports.addNoteToBoard = exports.noteArrayIndexPush = exports.moveNote = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.receiveNote = receiveNote;
	exports.receiveNotes = receiveNotes;
	exports.selectNote = selectNote;
	exports.getNote = getNote;
	exports.getAllNotes = getAllNotes;
	exports.createNote = createNote;
	
	var _axios = __webpack_require__(/*! axios */ 526);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _socketio = __webpack_require__(/*! ./socketio */ 551);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function receiveNote(note) {
	  return {
	    type: _constants.RECEIVE_NOTE,
	    payload: note
	  };
	}
	
	function receiveNotes(notes) {
	  return {
	    type: _constants.RECEIVE_NOTES,
	    payload: notes
	  };
	}
	
	function selectNote(noteId) {
	  return {
	    type: _constants.SELECT_NOTE,
	    payload: { noteId: noteId }
	  };
	}
	
	var moveNote = exports.moveNote = function moveNote(id, left, top) {
	  return {
	    type: _constants.MOVE_NOTE,
	    notes: _defineProperty({}, id, { left: left, top: top })
	  };
	};
	
	var noteArrayIndexPush = exports.noteArrayIndexPush = function noteArrayIndexPush(noteArr) {
	  return {
	    type: _constants.NOTE_ARRAY_INDEX_PUSH,
	    zIndexNotes: noteArr
	  };
	};
	
	var addNoteToBoard = exports.addNoteToBoard = function addNoteToBoard(note) {
	  return {
	    type: _constants.ADD_NOTE_TO_BOARD,
	    newNote: note
	  };
	};
	
	var setNoteCoords = exports.setNoteCoords = function setNoteCoords(note) {
	  return {
	    type: _constants.ADD_NOTE_TO_BOARD,
	    note: note
	  };
	};
	
	var deleteNote = exports.deleteNote = function deleteNote(note) {
	  return {
	    type: _constants.DELETE_NOTE,
	    deletedNote: note
	  };
	};
	
	function getNote(noteId) {
	  return function (dispatch) {
	    return _axios2.default.get('/api/notes/' + noteId).then(function (res) {
	      return res.data;
	    }).then(function (note) {
	      return dispatch(receiveNote(note));
	    }).then(function (note) {
	      return Promise.all([note, dispatch(selectNote(noteId))]);
	    }).then(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 1),
	          note = _ref2[0];
	
	      return note;
	    }).catch(function (err) {
	      return console.warn(err);
	    });
	  };
	}
	
	var noteMover = exports.noteMover = function noteMover(id, left, top) {
	  var data = _defineProperty({}, id, { left: left, top: top });
	
	  return function (dispatch) {
	    dispatch((0, _socketio.socketEmit)('moveNote', data));
	    dispatch(moveNote(id, left, top));
	  };
	};
	
	var IndexToZIndex = exports.IndexToZIndex = function IndexToZIndex(notes, dragNoteId) {
	  return function (dispatch) {
	
	    var newNoteArr = notes;
	    var dragNoteIndex = notes.map(function (note) {
	      return note.id;
	    }).indexOf(dragNoteId);
	    var dragNote = notes[dragNoteIndex];
	
	    newNoteArr.splice(dragNoteIndex, 1);
	    newNoteArr.push(dragNote);
	
	    dispatch(noteArrayIndexPush(newNoteArr));
	  };
	};
	
	var notesDelete = exports.notesDelete = function notesDelete(noteId, notes) {
	  return function (dispatch) {
	    var newArr = notes;
	    var deleteNoteId = noteId;
	    var deleteNoteIndex = notes.map(function (note) {
	      return note.id;
	    }).indexOf(deleteNoteId);
	    var deletedNote = notes[deleteNoteIndex];
	
	    newArr.splice(deleteNoteIndex, 1);
	    dispatch(deleteNote(deletedNote));
	    dispatch(receiveNotes(newArr));
	  };
	};
	
	var deleteNotesFromDatabase = exports.deleteNotesFromDatabase = function deleteNotesFromDatabase(deleteNotesArr) {
	  deleteNotesArr.forEach(function (note) {
	    _axios2.default.delete('/api/notes/' + note.id).then(function (deleted) {
	      return console.log('DELETED NOTES', deleted);
	    }).catch(function (err) {
	      return console.log('deleteNotes from datatbase had an error');
	    });
	  });
	};
	
	function getAllNotes(_ref3) {
	  var userId = _ref3.userId,
	      boardId = _ref3.boardId;
	
	  return function (dispatch) {
	    return _axios2.default.get('/api/notes/', { params: { userId: userId, boardId: boardId } }).then(function (res) {
	      return res.data;
	    }).then(function (notes) {
	      return dispatch(receiveNotes(notes));
	    }).catch(function (err) {
	      return console.warn(err);
	    });
	  };
	}
	
	function createNote(note, boardId) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/notes/', {
	      content: note.content,
	      color: note.color,
	      boardId: boardId || note.boardId
	    }).then(function (_ref4) {
	      var data = _ref4.data;
	
	      dispatch((0, _socketio.socketEmit)('note', data));
	    }).catch(function (err) {
	      return console.warn(err);
	    });
	  };
	}

/***/ },

/***/ 574:
/*!************************************************!*\
  !*** ./client/components/NoteBoardTrashCan.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 369);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyle(backgroundColor) {
	  return {
	    // border    : '1px solid rgba(0,0,0,0.2)',
	    minHeight: '5rem',
	    maxHeight: '8rem',
	    minWidth: '5rem',
	    maxWidth: '8rem',
	    color: 'white',
	    backgroundColor: backgroundColor,
	    padding: '2rem',
	    paddingTop: '1rem',
	    margin: '1rem',
	    textAlign: 'center',
	    float: 'left',
	    fontSize: '1rem',
	    top: 900,
	    left: 900
	  };
	}
	
	var noteTarget = {
	  drop: function drop(props, monitor, component) {
	    var hasDroppedOnChild = monitor.didDrop();
	    var item = monitor.getItem();
	    if (hasDroppedOnChild) {}
	    component.setState({
	      hasDropped: true,
	      hasDroppedOnChild: hasDroppedOnChild
	    });
	
	    props.notesDelete(item.id, props.notes);
	  }
	};
	
	var collect = function collect(connect, monitor) {
	  return {
	    connectDropTarget: connect.dropTarget(),
	    isOver: monitor.isOver(),
	    isOverCurrent: monitor.isOver({ shallow: true })
	  };
	};
	
	var TrashCan = function (_Component) {
	  _inherits(TrashCan, _Component);
	
	  function TrashCan(props) {
	    _classCallCheck(this, TrashCan);
	
	    var _this = _possibleConstructorReturn(this, (TrashCan.__proto__ || Object.getPrototypeOf(TrashCan)).call(this, props));
	
	    _this.state = {
	      hasDropped: false,
	      hasDroppedOnChild: false
	    };
	    return _this;
	  }
	
	  _createClass(TrashCan, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          isOver = _props.isOver,
	          isOverCurrent = _props.isOverCurrent,
	          connectDropTarget = _props.connectDropTarget,
	          children = _props.children;
	      var _state = this.state,
	          hasDropped = _state.hasDropped,
	          hasDroppedOnChild = _state.hasDroppedOnChild;
	
	
	      var backgroundColor = 'rgba(0, 0, 0, 0)';
	
	      if (isOverCurrent || isOver) {
	        backgroundColor = 'yellow';
	      }
	
	      return connectDropTarget(_react2.default.createElement(
	        'div',
	        { style: getStyle(backgroundColor) },
	        _react2.default.createElement('br', null),
	        hasDropped && _react2.default.createElement(
	          'span',
	          null,
	          'dropped ',
	          hasDroppedOnChild && ' on child'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          children
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('img', { className: 'trashcan_img', src: '/assets/red-trash-256.png' })
	        )
	      ));
	    }
	  }]);
	
	  return TrashCan;
	}(_react.Component);
	
	exports.default = (0, _reactDnd.DropTarget)(_constants.NOTE, noteTarget, collect)(TrashCan);

/***/ },

/***/ 769:
/*!*******************************************************!*\
  !*** ./client/containers/MobileBoardViewContainer.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 312);
	
	var _axios = __webpack_require__(/*! axios */ 526);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _NoteWrapper = __webpack_require__(/*! ../components/NoteWrapper */ 500);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _snapToGrid = __webpack_require__(/*! ../components/snapToGrid */ 524);
	
	var _snapToGrid2 = _interopRequireDefault(_snapToGrid);
	
	var _note = __webpack_require__(/*! ../actions/note */ 525);
	
	var _user = __webpack_require__(/*! ../actions/user */ 552);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 551);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _flow = __webpack_require__(/*! lodash/flow */ 553);
	
	var _flow2 = _interopRequireDefault(_flow);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 283);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _stringHash = __webpack_require__(/*! ../utils/stringHash */ 569);
	
	var _NoteBoardTrashCan = __webpack_require__(/*! ../components/NoteBoardTrashCan */ 574);
	
	var _NoteBoardTrashCan2 = _interopRequireDefault(_NoteBoardTrashCan);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var noteStyles = {
	  height: 100,
	  width: 100,
	  position: 'relative'
	};
	
	var MobileBoardViewContainer = function (_Component) {
	  _inherits(MobileBoardViewContainer, _Component);
	
	  function MobileBoardViewContainer(props) {
	    _classCallCheck(this, MobileBoardViewContainer);
	
	    var _this = _possibleConstructorReturn(this, (MobileBoardViewContainer.__proto__ || Object.getPrototypeOf(MobileBoardViewContainer)).call(this, props));
	
	    _this.boardUpdate = _this.boardUpdate.bind(_this);
	    _this.participantMoveNote = _this.participantMoveNote.bind(_this);
	    _this.deleteNotesFromDatabase = _this.deleteNotesFromDatabase.bind(_this);
	    return _this;
	  }
	
	  _createClass(MobileBoardViewContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.socketConnect('board');
	      this.props.addSocketListener('note', this.boardUpdate);
	      this.props.addSocketListener('moveNote', this.participantMoveNote);
	    }
	  }, {
	    key: 'deleteNotesFromDatabase',
	    value: function deleteNotesFromDatabase() {
	      this.props.deletedNotes.forEach(function (note) {
	        _axios2.default.delete('/api/notes/' + note.id).catch(function (err) {
	          return console.log('deleteNotes from datatbase had an error');
	        });
	      });
	    }
	  }, {
	    key: 'boardUpdate',
	    value: function boardUpdate(note) {
	      if (note.board_id === this.props.board.id) {
	        _store2.default.dispatch((0, _note.addNoteToBoard)(note));
	      }
	    }
	  }, {
	    key: 'participantMoveNote',
	    value: function participantMoveNote(data) {
	      var key = Object.keys(data);
	      var left = void 0;
	      var top = void 0;
	      var coordObj = data[key];
	      for (var coords in coordObj) {
	        if (coords === 'left') {
	          left = coordObj[coords];
	        } else {
	          top = coordObj[coords];
	        }
	      }
	      _store2.default.dispatch((0, _note.moveNote)(Number(key[0]), left, top));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.clearSocketListeners();
	      this.props.socketDisconnect();
	      this.deleteNotesFromDatabase();
	    }
	  }, {
	    key: 'renderNote',
	    value: function renderNote(item, key, index) {
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NoteWrapper2.default,
	            _extends({ key: key, id: key }, item),
	            item.content
	          )
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var notes = this.props.notes;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'ul',
	          null,
	          notes.map(function (note) {
	            return _this2.renderNote(note, note.id);
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'trashcan' },
	          _react2.default.createElement(_NoteBoardTrashCan2.default, { notesDelete: _note.notesDelete, notes: notes })
	        )
	      );
	    }
	  }]);
	
	  return MobileBoardViewContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	
	  return {
	    notes: state.noteReducer.all.filter(function (note) {
	      return ownProps.board.id === note.board_id;
	    }),
	    user: state.userReducer.loggedInUser,
	    zIndexNotes: state.noteReducer.zIndexNotes,
	    deletedNotes: state.noteReducer.deletedNotes
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ noteMover: _note.noteMover, notesDelete: _note.notesDelete, participantMoveNote: _note.participantMoveNote, socketConnect: _socketio.socketConnect, socketEmit: _socketio.socketEmit, clearSocketListeners: _socketio.clearSocketListeners, socketDisconnect: _socketio.socketDisconnect, addSocketListener: _socketio.addSocketListener, addNoteToBoard: _note.addNoteToBoard, IndexToZIndex: _note.IndexToZIndex }, dispatch);
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MobileBoardViewContainer);

/***/ }

})
//# sourceMappingURL=0.0c026c6fd6396c346985.hot-update.js.map