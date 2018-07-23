(function () {
    'use strict';
    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', 'newsService'];

    function HomeController($rootScope, newsService) {
        var vm = this;

        activate();

        function activate() {
            newsService.getLastNews().then(function (data) {
                vm.lastNews = data.data;
            });
        }

    }
})();
