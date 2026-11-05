import express from "express";
import {
  createOrUpdateTechnologies,
  getTechnologies,
} from "../controller/technologies.controller.js";
import { verifyToken } from "../middleware/verifyToken.middleware.js";
import { verifyAdmin } from "../middleware/verifyAdmin.middleware.js";

const router = express.Router();

router.get("/", getTechnologies);

router.put("/", verifyToken, verifyAdmin, createOrUpdateTechnologies);

export default router;
