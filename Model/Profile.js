import { Schema , model } from "mongoose";

const ProfileSchema = Schema({
    fullName: String,
    phone: String,
    avatar: String,
    user : {
        type :  Schema.Types.ObjectId,
        ref  : 'User',
    },
})

export default Profile = model('Profile' , ProfileSchema)
/I