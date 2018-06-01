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
            getNewsByCategory: getNewsByCategory,
            getInfoByCategory: getInfoByCategory,
            getLastNews: getLastNews,
            getArticle: getArticle,
            createArticle: createArticle,
            editArticle: editArticle,
            deleteArticle: deleteArticle,
            searchNews: searchNews
        };

        //Категорії
        service.data = [
        {catId:0, title: 'Лекс'},
        {catId:1, title: 'Лекс2'},
        {catId:2, title: 'Лекс3'}
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

        function getLastNews() {
            var defered = $q.defer();
            var query = apiUrl + '/api/news/last';

            $http.get(query).then(function(data){
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


