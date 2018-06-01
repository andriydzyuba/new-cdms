(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('dashboard.editManual', {
                    url:'/editmanual/:id',
                    templateUrl: 'dashboard/publications/manual-manage/manual-manage.html',
                    controller: 'EditManualController',
                    controllerAs: 'vm'
                })
        }])
})();
