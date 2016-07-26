var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TherapieTaskSchema = new Schema({
    created:{
        type : Date,
        default: Date.now
    },
    name : String,
    address : String,
    postcode : String,
    emailAddress : String,
    phoneNumber : String,
    birthdate : Date,
    patientInfo : String

});

TherapieTaskSchema.statics = {
    load: function(id, cb){
        this.findOne({_id : id}).exec(cb);
    }
};

mongoose.model('therapieTask',TherapieTaskSchema);