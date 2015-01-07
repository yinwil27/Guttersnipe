(function (angular, app) {
  'use strict';

  app.directive('medicalDetailsInput', ['filePaths', function(filePaths) {
      var template =
      '    <div class="text-center">' +
      '      <ng-form>' +
      '        <h1>Medical Details:</h1>' +
      '        <hr>' +
      '' +
      '          <h2>Medical Services Available</h2>' +
      '          <div class=row ng-repeat="selection in resourceTaxonomy.taxonomy.top[2].selections track by $index" ng-if="$index%3==0">' +
      '            <div class="col-xs-3 letter-box panel"' +
      '            ng-repeat="i in [$index,$index+1,$index+2]"' +
      '            ng-if="resourceTaxonomy.taxonomy.top[2].selections[i]!=null">' +
      '              <resource-taxon name="{{resourceTaxonomy.taxonomy.top[2].selections[i].name}}" ng-click="toggleDetail(\'\', resourceTaxonomy.taxonomy.top[2].selections[i].name)"></resource-taxon>' +
      '            </div>' +
      '          </div>' +
        '          <button type="button" class="btn btn-default" ng-disabled="false" ng-click="isTaxonomySet=true">OK</button>' +
        '        </ng-form>' +
      '      </div>';

      return {
        restrict: 'E',
        template: template
      }
    }]
  );
})(window.angular, window.guttersnipe);


