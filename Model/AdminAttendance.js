import { Schema , model } from "mongoose";
const AdminSchema = Schema({
    timeLimit: {
        type: Number,
        required: true,
        max: 30,
        min: 1,
        default: 5,
    },
    status: {
        type: String,
        required: true,
        enum: ['RUNNING', 'COMPLETED'],
        default: 'RUNNING',
    }
},{timestamps: true})

export default model('AdminAttendance' , AdminSchema)
