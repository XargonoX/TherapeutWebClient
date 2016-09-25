require('../models/therapyTaskPattern');
var mongoose = require('mongoose');
var _ = require('underscore');
var TherapyTaskPattern = mongoose.model("TherapyTaskPattern");

exports.post = function (req, res) {

    var therapyTask = new TherapyTaskPattern(req.body);
    therapyTask.save();
    res.jsonp(therapyTask);
};

exports.get = function (req, res) {
    TherapyTaskPattern.find().exec(function (err, therapyTasks) {
        res.jsonp(therapyTasks);
    });
};

exports.show = function(req,res){
    TherapyTaskPattern.load(req.params.therapyTaskId, function(err, therapyTask){
        res.jsonp(therapyTask);
    });
};

exports.put = function(req, res){
    TherapyTaskPattern.load(req.params.therapyTaskId, function(err, therapyTask){

        therapyTask = _.extend(therapyTask, req.body);

        therapyTask.save(function(err){
            res.jsonp(therapyTask);
        })
    });
};

exports.delete = function(req,res){
    TherapyTaskPattern.load(req.params.therapyTaskId, function(err, therapyTask){
        therapyTask.remove(function(err){
            res.jsonp(therapyTask);
        })
    });
};

