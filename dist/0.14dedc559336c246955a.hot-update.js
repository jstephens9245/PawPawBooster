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
	exports.push([module.id, "/** Settings\n */\n/** Tools\n * Mixins / Functions\n */\n/** Generic\n * Resets\n */\nbody {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  position: relative;\n  box-sizing: inherit; }\n\n/** Base\n * Element styles (no classes)\n */\n/** Objects\n * Reusable layout patterns\n * class prefix: `o-`\n */\n.o-aspect-ratio, .c-color-picker {\n  display: block; }\n\n.o-aspect-ratio__inner, .c-color-picker__inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.o-aspect-ratio--sq, .c-color-picker {\n  padding: 100% 0 0 0; }\n\n.o-aspect-ratio--2-1 {\n  padding: 50% 0 0 0; }\n\n.o-aspect-ratio--1-2 {\n  padding: 200% 0 0 0; }\n\n/** Components\n * Patterns with a visual design\n * class prefix: `c-`\n */\n.btn-color {\n  width: 5em;\n  height: 3em;\n  box-sizing: border-box;\n  border: 0.5em solid #ffffff;\n  box-shadow: 0 0 0.2em 0 #363636; }\n\n.navbar {\n  border-bottom: 1px solid black;\n  margin-bottom: 0;\n  background: #ffffff; }\n\n.navbar a {\n  color: #363636; }\n\n.icon-bar {\n  background-color: black; }\n\n.navbar-toggle {\n  border-color: black; }\n\n.navClass {\n  top: -100%;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n.navToggle {\n  top: 0; }\n\n@media screen and (min-width: 768px) {\n  .navbarGearIcon {\n    display: none; } }\n\n.trashcan_img {\n  max-height: 5rem;\n  max-width: 5rem;\n  -webkit-align-content: \"center\";\n      -ms-flex-line-pack: \"center\";\n          align-content: \"center\";\n  margin: auto; }\n\n.homepage-container {\n  overflow: hidden;\n  position: relative;\n  font-family: \"Open Sans\", sans-serif; }\n\n.homepage-main-image-container {\n  position: relative; }\n\n.homepage-main-image {\n  width: 100vw;\n  max-width: 100%; }\n\n.main-slogan {\n  position: absolute;\n  top: 10%;\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n  z-index: 999;\n  width: 100%;\n  text-shadow: 1px 1px 10px #000; }\n\n.main-mini-desc {\n  position: absolute;\n  top: 20%;\n  font-style: italic;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  z-index: 999;\n  width: 100%;\n  text-shadow: 1px 1px 10px #000; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.main-signup-button-container {\n  position: absolute;\n  top: 40%;\n  font-size: 1.8rem;\n  width: 100%;\n  text-align: center; }\n\n.main-signup-button {\n  width: 80%;\n  border-radius: 500px;\n  background-color: #FFFFA5;\n  color: #333333;\n  font-weight: bold;\n  font-family: \"Permanent Marker\";\n  border: none;\n  padding: 1.5rem 3rem;\n  cursor: pointer; }\n\n.main-signup-button:hover {\n  background-color: #333333;\n  color: #FFFFA5; }\n\n.postit-view {\n  position: absolute;\n  top: 70%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: \"Caveat Brush\"; }\n\n.bulb-img {\n  width: 100%;\n  vertical-align: top; }\n\n.postit {\n  box-sizing: border-box;\n  margin: 0.2em;\n  min-width: 3.9rem;\n  max-width: 3.9rem;\n  height: 3.9rem;\n  padding: 0.1em;\n  border: 1px solid #E8E8E8;\n  font-size: 1.8rem;\n  text-align: center;\n  border-bottom-right-radius: 60px 5px;\n  vertical-align: middle; }\n\n.postit:nth-child(even) {\n  -webkit-transform: rotate(4deg);\n  -moz-transform: rotate(4deg); }\n\n.postit:nth-child(odd) {\n  -webkit-transform: rotate(-4deg);\n  -moz-transform: rotate(-4deg); }\n\n.yellow {\n  background: -webkit-linear-gradient(315deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%); }\n\n.lightyellow {\n  background: -webkit-linear-gradient(315deg, #ffffa5 81%, #ffffa5 82%, #ffffa5 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffffa5 81%, #ffffa5 82%, #ffffa5 82%, #ffffc6 100%); }\n\n.pink {\n  background: -webkit-linear-gradient(315deg, #ff879b 81%, #ff879b 82%, #ffc7d0 100%);\n  background: linear-gradient(135deg, #ff879b 81%, #ff879b 82%, #ffc7d0 100%); }\n\n.green {\n  background: -webkit-linear-gradient(315deg, #b1ff87 81%, #b1ff87 82%, #dbffc7 100%);\n  background: linear-gradient(135deg, #b1ff87 81%, #b1ff87 82%, #dbffc7 100%); }\n\n.blue {\n  background: -webkit-linear-gradient(315deg, #b3e8ff 81%, #b3e8ff 82%, #b3e8ff 100%);\n  background: linear-gradient(135deg, #b3e8ff 81%, #b3e8ff 82%, #b3e8ff 100%); }\n\n.brightgreen {\n  background: -webkit-linear-gradient(315deg, #b3ffc0 81%, #b3ffc0 82%, #dbffc7 100%);\n  background: linear-gradient(135deg, #b3ffc0 81%, #b3ffc0 82%, #dbffc7 100%); }\n\n.border-line {\n  width: 90%;\n  border-bottom: 2px solid #7e8890;\n  margin: 0 auto;\n  margin-top: 3em; }\n\n.desc-container {\n  color: #333c4e; }\n\n.left-desc {\n  width: 100%;\n  padding: 0.8em;\n  line-height: 1.5em; }\n\n.left-desc-title {\n  width: 100%;\n  text-align: center;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.left-desc-content {\n  width: 100%;\n  text-align: center;\n  font-weight: 300;\n  color: #7e8890;\n  font-size: 1rem; }\n\n.right-desc {\n  width: 100%; }\n  .right-desc img {\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); }\n\n.right-desc-img {\n  width: 100%; }\n\n.team-desc {\n  display: none; }\n\n@media screen and (min-device-width: 414px) {\n  .main-slogan {\n    letter-spacing: 0.1em;\n    font-size: 1.9rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    font-size: 1.9rem;\n    font-weight: normal; }\n  .main-signup-button {\n    width: 90%;\n    font-size: 1.9rem; }\n  .postit {\n    min-width: 5rem;\n    max-width: 5rem;\n    height: 5rem;\n    font-size: 3rem; } }\n\n@media screen and (min-device-width: 768px) {\n  .main-slogan {\n    letter-spacing: 0.1em;\n    font-size: 4rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    top: 40%;\n    font-size: 2rem;\n    font-weight: normal; }\n  .main-signup-button-container {\n    top: 50%; }\n  .main-signup-button {\n    width: 60%;\n    font-size: 2.5rem; }\n  .postit {\n    min-width: 7rem;\n    max-width: 7rem;\n    height: 7rem;\n    font-size: 3em; }\n  .desc-container {\n    color: #333c4e;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    min-height: 60rem; }\n  .left-desc {\n    width: 50%;\n    padding: 2em 5em;\n    line-height: 3em;\n    height: 28.8rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .left-desc-title {\n    text-align: left;\n    font-weight: 300;\n    font-size: 2rem; }\n  .left-desc-content {\n    width: 100%;\n    text-align: left;\n    font-weight: 300;\n    color: #7e8890;\n    font-size: 1.5rem; }\n  .right-desc {\n    width: 50%;\n    padding: 2em 5em; }\n  .right-desc-img {\n    width: 100%; }\n  .team-desc {\n    display: block;\n    position: fixed;\n    bottom: 0%;\n    width: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    color: #fff;\n    font-weight: 300;\n    text-align: center;\n    height: 4em;\n    line-height: 4em;\n    letter-spacing: 0.2rem; } }\n\n@media screen and (min-device-width: 1024px) {\n  .homepage-main-image {\n    margin: -11rem 0 -10rem 0; }\n  .main-slogan {\n    top: 30%;\n    letter-spacing: 0.1em;\n    font-size: 4rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    font-size: 2rem;\n    font-weight: 300; }\n  .main-signup-button-container {\n    top: 50%; }\n  .main-signup-button {\n    width: 30%;\n    font-size: 2.5rem; }\n  .left-desc {\n    height: 40rem; }\n  .border-line {\n    margin-top: 15rem; }\n  /* typist css */\n  .Typist .Cursor--blinking {\n    opacity: 1;\n    -webkit-animation: blink 1s linear infinite;\n            animation: blink 1s linear infinite; }\n  @-webkit-keyframes blink {\n    0% {\n      opacity: 1; }\n    50% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  @keyframes blink {\n    0% {\n      opacity: 1; }\n    50% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } } }\n\n.addBoard {\n  text-decoration: none;\n  font-size: 1.5em;\n  opacity: 0.5;\n  color: black;\n  text-align: center;\n  background-color: grey;\n  padding-top: 4%;\n  padding-bottom: 4%; }\n  .addBoard:hover, .addBoard:focus {\n    text-decoration: none;\n    color: black; }\n\n.screen {\n  height: 80vh;\n  width: 100%;\n  border: thin solid black;\n  background-color: #ffffff;\n  padding-bottom: 10%;\n  padding-top: 2%;\n  overflow: auto; }\n\n.note {\n  width: 100%;\n  height: 100%; }\n\n.grid {\n  background-color: #EF2D29; }\n\n#table {\n  background-color: #CEE3F8;\n  height: 100vh;\n  width: 100vw; }\n\n.ClipboardBlocking {\n  display: inline-block; }\n\n#table {\n  background-color: #CEE3F8;\n  height: 100vh;\n  width: 100vw; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.signup-form-container {\n  font-family: \"Open Sans\", sans-serif;\n  width: 90vw;\n  height: 65vh;\n  min-height: 28em;\n  background-color: #fff;\n  margin: 0 auto;\n  margin-top: 2em;\n  box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32);\n  border-bottom-right-radius: 60px 10px;\n  border-bottom-left-radius: 60px 10px; }\n\n.signup-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  padding-top: 2em; }\n\n.login-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  padding-top: 1em; }\n\n.signup-input-field {\n  width: 80%;\n  text-align: left;\n  line-height: 2em;\n  height: 2em;\n  display: block;\n  margin: 0 auto;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field {\n  width: 100%;\n  text-align: left;\n  line-height: 2em;\n  display: block;\n  height: 2em;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field:focus {\n  border: 1px solid #4099FF; }\n\n.signup-input-field:focus {\n  border: 1px solid #4099FF; }\n\n.signup-disclaimer-container {\n  font-size: 0.65em;\n  width: 80%;\n  margin: 0 auto; }\n\n.login-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em;\n  font-weight: bold; }\n\n.signup-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em;\n  font-weight: bold; }\n\n.login-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #4099FF;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n.signup-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #4099FF;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n@media screen and (min-device-width: 768px) {\n  .signup-form-container {\n    width: 40vw;\n    height: 50vh;\n    background-color: #fff;\n    margin: 0 auto;\n    margin-top: 2em;\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); } }\n\n.slideIn-appear {\n  margin-top: -500px; }\n\n.slideIn-appear.slideIn-appear-active {\n  margin-top: 0;\n  -webkit-transition: margin-top .5s ease-in;\n  transition: margin-top .5s ease-in; }\n\n.c-note {\n  display: block;\n  background: #edd00d;\n  padding-top: 100%; }\n\n.c-note--focused {\n  box-shadow: 0.1em 0.1em 1em 0 #8c7b08; }\n\n.c-note__inner {\n  display: block;\n  position: absolute;\n  width: calc(100% - 2em);\n  top: 1em;\n  right: 1em;\n  bottom: 1vw;\n  left: 1em;\n  overflow: hidden;\n  border-bottom: solid transparent; }\n\n.c-note__content {\n  display: block;\n  font-size: inherit;\n  word-wrap: break-word;\n  font-family: \"Comfortaa\";\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: visible;\n  line-height: 1.5em; }\n\n.c-note__input {\n  position: absolute;\n  left: -200vw;\n  top: -200vh; }\n\n.c-mention {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n  padding: 0 0.2em;\n  word-wrap: break-word;\n  background: rgba(230, 230, 239, 0.5);\n  border-radius: 0.2em;\n  overflow: visible; }\n\n.c-mention--suggesting {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.c-mention__suggestions {\n  position: absolute;\n  display: block;\n  padding: 0;\n  margin: 0;\n  top: 100%;\n  left: 0;\n  background: rgba(230, 230, 239, 0.5);\n  border-radius: 0.2em;\n  border-top-left-radius: 0; }\n  .c-mention__suggestions button {\n    border: none;\n    background: none;\n    color: inherit;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit; }\n    .c-mention__suggestions button:hover {\n      color: #edd00d; }\n\n.top {\n  z-index: 2;\n  position: relative; }\n\n.bottom {\n  z-index: 1;\n  position: relative; }\n\n/*!\n * Start Bootstrap - Simple Sidebar HTML Template (http://startbootstrap.com)\n * Code licensed under the Apache License v2.0.\n * For details, see http://www.apache.org/licenses/LICENSE-2.0.\n */\n/* Toggle Styles */\n#wrapper {\n  padding-left: 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled {\n  padding-left: 250px; }\n\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #000;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px; }\n\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px; }\n\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px; }\n\n/* Sidebar Styles */\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px; }\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999; }\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2); }\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none; }\n\n.sidebar-nav > .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px; }\n\n.sidebar-nav > .sidebar-brand a {\n  color: #999999; }\n\n.sidebar-nav > .sidebar-brand a:hover {\n  color: #fff;\n  background: none; }\n\n@media (min-width: 768px) {\n  #wrapper {\n    padding-left: 250px; }\n  #wrapper.toggled {\n    padding-left: 0; }\n  #sidebar-wrapper {\n    width: 250px; }\n  #wrapper.toggled #sidebar-wrapper {\n    width: 0; }\n  #page-content-wrapper {\n    padding: 20px;\n    position: relative; }\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0; } }\n\n.ion-gear-b {\n  border: none;\n  background: white;\n  -webkit-appearance: none; }\n\n.c-color-picker {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  background: #E6E6EF;\n  border-radius: 0.4em;\n  box-shadow: 0 0 0.5em 0 #363636; }\n\n.c-color-picker__wrapper--modal {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n  margin: 0 auto;\n  background: #ffffff; }\n  .c-color-picker__wrapper--modal .c-color-picker {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 80%;\n    padding-top: 80%; }\n\n.c-color-picker__sample {\n  display: block;\n  width: 100%;\n  padding-top: 5%; }\n\n.c-color-picker__saturation {\n  cursor: pointer;\n  padding-top: 30%; }\n\n.c-color-picker__hue {\n  cursor: pointer;\n  padding-top: 10%; }\n\n.c-color-picker__presets {\n  margin-top: 1em; }\n  .c-color-picker__presets::after {\n    content: '';\n    display: block;\n    clear: both; }\n\n.c-color-picker__preset {\n  float: left;\n  width: 13.7%;\n  margin: 1% 3%;\n  padding-top: 13.6%;\n  cursor: pointer;\n  border-radius: 10%; }\n\n.participants-container {\n  display: none; }\n\n.participant-number-container {\n  text-align: center;\n  padding: 0.8em 0;\n  border-bottom: 2px solid black;\n  font-size: 1.5rem; }\n\n.participant-number i {\n  margin: 0 0.6em; }\n\n.participant-list-container {\n  margin: 0.6em;\n  height: 100%; }\n\n.participant-list {\n  list-style-type: none;\n  padding: 0;\n  text-align: left; }\n\n.participant-item {\n  margin: 0.4em 0; }\n\n.participant-image {\n  background: #3a3f41;\n  border-radius: 50%;\n  width: 4rem;\n  height: 4rem;\n  display: inline-block;\n  color: #fff;\n  vertical-align: middle;\n  position: relative; }\n\n.participant {\n  margin: 0 1em;\n  text-align: left;\n  display: inline-block;\n  height: 4rem;\n  line-height: 4rem;\n  vertical-align: middle; }\n\n.participant-icon {\n  text-align: center;\n  position: absolute;\n  top: 30%;\n  left: 32%; }\n\n@media screen and (min-device-width: 1281px) {\n  .participants-container {\n    position: fixed;\n    width: 15vw;\n    height: 100vh;\n    float: right;\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32);\n    display: block;\n    top: 0%;\n    z-index: 1000;\n    background: #fff;\n    margin-top: 3.7em;\n    transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -webkit-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -moz-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05); }\n  .participants-container-show {\n    right: 0%; }\n  .participants-container-hide {\n    right: -14.5%; } }\n\n.board-page-container {\n  position: relative; }\n\n.note-details-close-btn {\n  position: absolute;\n  top: 1%;\n  right: 1%;\n  background-color: #192C46;\n  border-radius: 50%;\n  color: white;\n  border: 0; }\n\n.note-details-container {\n  font-family: \"Open Sans\", sans-serif;\n  padding: 1.5em;\n  margin: 0.5em auto;\n  border-radius: 2px;\n  background: -webkit-linear-gradient(135deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%);\n  background: linear-gradient(-45deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%);\n  border: 0;\n  z-index: 99999; }\n\n.note-details-note {\n  padding: 0.5em;\n  height: 20vh;\n  width: 100%;\n  margin: 0 auto;\n  border-radius: 7px;\n  word-wrap: break-word; }\n\n.comment-form {\n  margin-top: 0.5em; }\n\n.comment-input-container {\n  width: 100%;\n  height: 3em;\n  margin: 0; }\n\n.comment-text-area {\n  margin: 0;\n  padding: 0;\n  width: 80%;\n  height: 100%;\n  margin-right: 5%;\n  font-size: 1em;\n  border-radius: 5px;\n  border: 1px solid #69bdf4; }\n  .comment-text-area:focus {\n    outline: none; }\n\n.comment-submit-button {\n  height: 100%;\n  font-size: 2em;\n  border-radius: 2px;\n  width: 15%;\n  border: none;\n  padding: 0;\n  background-color: #69bdf4; }\n\n.note-details-comments {\n  overflow: hidden; }\n  .note-details-comments .inner {\n    height: 55vh;\n    overflow: auto;\n    margin: 0.3em -3rem 0.3em 0.3em;\n    padding-right: 3.3rem; }\n\n.note-details-comment {\n  color: white;\n  padding: 0.7em 0.9em;\n  line-height: 1.5em;\n  font-size: 1em;\n  border-radius: 7px;\n  margin-top: 1em;\n  margin-bottom: 0;\n  width: 100%;\n  position: relative; }\n  .note-details-comment:after {\n    bottom: 100%;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-width: 10px;\n    margin-left: -10px; }\n\n.note-details-comment:nth-child(odd) {\n  background: #94C2ED; }\n  .note-details-comment:nth-child(odd):after {\n    border-bottom-color: #94C2ED;\n    left: 93%; }\n\n.note-details-comment:nth-child(even) {\n  background: #86BB71; }\n  .note-details-comment:nth-child(even):after {\n    border-bottom-color: #86BB71;\n    left: 7%; }\n\n.noteDetailSlideIn-appear {\n  margin-top: -800px; }\n\n.noteDetailSlideIn-appear.noteDetailSlideIn-appear-active {\n  margin-top: 0;\n  -webkit-transition: margin-top .5s ease-in;\n  transition: margin-top .5s ease-in; }\n\n@media screen and (min-device-width: 1024px) {\n  .note-details-container {\n    position: absolute;\n    width: 40vw;\n    left: 30vw; } }\n\n/** Controls\n * Override / Helper / Utility classes\n * class prefix: `ctrl-`\n */\n.ctrl-centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n", ""]);
	
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
	  _store2.default.dispatch((0, _board.getAllBoards)());
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
	      _react2.default.createElement(_reactRouter.Route, { path: '/boards', component: _CreateBoardContainer2.default, onEnter: onMyBoardEnter }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/boards/:boardHash', component: _BoardContainer2.default, onEnter: onBoardEnter }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/note' },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _CreateNoteContainer2.default, onEnter: onMyBoardEnter }),
	        _react2.default.createElement(_reactRouter.Route, { path: ':id', component: _ViewNoteContainer2.default })
	      )
	    )
	  );
	}

