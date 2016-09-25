var app = angular.module("patientManagement");

app.controller("therapyTaskDetailsController", function($scope, $http, $location, $routeParams){
    $scope.therapyTask = {};
    $scope.material = "http://example.de";
    var id = $routeParams.id;

    if(typeof id != "undefined"){
        $http.get("http://localhost:3000/therapyTaskAPI/" + id).success(function(response) {
            $scope.therapyTask = response;
        });
    }else{
        $scope.therapyTask.materials = [];
    }

    $scope.saveTherapyTask = function () {
        if(typeof id == "undefined"){
            $http.post("http://localhost:3000/therapyTaskAPI", $scope.therapyTask)
                .success(function(response){
                    $location.url("/therapyTaskList");
                });
        }else{
            $http.put("http://localhost:3000/therapyTaskAPI/"
            + $scope.therapyTask._id, $scope.therapyTask)
                .success(function(response){
                    $location.url("/therapyTaskList");
                });
        }

    };

});