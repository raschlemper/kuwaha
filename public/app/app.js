'use strict';

var app = angular.module('kuwaha', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.bootstrap',
        'pascalprecht.translate'
    ])
    .config(function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'view/systems.html',
                controller: 'SystemCtrl'
            })
            .state('systems', {
                url: '/systems',
                templateUrl: 'view/systems.html',
                controller: 'SystemCtrl'
            })
            .state('system', {
                url: '/systems/:idSystem',
                templateUrl: 'view/system.html',
                controller: 'SystemCtrl'
            })
            .state('users', {
                url: '/systems/:idSystem/users',
                templateUrl: 'view/users.html',
                controller: 'SystemUserCtrl'
            });

    })
