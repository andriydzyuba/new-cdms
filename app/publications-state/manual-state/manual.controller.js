(function () {
    'use strict';

    angular
        .module('app')
        .controller('ManualController', ManualController);

    ManualController.$inject = ['$stateParams', 'newsService'];

    function ManualController($stateParams, newsService) {
        var vm = this;

        var manualId = $stateParams.id;

        vm.categories = newsService.data;

        activate();

        function activate() {
            newsService.getManual(manualId).then(function(data) {
                vm.manual = data.data;
                console.log(vm.manual);
            })
        }

        // function getArticle() {
        //     newsService.getArticle(articleId).then(function(response) {
        //         console.log(articleId);
        //         vm.article = response.data;
        //         console.log(response);
        //     })
        // }

    }

})();