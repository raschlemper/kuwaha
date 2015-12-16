app.run(['$rootScope', '$timeout', function ($rootScope, $timeout) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $rootScope.loading = true;
        if (_.contains(["404","login","register"], toState.name)) {
            return;
        }
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        // $timeout( function(){ 
            $rootScope.loading = false;
        // }, 1000);
    });
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
        // $timeout( function(){ 
            $rootScope.loading = false;
        // }, 1000);
    });
    $rootScope.$on('$stateNotFound', function(event, toState, toParams, fromState, fromParams) {
        // $timeout( function(){ 
            $rootScope.loading = false;
        // }, 1000);
    });
}]);