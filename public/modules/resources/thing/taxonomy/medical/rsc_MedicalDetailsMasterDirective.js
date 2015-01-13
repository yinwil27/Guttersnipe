(function (angular, app) {
  'use strict';

  app.directive('medicalDetailsMaster', ['filePaths', function(filePaths) {
      var templateUrl = filePaths.resources_dir + "thing/taxonomy/medical/rsc_MedicalDetailsMasterTemplate.html";

      return {
        restrict: 'E',
        templateUrl: templateUrl
      }
    }]
  );
})(window.angular, window.guttersnipe);


