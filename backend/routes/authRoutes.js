import express from "express";
import { loginController, registerDoctorController, registerUserController } from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register/user", registerUserController);
router.post("/register/doctor", registerDoctorController);
router.post("/login", loginController);

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;