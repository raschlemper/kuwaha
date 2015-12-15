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
            state.resolve.currentUser = function($rootScope, $state, $q, AuthService) {                
                return AuthService.authenticate()
                    .then(function(data) {
                        $rootScope.currentUser = data;
                        if(!state.roles || state.roles.length == 0) return data;
                        // else if (_.contains(state.roles, 'user')) return data;
                        else $state.go('app.home');
                    }).catch(function(err) {
                        $q.reject('not authorized');
                    });
            }
            return state;
        });

    })