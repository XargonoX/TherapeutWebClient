var app = angular.module("patientManagement");

app.controller("patientListController", function($scope, $http, $location){
    $scope.patient = {};

    $scope.createPatient = function () {
        $http.post("http://localhost:3000/patientAPI", $scope.patient)
            .success(function(response){
            $location.url("/patientList");
        })
    }});