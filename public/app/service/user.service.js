'use strict';

app.factory('UserService', function($resource) {

    var UserResource = $resource('/api/users/:id', {
        id: '@id'
    });

    return {

        allUsers: function(callback) {
            var cb = callback || angular.noop;
            return UserResource.query({},
                function(data) {
                    return cb(data);
                },
                function(err) {
                    return cb(err);
                }).$promise;
        },
        getUser: function(id, callback) {
            var cb = callback || angular.noop;
            return UserResource.get({
                    id: id
                },
                function(data) {
                    return cb(data);
                },
                function(err) {
                    return cb(err);
                }).$promise;
        },
        createUser: function(id, callback) {
            var cb = callback || angular.noop;
            return UserResource.save(user,
                function(data) {
                    return cb(data);
                },
                function(err) {
                    return cb(err);
                }).$promise;
        },
        updateUser: function(user, callback) {
            var cb = callback || angular.noop;
            return UserResource.update({ 
                    id: user.id 
                }, user,
                function(data) {
                    return cb(data);
                },
                function(err) {
                    return cb(err);
                }).$promise;
        },
        removeUser: function(id, callback) {
            var cb = callback || angular.noop;
            return UserResource.delete({
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
