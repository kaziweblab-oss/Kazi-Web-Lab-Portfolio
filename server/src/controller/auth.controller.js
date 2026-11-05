import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Users } from "../models/user.model.js";

// get admin
export const getAdmin = async (req, res) => {
  try {
    const oldAdmin = await Users.findOne().select("-password");

    if (!oldAdmin) {
      return res.status(404).json({
        status: false,
        message: "No admin data found.",
      });
    }

    res.status(200).json({
      status: true,
      message: "Admin data collected successfully.",
      data: oldAdmin,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// update admin
export const updateAdmin = async (req, res) => {
  try {
    const body = req.body;

    if (!body || body === undefined) {
      return res.status(400).json({
        status: false,
        message: "Request body cannot be empty for updating Admin Info.",
      });
    }

    const { email, oldPass, newPass } = body;

    const missingFields = [];

    if (!email) missingFields.push("Email");
    if (!oldPass) missingFields.push("Old Password");
    if (!newPass) missingFields.push("New Password");

    if (missingFields.length > 0) {
      return res.status(400).json({
        status: false,
        message: `Please provide ${missingFields.join(" and ")} fields value for update admin info. `,
      });
    }

    const admin = await Users.findOne({ email: email.toLowerCase() });

    if (!admin) {
      return res.status(404).json({
        status: false,
        message: "Admin not found with this email.",
      });
    }

    const isPasswordMatch = await bcrypt.compare(oldPass, admin.password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        status: false,
        message: "Old password is Incorrect.",
      });
    }

    const isPasswordConflict = await bcrypt.compare(newPass, admin.password);

    if (isPasswordConflict) {
      return res.status(400).json({
        status: false,
        message: "New Password cannot be same as Old Password.",
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPass, saltRounds);

    const updatedAdmin = await Users.findOneAndUpdate(
      { email: email.toLowerCase() },
      { email: email.toLowerCase(), password: hashedPassword },
      { new: true, upsert: true, runValidators: true },
    );

    res.status(200).json({
      status: true,
      message: "Admin password Update Successfully.",
      data: updatedAdmin,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// login admin
export const adminLogin = async (req, res) => {
  try {
    const body = req.body;

    if (!body || body === undefined) {
      return res.status(400).json({
        status: false,
        message: "Request body cannot be empty for login admin.",
      });
    }

    const { email, pass } = body;

    const missingFields = [];

    if (!email) missingFields.push("Email");
    if (!pass) missingFields.push("Password");

    if (missingFields.length > 0) {
      return res.status(400).json({
        status: false,
        message: `Please provide ${missingFields.join(" and ")} fields data for login as admin.`,
      });
    }

    const admin = await Users.findOne({ email: email.toLowerCase() });

    if (!admin) {
      return res.status(404).json({
        status: false,
        message: "No admin found with this user email.",
      });
    }

    const isPasswordValid = await bcrypt.compare(pass, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        status: false,
        message: "Incorrect Password.",
      });
    }

    const token = jwt.sign(
      { id: admin._id, role: admin.role || "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      status: true,
      message: "Login Successfully.",
      data: token,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
