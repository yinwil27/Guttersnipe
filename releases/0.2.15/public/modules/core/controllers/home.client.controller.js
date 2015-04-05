(function (angular, _) {
  'use strict';


  angular.module('core').controller('HomeController', ['$scope', 'Authentication',
    function($scope, Authentication) {
      // This provides Authentication context.
      $scope.authentication = Authentication;
    }
  ]);
})(window.angular, window._);