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
                templateUrl: 'view/main.html',
                controller: 'MainCtrl'
            })
            .state('users', {
                url: '/users',
                templateUrl: 'view/user.html',
                controller: 'UserCtrl'
            });

    })
