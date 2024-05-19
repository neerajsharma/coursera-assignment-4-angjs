(function () {
    'use strict';
    
    angular.module('MenuApp')
      .controller('MenuCategoriesController', MenuCategoriesController);
    
    
    MenuCategoriesController.$inject = ['menuCategories'];
    function MenuCategoriesController(menuCategories) {
      var menuCategoriesCtrl = this; 
      menuCategoriesCtrl.menuCategories = menuCategories;
    }
    
})();