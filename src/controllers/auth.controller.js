import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import {createAccesToken} from "../libs/jwt.js"


export const register=async(req,res)=>{
  const{email,password,username}=req.body;


try{

   const passwordHash= await bcrypt.hash(password,10)
    const newUser=new User({
        username,
        password:passwordHash,
        email,
    })
   const userSaved=await newUser.save();
   const token =await createAccesToken({id:userSaved._id});
   res.cookie("token",token)
   res.json({id:userSaved._id,
username:userSaved.username,
  email:userSaved.email,
createAt:userSaved.createdAt,
updateAp:userSaved.updatedAt,

});
    
}catch(error){
    res.status(500).json({message:error.message});

}
 
}
//----------------------------------------------------------------
export const login=async(req,res)=>{
  const{email,password}=req.body;


try{
const userFound=await User.findOne({email});

if(!userFound) return res.status(400).json({message:"user not found"});
 const isMatch = await bcrypt.compare(password,userFound.password);
 if(!isMatch)return res.status(400).json({mesage:"incorrect password"});
const token =await createAccesToken({id:userFound._id});
res.cookie("token",token)
 res.json({id:userFound._id,
username:userFound.username,
 email:userFound.email,
createAt:userFound.createdAt,
updateAp:userFound.updatedAt,
});
    }catch(error){
    res.status(500).json({message:error.message});

}
 
}
//--------------------------------------------------------------
export const logout=(req,res)=>{
  res.cookie('token',"",{
    expires:new Date(0)
  })
  return res.sendStatus(200);
 
}
//----------------------------------------------
export const profile=async(req,res)=>{
const userFound= await User.findById(req.user.id)
if(!userFound) return res.status(400).json({message:"user not found"});
return res.json({id:userFound._id,
username:userFound.username,
email:userFound.email,
createAt:userFound.createdAt,
updateAp:userFound.updatedAt,
})}
