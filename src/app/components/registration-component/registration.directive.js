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
            scope: false,          
            controller: registrationController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, vm) {
            //scope.name = 'sudhamsh';
        }
        /** @ngInject */
        function registrationController($scope) {
              var vm = this;            
                       
              vm.lastname  = 'Ram';

              $scope.click = function(){
                console.log(vm.lastname);
              }

        }
    }

})();
