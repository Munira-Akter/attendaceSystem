import { Schema , model } from "mongoose";
const StudenAttendanceSchema = Schema({
    user : {
        type :  Schema.Types.ObjectId,
        ref  : 'User',
    },
    adminattendance : {
        type :  Schema.Types.ObjectId,
        ref  : 'AdminAttendance',
    },
},{timestamps : true})

export default  model('StudentAttendance' , StudenAttendanceSchema)