/***/ },

/***/ 226:
/*!****************************************!*\
  !*** ./client/reducers/rootReducer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combinedReducer = undefined;
	exports.default = rootReducer;
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _boardReducer = __webpack_require__(/*! ./boardReducer */ 228);
	
	var _boardReducer2 = _interopRequireDefault(_boardReducer);
	
	var _noteReducer = __webpack_require__(/*! ./noteReducer */ 229);
	
	var _noteReducer2 = _interopRequireDefault(_noteReducer);
	
	var _userReducer = __webpack_require__(/*! ./userReducer */ 230);
	
	var _userReducer2 = _interopRequireDefault(_userReducer);
	
	var _navbarReducer = __webpack_require__(/*! ./navbarReducer */ 231);
	
	var _navbarReducer2 = _interopRequireDefault(_navbarReducer);
	
	var _commentsReducer = __webpack_require__(/*! ./commentsReducer */ 770);
	
	var _commentsReducer2 = _interopRequireDefault(_commentsReducer);
	
	var _socketioReducer = __webpack_require__(/*! ./socketioReducer */ 232);
	
	var _socketioReducer2 = _interopRequireDefault(_socketioReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var combinedReducer = exports.combinedReducer = (0, _redux.combineReducers)({
	  board: _boardReducer2.default,
	  noteReducer: _noteReducer2.default,
	  userReducer: _userReducer2.default,
	  nav: _navbarReducer2.default,
	  socket: _socketioReducer2.default,
	  commentsReducer: _commentsReducer2.default
	
	});
	
	function rootReducer(store, action) {
	  if (action.type === _constants.CLEAR_STORE) return combinedReducer();
	
	  return combinedReducer(store, action);
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
	var RECEIVE_COMMENTS = exports.RECEIVE_COMMENTS = 'RECEIVE_COMMENT';
	var ADD_NEW_COMMENT = exports.ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
	
	/* BOARD CONSTANTS */
	var RECEIVE_BOARD = exports.RECEIVE_BOARD = 'RECEIVE_BOARD';
	var RECEIVE_BOARDS = exports.RECEIVE_BOARDS = 'RECEIVE_BOARDS';
	var ADD_NEW_BOARD = exports.ADD_NEW_BOARD = 'ADD_NEW_BOARD';
	var RECEIVE_BOARD_NOTES = exports.RECEIVE_BOARD_NOTES = 'RECEIVE_BOARD_NOTES';
	var RECEIVE_PERMISSION = exports.RECEIVE_PERMISSION = 'RECEIVE_PERMISSION';
	
	/* NOTE CONSTANTS */
	var SELECT_NOTE = exports.SELECT_NOTE = 'SELECT_NOTE';
	var RECEIVE_NOTE = exports.RECEIVE_NOTE = 'RECEIVE_NOTE';
	var RECEIVE_NOTES = exports.RECEIVE_NOTES = 'RECEIVE_NOTES';
	var ADD_NOTE_TO_BOARD = exports.ADD_NOTE_TO_BOARD = 'ADD_NOTE_TO_BOARD';
	var SET_NOTE_COORDS = exports.SET_NOTE_COORDS = 'SET_NOTE_COORDS';
	var NOTE_ARRAY_INDEX_PUSH = exports.NOTE_ARRAY_INDEX_PUSH = 'NOTE_ARRAY_INDEX_PUSH';
	var DELETE_NOTE = exports.DELETE_NOTE = 'DELETE_NOTE';
	var NOTE_DETAIL = exports.NOTE_DETAIL = 'NOTE_DETAIL';
	
	/* USER CONSTANTS */
	var SET_LOGIN_USER = exports.SET_LOGIN_USER = 'SET_LOGIN_USER';
	var REMOVE_LOGIN_USER = exports.REMOVE_LOGIN_USER = 'REMOVE_LOGIN_USER';
	var RECEIVE_USER_QUERY = exports.RECEIVE_USER_QUERY = 'RECEIVE_USER_QUERY';
	
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

/***/ 228:
/*!*****************************************!*\
  !*** ./client/reducers/boardReducer.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var newState = Object.assign({}, state);
	
	  switch (action.type) {
	
	    case _constants.RECEIVE_BOARD:
	      newState.selectedBoard = action.board;
	      break;
	    case _constants.RECEIVE_BOARDS:
	      newState.allBoards = action.boards;
	      newState.permissions = action.permissions;
	      break;
	    case _constants.ADD_NEW_BOARD:
	      newState.allBoards = [].concat(_toConsumableArray(newState.allBoards), [action.board]);
	      newState.permissions = [].concat(_toConsumableArray(newState.permissions), [action.permission]);
	      break;
	    case _constants.RECEIVE_PERMISSION:
	      newState.permissions = [].concat(_toConsumableArray(newState.permissions), [action.permission]);
	      break;
	    default:
	      return state;
	
	  }
	
	  return newState;
	};
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initialState = { selectedBoard: {}, allBoards: [], selectedBoardNotes: [], permissions: [] };

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
	  deletedNotes: [],
	  selectedNoteDetails: null
	
	};
	
	function noteReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	  var action = arguments[1];
	
	  var nextState = Object.assign({}, state);
	
	  switch (action.type) {
	    case _constants.RECEIVE_NOTE:
	      nextState.all = [].concat(_toConsumableArray(nextState.all), [action.payload]);
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
	
	    case _constants.NOTE_DETAIL:
	      nextState.selectedNoteDetails = action.selectedNoteDetails;
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

/***/ 230:
/*!****************************************!*\
  !*** ./client/reducers/userReducer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var newState = Object.assign({}, state);
	  switch (action.type) {
	    case _constants.SET_LOGIN_USER:
	      newState.loggedInUser = action.user;
	      break;
	    case _constants.REMOVE_LOGIN_USER:
	      newState.loggedInUser = {};
	      break;
	    case _constants.RECEIVE_USER_QUERY:
	      newState.queriedUsers = action.payload;
	      break;
	    default:
	      return state;
	  }
	  return newState;
	};
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var initialState = {
	  loggedInUser: {},
	  queriedUsers: []
	};

/***/ },

/***/ 367:
/*!*********************************************!*\
  !*** ./client/containers/BoardContainer.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _socket = __webpack_require__(/*! socket.io-client */ 233);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _CustomDragLayerContainer = __webpack_require__(/*! ./CustomDragLayerContainer */ 368);
	
	var _CustomDragLayerContainer2 = _interopRequireDefault(_CustomDragLayerContainer);
	
	var _ParticipantsContainer = __webpack_require__(/*! ./ParticipantsContainer */ 577);
	
	var _ParticipantsContainer2 = _interopRequireDefault(_ParticipantsContainer);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 551);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _bindHandlers = __webpack_require__(/*! ../utils/bindHandlers */ 502);
	
	var _bindHandlers2 = _interopRequireDefault(_bindHandlers);
	
	var _NoteDetailsContainer = __webpack_require__(/*! ./NoteDetailsContainer */ 771);
	
	var _NoteDetailsContainer2 = _interopRequireDefault(_NoteDetailsContainer);
	
	var _note = __webpack_require__(/*! ../actions/note */ 525);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ReactDOM = __webpack_require__(/*! react-dom */ 71);
	
	// import Clipboard from 'react-clipboard';
	
	// localhost:3030/note?board=${this.props.board.hash}
	function noop() {}
	
	var Clipboard = _react2.default.createClass({
	  displayName: 'Clipboard',
	
	
	  propTypes: {
	    value: _react2.default.PropTypes.string.isRequired,
	    className: _react2.default.PropTypes.string,
	    style: _react2.default.PropTypes.object,
	    onCopy: _react2.default.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      className: 'clipboard',
	      style: {
	        position: 'fixed',
	        overflow: 'hidden',
	        clip: 'rect(0 0 0 0)',
	        height: 1,
	        width: 1,
	        margin: -1,
	        padding: 0,
	        border: 0
	      },
	      onCopy: noop
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    document.addEventListener('keydown', this.handleKeyDown, false);
	    document.addEventListener('keyup', this.handleKeyUp, false);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    document.removeEventListener('keydown', this.handleKeyDown, false);
	    document.removeEventListener('keyup', this.handleKeyUp, false);
	  },
	
	  render: function render() {
	    return _react2.default.createElement('textarea', _extends({}, this.props, { readOnly: true, onCopy: this.handleCopy }));
	  },
	
	  handleCopy: function handleCopy(e) {
	    this.props.onCopy(e);
	  },
	
	  handleKeyDown: function handleKeyDown(e) {
	    var metaKeyIsDown = e.ctrlKey || e.metaKey;
	    var textIsSelected = window.getSelection().toString();
	
	    if (!metaKeyIsDown || textIsSelected) {
	      return;
	    }
	
	    var element = ReactDOM.findDOMNode(this);
	    element.focus();
	    element.select();
	  },
	
	  handleKeyUp: function handleKeyUp(e) {
	    var element = ReactDOM.findDOMNode(this);
	    element.blur();
	  }
	
	});
	
	var BoardContainer = function (_Component) {
	  _inherits(BoardContainer, _Component);
	
	  function BoardContainer(props) {
	    _classCallCheck(this, BoardContainer);
	
	    var _this = _possibleConstructorReturn(this, (BoardContainer.__proto__ || Object.getPrototypeOf(BoardContainer)).call(this, props));
	
	    (0, _bindHandlers2.default)(_this, _this.showNoteComments, _this.hideNoteComments);
	
	    return _this;
	  }
	
	  _createClass(BoardContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          dispatch = _props.dispatch,
	          board = _props.board,
	          notes = _props.notes;
	
	      var boardId = board.id;
	    }
	  }, {
	    key: 'showNoteComments',
	    value: function showNoteComments(color, content, noteId) {
	      this.props.selectedNoteDetail({ color: color, content: content, noteId: noteId });
	    }
	  }, {
	    key: 'hideNoteComments',
	    value: function hideNoteComments() {
	      this.props.selectedNoteDetail();
	    }
	  }, {
	    key: 'handleCopy',
	    value: function handleCopy(e) {
	      console.log('copied', e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var value = 'localhost:3030/note?board=' + this.props.board.hash;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'col-xs-12 board-page-container', key: this.props.board.id },
	        this.props.selectedNoteDetails ? _react2.default.createElement(_NoteDetailsContainer2.default, {
	          note: this.props.selectedNoteDetails,
	          hideNoteComments: this.hideNoteComments
	        }) : null,
	        _react2.default.createElement(
	          'span',
	          { className: 'text-center' },
	          _react2.default.createElement(
	            'h2',
	            null,
	            this.props.board.name
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              'Press Cmd + C to copy:'
	            ),
	            _react2.default.createElement(
	              'pre',
	              { className: 'ClipboardBlocking' },
	              value
	            ),
	            _react2.default.createElement(Clipboard, { value: value,
	              onCopy: this.handleCopy })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'screen col-xs-12' },
	            _react2.default.createElement(_CustomDragLayerContainer2.default, _extends({}, this.props, { showNoteComments: this.showNoteComments }))
	          )
	        ),
	        _react2.default.createElement(_ParticipantsContainer2.default, null)
	      );
	    }
	  }]);
	
	  return BoardContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    board: state.board.selectedBoard,
	    notes: state.noteReducer.all,
	    hash: state.board.selectedBoard.hash,
	    selectedNoteDetails: state.noteReducer.selectedNoteDetails
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ socketConnect: _socketio.socketConnect, socketDisconnect: _socketio.socketDisconnect, clearSocketListeners: _socketio.clearSocketListeners, selectedNoteDetail: _note.selectedNoteDetail }, dispatch);
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BoardContainer);

