var app = angular.module("patientManagement", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/patients", {
        templateUrl : "patientList.html",
        controller : "patientListController"
    })
    .when("/patientDetails", {
        templateUrl : "patientDetails.html",
        controller : "patientDetailsController"
    })
    .when("/patientDetails/:id", {
        templateUrl : "patientDetails.html",
        controller : "patientDetailsController"
    })
    .when("/therapieTasks", {
        templateUrl : "therapieTaskList.html",
        controller : "therapieTaskListController"
    })
    .when("/therapieTaskDetails", {
        templateUrl : "therapieTaskDetails.html",
        controller : "therapieTaskDetailsController"
    })
    .when("/therapieTaskDetails/:id", {
        templateUrl : "therapieTaskDetails.html",
        controller : "therapieTaskDetailsController"
    });//.otherwise({redirectTo : '/'});
});