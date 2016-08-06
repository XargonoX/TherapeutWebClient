var app = angular.module("patientManagement", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/patientList", {
        templateUrl : "patientList.html",
        controller : "patientListController"
    })
    .when("/patientDetails/:id", {
        templateUrl : "patientDetails.html",
        controller : "patientDetailsController"
    })
    .when("/patientModify", {
        templateUrl : "patientModify.html",
        controller : "patientModifyController"
    })
    .when("/patientModify/:id", {
        templateUrl : "patientModify.html",
        controller : "patientModifyController"
    })
    .when("/therapyTaskList", {
        templateUrl : "therapyTaskList.html",
        controller : "therapyTaskListController"
    })
    .when("/therapyTaskDetails", {
        templateUrl : "therapyTaskDetails.html",
        controller : "therapyTaskDetailsController"
    })
    .when("/therapyTaskDetails/:id", {
        templateUrl : "therapyTaskDetails.html",
        controller : "therapyTaskDetailsController"
    });//.otherwise({redirectTo : '/'});
});