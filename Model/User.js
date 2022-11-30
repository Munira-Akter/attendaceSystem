import { Schema , model } from "mongoose";

const UserSchema = Schema({
    name: {
        type : String,
        required : true,
        maxLength : 20,
    },
    email: {
        type : String,
        required : true,
        validate : {
            validator(v){
                const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)
                return result
            }
        }
    },
    password: {
        type : String,
        minLength : [6 , 'Password Must be at least 6 charecters'],
    },
    username: {
        type  : String,
        maxLength : [6, 'Username must not be greater than 6 charecters']
    },
    role: [String],
    accountStatus:{
        type : String,
        enum : ['ACTIVE' , 'PENDING' , 'SUSPENDED'],
        default : 'PENDING',
    }
    
    ,
})

export default model('User' , UserSchema)
