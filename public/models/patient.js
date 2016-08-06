var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var express = require('express');
//var router = express.Router();

var PatientSchema = new Schema({
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

PatientSchema.statics = {
    load: function(id, cb){
        this.findOne({_id : id}).exec(cb)
    }
};

mongoose.model('Patient',PatientSchema);

//module.exports = router;