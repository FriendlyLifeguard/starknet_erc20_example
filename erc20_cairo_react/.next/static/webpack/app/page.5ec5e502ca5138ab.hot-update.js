"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/readBalance.tsx":
/*!****************************************!*\
  !*** ./src/components/readBalance.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ReadBalance; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @starknet-react/core */ \"(app-pages-browser)/./node_modules/@starknet-react/core/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ContractAddress = \"0x04e965f74CF456a71cCC0b1b7aED651c1B738D233dFB447ca7e6b2cf5BB5c54C\";\nconst DECIMALS = 18;\n// Credits to @PhilippeR26 for this function\nfunction formatBalance(qty, decimals) {\n    const balance = String(\"0\").repeat(decimals) + qty.toString();\n    const rightCleaned = balance.slice(-decimals).replace(/(\\d)0+$/gm, \"$1\");\n    const leftCleaned = BigInt(balance.slice(0, balance.length - decimals)).toString();\n    return leftCleaned + \".\" + rightCleaned;\n}\nfunction ReadBalance() {\n    _s();\n    const { address } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount)();\n    const { data, isError, isLoading, error } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useContractRead)({\n        abi: [\n            {\n                \"name\": \"balance_of\",\n                \"type\": \"function\",\n                \"inputs\": [\n                    {\n                        \"name\": \"account\",\n                        \"type\": \"core::starknet::contract_address::ContractAddress\"\n                    }\n                ],\n                \"outputs\": [\n                    {\n                        \"type\": \"core::integer::u256\"\n                    }\n                ],\n                \"state_mutability\": \"view\"\n            }\n        ],\n        functionName: \"balance_of\",\n        args: [\n            address\n        ],\n        address: ContractAddress,\n        watch: true\n    });\n    console.log({\n        data\n    });\n    console.log({\n        address\n    });\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading ...\"\n    }, void 0, false, {\n        fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/readBalance.tsx\",\n        lineNumber: 45,\n        columnNumber: 25\n    }, this);\n    if (isError || !data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error === null || error === void 0 ? void 0 : error.message\n    }, void 0, false, {\n        fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/readBalance.tsx\",\n        lineNumber: 46,\n        columnNumber: 33\n    }, this);\n    //@ts-ignore\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: formatBalance(data, DECIMALS)\n    }, void 0, false, {\n        fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/readBalance.tsx\",\n        lineNumber: 48,\n        columnNumber: 10\n    }, this);\n}\n_s(ReadBalance, \"ye2aTZfwDxddx92NmQ7nmUGgnXk=\", false, function() {\n    return [\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount,\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useContractRead\n    ];\n});\n_c = ReadBalance;\nvar _c;\n$RefreshReg$(_c, \"ReadBalance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3JlYWRCYWxhbmNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNrRTtBQUVsRSxNQUFNRSxrQkFBa0I7QUFDeEIsTUFBTUMsV0FBVztBQUVqQiw0Q0FBNEM7QUFDNUMsU0FBU0MsY0FBY0MsR0FBVyxFQUFFQyxRQUFnQjtJQUNsRCxNQUFNQyxVQUFVQyxPQUFPLEtBQUtDLE1BQU0sQ0FBQ0gsWUFBWUQsSUFBSUssUUFBUTtJQUMzRCxNQUFNQyxlQUFlSixRQUFRSyxLQUFLLENBQUMsQ0FBQ04sVUFBVU8sT0FBTyxDQUFDLGFBQWE7SUFDbkUsTUFBTUMsY0FBY0MsT0FBT1IsUUFBUUssS0FBSyxDQUFDLEdBQUdMLFFBQVFTLE1BQU0sR0FBR1YsV0FBV0ksUUFBUTtJQUNoRixPQUFPSSxjQUFjLE1BQU1IO0FBQzdCO0FBRWUsU0FBU007O0lBQ3RCLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdsQixnRUFBVUE7SUFDOUIsTUFBTSxFQUFFbUIsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFLEdBQUdyQixxRUFBZUEsQ0FBQztRQUMxRHNCLEtBQUs7WUFDSDtnQkFDRSxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsVUFBVTtvQkFDUjt3QkFDRSxRQUFRO3dCQUNSLFFBQVE7b0JBQ1Y7aUJBQ0Q7Z0JBQ0QsV0FBVztvQkFDVDt3QkFDRSxRQUFRO29CQUNWO2lCQUNEO2dCQUNELG9CQUFvQjtZQUN0QjtTQUNEO1FBQ0RDLGNBQWM7UUFDZEMsTUFBTTtZQUFDUDtTQUFrQjtRQUN6QkEsU0FBU2hCO1FBQ1R3QixPQUFPO0lBQ1Q7SUFFQUMsUUFBUUMsR0FBRyxDQUFDO1FBQUNUO0lBQUk7SUFDakJRLFFBQVFDLEdBQUcsQ0FBQztRQUFDVjtJQUFPO0lBRXBCLElBQUlHLFdBQVcscUJBQU8sOERBQUNRO2tCQUFJOzs7Ozs7SUFDM0IsSUFBSVQsV0FBVyxDQUFDRCxNQUFPLHFCQUFPLDhEQUFDVTtrQkFBS1Asa0JBQUFBLDRCQUFBQSxNQUFPUSxPQUFPOzs7Ozs7SUFDbEQsWUFBWTtJQUNaLHFCQUFPLDhEQUFDRDtrQkFBS3pCLGNBQWNlLE1BQU1oQjs7Ozs7O0FBRW5DO0dBbkN3QmM7O1FBQ0ZqQiw0REFBVUE7UUFDY0MsaUVBQWVBOzs7S0FGckNnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9yZWFkQmFsYW5jZS50c3g/MjU3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQ29udHJhY3RSZWFkfSBmcm9tIFwiQHN0YXJrbmV0LXJlYWN0L2NvcmVcIjtcblxuY29uc3QgQ29udHJhY3RBZGRyZXNzID0gXCIweDA0ZTk2NWY3NENGNDU2YTcxY0NDMGIxYjdhRUQ2NTFjMUI3MzhEMjMzZEZCNDQ3Y2E3ZTZiMmNmNUJCNWM1NENcIjtcbmNvbnN0IERFQ0lNQUxTID0gMTg7XG5cbi8vIENyZWRpdHMgdG8gQFBoaWxpcHBlUjI2IGZvciB0aGlzIGZ1bmN0aW9uXG5mdW5jdGlvbiBmb3JtYXRCYWxhbmNlKHF0eTogYmlnaW50LCBkZWNpbWFsczogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgYmFsYW5jZSA9IFN0cmluZyhcIjBcIikucmVwZWF0KGRlY2ltYWxzKSArIHF0eS50b1N0cmluZygpO1xuICBjb25zdCByaWdodENsZWFuZWQgPSBiYWxhbmNlLnNsaWNlKC1kZWNpbWFscykucmVwbGFjZSgvKFxcZCkwKyQvZ20sIFwiJDFcIik7XG4gIGNvbnN0IGxlZnRDbGVhbmVkID0gQmlnSW50KGJhbGFuY2Uuc2xpY2UoMCwgYmFsYW5jZS5sZW5ndGggLSBkZWNpbWFscykpLnRvU3RyaW5nKCk7XG4gIHJldHVybiBsZWZ0Q2xlYW5lZCArIFwiLlwiICsgcmlnaHRDbGVhbmVkO1xufVxuICBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlYWRCYWxhbmNlKCkge1xuICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgeyBkYXRhLCBpc0Vycm9yLCBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VDb250cmFjdFJlYWQoe1xuICAgIGFiaTogW1xuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJiYWxhbmNlX29mXCIsXG4gICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJjb3JlOjpzdGFya25ldDo6Y29udHJhY3RfYWRkcmVzczo6Q29udHJhY3RBZGRyZXNzXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY29yZTo6aW50ZWdlcjo6dTI1NlwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInN0YXRlX211dGFiaWxpdHlcIjogXCJ2aWV3XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIGZ1bmN0aW9uTmFtZTogXCJiYWxhbmNlX29mXCIsXG4gICAgYXJnczogW2FkZHJlc3MgYXMgc3RyaW5nXSwgXG4gICAgYWRkcmVzczogQ29udHJhY3RBZGRyZXNzLFxuICAgIHdhdGNoOiB0cnVlLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyh7ZGF0YX0pXG4gIGNvbnNvbGUubG9nKHthZGRyZXNzfSlcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nIC4uLjwvZGl2PjtcbiAgaWYgKGlzRXJyb3IgfHwgIWRhdGEgKSByZXR1cm4gPGRpdj57ZXJyb3I/Lm1lc3NhZ2V9PC9kaXY+O1xuICAvL0B0cy1pZ25vcmVcbiAgcmV0dXJuIDxkaXY+e2Zvcm1hdEJhbGFuY2UoZGF0YSwgREVDSU1BTFMpfTwvZGl2PlxuXG59XG4iXSwibmFtZXMiOlsidXNlQWNjb3VudCIsInVzZUNvbnRyYWN0UmVhZCIsIkNvbnRyYWN0QWRkcmVzcyIsIkRFQ0lNQUxTIiwiZm9ybWF0QmFsYW5jZSIsInF0eSIsImRlY2ltYWxzIiwiYmFsYW5jZSIsIlN0cmluZyIsInJlcGVhdCIsInRvU3RyaW5nIiwicmlnaHRDbGVhbmVkIiwic2xpY2UiLCJyZXBsYWNlIiwibGVmdENsZWFuZWQiLCJCaWdJbnQiLCJsZW5ndGgiLCJSZWFkQmFsYW5jZSIsImFkZHJlc3MiLCJkYXRhIiwiaXNFcnJvciIsImlzTG9hZGluZyIsImVycm9yIiwiYWJpIiwiZnVuY3Rpb25OYW1lIiwiYXJncyIsIndhdGNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/readBalance.tsx\n"));

/***/ })

});