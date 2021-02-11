module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/theme */ \"./src/theme/index.js\");\nvar _jsxFileName = \"/Users/lauramadalosso/Desktop/project-nextjs/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"]`\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n`;\nfunction App({\n  Component,\n  pageProps\n}) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(GlobalStyle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: _src_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO0FBUWUsU0FBU0MsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQXVDO0FBQ3BELFNBQ0UsbUVBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsK0RBQUQ7QUFBZSxTQUFLLEVBQUVDLGtEQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBRkYsQ0FERjtBQVFEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3JjL3RoZW1lJ1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: colors, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colors\", function() { return colors; });\nconst colors = {\n  background: {\n    light: {\n      color: '#FFFFFF'\n    },\n    main: {\n      color: '#F2F2F2'\n    }\n  },\n  borders: {\n    main: {\n      color: '#F1F1F1'\n    }\n  },\n  primary: {\n    main: {\n      color: '#D7385E',\n      contrastText: '#fff'\n    }\n  },\n  secondary: {\n    main: {\n      color: '#FB7B6B',\n      contrastText: '#fff'\n    }\n  },\n  tertiary: {\n    main: {\n      color: '#070C0E',\n      contrastText: '#fff'\n    },\n    light: {\n      color: '#88989E',\n      contrastText: '#fff'\n    }\n  },\n  modes: {\n    dark: {}\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  colors,\n  borderRadius: '12px',\n  transition: '200ms ease-in-out'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanM/MGJlNyJdLCJuYW1lcyI6WyJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwibGlnaHQiLCJjb2xvciIsIm1haW4iLCJib3JkZXJzIiwicHJpbWFyeSIsImNvbnRyYXN0VGV4dCIsInNlY29uZGFyeSIsInRlcnRpYXJ5IiwibW9kZXMiLCJkYXJrIiwiYm9yZGVyUmFkaXVzIiwidHJhbnNpdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLE1BQU1BLE1BQU0sR0FBRztBQUNsQkMsWUFBVSxFQUFFO0FBQ1ZDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUU7QUFERixLQURHO0FBSVZDLFFBQUksRUFBRTtBQUNKRCxXQUFLLEVBQUU7QUFESDtBQUpJLEdBRE07QUFTbEJFLFNBQU8sRUFBRTtBQUNQRCxRQUFJLEVBQUU7QUFDSkQsV0FBSyxFQUFFO0FBREg7QUFEQyxHQVRTO0FBY2xCRyxTQUFPLEVBQUU7QUFDUEYsUUFBSSxFQUFFO0FBQ0pELFdBQUssRUFBRSxTQURIO0FBRUpJLGtCQUFZLEVBQUU7QUFGVjtBQURDLEdBZFM7QUFvQmxCQyxXQUFTLEVBQUU7QUFDVEosUUFBSSxFQUFFO0FBQ0pELFdBQUssRUFBRSxTQURIO0FBRUpJLGtCQUFZLEVBQUU7QUFGVjtBQURHLEdBcEJPO0FBMEJsQkUsVUFBUSxFQUFFO0FBQ1JMLFFBQUksRUFBRTtBQUNKRCxXQUFLLEVBQUUsU0FESDtBQUVKSSxrQkFBWSxFQUFFO0FBRlYsS0FERTtBQUtSTCxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFLFNBREY7QUFFTEksa0JBQVksRUFBRTtBQUZUO0FBTEMsR0ExQlE7QUFvQ2xCRyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFO0FBREQ7QUFwQ1csQ0FBZjtBQXlDVTtBQUNiWCxRQURhO0FBRWJZLGNBQVksRUFBRSxNQUZEO0FBR2JDLFlBQVUsRUFBRTtBQUhDLENBQWYiLCJmaWxlIjoiLi9zcmMvdGhlbWUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29sb3JzID0ge1xuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGxpZ2h0OiB7XG4gICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgICB9LFxuICAgICAgbWFpbjoge1xuICAgICAgICBjb2xvcjogJyNGMkYyRjInLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJvcmRlcnM6IHtcbiAgICAgIG1haW46IHtcbiAgICAgICAgY29sb3I6ICcjRjFGMUYxJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiB7XG4gICAgICAgIGNvbG9yOiAnI0Q3Mzg1RScsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjoge1xuICAgICAgICBjb2xvcjogJyNGQjdCNkInLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0ZXJ0aWFyeToge1xuICAgICAgbWFpbjoge1xuICAgICAgICBjb2xvcjogJyMwNzBDMEUnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgICBsaWdodDoge1xuICAgICAgICBjb2xvcjogJyM4ODk4OUUnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtb2Rlczoge1xuICAgICAgZGFyazoge30sXG4gICAgfSxcbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb2xvcnMsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gICAgdHJhbnNpdGlvbjogJzIwMG1zIGVhc2UtaW4tb3V0JyxcbiAgfTsgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/index.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });