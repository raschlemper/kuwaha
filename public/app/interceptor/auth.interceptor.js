'use strict';

app.factory('authInterceptor', ['$q', 'localStorageService', '$injector', 
    function($q, localStorageService, $injector) {
    return {
        // Add authorization token to headers
        request: function(config) {
            config.headers = config.headers || {};
            if (localStorageService.get('token')) {
                config.headers.Authorization = 'Bearer ' + localStorageService.get('token');
            }
          return config;
        },
        responseError: function(rejection) {
            if(rejection.status === 401) {                
                $injector.get('AuthService').logout();
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
