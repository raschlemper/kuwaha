'use strict';

app.factory('authInterceptor', ['$injector', '$q', 'localStorageService', function($injector, $q, localStorageService) {
    return {
        // Add authorization token to headers
        request: function(config) {
            config.headers = config.headers || {};
            if (localStorageService.get('token')) {
                config.headers.authorization = localStorageService.get('token');
            }
          return config;
        },
        responseError: function(rejection) {
            if(rejection.status === 401) {
                var stateService = $injector.get('$state');
                stateService.go('auth.login');
                localStorageService.remove('token');
                return $q.reject(rejection);
            } else {
                return $q.reject(rejection);
            }
        }
    };

}]);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
}]);
