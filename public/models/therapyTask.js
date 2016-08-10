var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TherapyTaskPattern =require('./therapyTaskPattern');




var TherapyTaskSchema = new Schema({
    created:{
        type : Date,
        default: Date.now
    },
    Pattern : "", //ID of TherapyTaskPattern
    PatternID : [""],
    TargetContext : [
                        {
                            FromTime : Date,
                            ToTime : Date,
                            OnWeekdays : [""],
                            location : String
                        }
                    ],
    ActualContext : [
                        {
                            FromTime : Date,
                            ToTime : Date,
                            OnWeekdays : [""],
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