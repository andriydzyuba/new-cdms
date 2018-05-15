(function () {
    'use strict';

    angular
        .module('app')
        .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$stateParams', 'newsService'];

    function ArticleController($stateParams, newsService) {
        var vm = this;

        var articleId = $stateParams.id;

        vm.categories = newsService.data;

        activate();

        function activate() {
            newsService.getArticle(articleId).then(function(data) {
                vm.article = data.data;
                console.log(vm.article);
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