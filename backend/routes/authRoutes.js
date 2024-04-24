import express from "express";
import {
  loginController,
  registerDoctorController,
  registerUserController,
} from "../controllers/authController.js";
import { isDoctor, requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register/user", registerUserController);
router.post("/register/doctor", registerDoctorController);
router.post("/login", loginController);

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/doc-auth", requireSignIn, isDoctor, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
