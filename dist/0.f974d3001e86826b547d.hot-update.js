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
	exports.push([module.id, "/** Settings\n */\n/** Tools\n * Mixins / Functions\n */\n/** Generic\n * Resets\n */\nbody {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  position: relative;\n  box-sizing: inherit; }\n\nbody {\n  margin-top: 50px; }\n\n/** Base\n * Element styles (no classes)\n */\n/** Objects\n * Reusable layout patterns\n * class prefix: `o-`\n */\n.o-aspect-ratio, .c-color-picker {\n  display: block; }\n\n.o-aspect-ratio__inner, .c-color-picker__inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.o-aspect-ratio--sq, .c-color-picker {\n  padding: 100% 0 0 0; }\n\n.o-aspect-ratio--2-1 {\n  padding: 50% 0 0 0; }\n\n.o-aspect-ratio--1-2 {\n  padding: 200% 0 0 0; }\n\n/** Components\n * Patterns with a visual design\n * class prefix: `c-`\n */\n.btn-color {\n  width: 5em;\n  height: 3em;\n  box-sizing: border-box;\n  border: 0.5em solid #ffffff;\n  box-shadow: 0 0 0.2em 0 #363636; }\n\n.hideThis {\n  display: none; }\n\n@media screen and (max-width: 799px) {\n  .snapTo {\n    display: none; }\n  .trashcan {\n    display: none; }\n  .ClipboardBlocking {\n    display: none; }\n  .boardTitle {\n    position: absolute;\n    font-size: 2em;\n    padding-bottom: 25px;\n    word-wrap: none;\n    margin: 1em;\n    text-shadow: center;\n    left: 20vw;\n    -webkit-transform: translateX(-20%);\n        -ms-transform: translateX(-20%);\n            transform: translateX(-20%); } }\n\n.ClipboardBlocking {\n  visibility: hidden; }\n\n.mobile {\n  margin-top: 20%; }\n\n.mobileListItem {\n  list-style-type: none;\n  border-bottom: 1px dashed black;\n  padding-left: 0;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  margin-left: 5%;\n  margin-right: 5%;\n  float: right; }\n\n.mobileNoteContent {\n  word-wrap: break-word;\n  text-align: left;\n  padding-right: 0;\n  width: 80%;\n  margin-top: 2%;\n  margin-bottom: 2%; }\n\n.noteBlock {\n  display: inline-block;\n  width: 20%;\n  margin-top: 2%;\n  margin-top: 2%;\n  margin-bottom: 2%; }\n\n@media screen and (min-width: 800px) {\n  .snapTo {\n    display: inline-block; }\n  .boardTitle {\n    position: fixed;\n    left: 50vw;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%);\n    margin: 75px; } }\n\n.navbar {\n  border-bottom: 1px solid black;\n  margin-bottom: 0;\n  background: #ffffff;\n  z-index: 99999; }\n\n.navbar a {\n  color: #363636; }\n\n.icon-bar {\n  background-color: black; }\n\n.navbar-toggle {\n  border-color: black; }\n\n.navClass {\n  top: -100%;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n.navToggle {\n  top: 0; }\n\n.navTitle {\n  display: none; }\n\n@media screen and (min-width: 768px) {\n  .navbarGearIcon {\n    display: none; }\n  .navTitle {\n    display: inline-block;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); } }\n\n.trashcan_img {\n  max-height: 5rem;\n  max-width: 5rem; }\n\n.trashcan {\n  top: 85vh;\n  left: 89%;\n  z-index: 1;\n  position: fixed;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.homepage-container {\n  overflow: hidden;\n  position: relative;\n  font-family: \"Open Sans\", sans-serif; }\n\n.homepage-main-image-container {\n  position: relative; }\n\n.homepage-main-image {\n  width: 100vw;\n  max-width: 100%; }\n\n.main-slogan {\n  position: absolute;\n  top: 10%;\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n  z-index: 999;\n  width: 100%;\n  text-shadow: 1px 1px 10px #000; }\n\n.main-mini-desc {\n  position: absolute;\n  top: 20%;\n  font-style: italic;\n  color: #fff;\n  font-size: 1.3rem;\n  text-align: center;\n  z-index: 999;\n  width: 100%;\n  text-shadow: 1px 1px 10px #000; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.main-signup-button-container {\n  position: absolute;\n  top: 40%;\n  font-size: 1.8rem;\n  width: 100%;\n  text-align: center; }\n\n.main-signup-button {\n  width: 80%;\n  border-radius: 500px;\n  background-color: #FFFFA5;\n  color: #333333;\n  font-weight: bold;\n  font-family: \"Permanent Marker\";\n  border: none;\n  padding: 1.5rem 3rem;\n  cursor: pointer; }\n\n.main-signup-button:hover {\n  background-color: #333333;\n  color: #FFFFA5; }\n\n.postit-view {\n  position: absolute;\n  top: 70%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: \"Caveat Brush\"; }\n\n.bulb-img {\n  width: 100%;\n  vertical-align: top; }\n\n.postit {\n  box-sizing: border-box;\n  margin: 0.2em;\n  min-width: 3.7rem;\n  max-width: 3.7rem;\n  height: 3.7rem;\n  padding: 0.1em;\n  border: 1px solid #E8E8E8;\n  font-size: 1.8rem;\n  text-align: center;\n  border-bottom-right-radius: 60px 5px;\n  vertical-align: middle; }\n\n.postit:nth-child(even) {\n  -webkit-transform: rotate(4deg);\n  -moz-transform: rotate(4deg); }\n\n.postit:nth-child(odd) {\n  -webkit-transform: rotate(-4deg);\n  -moz-transform: rotate(-4deg); }\n\n.yellow {\n  background: -webkit-linear-gradient(315deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%); }\n\n.lightyellow {\n  background: -webkit-linear-gradient(315deg, #ffffa5 81%, #ffffa5 82%, #ffffa5 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffffa5 81%, #ffffa5 82%, #ffffa5 82%, #ffffc6 100%); }\n\n.pink {\n  background: -webkit-linear-gradient(315deg, #ff879b 81%, #ff879b 82%, #ffc7d0 100%);\n  background: linear-gradient(135deg, #ff879b 81%, #ff879b 82%, #ffc7d0 100%); }\n\n.green {\n  background: -webkit-linear-gradient(315deg, #b1ff87 81%, #b1ff87 82%, #dbffc7 100%);\n  background: linear-gradient(135deg, #b1ff87 81%, #b1ff87 82%, #dbffc7 100%); }\n\n.blue {\n  background: -webkit-linear-gradient(315deg, #b3e8ff 81%, #b3e8ff 82%, #b3e8ff 100%);\n  background: linear-gradient(135deg, #b3e8ff 81%, #b3e8ff 82%, #b3e8ff 100%); }\n\n.brightgreen {\n  background: -webkit-linear-gradient(315deg, #b3ffc0 81%, #b3ffc0 82%, #dbffc7 100%);\n  background: linear-gradient(135deg, #b3ffc0 81%, #b3ffc0 82%, #dbffc7 100%); }\n\n.border-line {\n  width: 90%;\n  border-bottom: 2px solid #7e8890;\n  margin: 0 auto;\n  margin-top: 3em; }\n\n.desc-container {\n  color: #333c4e; }\n\n.left-desc {\n  width: 100%;\n  padding: 0.8em;\n  line-height: 1.5em; }\n\n.left-desc-title {\n  width: 100%;\n  text-align: center;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.left-desc-content {\n  width: 100%;\n  text-align: center;\n  font-weight: 300;\n  color: #7e8890;\n  font-size: 1rem; }\n\n.right-desc {\n  width: 100%; }\n  .right-desc img {\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); }\n\n.right-desc-img {\n  width: 100%; }\n\n.team-desc {\n  display: none; }\n\n@media screen and (min-device-width: 414px) {\n  .main-slogan {\n    letter-spacing: 0.1em;\n    font-size: 1.9rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    font-size: 1.6rem;\n    font-weight: normal; }\n  .main-signup-button {\n    width: 90%;\n    font-size: 1.9rem; }\n  .postit {\n    min-width: 4.6rem;\n    max-width: 4.6rem;\n    height: 4.6rem;\n    font-size: 3rem; } }\n\n@media screen and (min-device-width: 768px) {\n  .main-slogan {\n    letter-spacing: 0.1em;\n    font-size: 4rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    top: 40%;\n    font-size: 2rem;\n    font-weight: normal; }\n  .main-signup-button-container {\n    top: 50%; }\n  .main-signup-button {\n    width: 60%;\n    font-size: 2.5rem; }\n  .postit {\n    min-width: 7rem;\n    max-width: 7rem;\n    height: 7rem;\n    font-size: 3em; }\n  .desc-container {\n    color: #333c4e;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    min-height: 60rem; }\n  .left-desc {\n    width: 50%;\n    padding: 2em 5em;\n    line-height: 3em;\n    height: 28.8rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .left-desc-title {\n    text-align: left;\n    font-weight: 300;\n    font-size: 2rem; }\n  .left-desc-content {\n    width: 100%;\n    text-align: left;\n    font-weight: 300;\n    color: #7e8890;\n    font-size: 1.5rem; }\n  .right-desc {\n    width: 50%;\n    padding: 2em 5em; }\n  .right-desc-img {\n    width: 100%; }\n  .team-desc {\n    display: block;\n    position: fixed;\n    bottom: 0%;\n    width: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    color: #fff;\n    font-weight: 300;\n    text-align: center;\n    height: 4em;\n    line-height: 4em;\n    letter-spacing: 0.2rem; } }\n\n@media screen and (min-device-width: 1024px) {\n  .homepage-main-image {\n    margin: -11rem 0 -10rem 0; }\n  .main-slogan {\n    top: 30%;\n    letter-spacing: 0.1em;\n    font-size: 4rem;\n    font-weight: normal; }\n  .main-mini-desc {\n    font-size: 2rem;\n    font-weight: 300; }\n  .main-signup-button-container {\n    top: 50%; }\n  .main-signup-button {\n    width: 30%;\n    font-size: 2.5rem; }\n  .left-desc {\n    height: 40rem; }\n  .border-line {\n    margin-top: 15rem; }\n  /* typist css */\n  .Typist .Cursor--blinking {\n    opacity: 1;\n    -webkit-animation: blink 1s linear infinite;\n            animation: blink 1s linear infinite; }\n  @-webkit-keyframes blink {\n    0% {\n      opacity: 1; }\n    50% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  @keyframes blink {\n    0% {\n      opacity: 1; }\n    50% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } } }\n\n.addBoard {\n  text-decoration: none;\n  font-size: 1.5em;\n  height: 100%;\n  opacity: 0.5;\n  color: black;\n  text-align: center;\n  background-color: grey;\n  padding-top: 4%;\n  padding-bottom: 4%; }\n  .addBoard:hover, .addBoard:focus {\n    text-decoration: none;\n    color: black; }\n\n.boardBoxes {\n  width: 20em;\n  height: 200px;\n  position: relative; }\n\n.createButton {\n  width: 21em;\n  height: 262px;\n  position: relative;\n  display: inline-block;\n  margin: 0 5px 0 5px; }\n\n.deleteButton {\n  float: right;\n  text-align: right;\n  vertical-align: middle;\n  color: #292b2c;\n  background-color: #f2f2f2;\n  border-color: #ccc;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.snapTo {\n  top: 75px;\n  left: 88%;\n  width: auto;\n  margin-right: auto;\n  position: absolute;\n  z-index: 1000;\n  display: none; }\n\n.screen {\n  border: thin solid black;\n  background-color: #E8E8E8;\n  padding-bottom: 2%;\n  margin-bottom: 5%;\n  padding-top: 2%;\n  overflow: auto; }\n\n.note {\n  width: 100%;\n  height: 100%; }\n\n.grid {\n  background-color: #EF2D29; }\n\n.boardTitle {\n  padding: 15px 15px;\n  font-size: 20px;\n  line-height: 20px;\n  color: black; }\n\n@media screen and (min-width: 768px) {\n  .boardTitle {\n    display: none; } }\n\n#table {\n  background-color: #CEE3F8;\n  height: 100vh;\n  width: 100vw; }\n\ninput:focus {\n  outline: none; }\n\nbutton:focus {\n  outline: none; }\n\n.form-container {\n  font-family: \"Open Sans\", sans-serif;\n  width: 90vw;\n  background-color: #fff;\n  margin: 0 auto;\n  margin-top: 4em;\n  padding-bottom: 2em;\n  box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32);\n  border-bottom-right-radius: 60px 10px;\n  border-bottom-left-radius: 60px 10px; }\n\n.login {\n  min-height: 23em; }\n\n.signup {\n  min-height: 32em; }\n\n.signup-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  padding-top: 2em; }\n\n.login-label {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  padding-top: 2em; }\n\n.signup-input-field {\n  width: 80%;\n  text-align: left;\n  line-height: 2em;\n  height: 2em;\n  display: block;\n  margin: 0 auto;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field {\n  width: 100%;\n  text-align: left;\n  line-height: 2em;\n  display: block;\n  height: 2em;\n  margin-top: 1em;\n  padding: 1em 0.5em 1em 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-input-field:focus {\n  border: 1px solid #4099FF; }\n\n.signup-input-field:focus {\n  border: 1px solid #4099FF; }\n\n.signup-disclaimer-container {\n  font-size: 0.65em;\n  width: 80%;\n  margin: 0 auto; }\n\n.alert-warning {\n  text-align: center;\n  margin: 0 auto;\n  font-weight: bold;\n  width: 80%;\n  line-height: 1em;\n  display: block;\n  margin-top: 1em;\n  border-radius: 2px;\n  border: 1px solid #dfe0e6; }\n\n.login-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em;\n  font-weight: bold; }\n\n.signup-submit-button {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #2EBD59;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em;\n  font-weight: bold; }\n\n.login-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #4099FF;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n.signup-link-container {\n  width: 80%;\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 500px;\n  display: block;\n  background-color: #4099FF;\n  border: none;\n  height: 2.5em;\n  margin-top: 0.8em; }\n\n@media screen and (min-device-width: 768px) {\n  .form-container {\n    width: 40vw;\n    background-color: #fff;\n    margin: 0 auto;\n    margin-top: 6em;\n    box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); } }\n\n.slideIn-appear {\n  margin-top: -500px; }\n\n.slideIn-appear.slideIn-appear-active {\n  margin-top: 0;\n  -webkit-transition: margin-top 0.5s ease-in;\n  transition: margin-top 0.5s ease-in; }\n\n@-webkit-keyframes hvr-wobble-horizontal {\n  16.65% {\n    -webkit-transform: translateX(8px);\n    transform: translateX(8px); }\n  33.3% {\n    -webkit-transform: translateX(-6px);\n    transform: translateX(-6px); }\n  49.95% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px); }\n  66.6% {\n    -webkit-transform: translateX(-2px);\n    transform: translateX(-2px); }\n  83.25% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px); }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes hvr-wobble-horizontal {\n  16.65% {\n    -webkit-transform: translateX(8px);\n    transform: translateX(8px); }\n  33.3% {\n    -webkit-transform: translateX(-6px);\n    transform: translateX(-6px); }\n  49.95% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px); }\n  66.6% {\n    -webkit-transform: translateX(-2px);\n    transform: translateX(-2px); }\n  83.25% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px); }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n.hvr-wobble-horizontal {\n  vertical-align: middle;\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0); }\n\n.hvr-wobble-horizontal:hover, .hvr-wobble-horizontal:focus, .hvr-wobble-horizontal:active, .hvr-wobble-horizontal-active {\n  -webkit-animation-name: hvr-wobble-horizontal;\n  animation-name: hvr-wobble-horizontal;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1; }\n\n@-webkit-keyframes raising {\n  0% {\n    box-shadow: 0em 0.25em 2em -0.5em #363636, 0em -0.2em 0.2em -0.2em #363636;\n    -webkit-transform: rotate(0deg) scale(1) translate(0, 0);\n            transform: rotate(0deg) scale(1) translate(0, 0); }\n  60% {\n    -webkit-transform: rotate(-8deg) scale(1.12) translate(-5%, -5%);\n            transform: rotate(-8deg) scale(1.12) translate(-5%, -5%); }\n  100% {\n    box-shadow: 0.5em 0.75em 3em -0.2em #363636, 0em 0em 0em 0em rgba(54, 54, 54, 0);\n    -webkit-transform: rotate(-7deg) scale(1.05) translate(-3%, -3%);\n            transform: rotate(-7deg) scale(1.05) translate(-3%, -3%); } }\n\n@keyframes raising {\n  0% {\n    box-shadow: 0em 0.25em 2em -0.5em #363636, 0em -0.2em 0.2em -0.2em #363636;\n    -webkit-transform: rotate(0deg) scale(1) translate(0, 0);\n            transform: rotate(0deg) scale(1) translate(0, 0); }\n  60% {\n    -webkit-transform: rotate(-8deg) scale(1.12) translate(-5%, -5%);\n            transform: rotate(-8deg) scale(1.12) translate(-5%, -5%); }\n  100% {\n    box-shadow: 0.5em 0.75em 3em -0.2em #363636, 0em 0em 0em 0em rgba(54, 54, 54, 0);\n    -webkit-transform: rotate(-7deg) scale(1.05) translate(-3%, -3%);\n            transform: rotate(-7deg) scale(1.05) translate(-3%, -3%); } }\n\n.c-note {\n  display: block;\n  background: #edd00d;\n  padding-top: 100%;\n  border-radius: 0.3em;\n  box-shadow: 0em 0.25em 2em -0.5em #363636, 0em -0.2em 0.2em -0.2em rgba(54, 54, 54, 0.12); }\n\n.c-note--raised {\n  -webkit-animation-name: raising;\n          animation-name: raising;\n  -webkit-animation-duration: 300ms;\n          animation-duration: 300ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.c-note--focused {\n  box-shadow: 0.1em 0.1em 1em 0 #8c7b08; }\n\n.c-note---createwrapper {\n  font-size: 4vw; }\n  @media screen and (min-width: 992px) {\n    .c-note---createwrapper {\n      font-size: 19.84px; } }\n\n.c-note__inner {\n  display: block;\n  position: absolute;\n  width: calc(100% - 2em);\n  top: 1em;\n  right: 1em;\n  bottom: 1vw;\n  left: 1em;\n  overflow: hidden;\n  border-bottom: solid transparent; }\n\n.c-note__content {\n  display: block;\n  font-size: inherit;\n  word-wrap: break-word;\n  font-family: \"Comfortaa\";\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: visible;\n  line-height: 1.5em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.c-note__input {\n  position: absolute;\n  left: -200vw;\n  top: -200vh; }\n\n.c-mention {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n  padding: 0 0.2em;\n  word-wrap: break-word;\n  background: rgba(230, 230, 239, 0.5);\n  border-radius: 0.2em;\n  overflow: visible; }\n\n.c-mention--suggesting {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.c-mention__suggestions {\n  position: absolute;\n  display: block;\n  padding: 0;\n  margin: 0;\n  top: 100%;\n  left: 0;\n  background: rgba(230, 230, 239, 0.5);\n  border-radius: 0.2em;\n  border-top-left-radius: 0; }\n  .c-mention__suggestions li {\n    list-style: none; }\n  .c-mention__suggestions button {\n    border: none;\n    background: none;\n    color: inherit;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit; }\n    .c-mention__suggestions button:hover {\n      color: #edd00d; }\n\n.c-note__clear-btn {\n  background: #E6E6EF;\n  border: none;\n  font-size: 1.3em;\n  border-radius: 0.1em; }\n\n.top {\n  z-index: 2;\n  position: relative; }\n\n.bottom {\n  z-index: 1;\n  position: relative; }\n\n.noteTitle {\n  padding: 15px 15px;\n  font-size: 1.7em;\n  line-height: 20px;\n  color: black; }\n\n/*!\n * Start Bootstrap - Simple Sidebar HTML Template (http://startbootstrap.com)\n * Code licensed under the Apache License v2.0.\n * For details, see http://www.apache.org/licenses/LICENSE-2.0.\n */\n/* Toggle Styles */\n#wrapper {\n  padding-left: 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled {\n  padding-left: 250px; }\n\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #000;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px; }\n\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px; }\n\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px; }\n\n/* Sidebar Styles */\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px; }\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999; }\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2); }\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none; }\n\n.sidebar-nav > .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px; }\n\n.sidebar-nav > .sidebar-brand a {\n  color: #999999; }\n\n.sidebar-nav > .sidebar-brand a:hover {\n  color: #fff;\n  background: none; }\n\n@media (min-width: 768px) {\n  #wrapper {\n    padding-left: 250px; }\n  #wrapper.toggled {\n    padding-left: 0; }\n  #sidebar-wrapper {\n    width: 250px; }\n  #wrapper.toggled #sidebar-wrapper {\n    width: 0; }\n  #page-content-wrapper {\n    padding: 20px;\n    position: relative; }\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0; } }\n\n.ion-gear-b {\n  border: none;\n  background: white;\n  -webkit-appearance: none; }\n\n.c-color-picker {\n  display: block;\n  width: 100%;\n  background: #E6E6EF;\n  border-radius: 0.4em;\n  box-shadow: 0 0 0.5em 0 #363636; }\n\n.c-color-picker__wrapper--modal {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  height: 100vh;\n  z-index: 100;\n  margin: 0 auto;\n  background: #ffffff; }\n  .c-color-picker__wrapper--modal .c-color-picker {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 80%;\n    padding-top: 80%; }\n  @media screen and (min-width: 992px) {\n    .c-color-picker__wrapper--modal {\n      left: 33%;\n      width: 34%; } }\n\n.c-color-picker__sample {\n  display: block;\n  width: 100%;\n  padding-top: 5%; }\n\n.c-color-picker__saturation {\n  cursor: pointer;\n  padding-top: 30%; }\n\n.c-color-picker__hue {\n  cursor: pointer;\n  padding-top: 10%; }\n\n.c-color-picker__presets {\n  margin-top: 1em; }\n  .c-color-picker__presets::after {\n    content: '';\n    display: block;\n    clear: both; }\n\n.c-color-picker__preset {\n  float: left;\n  width: 13.7%;\n  margin: 1% 3%;\n  padding-top: 13.6%;\n  cursor: pointer;\n  border-radius: 10%; }\n\n.c-color-picker__close {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  padding: 0.2em;\n  font-size: 3em;\n  background: none;\n  border: none; }\n\n.participants-container {\n  display: none; }\n\n.participant-number-container {\n  text-align: center;\n  padding: 0.7em 0;\n  color: #fff;\n  border-bottom: 1px solid black;\n  font-size: 1.4rem; }\n\n.participant-number {\n  margin: 0 0.7em;\n  padding: 0.3em 0.3em;\n  background-color: #4099FF;\n  border-radius: 5px; }\n  .participant-number i {\n    margin: 0 0.6em; }\n\n.participant-list-container {\n  margin: 0.6em;\n  height: 100%; }\n\n.participant-list {\n  list-style-type: none;\n  padding: 0;\n  text-align: left; }\n\n.participant-item {\n  padding: 0.8em;\n  border-bottom: 1px solid #ABABAB; }\n\n.participant-image {\n  background: #3a3f41;\n  border-radius: 50%;\n  width: 4rem;\n  height: 4rem;\n  display: inline-block;\n  color: #fff;\n  vertical-align: middle;\n  position: relative; }\n\n.participant {\n  margin: 0 1em;\n  text-align: left;\n  display: inline-block;\n  height: 4rem;\n  line-height: 4rem;\n  vertical-align: middle; }\n\n.participant-icon {\n  text-align: center;\n  position: absolute;\n  top: 30%;\n  left: 32%; }\n\n@media screen and (min-device-width: 1281px) {\n  .participants-container {\n    position: fixed;\n    margin-top: 3em;\n    width: 20vw;\n    padding-top: 0.3em;\n    min-height: 100vh;\n    max-height: 100vh;\n    float: right;\n    border-left: solid 1px #3a3f41;\n    display: block;\n    top: 0%;\n    z-index: 1000;\n    background: #fff;\n    transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -webkit-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    -moz-transition: all 0.6s cubic-bezier(0.02, 0.41, 0.65, 1.05);\n    overflow: auto; }\n  .participants-container-show {\n    right: 0%; }\n  .participants-container-hide {\n    right: -19.5%; } }\n\n.enlarge {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.board-page-container {\n  position: relative; }\n\n.note-details-close-btn {\n  position: absolute;\n  top: 0.1%;\n  right: 1%;\n  background-color: #192C46;\n  border-radius: 50%;\n  color: white;\n  border: 0;\n  font-size: 1em;\n  z-index: 999; }\n\n.note-details-container {\n  position: fixed;\n  top: 10%;\n  left: 2%;\n  width: 94vw;\n  height: 80vh;\n  font-family: \"Open Sans\", sans-serif;\n  padding: 1.5em;\n  margin: 0.5em auto;\n  border-radius: 10px;\n  background: -webkit-linear-gradient(135deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%);\n  background: linear-gradient(-45deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%);\n  border: 0;\n  z-index: 9999;\n  box-shadow: 0 0 1px rgba(76, 86, 103, 0.25), 0 2px 18px rgba(31, 37, 50, 0.32); }\n\n.note-details-note {\n  padding: 1em 1.5em;\n  height: 20vh;\n  width: 100%;\n  margin: 0 auto;\n  border-radius: 7px;\n  word-wrap: break-word; }\n\n.comment-form {\n  margin-top: 0.5em; }\n\n.comment-input-container {\n  width: 100%;\n  height: 3em;\n  margin: 0; }\n\n.comment-text-area {\n  margin: 0;\n  padding: 0.2em;\n  width: 80%;\n  height: 100%;\n  margin-right: 5%;\n  font-size: 1em;\n  border-radius: 5px;\n  border: 1px solid #69bdf4; }\n  .comment-text-area:focus {\n    outline: none; }\n\n.comment-submit-button {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-weight: 700;\n  border-radius: 2px;\n  width: 15%;\n  border: none;\n  padding: 0;\n  background-color: #fff; }\n  .comment-submit-button span {\n    font-size: 1em; }\n\n.note-details-comments {\n  overflow: hidden; }\n  .note-details-comments .inner {\n    height: 45vh;\n    overflow: auto;\n    margin: 0.3em -3rem 0.3em 0.3em;\n    padding-right: 3.3rem; }\n\n.note-details-comment {\n  color: white;\n  padding: 0.7em 0.9em;\n  line-height: 1.5em;\n  font-size: 1em;\n  border-radius: 7px;\n  margin-top: 1em;\n  margin-bottom: 0;\n  width: 100%;\n  position: relative; }\n  .note-details-comment:after {\n    bottom: 100%;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-width: 10px;\n    margin-left: -10px; }\n\n.note-details-comment:nth-child(odd) {\n  background: #94C2ED; }\n  .note-details-comment:nth-child(odd):after {\n    border-bottom-color: #94C2ED;\n    left: 93%; }\n\n.note-details-comment:nth-child(even) {\n  background: #86BB71; }\n  .note-details-comment:nth-child(even):after {\n    border-bottom-color: #86BB71;\n    left: 7%; }\n\n.noteDetailSlideIn-appear {\n  margin-top: -800px; }\n\n.noteDetailSlideIn-appear.noteDetailSlideIn-appear-active {\n  margin-top: 0;\n  -webkit-transition: margin-top 0.5s cubic-bezier(0.31, 0.77, 0.21, 0.99);\n  transition: margin-top 0.5s cubic-bezier(0.31, 0.77, 0.21, 0.99); }\n\n@media screen and (min-device-width: 1024px) {\n  .note-details-container {\n    position: absolute;\n    width: 40vw;\n    height: 90vh;\n    left: 30vw; }\n  .note-details-comments .inner {\n    height: 55vh; } }\n\n.c-checkbox {\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n  margin: 0.5em 0; }\n  .c-checkbox::after {\n    content: '';\n    display: inline-block;\n    width: 2.5em;\n    height: 2.5em;\n    margin: 0 0.25em;\n    border: 2px solid #363636;\n    border-radius: 0.5em;\n    vertical-align: middle; }\n\n.c-checkbox--checked::after {\n  background: rgba(54, 54, 54, 0.8); }\n\n.c-checkbox__input {\n  display: none; }\n\n/** Controls\n * Override / Helper / Utility classes\n * class prefix: `ctrl-`\n */\n.ctrl-centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n", ""]);
	
	// exports


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

