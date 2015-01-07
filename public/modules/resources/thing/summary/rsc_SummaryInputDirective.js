(function (angular, app) {
  'use strict';

  app.directive('resourceSummaryInput', ['filePaths', function(filePaths) {
      var template =
        '        <div>' +
        '          <ng-form role="form" name="summaryForm" novalidate>' +
        '            <div class="form-group">' +
        '              <label for="headline">Headline</label>' +
        '              <input id="headline" ng-model="headline" type="text" class="form-control"  placeholder="Short explanation" ng-maxlength="128" ng-required="true">' +
        '              </div>' +
        '              <div class="form-group">' +
        '                <label for="description">Description</label>' +
        '                <textarea rows="5" ng-model="description" id="description" type="text" class="form-control" placeholder="Describe Resource" ng-maxlength="5000" ng-required="true"></textarea>' +
        '              </div>' +
        '              <button type="button" class="btn btn-default" ng-disabled="!(headline) || !(description)" ng-click="isSummarySet=true">OK</button>' +
        '            </ng-form>' +
        '          </div>';


      return {
        restrict: 'E',
        template: template
      }
    }]
  );
})(window.angular, window.guttersnipe);


