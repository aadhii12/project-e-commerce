const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    LastName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true,
        default:"CUSTUMER"
    },
 
        
    
 
   
})
const User=mongoose.model("users",userSchema);
module.exports=User;