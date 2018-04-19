// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.size = exports.router = exports.event = exports.request = undefined;

var _request = __webpack_require__(1);

var _request2 = _interopRequireDefault(_request);

var _event = __webpack_require__(2);

var _event2 = _interopRequireDefault(_event);

var _router = __webpack_require__(3);

var _router2 = _interopRequireDefault(_router);

var _size = __webpack_require__(4);

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.request = _request2.default;
exports.event = _event2.default;
exports.router = _router2.default;
exports.size = _size2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var stream = weex.requireModule('stream');
var modal = weex.requireModule('cube-modal');
var debug = weex.requireModule('cube-debug');

exports.default = {
  methods: {
    request: function request(config, successCallback, failCallback) {
      debug.logMsg('req ' + config.url);
      config.method = config.method || 'GET';
      config.type = config.type || 'json';
      stream.fetch(config, function (resp) {
        if (resp.status !== 200) {
          if (failCallback) {
            failCallback(resp);
          } else {
            modal.toast('请求失败');
          }
          return;
        }
        var wxdata = resp.data;
        if (wxdata.errorCode !== 0) {
          if (failCallback) {
            failCallback(resp);
          } else if (wxdata.errorMsg) {
            modal.toast(wxdata.errorMsg);
          } else {
            modal.toast('请求失败');
          }
          return;
        }
        successCallback(wxdata.data);
      });
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalEvent = weex.requireModule('globalEvent');
var debug = weex.requireModule('cube-debug');
var cubeEvent = weex.requireModule('cube-event');

exports.default = {
  methods: {
    registerEvent: function registerEvent(key, callback) {
      if (!globalEvent) {
        return;
      }
      // 注册监听
      globalEvent.addEventListener(key, function (data) {
        callback(data);
      });
      // 给该页面注册该事件
      cubeEvent.registerEvent(key);
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cubeBasic = weex.requireModule('cube-basic');

exports.default = {
  methods: {
    openUrl: function openUrl(url, params) {
      if (params) {
        cubeBasic.putExtraData(url, params);
      }
      cubeBasic.openUrl(url);
    },
    openDialog: function openDialog(url, config, params) {
      if (params) {
        cubeBasic.putExtraData(url, params);
      }
      cubeBasic.openDialog(url, config);
    },
    openWeb: function openWeb(url) {
      cubeBasic.openWeb(url);
    }
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      deviceHeight: weex.config.env.deviceHeight,
      deviceWidth: weex.config.env.deviceWidth
    };
  }
};

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(29)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/march/WeexPro/wanandroid-weex-m/src/tree-category-weex.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-39643182"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "title-wrap": {
    "height": "100",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "title-text": {
    "color": "#1a1210",
    "fontSize": "30"
  },
  "line": {
    "height": "2",
    "backgroundColor": "#efefef"
  },
  "content-wrap": {
    "height": "1000"
  },
  "level-warp": {
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "level-parent": {
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "paddingLeft": "20",
    "paddingRight": "20",
    "paddingTop": "10",
    "paddingBottom": "10",
    "fontSize": "28",
    "color": "#1a1210",
    "borderWidth": "2",
    "borderColor": "#808080",
    "borderStyle": "solid",
    "borderRadius": "20"
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexMixins = __webpack_require__(0);

var debug = weex.requireModule('cube-debug'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var cubeEvent = weex.requireModule('cube-event');
var cubeBasic = weex.requireModule('cube-basic');

exports.default = {
  minxins: [_weexMixins.request],
  data: function data() {
    return {
      categoryList: weex.config.extraData.data,
      levelTwoCategory: []
    };
  },

  methods: {
    clickOneLevel: function clickOneLevel(category) {
      this.levelTwoCategory = category.children;
    },
    clickTwoLevel: function clickTwoLevel(twoLevelCategory) {
      cubeBasic.close();
      cubeEvent.postEvent('choose-category', { cid: twoLevelCategory.id });
    }
  },
  created: function created() {
    this.levelTwoCategory = this.categoryList[0].children;
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content-wrap"]
  }, [_vm._m(0), _c('scroller', [_c('div', {
    staticClass: ["level-warp"]
  }, _vm._l((_vm.categoryList), function(item, index) {
    return _c('div', {
      key: index,
      on: {
        "click": function($event) {
          _vm.clickOneLevel(item)
        }
      }
    }, [_c('text', {
      staticClass: ["level-parent"]
    }, [_vm._v(_vm._s(item.name))])])
  })), _c('div', {
    staticClass: ["line"]
  }), _c('div', {
    staticClass: ["level-warp"]
  }, _vm._l((_vm.levelTwoCategory), function(item, index) {
    return _c('div', {
      key: index,
      on: {
        "click": function($event) {
          _vm.clickTwoLevel(item)
        }
      }
    }, [_c('text', {
      staticClass: ["level-parent"]
    }, [_vm._v(_vm._s(item.name))])])
  }))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["title-wrap"]
  }, [_c('text', {
    staticClass: ["title-text"]
  }, [_vm._v("请选择分类")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);