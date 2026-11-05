import mongoose from "mongoose";

const ContactsSchema = mongoose.Schema(
  {
    contacts: {
      phone: {
        type: String,
        trim: true,
      },
      whatsApp: {
        type: String,
      },
      messenger: {
        type: String,
      },
    },
    socials: {
      facebook: {
        type: String,
      },
      youtube: {
        type: String,
      },
      instagram: {
        type: String,
      },
      github: {
        type: String,
      },
      tiktok: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  },
);

export const Contacts = mongoose.model("Contacts", ContactsSchema);
