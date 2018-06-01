(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('dashboard.createManual', {
                    url:'/createmanual/:catId',
                    templateUrl: 'dashboard/publications/manual-manage/manual-manage.html',
                    controller: 'CreateManualController',
                    controllerAs: 'vm'
                })
        }])
})();