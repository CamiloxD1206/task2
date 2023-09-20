import jwt from'jsonwebtoken'
import {tokenSecreto} from "../config.js";
export function createAccesToken(playload){
    return new Promise((resolve, reject) => {
        jwt.sign(
            playload,
               tokenSecreto,
               {
                 expiresIn:"1d",
               },
               (err,token)=>{
                 if(err)reject(err)
                 resolve(token)
             
               });
    })
    }

