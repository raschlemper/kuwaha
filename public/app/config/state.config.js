'use strict';

app.config(function($stateProvider) {

        $stateProvider.decorator('roles', function(state) {  
            if(state.roles) return [];
            return state.roles;
        });

        $stateProvider.decorator('authenticate', function(state) {  
            var auth = state.authenticate;
            var roles = state.roles;
            if (auth) {
                state.resolve = state.resolve || {};
                state.resolve.currentUser = function($state, $q, AuthService) {
                    return AuthService.authenticate()
                        .then(function(data) {
                            if(!roles || roles.length == 0) return data;
                            if (_.contains(roles, 'user')) return data;
                            else $state.go('app.home');
                        }).catch(function(err) {
                        	$q.reject('not authorized');
                        });
                };
            }

            return state.authenticate;
        });

    })