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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Banner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Banner_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Banner.module.scss */ \"(app-pages-browser)/./src/components/banner/Banner.module.scss\");\n/* harmony import */ var _Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Banner_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/Button */ \"(app-pages-browser)/./src/components/button/Button.tsx\");\n/* harmony import */ var _constans_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constans/constants */ \"(app-pages-browser)/./src/constans/constants.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Banner() {\n    _s();\n    const [brand, setBrand] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        brand: \"\",\n        isHover: false\n    });\n    const handleMouseEnter = (item)=>{\n        return {\n            brand: item.id,\n            isHover: true\n        };\n    };\n    console.log(brand);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: brand.isHover ? \"\".concat(brand.brand, \"-bg\") : \"banner\",\n        className: (_Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().banner),\n        children: _constans_constants__WEBPACK_IMPORTED_MODULE_2__.brands.map((brand)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: brand.id,\n                onMouseEnter: handleMouseEnter,\n                onMouseLeave: (prev)=>setBrand({\n                        ...prev,\n                        brand: \"\",\n                        isHover: false\n                    }),\n                className: (_Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().column),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: brand.name\n                    }, void 0, false, {\n                        fileName: \"/Users/nicklllson/Documents/Portfolio/30x-sales/client/src/components/banner/Banner.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),\n                        children: brand.description\n                    }, void 0, false, {\n                        fileName: \"/Users/nicklllson/Documents/Portfolio/30x-sales/client/src/components/banner/Banner.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Banner_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btn_box),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Подробнее о бренде\",\n                            href: \"#\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nicklllson/Documents/Portfolio/30x-sales/client/src/components/banner/Banner.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nicklllson/Documents/Portfolio/30x-sales/client/src/components/banner/Banner.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, brand.id, true, {\n                fileName: \"/Users/nicklllson/Documents/Portfolio/30x-sales/client/src/components/banner/Banner.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/nicklllson/Documents/Portfolio/30x-sales/client/src/components/banner/Banner.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Banner, \"+cWvhB358FvZCNkrUNaDsaurcXU=\");\n_c = Banner;\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Jhbm5lci9CYW5uZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEM7QUFDSjtBQUdRO0FBQ2I7QUFFbEIsU0FBU0k7O0lBRXRCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztRQUNqQ0UsT0FBTztRQUNQRSxTQUFTO0lBQ1g7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0M7UUFDeEIsT0FBTztZQUNMSixPQUFPSSxLQUFLQyxFQUFFO1lBQ2RILFNBQVM7UUFDWDtJQUNGO0lBRUFJLFFBQVFDLEdBQUcsQ0FBQ1A7SUFHWixxQkFDRSw4REFBQ1E7UUFDQ0gsSUFBSUwsTUFBTUUsT0FBTyxHQUFHLEdBQWUsT0FBWkYsTUFBTUEsS0FBSyxFQUFDLFNBQVE7UUFDM0NTLFdBQVdkLG1FQUFhO2tCQUN2QkUsdURBQU1BLENBQUNjLEdBQUcsQ0FBQyxDQUFDWCxzQkFDWCw4REFBQ1E7Z0JBRUNILElBQUlMLE1BQU1LLEVBQUU7Z0JBQ1pPLGNBQWNUO2dCQUNkVSxjQUFjLENBQUNDLE9BQVNiLFNBQVM7d0JBQy9CLEdBQUdhLElBQUk7d0JBQ1BkLE9BQU87d0JBQ1BFLFNBQVM7b0JBQ1g7Z0JBQ0FPLFdBQVdkLG1FQUFhOztrQ0FFeEIsOERBQUNxQjt3QkFBR1AsV0FBV2Qsa0VBQVk7a0NBQUdLLE1BQU1rQixJQUFJOzs7Ozs7a0NBQ3hDLDhEQUFDQzt3QkFBRVYsV0FBV2QsaUVBQVc7a0NBQUdLLE1BQU1xQixXQUFXOzs7Ozs7a0NBQzdDLDhEQUFDYjt3QkFBSUMsV0FBV2Qsb0VBQWM7a0NBQzVCLDRFQUFDQyxzREFBTUE7NEJBQUN3QixNQUFLOzRCQUFxQkcsTUFBSzs7Ozs7Ozs7Ozs7O2VBYnBDdkIsTUFBTUssRUFBRTs7Ozs7Ozs7OztBQW1CdkI7R0ExQ3dCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9iYW5uZXIvQmFubmVyLnRzeD81OGI1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmFubmVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbic7XG5cbmltcG9ydCB7IElCcmFuZCB9IGZyb20gJ0AvaW50ZXJmYWNlcy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGJyYW5kcyB9IGZyb20gJ0AvY29uc3RhbnMvY29uc3RhbnRzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XG5cbiAgY29uc3QgW2JyYW5kLCBzZXRCcmFuZF0gPSB1c2VTdGF0ZSh7XG4gICAgYnJhbmQ6ICcnLFxuICAgIGlzSG92ZXI6IGZhbHNlXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoaXRlbTogYW55KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyYW5kOiBpdGVtLmlkLFxuICAgICAgaXNIb3ZlcjogdHJ1ZSxcbiAgICB9XG4gIH07XG5cbiAgY29uc29sZS5sb2coYnJhbmQpO1xuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPXticmFuZC5pc0hvdmVyID8gYCR7YnJhbmQuYnJhbmR9LWJnYCA6IGBiYW5uZXJgfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVyfT5cbiAgICAgIHticmFuZHMubWFwKChicmFuZDogSUJyYW5kKSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2JyYW5kLmlkfVxuICAgICAgICAgIGlkPXticmFuZC5pZH1cbiAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsocHJldikgPT4gc2V0QnJhbmQoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGJyYW5kOiAnJyxcbiAgICAgICAgICAgIGlzSG92ZXI6IGZhbHNlXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1ufVxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57YnJhbmQubmFtZX08L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PnticmFuZC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5fYm94fT5cbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD0n0J/QvtC00YDQvtCx0L3QtdC1INC+INCx0YDQtdC90LTQtScgaHJlZj0nIycgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJCdXR0b24iLCJicmFuZHMiLCJ1c2VTdGF0ZSIsIkJhbm5lciIsImJyYW5kIiwic2V0QnJhbmQiLCJpc0hvdmVyIiwiaGFuZGxlTW91c2VFbnRlciIsIml0ZW0iLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJiYW5uZXIiLCJtYXAiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJwcmV2IiwiY29sdW1uIiwiaDIiLCJ0aXRsZSIsIm5hbWUiLCJwIiwidGV4dCIsImRlc2NyaXB0aW9uIiwiYnRuX2JveCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/banner/Banner.tsx\n"));

/***/ })

});