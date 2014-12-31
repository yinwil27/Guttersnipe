(function (angular, app) {
  'use strict';

  app.directive('resourceType', ['filePaths', function(filePaths) {
      var templateUrl = filePaths.resources_dir + 'thing/taxonomy/common/rsc_TypeWidget.html';

      return {
        restrict: 'E',
        templateUrl: templateUrl,
      }
    }]
  );
})(window.angular, window.guttersnipe);

