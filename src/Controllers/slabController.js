
const slab = require("../models/slab");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

function pushSlabController(req, res) {

    const user = new slab(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.send("error1");
    })
}

async function getSlabController(req,res) {
    // console.log("hello");
    try{
        const data = await slab.find();
        res.send(data);
    }catch(e){
        res.send("show error");
        res.send(e);
        res.status(500).send("Internal Server Error");
    }       
}

async function deleteSlabController(req,res) {
    // await slab.deleteMany({ });

    try{
        const deleteddata = await slab.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.status(200).send(deleteddata);
        console.log(deleteddata);
    }catch(e){
        res.send("show error");
        res.status(500).send(e);
    } 
}

async function updateSlabController(req,res) {
    try{
        const updateddata = await slab.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!req.params.id){
            return res.status(400).send();
        }
        res.status(200).send(updateddata);
    }catch(e){
        res.send("show error");
        res.status(400).send(e);
    } 
}

module.exports.pushSlabController = pushSlabController;
module.exports.getSlabController = getSlabController;
module.exports.deleteSlabController = deleteSlabController;
module.exports.updateSlabController = updateSlabController;





