import express from "express";
import { createOrUpdateUser, getUser } from "../controllers/userController.js";
const router = express.Router();

router.post("/save", createOrUpdateUser);
router.get("/:username", getUser);

export default router;
