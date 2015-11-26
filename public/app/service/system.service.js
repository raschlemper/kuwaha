'use strict';

app.factory('SystemService', function($resource) {

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
