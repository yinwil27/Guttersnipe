(function (angular, app) {
  'use strict';

  app.directive('foodDetailsInput', ['filePaths', function(filePaths) {
      var template =
        '    <div class="text-center">' +
        '      <ng-form>' +
        '        <h1>Food Details:</h1>' +
        '        <hr>' +
        '' +
        '          <h2>Distribution Type</h2>' +
        '          <div class=row ng-repeat="letter in resourceTaxonomy.taxonomy.top[0].eating_arrangement.selections track by $index" ng-if="$index%3==0">' +
        '            <div class="col-xs-3 letter-box panel"' +
        '            ng-repeat="i in [$index,$index+1,$index+2]"' +
        '            ng-if="resourceTaxonomy.taxonomy.top[0].eating_arrangement.selections[i]!=null">' +
        '              <resource-taxon name="{{resourceTaxonomy.taxonomy.top[0].eating_arrangement.selections[i].name}}" ng-click="toggleDetail(\'eating_arrangement\', resourceTaxonomy.taxonomy.top[0].eating_arrangement.selections[i].name)"></resource-taxon>' +
      '            </div>' +
      '          </div>' +
      '' +
      '' +
      '          <h2>Grain</h2>' +
      '          <div class=row ng-repeat="letter in resourceTaxonomy.taxonomy.top[0].grains.selections track by $index" ng-if="$index%3==0">' +
      '            <div class="col-xs-3 letter-box panel"' +
      '            ng-repeat="i in [$index,$index+1,$index+2]"' +
      '            ng-if="resourceTaxonomy.taxonomy.top[0].grains.selections[i]!=null">' +
      '              <resource-taxon name="{{resourceTaxonomy.taxonomy.top[0].grains.selections[i].name}}" ng-click="toggleDetail(\'grains\', resourceTaxonomy.taxonomy.top[0].grains.selections[i].name)"></resource-taxon>' +
      '            </div>' +
      '          </div>' +
      '' +
      '' +
      '          <h2>Produce</h2>' +
      '          <div class=row ng-repeat="letter in resourceTaxonomy.taxonomy.top[0].produce.selections track by $index" ng-if="$index%3==0">' +
      '            <div class="col-xs-3 letter-box panel"' +
      '            ng-repeat="i in [$index,$index+1,$index+2]"' +
      '            ng-if="resourceTaxonomy.taxonomy.top[0].produce.selections[i]!=null">' +
      '              <resource-taxon name="{{resourceTaxonomy.taxonomy.top[0].produce.selections[i].name}}" ng-click="toggleDetail(\'produce\', resourceTaxonomy.taxonomy.top[0].produce.selections[i].name)"></resource-taxon>' +
      '            </div>' +
      '          </div>' +
      '' +
      '          <h2>Protein</h2>' +
      '          <div class="row" ng-repeat="letter in resourceTaxonomy.taxonomy.top[0].protein.selections track by $index" ng-if="$index%3==0">' +
      '            <div class="col-xs-3 letter-box panel"' +
      '            ng-repeat="i in [$index,$index+1,$index+2]"' +
      '            ng-if="resourceTaxonomy.taxonomy.top[0].protein.selections[i]!=null">' +
      '              <resource-taxon name="{{resourceTaxonomy.taxonomy.top[0].protein.selections[i].name}}" ng-click="toggleDetail(\'protein\', resourceTaxonomy.taxonomy.top[0].protein.selections[i].name)"></resource-taxon>' +
      '            </div>' +
      '          </div>' +
      '' +
      '          <h2>Dairy</h2>' +
      '          <div class=row ng-repeat="letter in resourceTaxonomy.taxonomy.top[0].dairy.selections track by $index" ng-if="$index%3==0">' +
      '            <div class="col-xs-3 letter-box panel"' +
      '            ng-repeat="i in [$index,$index+1,$index+2]"' +
      '            ng-if="resourceTaxonomy.taxonomy.top[0].dairy.selections[i]!=null">' +
      '              <resource-taxon name="{{resourceTaxonomy.taxonomy.top[0].dairy.selections[i].name}}" ng-click="toggleDetail(\'dairy\', resourceTaxonomy.taxonomy.top[0].dairy.selections[i].name)"></resource-taxon>' +
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


