'use strict';

angular.module('myApp.cats', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cats', {
    templateUrl: 'view1/view1.html',
    controller: 'catsCtrl'
  });
}])

.controller('catsCtrl', [function() {

}]);