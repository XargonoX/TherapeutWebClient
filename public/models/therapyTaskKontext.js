var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TherapyTaskKontextSchema = new Schema({
    created:{
        type : Date,
        default: Date.now
    },
                            FromTime : Date,
                            ToTime : Date,
                            location : String
});

TherapyTaskKontextSchema.statics = {
    load: function(id, cb){
        this.findOne({_id : id}).exec(cb);
    }
};

mongoose.model('TherapyTaskKontext',TherapyTaskKontextSchema);