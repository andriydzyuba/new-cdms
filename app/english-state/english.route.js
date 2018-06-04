(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('english', {
                    url:'/english',
                    templateUrl: 'english-state/english.view.html',
                    controller: 'EnglishController',
                    controllerAs: 'vm'
                })
        }])
})();