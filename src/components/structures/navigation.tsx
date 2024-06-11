import AboutPage from "../../modules/about/pages/AboutPage";
import AdminPage from "../../modules/admin/pages/AdminPage";
import LoginPage from "../../modules/auth/Pages/LoginPage";
import HomePage from "../../modules/home/pages/Home/HomePage";
import ProjectPage from "../../modules/project/pages/ProjectPage";

export const nav = [
  {
    path: "/",
    name: "Home",
    element: <HomePage />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/about",
    name: "About",
    element: <AboutPage />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/project",
    name: "Private",
    element: <ProjectPage />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/login",
    name: "Login",
    element: <LoginPage />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/admin",
    name: "Admin",
    element: <AdminPage />,
    isMenu: true,
    isPrivate: true,
  },
];
