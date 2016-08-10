var app = angular.module("patientManagement");
app.controller("patientDetailsController", function ($scope, $http, $location, $routeParams) {
    $scope.patient = {};
    //$scope.therapyTaskPatterns = {};
    $scope.selectedWeekdays = "";
    //$scope.selectedWeekday =  !selectedWeekday ? '""' : selectedWeekday;
    //$scope.selectedWeekdays = selectedWeekdays;
    $scope.selectedWeekdays = ["Montag"]; //selectedIcons
    $scope.weekdays = [ {"value": "Montag",     "label": "Montag"},   //icons
                        {"value": "Dienstag",   "label": "Dienstag"},
                        {"value": "Mittwoch",   "label": "Mittwoch"},
                        {"value": "Donnerstag", "label": "Donnerstag"},
                        {"value": "Freitag",    "label": "Freitag"},
                        {"value": "Samstag",    "label": "Samstag"},
                        {"value": "Sonntag",    "label": "Sonntag"}
                        ];

    $http.get("http://localhost:3000/therapyTaskAPI/").success(function (response) {
        $scope.therapyTaskPatterns = response;
    });
    var id = $routeParams.id;
    $http.get("http://localhost:3000/patientAPI/" + id).success(function (response) {
        $scope.patient = response;
    });
    $scope.patient.therapyTasks = [];
    $scope.patient.therapyTasks[0] = {};
    $scope.patient.therapyTasks[0].repeatTargetKontext = {};
    $scope.patient.therapyTasks[0].repeatTargetKontext.FromTime = "1970-01-01T16:30:40.000Z";
    $scope.patient.therapyTasks[0].repeatTargetKontext.ToTime = "1970-01-01T16:30:40.000Z";

});