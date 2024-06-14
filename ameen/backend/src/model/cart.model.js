const  mongoose  = require("mongoose");

const cartschema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    cartItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cartitems",
        required:true,
    }],
    totalprice:{
        type:Number,
        required:true,
        default:0,
    },
    totalitems:{
        type:Number,
        required:true,
        default:0,
    },
    totaldiscountedprice:{
        type:Number,
        required:true,
        default:0,
    },
    discounte:{
        type:Number,
        required:true,
        default:0,
    },

      
    
});
const Cart = mongoose.model('cart',cartschema);
module.exports = Cart;