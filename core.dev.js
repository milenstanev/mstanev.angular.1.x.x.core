!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], ["e","d","9","f","c","10","b","a","8"], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
/* */
"format esm";

$__System.register("2", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      });
    }
  };
});
/* */
"format esm";

$__System.register("3", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      });
    }
  };
});
$__System.registerDynamic('4', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  const SystemBuildConfig = {
    defaultJSExtensions: true,
    transpiler: "plugin-babel",
    babelOptions: {
      presets: ['babel-preset-es2017'],
      plugins: ['babel-plugin-transform-decorators-legacy']
    },
    map: {
      // In fact it's browser version of package: plugin-babel
      "systemjs-babel-build": "npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js"
    }
  };

  if (typeof window === 'object') {
    window.SystemJS.config(SystemBuildConfig);
  }

  if (typeof module === 'object') {
    module.exports = SystemBuildConfig;
  }
});
/* */
"format esm";

$__System.register("5", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      });
    }
  };
});
/* */
"format esm";

$__System.register("6", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }());
    }
  };
});
$__System.register('7', ['5', '6'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, CtrlBase;

  //region CtrlBase
  function make$Inject(args) {
    var _this = this;

    this.constructor.$inject.map(function (item, index) {
      _this[item] = args[index];
    });
  }

  return {
    setters: [function (_) {
      _classCallCheck = _.default;
    }, function (_2) {
      _createClass = _2.default;
    }],
    execute: function () {
      _export('default', CtrlBase = function () {
        function CtrlBase() {
          _classCallCheck(this, CtrlBase);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          this.constructor.init.call(this, args);
        }

        _createClass(CtrlBase, [{
          key: '$onDestroy',
          value: function $onDestroy() {
            if (this.hasOwnProperty('onDestroy') && typeof this.onDestroy === 'function') {
              onDestroy();
            }
          }
        }], [{
          key: 'init',
          value: function init(args) {
            make$Inject.call(this, args);
          }
        }]);

        return CtrlBase;
      }());

      _export('default', CtrlBase);
    }
  };
});
$__System.register('1', ['2', '3', '5', '8', 'a', 'b', '4', '9', 'c', 'd', 'e', 'f', '10', '7'], function (_export, _context) {
  "use strict";

  var _possibleConstructorReturn, _inherits, _classCallCheck, SystemBuildConfig, angular, uiRouter, angularSanitize, angularAnimate, toaster, ngStrap, CtrlBase, _class, _temp, CoreModule, Test, Asd;

  return {
    setters: [function (_) {
      _possibleConstructorReturn = _.default;
    }, function (_2) {
      _inherits = _2.default;
    }, function (_3) {
      _classCallCheck = _3.default;
    }, function (_4) {
      var _exportObj = {};
      _exportObj.default = _4.default;

      _export(_exportObj);
    }, function (_a) {
      var _exportObj2 = {};
      _exportObj2.babelPresetEs2017 = _a.default;

      _export(_exportObj2);
    }, function (_b) {
      var _exportObj3 = {};
      _exportObj3.babelPluginTransformDecoratorsLegacy = _b.default;

      _export(_exportObj3);
    }, function (_5) {
      SystemBuildConfig = _5.default;
    }, function (_6) {
      angular = _6.default;
    }, function (_c) {
      uiRouter = _c.default;
    }, function (_d) {
      angularSanitize = _d.default;
    }, function (_e) {
      angularAnimate = _e.default;
    }, function (_f) {
      toaster = _f.default;
    }, function (_7) {
      ngStrap = _7.default;
    }, function (_8) {
      CtrlBase = _8.default;
    }],
    execute: function () {
      _export('CoreModule', CoreModule = angular.module('mstanev.angular.core', ['ui.router', 'ngSanitize', 'ngAnimate', 'toaster', 'ngAnimate', 'mgcrea.ngStrap']).name);

      Test = (_temp = _class = function Test() {
        _classCallCheck(this, Test);
      }, _class.$inject = function () {
        return [$http];
      }, _temp);

      Asd = function (_Test) {
        _inherits(Asd, _Test);

        function Asd() {
          _classCallCheck(this, Asd);

          return _possibleConstructorReturn(this, (Asd.__proto__ || Object.getPrototypeOf(Asd)).apply(this, arguments));
        }

        return Asd;
      }(Test);

      _export('CoreModule', CoreModule);

      _export('angular', angular);

      _export('uiRouter', uiRouter);

      _export('angularSanitize', angularSanitize);

      _export('angularAnimate', angularAnimate);

      _export('toaster', toaster);

      _export('ngStrap', ngStrap);

      _export('CtrlBase', CtrlBase);

      _export('SystemBuildConfig', SystemBuildConfig);
    }
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["angular/bower-angular-animate","angular/bower-angular-sanitize","angular/bower-angular","jirikavi/AngularJS-Toaster","angular-ui-router","angular-strap","babel-plugin-transform-decorators-legacy","babel-preset-es2017","plugin-babel"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("angular/bower-angular-animate"), require("angular/bower-angular-sanitize"), require("angular/bower-angular"), require("jirikavi/AngularJS-Toaster"), require("angular-ui-router"), require("angular-strap"), require("babel-plugin-transform-decorators-legacy"), require("babel-preset-es2017"), require("plugin-babel"));
  else
    throw new Error("Module must be loaded as AMD or CommonJS");
});
//# sourceMappingURL=core.dev.js.map