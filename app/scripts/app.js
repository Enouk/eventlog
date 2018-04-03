'use strict';

angular
  .module('eventsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'gridshore.c3js.chart'
  ])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/samples', {
        templateUrl: 'views/samples.html',
        controller: 'SamplesCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/image', {
        templateUrl: 'views/image.html',
        controller: 'ImageCtrl'
      })
      .when('/overview', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
