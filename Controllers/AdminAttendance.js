import { errorHandler } from "../helpers/error.js"
import AdminAttendance from "../Model/AdminAttendance.js"
import { addMinutes, isAfter } from 'date-fns'


export const enableAttendanceForStudent  = async (_req,res,next)=>{
    /**
    * Step 1 - Check Any Attendance Is Active Or Not
    * Step 2 - Create new Attendance for 5 mins
    */
    try {
        const attendance = await AdminAttendance.findOne({status : 'RUNNING'})
        if(attendance){
            if(isAfter(new Date() , addMinutes(new Date(attendance.createdAt) , attendance.timeLimit)) ){
                attendance.status = 'COMPLETED'
                await attendance.save()

                const adminattendance = new AdminAttendance({})
                await adminattendance.save()
                res.status(201).json({"messgae" : "Admin Activate Successfully"})
            }else{
                throw errorHandler(404 , 'Already Attendance Activate');
            } 
        }else{
            const adminattendance = new AdminAttendance({})
            await adminattendance.save()
            res.status(201).json({"messgae" : "Admin Activate Successfully"})
        }
    } catch (error) {
        next(error)
    }
}

export const disableAttendanceForStudent = async (_req,res,next) =>{
    try {
        const running = await AdminAttendance.findOne({status : 'RUNNING'})
        if(!running){
            throw errorHandler(404,'RUNNING Attendence not found')
        }else{
            running.status = 'COMPLETED'
            await running.save()
            res.status(201).json({"messgae" : "Admin Disabled Successfully"})
        }
        
    } catch (error) {
        next(error)
    }

}

