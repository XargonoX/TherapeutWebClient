require('../models/questionnaire');
var mongoose = require('mongoose');
var _ = require('underscore');
var Questionnaire = mongoose.model("Questionnaire");

exports.post = function (req, res) {
    var questionnaire = new Questionnaire(req.body);
    questionnaire.save();
    res.jsonp(questionnaire);
    console.log("questionnaire gespeichert")
};

exports.get = function (req, res) {
    Questionnaire.find().exec(function (err, questionnaire) {
        res.jsonp(questionnaire);
    });
};

exports.show = function(req,res){
    Questionnaire.load(req.params.questionnaireId, function(err, questionnaire){
        res.jsonp(questionnaire);
    });
};

exports.put = function(req, res){
    Questionnaire.load(req.params.questionnaireId, function(err, questionnaire){
        questionnaire = _.extend(questionnaire, req.body);
        questionnaire.save(function(err){
            res.jsonp(questionnaire);
        })
    });
};

exports.delete = function(req,res){
    Questionnaire.load(req.params.questionaireId, function(err, questionnaire){
        questionnaire.remove(function(err){
            res.jsonp(questionnaire);
        })
    });
};

