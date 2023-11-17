const express = require ("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const {Usermodel}= require("./models/Usermodel")

const app = new express;

app.use(bodyparser.json());
app.use(cors());

mongoose.connect("mongodb+srv://abdulazeem:abdulazeem86@cluster0.qch7vjx.mongodb.net/tweets?retryWrites=true&w=majority",{useNewUrlParser:true})

//Api to Signin
app.post("/signin", async (req, res) => {

    try {
        let email = req.body.email;
        let password = req.body.password;
        
        const result = await Usermodel.findOne({ email: email })
        
        if (!result) throw ('username not found')

        //Comparing given password & encrypted password in DB
        const passwordValidator = bcrypt.compareSync(password, result.password)

        if (!passwordValidator) throw ({ "status": "failed", "data": "invalid password" })

        // Token Authentication-Generate-To be included in signin
       const token = jwt.sign({ "email": email, "id": result._id }, "signin-token", { expiresIn: "1d" })
       if(!token) throw ("Token not generated")
      console.log(result)
      console.log(token)
       res.send({ "status": "success", "data":result, "token":token })

    }
     
    catch (error) {
        console.log(error);
        res.send(error);
    }
});



//Api to add a user
app.post("/adduser", (req, res) => {

    
    // jwt.verify(req.body.token,"signin-token",(err,decoded)=>{
    //     if(decoded && decoded.email){
    //    //  console.log("authorised")

            var data = {
                username: req.body.username,
                email: req.body.email,
                password:req.body.password
                }
        
            var user = new Usermodel(data);
            user.save().then(()=>{
                res.json({ "Status": "User added successfully", "Data": data })
                console.log(user);
                console.log(data);
            })
            .catch((err)=>{
                res.json({ "Status": "Error", "Error": err })
                console.log(err);
            })

});



app.listen(3001, (err)=>{
    if (err) {
        console.log("Some error occured");
    } else {
        console.log("The server is running");
    }
});