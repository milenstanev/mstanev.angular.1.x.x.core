import { SystemBuildConfig } from './lib/SystemBuildConfig.js';

//region AngularJS + core modules about current application
import { default as angular } from 'angular/bower-angular';
import { default as uiRouter } from 'angular-ui-router';
import { default as angularSanitize } from 'angular/bower-angular-sanitize';
import { default as angularAnimate } from 'angular/bower-angular-animate';
//endregion

//region Helpers
import { default as CtrlBase } from './lib/CtrlBase.js';
//endregion

const CoreModule = angular.module('mstanev.angular.core', [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
]).name;

export {
  CoreModule,
  angular,
  uiRouter,
  angularSanitize,
  angularAnimate,
  CtrlBase,
  SystemBuildConfig
};
