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

/***/ "(app-pages-browser)/./src/components/banner/Banner.tsx":
/*!******************************************!*\
  !*** ./src/components/banner/Banner.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Banner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Banner_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Banner.module.scss */ \"(app-pages-browser)/./src/components/banner/Banner.module.scss\");\n/* harmony import */ var _Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Banner_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/Button */ \"(app-pages-browser)/./src/components/button/Button.tsx\");\n/* harmony import */ var _constans_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constans/constants */ \"(app-pages-browser)/./src/constans/constants.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Banner() {\n    _s();\n    const [brand, setBrand] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        brand: \"\",\n        isHover: false\n    });\n    const handleMouseEnter = (item)=>{\n        console.log(item);\n        return {\n            brand: item.id,\n            isHover: true\n        };\n    };\n    console.log(brand);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: brand.isHover ? \"\".concat(brand.brand, \"-bg\") : \"banner\",\n        className: (_Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().banner),\n        children: _constans_constants__WEBPACK_IMPORTED_MODULE_2__.brands.map((brand)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: brand.id,\n                onMouseEnter: handleMouseEnter,\n                onMouseLeave: (prev)=>setBrand({\n                        ...prev,\n                        brand: \"\",\n                        isHover: false\n                    }),\n                className: (_Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().column),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: brand.name\n                    }, void 0, false, {\n                        fileName: \"/Users/nicklllson/Documents/Portfolio/30x-sales/client/src/components/banner/Banner.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),\n                        children: brand.description\n                    }, void 0, false, {\n                        fileName: \"/Users/nicklllson/Documents/Portfolio/30x-sales/client/src/components/banner/Banner.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btn_box),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Подробнее о бренде\",\n                            href: \"#\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nicklllson/Documents/Portfolio/30x-sales/client/src/components/banner/Banner.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nicklllson/Documents/Portfolio/30x-sales/client/src/components/banner/Banner.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, brand.id, true, {\n                fileName: \"/Users/nicklllson/Documents/Portfolio/30x-sales/client/src/components/banner/Banner.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/nicklllson/Documents/Portfolio/30x-sales/client/src/components/banner/Banner.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Banner, \"+cWvhB358FvZCNkrUNaDsaurcXU=\");\n_c = Banner;\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Jhbm5lci9CYW5uZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEM7QUFDSjtBQUdRO0FBQ2I7QUFFbEIsU0FBU0k7O0lBRXRCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztRQUNqQ0UsT0FBTztRQUNQRSxTQUFTO0lBQ1g7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0M7UUFDeEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFFWixPQUFPO1lBQ0xKLE9BQU9JLEtBQUtHLEVBQUU7WUFDZEwsU0FBUztRQUNYO0lBQ0Y7SUFFQUcsUUFBUUMsR0FBRyxDQUFDTjtJQUdaLHFCQUNFLDhEQUFDUTtRQUNDRCxJQUFJUCxNQUFNRSxPQUFPLEdBQUcsR0FBZSxPQUFaRixNQUFNQSxLQUFLLEVBQUMsU0FBUTtRQUMzQ1MsV0FBV2QsbUVBQWE7a0JBQ3ZCRSx1REFBTUEsQ0FBQ2MsR0FBRyxDQUFDLENBQUNYLHNCQUNYLDhEQUFDUTtnQkFFQ0QsSUFBSVAsTUFBTU8sRUFBRTtnQkFDWkssY0FBY1Q7Z0JBQ2RVLGNBQWMsQ0FBQ0MsT0FBU2IsU0FBUzt3QkFDL0IsR0FBR2EsSUFBSTt3QkFDUGQsT0FBTzt3QkFDUEUsU0FBUztvQkFDWDtnQkFDQU8sV0FBV2QsbUVBQWE7O2tDQUV4Qiw4REFBQ3FCO3dCQUFHUCxXQUFXZCxrRUFBWTtrQ0FBR0ssTUFBTWtCLElBQUk7Ozs7OztrQ0FDeEMsOERBQUNDO3dCQUFFVixXQUFXZCxpRUFBVztrQ0FBR0ssTUFBTXFCLFdBQVc7Ozs7OztrQ0FDN0MsOERBQUNiO3dCQUFJQyxXQUFXZCxvRUFBYztrQ0FDNUIsNEVBQUNDLHNEQUFNQTs0QkFBQ3dCLE1BQUs7NEJBQXFCRyxNQUFLOzs7Ozs7Ozs7Ozs7ZUFicEN2QixNQUFNTyxFQUFFOzs7Ozs7Ozs7O0FBbUJ2QjtHQTVDd0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Jhbm5lci9CYW5uZXIudHN4PzU4YjUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYW5uZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vQnV0dG9uJztcblxuaW1wb3J0IHsgSUJyYW5kIH0gZnJvbSAnQC9pbnRlcmZhY2VzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgYnJhbmRzIH0gZnJvbSAnQC9jb25zdGFucy9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbm5lcigpIHtcblxuICBjb25zdCBbYnJhbmQsIHNldEJyYW5kXSA9IHVzZVN0YXRlKHtcbiAgICBicmFuZDogJycsXG4gICAgaXNIb3ZlcjogZmFsc2VcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IChpdGVtOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcblxuICAgIHJldHVybiB7XG4gICAgICBicmFuZDogaXRlbS5pZCxcbiAgICAgIGlzSG92ZXI6IHRydWUsXG4gICAgfVxuICB9O1xuXG4gIGNvbnNvbGUubG9nKGJyYW5kKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9e2JyYW5kLmlzSG92ZXIgPyBgJHticmFuZC5icmFuZH0tYmdgIDogYGJhbm5lcmB9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5iYW5uZXJ9PlxuICAgICAge2JyYW5kcy5tYXAoKGJyYW5kOiBJQnJhbmQpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17YnJhbmQuaWR9XG4gICAgICAgICAgaWQ9e2JyYW5kLmlkfVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhwcmV2KSA9PiBzZXRCcmFuZCh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgYnJhbmQ6ICcnLFxuICAgICAgICAgICAgaXNIb3ZlcjogZmFsc2VcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59XG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PnticmFuZC5uYW1lfTwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e2JyYW5kLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ0bl9ib3h9PlxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PSfQn9C+0LTRgNC+0LHQvdC10LUg0L4g0LHRgNC10L3QtNC1JyBocmVmPScjJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkJ1dHRvbiIsImJyYW5kcyIsInVzZVN0YXRlIiwiQmFubmVyIiwiYnJhbmQiLCJzZXRCcmFuZCIsImlzSG92ZXIiLCJoYW5kbGVNb3VzZUVudGVyIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImJhbm5lciIsIm1hcCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInByZXYiLCJjb2x1bW4iLCJoMiIsInRpdGxlIiwibmFtZSIsInAiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJidG5fYm94IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/banner/Banner.tsx\n"));

/***/ })

});