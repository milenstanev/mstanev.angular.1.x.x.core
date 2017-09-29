import 'angular';
import '@uirouter/angularjs';
import 'angular-sanitize';
import 'angular-animate';
import 'jirikavi/AngularJS-Toaster';
import 'angular-strap';

import { default as CtrlBase } from './lib/CtrlBase.js';
const angular = window.angular;
const CoreModule = angular.module('mstanev.angular.core', [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
  'toaster',
  'ngAnimate',
  'mgcrea.ngStrap'
]).name;

export {
  angular,
  CoreModule,
  CtrlBase
};
