// src/RenderRoutes.tsx
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ProtectedRoute from "../../modules/auth/components/ProtectedRoutes";
import HomePage from "../../modules/home/pages/Home/HomePage";
import LoginPage from "../../modules/auth/Pages/LoginPage";
import AdminDashboard from "../../modules/admin/pages/AdminDashboard";
import AboutPage from "../../modules/about/pages/AboutPage";
import ContactPage from "../../modules/contact/pages/ContactPage";
import ProjectPage from "../../modules/project/pages/ProjectPage";
import Home from "../../modules/admin/components/Home";
import Informations from "../../modules/admin/components/Informations";
import Projects from "../../modules/admin/components/Projects";
import Skills from "../../modules/admin/components/Skills";
import Certifications from "../../modules/admin/components/Certifications";
import Account from "../../modules/admin/components/Account";
import FrontOffice from "../../modules/FO/FO";


export const RenderRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute redirectPath="/login">
            <AdminDashboard />
          </ProtectedRoute>
        }
      >
        <Route path="home" element={<Home />} />
        <Route path="informations" element={<Informations />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="account" element={<Account />} />
      </Route>
      <Route element={<FrontOffice />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
