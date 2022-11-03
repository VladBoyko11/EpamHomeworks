/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/addTweetBtn.js":
/*!***************************!*\
  !*** ./js/addTweetBtn.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTweet\": function() { return /* binding */ addTweet; }\n/* harmony export */ });\nfunction addTweet(url) {\n  var addTweet = document.getElementById('addTweet');\n  addTweet.addEventListener('click', function () {\n    var tweetItems = document.getElementById('tweetItems');\n    var modifyItem = document.getElementById('modifyItem');\n    var modifyItemHeader = document.getElementById('modifyItemHeader');\n    var modifyItemInput = document.getElementById('modifyItemInput');\n    var urlAdd = url;\n    urlAdd.hash = '/add';\n    tweetItems.style.display = 'none';\n    modifyItem.style.display = 'block';\n    modifyItemHeader.innerHTML = 'Add tweet';\n    history.pushState({\n      page: 2\n    }, 'add', urlAdd);\n    history.forward();\n    modifyItemInput.value = '';\n    console.log(history);\n  });\n}\n\n//# sourceURL=webpack://src/./js/addTweetBtn.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderTweets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTweets.js */ \"./js/renderTweets.js\");\n/* harmony import */ var _cancelBtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancelBtn.js */ \"./js/cancelBtn.js\");\n/* harmony import */ var _addTweetBtn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTweetBtn.js */ \"./js/addTweetBtn.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n\n\n\n\nvar root = document.getElementById('root');\nvar url = new URL('http://127.0.0.1:5500/Practice/fl-17/FL17_HW10/homework/src#');\nurl.hash = '/tweet';\nhistory.pushState({\n  page: 1\n}, 'tweet', url);\nvar modifyItemInput = document.getElementById('modifyItemInput');\nvar saveModifiedItem = document.getElementById('saveModifiedItem');\nvar navigationButtons = document.getElementById('navigationButtons');\nvar divLiked = document.createElement('div');\nvar cancelModification = document.getElementById('cancelModification');\nvar modifyItemHeader = document.getElementById('modifyItemHeader');\nvar btnBack = cancelModification.cloneNode();\nvar btnGoToLikedTweets = document.createElement('button');\nvar tweetItems = document.getElementById('tweetItems');\nbtnBack.id = 'btnBack';\nbtnBack.innerHTML = 'Back';\ndivLiked.id = 'divLiked';\ndivLiked.className = 'hidden';\ndivLiked.appendChild(btnBack);\nvar ulLiked = document.createElement('ul');\nulLiked.id = 'ulLiked';\ndivLiked.appendChild(ulLiked);\nroot.appendChild(divLiked);\nvar key = 0;\nbtnGoToLikedTweets.innerHTML = 'Go to liked';\nnavigationButtons.appendChild(btnGoToLikedTweets);\nbtnGoToLikedTweets.addEventListener('click', function () {\n  var urlLiked = url;\n  urlLiked.hash = '/liked';\n  tweetItems.style.display = 'none';\n  history.pushState({\n    page: 3\n  }, 'liked', urlLiked);\n  history.forward();\n  console.log(history);\n  divLiked.style.display = 'block';\n});\nfor (var index = 0; index < localStorage.length; index++) {\n  var keys = localStorage.key(index);\n  (0,_renderTweets_js__WEBPACK_IMPORTED_MODULE_0__.renderTweetsOnPage)(key, keys, url);\n  key++;\n}\n(0,_addTweetBtn_js__WEBPACK_IMPORTED_MODULE_2__.addTweet)(url);\ncancelModification.addEventListener('click', function () {\n  (0,_cancelBtn_js__WEBPACK_IMPORTED_MODULE_1__.cancelButton)();\n});\nbtnBack.addEventListener('click', function () {\n  (0,_cancelBtn_js__WEBPACK_IMPORTED_MODULE_1__.cancelButton)();\n});\nsaveModifiedItem.addEventListener('click', function () {\n  if (modifyItemHeader.innerHTML === 'Add tweet') {\n    var flag = true;\n    for (var _index = 0; _index < localStorage.length; _index++) {\n      if (modifyItemInput.value === localStorage.getItem(localStorage.key(_index))) {\n        flag = false;\n      }\n    }\n    if (flag === true) {\n      var _keys = [];\n      for (var _index2 = 0; _index2 < localStorage.length; _index2++) {\n        _keys[_index2] = localStorage.key(_index2);\n      }\n      _keys.sort(function (a, b) {\n        return a - b;\n      });\n      if (isNaN(Number(_keys[_keys.length - 1]))) {\n        key = 0;\n      } else {\n        key = Number(_keys[_keys.length - 1]);\n        key++;\n      }\n      localStorage.setItem(key, modifyItemInput.value);\n      (0,_renderTweets_js__WEBPACK_IMPORTED_MODULE_0__.renderTweetsOnPage)(key, _keys, url);\n      key++;\n      (0,_cancelBtn_js__WEBPACK_IMPORTED_MODULE_1__.cancelButton)();\n    } else {\n      var message = 'Error! You can`t tweet about that';\n      (0,_renderTweets_js__WEBPACK_IMPORTED_MODULE_0__.alertMessageOnPage)(message);\n    }\n  }\n  if (modifyItemHeader.innerHTML === 'Edit tweet') {\n    var _flag = true;\n    for (var _index3 = 0; _index3 < localStorage.length; _index3++) {\n      if (modifyItemInput.value === localStorage.getItem(localStorage.key(_index3))) {\n        _flag = false;\n      }\n    }\n    if (_flag === true) {\n      localStorage.setItem(Number(_renderTweets_js__WEBPACK_IMPORTED_MODULE_0__.keyEdit), modifyItemInput.value);\n      var li = document.getElementById(Number(_renderTweets_js__WEBPACK_IMPORTED_MODULE_0__.keyEdit));\n      var liLiked = document.getElementById(\"divLiked\".concat(_renderTweets_js__WEBPACK_IMPORTED_MODULE_0__.keyEdit));\n      if (liLiked !== null) {\n        var _liLiked = document.getElementById(\"divLiked\".concat(_renderTweets_js__WEBPACK_IMPORTED_MODULE_0__.keyEdit));\n        _liLiked.childNodes[0].innerHTML = modifyItemInput.value;\n      } else {\n        console.log('liLiked is null');\n      }\n      li.childNodes[0].innerHTML = modifyItemInput.value;\n      (0,_cancelBtn_js__WEBPACK_IMPORTED_MODULE_1__.cancelButton)();\n    } else {\n      var _message = 'Error! You can`t tweet about that';\n      (0,_renderTweets_js__WEBPACK_IMPORTED_MODULE_0__.alertMessageOnPage)(_message);\n    }\n  }\n});\n\n//# sourceURL=webpack://src/./js/app.js?");

