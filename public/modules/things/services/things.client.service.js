
(function (angular, _) {
  'use strict';

  angular.module('things').factory('Things',
    [
      function() {

        var emptyThing = {
            description: {
              summary: '',
              notes: ''
            },
            taxonomy: {
              type: '',
              subtypes: [],
              details: []
            }
        };


        function getEmptyThing() {
          return _.cloneDeep(emptyThing);
        }

        function Thing(description, taxonomy) {
          var self = this;
          if (!description || !description.summary) {
            console.error('Error:  No thing summary');
          }
          if (!taxonomy || !taxonomy.type) {
            console.error('Error:  No thing type');
        }
          self.description = description;
          self.taxonomy = taxonomy;
        }


        Thing.prototype = Object.create(Object.prototype, {
        });
        return {};
      }]
  );
})(window.angular, window._);

