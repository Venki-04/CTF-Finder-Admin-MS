/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dao/get-hello-dao.ts":
/*!**********************************!*\
  !*** ./src/dao/get-hello-dao.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"helloData\": () => (/* binding */ helloData)\n/* harmony export */ });\n/* harmony import */ var src_helpers_dbConnectionHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/helpers/dbConnectionHelper */ \"./src/helpers/dbConnectionHelper.ts\");\n\nconst helloData = async () => {\n    (0,src_helpers_dbConnectionHelper__WEBPACK_IMPORTED_MODULE_0__.connectToDb)();\n    return src_helpers_dbConnectionHelper__WEBPACK_IMPORTED_MODULE_0__.sequelizeConnection.query(\"SELECT * FROM emp_data\", { type: src_helpers_dbConnectionHelper__WEBPACK_IMPORTED_MODULE_0__.sequelizeConnection.QueryTypes.SELECT });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGFvL2dldC1oZWxsby1kYW8udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdGYtZm5kZXItYWRtaW4tbXMvLi9zcmMvZGFvL2dldC1oZWxsby1kYW8udHM/Njg0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0VG9EYiwgc2VxdWVsaXplQ29ubmVjdGlvbiB9IGZyb20gXCJzcmMvaGVscGVycy9kYkNvbm5lY3Rpb25IZWxwZXJcIjtcblxuXG5leHBvcnQgY29uc3QgaGVsbG9EYXRhICA9IGFzeW5jICgpOiBQcm9taXNlPGFueT4gPT4ge1xuICAgIC8vIGF3YWl0IHNlcXVlbGl6ZUNvbm5lY3Rpb24uYXV0aGVudGljYXRlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICAgIGNvbm5lY3RUb0RiKCk7XG4gICAgcmV0dXJuIHNlcXVlbGl6ZUNvbm5lY3Rpb24ucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIGVtcF9kYXRhXCIsIHsgdHlwZTogc2VxdWVsaXplQ29ubmVjdGlvbi5RdWVyeVR5cGVzLlNFTEVDVH0pO1xuIFxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/dao/get-hello-dao.ts\n");

/***/ }),

/***/ "./src/functions/hello/get-hello/handler.ts":
/*!**************************************************!*\
  !*** ./src/functions/hello/get-hello/handler.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var src_dao_get_hello_dao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/dao/get-hello-dao */ \"./src/dao/get-hello-dao.ts\");\n\n\n\n\nconst gethello = async () => {\n    const getresponse = await (0,src_dao_get_hello_dao__WEBPACK_IMPORTED_MODULE_3__.helloData)();\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)(getresponse);\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(gethello);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2hlbGxvL2dldC1oZWxsby9oYW5kbGVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3RmLWZuZGVyLWFkbWluLW1zLy4vc3JjL2Z1bmN0aW9ucy9oZWxsby9nZXQtaGVsbG8vaGFuZGxlci50cz9hMzQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxuaW1wb3J0IHR5cGUgeyBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50IH0gZnJvbSAnQGxpYnMvYXBpR2F0ZXdheSc7XG5pbXBvcnQgeyBmb3JtYXRKU09OUmVzcG9uc2UgfSBmcm9tICdAbGlicy9hcGlHYXRld2F5JztcbmltcG9ydCB7IG1pZGR5ZnkgfSBmcm9tICdAbGlicy9sYW1iZGEnO1xuaW1wb3J0IHsgaGVsbG9EYXRhIH0gZnJvbSAnc3JjL2Rhby9nZXQtaGVsbG8tZGFvJztcblxuXG5jb25zdCBnZXRoZWxsbzogVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDxhbnk+ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBnZXRyZXNwb25zZSAgPSAgYXdhaXQgaGVsbG9EYXRhKCk7XG4gIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2UoZ2V0cmVzcG9uc2UpO1xufVxuXG5leHBvcnQgY29uc3QgbWFpbiA9IG1pZGR5ZnkoZ2V0aGVsbG8pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/hello/get-hello/handler.ts\n");

/***/ }),

