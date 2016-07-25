var app = angular.module("patientManagement", ["ngRoute"]);
var jade = require('jade-compiler');
var opts = { pretty: true };
var patientListHTML;
jade.fromFile('./patientList.jade', opts, function(err, html) {
    console.log(html);
    patientListHTML = html;
});
app.config(function ($routeProvider) {
    $routeProvider
    .when("#/patientList", {
        templateUrl : patientListHTML,
        controller : "patientListController"
    }).otherwise({redirectTo : '/'});
});