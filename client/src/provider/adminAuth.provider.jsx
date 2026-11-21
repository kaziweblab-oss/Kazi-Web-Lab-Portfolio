import { useEffect, useMemo, useState } from "react";
import { fetchAdmin, loginAdmin } from "../services/api";
import { AdminAuthContext } from "../context/adminAuth.context";

export const requestAdmin = async () => {
  const response = await fetchAdmin();
  const admin = response.data?.data;

  if (!admin) {
    throw new Error("Admin response data not found.");
  }

  return admin;
};

export const getErrorMessage = (error) => {
  return error.response?.data?.message || error.message || "Request Failed.";
};

export const AdminAuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    status: "checking",
    admin: "null",
    error: "",
  });

  useEffect(() => {
    let active = true;

    requestAdmin()
      .then((admin) => {
        if (active) {
          setAuth({ status: "authenticated", admin, error: "" });
        }
      })
      .catch((error) => {
        if (!active) return;

        if ([401, 403].includes(error.response?.status)) {
          setAuth({ status: "unauthenticated", admin: null, error: "" });
        } else {
          setAuth({
            status: "error",
            admin: null,
            error: getErrorMessage(error),
          });
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const login = async (email, pass) => {
    await loginAdmin(email, pass);

    const admin = await requestAdmin();

    setAuth({ status: "authenticated", admin, error: "" });
  };

  const value = useMemo(() => ({ ...auth, login }), [auth]);

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};
