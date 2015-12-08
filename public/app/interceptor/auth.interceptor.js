app.factory('authInterceptor', function() {
    return {
        responseError: function(rejection) {
            if(response.status === 401) {
                $state.go('auth.login');
                //return $q.reject(rejection);
            } else {
                //return $q.reject(rejection);
            }
        }
    };

});

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
}]);
