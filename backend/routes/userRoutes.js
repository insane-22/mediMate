import express from "express";
import { getSymptomsController } from "../controllers/userController.js";
const router = express.Router();

router.get("/get-symptoms", getSymptomsController);

export default router;
