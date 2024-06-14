const jwt= require ("jsonwebtoken")
const SECRET_KEY="123456789"
const generateToken=(userId)=>{

    const token=jwt.sign({userId},SECRET_KEY,{expiresin:"48hrs"})
    return token;

}
const getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,SECRET_KEY)
    return decodedToken.userId;
}
module.exports ={generateToken,getUserIdFromToken}