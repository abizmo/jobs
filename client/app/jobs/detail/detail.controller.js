'use strict';
(function(){

class DetailComponent {
  constructor($http, $routeParams, $location) {
    this.$http = $http;
    this.$routeParams = $routeParams;
    this.job = {};
    this.$location = $location;
  }

  $onInit(){
    this.$http.get('/api/jobs/' + this.$routeParams.id).then(response => {
      this.job = response.data;
    });
  }

  deleteJob() {
    this.$http.delete('/api/jobs/' + this.$routeParams.id).then(() => {
      this.$location.path('/jobs');
    });
  }

}

angular.module('jobsApp')
  .component('detail', {
    templateUrl: 'app/jobs/detail/detail.html',
    controller: DetailComponent,
    controllerAs: 'vm'
  });

})();
