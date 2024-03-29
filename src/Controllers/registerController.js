
const clientregister = require("../models/registerClient");
const express = require("express");
const app = express();
app.use(express.json());


function pushRegisterController(req, res) {

    const user = new clientregister(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.send("error");
    })
}

async function getRegisteredController(req,res) {
    console.log("hello");
    try{
        const data = await clientregister.find();
        res.send(data);
        console.log(data);
    }catch(e){
        res.send("show error");
        res.send(e);
    }
 
  
}

module.exports.pushRegisterController = pushRegisterController;
module.exports.getRegisteredController = getRegisteredController;