/***/ 366:
/*!************************************************!*\
  !*** ./client/containers/HomepageContainer.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _reactTypist = __webpack_require__(/*! react-typist */ 367);
	
	var _reactTypist2 = _interopRequireDefault(_reactTypist);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HomePageContainer = function (_Component) {
	  _inherits(HomePageContainer, _Component);
	
	  function HomePageContainer(props) {
	    _classCallCheck(this, HomePageContainer);
	
	    var _this = _possibleConstructorReturn(this, (HomePageContainer.__proto__ || Object.getPrototypeOf(HomePageContainer)).call(this, props));
	
	    _this.state = {};
	    return _this;
	  }
	
	  _createClass(HomePageContainer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'homepage-container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'homepage-main-image-container' },
	          _react2.default.createElement('img', { className: 'homepage-main-image', src: '/assets/brainstorm.jpg' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'main-slogan' },
	            _react2.default.createElement(
	              _reactTypist2.default,
	              { avgTypingDelay: 130 },
	              'THINK BETTER. FASTER. TOGETHER.'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'main-mini-desc' },
	            ' Your collaboration & brainstorming platform'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'main-signup-button-container' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/signup' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'main-signup-button' },
	                'GET STARTED'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'postit-view' },
	            _react2.default.createElement(
	              'div',
	              { className: 'postit yellow' },
	              _react2.default.createElement('img', { className: 'bulb-img', src: '/assets/bulb.png' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'postit lightyellow' },
	              'N'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'postit brightgreen' },
	              'O'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'postit pink' },
	              'T'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'postit yellow' },
	              'I'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'postit blue' },
	              'O'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'postit green' },
	              'N'
	            )
	          )
	        ),
	        _react2.default.createElement('div', { className: 'border-line' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'desc-container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'left-desc' },
	            _react2.default.createElement(
	              'div',
	              { className: 'left-desc-title' },
	              'Seamless Design.'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'left-desc-content' },
	              'Unite with your team and brainstorm ideas on your own dynamic board. Some more description we need to think about. Lets get back to this'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'right-desc' },
	            _react2.default.createElement('img', { className: 'right-desc-img', src: '/assets/collaborator-view-2.png' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'team-desc' },
	          'Made by Alvin Yuen, Spencer Goodwine, Hal Carleton & Joe Stephens'
	        )
	      );
	    }
	  }]);
	
	  return HomePageContainer;
	}(_react.Component);
	
	exports.default = HomePageContainer;

