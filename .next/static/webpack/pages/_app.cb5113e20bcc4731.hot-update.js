"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/utils/XoUtil.tsx":
/*!******************************!*\
  !*** ./src/utils/XoUtil.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   XoUtil: function() { return /* binding */ XoUtil; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nvar XoUtil = {\n    //Ajax request handler\n    ajax: function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(url, method, data, loadingCallBack) {\n            var response, e;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (loadingCallBack) loadingCallBack(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n                                url: url,\n                                method: method,\n                                data: data\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (loadingCallBack) loadingCallBack(false);\n                        return [\n                            2,\n                            response\n                        ];\n                    case 3:\n                        e = _state.sent();\n                        if (loadingCallBack) loadingCallBack(false);\n                        console.error(e);\n                        throw e;\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function(url, method, data, loadingCallBack) {\n            return _ref.apply(this, arguments);\n        };\n    }()\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (XoUtil);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvWG9VdGlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkM7QUFFdEMsSUFBTUMsU0FBUztJQUNwQixzQkFBc0I7SUFDdEJDLElBQUk7bUJBQUUsNEVBQ0pDLEdBQVcsRUFDWEMsTUFBd0MsRUFDeENDLElBQXlCLEVBQ3pCQyxlQUFvRDtnQkFLNUNDLFVBUUNDOzs7O3dCQVhULElBQUlGLGlCQUFpQkEsZ0JBQWdCOzs7Ozs7Ozs7d0JBR0U7OzRCQUFNTixpREFBS0EsQ0FBQztnQ0FDL0NHLEtBQUFBO2dDQUNBQyxRQUFBQTtnQ0FDQUMsTUFBQUE7NEJBQ0Y7Ozt3QkFKTUUsV0FBK0I7d0JBTXJDLElBQUlELGlCQUFpQkEsZ0JBQWdCO3dCQUNyQzs7NEJBQU9DOzs7d0JBQ0FDO3dCQUNQLElBQUlGLGlCQUFpQkEsZ0JBQWdCO3dCQUNyQ0csUUFBUUMsS0FBSyxDQUFDRjt3QkFDZCxNQUFNQTs7Ozs7OztRQUVWO3dCQXJCRUwsR0FBVyxFQUNYQyxNQUF3QyxFQUN4Q0MsSUFBeUIsRUFDekJDLGVBQW9EOzs7O0FBbUJ4RCxFQUFFO0FBRUYsK0RBQWVMLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL1hvVXRpbC50c3g/ZTIxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgWG9VdGlsID0ge1xuICAvL0FqYXggcmVxdWVzdCBoYW5kbGVyXG4gIGFqYXg6IGFzeW5jIGZ1bmN0aW9uIChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBtZXRob2Q6IFwiR0VUXCIgfCBcIlBPU1RcIiB8IFwiUFVUXCIgfCBcIlBBVENIXCIsXG4gICAgZGF0YTogUmVjb3JkPHN0cmluZywgYW55PixcbiAgICBsb2FkaW5nQ2FsbEJhY2s/OiAobG9hZGluZ0NhbGxCYWNrOiBib29sZWFuKSA9PiB2b2lkXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGxvYWRpbmdDYWxsQmFjaykgbG9hZGluZ0NhbGxCYWNrKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPGFueT4gPSBhd2FpdCBheGlvcyh7XG4gICAgICAgIHVybCxcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBkYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChsb2FkaW5nQ2FsbEJhY2spIGxvYWRpbmdDYWxsQmFjayhmYWxzZSk7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGxvYWRpbmdDYWxsQmFjaykgbG9hZGluZ0NhbGxCYWNrKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFhvVXRpbDtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlhvVXRpbCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwibG9hZGluZ0NhbGxCYWNrIiwicmVzcG9uc2UiLCJlIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/XoUtil.tsx\n"));

/***/ })

});