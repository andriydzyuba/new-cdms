(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('categories', {
                    url:'/categories/:id',
                    templateUrl: 'categories-state/categories.view.html',
                    controller: 'CategoriesController',
                    controllerAs: 'vm'
                })
        }])
})();
