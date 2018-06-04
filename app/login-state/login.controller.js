(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['authService', '$location'];

    function LoginController(authService, $location) {
        var vm = this;

        vm.signIn = function() {

            var user = {};

            user.name = vm.name;
            user.password = vm.password;

            authService.signIn(user.name, user.password).then(function(data){
                if (data.data) {
                    $location.path('/dashboard');
                }
            })
        }

    }

})();
