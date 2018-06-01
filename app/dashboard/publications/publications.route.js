(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('dashboard.publications', {
                    url:'/publications',
                    templateUrl: 'dashboard/publications/publications.html',
                    controller: 'DashboardPublicationsController',
                    controllerAs: 'vm'
                })
        }])
})();
