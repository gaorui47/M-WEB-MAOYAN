/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/api/index.js":
/*!**************************************!*\
  !*** ./src/javascripts/api/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\n\r\nconst api={\r\n    request({url,data,methods,success}){\r\n        $.ajax({\r\n            // url:\"/maoyan/ajax/movieOnInfoList?token=\",\r\n            url:\"/maoyan\"+url,\r\n            data:data||{},\r\n            methods:methods||'get',\r\n            success:(res)=>{\r\n                success(res);\r\n            },\r\n            error:(error)=>{\r\n                console.log(\"请求出错了\",error)\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\nmodule.exports=api;\n\n//# sourceURL=webpack:///./src/javascripts/api/index.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-controller.js":
/*!*******************************************************!*\
  !*** ./src/javascripts/controllers/app-controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\nconst appMainView=__webpack_require__(/*! ./app-main-controller */ \"./src/javascripts/controllers/app-main-controller.js\");\r\n\r\nconst render = () => {\r\n    //利用webpack里面的string-loader转换成字符串\r\n    let appHeaderView=__webpack_require__(/*! ../views/app-header.html */ \"./src/javascripts/views/app-header.html\");\r\n    let appFooterView=__webpack_require__(/*! ../views/app-footer.html */ \"./src/javascripts/views/app-footer.html\");\r\n    $('#header').html(appHeaderView);\r\n    $('#footer').html(appFooterView);\r\n    appMainView.render();\r\n}\r\n\r\n\r\nmodule.exports = { render }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-main-controller.js":
/*!************************************************************!*\
  !*** ./src/javascripts/controllers/app-main-controller.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\n\r\nconst {getFilmsList}=__webpack_require__(/*! ../models/app-main-model */ \"./src/javascripts/models/app-main-model.js\")\r\n\r\nconst render=()=>{\r\n\r\n    let appMainView=__webpack_require__(/*! ../views/app-main.html */ \"./src/javascripts/views/app-main.html\");\r\n\r\n    getFilmsList((data)=>{\r\n        let template=Handlebars.compile(appMainView)\r\n        $('#main').html(template({films:data.movieList}));\r\n    });\r\n\r\n}\r\n\r\n\r\nmodule.exports={\r\n    render\r\n}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-main-controller.js?");

/***/ }),

/***/ "./src/javascripts/index.js":
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\nconst appController=__webpack_require__(/*! ./controllers/app-controller */ \"./src/javascripts/controllers/app-controller.js\")\r\n\r\nappController.render();\n\n//# sourceURL=webpack:///./src/javascripts/index.js?");

/***/ }),

/***/ "./src/javascripts/models/app-main-model.js":
/*!**************************************************!*\
  !*** ./src/javascripts/models/app-main-model.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst api=__webpack_require__(/*! ../api */ \"./src/javascripts/api/index.js\");\r\n\r\n\r\nconst getFilmsList=(callback)=>{\r\n   api.request({\r\n       url:\"/ajax/movieOnInfoList?token=\",\r\n       success:(data)=>{\r\n           callback(data);\r\n           console.log(data)\r\n       }\r\n})\r\n}\r\n\r\n\r\nmodule.exports={\r\n    getFilmsList\r\n}\n\n//# sourceURL=webpack:///./src/javascripts/models/app-main-model.js?");

/***/ }),

/***/ "./src/javascripts/views/app-footer.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-footer.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<footer id=\\\"app-footer\\\">        <nav>            <a href=\\\"\\\" class=\\\"active\\\"><i class=\\\"icon icon-dianying\\\"></i><span>电影</span></a>            <a href=\\\"\\\"><i class=\\\"icon icon-yingyuan\\\"></i><span>影院</span></a>            <a href=\\\"\\\"><i class=\\\"icon icon-wode-copy\\\"></i><span>我的</span></a>        </nav>    </footer>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-footer.html?");

/***/ }),

/***/ "./src/javascripts/views/app-header.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-header.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header id=\\\"app-header\\\">        猫眼电影    </header>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-header.html?");

/***/ }),

/***/ "./src/javascripts/views/app-main.html":
/*!*********************************************!*\
  !*** ./src/javascripts/views/app-main.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<main id=\\\"app-container\\\">                    <!-- 内容区域顶部的控制 start -->        <div class=\\\"film-controls\\\">            <div class=\\\"film-controls__city\\\">北京</div>            <div class=\\\"film-controls__types\\\">                <div class=\\\"film-controls__type-item active\\\">正在热映</div>                <div class=\\\"film-controls__type-item\\\">即将上映</div>            </div>            <div class=\\\"film-controls__search\\\"><i class=\\\"icon icon-wode-copy\\\"></i></div>        </div>        <!-- 内容区域顶部的控制 end -->        <!-- 内容影片列表 start -->        <div class=\\\"film-list\\\">            {{#each films}}            <div class=\\\"film-list__item\\\">                <div class=\\\"film-list__item-img\\\">                    <img width=\\\"100%\\\" height=\\\"100%\\\" src=\\\"{{img}}\\\" alt=\\\"\\\">                </div>                <div class=\\\"film-list__item-info\\\">                        <div class=\\\"film-list__item-title\\\">                                <h1>{{nm}}</h1>                                <span class=\\\"film-list__item-desc-img max\\\"></span>                            </div>                            <div class=\\\"film-list__item-grade\\\">观众评 <span>{{sc}}</span></div>                            <div class=\\\"film-list__item-actor\\\">主演:{{star}}</div>                            <div class=\\\"film-list__item-count\\\">{{showInfo}}</div>                        </div>                <div class=\\\"film-list__item-btn\\\">                   <button class=\\\"film-list__btn film-list__btn--buy active\\\">购票</button>                    <button class=\\\"film-list__btn film-list__btn--pre\\\">预售</button>                 </div>            </div>            {{/each}}        </div>        <!-- 内容影片列表 end -->    </main>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-main.html?");

/***/ })

/******/ });