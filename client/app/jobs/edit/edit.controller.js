'use strict';
(function(){

class EditComponent {
  constructor($http, Auth, $location, $routeParams) {
    this.$http = $http;
    this.Auth = Auth;
    this.$location = $location;
    this.job = {};
    this.errors = {};
    this.$routeParams = $routeParams;
  }

  $onInit(){
    this.$http.get('/api/jobs/' + this.$routeParams.id).then(response => {
      this.job = response.data;
    });
  }

  editJob(form) {
    this.submitted = true;

    if (form.$valid) {
      this.$http.put('/api/jobs/' + this.job._id, this.job)
      .then(() => {
        // Job created, redirect to jobs
        this.$location.path('/jobs/' + this.job._id);
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
  .component('edit', {
    templateUrl: 'app/jobs/edit/edit.html',
    controller: EditComponent,
    controllerAs: 'vm'
  });

})();
