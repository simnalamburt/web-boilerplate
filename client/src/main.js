require('angular');
require('angular-route');

require('./main.css');

angular.module('appname', ['ngRoute'])

.config(function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: 'src/main.html',
  });
})
