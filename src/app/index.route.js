(function() {
    'use strict';

    angular
        .module('samplePractice')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                views: {
                    header: {
                        template: '<acme-navbar creation-date="main.creationDate"></acme-navbar>'
                    },
                    signup: {
                        template: '<registration-directive></registration-directive>'
                    }
                }
            })
            .state('login', {
                url: '/login',
                template: '<login-directive></login-directive>'
            });

        $urlRouterProvider.otherwise('/main');
    }

})();
