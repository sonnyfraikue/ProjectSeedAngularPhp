'use strict';

/**
 * @ngdoc function
 * @name projectSeedAngularPhpApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the projectSeedAngularPhpApp
 */
angular.module('projectSeedAngularPhpApp')
  .controller('LoginCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService, $http) {

    function createUnknownError(status) {
      return {
        status: status,
        statusText: 'Internal Server Error',
        description: 'No details available'
      };
    }

    $scope.awesomeThings = [];
    $scope.loading = true;
    $scope.credentials  = {
      username:'',
      password:''
    };

    $scope.login =  function(credentials){
      //AuthService.login(credentials).then(function)
    };

    
  });
