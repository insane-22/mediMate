import express from "express";
import {
  diagnoseController,
  getSymptomsController,
  postSyptomsController,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/get-symptoms", getSymptomsController);
router.post("/post-symptoms", postSyptomsController);
router.post("/diagnose", diagnoseController);

export default router;
