var app = angular.module("patientManagement");

app.controller("patientModifyController", function($scope, $http, $location, $routeParams){
    $scope.patient = {};
    var id = $routeParams.id;
    console.log("id: " + id);
    $http.get("http://localhost:3000/patientAPI/" + id).success(function(response) {
        $scope.patient = response;
    });

    $scope.savePatient = function () {
        if(typeof id == "undefined"){
            $http.post("http://localhost:3000/patientAPI", $scope.patient)
                .success(function(response){
                    console.log("Neuer Patient angelegt");
                    $location.url("/patientList");
                });
        }else{
            $http.put("http://localhost:3000/patientAPI/" + $scope.patient._id, $scope.patient)
                .success(function(response){
                    console.log("Neuer Patient angelegt");
                    $location.url("/patientList")
                });
        }

    }

});