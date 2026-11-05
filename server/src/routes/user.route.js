import express from "express";
import {
  adminLogin,
  getAdmin,
  updateAdmin,
} from "../controller/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.middleware.js";
import { verifyAdmin } from "../middleware/verifyAdmin.middleware.js";

const router = express.Router();

//public routes
router.post("/", adminLogin);

//protected routes
router.get("/", verifyToken, verifyAdmin, getAdmin);
router.put("/", verifyToken, verifyAdmin, updateAdmin);

export default router;
