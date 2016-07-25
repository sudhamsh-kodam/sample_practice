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
        function registrationController($scope, $http) {
            var vm = this;

            vm.user = {
                firstname: '',
                lastname: '',
                username: '',
                userEmail: '',
                userPassword: ''
            }

            var get = $http.get('http://localhost:3003/userdata/1');
            console.log(get,'xxxxx');

            $scope.save = function() {
                $http.post('http://localhost:3003/userdata', JSON.stringify(vm.user)).then(function(data) {
                    $scope.msg = 'Data saved';
                    console.log($scope.msg);
                });
            }

        }
    }

})();
