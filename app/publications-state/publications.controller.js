(function () {
    'use strict';

    angular
        .module('app')
        .controller('PublicationsController', PublicationsController);

    PublicationsController.$inject = ['publicationsService'];

    function PublicationsController(publicationsService) {
        var vm = this;

        activate();

        function activate() {
            publicationsService.getPublications().then(function (data) {
                vm.cdmsPublic = data.data;
                console.log(vm.cdmsPublic);
            });
        }
    }

})();

