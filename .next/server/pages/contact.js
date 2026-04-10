"use strict";
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
exports.id = "pages/contact";
exports.ids = ["pages/contact"];
exports.modules = {

/***/ "./components/ContactPage.tsx":
/*!************************************!*\
  !*** ./components/ContactPage.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContactPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-copy-to-clipboard */ \"react-copy-to-clipboard\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_type_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-type-animation */ \"react-type-animation\");\n/* harmony import */ var react_type_animation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_type_animation__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ContactPage() {\n    const { 0: copyText , 1: setCopyText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Click to copy\");\n    const copied = ()=>{\n        setCopyText(\"Email copied\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"contactContainer bg-slate-800 text-slate-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex sm:justify-start sm:items-center lg:pl-16 pt-40 mt-32 uppercase\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"contactText\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Message me to\"\n                        }, void 0, false, {\n                            fileName: \"/Users/georgeonisiforou/portfolio-website/components/ContactPage.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_type_animation__WEBPACK_IMPORTED_MODULE_3__.TypeAnimation, {\n                            sequence: [\n                                \"work together\",\n                                1600,\n                                \"discuss a project\",\n                                1600,\n                                \"grab a coffee\",\n                                1600,\n                                \"have lunch\",\n                                1600,\n                                \"recommend a burger\",\n                                1600, \n                            ],\n                            wrapper: \"span\",\n                            className: \"contactType\",\n                            speed: 55,\n                            deletionSpeed: 70,\n                            repeat: Infinity,\n                            cursor: true\n                        }, void 0, false, {\n                            fileName: \"/Users/georgeonisiforou/portfolio-website/components/ContactPage.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/georgeonisiforou/portfolio-website/components/ContactPage.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/georgeonisiforou/portfolio-website/components/ContactPage.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex p-8 ml-8 mb-4 mt-32\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__.CopyToClipboard, {\n                    text: \"georgeon2016@gmail.com\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lg:text-6xl sm:text-4xl text-2xl flex flex-col items-center emailContainer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"clickToCopy text-2xl\",\n                                children: copyText\n                            }, void 0, false, {\n                                fileName: \"/Users/georgeonisiforou/portfolio-website/components/ContactPage.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: copied,\n                                className: \"email email--underline-white\",\n                                children: \"georgeon2016@gmail.com\"\n                            }, void 0, false, {\n                                fileName: \"/Users/georgeonisiforou/portfolio-website/components/ContactPage.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/georgeonisiforou/portfolio-website/components/ContactPage.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/georgeonisiforou/portfolio-website/components/ContactPage.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/georgeonisiforou/portfolio-website/components/ContactPage.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/georgeonisiforou/portfolio-website/components/ContactPage.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RQYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNrQjtBQUNMO0FBRXRDLFNBQVNJLFdBQVcsR0FBRztJQUNwQyxNQUFNLEtBQUNDLFFBQVEsTUFBRUMsV0FBVyxNQUFJTCwrQ0FBUSxDQUFDLGVBQWUsQ0FBQztJQUV6RCxNQUFNTSxNQUFNLEdBQUcsSUFBTTtRQUNuQkQsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzdCO0lBRUQscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDhDQUE4Qzs7MEJBQzNELDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0VBQXNFOzBCQUNuRiw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGFBQWE7O3NDQUMxQiw4REFBQ0MsTUFBSTtzQ0FBQyxlQUFhOzs7OztnQ0FBTzt3QkFBQyxHQUFHO3NDQUM5Qiw4REFBQ1AsK0RBQWE7NEJBQ1pRLFFBQVEsRUFBRTtnQ0FDUixlQUFlO0FBQ2Ysb0NBQUk7Z0NBQ0osbUJBQW1CO0FBQ25CLG9DQUFJO2dDQUNKLGVBQWU7QUFDZixvQ0FBSTtnQ0FDSixZQUFZO0FBQ1osb0NBQUk7Z0NBQ0osb0JBQW9CO0FBQ3BCLG9DQUFJOzZCQUNMOzRCQUNEQyxPQUFPLEVBQUMsTUFBTTs0QkFDZEgsU0FBUyxFQUFDLGFBQWE7NEJBQ3ZCSSxLQUFLLEVBQUUsRUFBRTs0QkFDVEMsYUFBYSxFQUFFLEVBQUU7NEJBQ2pCQyxNQUFNLEVBQUVDLFFBQVE7NEJBQ2hCQyxNQUFNOzs7OztnQ0FDTjs7Ozs7O3dCQUNFOzs7OztvQkFDRjswQkFFTiw4REFBQ1QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDBCQUEwQjswQkFDdkMsNEVBQUNQLG9FQUFlO29CQUFDZ0IsSUFBSSxFQUFDLHdCQUF3Qjs4QkFDNUMsNEVBQUNWLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw0RUFBNEU7OzBDQUN6Riw4REFBQ1UsSUFBRTtnQ0FBQ1YsU0FBUyxFQUFDLHNCQUFzQjswQ0FBRUosUUFBUTs7Ozs7b0NBQU07MENBQ3BELDhEQUFDZSxRQUFNO2dDQUNMQyxJQUFJLEVBQUMsUUFBUTtnQ0FDYkMsT0FBTyxFQUFFZixNQUFNO2dDQUNmRSxTQUFTLEVBQUMsOEJBQThCOzBDQUN6Qyx3QkFFRDs7Ozs7b0NBQVM7Ozs7Ozs0QkFDTDs7Ozs7d0JBQ1U7Ozs7O29CQUNkOzs7Ozs7WUFDRixDQUNOO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL2NvbXBvbmVudHMvQ29udGFjdFBhZ2UudHN4P2ZiZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tIFwicmVhY3QtY29weS10by1jbGlwYm9hcmRcIjtcbmltcG9ydCB7IFR5cGVBbmltYXRpb24gfSBmcm9tIFwicmVhY3QtdHlwZS1hbmltYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdFBhZ2UoKSB7XG4gIGNvbnN0IFtjb3B5VGV4dCwgc2V0Q29weVRleHRdID0gdXNlU3RhdGUoXCJDbGljayB0byBjb3B5XCIpO1xuXG4gIGNvbnN0IGNvcGllZCA9ICgpID0+IHtcbiAgICBzZXRDb3B5VGV4dChcIkVtYWlsIGNvcGllZFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENvbnRhaW5lciBiZy1zbGF0ZS04MDAgdGV4dC1zbGF0ZS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzbTpqdXN0aWZ5LXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBsZzpwbC0xNiBwdC00MCBtdC0zMiB1cHBlcmNhc2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0VGV4dFwiPlxuICAgICAgICAgIDxzcGFuPk1lc3NhZ2UgbWUgdG88L3NwYW4+e1wiIFwifVxuICAgICAgICAgIDxUeXBlQW5pbWF0aW9uXG4gICAgICAgICAgICBzZXF1ZW5jZT17W1xuICAgICAgICAgICAgICBcIndvcmsgdG9nZXRoZXJcIixcbiAgICAgICAgICAgICAgMTYwMCxcbiAgICAgICAgICAgICAgXCJkaXNjdXNzIGEgcHJvamVjdFwiLFxuICAgICAgICAgICAgICAxNjAwLFxuICAgICAgICAgICAgICBcImdyYWIgYSBjb2ZmZWVcIixcbiAgICAgICAgICAgICAgMTYwMCxcbiAgICAgICAgICAgICAgXCJoYXZlIGx1bmNoXCIsXG4gICAgICAgICAgICAgIDE2MDAsXG4gICAgICAgICAgICAgIFwicmVjb21tZW5kIGEgYnVyZ2VyXCIsXG4gICAgICAgICAgICAgIDE2MDAsXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgd3JhcHBlcj1cInNwYW5cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdFR5cGVcIlxuICAgICAgICAgICAgc3BlZWQ9ezU1fVxuICAgICAgICAgICAgZGVsZXRpb25TcGVlZD17NzB9XG4gICAgICAgICAgICByZXBlYXQ9e0luZmluaXR5fVxuICAgICAgICAgICAgY3Vyc29yXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtOCBtbC04IG1iLTQgbXQtMzJcIj5cbiAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PVwiZ2Vvcmdlb24yMDE2QGdtYWlsLmNvbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dGV4dC02eGwgc206dGV4dC00eGwgdGV4dC0yeGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZW1haWxDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjbGlja1RvQ29weSB0ZXh0LTJ4bFwiPntjb3B5VGV4dH08L2gzPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17Y29waWVkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbWFpbCBlbWFpbC0tdW5kZXJsaW5lLXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZ2Vvcmdlb24yMDE2QGdtYWlsLmNvbVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29weVRvQ2xpcGJvYXJkIiwiVHlwZUFuaW1hdGlvbiIsIkNvbnRhY3RQYWdlIiwiY29weVRleHQiLCJzZXRDb3B5VGV4dCIsImNvcGllZCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJzZXF1ZW5jZSIsIndyYXBwZXIiLCJzcGVlZCIsImRlbGV0aW9uU3BlZWQiLCJyZXBlYXQiLCJJbmZpbml0eSIsImN1cnNvciIsInRleHQiLCJoMyIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContactPage.tsx\n");

/***/ }),

/***/ "./pages/contact.tsx":
/*!***************************!*\
  !*** ./pages/contact.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ContactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContactPage */ \"./components/ContactPage.tsx\");\n\n\n\nfunction Contact() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContactPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/georgeonisiforou/portfolio-website/pages/contact.tsx\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUMwQjtBQUVyQyxTQUFTRSxPQUFPLEdBQUc7SUFDaEMscUJBQU8sOERBQUNELCtEQUFXOzs7O1lBQUcsQ0FBQztDQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vcGFnZXMvY29udGFjdC50c3g/MjRkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdFBhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgcmV0dXJuIDxDb250YWN0UGFnZSAvPjtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhY3RQYWdlIiwiQ29udGFjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-copy-to-clipboard":
/*!******************************************!*\
  !*** external "react-copy-to-clipboard" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "react-type-animation":
/*!***************************************!*\
  !*** external "react-type-animation" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-type-animation");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/contact.tsx"));
module.exports = __webpack_exports__;

})();