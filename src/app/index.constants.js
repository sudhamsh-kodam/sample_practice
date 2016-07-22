/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('samplePractice')
    .constant('malarkey', malarkey)    
    .constant('url',{
    	apiUrl : 'http://localhost:3000/db'
    });

})();
