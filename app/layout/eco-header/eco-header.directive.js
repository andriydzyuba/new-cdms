(function() {
    'use strict';

    angular
        .module('app')
        .directive('ecoHeader', ecoHeader);

    ecoHeader.$inject = [];
    /* @ngInject */
    function ecoHeader() {
        var directive = {
            bindToController: true,
            controller: EcoHeaderController,
            controllerAs: 'vm',
            restrict: 'A',
            templateUrl: 'layout/eco-header/eco-header.view.html'
        };

        return directive;
    }


    EcoHeaderController.$inject = ["$location", 'newsService'];

    function EcoHeaderController($location, newsService) {
        // var vm = this;
        // console.log('jjj');

        // vm.onSelectOptionChanged = onSelectOptionChanged;

        // vm.searchNews = [];

        // function onSelectOptionChanged () {
        //     console.log('fff');

            // $location.path('home');
            //
            // vm.searchNews.length = 0;
            // vm.searchFunction();
        // }

        // vm.searchFunction = function () {
        //
        //     var params = {
        //         limit: 15,
        //         offset: vm.searchNews.length
        //     }
        //
        //     if (vm.title) {
        //         params.title = vm.title
        //     }
        //
        //     if (vm.title.length > 2) {
        //         newsService.searchNews(params).then(function (response) {
        //             console.log(response);
        //             if (response) {
        //                 for (var i = 0; i < response.length; i++) {
        //                     vm.searchNews.push(response[i]);
        //                 }
        //                 if (response.length > 1) {
        //                     vm.showbutton = true;
        //                 } else {
        //                     vm.showbutton = false;
        //                 }
        //             }
        //         })
        //     }
        // }
        //
        // vm.title = null;
        //
        // vm.cleanFilter = function () {
        //
        //     vm.searchNews.length = 0;
        //     vm.title = null;
        // }

    }

})();