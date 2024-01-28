/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=BsThreeDots!=!./node_modules/react-icons/bs/index.esm.js":
/*!******************************************************************************************!*\
  !*** __barrel_optimize__?names=BsThreeDots!=!./node_modules/react-icons/bs/index.esm.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _workspaces_my_links_node_modules_react_icons_bs_index_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-icons/bs/index.esm.js */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _workspaces_my_links_node_modules_react_icons_bs_index_esm_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _workspaces_my_links_node_modules_react_icons_bs_index_esm_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_BsThreeDots_react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=BsThreeDots!=!react-icons/bs */ \"__barrel_optimize__?names=BsThreeDots!=!./node_modules/react-icons/bs/index.esm.js\");\n\n\n\n\nfunction Header() {\n    const [scrollY, setScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            setScrollY(window.scrollY);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const showNavbar = scrollY > 320;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: showNavbar && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fixed top-4 left-[50%] max-w-[600px] translate-x-[-50%] w-full h-[70px] bg-[#00000080] backdrop-blur-sm text-white py-2 px-4 flex items-center justify-between border-2 border-[#353535] rounded-2xl\",\n            style: {\n                zIndex: 999999\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[44px] h-[44px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: `https://github.com/khandelwaldev.png`,\n                        width: 44,\n                        height: 44,\n                        alt: \"Dev\",\n                        className: \"rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/my-links/src/components/Header.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/my-links/src/components/Header.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-base font-semibold font-sans\",\n                            children: \"Dev Khandelwal\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/my-links/src/components/Header.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjUyNDcgMTUuMTIzNEM4LjIwMyAxNC45MjUxIDcuNzk3IDE0LjkyNTEgNy40NzUzIDE1LjEyMzRMNy4xNDg3MyAxNS4zMjQ3QzYuNjk0MiAxNS42MDQ4IDYuMDk5NzQgMTUuNDc4NSA1Ljc5ODQ1IDE1LjAzNzdMNS41ODE5OSAxNC43MjFDNS4zNjg3NSAxNC40MDkgNC45OTc4NSAxNC4yNDM4IDQuNjIzMzIgMTQuMjk0MUw0LjI0MzExIDE0LjM0NTJDMy43MTM5MiAxNC40MTYyIDMuMjIyMjYgMTQuMDU5IDMuMTI2MzEgMTMuNTMzOEwzLjA1NzM3IDEzLjE1NjRDMi45ODk0NyAxMi43ODQ3IDIuNzE3OCAxMi40ODMgMi4zNTUxOSAxMi4zNzY2TDEuOTg3MDkgMTIuMjY4NkMxLjQ3NDc1IDEyLjExODIgMS4xNzA4OCAxMS41OTE5IDEuMjk2ODcgMTEuMDczMUwxLjM4NzM4IDEwLjcwMDNDMS40NzY1NSAxMC4zMzMgMS4zNTEwOSA5Ljk0NjkyIDEuMDYzMSA5LjcwMjI0TDAuNzcwNzU3IDkuNDUzODVDMC4zNjM4NTIgOS4xMDgxMyAwLjMwMDMyNyA4LjUwMzczIDAuNjI2NDYyIDguMDgwOTZMMC44NjA3NzcgNy43NzcyMkMxLjA5MTYgNy40NzgwMSAxLjEzNDA0IDcuMDc0MjQgMC45NzA0NjggNi43MzM1OEwwLjgwNDQyNCA2LjM4Nzc2QzAuNTczMzE0IDUuOTA2NDMgMC43NjExMTQgNS4zMjg0NCAxLjIzMTAxIDUuMDc0ODhMMS41Njg2MSA0Ljg5MjdDMS45MDExNyA0LjcxMzI0IDIuMTA0MTcgNC4zNjE2NCAyLjA5MzMgMy45ODM5TDIuMDgyMjcgMy42MDA0NEMyLjA2NjkyIDMuMDY2NzIgMi40NzM1NyAyLjYxNTA5IDMuMDA1OTcgMi41NzQ1N0wzLjM4ODQ4IDIuNTQ1NDZDMy43NjUyOSAyLjUxNjc4IDQuMDkzNzUgMi4yNzgxNCA0LjIzNzQ2IDEuOTI4NjRMNC4zODMzNSAxLjU3Mzg1QzQuNTg2NCAxLjA4MDAyIDUuMTQxNiAwLjgzMjgzNiA1LjY0NDQ1IDEuMDEyMzdMNi4wMDU3MyAxLjE0MTM1QzYuMzYxNjMgMS4yNjg0MiA2Ljc1ODc1IDEuMTg0MDEgNy4wMzIxOSAwLjkyMzE3M0w3LjMwOTc4IDAuNjU4MzkxQzcuNjk2MTMgMC4yODk4NTIgOC4zMDM4NyAwLjI4OTg1MiA4LjY5MDIyIDAuNjU4MzkyTDguOTY3ODEgMC45MjMxNzNDOS4yNDEyNSAxLjE4NDAxIDkuNjM4MzcgMS4yNjg0MiA5Ljk5NDI3IDEuMTQxMzVMMTAuMzU1NSAxLjAxMjM3QzEwLjg1ODQgMC44MzI4MzYgMTEuNDEzNiAxLjA4MDAyIDExLjYxNjcgMS41NzM4NUwxMS43NjI1IDEuOTI4NjRDMTEuOTA2MyAyLjI3ODE0IDEyLjIzNDcgMi41MTY3OCAxMi42MTE1IDIuNTQ1NDZMMTIuOTk0IDIuNTc0NTdDMTMuNTI2NCAyLjYxNTA5IDEzLjkzMzEgMy4wNjY3MiAxMy45MTc3IDMuNjAwNDRMMTMuOTA2NyAzLjk4MzlDMTMuODk1OCA0LjM2MTY0IDE0LjA5ODggNC43MTMyNCAxNC40MzE0IDQuODkyN0wxNC43NjkgNS4wNzQ4OEMxNS4yMzg5IDUuMzI4NDQgMTUuNDI2NyA1LjkwNjQzIDE1LjE5NTYgNi4zODc3NkwxNS4wMjk1IDYuNzMzNThDMTQuODY2IDcuMDc0MjQgMTQuOTA4NCA3LjQ3ODAxIDE1LjEzOTIgNy43NzcyMkwxNS4zNzM1IDguMDgwOTZDMTUuNjk5NyA4LjUwMzczIDE1LjYzNjEgOS4xMDgxMyAxNS4yMjkyIDkuNDUzODVMMTQuOTM2OSA5LjcwMjI0QzE0LjY0ODkgOS45NDY5MiAxNC41MjM0IDEwLjMzMyAxNC42MTI2IDEwLjcwMDNMMTQuNzAzMSAxMS4wNzMxQzE0LjgyOTEgMTEuNTkxOSAxNC41MjUzIDEyLjExODIgMTQuMDEyOSAxMi4yNjg2TDEzLjY0NDggMTIuMzc2NkMxMy4yODIyIDEyLjQ4MyAxMy4wMTA1IDEyLjc4NDcgMTIuOTQyNiAxMy4xNTY0TDEyLjg3MzcgMTMuNTMzOEMxMi43Nzc3IDE0LjA1OSAxMi4yODYxIDE0LjQxNjIgMTEuNzU2OSAxNC4zNDUyTDExLjM3NjcgMTQuMjk0MUMxMS4wMDIxIDE0LjI0MzggMTAuNjMxMyAxNC40MDkgMTAuNDE4IDE0LjcyMUwxMC4yMDE1IDE1LjAzNzdDOS45MDAyNiAxNS40Nzg1IDkuMzA1OCAxNS42MDQ4IDguODUxMjcgMTUuMzI0N0w4LjUyNDcgMTUuMTIzNFoiIGZpbGw9IiMwMEI2RkYiLz4KPHBhdGggZD0iTTUuMDY5OTggNy41NjI2NUw3LjE5MTMgOS42ODM5N0wxMS40MzM5IDUuNDQxMzMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K\",\n                            width: 16,\n                            height: 16,\n                            alt: \"Dev\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/my-links/src/components/Header.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/my-links/src/components/Header.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[44px] h-[44px] bg-black rounded-full flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-[24px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsThreeDots_react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsThreeDots, {}, void 0, false, {\n                            fileName: \"/workspaces/my-links/src/components/Header.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 43\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/my-links/src/components/Header.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/my-links/src/components/Header.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/my-links/src/components/Header.tsx\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/my-links/src/components/Header.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNhO0FBQ0M7QUFFOUIsU0FBU0k7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLGVBQWU7WUFDbkJELFdBQVdFLE9BQU9ILE9BQU87UUFDM0I7UUFFQUcsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUY7UUFFbEMsT0FBTztZQUNMQyxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVSDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1JLGFBQWFOLFVBQVU7SUFFN0IscUJBQ0UsOERBQUNPO2tCQUNFRCw0QkFDQyw4REFBQ0M7WUFBSUMsV0FBVTtZQUF1TUMsT0FBTztnQkFBQ0MsUUFBUTtZQUFNOzs4QkFDMU8sOERBQUNIO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDYixtREFBS0E7d0JBQUNnQixLQUFLLENBQUMsb0NBQW9DLENBQUM7d0JBQUVDLE9BQU87d0JBQUlDLFFBQVE7d0JBQUlDLEtBQUk7d0JBQU1OLFdBQVU7Ozs7Ozs7Ozs7OzhCQUVqRyw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTzs0QkFBR1AsV0FBVTtzQ0FBb0M7Ozs7OztzQ0FDbEQsOERBQUNiLG1EQUFLQTs0QkFBQ2dCLEtBQUs7NEJBQTgzRkMsT0FBTzs0QkFBSUMsUUFBUTs0QkFBSUMsS0FBSTs7Ozs7Ozs7Ozs7OzhCQUV2NkYsOERBQUNQO29CQUFJQyxXQUFVOzhCQUNmLDRFQUFDUTt3QkFBT1IsV0FBVTtrQ0FBYyw0RUFBQ1YsMEZBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10RCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWxpbmtzLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeD9hNjk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCc1RocmVlRG90cyB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtzY3JvbGxZLCBzZXRTY3JvbGxZXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsWSh3aW5kb3cuc2Nyb2xsWSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBzaG93TmF2YmFyID0gc2Nyb2xsWSA+IDMyMDsgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3Nob3dOYXZiYXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC00IGxlZnQtWzUwJV0gbWF4LXctWzYwMHB4XSB0cmFuc2xhdGUteC1bLTUwJV0gdy1mdWxsIGgtWzcwcHhdIGJnLVsjMDAwMDAwODBdIGJhY2tkcm9wLWJsdXItc20gdGV4dC13aGl0ZSBweS0yIHB4LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci0yIGJvcmRlci1bIzM1MzUzNV0gcm91bmRlZC0yeGxcIiBzdHlsZT17e3pJbmRleDogOTk5OTk5fX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs0NHB4XSBoLVs0NHB4XVwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS9raGFuZGVsd2FsZGV2LnBuZ2B9IHdpZHRoPXs0NH0gaGVpZ2h0PXs0NH0gYWx0PSdEZXYnIGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSc+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBmb250LXNhbnMnPkRldiBLaGFuZGVsd2FsPC9oMT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9eydkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TmlBeE5pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDRMalV5TkRjZ01UVXVNVEl6TkVNNExqSXdNeUF4TkM0NU1qVXhJRGN1TnprM0lERTBMamt5TlRFZ055NDBOelV6SURFMUxqRXlNelJNTnk0eE5EZzNNeUF4TlM0ek1qUTNRell1TmprME1pQXhOUzQyTURRNElEWXVNRGs1TnpRZ01UVXVORGM0TlNBMUxqYzVPRFExSURFMUxqQXpOemRNTlM0MU9ERTVPU0F4TkM0M01qRkROUzR6TmpnM05TQXhOQzQwTURrZ05DNDVPVGM0TlNBeE5DNHlORE00SURRdU5qSXpNeklnTVRRdU1qazBNVXcwTGpJME16RXhJREUwTGpNME5USkRNeTQzTVRNNU1pQXhOQzQwTVRZeUlETXVNakl5TWpZZ01UUXVNRFU1SURNdU1USTJNekVnTVRNdU5UTXpPRXd6TGpBMU56TTNJREV6TGpFMU5qUkRNaTQ1T0RrME55QXhNaTQzT0RRM0lESXVOekUzT0NBeE1pNDBPRE1nTWk0ek5UVXhPU0F4TWk0ek56WTJUREV1T1RnM01Ea2dNVEl1TWpZNE5rTXhMalEzTkRjMUlERXlMakV4T0RJZ01TNHhOekE0T0NBeE1TNDFPVEU1SURFdU1qazJPRGNnTVRFdU1EY3pNVXd4TGpNNE56TTRJREV3TGpjd01ETkRNUzQwTnpZMU5TQXhNQzR6TXpNZ01TNHpOVEV3T1NBNUxqazBOamt5SURFdU1EWXpNU0E1TGpjd01qSTBUREF1Tnpjd056VTNJRGt1TkRVek9EVkRNQzR6TmpNNE5USWdPUzR4TURneE15QXdMak13TURNeU55QTRMalV3TXpjeklEQXVOakkyTkRZeUlEZ3VNRGd3T1RaTU1DNDROakEzTnpjZ055NDNOemN5TWtNeExqQTVNVFlnTnk0ME56Z3dNU0F4TGpFek5EQTBJRGN1TURjME1qUWdNQzQ1TnpBME5qZ2dOaTQzTXpNMU9Fd3dMamd3TkRReU5DQTJMak00TnpjMlF6QXVOVGN6TXpFMElEVXVPVEEyTkRNZ01DNDNOakV4TVRRZ05TNHpNamcwTkNBeExqSXpNVEF4SURVdU1EYzBPRGhNTVM0MU5qZzJNU0EwTGpnNU1qZERNUzQ1TURFeE55QTBMamN4TXpJMElESXVNVEEwTVRjZ05DNHpOakUyTkNBeUxqQTVNek1nTXk0NU9ETTVUREl1TURneU1qY2dNeTQyTURBME5FTXlMakEyTmpreUlETXVNRFkyTnpJZ01pNDBOek0xTnlBeUxqWXhOVEE1SURNdU1EQTFPVGNnTWk0MU56UTFOMHd6TGpNNE9EUTRJREl1TlRRMU5EWkRNeTQzTmpVeU9TQXlMalV4TmpjNElEUXVNRGt6TnpVZ01pNHlOemd4TkNBMExqSXpOelEySURFdU9USTROalJNTkM0ek9ETXpOU0F4TGpVM016ZzFRelF1TlRnMk5DQXhMakE0TURBeUlEVXVNVFF4TmlBd0xqZ3pNamd6TmlBMUxqWTBORFExSURFdU1ERXlNemRNTmk0d01EVTNNeUF4TGpFME1UTTFRell1TXpZeE5qTWdNUzR5TmpnME1pQTJMamMxT0RjMUlERXVNVGcwTURFZ055NHdNekl4T1NBd0xqa3lNekUzTTB3M0xqTXdPVGM0SURBdU5qVTRNemt4UXpjdU5qazJNVE1nTUM0eU9EazROVElnT0M0ek1ETTROeUF3TGpJNE9UZzFNaUE0TGpZNU1ESXlJREF1TmpVNE16a3lURGd1T1RZM09ERWdNQzQ1TWpNeE56TkRPUzR5TkRFeU5TQXhMakU0TkRBeElEa3VOak00TXpjZ01TNHlOamcwTWlBNUxqazVOREkzSURFdU1UUXhNelZNTVRBdU16VTFOU0F4TGpBeE1qTTNRekV3TGpnMU9EUWdNQzQ0TXpJNE16WWdNVEV1TkRFek5pQXhMakE0TURBeUlERXhMall4TmpjZ01TNDFOek00TlV3eE1TNDNOakkxSURFdU9USTROalJETVRFdU9UQTJNeUF5TGpJM09ERTBJREV5TGpJek5EY2dNaTQxTVRZM09DQXhNaTQyTVRFMUlESXVOVFExTkRaTU1USXVPVGswSURJdU5UYzBOVGRETVRNdU5USTJOQ0F5TGpZeE5UQTVJREV6TGprek16RWdNeTR3TmpZM01pQXhNeTQ1TVRjM0lETXVOakF3TkRSTU1UTXVPVEEyTnlBekxqazRNemxETVRNdU9EazFPQ0EwTGpNMk1UWTBJREUwTGpBNU9EZ2dOQzQzTVRNeU5DQXhOQzQwTXpFMElEUXVPRGt5TjB3eE5DNDNOamtnTlM0d056UTRPRU14TlM0eU16ZzVJRFV1TXpJNE5EUWdNVFV1TkRJMk55QTFMamt3TmpReklERTFMakU1TlRZZ05pNHpPRGMzTmt3eE5TNHdNamsxSURZdU56TXpOVGhETVRRdU9EWTJJRGN1TURjME1qUWdNVFF1T1RBNE5DQTNMalEzT0RBeElERTFMakV6T1RJZ055NDNOemN5TWt3eE5TNHpOek0xSURndU1EZ3dPVFpETVRVdU5qazVOeUE0TGpVd016Y3pJREUxTGpZek5qRWdPUzR4TURneE15QXhOUzR5TWpreUlEa3VORFV6T0RWTU1UUXVPVE0yT1NBNUxqY3dNakkwUXpFMExqWTBPRGtnT1M0NU5EWTVNaUF4TkM0MU1qTTBJREV3TGpNek15QXhOQzQyTVRJMklERXdMamN3TUROTU1UUXVOekF6TVNBeE1TNHdOek14UXpFMExqZ3lPVEVnTVRFdU5Ua3hPU0F4TkM0MU1qVXpJREV5TGpFeE9ESWdNVFF1TURFeU9TQXhNaTR5TmpnMlRERXpMalkwTkRnZ01USXVNemMyTmtNeE15NHlPREl5SURFeUxqUTRNeUF4TXk0d01UQTFJREV5TGpjNE5EY2dNVEl1T1RReU5pQXhNeTR4TlRZMFRERXlMamczTXpjZ01UTXVOVE16T0VNeE1pNDNOemMzSURFMExqQTFPU0F4TWk0eU9EWXhJREUwTGpReE5qSWdNVEV1TnpVMk9TQXhOQzR6TkRVeVRERXhMak0zTmpjZ01UUXVNamswTVVNeE1TNHdNREl4SURFMExqSTBNemdnTVRBdU5qTXhNeUF4TkM0ME1Ea2dNVEF1TkRFNElERTBMamN5TVV3eE1DNHlNREUxSURFMUxqQXpOemRET1M0NU1EQXlOaUF4TlM0ME56ZzFJRGt1TXpBMU9DQXhOUzQyTURRNElEZ3VPRFV4TWpjZ01UVXVNekkwTjB3NExqVXlORGNnTVRVdU1USXpORm9pSUdacGJHdzlJaU13TUVJMlJrWWlMejRLUEhCaGRHZ2daRDBpVFRVdU1EWTVPVGdnTnk0MU5qSTJOVXczTGpFNU1UTWdPUzQyT0RNNU4wd3hNUzQwTXpNNUlEVXVORFF4TXpNaUlITjBjbTlyWlQwaWQyaHBkR1VpSUhOMGNtOXJaUzEzYVdSMGFEMGlNaUl2UGdvOEwzTjJaejRLJ30gd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBhbHQ9XCJEZXZcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs0NHB4XSBoLVs0NHB4XSBiZy1ibGFjayByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0ZXh0LVsyNHB4XSc+PEJzVGhyZWVEb3RzIC8+PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnNUaHJlZURvdHMiLCJIZWFkZXIiLCJzY3JvbGxZIiwic2V0U2Nyb2xsWSIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2hvd05hdmJhciIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiekluZGV4Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n");

