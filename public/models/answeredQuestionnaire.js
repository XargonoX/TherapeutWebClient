var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnsweredQuestionnaireSchema = new Schema({
    created:{
        type : Date,
        default: Date.now
    },
    questionnaireId : String,
    patientId : String,
    answeredQuestions : []
});

AnsweredQuestionnaireSchema.statics = {
    load: function(id, cb){
        this.findOne({_id : id}).exec(cb)
    }
};

mongoose.model('AnsweredQuestionnaire',AnsweredQuestionnaireSchema);

//module.exports = router;