'use strict';

app.factory('AuthService', function($rootScope, $http, $q, $state, localStorageService) {

    return {

        login: function(user, callback) {
            var cb = callback || angular.noop;
            var deferred = $q.defer();

            $http.post('/auth/local', {
            	'username': user.username,
            	'password': user.password
            }).
            success(function(data) {
                localStorageService.set('token', data.token);
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
            localStorageService.remove('token');                
            $rootScope.currentUser = null;
            $rootScope.loading = false;
            $state.go('auth.login');
            return deferred.promise;
        },

        authenticate: function(callback) {
            var cb = callback || angular.noop;
            var deferred = $q.defer();

            $http.get('/auth/authenticate')
                .success(function(data) {
                    deferred.resolve(data);
                    return cb();
                })
                .error(function(err) {
                    deferred.reject(err);
                    return cb(err);
                }.bind(this));

            return deferred.promise;
        },

    }

});