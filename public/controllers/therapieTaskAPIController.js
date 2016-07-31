require('../models/therapieTask');
var mongoose = require('mongoose');
var _ = require('underscore');
var TherapieTask = mongoose.model("TherapieTask");
exports.post = function (req, res) {

    var therapieTask = new TherapieTask(req.body);
    therapieTask.save();
    res.jsonp(therapieTask);
};

exports.get = function (req, res) {
    TherapieTask.find().exec(function (err, therapieTasks) {
        res.jsonp(therapieTasks);
    });
};

exports.show = function(req,res){
    TherapieTask.load(req.params.therapieTaskId, function(err,therapieTask){
        res.jsonp(therapieTask);
    });
};

exports.put = function(req, res){
    TherapieTask.load(req.params.therapieTaskId, function(err,therapieTask){

        therapieTask = _.extend(therapieTask, req.body);

        therapieTask.save(function(err){
            res.jsonp(therapieTask);
        })
    });
};

exports.delete = function(req,res){
    TherapieTask.load(req.params.therapieTaskId, function(err,therapieTask){
        therapieTask.remove(function(err){
            res.jsonp(therapieTask);
        })
    });
};

