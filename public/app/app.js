'use strict';

var app = angular.module('kuwaha', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.bootstrap',
        'LocalStorageModule',
        'pascalprecht.translate'
    ])

    .config(function($urlRouterProvider, $stateProvider, $httpProvider) {

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
                controller: 'SystemCtrl'
            })
            .state('app.systems', {
                url: '/systems',
                templateUrl: 'view/systems.html',
                controller: 'SystemCtrl'
            })
            .state('app.system', {
                url: '/systems/:idSystem',
                templateUrl: 'view/system.html',
                controller: 'SystemCtrl'
            })
            .state('app.users', {
                url: '/systems/:idSystem/users',
                templateUrl: 'view/users.html',
                controller: 'SystemUserCtrl'
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

    .config(function(localStorageServiceProvider) {      
        localStorageServiceProvider
            .setStorageType('sessionStorage')
            .setPrefix('teratec');
    })
