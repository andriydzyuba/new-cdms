(function () {
    'use strict';
    angular
        .module('app')
        .controller('EditManualController', EditManualController);

    EditManualController.$inject = ['$stateParams', '$state', 'publicationsService', 'modalService', 'confirmService'];

    function EditManualController($stateParams, $state, publicationsService, modalService, confirmService) {
        var vm = this;

        var manualId = parseInt($stateParams.id);
        vm.buttonText = 'Змінити публікацію';
        vm.manageManual = editManual;
       

        activate();

        function activate() {
            
            getManual();
        }

        vm.categories = publicationsService.data;

        
        function getManual() {
            publicationsService.getManual(manualId).then(function(response) {
                vm.manual = response.data;
            })
        }

        function editManual() {

            vm.manual.catId = vm.selectedCat;
            publicationsService.editManual(vm.manual).then(function(response) {
                $state.go('dashboard.publications');
            });
        }

    }
})();
