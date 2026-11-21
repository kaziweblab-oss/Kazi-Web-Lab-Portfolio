import { useContext } from "react";
import { AdminAuthContext } from "../context/adminAuth.context";

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);

  if (!context) {
    throw new Error("Please use useAdminAuth under AdminAuthProvider.");
  }

  return context;
};
