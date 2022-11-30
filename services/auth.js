import { errorHandler } from "../helpers/error.js";
import { generateHassPass } from "../helpers/helpers.js";
import { createUser, getSingleUserByProperty } from "./user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


export const registerService = async (email,pass,name,username) => {
      const userByEmail =  await getSingleUserByProperty('email' ,  email)
       if(userByEmail){
         throw errorHandler(401, 'Email Already Exits')
       }
       const hasspass =  await generateHassPass(pass)
       const user =  await createUser({name , email , password : hasspass , username});
       delete user._doc.password
       return user._doc 
}


export const loginService = async (email,password,) => {
    const userByEmail = await getSingleUserByProperty('email' , email)
  
    if(!userByEmail){
        next(errorHandler(401,'Invaild Credentials'))
    }
    const hasPassCheck = await bcrypt.compare(password , userByEmail.password)
    if(!hasPassCheck){
        next(errorHandler(401,'Invaild Credentials pass'))
    }
    delete userByEmail.password;
    // token generate
    const token = jwt.sign({userByEmail} , process.env.JWT_SCRECT , {
        expiresIn: "1h",
        });

    return {
        'token' : token,
        'userByEmail' :  userByEmail
    };
}