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
    $scope.selectedtherapyTaskPattern = [""];
    $http.get("http://localhost:3000/therapyTaskAPI/").success(function (response) {
        $scope.therapyTaskPatterns = response;
    });

    $scope.patient = {};
    $http.get("http://localhost:3000/patientAPI/" + $routeParams.id).success(function (response) {
        $scope.patient = response;
    });
    $scope.assignedTherapyTasks = {};
    $scope.assignedTherapyTasks.Pattern = "";
    $scope.assignedTherapyTasks.PatternID = "";
    $scope.assignedTherapyTasks.TargetContext = {};
    $scope.assignedTherapyTasks.TargetContext.FromTime = "1970-01-01T16:30:40.000Z";
    $scope.assignedTherapyTasks.TargetContext.ToTime = "1970-01-01T16:30:40.000Z";
    $scope.assignedTherapyTasks.TargetContext.location = "Zuhause";

    $scope.addTherapyTask = function(){
        $scope.assignedTherapyTasks.ActualContext = $scope.assignedTherapyTasks.TargetContext;
        $scope.patient.assignedTherapyTasks = typeof $scope.patient.assignedTherapyTasks == "undefined" ? [] : $scope.patient.assignedTherapyTasks;
        if($scope.selectedtherapyTaskPattern == ""){
             var alert = $mdDialog.alert({
                title: 'Fehler!',
                textContent: 'Es Wurde keine Therapeutische Aufgabe ausgewählt',
                ok: 'Close'
            });
            $mdDialog.show( alert ).finally(function() {
                    var alert = undefined;
                });
            return;
        }
        $scope.assignedTherapyTasks.PatternID = $scope.selectedtherapyTaskPattern;
        var Pattern = $.grep($scope.therapyTaskPatterns, function(e, x){
            return e._id == $scope.assignedTherapyTasks.PatternID;
        });
        console.log(Pattern[0].name);
        $scope.assignedTherapyTasks.Pattern = Pattern[0].name;
        $scope.patient.assignedTherapyTasks.push($scope.assignedTherapyTasks);
        $http.put("http://localhost:3000/patientAPI/" + $scope.patient._id, $scope.patient).success(function (response) {
            console.log("Task hinzugefügt (Patient gespeichert)");
            $location.url("/patientDetails/" + $routeParams.id);
        });

    };
});