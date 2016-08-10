var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TherapyTaskPattern =require('./therapyTaskPattern');




var TherapyTaskSchema = new Schema({
    created:{
        type : Date,
        default: Date.now
    },
    Pattern : ["TherapyTaskPattern"],
    repeatTargetKontext : [
                        {
                            FromTime : Date,
                            ToTime : Date,
                            location : String
                        }
                    ],
    repeatActualState : [
                        {
                            FromTime : Date,
                            ToTime : Date,
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