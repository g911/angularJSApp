var app = angular.module('AngularJS',[]);

app.config(function($routeProvider){
    $routeProvider
        .when( '/home',
            {
                controller: 'homeCtrl',
                templateUrl: 'views/home.html'
            }
        )
        .when('/history',
            {
                controller: 'historyCtrl',
                templateUrl: 'views/history.html'
            }
        )
        .otherwise(
            {
                redirectTo: '/home'
            }
        );
});