'use strict';

app.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider
        .otherwise('/404');

    $stateProvider

        .state('app', {
            templateUrl: 'view/app/index.html',
            controller: 'MainCtrl'
        })
        .state('app.home', {
            url: '/',
            templateUrl: 'view/app/systems.html',
            controller: 'SystemCtrl',
            authenticate: true
        })
        .state('app.systems', {
            url: '/systems',
            templateUrl: 'view/app/systems.html',
            controller: 'SystemCtrl',
            authenticate: true
        })
        .state('app.system', {
            url: '/systems/:idSystem',
            templateUrl: 'view/app/system.html',
            controller: 'SystemCtrl',
            authenticate: true
        })
        .state('app.users', {
            url: '/systems/:idSystem/users',
            templateUrl: 'view/app/users.html',
            controller: 'SystemUserCtrl',
            authenticate: true
        })

        .state('auth', {
            templateUrl: 'view/auth/index.html'
        })
        .state('auth.login', {
            url: '/login',
            templateUrl: 'view/auth/login.html',
            controller: 'MainCtrl'
        });        

})