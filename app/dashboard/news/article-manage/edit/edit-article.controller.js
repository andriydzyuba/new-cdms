(function () {
    'use strict';
    angular
        .module('app')
        .controller('EditArticleController', EditArticleController);

    EditArticleController.$inject = ['$stateParams', '$state', 'newsService', 'modalService', 'confirmService'];

    function EditArticleController($stateParams, $state, newsService, modalService, confirmService) {
        var vm = this;

        var articleId = parseInt($stateParams.id);
        vm.buttonText = 'Змінити новину';
        vm.manageArticle = editArticle;
       

        activate();

        function activate() {
            
            getArticle();
        }

        vm.categories = newsService.data;

        
        function getArticle() {
            newsService.getArticle(articleId).then(function(response) {
                vm.article = response.data;
            })
        }

        function editArticle() {

            vm.article.catId = vm.selectedCat;
            newsService.editArticle(vm.article).then(function(response) {
                $state.go('dashboard.news');
            });
        }

    }
})();
