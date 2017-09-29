export {default as angular} from 'angular/bower-angular';
export { default as uiRouter } from 'angular-ui-router';
export { default as angularSanitize } from 'angular/bower-angular-sanitize';
export { default as angularAnimate } from 'angular/bower-angular-animate';
export { default as toaster } from 'jirikavi/AngularJS-Toaster';
export { default as ngStrap }  from 'angular-strap';
export {default as CtrlBase} from './lib/CtrlBase.js';
export const CoreModule = angular.module('mstanev.angular.core', [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
  'toaster',
  'ngAnimate',
  'mgcrea.ngStrap'
]).name;
