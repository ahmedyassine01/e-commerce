
const jwt=require("jsonwebtoken");
const config=require("config")
const secret=config.get("secret")
const User=require("../modules/user");

const verifyAuth=async(req,res,next)=>{
    const token=req.headers.authorization
    try {
        const decoded=await jwt.verify(token,secret)
        if (!decoded){return res.status(401).json("not authorized")}
        const user=await User.findById(decoded._id)
        if(!user){
            res.status(401).json("not authorized");

        }
        else{
            req.user=user
            next()
        }
    } catch (error) {
        res.status(401).json({msg:error.message})
    }
};
module.exports=verifyAuth