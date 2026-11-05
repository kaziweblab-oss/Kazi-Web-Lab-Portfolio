import mongoose from "mongoose";
import { Projects } from "../models/projects.model.js";

//get Recent Project
export const getRecentProject = async (req, res) => {
  try {
    const recentProjects = await Projects.find({}).limit(5);

    res.status(200).json({
      status: true,
      message: "Project retrive Successfull.",
      data: recentProjects,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// get all Project
export const getAllProject = async (req, res) => {
  try {
    const projects = await Projects.find();

    res.status(200).json({
      status: true,
      message: "Projects retrive Successfully.",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// add a project
export const createProject = async (req, res) => {
  try {
    const body = req.body;

    if (body === undefined || !body) {
      return res.status(400).json({
        status: false,
        message: "Request body cannot be empty for creating a project.",
      });
    }

    const { name, desc, usedTools, liveUrl, gitLink } = body;

    const missingFiled = [];

    if (!name) missingFiled.push("Project Name");
    if (!desc) missingFiled.push("Project Description");
    if (!usedTools || usedTools.length === 0) missingFiled.push("Used Tools");
    if (!liveUrl) missingFiled.push("Live Url");

    if (!Array.isArray(usedTools)) {
      return res.status(400).json({
        status: false,
        message: "Used Tools filed must be a Array.",
      });
    }

    if (missingFiled.length > 0) {
      return res.status(400).json({
        status: false,
        message: `${missingFiled.join(", ")} cannot be Empty for creating a project.`,
      });
    }

    let conflictFields = "";

    if (await Projects.findOne({ name })) conflictFields = "Project Name";

    if (conflictFields === "") {
      if (await Projects.findOne({ liveUrl })) conflictFields = "Live Url";
    }

    if (conflictFields) {
      return res.status(409).json({
        status: false,
        message: `${conflictFields} is already exist.`,
      });
    }

    await Projects.create({ name, desc, usedTools, liveUrl, gitLink });

    res.status(201).json({
      status: true,
      message: `${name} project created successfully.`,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// delete a project
export const deleteProject = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        status: false,
        message: "Please Provide a id for deleteing a Project.",
      });
    }

    if (!mongoose.isObjectIdOrHexString(id)) {
      return res.status(400).json({
        status: false,
        message:
          "Invalid Project ID found. Please Try again with a valid project ID.",
      });
    }

    const deletedProject = await Projects.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({
        status: false,
        message: "Project Not Found with this project ID.",
      });
    }

    res.status(200).json({
      status: true,
      message: `${deletedProject.name} project deleted successfully.`,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// update a project
export const updateProject = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        status: false,
        message:
          "Project ID not found.Please Provide a Valid Project ID for update a Project.",
      });
    }

    if (!mongoose.isObjectIdOrHexString(id)) {
      return res.status(400).json({
        status: false,
        message: "Invalid Project ID. Please Provide a Valid Project ID.",
      });
    }

    const body = req.body;

    if (body === undefined || !body) {
      return res.status(400).json({
        status: false,
        message:
          "Request body cannot be empty or undefined for updating a Project.",
      });
    }

    const { name, desc, usedTools, liveUrl, gitLink } = body;

    const updatedData = [];

    if (!name && !desc && !usedTools && !liveUrl && !gitLink) {
      return res.status(400).json({
        status: false,
        message:
          "No updated Data found. Please provide updated data for Update a Project details.",
      });
    }

    if (name) updatedData.push("Name");
    if (desc) updatedData.push("Description");
    if (usedTools) updatedData.push("Used Tools");
    if (liveUrl) updatedData.push("Live Url");
    if (gitLink) updatedData.push("Git Link");

    const oldProject = await Projects.findById(id);

    if (!oldProject) {
      return res.status(404).json({
        status: false,
        message: "Project Not Found with this ID.",
      });
    }

    const conflictFields = [];
    if ("name" in body && name === oldProject.name) {
      conflictFields.push("Name");
    }

    if ("desc" in body && desc === oldProject.desc) {
      conflictFields.push("Description");
    }

    if ("usedTools" in body) {
      const sameTools =
        Array.isArray(usedTools) &&
        usedTools.length === oldProject.usedTools.length &&
        usedTools.every((tool, index) => tool === oldProject.usedTools[index]);

      if (sameTools) conflictFields.push("Used Tools");
    }

    if ("liveUrl" in body && liveUrl === oldProject.liveUrl) {
      conflictFields.push("Live Url");
    }

    if ("gitLink" in body && gitLink === oldProject.gitLink) {
      conflictFields.push("Git Link");
    }

    if (conflictFields.length > 0) {
      return res.status(401).json({
        status: false,
        message: `Project ${conflictFields.join(", ")} cannot be same as old.`,
      });
    }

    await Projects.findByIdAndUpdate(
      id,
      { $set: body },
      { runValidators: true },
    );

    res.status(200).json({
      status: true,
      message: `${oldProject.name} Project is Successfully Updated with ${updatedData.join(", ")} this fields`,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
