'use strict';

app.controller('BreadcrumbCtrl', function($rootScope, $scope, $stateParams, LISTS) {

    $scope.$on('breadcrumb', function(events, args){
        if(args.name == 'home') getStateHome();
        else if(args.name == 'systems') getStateHome();
        else if(args.name == 'system') getStateSystem(args.param);
        else if(args.name == 'users') getStateSystemUser(args.param);
    });

    var getStateHome = function() {
        $scope.states = { 
            'title': 'Sistemas', 
            'routes': [
                { name: 'Home', state: 'app.home' }
            ] 
        };
    }

    var getStateSystem = function(system) {
        $scope.states = { 
            'title': system.name, 
            'routes': [
                    { name: 'Home', state: 'app.home' },
                    { name: 'Sistemas', state: 'app.systems' }
                 ] 
        };
    }

    var getStateSystemUser = function(system) {
        $scope.states = { 
            'title': 'Usuários', 
            'routes': [
                    { name: 'Home', state: 'app.home' },
                    { name: 'Sistemas', state: 'app.systems' },
                    { name: system.name, state: 'app.system', params: { idSystem: system._id } }
                 ] 
        };
    }

});