'use strict';

app.controller('LoginCtrl', function($scope, $state, localStorageService, AuthService) {

    var init = function() {
    };

    $scope.login = function(form) { 
        if (form.$valid) { 
        	AuthService.login($scope.user)
                .then(function(data) {
                    // localStorageService.set('token', data);
                    $state.go('app.home');
                })
                .catch(function() {
                    $scope.msg.error = 'MSG.EXISTS.INCORRET.DATA';                
                });
        } else {
            $scope.$parent.msg.error = 'MSG.EXISTS.INCORRET.DATA';
        }
    }
    
    init();

});