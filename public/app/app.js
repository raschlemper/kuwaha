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

    .config(function($urlRouterProvider, $stateProvider, $httpProvider) {

        $urlRouterProvider
            .otherwise('/');

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'view/login.html',
                controller: 'LoginCtrl'
            })

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

        $httpProvider.interceptors.push('authInterceptor');

    })

    .factory('authInterceptor', function($rootScope, $q, $location) {
        return {
            responseError: function(rejection) {
                if(response.status === 401) {
                    $location.path('/login');
                    return $q.reject(rejection);
                } else {
                    return $q.reject(rejection);
                }
            }
        };

    })    

    .run(function($rootScope, $location) {
        $rootScope.$on('$stateChangeStart', function(event, next) {
            // Auth.isLoggedInAsync(function(loggedIn) {
            //     if (next.authenticate && !loggedIn) {
                    $location.path('/login');
            //     }
            // });
        });
    });

