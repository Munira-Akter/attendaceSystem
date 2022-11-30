import { errorHandler } from "../helpers/error.js"
import { loginService, registerService } from '../services/auth.js'

/**
* @method  : POST
* @params  : {STRING} email , password
* @process : Login Student User
*/


export const login = async (req,res,next) => {
    try {
        const {email,password} = req.body 
        const data = await loginService(email,password)
        res.status(200).json({user : data.userByEmail , token : data.token}) 
    } catch (error) {
        next(errorHandler(error.status , error.message))
    }
}

/**
* @method  : POST
* @params  : {STRING} email , password
* @process : register Student User
*/

export const register = async (req,res,next) => {
    try {
       const {name,email,username} = req.body
       const userData = await registerService(email,req.body.password,name,username)
       res.status(401).json({"message" : "User Created Successfully" , userData}) 
    } catch (error) {
        next(error)
    }
}
