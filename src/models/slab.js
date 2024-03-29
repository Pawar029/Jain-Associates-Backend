const mongoose = require("mongoose");
const validator = require("validator");

const slabSchema = new mongoose.Schema({

    slab_name : {
        type:String,
        required:true
    },
    slab_type : {
        type:String,
        required:true
    },
    noOfSameSlab : {
        type:Number,
        required:true
    },
    noOfCement : {
        type:Number,
        required:true,
    },
    volSand : {
        type:Number,
        required:true,
    },
    volAggregate : {
        type:Number,
        required:true,
    },

})

const slab = new mongoose.model('slab', slabSchema);
module.exports = slab