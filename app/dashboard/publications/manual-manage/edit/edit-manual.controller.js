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
                console.log(manualId);
                vm.manual = response.data;
                console.log(response);
            })
        }

        function editManual() {

           // if (!vm.article.date) {
           //     vm.article.date = new Date();
           // }
            vm.manual.catId = vm.selectedCat;
            publicationsService.editManual(vm.manual).then(function(response) {
                $state.go('dashboard.publications');
            });
        }

       
    }
})();


