'use strict';

app.controller('SystemUserCtrl', function($rootScope, $scope, $stateParams, SystemService, LISTS) {

    var index;
    var colors;

    var init = function() {
        $scope.users = [];
        index = 0;
        colors = _.shuffle(LISTS.colors);
        $scope.getAllUsers(); 
        $scope.msg = { success: null, error: null };
    };

    $scope.getAllUsers = function() {
        if (!$stateParams.idSystem) return;
        $scope.users = [];
        SystemService.getSystem($stateParams.idSystem)
            .then(function(data) {
                builderUser(data.users);        
                $rootScope.$broadcast('breadcrumb', {name: 'users', param: data});
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.SEARCH.ERROR';                
            });
    };

    var builderUser = function(users) {
        $scope.users = _.map(users, function(user) {
            user.color = getColor();
            return user;
        })
    };

    var getColor = function() {
        var color = colors[index];
        index++;
        return {'background-color': color.name, 'color': color.color}
    }

    init();

});