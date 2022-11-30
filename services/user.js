import { errorHandler } from '../helpers/error.js';
import User from '../Model/User.js'

export const createUser = async ({name,email,password,username}) => {
    try {
        const user = new User();
        user.name = name
        user.email = email
        user.password = password
        user.username = username
        const userData = await user.save();
        return userData;
    } catch (error) {
        throw errorHandler(400, error.message)
    }
}


/**
* GET USER BY PROPERTY NAME
* @method : GET
* @return : user one by property
*/

export const getSingleUserByProperty = (property , value) => {
    if(property == '_id'){
        return  User.findById(value);
    }
    return  User.findOne({[property] : value})
}