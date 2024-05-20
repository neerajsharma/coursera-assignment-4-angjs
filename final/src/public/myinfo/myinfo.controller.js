(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyinfoController', ['$scope', '$http', 'MenuService', function($scope, $http, MenuService){
        
        $scope.myinfoPrefs = MenuService.getSignupPrefs();
        console.log($scope.myinfoPrefs);
        if ($scope.myinfoPrefs == null) {
            $scope.showprefs = false;
        } else {
            $scope.showprefs = true;
        }
        
        //{"firstName": "ffff", "lastName": "sdsd", "email": "sdf@dfdf.com", "phone": "2343244", "short_name": "L2"};  
    }]);
    
   
    
    })();