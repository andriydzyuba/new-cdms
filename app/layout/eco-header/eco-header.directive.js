(function() {
    'use strict';

    angular
        .module('app')
        .directive('ecoHeader', ecoHeader);

    ecoHeader.$inject = [];
    /* @ngInject */
    function ecoHeader() {
        var directive = {
            bindToController: true,
            controller: EcoHeaderController,
            controllerAs: 'vm',
            restrict: 'A',
            templateUrl: 'layout/eco-header/eco-header.view.html'
        };

        return directive;
    }


    EcoHeaderController.$inject = ["$location", 'newsService'];

    function EcoHeaderController($location, newsService) {

    }

})();
