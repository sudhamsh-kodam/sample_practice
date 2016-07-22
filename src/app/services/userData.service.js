(function() {
    'use strict';
    angular
        .module('samplePractice')
        .factory('userData', ['$resource', '$q', 'url', function($resource, $q, url) {

            var getRes = $resource('apiUrl');
            var postRes = $resource('apiUrl/userData', null);

            function getData() {

            };

            function postData(obj) {
                var defer1 = $q.defer();
                postRes.save({}, obj, function(response) {
                    defer1.resolve(response);
                }, function(error) {
                    defer1.reject(error);
                });

                return defer1.promise;
            }

            function getData() {
                var defer = $q.defer();
                getRes.get('', {}, function(response) {
                    defer.resolve(response);
                }, function(error) {
                    defer.reject(error);
                });

                return defer.promise;
            }
            
            return {getData:getData,postData:postData};

        }]);
})
