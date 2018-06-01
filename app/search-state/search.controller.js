(function () {
    'use strict';
    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['newsService', '$location'];

    function SearchController(newsService, $location) {
        var vm = this;

        vm.onSelectOptionChanged = onSelectOptionChanged;

        vm.findNews = [];

        function onSelectOptionChanged () {

            $location.path('/search');

            vm.findNews.length = 0;
            vm.searchFunction();
        }

        vm.searchFunction = function () {

            var params = {
                limit: 1,
                offset: vm.findNews.length
            }
            console.log(vm.findNews.length);

            if (vm.title) {
                params.title = vm.title
            }

            if (vm.title.length > 2) {
                newsService.searchNews(params).then(function (response) {
                    vm.moreNews = response.data
                    console.log(vm.moreNews);
                    if (response.data) {
                        for (var i = 0; i < response.data.length; i++) {
                            vm.findNews.push(response.data[i]);
                            console.log(vm.findNews);
                        }
                        if (vm.moreNews.length > 0) {
                            vm.showbutton = true;
                        } else {
                            vm.showbutton = false;
                        }
                    }
                })
            }
        }

        // vm.title = null;

    }
})();


