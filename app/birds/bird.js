'use strict';

angular.module('myApp.birds', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/birds', {
    templateUrl: 'birds/bird.html',
    controller: 'birdsCtrl'
  });
}])

.controller('birdsCtrl', [function() {

}]);