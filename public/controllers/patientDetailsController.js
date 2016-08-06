var app = angular.module("patientManagement");

app.controller("patientDetailsController", function($scope, $http, $location, $routeParams){
    $scope.patient = {};
    var id = $routeParams.id;
    console.log("id: " + id);
    $http.get("http://localhost:3000/patientAPI/" + id).success(function(response) {
        $scope.patient = response;
    });
});