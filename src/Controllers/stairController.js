
const stair = require("../models/stair");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

function pushStairController(req, res) {
    console.log(req.body);
    const user = new stair(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.send("error1");
    })
}

async function getStairController(req,res) {
    // console.log("hello");
    try{
        const data = await stair.find();
        res.send(data);
    }catch(e){
        res.send("show error");
        res.send(e);
        res.status(500).send("Internal Server Error");
    }       
}

async function deleteStairController(req,res) {

    try{
        const deleteddata = await stair.findByIdAndDelete(req.params.id);
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

async function updateStairController(req,res) {
    try{
        const updateddata = await stair.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!req.params.id){
            return res.status(400).send();
        }
        res.status(200).send(updateddata);
    }catch(e){
        res.send("show error");
        res.status(400).send(e);
    } 
}

module.exports.pushStairController = pushStairController;
module.exports.getStairController = getStairController;
module.exports.deleteStairController = deleteStairController;
module.exports.updateStairController = updateStairController;





