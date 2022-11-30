import express from "express"
import { login, register } from "../Controllers/AuthController.js";
const router = express.Router();

router.route('/login').post(login)
router.route('/register').post(register)

export default router;
