var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TherapieTaskPatternSchema = new Schema({
    created:{
        type : Date,
        default: Date.now
    },
    name : String,
    description : String,
    materials : [],
    feedbackForm : String

});

TherapieTaskPatternSchema.statics = {
    load: function(id, cb){
        this.findOne({_id : id}).exec(cb);
    }
};

mongoose.model('TherapieTaskPattern',TherapieTaskPatternSchema);