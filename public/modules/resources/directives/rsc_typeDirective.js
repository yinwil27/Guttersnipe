(function (angular, app) {
  'use strict';

  app.directive('resourceType', ['filePaths', function(filePaths) {
      var templateUrl = filePaths.resources_create_wizard + 'rsc_TypeWidget.html';

      return {
        restrict: 'E',
        templateUrl: templateUrl,
      }
    }]
  );
})(window.angular, window.guttersnipe);


