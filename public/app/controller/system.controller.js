'use strict';

app.controller('SystemCtrl', function($rootScope, $scope, $stateParams, localStorageService, SystemService, LISTS) {

    var init = function() {
        $scope.systems = [];
        $scope.system = {};
        getAllSystems(); 
        getSystem();
        $scope.msg = { success: null, error: null };
        console.log(localStorageService.get('token'));
    };

    var getAllSystems = function() {
        SystemService.allSystems()
            .then(function(data) {
                $scope.systems = data;                
                $rootScope.$broadcast('breadcrumb', {name: 'systems'});
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.SEARCH.ERROR';                
            });
    };

    var getSystem = function() {    
        if (!$stateParams.idSystem) return;
        SystemService.getSystemSize($stateParams.idSystem)
            .then(function(data) {
                $scope.system = data;
                $rootScope.$broadcast('breadcrumb', {name: 'system', param: data});
            })
            .catch(function() {
                $scope.msg.error = 'MSG.USER.SEARCH.ERROR';
            });
    };

    init();

});