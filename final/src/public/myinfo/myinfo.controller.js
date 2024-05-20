(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyinfoController', ['$scope', '$http', 'MenuService', function($scope, $http, MenuService){
        
        $scope.myinfoPrefs = MenuService.getSignupPrefs();
        //{"firstName": "ffff", "lastName": "sdsd", "email": "sdf@dfdf.com", "phone": "2343244", "short_name": "L2"};  
    }]);
    
   
    
    })();