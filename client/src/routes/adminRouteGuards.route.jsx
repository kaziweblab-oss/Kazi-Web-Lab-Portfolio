import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAdminAuth } from "../hooks/useAdminAuth";
import { AdminLoginPage } from "../views/pages/admin/adminLogin.page";

const AuthStatusMessage = () => {
  const { status, error } = useAdminAuth();

  if (status === "checking") return <p>Checking Admin Session</p>;

  return (
    <p role="alert" className="text-red-300 text-xl md:text-2xl lg:text-3xl">
      Admin Session Checking Failed : {error}
    </p>
  );
};

export const AdminEntryRoute = () => {
  const { status } = useAdminAuth();

  if (status === "checking" || status === "error") {
    return <AuthStatusMessage />;
  }
  return (
    <Navigate
      to={status === "authenticated" ? "/admin/dashboard" : "/admin/login"}
      replace
    />
  );
};

export const AdminLoginRoute = () => {
  const { status } = useAdminAuth();

  if (status === "checking" || status === "error") {
    return <AuthStatusMessage />;
  }

  if (status === "authenticated") {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return <AdminLoginPage />;
};

export const RequireAdmin = () => {
  const { status } = useAdminAuth();
  const location = useLocation();

  if (status === "checking" || status === "error") {
    return <AuthStatusMessage />;
  }

  if (status !== "authenticated") {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};
