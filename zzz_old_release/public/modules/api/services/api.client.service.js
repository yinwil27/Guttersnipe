(function () {
    'use strict';

    function apiService ($log, $http, $q) {
        var  apiFactory = {
            users: {
                getAll: getAllUsers,
                getOne: getOneUser,
                delete: deleteUser,
                put: putUser,
                post: postUser,
                onUpdate: onUpdateUser
            },
            resources: {
                getAll: getAllResources,
                getOne: getOneResource,
                delete: deleteResource,
                put: putResource,
                post: postResource,
                onUpdate: onUpdateResource
            },
            kropotkins: {
                getRandom: getRandomKropotkin
            }
        };

        /* Aliases */
        Object.defineProperties(apiFactory.users, {
            createUser: postUser,
            updateUser: putUser
        });

        Object.defineProperties(apiFactory.resources, {
            createResource: postResource,
            updateResource: putResource
        });


        /*  URIs for API calls */
        var apiUri = URI(''),
            apiResource = function apiResource() {
                return apiUri.clone();
            },

            resourcesUri = apiResource().segment('resources'),
            resourcesResource = function resourcesResource() {
                return resourcesUri.clone();
            },
            kropotkinsUri = apiResource().segment('kropotkins'),
            kropotkinsResource = function kropotkinsResource() {
                return kropotkinsUri.clone();
            },
            usersUri = apiResource().segment('users'),
            usersResource = function usersResource() {
                return usersUri.clone();
            },

            /**
             *  The following keys are used to repopulate the
             *    client-side services/factories after an event
             *    that changes the data available on the server
             */

            afterLoginEventKey = '$api.afterLogin',
            afterLogoutEventKey = '$api.afterLogout',

            afterUserCreateEventKey = '$api.afterUserCreate',
            afterUserUpdateEventKey = '$api.afterUserUpdate',
            afterResourceUpdateEventKey = '$api.afterResourceUpdate',
            afterResourceCreateEventKey = '$api.afterResourceCreate',


        /* REST Aliases */
            GET = 'GET',
            DELETE = 'DELETE',
            POST = 'POST',
            PUT = 'PUT';


        /* resources */
        function getAllResources() {
            $log.debug('api.resource.getAll');

            var request = {
                withCredentials: false,
                method: GET,
                url: resourcesResource().toString()
            };

            return $http(request)
                .then(function getResourcesAllSuccess(response) {
                    $log.info('api.resources.getAll success ', response.data);
                    return response.data;
                })
                .catch(function getResourcesAllError(error) {
                    $log.error('api.resources.getAll failure', error);
                    return error;
                });
        }

        function getOneResource(resourceId) {
          $log.debug('api.resource.getOne');

          var request = {
            withCredentials: false,
            method: GET,
            url: resourcesResource().segment(resourceId).toString()
          };

          $log.debug('api.resource.request', request);

          return $http(request)
            .then(function getResourcesOneSuccess(response) {
              $log.info('api.resources.getOne success ', response.data);
              return response.data;
            })
            .catch(function getResourcesOneError(error) {
              $log.error('api.resources.getOne failure', error);
              return error;
            });
        }

        function deleteResource(resource) {
            $log.debug('api.resources.delete');

            var request = {
                withCredentials: true,
                method: DELETE,
                url: resourcesResource().toString()
            };

            $log.debug('api.resources.delete request', request);

            return $http(request)
                .then(function deleteResourceSuccess(response) {
                    $log.debug('api.resources.delete success', response.data);
                    return response.data;
                },
                function deleteResourceError(response) {
                    $log.error('api.categories.resources.delete failure', response.status, response.data);
                    return response.data;
                });
        }


        function postResource(resourceData) {
            $log.debug('api.resource.post');

            console.log('resource data is ', resourceData);
            var request = {
                withCredentials: true,
                method: POST,
                url: resourcesResource().toString() ,
                data: {resource: resourceData}
            };

            $log.debug('api.resource.post request', request);

            return $http(request).then(function afterPostResource() {
                    console.log('api.resource.post success')
                  //  _.trigger(afterResourceCreateEventKey);
                },
                function afterPostError(err) {
                    $log.error('api.resources.post failure', err);
                });
        }
        function putResource(resource) {
            $log.debug('api.resources.put');

            var request = {
                withCredentials: true,
                method: PUT,
                url: resourcesResource().toString()
            };

            $log.debug('api.resources.put request', request);

            return $http(request)
                .then(function putResourceSuccess(response) {
                    $log.debug('api.resources.put success', response.data);
                    _.trigger(afterResourceUpdateEventKey);

                    return response.data;
                },
                function putResourceError(response) {
                    $log.error('api.resources.put failure', response.data);
                    return response.data;
                });
        }


        function onUpdateResource(handler) {
            _.on(afterResourceUpdateEventKey, handler);
        }


        /* users */
        function getAllUsers() {
            $log.debug('api.user.getAll');

            var request = {
                withCredentials: false,
                method: GET,
                url: usersResource().toString()
            };

            return $http(request)
                .then(function getUsersAllSuccess(response) {
                    return response.data;
                },
                function getNavigationAllError(response) {
                    $log.error('api.navigation.getAll failure', response.data);
                    return response.data;
                });
        }

        function getOneUser() {}

        function deleteUser(user) {
            $log.debug('api.users.delete');

            var request = {
                withCredentials: true,
                method: DELETE,
                url: usersResource().toString()
            };

            $log.debug('api.users.delete request', request);

            return $http(request)
                .then(function deleteUserSuccess(response) {
                    $log.debug('api.users.delete success', response.data);
                    return response.data;
                },
                function deleteUserError(response) {
                    $log.error('api.categories.users.delete failure', response.data);
                    return response.data;
                });
        }


        function postUser(userData) {
            $log.debug('api.user.post');

            var request = {
                withCredentials: true,
                method: POST,
                url: usersResource().toString() ,
                data: userData || {}
            };

            $log.debug('api.user.post request', request);

            return $http(request).then(function afterPostUser() {
                _.trigger(afterUserUpdateEventKey);
            });
        }
        function putUser(user) {
            $log.debug('api.users.put');

            var request = {
                withCredentials: true,
                method: PUT,
                url: usersResource().toString()
            };

            $log.debug('api.users.put request', request);

            return $http(request)
                .then(function putUserSuccess(response) {
                    $log.debug('api.users.put success', response.data);
                    return response.data;
                },
                function putUserError(response) {
                    $log.error('api.users.put failure', response.data);
                    return response.data;
                });
        }


        function onUpdateUser(handler) {
            _.on(afterUserUpdateEventKey, handler);
        }

        /* kropotkins */
        function getRandomKropotkin() {
            $log.debug('api.kropotkin.getAll');

            var request = {
                withCredentials: false,
                method: GET,
                url: kropotkinsResource().segment('random').toString()
            };

            return $http(request)
                .then(function getKropotkinsAllSuccess(response) {
                    return response.data;
                })
                .catch(function getResourcesAllError(error) {
                    $log.error('api.kropotkin.getAll failure', error);
                    return error;
                });
            //handleApiError(error, 'getRandomKropotkin'));
        }

        function handleApiError(error, errorLocation) {
            $log.error('Error in ' + errorLocation + ' : ' + error);
        }

        return apiFactory;
    }

    angular.module('api')
        .factory('Api', ['$log', '$http', '$q', apiService]);
})();