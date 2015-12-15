'use strict';

app.config(function($provide, $stateProvider) {

        $stateProvider.decorator('roles', function(state) { 
            return state.roles;
        });

        $stateProvider.decorator('authenticate', function(state) {  
            return state.authenticate;
        });

        $stateProvider.decorator('$state', function(state) {  
            if (!state.authenticate) return;
            state.resolve.currentUser = function($state, $q, AuthService) {                
                return AuthService.authenticate()
                    .then(function(data) {
                        if(!state.roles || state.roles.length == 0) return data;
                        // else if (_.contains(state.roles, 'user')) return data;
                        else $state.go('app.home');
                    }).catch(function(err) {
                        $q.reject('not authorized');
                    });
            }
            return state;
        });

        $provide.decorator('$state', function($delegate, $rootScope, $timeout) {
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
            return $delegate;
        });

    })