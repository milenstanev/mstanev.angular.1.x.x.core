export {default as angular} from 'angular';
export {default as uiRouter} from 'angular-ui-router';
export {default as angularSanitize} from 'angular-sanitize';
export {default as angularAnimate} from 'angular-animate';
export {default as ngAnimate} from 'jirikavi/AngularJS-Toaster';
export {default as ngStrap}  from 'angular-strap';

export const CoreModule = angular.module('mstanev.angular.core', [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
  'toaster',
  'ngAnimate',
  'mgcrea.ngStrap'
]).name;