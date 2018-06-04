'use strict';

// Declare app level module which depends on views, and components
angular
    .module('app', [
      'ui.router',
      'ui.router.state.events',
      'ui.bootstrap',
      'ngCropper',
      'summernote',
      'ngStorage'
    ])

    .config(['$urlRouterProvider', '$locationProvider',
        function($urlRouterProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
           $urlRouterProvider.otherwise("home");
    }])

    .run(['$rootScope', '$state', '$stateParams', 'authService', function ($rootScope, $state, $stateParams, authService) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.user = null;
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            authService.checkAuthentication(event, toState);
        });
    }]);
