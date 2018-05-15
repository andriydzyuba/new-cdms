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
 /*       vm.states = [];

        vm.getStateHref = getStateHref;

        activate();

        function activate() {
            updateStates();
        }

        function getStateHref(state) {
            return $state.href(state.name, state.params);
        }

        function updateStates() {
            var statesList = [
                {
                    ukName: 'Головна',
                    name: 'home'
                },
                {
                    ukName: 'Про проект',
                    name: 'about'
                }
            ];

            vm.states.length = 0;

            _.each(statesList, function(elem) {
                vm.states.push(elem);
            })
        }
        console.log(vm.states);*/

    }
})();