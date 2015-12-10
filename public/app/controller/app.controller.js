'use strict';

app.controller('AppCtrl', function($scope, $state, localStorageService, AuthService) {

    var init = function() {
    };

    $scope.logout = function(form) { 
    	AuthService.logout($scope.user)
            .then(function(data) {
                $state.go('auth.login');
            })
            .catch(function() {              
            });
    }
    
    init();

});