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
	exports.push([module.id, "/** Settings\n */\n/** Tools\n * Mixins / Functions\n */\n/** Generic\n * Resets\n */\nbody {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  position: relative;\n  box-sizing: inherit; }\n\nbody {\n  margin-top: 50px; }\n\n/** Base\n * Element styles (no classes)\n */\n/** Objects\n * Reusable layout patterns\n * class prefix: `o-`\n */\n.o-aspect-ratio, .c-color-picker {\n  display: block; }\n\n.o-aspect-ratio__inner, .c-color-picker__inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.o-aspect-ratio--sq, .c-color-picker {\n  padding: 100% 0 0 0; }\n\n.o-aspect-ratio--2-1 {\n  padding: 50% 0 0 0; }\n\n.o-aspect-ratio--1-2 {\n  padding: 200% 0 0 0; }\n\n/** Components\n * Patterns with a visual design\n * class prefix: `c-`\n */\n.btn-color {\n  width: 5em;\n  height: 3em;\n  box-sizing: border-box;\n  border: 0.5em solid #ffffff;\n  box-shadow: 0 0 0.2em 0 #363636; }\n\n.hideThis {\n  display: none; }\n\n@media (max-width: 799px) {\n  .snapTo {\n    display: none; }\n  .trashcan {\n    display: none; }\n  .ClipboardBlocking {\n    display: none; } }\n\n.ClipboardBlocking {\n  visibility: hidden; }\n\n.mobileListItem {\n  list-style-type: none;\n  border-bottom: 1px dashed black;\n  padding-left: 0;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  margin-left: 5%;\n  margin-right: 5%;\n  float: right; }\n\n.mobileNoteContent {\n  word-wrap: break-word;\n  text-align: left;\n  padding-right: 0;\n  width: 80%;\n  margin-top: 2%;\n  margin-bottom: 2%; }\n\n.noteBlock {\n  display: inline-block;\n  width: 20%;\n  margin-top: 2%;\n  margin-top: 2%;\n  margin-bottom: 2%; }\n\n@media (min-width: 800px) {\n  .snapTo {\n    display: inline-block; } }\n\n.navbar {\n  border-bottom: 1px solid black;\n  margin-bottom: 0;\n  background: #ffffff; }\n\n.navbar a {\n  color: #363636; }\n\n.icon-bar {\n  background-color: black; }\n\n.navbar-toggle {\n  border-color: black; }\n\n.navClass {\n  top: -100%;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n.navToggle {\n  top: 0; }\n\n@media screen and (min-width: 768px) {\n  .navbarGearIcon {\n    display: none; } }\n\n.trashcan_img {\n  max-height: 5rem;\n  max-width: 5rem; }\n\n.trashcan {\n  top: 40px;\n  left: 87%;\n  z-index: 1;\n  position: absolute; }\n\n.homepage-container {\n  overflow: hidden;\n  position: relative;\n  font-family: \"Open Sans\", sans-serif; }\n\n.homepage-main-image-container {\n  position: relative; }\n\n.homepage-main-image {\n  width: 100vw;\n  max-width: 100%; }\n\n.main-slogan {\n  position: absolute;\n  top: 10%;\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n  z-index: 999;\n  width: 100%;\n  text-shadow: 1px 1px 10px #000; }\n\n.main-mini-desc {\n  position: absolute;\n  top: 20%;\n  font-style: italic;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  z-index: 999;\n  width: 100%;\n  text-shadow: 1px 1px 10px #000; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.main-signup-button-container {\n  position: absolute;\n  top: 40%;\n  font-size: 1.8rem;\n  width: 100%;\n  text-align: center; }\n\n.main-signup-button {\n  width: 80%;\n  border-radius: 500px;\n  background-color: #FFFFA5;\n  color: #333333;\n  font-weight: bold;\n  font-family: \"Permanent Marker\";\n  border: none;\n  padding: 1.5rem 3rem;\n  cursor: pointer; }\n\n.main-signup-button:hover {\n  background-color: #333333;\n  color: #FFFFA5; }\n\n.postit-view {\n  position: absolute;\n  top: 70%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: \"Caveat Brush\"; }\n\n.bulb-img {\n  width: 100%;\n  vertical-align: top; }\n\n.postit {\n  box-sizing: border-box;\n  margin: 0.2em;\n  min-width: 3.9rem;\n  max-width: 3.9rem;\n  height: 3.9rem;\n  padding: 0.1em;\n  border: 1px solid #E8E8E8;\n  font-size: 1.8rem;\n  text-align: center;\n  border-bottom-right-radius: 60px 5px;\n  vertical-align: middle; }\n\n.postit:nth-child(even) {\n  -webkit-transform: rotate(4deg);\n  -moz-transform: rotate(4deg); }\n\n.postit:nth-child(odd) {\n  -webkit-transform: rotate(-4deg);\n  -moz-transform: rotate(-4deg); }\n\n.yellow {\n  background: -webkit-linear-gradient(315deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%); }\n\n.lightyellow {\n  background: -webkit-linear-gradient(315deg, #ffffa5 81%, #ffffa5 82%, #ffffa5 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffffa5 81%, #ffffa5 82%, #ffffa5 82%, #ffffc6 100%); }\n\n.pink {\n  background: -webkit-linear-gradient(315deg, #ff879b 81%, #ff879b 82%, #ffc7d0 100%);\n  background: linear-gradient(135deg, #ff879b 81%, #ff879b 82%, #ffc7d0 100%); }\n\n.green {\n  background: -webkit-linear-gradient(315deg, #b1ff87 81%, #b1ff87 82%, #dbffc7 100%);\n  background: linear-gradient(135deg, #b1ff87 81%, #b1ff87 82%, #dbffc7 100%); }\n\n.blue {\n  background: -webkit-linear-gradient(315deg, #b3e8ff 81%, #b3e8ff 82%, #b3e8ff 100%);\n  background: linear-gradient(135deg, #b3e8ff 81%, #b3e8ff 82%, #b3e8ff 100%); }\n\n.brightgreen {\n  background: -webkit-linear-gradient(315deg, #b3ffc0 81%, #b3ffc0 82%, #dbffc7 100%);\n  background: linear-gradient(135deg, #b3ffc0 81%, #b3ffc0 82%, #dbffc7 100%); }\n\n.border-line {\n  width: 90%;\n  border-bottom: 2px solid #7e8890;\n  margin: 0 auto;\n  margin-top: 3em; }\n\n.desc-container {\n  color: #333c4e; }\n\n.left-desc {\n  width: 100%;\n  padding: 0.8em;\n  line-height: 1.5em; }\n\n.left-desc-title {\n  width: 100%;\n  text-align: center;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.left-desc-content {\n  width: 100%;\n  text-align: center;\n  font-weight: 300;\n  color: #7e8890;\n  font-size: 1rem; }\n\n.right-desc {\n  width: 100%; }\n  .right-desc img {\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); }\n\n.right-desc-img {\n  width: 100%; }\n\n.team-desc {\n  display: none; }\n\n@media screen and (min-device-width: 414px) {\n  .main-slogan {\n    letter-spacing: 0.1em;\n    font-size: 1.9rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    font-size: 1.9rem;\n    font-weight: normal; }\n  .main-signup-button {\n    width: 90%;\n    font-size: 1.9rem; }\n  .postit {\n    min-width: 5rem;\n    max-width: 5rem;\n    height: 5rem;\n    font-size: 3rem; } }\n\n@media screen and (min-device-width: 768px) {\n  .main-slogan {\n    letter-spacing: 0.1em;\n    font-size: 4rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    top: 40%;\n    font-size: 2rem;\n    font-weight: normal; }\n  .main-signup-button-container {\n    top: 50%; }\n  .main-signup-button {\n    width: 60%;\n    font-size: 2.5rem; }\n  .postit {\n    min-width: 7rem;\n    max-width: 7rem;\n    height: 7rem;\n    font-size: 3em; }\n  .desc-container {\n    color: #333c4e;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    min-height: 60rem; }\n  .left-desc {\n    width: 50%;\n    padding: 2em 5em;\n    line-height: 3em;\n    height: 28.8rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .left-desc-title {\n    text-align: left;\n    font-weight: 300;\n    font-size: 2rem; }\n  .left-desc-content {\n    width: 100%;\n    text-align: left;\n    font-weight: 300;\n    color: #7e8890;\n    font-size: 1.5rem; }\n  .right-desc {\n    width: 50%;\n    padding: 2em 5em; }\n  .right-desc-img {\n    width: 100%; }\n  .team-desc {\n    display: block;\n    position: fixed;\n    bottom: 0%;\n    width: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    color: #fff;\n    font-weight: 300;\n    text-align: center;\n    height: 4em;\n    line-height: 4em;\n    letter-spacing: 0.2rem; } }\n\n@media screen and (min-device-width: 1024px) {\n  .homepage-main-image {\n    margin: -11rem 0 -10rem 0; }\n  .main-slogan {\n    top: 30%;\n    letter-spacing: 0.1em;\n    font-size: 4rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    font-size: 2rem;\n    font-weight: 300; }\n  .main-signup-button-container {\n    top: 50%; }\n  .main-signup-button {\n    width: 30%;\n    font-size: 2.5rem; }\n  .left-desc {\n    height: 40rem; }\n  .border-line {\n    margin-top: 15rem; }\n  /* typist css */\n  .Typist .Cursor--blinking {\n    opacity: 1;\n    -webkit-animation: blink 1s linear infinite;\n            animation: blink 1s linear infinite; }\n  @-webkit-keyframes blink {\n    0% {\n      opacity: 1; }\n    50% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  @keyframes blink {\n    0% {\n      opacity: 1; }\n    50% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } } }\n\n.addBoard {\n  text-decoration: none;\n  font-size: 1.5em;\n  opacity: 0.5;\n  color: black;\n  text-align: center;\n  background-color: grey;\n  padding-top: 4%;\n  padding-bottom: 4%; }\n  .addBoard:hover, .addBoard:focus {\n    text-decoration: none;\n    color: black; }\n\n.snapTo {\n  top: 75px;\n  left: 88%;\n  width: auto;\n  margin-right: auto;\n  position: absolute; }\n\n.screen {\n  border: thin solid black;\n  background-color: #E8E8E8;\n  padding-bottom: 2%;\n  margin-bottom: 5%;\n  padding-top: 2%;\n  overflow: auto; }\n\n.note {\n  width: 100%;\n  height: 100%; }\n\n.grid {\n  background-color: #EF2D29; }\n\n#table {\n  background-color: #CEE3F8;\n  height: 100vh;\n  width: 100vw; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.form-container {\n  font-family: \"Open Sans\", sans-serif;\n  width: 90vw;\n  background-color: #fff;\n  margin: 0 auto;\n  margin-top: 2em;\n  box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32);\n  border-bottom-right-radius: 60px 10px;\n  border-bottom-left-radius: 60px 10px; }\n\n.login {\n  height: 30vh;\n  min-height: 23em; }\n\n.signup {\n  height: 65vh;\n  min-height: 32em; }\n\n.signup-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  padding-top: 2em; }\n\n.login-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  padding-top: 1em; }\n\n.signup-input-field {\n  width: 80%;\n  text-align: left;\n  line-height: 2em;\n  height: 2em;\n  display: block;\n  margin: 0 auto;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field {\n  width: 100%;\n  text-align: left;\n  line-height: 2em;\n  display: block;\n  height: 2em;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field:focus {\n  border: 1px solid #4099FF; }\n\n.signup-input-field:focus {\n  border: 1px solid #4099FF; }\n\n.signup-disclaimer-container {\n  font-size: 0.65em;\n  width: 80%;\n  margin: 0 auto; }\n\n.alert-warning {\n  text-align: center;\n  margin: 0 auto;\n  font-weight: bold;\n  width: 80%;\n  line-height: 2em;\n  display: block;\n  margin-top: 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em;\n  font-weight: bold; }\n\n.signup-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em;\n  font-weight: bold; }\n\n.login-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #4099FF;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n.signup-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #4099FF;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n@media screen and (min-device-width: 768px) {\n  .form-container {\n    width: 40vw;\n    background-color: #fff;\n    margin: 0 auto;\n    margin-top: 2em;\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); } }\n\n.slideIn-appear {\n  margin-top: -500px; }\n\n.slideIn-appear.slideIn-appear-active {\n  margin-top: 0;\n  -webkit-transition: margin-top .5s ease-in;\n  transition: margin-top .5s ease-in; }\n\n@-webkit-keyframes raising {\n  0% {\n    box-shadow: 0em 0.25em 2em -0.5em #363636, 0em -0.2em 0.2em -0.2em #363636;\n    -webkit-transform: rotate(0deg) scale(1) translate(0, 0);\n            transform: rotate(0deg) scale(1) translate(0, 0); }\n  60% {\n    -webkit-transform: rotate(-8deg) scale(1.12) translate(-5%, -5%);\n            transform: rotate(-8deg) scale(1.12) translate(-5%, -5%); }\n  100% {\n    box-shadow: 0.5em 0.75em 3em -0.2em #363636, 0em 0em 0em 0em rgba(54, 54, 54, 0);\n    -webkit-transform: rotate(-7deg) scale(1.05) translate(-3%, -3%);\n            transform: rotate(-7deg) scale(1.05) translate(-3%, -3%); } }\n\n@keyframes raising {\n  0% {\n    box-shadow: 0em 0.25em 2em -0.5em #363636, 0em -0.2em 0.2em -0.2em #363636;\n    -webkit-transform: rotate(0deg) scale(1) translate(0, 0);\n            transform: rotate(0deg) scale(1) translate(0, 0); }\n  60% {\n    -webkit-transform: rotate(-8deg) scale(1.12) translate(-5%, -5%);\n            transform: rotate(-8deg) scale(1.12) translate(-5%, -5%); }\n  100% {\n    box-shadow: 0.5em 0.75em 3em -0.2em #363636, 0em 0em 0em 0em rgba(54, 54, 54, 0);\n    -webkit-transform: rotate(-7deg) scale(1.05) translate(-3%, -3%);\n            transform: rotate(-7deg) scale(1.05) translate(-3%, -3%); } }\n\n.c-note {\n  display: block;\n  background: #edd00d;\n  padding-top: 100%;\n  border-radius: 0.3em;\n  box-shadow: 0em 0.25em 2em -0.5em #363636, 0em -0.2em 0.2em -0.2em rgba(54, 54, 54, 0.12); }\n\n.c-note--raised {\n  -webkit-animation-name: raising;\n          animation-name: raising;\n  -webkit-animation-duration: 300ms;\n          animation-duration: 300ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.c-note--focused {\n  box-shadow: 0.1em 0.1em 1em 0 #8c7b08; }\n\n.c-note---createwrapper {\n  font-size: 4vw; }\n  @media screen and (min-width: 992px) {\n    .c-note---createwrapper {\n      font-size: 19.84px; } }\n\n.c-note__inner {\n  display: block;\n  position: absolute;\n  width: calc(100% - 2em);\n  top: 1em;\n  right: 1em;\n  bottom: 1vw;\n  left: 1em;\n  overflow: hidden;\n  border-bottom: solid transparent; }\n\n.c-note__content {\n  display: block;\n  font-size: inherit;\n  word-wrap: break-word;\n  font-family: \"Comfortaa\";\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: visible;\n  line-height: 1.5em; }\n\n.c-note__input {\n  position: absolute;\n  left: -200vw;\n  top: -200vh; }\n\n.c-mention {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n  padding: 0 0.2em;\n  word-wrap: break-word;\n  background: rgba(230, 230, 239, 0.5);\n  border-radius: 0.2em;\n  overflow: visible; }\n\n.c-mention--suggesting {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.c-mention__suggestions {\n  position: absolute;\n  display: block;\n  padding: 0;\n  margin: 0;\n  top: 100%;\n  left: 0;\n  background: rgba(230, 230, 239, 0.5);\n  border-radius: 0.2em;\n  border-top-left-radius: 0; }\n  .c-mention__suggestions li {\n    list-style: none; }\n  .c-mention__suggestions button {\n    border: none;\n    background: none;\n    color: inherit;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit; }\n    .c-mention__suggestions button:hover {\n      color: #edd00d; }\n\n.c-note__clear-btn {\n  background: #E6E6EF;\n  border: none;\n  font-size: 1.3em;\n  border-radius: 0.1em; }\n\n.top {\n  z-index: 2;\n  position: relative; }\n\n.bottom {\n  z-index: 1;\n  position: relative; }\n\n/*!\n * Start Bootstrap - Simple Sidebar HTML Template (http://startbootstrap.com)\n * Code licensed under the Apache License v2.0.\n * For details, see http://www.apache.org/licenses/LICENSE-2.0.\n */\n/* Toggle Styles */\n#wrapper {\n  padding-left: 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled {\n  padding-left: 250px; }\n\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #000;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px; }\n\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px; }\n\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px; }\n\n/* Sidebar Styles */\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px; }\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999; }\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2); }\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none; }\n\n.sidebar-nav > .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px; }\n\n.sidebar-nav > .sidebar-brand a {\n  color: #999999; }\n\n.sidebar-nav > .sidebar-brand a:hover {\n  color: #fff;\n  background: none; }\n\n@media (min-width: 768px) {\n  #wrapper {\n    padding-left: 250px; }\n  #wrapper.toggled {\n    padding-left: 0; }\n  #sidebar-wrapper {\n    width: 250px; }\n  #wrapper.toggled #sidebar-wrapper {\n    width: 0; }\n  #page-content-wrapper {\n    padding: 20px;\n    position: relative; }\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0; } }\n\n.ion-gear-b {\n  border: none;\n  background: white;\n  -webkit-appearance: none; }\n\n.c-color-picker {\n  display: block;\n  width: 100%;\n  background: #E6E6EF;\n  border-radius: 0.4em;\n  box-shadow: 0 0 0.5em 0 #363636; }\n\n.c-color-picker__wrapper--modal {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  height: 100vh;\n  z-index: 100;\n  margin: 0 auto;\n  background: #ffffff; }\n  .c-color-picker__wrapper--modal .c-color-picker {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 80%;\n    padding-top: 80%; }\n  @media screen and (min-width: 992px) {\n    .c-color-picker__wrapper--modal {\n      left: 33%;\n      width: 34%; } }\n\n.c-color-picker__sample {\n  display: block;\n  width: 100%;\n  padding-top: 5%; }\n\n.c-color-picker__saturation {\n  cursor: pointer;\n  padding-top: 30%; }\n\n.c-color-picker__hue {\n  cursor: pointer;\n  padding-top: 10%; }\n\n.c-color-picker__presets {\n  margin-top: 1em; }\n  .c-color-picker__presets::after {\n    content: '';\n    display: block;\n    clear: both; }\n\n.c-color-picker__preset {\n  float: left;\n  width: 13.7%;\n  margin: 1% 3%;\n  padding-top: 13.6%;\n  cursor: pointer;\n  border-radius: 10%; }\n\n.c-color-picker__close {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  padding: 0.2em;\n  font-size: 3em;\n  background: none;\n  border: none; }\n\n.participants-container {\n  display: none; }\n\n.participant-number-container {\n  text-align: center;\n  padding: 0.8em 0;\n  border-bottom: 2px solid black;\n  font-size: 1.5rem; }\n\n.participant-number i {\n  margin: 0 0.6em; }\n\n.participant-list-container {\n  margin: 0.6em;\n  height: 100%; }\n\n.participant-list {\n  list-style-type: none;\n  padding: 0;\n  text-align: left; }\n\n.participant-item {\n  margin: 0.4em 0; }\n\n.participant-image {\n  background: #3a3f41;\n  border-radius: 50%;\n  width: 4rem;\n  height: 4rem;\n  display: inline-block;\n  color: #fff;\n  vertical-align: middle;\n  position: relative; }\n\n.participant {\n  margin: 0 1em;\n  text-align: left;\n  display: inline-block;\n  height: 4rem;\n  line-height: 4rem;\n  vertical-align: middle; }\n\n.participant-icon {\n  text-align: center;\n  position: absolute;\n  top: 30%;\n  left: 32%; }\n\n@media screen and (min-device-width: 1281px) {\n  .participants-container {\n    position: fixed;\n    width: 15vw;\n    padding-top: 0.3em;\n    min-height: 100vh;\n    max-height: 100vh;\n    float: right;\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32);\n    display: block;\n    top: 0%;\n    z-index: 1000;\n    background: #fff;\n    transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -webkit-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -moz-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    overflow: auto; }\n  .participants-container-show {\n    right: 0%; }\n  .participants-container-hide {\n    right: -14.7%; } }\n\n.board-page-container {\n  position: relative; }\n\n.note-details-close-btn {\n  position: absolute;\n  top: 0.1%;\n  right: 1%;\n  background-color: #192C46;\n  border-radius: 50%;\n  color: white;\n  border: 0;\n  font-size: 1em;\n  z-index: 999; }\n\n.note-details-container {\n  top: 1%;\n  width: 94vw;\n  height: 90vh;\n  font-family: \"Open Sans\", sans-serif;\n  padding: 1.5em;\n  margin: 0.5em auto;\n  border-radius: 2px;\n  background: -webkit-linear-gradient(135deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%);\n  background: linear-gradient(-45deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%);\n  border: 0;\n  z-index: 99999;\n  box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); }\n\n.note-details-note {\n  padding: 0.5em;\n  height: 20vh;\n  width: 100%;\n  margin: 0 auto;\n  border-radius: 7px;\n  word-wrap: break-word; }\n\n.comment-form {\n  margin-top: 0.5em; }\n\n.comment-input-container {\n  width: 100%;\n  height: 3em;\n  margin: 0; }\n\n.comment-text-area {\n  margin: 0;\n  padding: 0.5em;\n  width: 80%;\n  height: 100%;\n  margin-right: 5%;\n  font-size: 1em;\n  border-radius: 5px;\n  border: 1px solid #69bdf4; }\n  .comment-text-area:focus {\n    outline: none; }\n\n.comment-submit-button {\n  height: 100%;\n  font-size: 2em;\n  border-radius: 2px;\n  width: 15%;\n  border: none;\n  padding: 0;\n  background-color: #fff; }\n\n.note-details-comments {\n  overflow: hidden; }\n  .note-details-comments .inner {\n    height: 55vh;\n    overflow: auto;\n    margin: 0.3em -3rem 0.3em 0.3em;\n    padding-right: 3.3rem; }\n\n.note-details-comment {\n  color: white;\n  padding: 0.7em 0.9em;\n  line-height: 1.5em;\n  font-size: 1em;\n  border-radius: 7px;\n  margin-top: 1em;\n  margin-bottom: 0;\n  width: 100%;\n  position: relative; }\n  .note-details-comment:after {\n    bottom: 100%;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-width: 10px;\n    margin-left: -10px; }\n\n.note-details-comment:nth-child(odd) {\n  background: #94C2ED; }\n  .note-details-comment:nth-child(odd):after {\n    border-bottom-color: #94C2ED;\n    left: 93%; }\n\n.note-details-comment:nth-child(even) {\n  background: #86BB71; }\n  .note-details-comment:nth-child(even):after {\n    border-bottom-color: #86BB71;\n    left: 7%; }\n\n.noteDetailSlideIn-appear {\n  margin-top: -800px; }\n\n.noteDetailSlideIn-appear.noteDetailSlideIn-appear-active {\n  margin-top: 0;\n  -webkit-transition: margin-top .5s ease-in;\n  transition: margin-top .5s ease-in; }\n\n@media screen and (min-device-width: 1024px) {\n  .note-details-container {\n    position: absolute;\n    width: 40vw;\n    height: 90vh;\n    left: 30vw; } }\n\n/** Controls\n * Override / Helper / Utility classes\n * class prefix: `ctrl-`\n */\n.ctrl-centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n", ""]);
	
	// exports