/***/ },

/***/ 368:
/*!*******************************************************!*\
  !*** ./client/containers/CustomDragLayerContainer.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 369);
	
	var _reactDndHtml5Backend = __webpack_require__(/*! react-dnd-html5-backend */ 473);
	
	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);
	
	var _NoteBoardContainer = __webpack_require__(/*! ./NoteBoardContainer */ 499);
	
	var _NoteBoardContainer2 = _interopRequireDefault(_NoteBoardContainer);
	
	var _CustomDragLayer = __webpack_require__(/*! ../components/CustomDragLayer */ 575);
	
	var _CustomDragLayer2 = _interopRequireDefault(_CustomDragLayer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CustomDragLayerContainer = function (_Component) {
	  _inherits(CustomDragLayerContainer, _Component);
	
	  function CustomDragLayerContainer(props) {
	    _classCallCheck(this, CustomDragLayerContainer);
	
	    var _this = _possibleConstructorReturn(this, (CustomDragLayerContainer.__proto__ || Object.getPrototypeOf(CustomDragLayerContainer)).call(this, props));
	
	    _this.handleSnapToGridAfterDropChange = _this.handleSnapToGridAfterDropChange.bind(_this);
	    _this.handleSnapToGridWhileDraggingChange = _this.handleSnapToGridWhileDraggingChange.bind(_this);
	
	    _this.state = {
	      snapToGridAfterDrop: false,
	      snapToGridWhileDragging: false
	    };
	    return _this;
	  }
	
	  _createClass(CustomDragLayerContainer, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          snapToGridAfterDrop = _state.snapToGridAfterDrop,
	          snapToGridWhileDragging = _state.snapToGridWhileDragging;
	      var board = this.props.board;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_NoteBoardContainer2.default, {
	          snapToGrid: snapToGridAfterDrop,
	          board: board,
	          showNoteComments: this.props.showNoteComments
	        }),
	        _react2.default.createElement(_CustomDragLayer2.default, { snapToGrid: snapToGridWhileDragging }),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'snapToGridWhileDragging' },
	              _react2.default.createElement('input', {
	                id: 'snapToGridWhileDragging',
	                type: 'checkbox',
	                checked: snapToGridWhileDragging,
	                onChange: this.handleSnapToGridWhileDraggingChange
	              }),
	              _react2.default.createElement(
	                'small',
	                null,
	                'Snap to grid while dragging'
	              )
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'snapToGridAfterDrop' },
	              _react2.default.createElement('input', {
	                id: 'snapToGridAfterDrop',
	                type: 'checkbox',
	                checked: snapToGridAfterDrop,
	                onChange: this.handleSnapToGridAfterDropChange
	              }),
	              _react2.default.createElement(
	                'small',
	                null,
	                'Snap to grid after drop'
	              )
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'handleSnapToGridAfterDropChange',
	    value: function handleSnapToGridAfterDropChange() {
	      this.setState({
	        snapToGridAfterDrop: !this.state.snapToGridAfterDrop
	
	      });
	    }
	  }, {
	    key: 'handleSnapToGridWhileDraggingChange',
	    value: function handleSnapToGridWhileDraggingChange() {
	      this.setState({
	        snapToGridWhileDragging: !this.state.snapToGridWhileDragging
	      });
	    }
	  }]);
	
	  return CustomDragLayerContainer;
	}(_react.Component);
	
	exports.default = CustomDragLayerContainer;

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
	    value: function renderNote(item, key) {
	      return _react2.default.createElement(
	        _DraggableNote2.default,
	        _extends({ key: key, id: key }, item, { showNoteComments: this.props.showNoteComments }),
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

/***/ 500:
/*!******************************************!*\
  !*** ./client/components/NoteWrapper.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 369);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _Note = __webpack_require__(/*! ./Note */ 501);
	
	var _Note2 = _interopRequireDefault(_Note);
	
	var _ShouldCompUpdate = __webpack_require__(/*! ./ShouldCompUpdate */ 511);
	
	var _NoteWrapperModalContainer = __webpack_require__(/*! ../containers/NoteWrapperModalContainer */ 512);
	
	var _NoteWrapperModalContainer2 = _interopRequireDefault(_NoteWrapperModalContainer);
	
	var _bindHandlers = __webpack_require__(/*! ../utils/bindHandlers */ 502);
	
	var _bindHandlers2 = _interopRequireDefault(_bindHandlers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var noteSource = {
	  beginDrag: function beginDrag(props) {
	    var id = props.id,
	        left = props.left,
	        top = props.top;
	
	    return { id: id, left: left, top: top };
	  }
	};
	
	var collect = function collect(connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource(),
	    isDragging: monitor.isDragging()
	  };
	};
	
	var initState = {
	  focused: false
	};
	
	var NoteWrapper = function (_PureComponent) {
	  _inherits(NoteWrapper, _PureComponent);
	
	  function NoteWrapper(props) {
	    _classCallCheck(this, NoteWrapper);
	
	    var _this = _possibleConstructorReturn(this, (NoteWrapper.__proto__ || Object.getPrototypeOf(NoteWrapper)).call(this, props));
	
	    _this.state = Object.assign({}, initState);
	    (0, _bindHandlers2.default)(_this, _this.clickHandler, _this.focusHandler, _this.blurHandler, _this.changeHandler);
	    return _this;
	  }
	
	  _createClass(NoteWrapper, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _ShouldCompUpdate.shallowEqual)(this.props, nextProps);
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler(e) {
	      e.preventDefault();
	      this.input.focus();
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
	    key: 'changeHandler',
	    value: function changeHandler(e) {
	      e.preventDefault();
	      this.props.onChange(e.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          color = _props.color,
	          red = _props.red,
	          content = _props.content,
	          id = _props.id;
	
	
	      var styles = {
	        cursor: 'move',
	        height: this.props.height || 100,
	        width: this.props.width || 100,
	        left: this.props.left || 0,
	        top: this.props.top || 0,
	        position: 'absolute'
	      };
	
	      var backgroundColor = red ? 'red' : 'white';
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'noteWrapper ' + (this.state.focused ? 'noteWrapper--focused' : ''),
	          onClick: this.clickHandler },
	        _react2.default.createElement(
	          'div',
	          { className: 'enlarge',
	            onClick: function onClick() {
	              _this2.props.showNoteComments(color, content, id);
	            },
	            style: _extends({}, styles, { backgroundColor: backgroundColor }),
	            ref: function ref(input) {
	              _this2.input = input;
	            },
	            onFocus: this.focusHandler,
	            onBlur: this.blurHandler,
	            onChange: this.changeHandler },
	          _react2.default.createElement(_Note2.default, { color: color, content: content, input: this.props.content, onFocus: this.focusHandler })
	        )
	      );
	    }
	  }]);
	
	  return NoteWrapper;
	}(_react.PureComponent);
	
	exports.default = NoteWrapper;

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
	  var focused = props.focused;
	
	  var content = props.content || '';
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
	        props.children ? props.children : content
	      )
	    )
	  );
	}

