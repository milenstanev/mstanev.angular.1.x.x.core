!function(e){function r(e,r,t){e in l||(l[e]={name:e,declarative:!0,deps:r,declare:t,normalizedDeps:r})}function t(e){return p[e]||(p[e]={name:e,dependencies:[],exports:{},importers:[]})}function n(r){if(!r.module){var o=r.module=t(r.name),a=r.module.exports,u=r.declare.call(e,function(e,r){if(o.locked=!0,"object"==typeof e)for(var t in e)a[t]=e[t];else a[e]=r;for(var n=0,u=o.importers.length;u>n;n++){var i=o.importers[n];if(!i.locked)for(var l=0;l<i.dependencies.length;++l)i.dependencies[l]===o&&i.setters[l](a)}return o.locked=!1,r},r.name);o.setters=u.setters,o.execute=u.execute;for(var s=0,d=r.normalizedDeps.length;d>s;s++){var f,c=r.normalizedDeps[s],v=l[c],m=p[c];m?f=m.exports:v&&!v.declarative?f=v.esModule:v?(n(v),m=v.module,f=m.exports):f=i(c),m&&m.importers?(m.importers.push(o),o.dependencies.push(m)):o.dependencies.push(null),o.setters[s]&&o.setters[s](f)}}}function o(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(d)for(var n in r)"default"!==n&&a(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t.default=r,c(t,"__useDefault",{value:!0}),t}function a(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&c(e,t,n)}catch(o){return e[t]=r[t],!1}}function u(r,t){var n=l[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var d=n.normalizedDeps[o];-1==s.call(t,d)&&(l[d]?u(d,t):i(d))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function i(e){if(m[e])return m[e];if("@node/"==e.substr(0,6))return m[e]=o(v(e.substr(6)));var r=l[e];if(!r)throw"Module "+e+" not present.";return n(l[e]),u(e,[]),l[e]=void 0,r.declarative&&c(r.module.exports,"__esModule",{value:!0}),m[e]=r.declarative?r.module.exports:r.esModule}var l={},s=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},d=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(f){d=!1}var c;!function(){try{Object.defineProperty({},"a",{})&&(c=Object.defineProperty)}catch(e){c=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var p={},v="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,m={"@empty":{}};return function(e,t,n,a){return function(u){u(function(u){for(var l=0;l<t.length;l++)(function(e,r){r&&r.__esModule?m[e]=r:m[e]=o(r)})(t[l],arguments[l]);a({register:r});var s=i(e[0]);if(e.length>1)for(var l=1;l<e.length;l++)i(e[l]);return n?s.default:s})}}}("undefined"!=typeof self?self:global)(["1"],["9","8","6","a","7","b"],!1,function($__System){this.require,this.exports,this.module;$__System.register("2",[],function(_export,_context){"use strict";var SystemBuildConfig;return{setters:[],execute:function(){_export("SystemBuildConfig",SystemBuildConfig={defaultJSExtensions:!0,transpiler:"plugin-babel",babelOptions:{presets:["babel-preset-es2017"],plugins:["babel-plugin-transform-decorators-legacy"]},map:{"systemjs-babel-build":"npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js"}}),window.SystemJS.config(SystemBuildConfig),_export("SystemBuildConfig",SystemBuildConfig)}}}),$__System.register("3",[],function(_export,_context){"use strict";return{setters:[],execute:function(){_export("default",function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")})}}}),$__System.register("4",[],function(_export,_context){"use strict";return{setters:[],execute:function(){_export("default",function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}())}}}),$__System.register("5",["3","4"],function(_export,_context){"use strict";function make$Inject(args){var _this=this;this.constructor.$inject.map(function(item,index){_this[item]=args[index]})}var _classCallCheck,_createClass,CtrlBase;return{setters:[function(_){_classCallCheck=_.default},function(_2){_createClass=_2.default}],execute:function(){_export("default",CtrlBase=function(){function CtrlBase(){_classCallCheck(this,CtrlBase);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];this.constructor.init.call(this,args)}return _createClass(CtrlBase,[{key:"$onDestroy",value:function(){this.hasOwnProperty("onDestroy")&&"function"==typeof this.onDestroy&&onDestroy()}}],[{key:"init",value:function(args){make$Inject.call(this,args)}}]),CtrlBase}()),_export("default",CtrlBase)}}}),$__System.register("1",["2","6","7","8","9","a","b","5"],function(_export,_context){"use strict";var SystemBuildConfig,angular,uiRouter,angularSanitize,angularAnimate,toaster,ngStrap,CtrlBase,CoreModule;return{setters:[function(_){SystemBuildConfig=_.SystemBuildConfig},function(_2){angular=_2.default},function(_3){uiRouter=_3.default},function(_4){angularSanitize=_4.default},function(_5){angularAnimate=_5.default},function(_a){toaster=_a.default},function(_b){ngStrap=_b.default},function(_6){CtrlBase=_6.default}],execute:function(){_export("CoreModule",CoreModule=angular.module("mstanev.angular.core",["ui.router","ngSanitize","ngAnimate","toaster","ngAnimate","mgcrea.ngStrap"]).name),_export("CoreModule",CoreModule),_export("angular",angular),_export("uiRouter",uiRouter),_export("angularSanitize",angularSanitize),_export("angularAnimate",angularAnimate),_export("toaster",toaster),_export("ngStrap",ngStrap),_export("CtrlBase",CtrlBase),_export("SystemBuildConfig",SystemBuildConfig)}}})})(function(factory){if("function"==typeof define&&define.amd)define(["angular/bower-angular-animate","angular/bower-angular-sanitize","angular/bower-angular","jirikavi/AngularJS-Toaster","angular-ui-router","angular-strap"],factory);else{if("object"!=typeof module||!module.exports||"function"!=typeof require)throw new Error("Module must be loaded as AMD or CommonJS");module.exports=factory(require("angular/bower-angular-animate"),require("angular/bower-angular-sanitize"),require("angular/bower-angular"),require("jirikavi/AngularJS-Toaster"),require("angular-ui-router"),require("angular-strap"))}});
//# sourceMappingURL=angular.1.x.x.core.js.map