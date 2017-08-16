import angular from 'angular';
import 'angular-ui-router';
import 'angular-sanitize';
import 'angular-animate';
import 'jirikavi/AngularJS-Toaster';

export default angular.module('mstanev.angular.core', [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
  'toaster'
]);