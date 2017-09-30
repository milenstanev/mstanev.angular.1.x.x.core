import {
  HomeComponent
} from './home.component.js';

export const appHome = angular
  .module('app.home', [])
  .config(($stateProvider, $urlRouterProvider) => {
    const defaultView = '/home';

    $stateProvider
      .state('home', {
        url: '/home',
        component: 'appHome',
        resolve: {
          title: () => 'Home Page Title',
          user: () => {
            return {
              name: 'User name'
            };
          }
        }
      });
  })
  .component('appHome', HomeComponent)
  .name;
