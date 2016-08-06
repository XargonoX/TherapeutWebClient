var app = angular.module("patientManagement");

app.controller("therapieTaskDetailsController", function($scope, $http, $location, $routeParams){
    $scope.therapieTask = {};
    $scope.material = "http://example.de";
    var id = $routeParams.id;

    if(typeof id != "undefined"){
        $http.get("http://localhost:3000/therapieTaskAPI/" + id).success(function(response) {
            $scope.therapieTask = response;
        });
    }else{
        $scope.therapieTask.materials = [];
    }

    $scope.saveTherapieTask = function () {
        if(typeof id == "undefined"){
            $http.post("http://localhost:3000/therapieTaskAPI", $scope.therapieTask)
                .success(function(response){
                    $location.url("/therapieTaskList");
                });
        }else{
            $http.put("http://localhost:3000/therapieTaskAPI/"
            + $scope.therapieTask._id, $scope.therapieTask)
                .success(function(response){
                    $location.url("/therapieTaskList");
                });
        }

    };

});