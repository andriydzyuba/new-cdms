(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('manual', {
                    url:'/manual/:id',
                    templateUrl: 'publications-state/manual-state/manual.view.html',
                    controller: 'ManualController',
                    controllerAs: 'vm'
                })
        }])
})();