/***/ },

/***/ 368:
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _socket = __webpack_require__(/*! socket.io-client */ 234);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _CustomDragLayerContainer = __webpack_require__(/*! ./CustomDragLayerContainer */ 369);
	
	var _CustomDragLayerContainer2 = _interopRequireDefault(_CustomDragLayerContainer);
	
	var _ParticipantsContainer = __webpack_require__(/*! ./ParticipantsContainer */ 579);
	
	var _ParticipantsContainer2 = _interopRequireDefault(_ParticipantsContainer);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 553);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _bindHandlers = __webpack_require__(/*! ../utils/bindHandlers */ 503);
	
	var _bindHandlers2 = _interopRequireDefault(_bindHandlers);
	
	var _NoteDetailsContainer = __webpack_require__(/*! ./NoteDetailsContainer */ 582);
	
	var _NoteDetailsContainer2 = _interopRequireDefault(_NoteDetailsContainer);
	
	var _note = __webpack_require__(/*! ../actions/note */ 552);
	
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
	      console.log('show note comments');
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
	
	      var value = '' + window.location.host + (window.location.host === 'localhost' ? window.location.port : '') + '/note?board=' + this.props.board.hash;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'col-xs-12 board-page-container', key: this.props.board.id },
	        this.props.selectedNoteDetails ? _react2.default.createElement(_NoteDetailsContainer2.default, {
	          note: this.props.selectedNoteDetails,
	          hideNoteComments: this.hideNoteComments
	        }) : null,
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-12 clearfix' },
	          _react2.default.createElement(
	            'div',
	            { className: 'text-right ClipboardBlocking', style: { position: 'absolute', right: '0', top: '0', zIndex: '100' } },
	            _react2.default.createElement(
	              'p',
	              null,
	              'create note:'
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/note?board=' + this.props.board.hash },
	              _react2.default.createElement(
	                'div',
	                null,
	                value
	              ),
	              _react2.default.createElement(Clipboard, { value: value,
	                onCopy: this.handleCopy })
	            )
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/note?board=' + this.props.board.hash },
	            _react2.default.createElement(
	              'h2',
	              { className: 'boardTitle text-center', style: { width: '10em', margin: '.5em auto', zIndex: 30 } },
	              this.props.board.name
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
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

/***/ 369:
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
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _redux = __webpack_require__(/*! redux */ 48);
	
	var _NoteBoardContainer = __webpack_require__(/*! ./NoteBoardContainer */ 370);
	
	var _NoteBoardContainer2 = _interopRequireDefault(_NoteBoardContainer);
	
	var _CustomDragLayer = __webpack_require__(/*! ../components/CustomDragLayer */ 577);
	
	var _CustomDragLayer2 = _interopRequireDefault(_CustomDragLayer);
	
	var _NoteBoardTrashCan = __webpack_require__(/*! ../components/NoteBoardTrashCan */ 576);
	
	var _NoteBoardTrashCan2 = _interopRequireDefault(_NoteBoardTrashCan);
	
	var _note = __webpack_require__(/*! ../actions/note */ 552);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var trashStyles = {
	
	  position: 'relative'
	};
	
	var CustomDragLayerContainer = function (_Component) {
	  _inherits(CustomDragLayerContainer, _Component);
	
	  function CustomDragLayerContainer(props) {
	    _classCallCheck(this, CustomDragLayerContainer);
	
	    // this.handleSnapToGridAfterDropChange = this.handleSnapToGridAfterDropChange.bind(this);
	    var _this = _possibleConstructorReturn(this, (CustomDragLayerContainer.__proto__ || Object.getPrototypeOf(CustomDragLayerContainer)).call(this, props));
	
	    _this.handleSnapToGridWhileDraggingChange = _this.handleSnapToGridWhileDraggingChange.bind(_this);
	
	    _this.state = {
	      snapToGridAfterDrop: true,
	      snapToGridWhileDragging: false
	    };
	    return _this;
	  }
	
	  _createClass(CustomDragLayerContainer, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	
	      (0, _note.deleteNotesFromDatabase)(this.props.deletedNotes);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          snapToGridAfterDrop = _state.snapToGridAfterDrop,
	          snapToGridWhileDragging = _state.snapToGridWhileDragging;
	      var _props = this.props,
	          notesDelete = _props.notesDelete,
	          notes = _props.notes;
	      var board = this.props.board;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_NoteBoardContainer2.default, { snapToGrid: snapToGridAfterDrop, board: board, showNoteComments: this.props.showNoteComments }),
	        _react2.default.createElement(_CustomDragLayer2.default, { snapToGrid: snapToGridWhileDragging }),
	        _react2.default.createElement(
	          'div',
	          { className: 'snapTo' },
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
	                '\xA0\xA0snap to grid'
	              )
	            ),
	            _react2.default.createElement('br', null)
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'trashcan' },
	          _react2.default.createElement(_NoteBoardTrashCan2.default, { style: trashStyles, notesDelete: notesDelete, notes: notes })
	        )
	      );
	    }
	
	    // handleSnapToGridAfterDropChange() {
	    //   this.setState({
	    //     snapToGridAfterDrop: !this.state.snapToGridAfterDrop,
	    //
	    //   });
	    // }
	
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
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	
	  return {
	    notes: state.noteReducer.all.filter(function (note) {
	
	      return ownProps.board.id === note.board_id;
	    }),
	    deletedNotes: state.noteReducer.deletedNotes,
	
	    board: state.board.selectedBoard
	
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ notesDelete: _note.notesDelete }, dispatch);
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CustomDragLayerContainer);

