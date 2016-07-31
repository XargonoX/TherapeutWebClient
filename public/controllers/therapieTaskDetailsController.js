var app = angular.module("patientManagement");

app.controller("therapieTaskDetailsController", function($scope, $http, $location, $routeParams){
    $scope.therapieTask = {};
    var id = $routeParams.id;
    console.log("id: " + id);
    $http.get("http://localhost:3000/therapieTaskAPI/" + id).success(function(response) {
        $scope.therapieTask = response;
    });

    $scope.saveTherapieTask = function () {
        if(typeof id == "undefined"){
            $http.post("http://localhost:3000/therapieTaskAPI", $scope.therapieTask)
                .success(function(response){
                    console.log("Neuer therapieTask angelegt");
                    $location.url("/therapieTaskList");
                });
        }else{
            $http.put("http://localhost:3000/therapieTaskAPI/" + $scope.therapieTask._id, $scope.therapieTask)
                .success(function(response){
                    console.log("Neuer therapieTask angelegt");
                    $location.url("/therapieTaskList")
                });
        }

    }

});