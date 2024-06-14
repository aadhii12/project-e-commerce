const mongoose = require("mongoose");

const cartitemsschema = new mongoose.Schema({
    cart:{
        type:mongoose.Schema.ObjectId,
        ref:'cart',
        required:true,
    },
    product:{
        type:mongoose.Schema.ObjectId,
        ref:'products',
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        default:1,
    },
    price:{
        type:Number,
        required:true,

    },
    discounted:{
        type:Number,
        required:true,
    },
    userid:{
        type:mongoose.Schema.ObjectId,
        ref:'users',
        required:true,
    },
});

const cartitems = mongoose.model('cartitems',cartitemsschema);
module.exports =cartitems;