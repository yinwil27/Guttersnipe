(function (angular, app) {
  'use strict';

  app.directive('resourceFoodDetailsConfirmed', ['filePaths', function(filePaths) {
      var templateUrl = filePaths.resources_dir + 'thing/taxonomy/food/rsc_FoodDetailsConfirmedWidget.html';

      return {
        restrict: 'E',
        templateUrl: templateUrl
      }
    }]
  );
})(window.angular, window.guttersnipe);


