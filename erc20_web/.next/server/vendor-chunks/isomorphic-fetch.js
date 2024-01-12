"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/isomorphic-fetch";
exports.ids = ["vendor-chunks/isomorphic-fetch"];
exports.modules = {

/***/ "(ssr)/./node_modules/isomorphic-fetch/fetch-npm-node.js":
/*!*********************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-node.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar realFetch = __webpack_require__(/*! node-fetch */ \"(ssr)/./node_modules/node-fetch/lib/index.mjs\");\nmodule.exports = function(url, options) {\n    if (/^\\/\\//.test(url)) {\n        url = \"https:\" + url;\n    }\n    return realFetch.call(this, url, options);\n};\nif (!global.fetch) {\n    global.fetch = module.exports;\n    global.Response = realFetch.Response;\n    global.Headers = realFetch.Headers;\n    global.Request = realFetch.Request;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tbm9kZS5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUViLElBQUlBLFlBQVlDLG1CQUFPQSxDQUFDO0FBQ3hCQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsR0FBRyxFQUFFQyxPQUFPO0lBQ3JDLElBQUksUUFBUUMsSUFBSSxDQUFDRixNQUFNO1FBQ3RCQSxNQUFNLFdBQVdBO0lBQ2xCO0lBQ0EsT0FBT0osVUFBVU8sSUFBSSxDQUFDLElBQUksRUFBRUgsS0FBS0M7QUFDbEM7QUFFQSxJQUFJLENBQUNHLE9BQU9DLEtBQUssRUFBRTtJQUNsQkQsT0FBT0MsS0FBSyxHQUFHUCxPQUFPQyxPQUFPO0lBQzdCSyxPQUFPRSxRQUFRLEdBQUdWLFVBQVVVLFFBQVE7SUFDcENGLE9BQU9HLE9BQU8sR0FBR1gsVUFBVVcsT0FBTztJQUNsQ0gsT0FBT0ksT0FBTyxHQUFHWixVQUFVWSxPQUFPO0FBQ25DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXJjMjBfd2ViLy4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLW5vZGUuanM/NGVmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIHJlYWxGZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXJsLCBvcHRpb25zKSB7XG5cdGlmICgvXlxcL1xcLy8udGVzdCh1cmwpKSB7XG5cdFx0dXJsID0gJ2h0dHBzOicgKyB1cmw7XG5cdH1cblx0cmV0dXJuIHJlYWxGZXRjaC5jYWxsKHRoaXMsIHVybCwgb3B0aW9ucyk7XG59O1xuXG5pZiAoIWdsb2JhbC5mZXRjaCkge1xuXHRnbG9iYWwuZmV0Y2ggPSBtb2R1bGUuZXhwb3J0cztcblx0Z2xvYmFsLlJlc3BvbnNlID0gcmVhbEZldGNoLlJlc3BvbnNlO1xuXHRnbG9iYWwuSGVhZGVycyA9IHJlYWxGZXRjaC5IZWFkZXJzO1xuXHRnbG9iYWwuUmVxdWVzdCA9IHJlYWxGZXRjaC5SZXF1ZXN0O1xufVxuIl0sIm5hbWVzIjpbInJlYWxGZXRjaCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwidXJsIiwib3B0aW9ucyIsInRlc3QiLCJjYWxsIiwiZ2xvYmFsIiwiZmV0Y2giLCJSZXNwb25zZSIsIkhlYWRlcnMiLCJSZXF1ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/isomorphic-fetch/fetch-npm-node.js\n");

/***/ })

};
;