/***/ },

/***/ 370:
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
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 371);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 10);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _reactResponsive = __webpack_require__(/*! react-responsive */ 475);
	
	var _reactResponsive2 = _interopRequireDefault(_reactResponsive);
	
	var _axios = __webpack_require__(/*! axios */ 476);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _NoteWrapper = __webpack_require__(/*! ../components/NoteWrapper */ 501);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _DraggableNote = __webpack_require__(/*! ../components/DraggableNote */ 524);
	
	var _DraggableNote2 = _interopRequireDefault(_DraggableNote);
	
	var _snapToGrid3 = __webpack_require__(/*! ../components/snapToGrid */ 551);
	
	var _snapToGrid4 = _interopRequireDefault(_snapToGrid3);
	
	var _note = __webpack_require__(/*! ../actions/note */ 552);
	
	var _user = __webpack_require__(/*! ../actions/user */ 554);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 553);
	
	var _store = __webpack_require__(/*! ../store */ 218);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _flow = __webpack_require__(/*! lodash/flow */ 555);
	
	var _flow2 = _interopRequireDefault(_flow);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 284);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _stringHash = __webpack_require__(/*! ../utils/stringHash */ 571);
	
	var _NoteBoardTrashCan = __webpack_require__(/*! ../components/NoteBoardTrashCan */ 576);
	
	var _NoteBoardTrashCan2 = _interopRequireDefault(_NoteBoardTrashCan);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  height: '150vh',
	  width: '100%',
	  border: '1px black line',
	  position: 'relative'
	
	};
	
	var noteStyles = {
	  height: '50px',
	  width: '50px',
	  fontSize: '.5em',
	  position: 'relative'
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
	          connectDropTarget = _props.connectDropTarget,
	          board = _props.board;
	
	      var backgroundColor = void 0;
	
	      return connectDropTarget(_react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactResponsive2.default,
	          { query: '(min-device-width: 800px)' },
	          ' ',
	          _react2.default.createElement(
	            'div',
	            { style: styles },
	            notes.map(function (note) {
	              return _this2.renderNote(note, note.id);
	            })
	          )
	        ),
	        _react2.default.createElement(
	          _reactResponsive2.default,
	          { query: '(max-device-width: 799px)' },
	          ' ',
	          _react2.default.createElement(
	            'div',
	            { className: 'mobile', style: { marginTop: '7  0px' } },
	            _react2.default.createElement(
	              'ol',
	              { className: 'mobileOL' },
	              notes.map(function (note, index) {
	                backgroundColor = note.color.replace(/^#*/, '#');
	                return _react2.default.createElement(
	                  'li',
	                  { key: 'noteboard_' + note.id, className: 'mobileListItem col-xs-12',
	                    onClick: function onClick() {
	                      _this2.props.showNoteComments(note.color, note.content, note.id);
	                    } },
	                  _react2.default.createElement('div', { className: 'noteBlock col-xs-2', style: _extends({}, noteStyles, { backgroundColor: backgroundColor }) }),
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'mobileNoteContent col-xs-10' },
	                    note.content
	                  )
	                );
	              })
	            )
	          )
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
	    deletedNotes: state.noteReducer.deletedNotes,
	
	    board: state.board.selectedBoard
	
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ noteMover: _note.noteMover, notesDelete: _note.notesDelete, participantMoveNote: _note.participantMoveNote, socketConnect: _socketio.socketConnect, socketEmit: _socketio.socketEmit, clearSocketListeners: _socketio.clearSocketListeners, socketDisconnect: _socketio.socketDisconnect, addSocketListener: _socketio.addSocketListener, addNoteToBoard: _note.addNoteToBoard, IndexToZIndex: _note.IndexToZIndex }, dispatch);
	};
	
	exports.default = (0, _flow2.default)((0, _reactDnd.DropTarget)(_constants.NOTE, noteTarget, collect), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(NoteBoardContainer);

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
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
	        _defineProperty({ className: 'enlarge'
	        }, 'className', 'noteWrapper ' + (this.state.focused ? 'noteWrapper--focused' : '')),
	        _react2.default.createElement(
	          'div',
	          {
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

/***/ 524:
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
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 371);
	
	var _reactDndHtml5Backend = __webpack_require__(/*! react-dnd-html5-backend */ 525);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _NoteWrapper = __webpack_require__(/*! ./NoteWrapper */ 501);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	var _ShouldCompUpdate = __webpack_require__(/*! ./ShouldCompUpdate */ 512);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var noteSource = {
	  beginDrag: function beginDrag(props) {
	    var id = props.id,
	        left = props.left,
	        top = props.top,
	        content = props.content,
	        color = props.color;
	
	    return { id: id, left: left, top: top, content: content, color: color };
	  }
	};
	
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

/***/ 576:
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
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 371);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyle(backgroundColor) {
	  return {
	    // border    : '1px solid rgba(0,0,0,0.2)',
	    minHeight: '10rem',
	    maxHeight: '15rem',
	    minWidth: '10rem',
	    maxWidth: '15rem',
	    color: 'white',
	    backgroundColor: backgroundColor,
	    padding: '1rem',
	
	    margin: '1rem',
	    textAlign: 'center',
	    float: 'left',
	    fontSize: '1rem'
	
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
	        backgroundColor = 'red';
	      }
	
	      return connectDropTarget(_react2.default.createElement(
	        'div',
	        { className: 'trashcan', style: getStyle() },
	        _react2.default.createElement('br', null),
	        hasDropped && _react2.default.createElement(
	          'span',
	          null,
	          ' ',
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

/***/ 577:
/*!**********************************************!*\
  !*** ./client/components/CustomDragLayer.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 371);
	
	var _constants = __webpack_require__(/*! ../constants */ 227);
	
	var _NoteDragPreview = __webpack_require__(/*! ./NoteDragPreview */ 578);
	
	var _NoteDragPreview2 = _interopRequireDefault(_NoteDragPreview);
	
	var _snapToGrid3 = __webpack_require__(/*! ./snapToGrid */ 551);
	
	var _snapToGrid4 = _interopRequireDefault(_snapToGrid3);
	
	var _NoteWrapper = __webpack_require__(/*! ./NoteWrapper */ 501);
	
	var _NoteWrapper2 = _interopRequireDefault(_NoteWrapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var layerStyles = {
	  position: 'fixed',
	  pointerEvents: 'none',
	  zIndex: 100,
	  left: 0,
	  top: 0,
	  width: '100%',
	  height: '100%'
	};
	
	function getItemStyles(props) {
	  var initialOffset = props.initialOffset,
	      currentOffset = props.currentOffset;
	
	  if (!initialOffset || !currentOffset) {
	    return {
	      display: 'none'
	    };
	  }
	
	  var x = currentOffset.x,
	      y = currentOffset.y;
	
	
	  if (props.snapToGrid) {
	    x -= initialOffset.x;
	    y -= initialOffset.y;
	
	    var _snapToGrid = (0, _snapToGrid4.default)(x, y);
	
	    var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
	
	    x = _snapToGrid2[0];
	    y = _snapToGrid2[1];
	
	    x += initialOffset.x;
	    y += initialOffset.y;
	  }
	
	  var transform = 'translate(' + x + 'px, ' + y + 'px)';
	  return {
	    transform: transform,
	    WebkitTransform: transform
	  };
	}
	
	var collect = function collect(monitor) {
	
	  // console.log("IS DRAGGING", monitor.getClientOffset())
	
	  return {
	    item: monitor.getItem(),
	    itemType: monitor.getItemType(),
	    initialOffset: monitor.getInitialSourceClientOffset(),
	    currentOffset: monitor.getSourceClientOffset(),
	    isDragging: monitor.isDragging()
	  };
	};
	
	var CustomDragLayer = function (_Component) {
	  _inherits(CustomDragLayer, _Component);
	
	  function CustomDragLayer() {
	    _classCallCheck(this, CustomDragLayer);
	
	    return _possibleConstructorReturn(this, (CustomDragLayer.__proto__ || Object.getPrototypeOf(CustomDragLayer)).apply(this, arguments));
	  }
	
	  _createClass(CustomDragLayer, [{
	    key: 'renderItem',
	    value: function renderItem(type, item) {
	
	      switch (type) {
	        case _constants.NOTE:
	          return _react2.default.createElement(_NoteDragPreview2.default, { content: item.content, color: item.color });
	        default:
	          return null;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          item = _props.item,
	          itemType = _props.itemType,
	          isDragging = _props.isDragging;
	
	
	      if (!isDragging) {
	        return null;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { style: layerStyles },
	        _react2.default.createElement(
	          'div',
	          { style: getItemStyles(this.props) },
	          this.renderItem(itemType, item)
	        )
	      );
	    }
	  }]);
	
	  return CustomDragLayer;
	}(_react.Component);
	
	CustomDragLayer.propTypes = {
	  item: _react.PropTypes.object,
	  itemType: _react.PropTypes.string,
	  initialOffset: _react.PropTypes.shape({
	    x: _react.PropTypes.number.isRequired,
	    y: _react.PropTypes.number.isRequired
	  }),
	  currentOffset: _react.PropTypes.shape({
	    x: _react.PropTypes.number.isRequired,
	    y: _react.PropTypes.number.isRequired
	  }),
	  isDragging: _react.PropTypes.bool.isRequired,
	  snapToGrid: _react.PropTypes.bool.isRequired
	};
	exports.default = (0, _reactDnd.DragLayer)(collect)(CustomDragLayer);

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
	      var _props = this.props,
	          content = _props.content,
	          color = _props.color;
	
	
	      return _react2.default.createElement(
	        'div',
	        { style: styles },
	        _react2.default.createElement(_NoteWrapper2.default, { noteRaised: true, red: tickTock, content: content, color: color })
	      );
	    }
	  }]);
	
	  return NoteDragPreview;
	}(_react.Component);
	
	exports.default = NoteDragPreview;

/***/ },

