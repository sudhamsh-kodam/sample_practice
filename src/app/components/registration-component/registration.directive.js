(function() {
  'use strict';

  angular
    .module('samplePractice')
    .directive('registrationDirective', registrationDirective);

  /** @ngInject */
  function registrationDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/registration-component/registration.directive.html',
      scope: {
         // creationDate: '='
      },
      controller: registrationController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function registrationController(moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      //vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
