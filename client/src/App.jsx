import { AdminAuthProvider } from "./provider/adminAuth.provider";
import { Router } from "./routes/routes";

export const App = () => {
  return (
    <>
      <AdminAuthProvider>
        <Router />
      </AdminAuthProvider>
    </>
  );
};
