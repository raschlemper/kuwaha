'use strict';

app.factory('AuthService', function($http, $q, localStorageService) {

    return {

        login: function(user, callback) {
            var cb = callback || angular.noop;
            var deferred = $q.defer();

            $http.post('/auth/local', {
            	'username': user.username,
            	'password': user.password
            }).
            success(function(data) {
                localStorageService.set('token', data);
                deferred.resolve(data);
                return cb();
            }).
            error(function(err) {
              deferred.reject(err);
              return cb(err);
            }.bind(this));

            return deferred.promise;
        },
          
        logout: function() {
            var deferred = $q.defer();
            deferred.resolve(localStorageService.remove('token'));
            return deferred.promise;
        },

    }

});