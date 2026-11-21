import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ErrorPage } from "../utils/error.page";
import { MainLayout } from "../views/layouts/public/main.layout";
import { AboutPage } from "../views/pages/public/about.page";
import { HomePage } from "../views/pages/public/home.page";
import { ProjectPage } from "../views/pages/public/projects.page";
import { ContactPage } from "../views/pages/public/contact.page";
import HireMe from "../views/pages/public/hire.page";
import { AdminLoginPage } from "../views/pages/admin/adminLogin.page";
import {
  AdminEntryRoute,
  AdminLoginRoute,
  RequireAdmin,
} from "./adminRouteGuards.route";
import { AdminPage } from "../views/pages/admin/admine.page";
import { AdminLayout } from "../views/layouts/admin/admin.layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*------------
           Public Routes
           -------------*/}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/hire-me" element={<HireMe />} />
        </Route>

        {/*----------
           Admin Routes
           ------------*/}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminEntryRoute />} />
          <Route path="/admin/login" element={<AdminLoginRoute />} />

          <Route element={<RequireAdmin />}>
            <Route path="/admin/dashboard" element={<AdminPage />} />
          </Route>
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
