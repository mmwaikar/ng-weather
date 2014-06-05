'use strict';

var app = angular.module('weatherappApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/weather', {
      templateUrl: 'views/weather.html',
      controller: 'WeatherCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
