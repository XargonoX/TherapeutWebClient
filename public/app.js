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
    .when("/therapieTaskList", {
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