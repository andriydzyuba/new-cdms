(function () {
    'use strict';
    angular
        .module('app')
        .controller('DashboardPublicationsController', DashboardPublicationsController);

    DashboardPublicationsController.$inject = ['$stateParams', 'publicationsService', 'modalService', 'confirmService'];

    function DashboardPublicationsController($stateParams, publicationsService, modalService, confirmService) {
        var vm = this;

    
        vm.showDeleteManualModal = showDeleteManualModal;

        activate();

        function activate() {

            getPublications();
        }


        function getPublications() {
            publicationsService.getPublications().then(function(data) {
                vm.publications = data.data;
            })
        }


        function showDeleteManualModal(manual) {
            var message = "Ви впевнені, що хочете видалити цю публікацію?";
            confirmService.openConfirmModal(message).then(function(response){
                if (response) {
                    publicationsService.deleteManual(manual.id).then(function(data){
                        getPublications();
                    });
                }
            });
        }

    }
})();
