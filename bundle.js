/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (() => {

eval("const form = document.querySelector(\"form\"),\r\n        nextBtn = form.querySelector(\".nextBtn\"),\r\n        allInput = form.querySelectorAll(\".first input\");\r\n\r\n\r\nnextBtn.addEventListener(\"click\", ()=> {\r\n    allInput.forEach(input => {\r\n        if(input.value != \"\"){\r\n            form.classList.add('secActive');\r\n        }else{\r\n            form.classList.remove('secActive');\r\n        }\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack://save-our-strays-(sos)/./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/index.js"]();
/******/ 	
/******/ })()
;