/***/ },

/***/ 501:
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
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 371);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _Note = __webpack_require__(/*! ./Note */ 502);
	
	var _Note2 = _interopRequireDefault(_Note);
	
	var _ShouldCompUpdate = __webpack_require__(/*! ./ShouldCompUpdate */ 512);
	
	var _NoteWrapperModalContainer = __webpack_require__(/*! ../containers/NoteWrapperModalContainer */ 513);
	
	var _NoteWrapperModalContainer2 = _interopRequireDefault(_NoteWrapperModalContainer);
	
	var _bindHandlers = __webpack_require__(/*! ../utils/bindHandlers */ 503);
	
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
	        height: this.props.height || '8em',
	        width: this.props.width || '8em',
	        left: this.props.left || 0,
	        top: this.props.top || 0,
	        position: 'absolute'
	      };
	
	      var backgroundColor = red ? 'red' : 'transparent';
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'noteWrapper ' + (this.state.focused ? 'noteWrapper--focused' : '') },
	        _react2.default.createElement(
	          'div',
	          { className: 'enlarge',
	            onDoubleClick: function onDoubleClick() {
	              _this2.props.showNoteComments(color, content, id);
	            },
	            style: _extends({}, styles, { backgroundColor: backgroundColor }),
	            ref: function ref(input) {
	              _this2.input = input;
	            },
	            onFocus: this.focusHandler,
	            onBlur: this.blurHandler,
	            onChange: this.changeHandler },
	          _react2.default.createElement(_Note2.default, { color: color, content: content, raised: this.props.noteRaised, input: this.props.content, onFocus: this.focusHandler })
	        )
	      );
	    }
	  }]);
	
	  return NoteWrapper;
	}(_react.PureComponent);
	
	exports.default = NoteWrapper;

