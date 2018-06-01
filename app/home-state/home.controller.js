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


        // vm.onSelectOptionChanged = onSelectOptionChanged;
        //
        // vm.findNews = [];
        //
        // function onSelectOptionChanged () {
        //
        //     $location.path('/');
        //
        //     vm.findNews.length = 0;
        //     vm.searchFunction();
        // }
        //
        // vm.searchFunction = function () {
        //
        //     var params = {
        //         limit: 1,
        //         offset: vm.findNews.length
        //     }
        //     console.log(vm.findNews.length);
        //
        //     if (vm.title) {
        //         params.title = vm.title
        //     }
        //
        //     if (vm.title.length > 2) {
        //         newsService.searchNews(params).then(function (response) {
        //             // vm.findNews = response.data;
        //             vm.moreNews = response.data
        //             console.log(vm.moreNews);
        //             if (response.data) {
        //                 for (var i = 0; i < response.data.length; i++) {
        //                     vm.findNews.push(response.data[i]);
        //                     console.log(vm.findNews);
        //                 }
        //                 if (vm.moreNews.length > 0) {
        //                     vm.showbutton = true;
        //                 } else {
        //                     vm.showbutton = false;
        //                 }
        //             }
        //         })
        //     }
        // }

        // vm.title = null;
        //
        // vm.cleanFilter = function () {
        //
        //     vm.searchNews.length = 0;
        //     vm.title = null;
        // }

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


