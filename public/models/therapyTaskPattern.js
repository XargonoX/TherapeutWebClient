var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TherapyTaskPatternSchema = new Schema({
    created:{
        type : Date,
        default: Date.now
    },
    name : String,
    description : String,
    materials : [],
    feedbackForm : String

});

TherapyTaskPatternSchema.statics = {
    load: function(id, cb){
        this.findOne({_id : id}).exec(cb);
    }
};

mongoose.model('TherapyTaskPattern',TherapyTaskPatternSchema);