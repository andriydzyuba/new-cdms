(function () {
    'use strict';

    angular
        .module('app')
        .controller('PublicationsController', PublicationsController);

    PublicationsController.$inject = ['newsService'];

    function PublicationsController(newsService) {
        var vm = this;

        activate();

        function activate() {
            newsService.getPublications().then(function (data) {
                vm.cdmsPublic = data.data;
                console.log(vm.cdmsPublic);
            });
        }
    }

})();

