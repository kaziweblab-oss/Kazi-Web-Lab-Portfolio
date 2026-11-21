import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <section>
      <div
        className="flex flex-col justify-center items-center min-h-screen font-[Roboto,sans-serif] bg-[rgba(15,23,42,0.95)]
          shadow-2xl border-b-2 border-[rgb(100,118,258,0.1)] text-white "
      >
        <Outlet />
      </div>
    </section>
  );
};