/***/ },

/***/ 523:
/*!********************************************!*\
  !*** ./client/components/DraggableNote.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 369);
	
	var _reactDndHtml5Backend = __webpack_require__(/*! react-dnd-html5-backend */ 473);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _NoteWrapper = __webpack_require__(/*! ./NoteWrapper */ 500);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _ShouldCompUpdate = __webpack_require__(/*! ./ShouldCompUpdate */ 511);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var noteSource = {
	  beginDrag: function beginDrag(props) {
	    var id = props.id,
	        left = props.left,
	        top = props.top,
	        content = props.content;
	
	    return { id: id, left: left, top: top, content: content };
	  }
	};
	
	//ok
	function getStyles(props) {
	  var left = props.left,
	      top = props.top,
	      isDragging = props.isDragging;
	
	  var transform = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	
	  return {
	    position: 'absolute',
	    transform: transform,
	    WebkitTransform: transform,
	    // IE fallback: hide the real node using CSS when dragging
	    // because IE will ignore our custom "empty image" drag preview.
	    opacity: isDragging ? 0 : 1,
	    height: isDragging ? 0 : ''
	  };
	}
	
	var collect = function collect(connector, monitor) {
	  return {
	    connectDragSource: connector.dragSource(),
	    connectDragPreview: connector.dragPreview(),
	    isDragging: monitor.isDragging()
	  };
	};
	
	var DraggableNote = function (_PureComponent) {
	  _inherits(DraggableNote, _PureComponent);
	
	  function DraggableNote() {
	    _classCallCheck(this, DraggableNote);
	
	    return _possibleConstructorReturn(this, (DraggableNote.__proto__ || Object.getPrototypeOf(DraggableNote)).apply(this, arguments));
	  }
	
	  _createClass(DraggableNote, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _ShouldCompUpdate.shallowEqual)(this.props, nextProps);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Use empty image as a drag preview so browsers don't draw it
	      // and we can draw whatever we want on the custom drag layer instead.
	      this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
	        // IE fallback: specify that we'd rather screenshot the node
	        // when it already knows it's being dragged so we can hide it with CSS.
	        captureDraggingState: true
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          connectDragSource = _props.connectDragSource,
	          content = _props.content,
	          id = _props.id;
	
	
	      return connectDragSource(_react2.default.createElement(
	        'div',
	        { style: getStyles(this.props) },
	        _react2.default.createElement(
	          'div',
	          { className: 'zIndex' },
	          _react2.default.createElement(_NoteWrapper2.default, {
	            color: this.props.color,
	            content: content,
	            id: id,
	            showNoteComments: this.props.showNoteComments
	          })
	        )
	      ));
	    }
	  }]);
	
	  return DraggableNote;
	}(_react.PureComponent);
	
	exports.default = (0, _reactDnd.DragSource)(_constants.NOTE, noteSource, collect)(DraggableNote);

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
	exports.deleteNotesFromDatabase = exports.notesDelete = exports.IndexToZIndex = exports.noteMover = exports.deleteNote = exports.setNoteCoords = exports.addNoteToBoard = exports.noteArrayIndexPush = exports.selectedNoteDetail = exports.moveNote = undefined;
	
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
	
	var selectedNoteDetail = exports.selectedNoteDetail = function selectedNoteDetail(selectedNoteDetails) {
	  return {
	    type: _constants.NOTE_DETAIL,
	    selectedNoteDetails: selectedNoteDetails
	  };
	};
	
	var noteArrayIndexPush = exports.noteArrayIndexPush = function noteArrayIndexPush(noteArr) {
	  return {
	    type: _constants.NOTE_ARRAY_INDEX_PUSH,
	    zIndexNotes: noteArr
	  };
	};
	
	var addNoteToBoard = exports.addNoteToBoard = function addNoteToBoard(note) {
	  console.log(note);
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
	      mentions: note.mentions || [],
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

/***/ 552:
/*!********************************!*\
  !*** ./client/actions/user.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.checkLoginStatus = exports.searchUsername = exports.logoutUser = exports.loginUser = exports.createUser = exports.receiveUserQuery = exports.removeLoginUser = exports.setLoginUser = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 526);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 312);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
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
	      return console.error(err);
	    });
	  };
	};
	
	var loginUser = exports.loginUser = function loginUser(email, password) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/auth/', { email: email, password: password }).then(function (res) {
	      dispatch(setLoginUser(res.data));
	    }).catch(function (err) {
	      return console.error(err);
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
	var checkLoginStatus = exports.checkLoginStatus = function checkLoginStatus() {
	  return function (dispatch) {
	    return _axios2.default.get('/api/auth/').then(function (res) {
	      return res;
	    }).then(function (res) {
	      return dispatch(setLoginUser(res.data));
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};

/***/ },

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
	
	var _board = __webpack_require__(/*! ../actions/board */ 583);
	
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
	      if ((0, _isEmpty2.default)(this.props.loggedInUser)) {
	        _reactRouter.browserHistory.push('/signup');
	      } else if (this.props.selectedBoard && !(0, _isEmpty2.default)(this.props.selectedBoard)) {
	        if (Object.keys(this.props.loggedInUser).length) {
	          if (this.props.permissions.findIndex(function (permission) {
	            return permission.board_id === _this2.props.selectedBoard.id;
	          }) === -1) {
	            this.props.userPermission(this.props.selectedBoard);
	          }
	        }
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
	    },
	    userPermission: function userPermission(board) {
	      dispatch((0, _board.addUserPermission)(board));
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ParticipantsContainer);

