'use strict';
(function(){

class DetailComponent {
  constructor($http, $routeParams) {
    this.$http = $http;
    this.$routeParams = $routeParams;
    this.job = {};
  }

  $onInit(){
    this.$http.get('/api/jobs/' + this.$routeParams.id).then(response => {
      this.job = response.data;
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
