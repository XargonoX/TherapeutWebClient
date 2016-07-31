var app = angular.module("patientManagement");

app.controller("therapieTaskListController", function($scope, $http){

    $http.get("http://localhost:3000/therapieTaskAPI").success(function(response){
        $scope.therapieTasks = response;
    }).error(function(err){
        $scope.error = err;
    });

    $scope.deleteTherapieTask = function(therapieTask){
        $http.delete("http://localhost:3000/therapieTaskAPI/" + therapieTask._id)
            .success(function(response){
                $scope.therapieTasks.pop(therapieTask);
        })
    };
    
});



