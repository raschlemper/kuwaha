app.factory('authInterceptor', ['$injector', function($injector) {
    return {
        responseError: function(rejection) {
            if(rejection.status === 401) {
                var stateService = $injector.get('$state');
                stateService.go('auth.login');
                //return $q.reject(rejection);
            } else {
                //return $q.reject(rejection);
            }
        }
    };

}]);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
}]);