/***/ "./src/helpers/dbConnectionHelper.ts":
/*!*******************************************!*\
  !*** ./src/helpers/dbConnectionHelper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sequelizeConnection\": () => (/* binding */ sequelizeConnection),\n/* harmony export */   \"connectToDb\": () => (/* binding */ connectToDb)\n/* harmony export */ });\nconst { Sequelize } = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst sequelizeConnection = new Sequelize('dev', 'dbadmin', '^2C!Yi4HP^*59r8mfvA#', {\n    host: 'shush-dev.cluster-c4c2sa6jb2rt.eu-west-2.rds.amazonaws.com',\n    dialect: 'postgres'\n});\nconst connectToDb = async () => {\n    await sequelizeConnection.authenticate();\n    console.log('Connection has been established successfully.');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9kYkNvbm5lY3Rpb25IZWxwZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdGYtZm5kZXItYWRtaW4tbXMvLi9zcmMvaGVscGVycy9kYkNvbm5lY3Rpb25IZWxwZXIudHM/ZjgxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFNlcXVlbGl6ZSB9ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5cblxuZXhwb3J0IGNvbnN0IHNlcXVlbGl6ZUNvbm5lY3Rpb24gPSBuZXcgU2VxdWVsaXplKCdkZXYnLCAnZGJhZG1pbicsICdeMkMhWWk0SFBeKjU5cjhtZnZBIycsIHtcbiAgaG9zdDogJ3NodXNoLWRldi5jbHVzdGVyLWM0YzJzYTZqYjJydC5ldS13ZXN0LTIucmRzLmFtYXpvbmF3cy5jb20nLFxuICBkaWFsZWN0OiAncG9zdGdyZXMnIFxufSk7XG5cblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RiID0gYXN5bmMoKSA9PiB7XG4gIGF3YWl0IHNlcXVlbGl6ZUNvbm5lY3Rpb24uYXV0aGVudGljYXRlKCk7XG4gIGNvbnNvbGUubG9nKCdDb25uZWN0aW9uIGhhcyBiZWVuIGVzdGFibGlzaGVkIHN1Y2Nlc3NmdWxseS4nKTtcbn0iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/dbConnectionHelper.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify(response)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3RmLWZuZGVyLWFkbWluLW1zLy4vc3JjL2xpYnMvYXBpR2F0ZXdheS50cz82MjUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQVBJR2F0ZXdheVByb3h5RXZlbnQsIEFQSUdhdGV3YXlQcm94eVJlc3VsdCwgSGFuZGxlciB9IGZyb20gXCJhd3MtbGFtYmRhXCJcbmltcG9ydCB0eXBlIHsgRnJvbVNjaGVtYSB9IGZyb20gXCJqc29uLXNjaGVtYS10by10c1wiO1xuXG50eXBlIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gT21pdDxBUElHYXRld2F5UHJveHlFdmVudCwgJ2JvZHknPiAmIHsgYm9keTogRnJvbVNjaGVtYTxTPiB9XG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiwgQVBJR2F0ZXdheVByb3h5UmVzdWx0PlxuXG5leHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKHJlc3BvbnNlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXNwb25zZSlcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    console.log('called at middyfy', handler);\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdGYtZm5kZXItYWRtaW4tbXMvLi9zcmMvbGlicy9sYW1iZGEudHM/NmIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWlkZHkgZnJvbSBcIkBtaWRkeS9jb3JlXCJcbmltcG9ydCBtaWRkeUpzb25Cb2R5UGFyc2VyIGZyb20gXCJAbWlkZHkvaHR0cC1qc29uLWJvZHktcGFyc2VyXCJcblxuZXhwb3J0IGNvbnN0IG1pZGR5ZnkgPSAoaGFuZGxlcikgPT4ge1xuICBjb25zb2xlLmxvZygnY2FsbGVkIGF0IG1pZGR5ZnknLCBoYW5kbGVyKTtcbiAgcmV0dXJuIG1pZGR5KGhhbmRsZXIpLnVzZShtaWRkeUpzb25Cb2R5UGFyc2VyKCkpXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");;

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");;

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");;

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/hello/get-hello/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;