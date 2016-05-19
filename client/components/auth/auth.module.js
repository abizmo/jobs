'use strict';

angular.module('jobsApp.auth', [
  'jobsApp.constants',
  'jobsApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
