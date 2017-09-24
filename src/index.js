import {default as angular} from 'angular';
import {default as uiRouter} from 'angular-ui-router';
import {default as angularSanitize} from 'angular-sanitize';
import {default as angularAnimate} from 'angular-animate';
import {default as toaster} from 'jirikavi/AngularJS-Toaster';
import {default as ngStrap}  from 'angular-strap';

export { CtrlBase } from './lib/CtrlBase.js';

const CoreModule = angular.module('mstanev.angular.core', [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
  'toaster',
  'ngAnimate',
  'mgcrea.ngStrap'
]).name;

export {
  CoreModule,
  angular,
  uiRouter,
  angularSanitize,
  angularAnimate,
  toaster,
  ngStrap
}
