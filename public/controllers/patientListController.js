var app = angular.module("patientManagement");

app.controller("patientListController", function($scope, $http){

    $http.get("http://localhost:3000/patientAPI").success(function(response){
        $scope.patients = response;
    }).error(function(err){
        $scope.error = err;
    });
});