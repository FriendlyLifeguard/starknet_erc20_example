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

/***/ "(app-pages-browser)/./src/components/connect-modal.tsx":
/*!******************************************!*\
  !*** ./src/components/connect-modal.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/Button */ \"(app-pages-browser)/./src/components/ui/Button.tsx\");\n/* harmony import */ var _components_readBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/readBalance */ \"(app-pages-browser)/./src/components/readBalance.tsx\");\n/* harmony import */ var _components_transfer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/transfer */ \"(app-pages-browser)/./src/components/transfer.tsx\");\n/* harmony import */ var starknetkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! starknetkit */ \"(app-pages-browser)/./node_modules/starknetkit/dist/starknetkit.js\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @starknet-react/core */ \"(app-pages-browser)/./node_modules/@starknet-react/core/dist/index.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/card.js\");\n/* harmony import */ var starknetkit_injected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! starknetkit/injected */ \"(app-pages-browser)/./node_modules/starknetkit/dist/injectedConnector.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Connect() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const { connect } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_5__.useConnect)();\n    const { disconnect } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_5__.useDisconnect)();\n    const { account, address } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_5__.useAccount)();\n    const { chain } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_5__.useNetwork)();\n    const addressShort = address ? \"\".concat(address.slice(0, 6), \"...\").concat(address.slice(-4)) : null;\n    const connectWallet = async ()=>{\n        _s1();\n        const connectors = [\n            new starknetkit_injected__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector({\n                options: {\n                    id: \"argentX\",\n                    name: \"Argent X\"\n                }\n            }),\n            new starknetkit_injected__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector({\n                options: {\n                    id: \"braavos\",\n                    name: \"Braavos\"\n                }\n            })\n        ];\n        const { starknetkitConnectModal } = (0,starknetkit__WEBPACK_IMPORTED_MODULE_4__.useStarknetkitConnectModal)({\n            connectors: connectors,\n            dappName: \"ERC20 UI\",\n            modalTheme: \"system\"\n        });\n        const { connector } = await starknetkitConnectModal();\n        await connect({\n            connector\n        });\n    };\n    _s1(connectWallet, \"qmQQQTqXw0VlJTzRTeGs+oGtjZk=\", false, function() {\n        return [\n            starknetkit__WEBPACK_IMPORTED_MODULE_4__.useStarknetkitConnectModal\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_7__.Card, {\n                className: \"max-w-[380px] mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-[400px] mx-auto p-4 bg-white shadow-md rounded-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"\\uD83D\\uDC5B\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: \"Your Wallet\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-600\",\n                                        children: address ? \"Connected as \".concat(addressShort, \" on \").concat(chain.name) : \"Connect wallet to get started\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-screen\",\n                children: !account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onClick: connectWallet,\n                        children: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 15\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            onClick: ()=>disconnect(),\n                            children: \"Disconnect\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-8\",\n                            children: [\n                                \"Token Balance: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_readBalance__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 48\n                                }, this),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_transfer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alan/Desktop/productive/starknet/erc20_tutorial/erc20_cairo_react/src/components/connect-modal.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Connect, \"YyCmo6bIWiNBPtE55t2x5doDEU0=\", false, function() {\n    return [\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_5__.useConnect,\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_5__.useDisconnect,\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_5__.useAccount,\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_5__.useNetwork\n    ];\n});\n_c = Connect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Connect);\nvar _c;\n$RefreshReg$(_c, \"Connect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Nvbm5lY3QtbW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ29DO0FBQ2U7QUFDTjtBQUNpQztBQUNVO0FBQ2hEO0FBQ2dCO0FBR3hELFNBQVNVOzs7SUFFUCxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHUCxnRUFBVUE7SUFDOUIsTUFBTSxFQUFFUSxVQUFVLEVBQUUsR0FBR1AsbUVBQWFBO0lBQ3BDLE1BQU0sRUFBRVEsT0FBTyxFQUFFQyxPQUFPLEVBQUUsR0FBR1IsZ0VBQVVBO0lBQ3ZDLE1BQU0sRUFBRVMsS0FBSyxFQUFFLEdBQUdSLGdFQUFVQTtJQUM1QixNQUFNUyxlQUFlRixVQUNqQixHQUE0QkEsT0FBekJBLFFBQVFHLEtBQUssQ0FBQyxHQUFHLElBQUcsT0FBdUIsT0FBbEJILFFBQVFHLEtBQUssQ0FBQyxDQUFDLE1BQzNDO0lBR0osTUFBTUMsZ0JBQWdCOztRQUVwQixNQUFNQyxhQUFhO1lBQ2pCLElBQUlWLG1FQUFpQkEsQ0FBQztnQkFBRVcsU0FBUztvQkFBQ0MsSUFBSTtvQkFBV0MsTUFBTTtnQkFBVztZQUFDO1lBQ25FLElBQUliLG1FQUFpQkEsQ0FBQztnQkFBRVcsU0FBUztvQkFBQ0MsSUFBSTtvQkFBV0MsTUFBTTtnQkFBVTtZQUFDO1NBQ25FO1FBRUQsTUFBTSxFQUFFQyx1QkFBdUIsRUFBRSxHQUFHcEIsdUVBQTBCQSxDQUFDO1lBQzdEZ0IsWUFBWUE7WUFDWkssVUFBVTtZQUNWQyxZQUFZO1FBRWQ7UUFFQSxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHLE1BQU1IO1FBQzVCLE1BQU1aLFFBQVE7WUFBRWU7UUFBVTtJQUM1QjtRQWhCTVI7O1lBT2dDZixtRUFBMEJBOzs7SUFXaEUscUJBQ0UsOERBQUN3Qjs7MEJBQ0MsOERBQUNuQixrREFBSUE7Z0JBQUNvQixXQUFVOzBCQUNoQiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNDOzhDQUFLOzs7Ozs7Ozs7OzswQ0FFUiw4REFBQ0Y7O2tEQUNDLDhEQUFDRzt3Q0FBRUYsV0FBVTtrREFBd0I7Ozs7OztrREFDckMsOERBQUNFO3dDQUFFRixXQUFVO2tEQUNWZCxVQUNHLGdCQUFtQ0MsT0FBbkJDLGNBQWEsUUFBaUIsT0FBWEQsTUFBTU8sSUFBSSxJQUM3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNZCw4REFBQ0s7Z0JBQUlDLFdBQVU7MEJBQ1QsQ0FBQ2Ysd0JBQ0csOERBQUNjOzhCQUNDLDRFQUFDM0IsOENBQU1BO3dCQUFDK0IsU0FBU2I7a0NBQWU7Ozs7Ozs7Ozs7eUNBS3hDLDhEQUFDUzs7c0NBQ0MsOERBQUMzQiw4Q0FBTUE7NEJBQUMrQixTQUFTLElBQU1uQjtzQ0FBYzs7Ozs7O3NDQUNyQyw4REFBQ2U7NEJBQUlDLFdBQVU7O2dDQUFPOzhDQUFlLDhEQUFDM0IsK0RBQVdBOzs7OztnQ0FBRzs7Ozs7OztzQ0FDcEQsOERBQUMwQjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQzFCLDREQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JCO0dBbkVTUTs7UUFFYU4sNERBQVVBO1FBQ1BDLCtEQUFhQTtRQUNQQyw0REFBVUE7UUFDckJDLDREQUFVQTs7O0tBTHJCRztBQXFFVCwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb25uZWN0LW1vZGFsLnRzeD8wYjlhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vdWkvQnV0dG9uXCJcbmltcG9ydCBSZWFkQmFsYW5jZSBmcm9tIFwiQC9jb21wb25lbnRzL3JlYWRCYWxhbmNlXCI7XG5pbXBvcnQgVHJhbnNmZXIgZnJvbSBcIkAvY29tcG9uZW50cy90cmFuc2ZlclwiOyAgIFxuaW1wb3J0IHsgdXNlU3RhcmtuZXRraXRDb25uZWN0TW9kYWwsIGNvbm5lY3QsIGRpc2Nvbm5lY3QgfSBmcm9tIFwic3RhcmtuZXRraXRcIjtcbmltcG9ydCB7IHVzZUNvbm5lY3QsIHVzZURpc2Nvbm5lY3QsIHVzZUFjY291bnQsIHVzZU5ldHdvcmt9IGZyb20gXCJAc3RhcmtuZXQtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ0ByYWRpeC11aS90aGVtZXMnO1xuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tIFwic3RhcmtuZXRraXQvaW5qZWN0ZWRcIlxuXG5cbmZ1bmN0aW9uIENvbm5lY3QoKSB7XG4gIFxuICBjb25zdCB7IGNvbm5lY3QgfSA9IHVzZUNvbm5lY3QoKTtcbiAgY29uc3QgeyBkaXNjb25uZWN0IH0gPSB1c2VEaXNjb25uZWN0KCk7XG4gIGNvbnN0IHsgYWNjb3VudCwgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpXG4gIGNvbnN0IHsgY2hhaW4gfSA9IHVzZU5ldHdvcmsoKTtcbiAgY29uc3QgYWRkcmVzc1Nob3J0ID0gYWRkcmVzc1xuICAgID8gYCR7YWRkcmVzcy5zbGljZSgwLCA2KX0uLi4ke2FkZHJlc3Muc2xpY2UoLTQpfWBcbiAgICA6IG51bGw7XG4gIFxuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYygpID0+IHtcblxuICAgIGNvbnN0IGNvbm5lY3RvcnMgPSBbXG4gICAgICBuZXcgSW5qZWN0ZWRDb25uZWN0b3IoeyBvcHRpb25zOiB7aWQ6IFwiYXJnZW50WFwiLCBuYW1lOiBcIkFyZ2VudCBYXCIgfX0pLFxuICAgICAgbmV3IEluamVjdGVkQ29ubmVjdG9yKHsgb3B0aW9uczoge2lkOiBcImJyYWF2b3NcIiwgbmFtZTogXCJCcmFhdm9zXCIgfX0pXG4gICAgXVxuXG4gICAgY29uc3QgeyBzdGFya25ldGtpdENvbm5lY3RNb2RhbCB9ID0gdXNlU3RhcmtuZXRraXRDb25uZWN0TW9kYWwoe1xuICAgICAgY29ubmVjdG9yczogY29ubmVjdG9ycyxcbiAgICAgIGRhcHBOYW1lOiBcIkVSQzIwIFVJXCIsIFxuICAgICAgbW9kYWxUaGVtZTogXCJzeXN0ZW1cIlxuXG4gICAgfSlcbiBcbiAgICBjb25zdCB7IGNvbm5lY3RvciB9ID0gYXdhaXQgc3RhcmtuZXRraXRDb25uZWN0TW9kYWwoKVxuICAgIGF3YWl0IGNvbm5lY3QoeyBjb25uZWN0b3IgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIm1heC13LVszODBweF0gbXgtYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bNDAwcHhdIG14LWF1dG8gcC00IGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLWxnXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPvCfkZs8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPllvdXIgV2FsbGV0PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICB7YWRkcmVzc1xuICAgICAgICAgICAgICAgID8gYENvbm5lY3RlZCBhcyAke2FkZHJlc3NTaG9ydH0gb24gJHtjaGFpbi5uYW1lfWBcbiAgICAgICAgICAgICAgICA6IFwiQ29ubmVjdCB3YWxsZXQgdG8gZ2V0IHN0YXJ0ZWRcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtc2NyZWVuXCI+XG4gICAgICAgIHsgIWFjY291bnQgP1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y29ubmVjdFdhbGxldH0+XG4gICAgICAgICAgICAgICAgICBDb25uZWN0IFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNjb25uZWN0KCl9PkRpc2Nvbm5lY3Q8L0J1dHRvbj4gXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+VG9rZW4gQmFsYW5jZTogPFJlYWRCYWxhbmNlIC8+IDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgICAgPFRyYW5zZmVyLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgIH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RcblxuXG5cblxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlJlYWRCYWxhbmNlIiwiVHJhbnNmZXIiLCJ1c2VTdGFya25ldGtpdENvbm5lY3RNb2RhbCIsInVzZUNvbm5lY3QiLCJ1c2VEaXNjb25uZWN0IiwidXNlQWNjb3VudCIsInVzZU5ldHdvcmsiLCJDYXJkIiwiSW5qZWN0ZWRDb25uZWN0b3IiLCJDb25uZWN0IiwiY29ubmVjdCIsImRpc2Nvbm5lY3QiLCJhY2NvdW50IiwiYWRkcmVzcyIsImNoYWluIiwiYWRkcmVzc1Nob3J0Iiwic2xpY2UiLCJjb25uZWN0V2FsbGV0IiwiY29ubmVjdG9ycyIsIm9wdGlvbnMiLCJpZCIsIm5hbWUiLCJzdGFya25ldGtpdENvbm5lY3RNb2RhbCIsImRhcHBOYW1lIiwibW9kYWxUaGVtZSIsImNvbm5lY3RvciIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/connect-modal.tsx\n"));

/***/ })

});