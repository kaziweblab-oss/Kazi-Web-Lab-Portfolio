import express from "express";
import {
  createOrUpdateContact,
  getContacts,
} from "../controller/contact.controller.js";
import { verifyToken } from "../middleware/verifyToken.middleware.js";
import { verifyAdmin } from "../middleware/verifyAdmin.middleware.js";

const router = express.Router();

router.get("/", getContacts);

router.put("/",verifyToken,verifyAdmin, createOrUpdateContact);

export default router;
