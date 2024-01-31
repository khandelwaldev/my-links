"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Popup.tsx":
/*!**********************************!*\
  !*** ./src/components/Popup.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/Project */ \"./src/components/icons/Project.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Popup = (param)=>{\n    let { onClose } = param;\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Add logic for auto-popup close after a certain time\n        const timeout = setTimeout(()=>{\n            setIsVisible(false);\n        }, 55000); // Adjust the time as needed (5000 milliseconds = 5 seconds)\n        // Clear the timeout when the component unmounts or onClose is triggered\n        return ()=>clearTimeout(timeout);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            zIndex: 99999999\n        },\n        className: \"popup \".concat(isVisible ? \"block\" : \"hidden\", \" fixed top-5 left-[50%] translate-x-[-50%] max-w-[480px] w-full\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-[#121212] p-4 rounded border border-gray-300 shadow\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-lg font-medium\",\n                            children: \"Hey buddy!\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-[24px] h-[24px] flex items-center justify-center bg-blue-500 text-white text-lg rounded\",\n                            onClick: onClose,\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5 flex items-center gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"w-[84px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 45\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-base font-medium\",\n                                    children: [\n                                        \"Try my new project \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-[#09c478]\",\n                                            children: \"InnerBeat\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 82\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[14px] text-white/70 line-clamp-2\",\n                                    children: \"InnerBeat let you stream your favroute music online for free without any add\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"https://innerbeat.vercel.app\",\n                    target: \"_blank\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                        fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspaces/my-links/src/components/Popup.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Popup, \"m22S9IQwDfEe/fCJY7LYj8YPDMo=\");\n_c = Popup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Popup);\nvar _c;\n$RefreshReg$(_c, \"Popup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3B1cC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUNOO0FBQ1Q7QUFNN0IsTUFBTUksUUFBOEI7UUFBQyxFQUFFQyxPQUFPLEVBQUU7O0lBQzVDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDTixzREFBc0Q7UUFDdEQsTUFBTU8sVUFBVUMsV0FBVztZQUN2QkYsYUFBYTtRQUNqQixHQUFHLFFBQVEsNERBQTREO1FBRXZFLHdFQUF3RTtRQUN4RSxPQUFPLElBQU1HLGFBQWFGO0lBQzlCLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDRztRQUFJQyxPQUFPO1lBQUNDLFFBQVE7UUFBUTtRQUFHQyxXQUFXLFNBQXdDLE9BQS9CUixZQUFZLFVBQVUsVUFBUztrQkFDL0UsNEVBQUNLO1lBQUlHLFdBQVU7OzhCQUNYLDhEQUFDSDtvQkFBSUcsV0FBVTs7c0NBQ1gsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFzQjs7Ozs7O3NDQUNwQyw4REFBQ0U7NEJBQU9GLFdBQVU7NEJBQTRGRyxTQUFTWjtzQ0FBUzs7Ozs7Ozs7Ozs7OzhCQUlwSSw4REFBQ007b0JBQUlHLFdBQVU7O3NDQUNYLDhEQUFDSTs0QkFBRUosV0FBVTtzQ0FBVyw0RUFBQ1osc0RBQU9BOzs7Ozs7Ozs7O3NDQUNoQyw4REFBQ1M7OzhDQUNHLDhEQUFDSTtvQ0FBR0QsV0FBVTs7d0NBQXdCO3NEQUFtQiw4REFBQ0s7NENBQUtMLFdBQVU7c0RBQWlCOzs7Ozs7Ozs7Ozs7OENBQzFGLDhEQUFDTTtvQ0FBRU4sV0FBVTs4Q0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHOUQsOERBQUNYLGtEQUFJQTtvQkFBQ2tCLE1BQU87b0JBQStCQyxRQUFPOzhCQUNuRCw0RUFBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQjtHQW5DTVo7S0FBQUE7QUFxQ04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAudHN4Pzk2MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vaWNvbnMvUHJvamVjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbnRlcmZhY2UgUG9wdXBQcm9wcyB7XG4gICAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgUG9wdXA6IFJlYWN0LkZDPFBvcHVwUHJvcHM+ID0gKHsgb25DbG9zZSB9KSA9PiB7XG4gICAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gQWRkIGxvZ2ljIGZvciBhdXRvLXBvcHVwIGNsb3NlIGFmdGVyIGEgY2VydGFpbiB0aW1lXG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldElzVmlzaWJsZShmYWxzZSk7XG4gICAgICAgIH0sIDU1MDAwKTsgLy8gQWRqdXN0IHRoZSB0aW1lIGFzIG5lZWRlZCAoNTAwMCBtaWxsaXNlY29uZHMgPSA1IHNlY29uZHMpXG5cbiAgICAgICAgLy8gQ2xlYXIgdGhlIHRpbWVvdXQgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzIG9yIG9uQ2xvc2UgaXMgdHJpZ2dlcmVkXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e3pJbmRleDogOTk5OTk5OTl9fSBjbGFzc05hbWU9e2Bwb3B1cCAke2lzVmlzaWJsZSA/ICdibG9jaycgOiAnaGlkZGVuJ30gZml4ZWQgdG9wLTUgbGVmdC1bNTAlXSB0cmFuc2xhdGUteC1bLTUwJV0gbWF4LXctWzQ4MHB4XSB3LWZ1bGxgfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxMjEyMTJdIHAtNCByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwnPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtbWVkaXVtJz5IZXkgYnVkZHkhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LVsyNHB4XSBoLVsyNHB4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHRleHQtbGcgcm91bmRlZFwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYnPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J3ctWzg0cHhdJz48UHJvamVjdCAvPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtYmFzZSBmb250LW1lZGl1bSc+VHJ5IG15IG5ldyBwcm9qZWN0IDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1bIzA5YzQ3OF0nPklubmVyQmVhdDwvc3Bhbj48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LVsxNHB4XSB0ZXh0LXdoaXRlLzcwIGxpbmUtY2xhbXAtMic+SW5uZXJCZWF0IGxldCB5b3Ugc3RyZWFtIHlvdXIgZmF2cm91dGUgbXVzaWMgb25saW5lIGZvciBmcmVlIHdpdGhvdXQgYW55IGFkZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YGh0dHBzOi8vaW5uZXJiZWF0LnZlcmNlbC5hcHBgfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJvamVjdCIsIkxpbmsiLCJQb3B1cCIsIm9uQ2xvc2UiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImRpdiIsInN0eWxlIiwiekluZGV4IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaSIsInNwYW4iLCJwIiwiaHJlZiIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Popup.tsx\n"));

/***/ })

});