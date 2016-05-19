'use strict';
(function(){

class JobsComponent {
  constructor($http) {
    this.jobs = [];
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/jobs').then(response => {
      this.jobs = response.data;
    });
  }
}

angular.module('jobsApp')
  .component('jobs', {
    templateUrl: 'app/jobs/jobs.html',
    controller: JobsComponent,
    controllerAs: 'vm'
  });

})();
