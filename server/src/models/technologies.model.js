import mongoose from "mongoose";

const TechnologiesSchema = mongoose.Schema(
  {
    technologies: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Technologies = mongoose.model(
  "Technologies",
  TechnologiesSchema,
);
