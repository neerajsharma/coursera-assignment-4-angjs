(function(){
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');
      
        // *** Set up UI states ***
        $stateProvider
      
        // Home page
        .state('home', {
          url: '/',
          templateUrl: '/src/menuapp/templates/home.template.html'
        })
        
        // Premade list page
        .state('menuCategories', {
            url: '/menu-categories',
            templateUrl: 'src/menuapp/templates/menu-categories.template.html',
            controller: 'MenuCategoriesController as menuCategoriesCtrl',
            resolve: {
                menuCategories: ['MenuDataService', function (MenuDataService) {
                    console.log('inside category resolve');
                    return MenuDataService.getAllCategories()
                        .then(function(response){
                            console.log('in then getallcategories resolve');
                            return response;
                        });                    
                }]
            }
        })
        // Premade list page
        .state('menuCategoryDetail', {
            url: '/menu-category-detail/{itemIdx}',
            templateUrl: 'src/menuapp/templates/menu-category-detail.template.html',
            controller: 'MenuCategoryDetailController as menuCategoryDetailCtrl',
           
            resolve: {
                menuCategoryDetail: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
                    console.log('inside detail resolve, itemIdx:')
                    console.log($stateParams.itemIdx);
                    return MenuDataService.getItemsForCategory($stateParams.itemIdx)
                        .then(function(response){
                            console.log('in detail then resolve' );
                            return response;
                        });                    
                }]
            }
        });
    };

})();