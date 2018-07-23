(function() {
    'use strict';

    angular
        .module('app')
        .directive('ecoAside', ecoAside);

    ecoAside.$inject = [];
    /* @ngInject */
    function ecoAside() {
        var directive = {
            bindToController: true,
            controller: EcoAsideController,
            controllerAs: 'vm',
            restrict: 'A',
            templateUrl: 'layout/eco-aside/eco-aside.view.html'
        };

        return directive;
    }

    EcoAsideController.$inject = ['$element', '$rootScope', '$scope', '$state'];
    /* @ngInject */
    function EcoAsideController($element, $rootScope, $scope, $state) {
        var vm = this;

    }
})();