/***/ },

/***/ 583:
/*!*********************************!*\
  !*** ./client/actions/board.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBoard = exports.createBoard = exports.addUserPermission = exports.getAllBoards = exports.addNewBoard = exports.receiveAllBoards = exports.receiveNewPermission = exports.receiveBoard = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 526);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var receiveBoard = exports.receiveBoard = function receiveBoard(board) {
	  return {
	    type: _constants.RECEIVE_BOARD,
	    board: board
	  };
	};
	
	var receiveNewPermission = exports.receiveNewPermission = function receiveNewPermission(permission) {
	  return {
	    type: _constants.RECEIVE_PERMISSION,
	    permission: permission
	  };
	};
	
	var receiveAllBoards = exports.receiveAllBoards = function receiveAllBoards(boards, permissions) {
	  return {
	    type: _constants.RECEIVE_BOARDS,
	    boards: boards,
	    permissions: permissions
	  };
	};
	
	var addNewBoard = exports.addNewBoard = function addNewBoard(board, permission) {
	  return {
	    type: _constants.ADD_NEW_BOARD,
	    board: board,
	    permission: permission
	  };
	};
	
	var getAllBoards = exports.getAllBoards = function getAllBoards() {
	  return function (dispatch) {
	    return _axios2.default.get('/api/boards/').then(function (res) {
	      return res.data;
	    }).then(function (boards) {
	      dispatch(receiveAllBoards(boards.boards, boards.permissions));
	    });
	  };
	};
	
	var addUserPermission = exports.addUserPermission = function addUserPermission(board) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/boards/permissions', { board: board }).then(function (res) {
	      return res.data;
	    }).then(function (permission) {
	      dispatch(receiveNewPermission(permission));
	    });
	  };
	};
	
	var createBoard = exports.createBoard = function createBoard(boardName) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/boards', { boardName: boardName }).then(function (res) {
	      return res.data;
	    }).then(function (board) {
	      dispatch(addNewBoard(board.board, board.permission));
	    });
	  };
	};
	
	var getBoard = exports.getBoard = function getBoard(boardHash) {
	  return function (dispatch) {
	    return _axios2.default.get('/api/boards/' + boardHash).then(function (res) {
	      return res.data;
	    }).then(function (board) {
	      dispatch(receiveBoard(board));
	    });
	  };
	};

/***/ },

