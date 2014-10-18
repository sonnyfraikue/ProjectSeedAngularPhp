'use strict';

/**
 * @ngdoc function
 * @name projectSeedAngularPhpApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the projectSeedAngularPhpApp
 */
angular.module('projectSeedAngularPhpApp')
  .controller('LoginCtrl', function ($scope, $http) {

    function createUnknownError(status) {
      return {
        status: status,
        statusText: 'Internal Server Error',
        description: 'No details available'
      };
    }
    function login(credentials){
      console.log(credentials);
    }

    $scope.awesomeThings = [];
    $scope.loading = true;
    $scope.testVar  = 'sonnyboy hello';

    // Get awesome things list
    $http({method: 'GET', url: '/api/features'}).

      success(function (data) {
        $scope.loading = false;
        $scope.awesomeThings = data;

        // Get description of each thing
        $scope.awesomeThings.forEach(function (thing) {
          thing.loading = true;

          $http({method: 'GET', url: thing.href}).
            success(function (data) {
              thing.loading = false;
              thing.description = data.description;
            }).
            error(function (data, status) {
              thing.loading = false;
              thing.error = data && data.description ? data : createUnknownError(status);
            });
        });
      }).

      error(function (data, status) {
        $scope.loading = false;
        $scope.error = data && data.description ? data : createUnknownError(status);
      });
  });
