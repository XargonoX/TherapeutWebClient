var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionnaireSchema = new Schema({
    created:{
        type : Date,
        default: Date.now
    },
    name : String,
    data : String
});

QuestionnaireSchema.statics = {
    load: function(id, cb){
        this.findOne({_id : id}).exec(cb)
    }
};

mongoose.model('Questionnaire',QuestionnaireSchema);

//module.exports = router;