var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TherapieTaskSchema = new Schema({
    created:{
        type : Date,
        default: Date.now
    },
    name : String,
    description : String,
    materials : String,
    feedbackForm : String
});

TherapieTaskSchema.statics = {
    load: function(id, cb){
        this.findOne({_id : id}).exec(cb);
    }
};

mongoose.model('TherapieTask',TherapieTaskSchema);