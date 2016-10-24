var app = angular.module("patientManagement", ["ngRoute", "ngAnimate", "ngSanitize", "ngMaterial", "ngStorage", "mgcrea.ngStrap", "mgcrea.ngStrap.timepicker", "mgcrea.ngStrap.select"]);
app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "startPage.html"
    })
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
    })
    .when("/questionnaireList", {
        templateUrl : "questionnaireList.html",
        controller : "questionnaireListController"
    })
    .when("/questionnaireModify", {
        templateUrl : "questionnaireModify.html",
        controller : "questionnaireModifyController"
    })
    .when("/questionnaireModify/:id", {
        templateUrl : "questionnaireModify.html",
        controller : "questionnaireModifyController"
    }).otherwise({redirectTo : '/'});




});