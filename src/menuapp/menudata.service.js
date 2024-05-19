(function(){
    'use strict';

    angular.module('MenuApp')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', 'https://coursera-jhu-default-rtdb.firebaseio.com');

    MenuDataService.$inject = ['$http', 'ApiBasePath'];

    function MenuDataService($http, ApiBasePath){
        var service = this;
        service.getAllCategories = function(){
            console.log('in getAllCategories service()');            
            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function(response){
                console.log('data: ', response.data);
                return response.data;
            });
        };

        service.getItemsForCategory = function(itemIdx){
            console.log('in getItemsForCategory()' );
            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function(response){
                console.log('data: ', response.data + 'itemIdx:'+ itemIdx);;
                const idx = Number(itemIdx)
                console.log('item: ', response.data[idx])
                return response.data[idx];
            });
        };
    };
})();