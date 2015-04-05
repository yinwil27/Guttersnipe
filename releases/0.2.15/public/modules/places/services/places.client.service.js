(function (angular, _) {
  'use strict';

  angular.module('places').factory('Places',
    ['Geolocator',
      function(Geolocator) {
        var placeFactory,
          emptyPlace,
          prospectPark,
          defaultZoom = 14 ;
        prospectPark = {
          coordinates: {
            lat: '40.660204',
            lng: '-73.968956'},
          address: 'Prospect Park Brooklyn, NY 11225'
        };
        emptyPlace = {
          coordinates: {
            lat: '',
            lng: ''},
          name: '',
          address: '',
          notes: ''
        };

        function Place(coordinates, address, name, notes) {
          var self = this;
          if (!coordinates || !coordinates.lat
            || coordinates.lng || !address ) {
            console.error('Error: Coordinates or address are undefined. Coords', coordinates, ' address ', address);
          }
          self.coordinates = coordinates;
          self.address = address;
          self.name = name;
          self.notes = notes;
        }


        Place.prototype = Object.create(Object.prototype, {
        });





        placeFactory = Object.create(Object.prototype, {
          locateAddress : {
            enumerable: true,
            value: function locateAddress(inputAddress, map) {
              Geolocator.geocoder.geocode( { "address": inputAddress },
                function(results, status) {
                     if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                           var location = results[0].geometry.location;
                           $scope.myMap.panTo(location);
                       }
                 });
            }
          },

          defaultZoom: {
            enumerable: true,
            get: function getDefaultZoom() {
              return defaultZoom;
            }
          },
          prospectPark : {
            enumerable: true,
            get: function getProspectPark() {
              return prospectPark;
            }
          },
          emptyPlace: {
            enumerable: true,
            get: function getEmptyPlace() {
              return _.cloneDeep(emptyPlace);
            }
          }
        });

        return placeFactory;
      }]);
})(window.angular, window._);