/***/ }),

/***/ "./js/cancelBtn.js":
/*!*************************!*\
  !*** ./js/cancelBtn.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cancelButton\": function() { return /* binding */ cancelButton; }\n/* harmony export */ });\nfunction cancelButton() {\n  history.back();\n  var tweetItems = document.getElementById('tweetItems');\n  var divLiked = document.createElement('div');\n  var hidden = document.querySelectorAll('.hidden');\n  tweetItems.style.display = 'block';\n  divLiked.style.display = 'none';\n  for (var index = 0; index < hidden.length; index++) {\n    hidden[index].style.display = 'none';\n  }\n}\n\n//# sourceURL=webpack://src/./js/cancelBtn.js?");

/***/ }),

/***/ "./js/renderTweets.js":
/*!****************************!*\
  !*** ./js/renderTweets.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"alertMessageOnPage\": function() { return /* binding */ alertMessageOnPage; },\n/* harmony export */   \"keyEdit\": function() { return /* binding */ keyEdit; },\n/* harmony export */   \"renderTweetsOnPage\": function() { return /* binding */ renderTweetsOnPage; }\n/* harmony export */ });\nfunction alertMessageOnPage(message) {\n  var alertMessage = document.getElementById('alertMessage');\n  var alertMessageText = document.getElementById('alertMessageText');\n  alertMessage.style.display = 'block';\n  alertMessageText.innerHTML = message;\n  var sec = 2500;\n  setTimeout(function () {\n    alertMessage.style.display = 'none';\n    alertMessageText.innerHTML = '';\n  }, sec);\n}\nvar keyEdit = 0;\nfunction renderTweetsOnPage(key, keys, url) {\n  var ulLiked = document.getElementById('ulLiked');\n  var list = document.getElementById('list');\n  var li = document.createElement('li');\n  var btnRemove = document.createElement('button');\n  var btnLike = document.createElement('button');\n  var span = document.createElement('span');\n  if (key === keys) {\n    span.id = \"span\".concat(key);\n    span.innerHTML = localStorage.getItem(key);\n    li.appendChild(span);\n    li.id = key;\n  } else {\n    span.id = \"span\".concat(key);\n    span.innerHTML = localStorage.getItem(key);\n    li.appendChild(span);\n    li.id = key;\n  }\n  btnRemove.innerHTML = 'remove', btnLike.innerHTML = 'like';\n  btnRemove.className = \"btnRemove\", btnLike.className = \"btnLike\";\n  btnLike.style.float = 'right', btnRemove.style.float = 'right';\n  li.appendChild(btnLike), li.appendChild(btnRemove);\n  li.style.margin = '10px';\n  list.appendChild(li);\n  var index = li.id;\n  btnLike.addEventListener('click', function () {\n    if (btnLike.innerHTML === 'like') {\n      btnLike.innerHTML = 'unlike';\n      var liLiked = document.createElement('li');\n      liLiked = li.cloneNode();\n      liLiked.innerHTML = li.innerHTML;\n      liLiked.childNodes[0].id = \"spanLiked\".concat(index);\n      liLiked.id = \"divLiked\".concat(index);\n      ulLiked.appendChild(liLiked);\n      alertMessageOnPage(\"Hooray! You liked tweet with id \".concat(Number(index) + 1));\n      liLiked.childNodes['1'].addEventListener('click', function () {\n        btnLike.innerHTML = 'like';\n        var li = document.getElementById(\"divLiked\".concat(index));\n        ulLiked.removeChild(li);\n        alertMessageOnPage(\"Sorry you no longer like tweet with id \".concat(Number(index) + 1));\n      });\n      liLiked.childNodes['2'].addEventListener('click', function () {\n        var liLike = document.getElementById(\"divLiked\".concat(index));\n        ulLiked.removeChild(liLike);\n        li.remove();\n        localStorage.removeItem(index);\n      });\n    } else {\n      btnLike.innerHTML = 'like';\n      var liLike = document.getElementById(\"divLiked\".concat(index));\n      ulLiked.removeChild(liLike);\n      alertMessageOnPage(\"Sorry you no longer like tweet with id \".concat(index + 1));\n    }\n  });\n  btnRemove.addEventListener('click', function () {\n    var liLike = document.getElementById(\"divLiked\".concat(index));\n    if (liLike !== null) {\n      ulLiked.removeChild(liLike);\n      li.remove();\n      localStorage.removeItem(index);\n    } else {\n      li.remove();\n      localStorage.removeItem(index);\n    }\n  });\n  var tweetItems = document.getElementById('tweetItems');\n  var modifyItem = document.getElementById('modifyItem');\n  var modifyItemHeader = document.getElementById('modifyItemHeader');\n  var modifyItemInput = document.getElementById('modifyItemInput');\n  span.addEventListener('click', function () {\n    var urlAdd = url;\n    urlAdd.hash = \"/edit/:\".concat(span.parentNode.id);\n    tweetItems.style.display = 'none';\n    modifyItem.style.display = 'block';\n    modifyItemHeader.innerHTML = 'Edit tweet';\n    history.pushState({\n      page: 4\n    }, 'edit', urlAdd);\n    history.forward();\n    modifyItemInput.value = '';\n    console.log(history);\n    keyEdit = span.parentNode.id;\n  });\n  key++;\n}\n\n//# sourceURL=webpack://src/./js/renderTweets.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://src/./scss/style.scss?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;