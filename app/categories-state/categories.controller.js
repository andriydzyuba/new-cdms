(function () {
    'use strict';
    angular
        .module('app')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['$stateParams', 'newsService'];

    function CategoriesController($stateParams, newsService) {
        var vm = this;

        var catId = $stateParams.id;

        activate();

        function activate() {

        }

        getNews();

        function getNews() {
            newsService.getNewsByCategory(catId).then(function (data) {
                vm.lastNews = data.data;
            });
        }

        getInfoCat();

        function getInfoCat() {
            newsService.getInfoByCategory(catId).then(function (data) {
                vm.infoCat = data.data;
            });
        }

    }
})();
