(function () {
    'use strict';
    angular
        .module('app')
        .controller('CreateArticleController', CreateArticleController);

    CreateArticleController.$inject = ['$state', '$stateParams', 'newsService', 'modalService', 'confirmService'];

    function CreateArticleController($state, $stateParams, newsService, modalService, confirmService) {
        var vm = this;

        vm.article = {
            catId: $stateParams.catId
        };

        vm.buttonText = 'Створити новину';
        vm.manageArticle = createArticle;
        vm.selectedLocations = [];


        activate();

        function activate() {

        }

        vm.categories = newsService.data;

        function createArticle() {



            vm.article.date = new Date();

            newsService.createArticle(vm.article).then(function(response) {
                $state.go('dashboard.news');
            });
        }

    }
})();
