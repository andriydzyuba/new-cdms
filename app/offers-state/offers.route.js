(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('offers', {
                    url:'/offers',
                    templateUrl: 'offers-state/offers.view.html',
                    controller: 'OffersController',
                    controllerAs: 'vm'
                })
        }])
})();
