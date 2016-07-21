(function() {
  'use strict';

  angular
    .module('samplePractice')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