/***/ 584:
/*!**************************************************!*\
  !*** ./client/containers/CreateNoteContainer.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _CreateNote = __webpack_require__(/*! ../components/CreateNote */ 585);
	
	var _CreateNote2 = _interopRequireDefault(_CreateNote);
	
	var _board = __webpack_require__(/*! ../actions/board */ 583);
	
	var _note = __webpack_require__(/*! ../actions/note */ 525);
	
	var _user = __webpack_require__(/*! ../actions/user */ 552);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 551);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CreateNote2.default);
	
	
	function mapStateToProps(state) {
	  return {
	    board: state.board.selectedBoard,
	    user: state.userReducer.loggedInUser,
	    queriedUsers: state.userReducer.queriedUsers,
	    permissions: state.board.permissions
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({
	    createNote: _note.createNote,
	    getBoard: _board.getBoard,
	    socketConnect: _socketio.socketConnect,
	    addSocketListener: _socketio.addSocketListener,
	    socketEmit: _socketio.socketEmit,
	    clearSocketListeners: _socketio.clearSocketListeners,
	    socketDisconnect: _socketio.socketDisconnect,
	    searchUsername: _user.searchUsername,
	    addUserPermission: _board.addUserPermission
	  }, dispatch);
	}

/***/ },

/***/ 585:
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
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 283);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _bindHandlers = __webpack_require__(/*! ../utils/bindHandlers */ 502);
	
	var _bindHandlers2 = _interopRequireDefault(_bindHandlers);
	
	var _Note = __webpack_require__(/*! ./Note */ 501);
	
	var _Note2 = _interopRequireDefault(_Note);
	
	var _ColorPicker = __webpack_require__(/*! ./ColorPicker */ 587);
	
	var _ColorPicker2 = _interopRequireDefault(_ColorPicker);
	
	var _reactAutosuggest = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-autosuggest\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);
	
	var _color = __webpack_require__(/*! color */ 503);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _stringHash = __webpack_require__(/*! ../utils/stringHash */ 569);
	
	var _presetColors = __webpack_require__(/*! ROOT/client/presetColors.json */ 743);
	
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
	  position: 0
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
	        _this4.setState(Object.assign(initState, { flickState: 'returning' }));
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
	
	      this.state.mentions;
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
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'h1',
	          { className: 'center' },
	          this.props.board ? this.props.board.name : ''
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10 col-xs-offset-1', style: { fontSize: '6vw' } },
	            _react2.default.createElement(
	              'div',
	              {
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
	              { style: { margin: '0.25em auto' } },
	              _react2.default.createElement('button', {
	                onClick: this.toggleColorPicker,
	                className: 'btn btn-color',
	                style: { background: this.state.color } })
	            )
	          ),
	          this.state.displayColorPicker && _react2.default.createElement(
	            'div',
	            { className: 'c-color-picker__wrapper c-color-picker__wrapper--modal',
	              onClick: function onClick(e) {
	                _this5.modalClickHandler(e, _this5.toggleColorPicker);
	              } },
	            _react2.default.createElement(_ColorPicker2.default, {
	              color: this.state.color,
	              updateColor: this.updateColor,
	              presets: _presetColors2.default })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'button',
	            {
	              onClick: this.submitHandler,
	              className: 'btn btn-primary block ml-auto mr-auto' },
	            'Submit Note'
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

/***/ },

