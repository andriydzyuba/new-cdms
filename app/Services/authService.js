(function() {
    'use strict';

    angular
        .module('app')
        .factory('authService', authService);

    authService.$inject = ['$q', '$http', '$state', '$injector', '$location'];
    /* @ngInject */
    function authService($q, $http, $state, $injector, $location) {

        var service = {
            signIn: signIn,
            signOut: signOut,
            checkAuthentication: checkAuthentication
        };

        return service;

        function signIn(username, password) {
            var defered = $q.defer();
            var query= 'api/login.php';
            // var result = {};
            var user = {};
            user.name = username;
            user.password = password;

            var authentication = {
                isAuth: false
            };

            $http.post(query, user).then(function(data){
                if (data.data) {
                    sessionStorage.setItem('authData', true);
                    authentication.isAuth = true;
                    defered.resolve(data);
                } else {
                    alert('Невірний логін або пароль!');
                }
            });

            return defered.promise;
        };

        function checkAuthentication(event, toState) {
            var authData = JSON.parse(sessionStorage.getItem('authData'));

            if (!authData && toState.dashboard) {
                event.preventDefault();
                $state.go('login');
            }
        };

        function signOut() {
            var authentication = {};
            sessionStorage.removeItem('authData');
            authentication.isAuth = false;
            authentication.id = "";
        };

    }
})();
