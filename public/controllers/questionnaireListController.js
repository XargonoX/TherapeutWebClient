var app = angular.module("patientManagement");

app.controller("questionnaireListController", function($scope, $http){

    $http.get("http://localhost:3000/questionnaireAPI").success(function(response){
        $scope.existingQuestionnaire = response;
    }).error(function(err){
        $scope.error = err;
    });

    $scope.deleteQuestionnaire = function(questionnaire){
        $http.delete("http://localhost:3000/questionnaireAPI/" + questionnaire._id)
            .success(function(response){
                $scope.existingQuestionnaire.pop(questionnaire);
        })
    };
    
});



