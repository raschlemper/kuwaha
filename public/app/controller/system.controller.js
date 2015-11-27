'use strict';

app.controller('SystemCtrl', function($scope, $stateParams, SystemService, SystemBuilder, LISTS) {

    var index;
    var colors;

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
        $scope.systems = [];
        SystemService.allSystems()
            .then(function(data) {
                builderSystem(data);
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.SEARCH.ERROR';                
            });
    };

    $scope.getSystem = function() {        
        $scope.system = SystemBuilder.createSystemDefault();
        if (!$stateParams.idSystem) return;
        SystemService.getSystem($stateParams.idSystem)
            .then(function(data) {
                $scope.system = SystemBuilder.createSystem(data, null);
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.SEARCH.ERROR';
            });
    };

    $scope.saveSystem = function(form) {  
        $scope.submitted = true;
        if (form.$valid) {   
            if(!$scope.system.id) { createSystem(form); } 
            else { updateSystem(form); }            
        } else {
            $scope.msg.error = 'MSG.EXISTS.INCORRET.DATA';
        }
    };

    var createSystem = function(form) {  
        SystemService.createSystem($scope.system)
            .then(function(data) {
                resetForm(form, null);
                $scope.msg.success = 'MSG.USER.CREATE.SUCCESS';                
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.CREATE.ERROR';
            });        
    };

    var updateSystem = function(form) {  
        SystemService.updateSystem($scope.system)
            .then(function(data) {
                resetForm(form, data);
                $scope.msg.success = 'MSG.USER.UPDATE.SUCCESS';                
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.UPDATE.ERROR';
            });
        
    };

    $scope.removeSystem = function(id) {
        SystemService.removeSystem(id)
            .then(function(data) {
                init(); 
                $scope.msg.success = 'MSG.USER.REMOVE.SUCCESS';                
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.SEARCH.ERROR';
            });
    };

    var builderSystem = function(systems) {
        $scope.systems = _.map(systems, function(system) {
            var system = SystemBuilder.createSystem(system);
            system.color = getColor();
            return system;
        })
    };

    var getColor = function() {
        var color = colors[index];
        index++;
        return {'background-color': color.name, 'color': color.color}
    }

    init();

});