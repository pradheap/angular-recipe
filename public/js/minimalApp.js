'use strict';

// Declare app level module which depends on filters, and services

var minimalApp = angular.module("minimalApp", []);

minimalApp.config(function ($routeProvider) {
  console.log($routeProvider);
  $routeProvider.
    when('/', {
      templateUrl: 'js/views/index.html',
      controller: 'coursesController'
    }).
    otherwise({
      redirectTo: '/'
    });
});
