import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

/*-----------------------
 default middleware here
 -----------------------*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

/*-----------------
 import routes here
 -----------------*/
import projectRoutes from "./routes/projects.route.js";
import contactsRoutes from "./routes/contact.route.js";
import technologiesRoutes from "./routes/technologies.route.js";
import userRoutes from "./routes/user.route.js";

app.use("/api/projects", projectRoutes);
app.use("/api/contacts", contactsRoutes);
app.use("/api/technologies", technologiesRoutes);
app.use("/api/admin", userRoutes);

/*------------
 Welcome Page
 ------------*/
app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Welcome to KWL Portfolio Backend.",
  });
});

/*------------------
 Health check route
 -------------------*/

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: true,
    message: "KWL Backend is also Live. Don't worry 😊😊😊 ",
  });
});

/*-------------------
 create wildCard here
 --------------------*/
app.use((req, res) => {
  res.status(404).json({
    status: false,
    message: "!!!404 Page Not Found.",
  });
});
