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
            newsService.getNews().then(function (data) {
                vm.lastNews = data.data;
                console.log(vm.lastNews);
            });
        }

    }
})();
// (function () {
//     'use strict';
//     angular
//         .module('app')
//         .controller('HomeController', HomeController);
//
//     HomeController.$inject = ['$rootScope', 'modalService', 'users', 'news'];
//
//     function HomeController($rootScope, modalService, users, news) {
//         var vm = this;
//
//
//
//         activate();
//
//         function activate() {
//
//             users.getAll().then(function (data) {
//                 vm.users = data.data;
//                 console.log(vm.users);
//             });
//
//             users.get(1).then(function (data) {
//                 vm.user = data.data;
//                 console.log(vm.user);
//             });
//
//             news.getAll().then(function (data) {
//                 vm.news = data.data;
//                 console.log(vm.news);
//             });
//
//         }
//
//
//
//
//     }
// })();


