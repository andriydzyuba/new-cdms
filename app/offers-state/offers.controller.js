(function () {
    'use strict';
    angular
        .module('app')
        .controller('OffersController', OffersController);

    OffersController.$inject = ['$rootScope'];

    function OffersController($rootScope) {
        var vm = this;
        vm.mainOffer = "Навчальна програма, розроблена фахівцями ГО «Центр досліджень місцевого самоврядування», є першою " +
            "комплексною програмою підготовки голів ОСББ і працівників житлово-комунального господарства в Західній Україні. " +
            "Її пілотне впровадження відбулось у Львові, в рамках  проекту «Доопрацювання навчальної програми «Управитель " +
            "житловою нерухомістю» і пілотне впровадження в містах Західної України».";
        vm.promoOffer = ['content/images/logo.png', 'content/images/logo.png', 'content/images/logo.png'];

    }
})();


