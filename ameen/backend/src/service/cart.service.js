const Cart = require("../model/cart.model");

async function createcart(user){
    try {
        const cart=new Cart({user});
        const createdCart=await cart.save();
        return createdCart;
    } catch (error) {
        throw new Error(error.message);
    }
    
}
module.exports={createcart}