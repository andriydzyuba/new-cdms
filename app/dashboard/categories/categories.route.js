(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('dashboard.categories', {
                    url:'/categories',
                    templateUrl: 'dashboard/categories/categories.html',
                    controller: 'DashboardCategoriesController',
                    controllerAs: 'vm'
                })
        }])
})();