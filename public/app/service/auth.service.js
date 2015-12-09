'use strict';

app.factory('AuthService', function($http, $q) {

    return {

        login: function(user, callback) {
            var cb = callback || angular.noop;
            var deferred = $q.defer();

            $http.post('/api/auth/login', {
            	'username': user.username,
            	'password': user.password
            }).
            success(function(data) {
                deferred.resolve(data);
                return cb();
            }).
            error(function(err) {
              deferred.reject(err);
              return cb(err);
            }.bind(this));

            return deferred.promise;
        }

    }

});