(function () {
    'use strict';
    
    angular.module('MenuApp')
      .controller('MenuCategoryDetailController', MenuCategoryDetailController);
    
    
    MenuCategoryDetailController.$inject = ['menuCategoryDetail'];
    function MenuCategoryDetailController(menuCategoryDetail) {
      var menuCategoryDetailCtrl = this; 
      console.log('menuCategoryDetailCtrl.menuCategoryDetail: ', menuCategoryDetailCtrl.menuCategoryDetail);
      menuCategoryDetailCtrl.menuCategoryDetail = menuCategoryDetail;
    }
    
})();