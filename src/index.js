export { default as SystemBuildConfig } from './lib/SystemBuildConfig.js';

//region AngularJS + core modules about current application
export { default as angular } from 'angular/bower-angular';
export { default as uiRouter } from 'angular-ui-router';
export { default as angularSanitize } from 'angular/bower-angular-sanitize';
export { default as angularAnimate } from 'angular/bower-angular-animate';
export { default as toaster } from 'jirikavi/AngularJS-Toaster';
//export { default as ngStrap }  from 'angular-strap';
//endregion

//region Helpers
export { default as CtrlBase } from './lib/CtrlBase.js';
//endregion

export const CoreModule = angular.module('mstanev.angular.core', [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
  'toaster'
  //, 'mgcrea.ngStrap'
]).name;
