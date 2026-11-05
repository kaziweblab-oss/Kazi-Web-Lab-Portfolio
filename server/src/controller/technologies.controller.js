import { Technologies } from "../models/technologies.model.js";

// get technologies
export const getTechnologies = async (req, res) => {
  try {
    const technologies = await Technologies.find();

    res.status(200).json({
      status: true,
      message: "Used Technologies collected successfully.",
      data: technologies,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// create and update technologies
export const createOrUpdateTechnologies = async (req, res) => {
  try {
    const body = req.body;

    if (!body || body === undefined) {
      return res.status(400).json({
        status: false,
        message:
          "Request body cannot be undefined or empty for creating or updating updated technologies.",
      });
    }

    const { technologies } = body;

    if (!Array.isArray(technologies) || technologies.length === 0) {
      return res.status(400).json({
        status: false,
        message:
          "Please Provide technologies data for create or update your contact info.",
      });
    }

    const updatedTechnologies = await Technologies.findOneAndUpdate(
      {},
      { $set: body },
      { new: true, upsert: true, runValidation: true },
    );

    return res.status(200).json({
      status: true,
      message: "Technologies updated successfully.",
      data: updatedTechnologies,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
