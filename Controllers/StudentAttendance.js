import { addMinutes, isAfter } from "date-fns";
import { errorHandler } from "../helpers/error";
import AdminAttendance from "../Model/AdminAttendance";
import StudentAttendance from "../Model/StudentAttendance";
import StudentAttendance from "../Model/StudentAttendance";

export const getAttendance = async (req,res,next) => {
    const {id} = req.params;
    try {
        /**
		 * Step 1 - Find admin attendance by id
		 * Step 2 - Check if it is running or not
		 * Step 3 - Check already register or not
		 * Step 4 - Register entry
		 */
        const adminattendance = await AdminAttendance.findById(id);
        if(!adminattendance){
            throw errorHandler(404, 'Not Found Any Open Attendace Portal ')
        }else{
            if(adminattendance.status != 'RUNNING'){
                throw errorHandler(404, 'There have no Open Attendace Portal ')
            }else{
                if(isAfter(new Date() , addMinutes(new Date(adminattendance.createdAt , adminattendance.timeLimit)))){
                    adminattendance.status = 'COMPLETED'
                    await adminattendance.save()
                    throw errorHandler(404, 'Attandce Time Limit Cross')
                }else{
                    const student = await StudentAttendance.findOne({
                        user : req.user._id,
                        adminattendance : id
                    })
                    if(student){
                        throw errorHandler(401, 'Bad Request you already attendnace this Portal')
                    }else{
                        const StudentAttendance = new StudentAttendance()
                        StudentAttendance.user = req.user._id
                        StudentAttendance.adminattendance = id
                        await StudentAttendance.save()

                        res.status(201).json({"message" : "Attendace Placed Successfully"})
                    }
                }
            }
        }

    } catch (error) {
        next(error)
    }
}