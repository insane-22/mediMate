import express from "express";
import { loginController, registerDoctorController, registerUserController } from "../controllers/authController.js";
const router = express.Router();

router.post("/register/user", registerUserController);
router.post("/register/doctor", registerDoctorController);
router.post("/login", loginController);


export default router;