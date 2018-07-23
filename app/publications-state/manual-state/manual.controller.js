(function () {
    'use strict';

    angular
        .module('app')
        .controller('ManualController', ManualController);

    ManualController.$inject = ['$stateParams', 'publicationsService'];

    function ManualController($stateParams, publicationsService) {
        var vm = this;

        var manualId = $stateParams.id;

        vm.categories = publicationsService.data;

        activate();

        function activate() {
            publicationsService.getManual(manualId).then(function(data) {
                vm.manual = data.data;
            })
        }

    }

})();
