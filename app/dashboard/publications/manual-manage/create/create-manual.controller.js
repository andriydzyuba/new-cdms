(function () {
    'use strict';
    angular
        .module('app')
        .controller('CreateManualController', CreateManualController);

    CreateManualController.$inject = ['$state', '$stateParams', 'publicationsService', 'modalService', 'confirmService'];

    function CreateManualController($state, $stateParams, publicationsService, modalService, confirmService) {
        var vm = this;

        vm.manual = {
            catId: $stateParams.catId
        };

        vm.buttonText = 'Create Manual';
        vm.manageManual = createManual;
        vm.selectedLocations = [];


        activate();

        function activate() {

        }

        vm.categories = publicationsService.data;

        console.log(publicationsService.data);

        function createManual() {



            vm.manual.date = new Date();

            publicationsService.createManual(vm.manual).then(function(response) {
                $state.go('dashboard.publications');
                console.log(vm.manual);
            });
        }



    }
})();


