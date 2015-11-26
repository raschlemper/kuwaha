'use strict';

app.controller('SystemCtrl', function($scope, $stateParams, UserService, UserBuilder, LISTS) {

    var init = function() {
        $scope.systems = [];
        $scope.system = {};
        index = 0;
        colors = _.shuffle(LISTS.colors);
        $scope.getAllSystems(); 
        $scope.getSystem();
        $scope.msg = { success: null, error: null };
    };
    
    var resetForm = function(form, data) {
        form.$setPristine();
        $scope.submitted = false;
        init(); 
    };

    $scope.getAllSystems = function() {
        $scope.users = [];
        SystemService.allUsers()
            .then(function(data) {
                builderUser(data);
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.SEARCH.ERROR';                
            });
    };

    $scope.getUser = function() {        
        $scope.user = UserBuilder.createUserDefault();
        if (!$stateParams.idUser) return;
        UserService.getUser($stateParams.idUser)
            .then(function(data) {
                $scope.user = UserBuilder.createUser(data, null);
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.SEARCH.ERROR';
            });
    };

    $scope.saveUser = function(form) {  
        $scope.submitted = true;
        if (form.$valid) {   
            if(!$scope.user.id) { createUser(form); } 
            else { updateUser(form); }            
        } else {
            $scope.msg.error = 'MSG.EXISTS.INCORRET.DATA';
        }
    };

    var createUser = function(form) {  
        UserService.createUser($scope.user)
            .then(function(data) {
                resetForm(form, null);
                $scope.msg.success = 'MSG.USER.CREATE.SUCCESS';                
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.CREATE.ERROR';
            });        
    };

    var updateUser = function(form) {  
        UserService.updateUser($scope.user)
            .then(function(data) {
                resetForm(form, data);
                $scope.msg.success = 'MSG.USER.UPDATE.SUCCESS';                
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.UPDATE.ERROR';
            });
        
    };

    $scope.removeUser = function(id) {
        UserService.removeUser(id)
            .then(function(data) {
                init(); 
                $scope.msg.success = 'MSG.USER.REMOVE.SUCCESS';                
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.SEARCH.ERROR';
            });
    };

    var builderUser = function(users) {
        $scope.users = _.map(users, function(user) {
            var user = UserBuilder.createUser(user);
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