require('../models/patient');
var mongoose = require('mongoose');
var Patient = mongoose.model("Patient");
var _ = require('underscore');
exports.post = function (req, res) {

    var patient = new Patient(req.body);
    patient.save();
    res.jsonp(patient);
};


exports.get = function (req, res) {
    Patient.find().exec(function (err, patients) {
        res.jsonp(patients);
    });
};

exports.show = function(req,res){
    Patient.load(req.params.patientId, function(err,patient){
        res.jsonp(patient);
    });
};

exports.put = function(req, res){
    Patient.load(req.params.patientId, function(err,patient){

        patient = _.extend(patient, req.body);
        patient.save(function(err){
            res.jsonp(patient);
        })
    });
};

exports.delete = function(req,res){
    Patient.load(req.params.patientId, function(err,patient){
        patient.remove(function(err){
            res.jsonp(patient);
        })
    });
};

