(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('publications', {
                    url:'/publications',
                    templateUrl: 'publications-state/publications.view.html',
                    controller: 'PublicationsController',
                    controllerAs: 'vm'
                })
        }])
})();