/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.tsx\");\n\n\n\nfunction Layout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative min-h-screen overflow-x-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspaces/my-links/src/components/Layout.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"relative mx-auto max-w-lg px-4\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/workspaces/my-links/src/components/Layout.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/my-links/src/components/Layout.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDWDtBQU1mLFNBQVNFLE9BQU8sRUFBRUMsUUFBUSxFQUFlO0lBQ3RELHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0osK0NBQU1BOzs7Ozs4QkFDUCw4REFBQ0s7b0JBQUtELFdBQVU7OEJBQWtDRjs7Ozs7Ozs7Ozs7OztBQUkxRCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWxpbmtzLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeD9kZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuXHJcbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogTGF5b3V0UHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtaW4taC1zY3JlZW4gb3ZlcmZsb3cteC1oaWRkZW5cIj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBtYXgtdy1sZyBweC00XCI+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkxheW91dCIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DevFolio)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction DevFolio({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_3__.NextSeo, {\n                title: \"Links - Dev Khandelwal\",\n                defaultTitle: \"Links - Dev Khandelwal\",\n                description: \"DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.\",\n                canonical: \"https://slyro.vercel.app/\",\n                openGraph: {\n                    url: \"https://slyro.vercel.app\",\n                    title: \"Links - Dev Khandelwal\",\n                    description: \"DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.\",\n                    images: [\n                        {\n                            url: \"https://www.simpleimageresizer.com/_uploads/photos/727d9904/image_2023-12-11_141515879_529x768.png\",\n                            width: 529,\n                            height: 768,\n                            alt: \"Links\"\n                        }\n                    ]\n                },\n                twitter: {\n                    handle: \"@i_slyro\",\n                    site: \"@i_slyro\",\n                    cardType: \"summary_large_image\"\n                }\n            }, void 0, false, {\n                fileName: \"/workspaces/my-links/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    type: \"image/x-icon\",\n                    href: \"https://github.com/khandelwaldev.png\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/my-links/src/pages/_app.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspaces/my-links/src/pages/_app.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/workspaces/my-links/src/pages/_app.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspaces/my-links/src/pages/_app.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDOEI7QUFDVztBQUNOO0FBQ047QUFFZCxTQUFTRyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQ2pFLHFCQUNFOzswQkFDRSw4REFBQ0osNkNBQU9BO2dCQUNOSyxPQUFNO2dCQUNOQyxjQUFhO2dCQUNiQyxhQUFZO2dCQUNaQyxXQUFVO2dCQUNWQyxXQUFXO29CQUNUQyxLQUFLO29CQUNMTCxPQUFPO29CQUNQRSxhQUFhO29CQUNiSSxRQUFRO3dCQUNOOzRCQUNFRCxLQUFLOzRCQUNMRSxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxLQUFLO3dCQUNQO3FCQUNEO2dCQUNIO2dCQUNBQyxTQUFTO29CQUNQQyxRQUFRO29CQUNSQyxNQUFNO29CQUNOQyxVQUFVO2dCQUNaOzs7Ozs7MEJBRUYsOERBQUNqQixrREFBSUE7MEJBQ0wsNEVBQUNrQjtvQkFBS0MsS0FBSTtvQkFBT0MsTUFBSztvQkFBZUMsTUFBSzs7Ozs7Ozs7Ozs7MEJBRTFDLDhEQUFDdkIsMERBQU1BOzBCQUNMLDRFQUFDSTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSWhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbGlua3MvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV2Rm9saW8oeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmV4dFNlb1xyXG4gICAgICAgIHRpdGxlPVwiTGlua3MgLSBEZXYgS2hhbmRlbHdhbFwiXHJcbiAgICAgICAgZGVmYXVsdFRpdGxlPVwiTGlua3MgLSBEZXYgS2hhbmRlbHdhbFwiXHJcbiAgICAgICAgZGVzY3JpcHRpb249XCJESVNDVVNTIEEgUFJPSkVDVCBPUiBKVVNUIFdBTlQgVE8gU0FZIEhJPyBNWSBJTkJPWCBJUyBPUEVOIEZPUiBBTEwuXCJcclxuICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL3NseXJvLnZlcmNlbC5hcHAvXCJcclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIHVybDogXCJodHRwczovL3NseXJvLnZlcmNlbC5hcHBcIixcclxuICAgICAgICAgIHRpdGxlOiBcIkxpbmtzIC0gRGV2IEtoYW5kZWx3YWxcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRJU0NVU1MgQSBQUk9KRUNUIE9SIEpVU1QgV0FOVCBUTyBTQVkgSEk/IE1ZIElOQk9YIElTIE9QRU4gRk9SIEFMTC5cIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnNpbXBsZWltYWdlcmVzaXplci5jb20vX3VwbG9hZHMvcGhvdG9zLzcyN2Q5OTA0L2ltYWdlXzIwMjMtMTItMTFfMTQxNTE1ODc5XzUyOXg3NjgucG5nXCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUyOSxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDc2OCxcclxuICAgICAgICAgICAgICBhbHQ6IFwiTGlua3NcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0d2l0dGVyPXt7XHJcbiAgICAgICAgICBoYW5kbGU6IFwiQGlfc2x5cm9cIixcclxuICAgICAgICAgIHNpdGU6IFwiQGlfc2x5cm9cIixcclxuICAgICAgICAgIGNhcmRUeXBlOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2toYW5kZWx3YWxkZXYucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJOZXh0U2VvIiwiSGVhZCIsIkRldkZvbGlvIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiLCJkZWZhdWx0VGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhbm9uaWNhbCIsIm9wZW5HcmFwaCIsInVybCIsImltYWdlcyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwidHdpdHRlciIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsImxpbmsiLCJyZWwiLCJ0eXBlIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-icons"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();