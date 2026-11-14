import mongoose from "mongoose";

const ProjectsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
    usedTools: {
      type: [String],
      required: true,
    },
    liveUrl: {
      type: String,
      required: true,
      trim: true,
    },
    gitLink: {
      type: String,
      trim: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Projects = mongoose.model("Projects", ProjectsSchema);
