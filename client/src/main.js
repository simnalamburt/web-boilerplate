require('angular');
require('angular-route');

require('./main.css');

angular.module('appname', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'src/main.html',
  });
})