/***/ 746:
/*!**********************************************!*\
  !*** ./client/containers/SignupContainer.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SignupContainer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(/*! axios */ 526);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _user = __webpack_require__(/*! ../actions/user */ 552);
	
	var _Signup = __webpack_require__(/*! ../components/Signup */ 747);
	
	var _Signup2 = _interopRequireDefault(_Signup);
	
	var _Login = __webpack_require__(/*! ../components/Login */ 748);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 283);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(/*! react-addons-css-transition-group */ 749);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SignupContainer = exports.SignupContainer = function (_Component) {
	  _inherits(SignupContainer, _Component);
	
	  function SignupContainer(props) {
	    _classCallCheck(this, SignupContainer);
	
	    var _this = _possibleConstructorReturn(this, (SignupContainer.__proto__ || Object.getPrototypeOf(SignupContainer)).call(this, props));
	
	    _this.state = {
	      type: 'signup',
	      firstName: '',
	      lastName: '',
	      email: '',
	      username: '',
	      password: '',
	      display: false
	    };
	
	    _this.submitForm = _this.submitForm.bind(_this);
	    _this.handleInput = _this.handleInput.bind(_this);
	    _this.changeForm = _this.changeForm.bind(_this);
	    _this.loginForm = _this.loginForm.bind(_this);
	    return _this;
	  }
	
	  _createClass(SignupContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.checkLoginStatus();
	      this.setState({ display: true });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props, nextProps) {
	      if (!(0, _isEmpty2.default)(props.loggedInUser)) {
	        this.props.router.push('/');
	      }
	    }
	  }, {
	    key: 'submitForm',
	    value: function submitForm(e) {
	      e.preventDefault();
	      this.props.createUser(this.state.firstName, this.state.lastName, this.state.email, this.state.username, this.state.password);
	    }
	  }, {
	    key: 'loginForm',
	    value: function loginForm(e) {
	      e.preventDefault();
	      this.props.loginUser(this.state.email, this.state.password);
	    }
	  }, {
	    key: 'changeForm',
	    value: function changeForm(type) {
	      this.setState({ type: type });
	    }
	  }, {
	    key: 'handleInput',
	    value: function handleInput(e) {
	      this.setState(_defineProperty({}, e.target.name, e.target.value));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactAddonsCssTransitionGroup2.default,
	        {
	          transitionName: 'slideIn',
	          transitionAppear: true,
	          transitionAppearTimeout: 500,
	          transitionEnterTimeout: 500,
	          transitionLeaveTimeout: 500 },
	        _react2.default.createElement(
	          'div',
	          { className: 'signup-form-container' },
	          this.state.type === 'signup' ? _react2.default.createElement(_Signup2.default, { submitForm: this.submitForm,
	            changeForm: this.changeForm,
	            handleInput: this.handleInput }) : _react2.default.createElement(_Login2.default, { loginForm: this.loginForm,
	            handleInput: this.handleInput,
	            changeForm: this.changeForm })
	        )
	      );
	    }
	  }]);
	
	  return SignupContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    loggedInUser: state.userReducer.loggedInUser
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    createUser: function createUser(firstName, lastName, email, username, password) {
	      return dispatch((0, _user.createUser)(firstName, lastName, email, username, password));
	    },
	    loginUser: function loginUser(email, password) {
	      return dispatch((0, _user.loginUser)(email, password));
	    },
	    checkLoginStatus: function checkLoginStatus() {
	      return dispatch((0, _user.checkLoginStatus)());
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SignupContainer);

/***/ },

/***/ 747:
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
	    _react2.default.createElement(
	      "button",
	      { className: "signup-submit-button", type: "submit" },
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

/***/ },

