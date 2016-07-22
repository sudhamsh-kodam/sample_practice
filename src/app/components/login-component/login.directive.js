(function() {
  'use strict';

  angular
    .module('samplePractice')
    .directive('loginDirective', loginDirective);

  /** @ngInject */
  function loginDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/login-component/login.directive.html',
      scope: {
         // creationDate: '='
      },
      controller: loginController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function loginController() {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      //vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
