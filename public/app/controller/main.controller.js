'use strict';

app.controller('MainCtrl', function($scope) {

    var init = function() {
        setLineHeightMainContainer();
    }

    var setLineHeightMainContainer = function() {
        var main = angular.element(window).height();
        var menu = angular.element("#menu").height();
        var footer = angular.element("#footer").height();
        var size = main - (menu + footer + 40);
        var mainContent = angular.element('#mainContent');
        mainContent.css('minHeight', size);
    }

    window.addEventListener('resize', function(event) {
        // setLineHeightMainContainer();
    });

    // $scope.$watch($scope.progress.active, function (isActive) {
    //     alert(isActive);
    // });

    init();

});
