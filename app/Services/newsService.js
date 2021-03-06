(function() {
    'use strict';

    angular
        .module('app')
        .factory('newsService', newsService);

    newsService.$inject = ['$q', '$http'];
    /* @ngInject */
    function newsService($q, $http) {

        var service = {
            data: {},
            getNews: getNews,
            getLastNews: getLastNews,
            getNewsByCategory: getNewsByCategory,
            getInfoByCategory: getInfoByCategory,
            getArticle: getArticle,
            createArticle: createArticle,
            editArticle: editArticle,
            deleteArticle: deleteArticle,
            searchNews: searchNews
        };

        //Категорії
        service.data = [
            {catId:0, title: 'Місцеве самоврядування і громадськість'},
            {catId:1, title: 'Управління житловою нерухомістю'},
            {catId:2, title: 'Муніципальне управління'}
        ];

        return service;

        function getNews() {
            var defered = $q.defer();
            var query= 'api/news/getNews.php';

            $http.post(query).then(function(data){
                defered.resolve(data);
            });

            return defered.promise;
        }

        function getLastNews() {
            var defered = $q.defer();
            var query= 'api/news/getLastNews.php';

            $http.post(query).then(function(data){
                defered.resolve(data);
            });

            return defered.promise;
        }

        function getNewsByCategory(catId) {
            var defered = $q.defer();
            var query = 'api/news/getNewsByCategory.php', catId;

            $http.post(query, catId).then(function(data){
                defered.resolve(data);
            });

            return defered.promise;
        }

        function getInfoByCategory(catId) {
            var defered = $q.defer();
            var query = 'api/news/getInfoByCategory.php', catId;

            $http.post(query, catId).then(function(data){
                defered.resolve(data);
            });

            return defered.promise;
        }

        function getArticle(id) {
            var defered = $q.defer();
            var query = 'api/news/getArticle.php', id;

            $http.post(query, id).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        function createArticle(article) {
            var defered = $q.defer();
            var query = 'api/news/createArticle.php';
            $http.post(query, article).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        function editArticle(article) {
            var defered = $q.defer();
            var query = 'api/news/editArticle.php', id;

            $http.post(query, article).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }


        function deleteArticle(id) {
            var defered = $q.defer();
            var query = 'api/news/deleteArticle.php', id;

            $http.post(query, id).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        function searchNews(params) {
            var defered = $q.defer();
            var query = 'api/news/searchNews.php', params;

            $http.post(query, params).then(function(data){
                defered.resolve(data);
            });
            return defered.promise
        };

    }
})();
