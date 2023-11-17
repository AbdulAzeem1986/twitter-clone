const Mongoose = require("mongoose");

const feedSchema = Mongoose.Schema({
    
       username:{
            type:String,
            required:[true,"Name"]},
    
        userId:{
                    type:String,
                    required:[true,"userId"]},
            
        Feed:{
                    type:String,
                    required:[true,"Please select the project"]},
       
        },
        {
            timestamps:true
    });

    const Feedmodel = Mongoose.model("Feeds", feedSchema);

    module.exports = Feedmodel;
    
    