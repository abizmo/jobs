'use strict';
(function(){

class NewComponent {
  constructor($http, Auth, $location) {
    this.$http = $http;
    this.Auth = Auth;
    this.$location = $location;
    this.job = {};
    this.errors = {};
  }

  addJob(form) {
    this.submitted = true;

    if (form.$valid) {
      this.$http.post('/api/jobs', this.job)
      .then(() => {
        // Job created, redirect to jobs
        this.$location.path('/jobs');
      })
      .catch(err => {
        err = err.data;
        this.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, (error, field) => {
          form[field].$setValidity('mongoose', false);
          this.errors[field] = error.message;
        });
      });
    }
  }
}

angular.module('jobsApp')
  .component('new', {
    templateUrl: 'app/jobs/new/new.html',
    controller: NewComponent,
    controllerAs: 'vm'
  });

})();
