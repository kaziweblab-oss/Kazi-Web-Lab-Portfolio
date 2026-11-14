import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// contact api calling
export const fetchContacts = () => API.get("/api/contacts");

// project api calling
export const fetchProjects = () => API.get("/api/projects");

// technologies api calling
export const fetchTechnologies = () => API.get("/api/technologies");

// users api calling
export const fetchAdmin = () => API.get("/api/admin");
