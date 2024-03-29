

const mongoose = require("mongoose");
const validator = require("validator");

const clientregisterSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    number : {
        type:Number,
        required:true,
        minlength : 5,
        maxlength : 11
    }
})

const clientregister = new mongoose.model('clientregister', clientregisterSchema);
module.exports = clientregister