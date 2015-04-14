
(function () {
    'use strict';

    function resourcesService ($q, Api, Places, Times, Things) {
        var resources = [],
            resourcesService  = {
                getOneResource: getOneResource,
                getAllResources: getAllResources,
                getEmptyResource : getEmptyResource,
                deleteResource: deleteResource,
                createResource: createResource,
                updateResource: updateResource
            };

        function deleteResource(resource) {

        }
        function createResource(resource) {

            Times.transformBeforeCreate(resource.time);
            return Api.resources.post(resource)
                .then(function afterCreateResourceResolved(data){
                    console.log( "resource created successfully. Data is ", data);
                    return data;

                }, function(err){
                    console.log('error in resources.getAllResources', err);
                }
            )
                .catch(function(err){
                    console.log('error in resources.getAllResources', err);
                })
        }

        function updateResource(resource) {

        }



        function getAllResources() {
            return Api.resources.getAll()
                .then(function(data){
                    console.log( "data is ", data);
                    resources = data;
                    return data;
                })
                .catch(function(err){
                    console.log('error in resources.getAllResources', err);
                })
        }

        function getOneResource(resourceId) {
          var rsc = _.find(resources, {_id: resourceId});
          if (rsc) {
            var deferred = $q.defer();
            deferred.resolve(rsc);
            return deferred.promise;
          }
          else {
            return Api.resources.getOne(resourceId)
              .then(function (data) {
                console.log("data is ", data);
                return data;
              })
              .catch(function (err) {
                console.log('error in resources.getAllResources', err);
              })
          }


      /*
        var rsc = _.find(resources, {id: resourceId});
        if (!rsc) {
        }
        return rsc;
        */
        }

        function getEmptyResource() {
            var ret = {};
            ret.thing = Things.emptyThing();
            ret.place = Places.emptyPlace();
            ret.time = Times.emptyTime();
            return ret;
        }

        return resourcesService;
    }

    angular.module('resources').factory('Resources',
        ['$q', 'Api', 'Places', 'Times', 'Things', resourcesService]);

})();


