(function (angular, app) {
  'use strict';

  app.directive('resourceType', ['filePaths', function(filePaths) {
      var template =
        '    <div ng-if="!isTaxonomySet">' +
        '      <resource-type-input></resource-type-input>' +
        '    </div>' +
        '    <div ng-if="isTaxonomySet">' +
        '      <resource-type-confirmed></resource-type-confirmed>' +
        '{{type}}' +
        '      <div ng-switch on="type">' +
        '        <food-details-master ng-switch-when="food"></food-details-master>' +
        '        <medical-details-master ng-switch-when="medical"></medical-details-master>' +
        '        <housing-details-master ng-switch-when="housing"></housing-details-master>' +
        '      </div>' +
        '    </div>';

      return {
        restrict: 'E',
        template: template
      }
    }]
  );
})(window.angular, window.guttersnipe);


