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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(17)
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
__vue_options__.__file = "/Users/march/WeexPro/wanandroid-weex-m/src/home-index-weex.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-944ea108"
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

/***/ 15:
/***/ (function(module, exports) {

module.exports = {
  "line": {
    "height": "2",
    "backgroundColor": "#efefef"
  },
  "header-wrap": {
    "borderBottom": "2",
    "borderBottomColor": "#efefef",
    "borderLeftWidth": 0,
    "borderRightWidth": 0,
    "borderTopWidth": 0,
    "paddingTop": "20",
    "height": "120",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "header-center": {
    "color": "#1a1210",
    "fontSize": "34"
  },
  "header-right-wrap": {
    "position": "absolute",
    "height": "100",
    "justifyContent": "center",
    "alignItems": "center",
    "right": "30"
  },
  "header-right": {
    "color": "#1a1210",
    "fontSize": "32"
  },
  "container-wrap": {
    "backgroundColor": "#808080"
  },
  "tab-wrap": {
    "borderTopWidth": "2",
    "borderTopColor": "#efefef",
    "borderLeftWidth": 0,
    "borderRightWidth": 0,
    "borderBottomWidth": 0,
    "backgroundColor": "#FFFFFF",
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "tab-item": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": "250",
    "height": "100"
  },
  "tab-text": {
    "fontSize": "28"
  }
}

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var basic = weex.requireModule('cube-basic');
var debug = weex.requireModule('cube-debug');
var statusBar = weex.requireModule('cube-statusbar');
var cubeEvent = weex.requireModule('cube-event');

exports.default = {
  data: function data() {
    return {
      /**
          "platform": "android",
          "osVersion": "7.0",
          "appVersion": "1.0",
          "weexVersion": "0.17.0",
          "deviceModel": "MI 5s",
          "appName": "com.march.weex",
          "deviceWidth": "1080",
          "deviceHeight": "1920",
          "container": "weex-cube",
          "osName": "android",
          "os": "android",
          "scale": "3.0"
       */
      height: weex.config.env.deviceHeight,
      width: weex.config.env.deviceWidth,
      curTab: null,
      tabs: [{
        tag: 'recommend',
        url: 'http://cdevlab.top/home/home-recommend-weex',
        title: '推荐',
        lazyLoad: false,
        indexPage: true,
        selected: true
      }, {
        tag: 'tree',
        url: 'http://cdevlab.top/home/home-tree-weex',
        title: '体系',
        lazyLoad: false,
        indexPage: false,
        selected: false
      }, {
        tag: 'about',
        url: 'http://cdevlab.top/home/home-about-weex',
        title: '关于',
        lazyLoad: false,
        indexPage: false,
        selected: false
      }]
    };
  },

  methods: {
    clickShowFilter: function clickShowFilter() {
      cubeEvent.postEvent('open-filter-dialog', {});
    },
    clickSwitchTab: function clickSwitchTab(tab) {
      var self = this;
      self.tabs.forEach(function (item) {
        item.selected = false;
      });
      tab.selected = true;
      basic.showTab(tab.tag);
      this.curTab = tab;
      cubeEvent.postEvent('test', {});
    }
  },
  created: function created() {
    if (statusBar) {
      statusBar.transluteStatusBar();
      statusBar.setStatusBarLight();
    }
    basic.loadTabPages(this.tabs);
    this.curTab = this.tabs[0];
    self.registerEvent('test', function () {
      debug.toast('test');
    });
  }
};

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content-wrap"]
  }, [_c('div', {
    staticClass: ["header-wrap"]
  }, [_c('text', {
    staticClass: ["header-center"]
  }), _c('text', {
    staticClass: ["header-center"]
  }, [_vm._v(_vm._s(_vm.curTab.title))]), (_vm.curTab.tag === 'tree') ? _c('div', {
    staticClass: ["header-right-wrap"],
    on: {
      "click": _vm.clickShowFilter
    }
  }, [_c('text', {
    staticClass: ["header-right"]
  }, [_vm._v("筛选")])]) : _vm._e()]), _c('container', {
    staticClass: ["container-wrap"],
    style: {
      height: (750 * _vm.height / _vm.width) - 216 + 'px'
    }
  }), _c('div', {
    staticClass: ["tab-wrap"],
    style: {
      height: 100 + 'px'
    }
  }, _vm._l((_vm.tabs), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["tab-item"],
      on: {
        "click": function($event) {
          _vm.clickSwitchTab(item)
        }
      }
    }, [_c('text', {
      staticClass: ["tab-text"],
      style: {
        color: item.selected ? 'turquoise' : 'gray'
      }
    }, [_vm._v(_vm._s(item.title))])])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });