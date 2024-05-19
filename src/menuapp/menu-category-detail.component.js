(function(){
    'use strict';

    angular.module('MenuApp')
        .component('menu-category-detail', {
        templateUrl: 'src/menuapp/templates/menu-category-detail.template.html',
        bindings: {
            menuCategories: '<'
        }
    });
})();