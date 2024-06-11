import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ProtectedRoute from "../../modules/auth/components/ProtectedRoutes";
import HomePage from "../../modules/home/pages/Home/HomePage";
import LoginPage from "../../modules/auth/Pages/LoginPage";
import AdminPage from "../../modules/admin/pages/AdminPage";
import AboutPage from "../../modules/about/pages/AboutPage";
import ContactPage from "../../modules/contact/pages/ContactPage";
import ProjectPage from "../../modules/project/pages/ProjectPage";

export const RenderRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute redirectPath="/login">
            <AdminPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
