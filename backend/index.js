const express = require ("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = new express;

app.use(bodyparser.json());
app.use(cors());

mongoose.connect("mongodb+srv://abdulazeem:abdulazeem86@cluster0.qch7vjx.mongodb.net/tweets?retryWrites=true&w=majority",{useNewUrlParser:true})

app.listen(3001, (err)=>{
    if (err) {
        console.log("Some error occured");
    } else {
        console.log("The server is running");
    }
});