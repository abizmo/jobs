'use strict';
(function(){

class MainComponent {
  constructor() {
  }
}

angular.module('jobsApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainComponent
  });

})();