/***/ 579:
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 313);
	
	var _socketio = __webpack_require__(/*! ../actions/socketio */ 553);
	
	var _Participants = __webpack_require__(/*! ../components/Participants */ 580);
	
	var _Participants2 = _interopRequireDefault(_Participants);
	
	var _stringHash = __webpack_require__(/*! ../utils/stringHash */ 571);
	
	var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 284);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	var _board = __webpack_require__(/*! ../actions/board */ 581);
	
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
	      display: true
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
	      // if (isEmpty(this.props.loggedInUser)) {
	      //   browserHistory.push('/signup');
	      // } else
	
	
	      if (this.props.selectedBoard && !(0, _isEmpty2.default)(this.props.selectedBoard)) {
	        if (Object.keys(this.props.loggedInUser).length) {
	
	          if (this.props.permissions.findIndex(function (permission) {
	            return permission.board_id === _this2.props.selectedBoard.id;
	          }) === -1) {
	            this.props.userPermission(this.props.selectedBoard);
	          }
	        }
	        var participantName = Object.keys(this.props.loggedInUser).length ? this.props.loggedInUser.first_name : 'Guest';
	        this.props.socketEmit('join', {
	          room: (0, _stringHash.genShortHash)(this.props.selectedBoard.id),
	          name: participantName
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

/***/ 580:
/*!*******************************************!*\
  !*** ./client/components/Participants.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    'div',
	    { className: props.display ? 'participants-container participants-container-show' : 'participants-container participants-container-hide',
	      onClick: function onClick() {
	        props.toggleParticipantsMenu();
	      } },
	    _react2.default.createElement(
	      'div',
	      { className: 'participant-number-container' },
	      _react2.default.createElement(
	        'div',
	        { className: 'participant-number' },
	        _react2.default.createElement('i', { className: 'glyphicon glyphicon-globe globe-icon' }),
	        props.totalParticipants,
	        ' Collaborators Online'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'participant-list-container' },
	      _react2.default.createElement(
	        'ul',
	        { className: 'participant-list' },
	        props.participants.map(function (participant, idx) {
	
	          return _react2.default.createElement(
	            'li',
	            { className: 'participant-item',
	              key: participant.id + '_' + idx },
	            _react2.default.createElement(
	              'div',
	              { className: 'participant-image' },
	              _react2.default.createElement('i', { className: 'glyphicon glyphicon-user participant-icon' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'participant' },
	              participant.name === 'undefined undefined' ? 'Guest' : participant.name
	            )
	          );
	        })
	      )
	    )
	  );
	};
	
	var _react = __webpack_require__(/*! react */ 13);
	
	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 581:
/*!*********************************!*\
  !*** ./client/actions/board.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteBoard = exports.getBoard = exports.createBoard = exports.addUserPermission = exports.getAllBoards = exports.addNewBoard = exports.receiveAllBoards = exports.receiveNewPermission = exports.receiveBoard = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 476);
	
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
	
	var deleteBoard = exports.deleteBoard = function deleteBoard(boardId) {
	  return function (dispatch) {
	    return _axios2.default.delete('/api/boards/' + boardId).then(function (res) {
	      return res.data;
	    }).then(function (board) {
	      dispatch(getAllBoards());
	    });
	  };
	};

/***/ },

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
	              'div',
	              { className: 'thumbnail clearfix', style: { overflow: 'hidden' } },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/boards/' + board.hash },
	                _react2.default.createElement(_UserBoardsContainer2.default, { board: board })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'caption', style: { float: 'left', display: 'inline-block' } },
	                _react2.default.createElement(
	                  'h5',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    { style: { display: 'inline-block', verticalAlign: 'middle', font: 'bold' } },
	                    board.name
	                  )
	                )
	              ),
	              Object.keys(props.user).length ? permissions.map(function (permission) {
	                if (permission.board_id === board.id) {
	                  if (permission.permission === 'admin') {
	                    return _react2.default.createElement(
	                      'button',
	                      { key: permission.id, className: 'btn btn-secondary deleteButton', type: 'button', onClick: function onClick() {
	                          props.delete(board.id);
	                        } },
	                      'Delete'
	                    );
	                  }
	                }
	              }) : null
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
//# sourceMappingURL=0.f974d3001e86826b547d.hot-update.js.map