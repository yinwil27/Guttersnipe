
(function (angular, app) {
  'use strict';

  app.directive('appointment', ['filePaths', function(filePaths) {
      var templateUrl = filePaths.resources_dir + "time/appointment/tim_AppointmentTemplate.html";

      return {
        restrict: 'E',
        templateUrl: templateUrl,
        scope : {
          scheduleType: '='
        }
      }
    }]
  );
})(window.angular, window.guttersnipe);

