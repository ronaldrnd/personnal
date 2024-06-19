
import AboutPage from "../../modules/about/pages/AboutPage";
import AdminDashboard from "../../modules/admin/pages/AdminDashboard";
import HomePage from "../../modules/home/pages/Home/HomePage";
import ProjectPage from "../../modules/project/pages/ProjectPage";
import Home from "../../modules/admin/components/Home";
import Informations from "../../modules/admin/components/Informations";
import Projects from "../../modules/admin/components/Projects";
import Skills from "../../modules/admin/components/Skills";
import Certifications from "../../modules/admin/components/Certifications";
import Account from "../../modules/admin/components/Account";
import LoginPage from "../../modules/auth/Pages/LoginPage";

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
    name: "Project",
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
    path: "/admin/*",
    name: "Admin",
    element: <AdminDashboard />,
    isMenu: true,
    isPrivate: true,
    children: [
      {
        path: "/home",
        name: "Home",
        element: <Home />,
      },
      {
        path: "informations",
        name: "Informations",
        element: <Informations />,
      },
      {
        path: "projects",
        name: "Projects",
        element: <Projects />,
      },
      {
        path: "skills",
        name: "Skills",
        element: <Skills />,
      },
      {
        path: "certifications",
        name: "Certifications",
        element: <Certifications />,
      },
      {
        path: "account",
        name: "Account",
        element: <Account />,
      },
    ],
  },
];
