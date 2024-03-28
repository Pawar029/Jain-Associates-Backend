const express = require("express");
const mongoose = require('mongoose');
// require("./db/conn");
const clientregister = require("./models/registerClient");
const slab = require("./models/slab")
const app = express();

// const DB = 'mongodb+srv://SunilPawar:SunilPawar0123@jainandassociate.0jchs.mongodb.net/jain?retryWrites=true&w=majority&appName=JainAndAssociates';
const DB = 'mongodb://SunilPawar:SunilPawar0123@jainandassociates-shard-00-00.0jchs.mongodb.net:27017,jainandassociates-shard-00-01.0jchs.mongodb.net:27017,jainandassociates-shard-00-02.0jchs.mongodb.net:27017/jain_associate?ssl=true&replicaSet=atlas-5y42xk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=JainAndAssociates';

mongoose.connect(DB, {
    useUnifiedTopology:true,
}).then(() => {
    console.log(`Connection Done`);
}).catch((err) => console.log(`Connection  Not Done`));
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/",(req,res) => {
    res.send("hello from Anuj and pritam");    
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    const user = new clientregister(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.send("error");
    })
    res.send("hello data is pushed");
})
app.post("/slab",(req,res)=>{
    console.log(req.body);
    const user = new slab(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.send("error");
    })
    res.send("hello data is pushed");
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})