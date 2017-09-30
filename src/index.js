import 'plugin-babel';
import 'babel-preset-es2017';
import 'babel-plugin-transform-decorators-legacy';
import SystemBuildConfig from './lib/SystemBuildConfig.js';

//region AngularJS + core modules about current application
import { default as angular } from 'angular/bower-angular';
import { default as uiRouter } from 'angular-ui-router';
import { default as angularSanitize } from 'angular/bower-angular-sanitize';
import { default as angularAnimate } from 'angular/bower-angular-animate';
import { default as toaster } from 'jirikavi/AngularJS-Toaster';
import { default as ngStrap }  from 'angular-strap';
//endregion

//region Helpers
import { default as CtrlBase } from './lib/CtrlBase.js';
//endregion

const CoreModule = angular.module('mstanev.angular.core', [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
  'toaster',
  'ngAnimate',
  'mgcrea.ngStrap'
]).name;


class Test {
  static $inject = () => [$http];
}

class Asd extends Test {}

export {
  CoreModule,
  angular,
  uiRouter,
  angularSanitize,
  angularAnimate,
  toaster,
  ngStrap,
  CtrlBase,
  SystemBuildConfig
}
