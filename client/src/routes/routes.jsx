import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ErrorPage } from "../utils/error.page";
import { MainLayout } from "../views/layouts/main.layout";
import { AboutPage } from "../views/pages/about.page";
import { HomePage } from "../views/pages/home.page";
import { ProjectPage } from "../views/pages/projects.page";
import { ContactPage } from "../views/pages/contact.page";
import HireMe from "../views/pages/hire.page";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/hire-me" element={<HireMe />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
