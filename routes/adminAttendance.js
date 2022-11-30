import express from 'express'
import { enableAttendanceForStudent } from '../Controllers/AdminAttendance.js';
const router  = express.Router()


router.use('/enable' , enableAttendanceForStudent )


export default router;