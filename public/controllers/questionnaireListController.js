var app = angular.module("patientManagement");

app.controller("questionnaireListController", function($scope, $http, $localStorage){

    $http.get("http://localhost:3000/questionnaireAPI").success(function(response){
        $scope.existingQuestionnaire = response;
        $localStorage.existingQuestionnaire = $scope.existingQuestionnaire;
    }).error(function(err){
        $scope.error = err;
    });

    $scope.deleteQuestionnaire = function(questionnaire){
        $http.delete("http://localhost:3000/questionnaireAPI/" + questionnaire._id)
            .success(function(response){
                var index = $scope.existingQuestionnaire.indexOf(questionnaire);
                $scope.existingQuestionnaire.splice(index,1);
        })
    };
    
});