/***/ },

/***/ 502:
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
	
	var _bindHandlers = __webpack_require__(/*! ../utils/bindHandlers */ 503);
	
	var _bindHandlers2 = _interopRequireDefault(_bindHandlers);
	
	var _color = __webpack_require__(/*! color */ 504);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Note(props) {
	  var focused = props.focused,
	      raised = props.raised;
	
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
	      className: 'c-note ' + (focused ? 'c-note--focused' : '') + ' ' + (raised ? 'c-note--raised' : ''),
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

/***/ 578:
/*!**********************************************!*\
  !*** ./client/components/NoteDragPreview.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NoteWrapper = __webpack_require__(/*! ./NoteWrapper */ 501);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _ShouldCompUpdate = __webpack_require__(/*! ./ShouldCompUpdate */ 512);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  display: 'inline-block'
	};
	
	var NoteDragPreview = function (_Component) {
	  _inherits(NoteDragPreview, _Component);
	
	  _createClass(NoteDragPreview, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _ShouldCompUpdate.shallowEqual)(this.props, nextProps);
	    }
	  }]);
	
	  function NoteDragPreview(props) {
	    _classCallCheck(this, NoteDragPreview);
	
	    var _this = _possibleConstructorReturn(this, (NoteDragPreview.__proto__ || Object.getPrototypeOf(NoteDragPreview)).call(this, props));
	
	    _this.tick = _this.tick.bind(_this);
	    _this.state = {
	      tickTock: false
	    };
	
	    return _this;
	  }
	
	  _createClass(NoteDragPreview, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      this.interval = setInterval(this.tick, 200);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearInterval(this.interval);
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      this.setState({
	        tickTock: !this.state.tickTock
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tickTock = this.state.tickTock;
	      var content = this.props.content;
	
	
	      return _react2.default.createElement(
	        'div',
	        { style: styles },
	        _react2.default.createElement(_NoteWrapper2.default, { noteRaised: true, red: tickTock, content: content })
	      );
	    }
	  }]);
	
	  return NoteDragPreview;
	}(_react.Component);
	
	exports.default = NoteDragPreview;

/***/ }

})
//# sourceMappingURL=0.9cb0a446de687e51d6d3.hot-update.js.map