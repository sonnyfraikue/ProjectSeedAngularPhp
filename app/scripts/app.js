'use strict';

/**
 * @ngdoc overview
 * @name projectSeedAngularPhpApp
 * @description
 * # projectSeedAngularPhpApp
 *
 * Main module of the application.
 */
angular
  .module('projectSeedAngularPhpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
