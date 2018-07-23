(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('search', {
                    url:'/search',
                    templateUrl: 'search-state/search.view.html',
                    controller: 'SearchController',
                    controllerAs: 'vm'
                })
        }])
})();
