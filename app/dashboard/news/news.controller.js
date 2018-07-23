(function () {
    'use strict';
    angular
        .module('app')
        .controller('DashboardNewsController', DashboardNewsController);

    DashboardNewsController.$inject = ['$stateParams', 'newsService', 'modalService', 'confirmService'];

    function DashboardNewsController($stateParams, newsService, modalService, confirmService) {
        var vm = this;

    
        vm.showDeleteArticleModal = showDeleteArticleModal;

        activate();

        function activate() {

           getNews();
        }


        function getNews() {
            newsService.getNews().then(function(data) {
                vm.news = data.data;
            })
        }


        function showDeleteArticleModal(article) {
            var message = "Ви впевнені, що хочете видалити цю новину?";
            confirmService.openConfirmModal(message).then(function(response){
                if (response) {
                    newsService.deleteArticle(article.id).then(function(data){
                        getNews();
                    });
                }
            });
        }

    
    }
})();
