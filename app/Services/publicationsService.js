(function() {
    'use strict';

    angular
        .module('app')
        .factory('publicationsService', publicationsService);

    publicationsService.$inject = ['$q', '$http'];
    /* @ngInject */
    function publicationsService($q, $http) {

        var service = {
            data: {},
            getPublications: getPublications,
            getManual: getManual,
            createManual: createManual,
            editManual: editManual,
            deleteManual: deleteManual
        };

        //Категорії
        service.data = [
        {catId:0, title: 'Лекс'},
        {catId:1, title: 'Лекс2'},
        {catId:2, title: 'Лекс3'}
        ];

        return service;

        function getPublications() {
            var defered = $q.defer();
            var query= 'api/publications/getPublications.php';

            $http.post(query).then(function(data){
                defered.resolve(data);
            });

            return defered.promise;
        }

        function getManual(id) {
            var defered = $q.defer();
            var query = 'api/publications/getManual.php', id;

            $http.post(query, id).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        function createManual(manual) {
            var defered = $q.defer();
            var query = 'api/publications/createManual.php';
            $http.post(query, manual).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        function editManual(manual) {
            var defered = $q.defer();
            var query = 'api/publications/editManual.php', id;

            $http.post(query, manual).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }


        function deleteManual(id) {
            var defered = $q.defer();
            var query = 'api/publications/deleteManual.php', id;

            $http.post(query, id).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }



    }
})();


