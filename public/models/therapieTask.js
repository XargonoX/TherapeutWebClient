var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TherapieTaskSchema = new Schema({
    created:{
        type : Date,
        default: Date.now
    },
    Pattern : String,
    repeatTargetKontext : [
                        {
                            time : Date,
                            location : String

                        }
                    ],
    repeatActualState : [
                        {
                            time : Date,
                            location : String

                        }
                    ]

});

TherapieTaskSchema.statics = {
    load: function(id, cb){
        this.findOne({_id : id}).exec(cb);
    }
};

mongoose.model('TherapieTaskPattern',TherapieTaskSchema);