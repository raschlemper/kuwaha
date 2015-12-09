app.run(['$rootScope', '$state', 'localStorageService', function ($rootScope, $state, localStorageService) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if(toState.name !== 'auth.login') {
            // Auth.isLoggedInAsync(function(loggedIn) {
            //     if (next.authenticate && !loggedIn) {
              if(!localStorageService.get('token')) {
                  event.preventDefault(); 
                  $state.go('auth.login');
              }
            //     }
            // });
        } 
    });
  	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
  		
  	});

}]);