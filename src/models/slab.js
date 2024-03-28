const mongoose = require("mongoose");
const validator = require("validator");

const slabSchema = new mongoose.Schema({
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

const slab = new mongoose.model('slab', slabSchema);
module.exports = slab