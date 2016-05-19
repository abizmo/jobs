'use strict';

angular.module('jobsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/jobs', {
        template: '<jobs></jobs>'
      })
      .when('/jobs/new',{
        template: '<new></new>'
      })
      .when('/jobs/:id', {
        template: '<detail></detail>'
      });
  });
