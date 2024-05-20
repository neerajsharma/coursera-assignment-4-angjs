(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignupController', ['$scope', '$http', 'MenuService', function($scope, $http, MenuService){
        $scope.user = {};
        $scope.errorMessage = '';
        console.log('SignupController');
        $scope.submitForm = function(isValid) {

            console.log("SubmitForm")
            if (isValid) {
                const input = $scope.user.menuShortNameFav; 
                const match = input.match(/^([a-zA-Z]+)(\d+)$/);
                var short_name;
                var menu_num;
                if (match) {
                    short_name= match[1];
                    menu_num =  match[2];
                    console.log(short_name + ", " + menu_num)
                } else {
                    throw new Error("The input string does not match the expected format.");
                }
                $scope.errorMessage = 'valid message: ' + short_name + " # " + menu_num;
                var url =  "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/"+  short_name +"/menu_items/"+ menu_num+".json"
                console.log(url)
                $http.get(url)
                .then(function(response){
                    // Ensure a valid response
                if (response.status === 200 && response.data) {
                    MenuService.saveSignupPref(JSON.stringify(response.data, null, 2))
                    $scope.responseData = "Your information has been saved."
                    $scope.errorMessage = '';
                } else {
                    $scope.errorMessage = 'No such menu item exists.';
                    $scope.responseData = '';
                }
                })
                .catch(function(error) {
                    // Handle error response
                    $scope.errorMessage = 'No such menu item exists.';
                    $scope.responseData = '';
                });
                // // Assume the web service URL is 'api/validateDish'
                // var url = 'api/validateDish';
                // $http.post(url, { menuNumber: $scope.user.menuNumber })
                //     .then(function(response) {
                //         if (response.data.exists) {
                //             alert('Form submitted successfully.');
                //             // Further actions after successful validation
                //         } else {
                //             $scope.errorMessage = 'Favorite dish does not exist.';
                //         }
                //     })
                //     .catch(function(error) {
                //         $scope.errorMessage = 'Error validating dish: ' + error.message;
                //     });
            } else {
                $scope.errorMessage = 'Please fill out the form correctly.';
            }
        };
    }]);
})();
    