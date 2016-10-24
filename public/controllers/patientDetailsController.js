var app = angular.module("patientManagement");
app.controller("patientDetailsController", function ($scope, $http, $location, $routeParams, $mdDialog) {
    $scope.weekdays = [ {"name": "Montag"},
                        {"name": "Dienstag"},
                        {"name": "Mittwoch"},
                        {"name": "Donnerstag"},
                        {"name": "Freitag"},
                        {"name": "Samstag"},
                        {"name": "Sonntag"}
                        ];
    $scope.selectedtherapyTaskPatternId = [""];
    $http.get("http://localhost:3000/therapyTaskAPI/").success(function (response) {
        $scope.therapyTaskPatterns = response;
    });
    $scope.selectedQuestionnaireId = [""];
    $http.get("http://localhost:3000/questionnaireAPI").success(function(response){
        $scope.existingQuestionnaire = response;
    });
    $scope.patient = {};
    $http.get("http://localhost:3000/patientAPI/" + $routeParams.id).success(function (response) {
        $scope.patient = response;
    });
    $http.get("http://localhost:3000/answeredQuestionnaireAPI/").success(function (response) {
        $scope.AnsweredQuestionnaires = $.grep(response, function(e, x){
            return e.patientId == $routeParams.id;
        });
    });

    $scope.getTaskById = function (TaskId) {
        return $.grep($scope.therapyTaskPatterns, function(e, x){
            return e._id == TaskId;
        })[0];
    };
    $scope.getQuestionnaireById = function (questionnaireId) {
        return $.grep($scope.existingQuestionnaire, function(e, x){
            return e._id == questionnaireId;
        })[0];
    };
    $scope.assignedTherapyTasks = {};
    $scope.assignedTherapyTasks.Pattern = "";
    $scope.assignedTherapyTasks.PatternId = "";
    $scope.assignedTherapyTasks.TargetContext = {};
    $scope.assignedTherapyTasks.TargetContext.FromTime = "1970-01-01T16:30:40.000Z";
    $scope.assignedTherapyTasks.TargetContext.ToTime = "1970-01-01T16:30:40.000Z";
    $scope.assignedTherapyTasks.TargetContext.location = "Zuhause";

    $scope.addTherapyTask = function(){
        $scope.assignedTherapyTasks.ActualContext = $scope.assignedTherapyTasks.TargetContext;
        $scope.patient.assignedTherapyTasks = typeof $scope.patient.assignedTherapyTasks == "undefined" ? [] : $scope.patient.assignedTherapyTasks;

        if($scope.selectedtherapyTaskPatternId == "" ||  $scope.selectedQuestionnaireId == ""){
             var alert = $mdDialog.alert({
                title: 'Fehler!',
                textContent: 'Es Wurde entweder keine Therapeutische Aufgabe oder kein Fragebogen ausgewählt',
                ok: 'Close'
            });
            $mdDialog.show( alert ).finally(function() {
                    var alert = undefined;
                });
            return;
        }

        $scope.assignedTherapyTasks.PatternId = $scope.selectedtherapyTaskPatternId;
        $scope.assignedTherapyTasks.QuestionnaireId = $scope.selectedQuestionnaireId;
        $scope.patient.assignedTherapyTasks.push($scope.assignedTherapyTasks);
        $http.put("http://localhost:3000/patientAPI/" + $scope.patient._id, $scope.patient).success(function (response) {
            console.log("Task hinzugefügt (Questionnaire gespeichert)");
            $location.url("/patientDetails/" + $routeParams.id);
        });

    };
    $scope.removeAssignedTask = function (Task) {
        var index = $scope.patient.assignedTherapyTasks.indexOf(Task);
        $scope.patient.assignedTherapyTasks.splice(index,1);
        $http.put("http://localhost:3000/patientAPI/" + $scope.patient._id, $scope.patient).success(function (response) {
            console.log("Auf server geputtet");

        });
    }
});