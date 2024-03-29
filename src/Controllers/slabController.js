
const slab = require("../models/slab");
const express = require("express");
const app = express();
app.use(express.json());


function pushSlabController(req, res) {

    const user = new slab(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.send("error1");
    })
}

async function getSlabController(req,res) {
    console.log("hello");
    try{
        const data = await slab.find();
        res.send(data);
        console.log(data);
    }catch(e){
        res.send("show error");
        res.send(e);
        res.status(500).send("Internal Server Error");
    } 
  
    // res.end("ended");
}

module.exports.pushSlabController = pushSlabController;
module.exports.getSlabController = getSlabController;
