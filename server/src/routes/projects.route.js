import express from "express";
import {
  createProject,
  deleteProject,
  getAllProject,
  getRecentProject,
  updateProject,
} from "../controller/project.controller.js";
import { verifyAdmin } from "../middleware/verifyAdmin.middleware.js";
import { verifyToken } from "../middleware/verifyToken.middleware.js";

const router = express.Router();

// public routes here
router.get("/", getAllProject);
router.get("/recent-projects", getRecentProject);

// protected routes here
router.post("/", verifyToken, verifyAdmin, createProject);
router.delete("/:id", verifyToken, verifyAdmin, deleteProject);
router.patch("/:id", verifyToken, verifyAdmin, updateProject);

export default router;
