const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    discountedprice:{
        type:Number,
        required:true,
    },
    discountpersent:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    brand:{
        type:String,
    },
    color:{
        type:String,
    },
    sizes:[{
        name:{type:String},
        quantity:{type:Number},
    }],
    imageUrl:{
        type:String,
    },

});
const product = mongoose.model('products',productSchema);
module.exports = product;