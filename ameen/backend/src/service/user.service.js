

const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const jwtprovider = require("../configure/jwtProvider")


const createUser=async(userData)=>{
    try {
        let {firstname,lastname,email,password}=userData;

        const isUserExist = await User.findOne({email});
        if(isUserExist){
            throw new Error("user already exist:",email);
        }
        password = await bcrypt.hash(password,8);
        const user = await User.create({firstname,lastname,email,password});
        console.log("created user",user)
        return user;
    } catch (error) {
        throw new Error(error.message)
        
    }
}
const findUserById = async(userId)=>{
    try {
        const user = await user.findById(userId);
        if(!user){
            throw new Error("user not found with id:",userId)
        }
        
    } catch (error) {
        throw new Error(error.message)

    }
}
    const getUserByEmail = async(email)=>{
        try {
            const user = await user.findone({email});
            if(!user){
                throw new Error("user not found with email:",email)
            }
            
        } catch (error) {
            throw new Error(error.message)
    
        }
}
const getUserProfileByToken = async(token)=>{
    try {
        const userId = jwtprovider.getUserIdFromToken(token);
        const user = await findUserById(userId);
        if(!user){
            throw new Error("user not found with id:",userId)
        }
        return user;
        } catch (error) {
        
    }
    throw new Error(erro.message)
}
 const getAllUsers = async()=>{
    try {
        const users=await User.find();
        return users;
    } catch (error) {
       throw new Error(error.message) 
    }
 }
module.exports={createUser ,findUserById,getUserByEmail,getUserProfileByToken,getAllUsers}