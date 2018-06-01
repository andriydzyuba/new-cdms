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
                console.log(data);
            })
        }


        function showDeleteManualModal(manual) {
            var message = "Are you sure you want to delete this article?";
            confirmService.openConfirmModal(message).then(function(response){
                if (response) {
                    publicationsService.deleteManual(manual.id).then(function(data){
                        console.log(manual.id);
                        getPublications();
                    });
                }
            });
        }

    
    }
})();


