import jwt from'jsonwebtoken'
import { tokenSecreto } from '../config.js';
export const authRequired=(req,res,next)=>{
    const {token}= req.cookies;
if(!token)return res.status(401).json({message:"no token,no pasa"})
jwt.verify(token, tokenSecreto,(err,user)=>{
    if(err) return res.status(403).json({message:"invalid token"})
    console.log(user)

    req.user=user;
    next();
})


}