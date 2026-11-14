import express from "express";
import {
  adminLogin,
  getAdmin,
  resetAdmin,
  updateAdmin,
} from "../controller/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.middleware.js";
import { verifyAdmin } from "../middleware/verifyAdmin.middleware.js";

const router = express.Router();

//public routes
router.post("/", adminLogin);

//reset or create admine route
router.put("/reset", resetAdmin);

//protected routes
router.get("/", verifyToken, verifyAdmin, getAdmin);
router.put("/", verifyToken, verifyAdmin, updateAdmin);

export default router;
