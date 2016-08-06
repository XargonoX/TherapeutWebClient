require('../models/therapieTaskPattern');
var mongoose = require('mongoose');
var _ = require('underscore');
var TherapieTaskPattern = mongoose.model("TherapieTaskPattern");
exports.post = function (req, res) {

    var therapieTask = new TherapieTaskPattern(req.body);
    therapieTask.save();
    res.jsonp(therapieTask);
};

exports.get = function (req, res) {
    TherapieTaskPattern.find().exec(function (err, therapieTasks) {
        res.jsonp(therapieTasks);
    });
};

exports.show = function(req,res){
    TherapieTaskPattern.load(req.params.therapieTaskId, function(err, therapieTask){
        res.jsonp(therapieTask);
    });
};

exports.put = function(req, res){
    TherapieTaskPattern.load(req.params.therapieTaskId, function(err, therapieTask){

        therapieTask = _.extend(therapieTask, req.body);

        therapieTask.save(function(err){
            res.jsonp(therapieTask);
        })
    });
};

exports.delete = function(req,res){
    TherapieTaskPattern.load(req.params.therapieTaskId, function(err, therapieTask){
        therapieTask.remove(function(err){
            res.jsonp(therapieTask);
        })
    });
};

