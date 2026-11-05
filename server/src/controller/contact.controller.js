import mongoose from "mongoose";
import { Contacts } from "../models/contacts.model.js";

// get all contact
export const getContacts = async (req, res) => {
  try {
    const allContact = await Contacts.find();

    res.status(200).send({
      status: true,
      message: "Contact Information collected successfully.",
      data: allContact,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// create and update contact info
export const createOrUpdateContact = async (req, res) => {
  try {
    const body = req.body;

    if (body === undefined || !body) {
      return res.status(400).json({
        status: false,
        message:
          "Request body cannot be undefined or empty for create or update your contact info.",
      });
    }

    const { contacts, socials } = body;

    if (
      (!contacts && !socials) ||
      (Object.keys(contacts).length === 0 && Object.keys(socials).length === 0)
    ) {
      return res.status(400).json({
        status: false,
        message:
          "Please Provide contact data for create or update your contact info.",
      });
    }

    const updatedContact = await Contacts.findOneAndUpdate(
      {},
      { $set: { contacts, socials } },
      { new: true, upsert: true, runValidators: true },
    );

    res.status(200).json({
      status: true,
      message: "Contact information saved successfully.",
      data: updatedContact,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
