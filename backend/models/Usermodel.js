const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema({
    username:String,
    email:String,
    password:String
},
 {   
        timestamps:true
    
})

const Usermodel = Mongoose.model("Users",userSchema);

module.exports = {Usermodel};