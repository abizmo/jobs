'use strict';

angular.module('jobsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<main></main>'
      });
  });
