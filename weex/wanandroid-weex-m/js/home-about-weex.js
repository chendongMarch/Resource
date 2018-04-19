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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(13)
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
__vue_options__.__file = "/Users/march/WeexPro/wanandroid-weex-m/src/home-about-weex.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4a8d9721"
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
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  "content-wrap": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "icon-img": {
    "width": "200",
    "height": "200"
  },
  "app-title": {
    "fontSize": "40",
    "marginTop": "50",
    "color": "#1a1210"
  },
  "item-wrap": {
    "width": "750",
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "justifyContent": "center",
    "borderColor": "#efefef",
    "borderStyle": "solid",
    "borderBottomWidth": "2",
    "borderLeftWidth": 0,
    "borderRightWidth": 0,
    "borderTopWidth": 0
  },
  "item-title": {
    "width": "750",
    "color": "#2F4F4F",
    "fontSize": "30"
  },
  "center-block": {
    "width": "750",
    "height": "50"
  },
  "bottom-block": {
    "width": "750",
    "height": "150"
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexMixins = __webpack_require__(0);

exports.default = {
  mixins: [_weexMixins.size, _weexMixins.router],
  data: function data() {
    return {
      icon: 'http://olx4t2q6z.bkt.clouddn.com/18-4-7/11323316.jpg',
      items: [{
        title: 'GitHub Weex-Cube Weex 容器框架',
        link: 'https://github.com/chendongMarch/Weex-Cube'
      }, {
        title: 'WanAndroid API 支持',
        link: 'http://www.wanandroid.com/blog/show/2'
      }, {
        title: '我的个人博客 cdevlab.top',
        link: 'http://cdevlab.top/'
      }, {
        title: '我的 GitHub',
        link: 'https://github.com/chendongMarch?tab=repositories'
      }]
    };
  },

  methods: {
    clickItem: function clickItem(item) {
      this.openWeb(item.link);
    }
  },
  created: function created() {}
}; //
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

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content-wrap"]
  }, [_c('image', {
    staticClass: ["icon-img"],
    attrs: {
      "src": _vm.icon
    }
  }), _c('text', {
    staticClass: ["app-title"]
  }, [_vm._v(" WanAndroid 客户端 (Weex) ")]), _c('div', {
    staticClass: ["center-block"]
  }), _vm._l((_vm.items), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["item-wrap"],
      on: {
        "click": function($event) {
          _vm.clickItem(item)
        }
      }
    }, [_c('text', {
      staticClass: ["item-title"]
    }, [_vm._v(_vm._s(item.title))])])
  }), _c('div', {
    staticClass: ["bottom-block"]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);