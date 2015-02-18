(function (angular, app) {
  'use strict';

  app.directive('resourceCreateInstructions', ['filePaths', function(filePaths) {
    var linker = function(scope, element, attrs) {},
      controller = function($scope){},
      templateUrl = filePaths.resources_dir + 'instructions/' + filePaths.templates_subdir + 'rsc_InstructionsTemplate.html';

    return {
      link: linker,
      restrict: 'E',
      templateUrl: templateUrl,
      controller: controller
    };
  }]
  );
})(window.angular, window.guttersnipe);