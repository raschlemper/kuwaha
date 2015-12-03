'use strict';

app.controller('SystemUserCtrl', function($rootScope, $scope, $stateParams, SystemService, LISTS) {

    var index;
    var colors;

    var init = function() {
        $scope.users = [];
        $scope.user = {};
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
            return {  
                fullname: user.user.name + ' ' + user.user.lastname,
                shortname: user.user.name.charAt(0) + user.user.lastname.charAt(0),
                username: user.user.username,
                gender: user.user.gender,              
                email: user.user.email,              
                status: user.status,              
                group: user.group,              
                date: user.date,              
                color: getColor()
            }
        })
    };

    var getColor = function() {
        var color = colors[index];
        index++;
        return {'background-color': color.name, 'color': color.color}
    }

    init();

});