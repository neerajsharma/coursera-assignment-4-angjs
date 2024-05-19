(function(){
    'use strict';

    angular.module('MenuApp')
        .component('menu-categories', {
        templateUrl: 'src/menuapp/templates/menu-categories.template.html',
        bindings: {
            menuCategories: '<'
        }
    });
})();