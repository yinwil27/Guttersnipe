(function (angular, app) {
    'use strict';

    app.controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log("in the home controller");
        $scope.center = {
            lat: 40.095,
            lng: -3.823,
            zoom: 4
        };
        $scope.amsterdam = {
            lat: 52.35,
            lng: 4.91,
            zoom: 12
        };

        $scope.legend = {
            position: 'bottomleft',
            colors: [ '#ff0000', '#28c9ff', '#0000ff', '#ecf386' ],
            labels: [ 'National Cycle Route', 'Regional Cycle Route', 'Local Cycle Network', 'Cycleway' ]
        };
        $scope.defaults = {
            tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
            tileLayerOptions: {
                opacity: 0.9,
                detectRetina: true,
                reuseTiles: true
            },
            scrollWheelZoom: false
        };
        $scope.osloCenter = {
            lat: 59.91,
            lng: 10.75,
            zoom: 12
        };
        $scope.markers = {
            osloMarker: {
                lat: 59.91,
                lng: 10.75,
                message: "I want to travel here!",
                focus: true,
                draggable: false
            }
        };
        $scope.london = {
            lat: 51.505,
            lng: -0.09,
            zoom: 8
        };
        $scope.foo = "mew";
    }]);
})(window.angular, window.guttersnipe);

