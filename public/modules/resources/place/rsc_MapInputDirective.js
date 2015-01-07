(function (angular, app) {
  'use strict';

  app.directive('mapInput', ['filePaths', function(filePaths) {
    var template =
      '<div>' +
      '        <ng-form>' +
      '   <div>' +
      '      <div>' +
      '              <div class="form-group">' +
      '                <label for="placeDescription">Description</label>' +
      '                <textarea rows="5" ng-model="placeDescription" id="place_description" type="text" class="form-control" placeholder="Describe Location" ng-maxlength="500" ng-required="true"></textarea>' +
      '              </div>' +
      '     </div>' +
      '      <div class="text-center">' +
      '          Address of Resource : <input type="text" ng-model="inputAddress">' +
      '        <button class="btn btn-info" ng-click="locateAddress($event)"> Find Address </button>' +
      '        <leaflet markers="markers" center="center" defaults="defaults" width="640px" height="480px"></leaflet>' +
      '      </div>' +
      '   </div>' +
      '   <button type="button" class="btn btn-default" ng-disabled="!(placeDescription)" ng-click="isLocationSet=true">OK</button>' +
      '        </ng-form>' +
      '</div>';

    return {
      restrict: 'E',
      template: template
    }
  }]);
})(window.angular, window.guttersnipe);
