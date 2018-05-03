'use strict';

angular.module('myApp.dogs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dogs', {
    templateUrl: 'view2/view2.html',
    controller: 'dogsCtrl'
  });
}])

.controller('dogsCtrl', [function() {

}]);