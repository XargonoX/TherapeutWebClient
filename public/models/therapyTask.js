var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TherapyTaskSchema = new Schema({
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

TherapyTaskSchema.statics = {
    load: function(id, cb){
        this.findOne({_id : id}).exec(cb);
    }
};

mongoose.model('TherapyTask',TherapyTaskSchema);