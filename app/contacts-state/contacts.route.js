(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('contacts', {
                    url:'/contacts',
                    templateUrl: 'contacts-state/contacts.view.html',
                    controller: 'ContactsController',
                    controllerAs: 'vm'
                })
        }])
})();
