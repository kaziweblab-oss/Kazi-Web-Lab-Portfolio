import mongoose from "mongoose";

export const connectDB = async (url) => {
  mongoose.connection.on("disconnected", () => {
    console.log("Mongo DB was Disconnected.");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("Mongo BD Reconnected Successfully.");
  });

  mongoose.connection.on("error", (err) => {
    console.log(`Mongo DB Runtime error found ${err.message}`);
  });

  const conn = await mongoose.connect(url);

  console.log(`Mongo DB was Successfully conneted at ${conn.connection.host}`);
};
