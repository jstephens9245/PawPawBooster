webpackHotUpdate(0,{

/***/ 8:
/*!*********************************!*\
  !*** ./client/styles/main.scss ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./main.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../~/style-loader/addStyles.js */ 5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(/*! !../../~/css-loader!../../~/postcss-loader!../../~/sass-loader!./main.scss */ 9, function() {
				var newContent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./main.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

})
//# sourceMappingURL=0.76ede55d0e4b9d56cc63.hot-update.js.map