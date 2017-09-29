import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-sanitize';
import 'angular-animate';
import 'jirikavi/AngularJS-Toaster';
import 'angular-strap';


export {default as angular} from 'angular';
export {default as CtrlBase} from './lib/CtrlBase.js';
export const CoreModule = angular.module('mstanev.angular.core', [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
  'toaster',
  'ngAnimate',
  'mgcrea.ngStrap'
]).name;
