'use strict';

app.factory('SystemService', function($resource, $http, $q) {

    var SystemResource = $resource('/api/systems/:id', {
        id: '@id'
    });

    return {

        allSystems: function(callback) {
            var cb = callback || angular.noop;
            return SystemResource.query({},
                function(data) {
                    return cb(data);
                },
                function(err) {
                    return cb(err);
                }).$promise;
        },
        getSystem: function(id, callback) {
            var cb = callback || angular.noop;
            return SystemResource.get({
                    id: id
                },
                function(data) {
                    return cb(data);
                },
                function(err) {
                    return cb(err);
                }).$promise;
        },
        getSystemSize: function(id, callback) {
            var cb = callback || angular.noop;
            var deferred = $q.defer();

            $http.get('/api/systems/'+id+'/size').
            success(function(data) {
                deferred.resolve(data);
                return cb();
            }).
            error(function(err) {
              deferred.reject(err);
              return cb(err);
            }.bind(this));

            return deferred.promise;
        },
        createSystem: function(id, callback) {
            var cb = callback || angular.noop;
            return SystemResource.save(user,
                function(data) {
                    return cb(data);
                },
                function(err) {
                    return cb(err);
                }).$promise;
        },
        updateSystem: function(user, callback) {
            var cb = callback || angular.noop;
            return SystemResource.update({ 
                    id: user.id 
                }, user,
                function(data) {
                    return cb(data);
                },
                function(err) {
                    return cb(err);
                }).$promise;
        },
        removeSystem: function(id, callback) {
            var cb = callback || angular.noop;
            return SystemResource.delete({
                    id: id
                },
                function(data) {
                    return cb(data);
                },
                function(err) {
                    return cb(err);
                }).$promise;
        }

    }

});
