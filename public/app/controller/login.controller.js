'use strict';

app.controller('LoginCtrl', function($scope) {

    var init = function() {
    };

    $scope.login = function(form) {  
        $scope.submitted = true;
        if (form.$valid) { 
        	console.log(form.$valid);
        } else {
            $scope.$parent.msg.error = 'MSG.EXISTS.INCORRET.DATA';
        }
    }
    
    init();

});