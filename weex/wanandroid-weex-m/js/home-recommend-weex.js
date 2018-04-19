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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cubeArticle = __webpack_require__(6);

var _cubeArticle2 = _interopRequireDefault(_cubeArticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cubeArticle2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
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
__vue_options__.__file = "/Users/march/WeexPro/wanandroid-weex-m/components/cube-article/cube-article.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-218bcbae"
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


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  "article-wrap": {
    "borderBottom": "2",
    "borderBottomColor": "#efefef",
    "borderLeftWidth": 0,
    "borderRightWidth": 0,
    "borderTopWidth": 0,
    "paddingLeft": "30",
    "height": "200",
    "width": "750",
    "justifyContent": "center",
    "alignItems": "flex-start"
  },
  "article-title": {
    "color": "#1a1210",
    "fontSize": "34",
    "fontWeight": "bold",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "article-desc-wrap": {
    "paddingTop": "30",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "article-tag": {
    "paddingTop": "2",
    "paddingRight": "2",
    "paddingBottom": "2",
    "paddingLeft": "2",
    "borderWidth": "2",
    "borderColor": "#f93450",
    "borderStyle": "solid",
    "fontSize": "22",
    "marginRight": "20"
  },
  "article-desc-key": {
    "color": "#928787",
    "fontSize": "26"
  },
  "article-desc-value": {
    "color": "#1a1210",
    "marginRight": "20",
    "fontSize": "26"
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var cubeBasic = weex.requireModule('cube-basic');

module.exports = {
  name: 'cube-article',
  data: function data() {
    return {};
  },

  props: {
    data: {
      type: Object
    }
  },
  methods: {
    clickItem: function clickItem() {
      cubeBasic.openWeb(this.data.link);
    },
    genaratePlatformTag: function genaratePlatformTag(link) {
      var lowerLink = link.toLowerCase();
      if (lowerLink.indexOf('jianshu') !== -1) {
        return '简书';
      } else if (lowerLink.indexOf('csdn') !== -1) {
        return 'CSDN';
      } else if (lowerLink.indexOf('juejin') !== -1) {
        return '掘金';
      } else if (lowerLink.indexOf('weixin') !== -1) {
        return '微信';
      } else if (lowerLink.indexOf('cnblogs') !== -1) {
        return '博客园';
      } else if (lowerLink.indexOf('wanandroid') !== -1) {
        return 'WanAndroid';
      } else if (lowerLink.indexOf('meituan') !== -1) {
        return '美团';
      } else if (lowerLink.indexOf('51cto') !== -1) {
        return '51CTO';
      }
      return '博客';
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["article-wrap"],
    on: {
      "click": _vm.clickItem
    }
  }, [_c('text', {
    staticClass: ["article-title"]
  }, [_vm._v(_vm._s(_vm.data.title))]), _c('div', {
    staticClass: ["article-desc-wrap"]
  }, [(_vm.data.fresh) ? _c('text', {
    staticClass: ["article-tag"]
  }, [_vm._v("新")]) : _vm._e(), _c('text', {
    staticClass: ["article-tag"]
  }, [_vm._v(_vm._s(_vm.genaratePlatformTag(_vm.data.link)))]), _c('text', {
    staticClass: ["article-desc-key"]
  }, [_vm._v("作者：")]), _c('text', {
    staticClass: ["article-desc-value"]
  }, [_vm._v(_vm._s(_vm.data.author))]), _c('text', {
    staticClass: ["article-desc-key"]
  }, [_vm._v("时间：")]), _c('text', {
    staticClass: ["article-desc-value"]
  }, [_vm._v(_vm._s(_vm.data.niceDate))])]), _c('div', {
    staticClass: ["article-desc-wrap"]
  }, [_c('text', {
    staticClass: ["article-desc-key"]
  }, [_vm._v("分类：")]), _c('text', {
    staticClass: ["article-desc-value"]
  }, [_vm._v(_vm._s(_vm.data.chapterName) + " / " + _vm._s(_vm.data.superChapterName))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(19)
)

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(21)
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
__vue_options__.__file = "/Users/march/WeexPro/wanandroid-weex-m/src/home-recommend-weex.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-bbd32a5c"
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
/* 19 */
/***/ (function(module, exports) {

module.exports = {
  "loading-wrap": {
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row",
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "loading-text": {
    "fontSize": "30",
    "color": "#928787",
    "marginRight": "20"
  },
  "loading-indicator": {
    "height": "50",
    "width": "50",
    "color": "#40E0D0"
  },
  "line": {
    "height": "2",
    "backgroundColor": "#efefef"
  },
  "slider-wrap": {
    "width": "750",
    "height": "400"
  },
  "slider-indicator": {
    "position": "absolute",
    "width": "750",
    "height": "400",
    "top": "160",
    "left": "240"
  },
  "slider-item": {
    "width": "750",
    "height": "400"
  },
  "slider-img": {
    "width": "750",
    "height": "400"
  },
  "slider-title-wrap": {
    "position": "absolute",
    "bottom": 0,
    "left": 0,
    "width": "750",
    "backgroundColor": "#000000",
    "opacity": 0.5,
    "justifyContent": "center",
    "alignItems": "flex-start",
    "height": "80"
  },
  "slider-title": {
    "paddingLeft": "20",
    "fontSize": "30",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexMixins = __webpack_require__(0);

var _cubeArticle = __webpack_require__(5);

var _cubeArticle2 = _interopRequireDefault(_cubeArticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var modal = weex.requireModule('cube-modal');
var cubeEvent = weex.requireModule('cube-event');

exports.default = {
  components: {
    'cube-article': _cubeArticle2.default
  },
  data: function data() {
    return {
      height: weex.config.env.deviceHeight,
      width: weex.config.env.deviceWidth,
      /**
          "desc": "一起来做个App吧",
          "id": 10,
          "imagePath": "http://www.wanandroid.com/blogimgs/50c115c2-cf6c-4802-aa7b-a4334de444cd.png",
          "isVisible": 1,
          "order": 0,
          "title": "一起来做个App吧",
          "type": 0,
          "url": "http://www.wanandroid.com/blog/show/2"
       */
      homeBanners: [],
      /**
        "apkLink": "",
        "author": "张明云",
        "chapterId": 296,
        "chapterName": "阅读",
        "collect": false,
        "courseId": 13,
        "desc": "",
        "envelopePic": "",
        "fresh": false,
        "id": 2798,
        "link": "https://www.jianshu.com/p/2f93483b8b39",
        "niceDate": "2018-04-08",
        "origin": "",
        "projectLink": "",
        "publishTime": 1523196084000,
        "superChapterId": 181,
        "superChapterName": "延伸技术",
        "tags": [],
        "title": "如何衡量一个Android应用开发人员的能力？",
        "type": 0,
        "visible": 1,
        "zan": 0
       */
      homeArticles: [],
      loadingStatus: {
        display: 'hide',
        loadingMsg: '上拉加载更多...'
      },
      refreshStatus: {
        display: 'hide',
        refreshMsg: '刷新数据...'
      },
      isArticleOver: false,
      curPage: 0,
      apiBanner: 'http://www.wanandroid.com/banner/json',
      apiArticleList: 'http://www.wanandroid.com/article/list/'
    };
  },

  mixins: [_weexMixins.request],
  created: function created() {
    var self = this;
    self.requestBanners();
    self.requestArticles(function () {});
    var globalEvent = weex.requireModule('globalEvent');
    globalEvent.addEventListener('home-recommend', function (params) {
      debug.logMsg(JSON.stringify(params, null, 2));
    });
    cubeEvent.registerEvent('home-recommend');
  },

  methods: {
    // 点击打开 web
    clickOpenDetail: function clickOpenDetail(link) {
      basic.openWeb(link);
    },
    onRefresh: function onRefresh() {
      var self = this;
      self.homeBanners.splice(0, self.homeBanners.length);
      self.homeArticles.splice(0, self.homeArticles.length);
      self.curPage = 0;
      self.refreshStatus.display = 'show';
      self.refreshStatus.loadingMsg = '请稍候...';
      self.requestBanners();
      self.requestArticles(function () {
        self.refreshStatus.display = 'hide';
        setTimeout(function () {
          self.refreshStatus.loadingMsg = '刷新数据...';
        }, 500);
      });
    },
    onLoadMore: function onLoadMore() {
      var self = this;
      if (self.isArticleOver) {
        modal.toast('没有更多数据');
        self.loadingStatus.display = 'hide';
        return;
      }
      self.loadingStatus.display = 'show';
      self.loadingStatus.loadingMsg = '请稍候...';
      this.requestArticles(function () {
        self.loadingStatus.display = 'hide';
        setTimeout(function () {
          self.loadingStatus.loadingMsg = '上拉加载更多...';
        }, 500);
      });
    },
    requestArticles: function requestArticles(finishCallback) {
      var self = this;
      self.request({
        url: '' + self.apiArticleList + self.curPage + '/json'
      }, function (data) {
        data.datas.forEach(function (item) {
          if (item) {
            self.homeArticles.push(item);
          }
        });
        self.curPage = data.curPage;
        self.isArticleOver = data.over;
        finishCallback();
      }, function () {
        finishCallback();
        modal.toast('请求失败');
      });
    },
    requestBanners: function requestBanners() {
      var self = this;
      self.request({
        url: self.apiBanner
      }, function (data) {
        self.homeBanners = data;
      }, function () {
        modal.toast('请求失败');
      });
    }
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["content-wrap"]
  }, [_c('refresh', {
    staticClass: ["loading-wrap"],
    attrs: {
      "display": _vm.refreshStatus.display
    },
    on: {
      "refresh": _vm.onRefresh
    }
  }, [_c('text', {
    staticClass: ["loading-text"]
  }, [_vm._v(_vm._s(_vm.refreshStatus.refreshMsg))]), _c('loading-indicator', {
    staticClass: ["loading-indicator"]
  })]), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('slider', {
    staticClass: ["slider-wrap"],
    attrs: {
      "interval": "5000",
      "scrollable": "true",
      "infinite": "true",
      "showIndicators": "true",
      "autoPlay": "true"
    }
  }, [_vm._l((_vm.homeBanners), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["slider-item"],
      on: {
        "click": function($event) {
          _vm.clickOpenDetail(item.url)
        }
      }
    }, [_c('image', {
      staticClass: ["slider-img"],
      attrs: {
        "resize": "cover",
        "src": item.imagePath
      }
    }), _c('div', {
      staticClass: ["slider-title-wrap"]
    }, [_c('text', {
      staticClass: ["slider-title"]
    }, [_vm._v(_vm._s(item.title))])])])
  }), _c('indicator', {
    staticClass: ["slider-indicator"],
    attrs: {
      "itemColor": "#cccccc",
      "itemSelectedColor": "#60d5cf",
      "itemSize": "12"
    }
  })], 2)]), _vm._l((_vm.homeArticles), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('cube-article', {
      attrs: {
        "data": item
      }
    }), _c('div', {
      staticClass: ["line"]
    })], 1)
  }), (!_vm.isArticleOver) ? _c('loading', {
    staticClass: ["loading-wrap"],
    attrs: {
      "display": _vm.loadingStatus.display
    },
    on: {
      "loading": _vm.onLoadMore
    }
  }, [_c('text', {
    staticClass: ["loading-text"]
  }, [_vm._v(_vm._s(_vm.loadingStatus.loadingMsg))]), _c('loading-indicator', {
    staticClass: ["loading-indicator"]
  })]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);