(function () {
    'use strict';
    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['newsService', '$location'];

    function SearchController(newsService, $location) {
        var vm = this;

        vm.onSelectOptionChanged = onSelectOptionChanged;

        vm.inputSearch = /^[a-zA-ZА-Яа-яЇїІіҐґ]{1,10}$/;

        vm.findNews = [];

        function onSelectOptionChanged () {

            $location.path('/search');

            vm.showtitle = false;
            vm.noresulte = false;

            vm.findNews.length = 0;
            vm.searchFunction();
        }

        vm.searchFunction = function () {

            var params = {
                limit: 9,
                offset: vm.findNews.length
            }

            if (vm.title) {
                params.title = vm.title
            }

            if (vm.title.length > 2) {
                newsService.searchNews(params).then(function (response) {
                    vm.moreNews = response.data;
                    if (response.data) {
                        for (var i = 0; i < response.data.length; i++) {
                            vm.findNews.push(response.data[i]);
                        }
                        if (vm.moreNews.length > 0) {
                            vm.showbutton = true;
                        } else {
                            vm.showbutton = false;
                        }
                    }
                    if (vm.findNews.length > 0) {
                        vm.showtitle = true;
                        vm.noresulte = false;
                    } else {
                        vm.showtitle = false;
                        vm.showbutton = false;
                        vm.noresulte = true;
                    }
                })
            }
        }

    }
})();
