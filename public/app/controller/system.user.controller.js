'use strict';

app.controller('SystemUserCtrl', function($scope, $stateParams, SystemService, UserBuilder, LISTS) {

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
    
    // var resetForm = function(form, data) {
    //     form.$setPristine();
    //     $scope.submitted = false;
    //     init(); 
    // };

    $scope.getAllUsers = function() {
        if (!$stateParams.idSystem) return;
        $scope.users = [];
        SystemService.getSystemUsers($stateParams.idSystem)
            .then(function(data) {
                builderUser(data);
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.SEARCH.ERROR';                
            });
    };

    // $scope.getUser = function() {        
    //     $scope.user = UserBuilder.createUserDefault();
    //     if (!$stateParams.idUser) return;
    //     UserService.getUser($stateParams.idUser)
    //         .then(function(data) {
    //             $scope.user = UserBuilder.createUser(data, null);
    //         })
    //         .catch(function() {
    //             $scope.msg.error = 'MSG.USER.SEARCH.ERROR';
    //         });
    // };

    // $scope.saveUser = function(form) {  
    //     $scope.submitted = true;
    //     if (form.$valid) {   
    //         if(!$scope.user.id) { createUser(form); } 
    //         else { updateUser(form); }            
    //     } else {
    //         $scope.msg.error = 'MSG.EXISTS.INCORRET.DATA';
    //     }
    // };

    // var createUser = function(form) {  
    //     UserService.createUser($scope.user)
    //         .then(function(data) {
    //             resetForm(form, null);
    //             $scope.msg.success = 'MSG.USER.CREATE.SUCCESS';                
    //         })
    //         .catch(function() {
    //             $scope.msg.error = 'MSG.USER.CREATE.ERROR';
    //         });        
    // };

    // var updateUser = function(form) {  
    //     UserService.updateUser($scope.user)
    //         .then(function(data) {
    //             resetForm(form, data);
    //             $scope.msg.success = 'MSG.USER.UPDATE.SUCCESS';                
    //         })
    //         .catch(function() {
    //             $scope.msg.error = 'MSG.USER.UPDATE.ERROR';
    //         });        
    // };

    // $scope.removeUser = function(id) {
    //     UserService.removeUser(id)
    //         .then(function(data) {
    //             init(); 
    //             $scope.msg.success = 'MSG.USER.REMOVE.SUCCESS';                
    //         })
    //         .catch(function() {
    //             $scope.msg.error = 'MSG.USER.SEARCH.ERROR';
    //         });
    // };

    var builderUser = function(datas) {
        $scope.users = _.map(datas, function(data) {
            var user = UserBuilder.createUser(data.user);
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