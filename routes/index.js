import express from 'express'
const router = express.Router()
import Studentrouter from './StudentRoute.js';
import adminAttendance from './adminAttendance.js';
import studentAttendance from './studentAttendance.js';

 
// All Router
router.use("/api/v1/user" , Studentrouter);
router.use("/api/v1/admin-attendance" , adminAttendance);
router.use("/api/v1/student-attendance" , studentAttendance);


export default router;

