app.run(['$rootScope', function ($rootScope) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if(toState.name !== 'auth.login') {
            // Auth.isLoggedInAsync(function(loggedIn) {
            //     if (next.authenticate && !loggedIn) {
                    event.preventDefault(); 
                    $state.go('auth.login');
            //     }
            // });
        } 
    });
  	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
  		
  	});

}]);