require('../models/answeredQuestionnaire');
var mongoose = require('mongoose');
var _ = require('underscore');
var AnsweredQuestionnaire = mongoose.model("AnsweredQuestionnaire");

exports.post = function (req, res) {
    var answeredQuestionnaire = new AnsweredQuestionnaire(req.body);
    answeredQuestionnaire.save();
    res.jsonp(answeredQuestionnaire);
};

exports.get = function (req, res) {
    AnsweredQuestionnaire.find().exec(function (err, answeredQuestionnaire) {
        res.jsonp(answeredQuestionnaire);
    });
};

exports.show = function(req,res){
    AnsweredQuestionnaire.load(req.params.answeredQuestionnaireId, function(err, answeredQuestionnaire){
        res.jsonp(answeredQuestionnaire);
    });
};

exports.put = function(req, res){
    AnsweredQuestionnaire.load(req.params.answeredQuestionnaireId, function(err, answeredQuestionnaire){
        answeredQuestionnaire = _.extend(answeredQuestionnaire, req.body);
        answeredQuestionnaire.save(function(err){
            res.jsonp(answeredQuestionnaire);
        })
    });
};

exports.delete = function(req,res){
    AnsweredQuestionnaire.load(req.params.answeredQuestionnaireId, function(err, answeredQuestionnaire){
        answeredQuestionnaire.remove(function(err){
            res.jsonp(answeredQuestionnaire);
        })
    });
};

