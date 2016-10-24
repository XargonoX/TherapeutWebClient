var app = angular.module("patientManagement");

app.controller("therapyTaskListController", function($scope, $http){

    $http.get("http://localhost:3000/therapyTaskAPI").success(function(response){
        $scope.assignedTherapyTasks = response;
    }).error(function(err){
        $scope.error = err;
    });

    $scope.deleteTherapyTask = function(therapyTask){
        $http.delete("http://localhost:3000/therapyTaskAPI/" + therapyTask._id)
            .success(function(response){
                $scope.assignedTherapyTasks.pop(therapyTask);
        })
    };
    
});



