import { Outlet } from "react-router-dom";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { ScrollToTop } from "../../utils/scrollToTop";

export const MainLayout = () => {
  return (
    <div className="text-lg md:text-xl lg:text-2xl ">
      <ScrollToTop />
      <Nav />
      <div
        className="min-h-screen font-[Roboto,sans-serif] bg-[rgba(15,23,42,0.95)]
          shadow-2xl border-b-2 border-[rgb(100,118,258,0.1)] p-[5%]  text-white "
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
