(function () {
    'use strict';

    angular
        .module('app')
        .controller('NewsController', NewsController);

    NewsController.$inject = ['newsService'];

    function NewsController(newsService) {
        var vm = this;

        activate();

        function activate() {
            newsService.getNews().then(function (data) {
                    vm.news = data.data;
                });
        }

    }

})();
