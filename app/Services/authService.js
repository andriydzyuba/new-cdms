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

        // var authentication = {
        //     isAuth: false
        // };

        // var setAuth = function(authData) {
        //     authentication.isAuth = true;
        // };

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
                console.log(data.data);
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

            console.log(authData);
            console.log(toState.dashboard);

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


