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
    'ngTouch',
    'userApp'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        public:false
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        login:false
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.run(function(user) {
    user.init({ appId: '120' });
});