/***/ 768:
/*!*************************************!*\
  !*** ./client/components/Navbar.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 312);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Navbar = function Navbar(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'nav',
	      { className: 'navbar navbar navbar-static-top', role: 'navigation' },
	      _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'div',
	          { className: 'navbar-header', id: 'navHeader' },
	          _react2.default.createElement(
	            'button',
	            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar',
	              'aria-expanded': props.aria, 'aria-controls': 'navbar', onClick: function onClick() {
	                props.expandNav();
	              } },
	            _react2.default.createElement(
	              'span',
	              { className: 'sr-only' },
	              'Toggle navigation'
	            ),
	            _react2.default.createElement('span', { className: 'icon-bar' }),
	            _react2.default.createElement('span', { className: 'icon-bar' }),
	            _react2.default.createElement('span', { className: 'icon-bar' })
	          ),
	          _react2.default.createElement(
	            'a',
	            { className: 'navbar-brand', style: { float: 'right' }, href: '/' },
	            'Notion'
	          ),
	          _react2.default.createElement('button', { className: 'ion-gear-b navbarGearIcon', style: { fontSize: '2em', marginTop: '10px', paddingLeft: '10px' }, type: 'button', onClick: function onClick() {
	              props.toggleSidebar('sidebarToggle');
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'navbar', className: props.navClass, style: { float: 'right' }, 'aria-expanded': props.aria },
	          _react2.default.createElement(
	            'ul',
	            { className: 'nav navbar-nav', onClick: function onClick() {
	                props.expandNav();
	              } },
	            !Object.keys(props.user).length ? _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/signup' },
	                'Login/SignUp'
	              )
	            ) : _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { onClick: function onClick() {
	                    props.logoutUser();
	                  } },
	                'Logout'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/boards' },
	                'My Boards'
	              )
	            )
	          )
	        )
	      )
	    )
	  );
	};
	exports.default = Navbar;

/***/ },

/***/ 770:
/*!********************************************!*\
  !*** ./client/reducers/commentsReducer.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = commentsReducer;
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initState = {
	  comments: []
	};
	
	function commentsReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	  var action = arguments[1];
	
	  var nextState = Object.assign({}, state);
	
	  switch (action.type) {
	    case _constants.RECEIVE_COMMENTS:
	      nextState.comments = action.comments;
	      break;
	
	    case _constants.ADD_NEW_COMMENT:
	      nextState.comments = [].concat(_toConsumableArray(nextState.comments), [action.comment]);
	      break;
	
	    default:
	      return state;
	  }
	
	  return nextState;
	}

/***/ },

/***/ 771:
/*!***************************************************!*\
  !*** ./client/containers/NoteDetailsContainer.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _comment = __webpack_require__(/*! ../actions/comment */ 772);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(/*! react-addons-css-transition-group */ 749);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _color = __webpack_require__(/*! color */ 503);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NoteDetailsContainer = function (_Component) {
	  _inherits(NoteDetailsContainer, _Component);
	
	  function NoteDetailsContainer(props) {
	    _classCallCheck(this, NoteDetailsContainer);
	
	    var _this = _possibleConstructorReturn(this, (NoteDetailsContainer.__proto__ || Object.getPrototypeOf(NoteDetailsContainer)).call(this, props));
	
	    _this.state = {
	      comment: ''
	    };
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    _this.handleCommentInput = _this.handleCommentInput.bind(_this);
	    _this.clearInput = _this.clearInput.bind(_this);
	    _this.getFontColor = _this.getFontColor.bind(_this);
	    return _this;
	  }
	
	  _createClass(NoteDetailsContainer, [{
	    key: 'getFontColor',
	    value: function getFontColor(color) {
	      color = color.replace(/^#*/, '#');
	      var hslArr = (0, _color2.default)(color).hsl().array();
	      hslArr[2] = hslArr[2] > 32 ? 25 : 85;
	      return _color2.default.hsl(hslArr).rotate(180).hex();
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.getComments(this.props.note.noteId);
	    }
	  }, {
	    key: 'handleCommentInput',
	    value: function handleCommentInput(e) {
	      this.setState({ comment: e.target.value });
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      this.props.createComment(this.state.comment, this.props.note.noteId, this.props.loggedInUser.id);
	      this.clearInput();
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(e) {
	      if (e.key == 'Enter') {
	        this.props.createComment(this.state.comment, this.props.note.noteId, this.props.loggedInUser.id);
	        this.clearInput();
	      }
	    }
	  }, {
	    key: 'clearInput',
	    value: function clearInput() {
	      this.refs.input.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var backgroundColor = this.props.note.color.replace(/^#*/, '#');
	
	      var colorStyle = {
	        backgroundColor: backgroundColor,
	        color: this.getFontColor(this.props.note.color)
	      };
	
	      console.log('COLOR STYLE', colorStyle.color);
	
	      return _react2.default.createElement(
	        _reactAddonsCssTransitionGroup2.default,
	        {
	          transitionName: 'noteDetailSlideIn',
	          transitionAppear: true,
	          transitionAppearTimeout: 500,
	          transitionEnterTimeout: 500,
	          transitionLeaveTimeout: 500 },
	        _react2.default.createElement(
	          'div',
	          { className: 'note-details-container' },
	          _react2.default.createElement(
	            'button',
	            { type: 'button',
	              className: 'note-details-close-btn',
	              onClick: this.props.hideNoteComments },
	            ' x '
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'note-details-note',
	              style: colorStyle },
	            this.props.note.content
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'note-details-comments' },
	            _react2.default.createElement(
	              'div',
	              { className: 'inner' },
	              this.props.comments.map(function (comment, i) {
	                return _react2.default.createElement(
	                  'div',
	                  { key: i, className: 'note-details-comment' },
	                  comment.user.first_name + ' : ' + comment.text
	                );
	              })
	            )
	          ),
	          _react2.default.createElement(
	            'form',
	            { className: 'comment-form', onSubmit: this.handleSubmit },
	            _react2.default.createElement(
	              'div',
	              { className: 'comment-input-container' },
	              _react2.default.createElement('textarea', { ref: 'input', className: 'comment-text-area',
	                placeholder: 'Comment...',
	                onChange: this.handleCommentInput,
	                onKeyPress: function onKeyPress(e) {
	                  _this2.handleKeyPress(e);
	                },
	                required: true }),
	              _react2.default.createElement(
	                'button',
	                { className: 'comment-submit-button', type: 'submit' },
	                _react2.default.createElement('i', { className: 'ion-chatbubble-working' })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return NoteDetailsContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  var comments = state.commentsReducer.comments;
	
	  comments = comments.sort(function (a, b) {
	    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
	  });
	  return {
	    loggedInUser: state.userReducer.loggedInUser,
	    comments: comments
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    getComments: function getComments(noteId) {
	      dispatch((0, _comment.getComments)(noteId));
	    },
	    createComment: function createComment(text, noteId, userId) {
	      dispatch((0, _comment.createComment)(text, noteId, userId));
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NoteDetailsContainer);

/***/ },

/***/ 772:
/*!***********************************!*\
  !*** ./client/actions/comment.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getComments = exports.createComment = exports.addNewComment = exports.receiveComments = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 526);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var receiveComments = exports.receiveComments = function receiveComments(comments) {
	  return {
	    type: _constants.RECEIVE_COMMENTS,
	    comments: comments
	  };
	};
	
	var addNewComment = exports.addNewComment = function addNewComment(comment, noteId) {
	  return {
	    type: _constants.ADD_NEW_COMMENT,
	    comment: comment
	  };
	};
	
	var createComment = exports.createComment = function createComment(text, noteId, userId) {
	  return function (dispatch) {
	    return _axios2.default.post('/api/comment/', { text: text, noteId: noteId, userId: userId }).then(function (res) {
	      return res.data;
	    }).then(function (comment) {
	      dispatch(addNewComment(comment));
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};
	
	var getComments = exports.getComments = function getComments(noteId) {
	  return function (dispatch) {
	    return _axios2.default.get('/api/comment/' + noteId).then(function (res) {
	      dispatch(receiveComments(res.data));
	    }).catch(function (err) {
	      return console.error(err);
	    });
	  };
	};

/***/ }

})
//# sourceMappingURL=0.14dedc559336c246955a.hot-update.js.map