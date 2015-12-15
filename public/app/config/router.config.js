'use strict';

app.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider
        .otherwise('/404');

    $stateProvider

        .state('app', {
            templateUrl: 'view/app.html',
            controller: 'AppCtrl'
        })
        .state('app.home', {
            url: '/',
            templateUrl: 'view/systems.html',
            controller: 'SystemCtrl',
            authenticate: true
        })
        .state('app.systems', {
            url: '/systems',
            templateUrl: 'view/systems.html',
            controller: 'SystemCtrl',
            authenticate: true
        })
        .state('app.system', {
            url: '/systems/:idSystem',
            templateUrl: 'view/system.html',
            controller: 'SystemCtrl',
            authenticate: true
        })
        .state('app.users', {
            url: '/systems/:idSystem/users',
            templateUrl: 'view/users.html',
            controller: 'SystemUserCtrl',
            authenticate: true
        })

        .state('auth', {
            templateUrl: 'view/auth.html'
        })
        .state('auth.login', {
            url: '/login',
            templateUrl: 'view/login.html',
            controller: 'LoginCtrl'
        });        

})