/* */
"format esm";

System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js", [], function (_export, _context) {
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

System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js", [], function (_export, _context) {
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
System.register('src/lib/CtrlBase.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js'], function (_export, _context) {
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
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs) {
      _classCallCheck = _npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersCreateClassJs) {
      _createClass = _npmSystemjsPluginBabel0025BabelHelpersCreateClassJs.default;
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
System.register('src/index.js', ['angular', '@uirouter/angularjs', 'angular-sanitize', 'angular-animate', 'jirikavi/AngularJS-Toaster', 'angular-strap', './lib/CtrlBase.js'], function (_export, _context) {
  "use strict";

  var angular, CtrlBase, CoreModule;
  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_uirouterAngularjs) {}, function (_angularSanitize) {}, function (_angularAnimate) {}, function (_jirikaviAngularJSToaster) {}, function (_angularStrap) {}, function (_libCtrlBaseJs) {
      CtrlBase = _libCtrlBaseJs.default;
    }],
    execute: function () {
      _export('CoreModule', CoreModule = angular.module('mstanev.angular.core', ['ui.router', 'ngSanitize', 'ngAnimate', 'toaster', 'ngAnimate', 'mgcrea.ngStrap']).name);

      _export('angular', angular);

      _export('CoreModule', CoreModule);

      _export('CtrlBase', CtrlBase);
    }
  };
});
//# sourceMappingURL=angular.1.x.x.core.js.map