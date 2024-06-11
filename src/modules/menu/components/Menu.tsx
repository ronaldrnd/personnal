import React from "react";
import ReactDOM from "react-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaBook,
  FaMailchimp,
  FaReact,
} from "react-icons/fa";
import MenuItem from "./MenuItem";
import { useMenu } from "../hooks/useMenu";
import { FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FcMenu } from "react-icons/fc";

const Menu: React.FC = () => {
  const { isOpen, toggleMenu, menuRef, closeMenu } = useMenu();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    toggleMenu(); // Close the menu after navigation
  };
  const menu = (
    <div className="fixed top-1/2 bottom-1/2 left-5 flex items-center justify-center">
      <div ref={menuRef} className="relative w-96 h-96">
        <MenuItem
          icon={<FaBook />}
          positionClass="absolute -top-7"
          detail="About"
          onClick={() => handleNavigation("/about")}
        />
        <MenuItem
          icon={<FaMailchimp />}
          positionClass="absolute top-16 right-48"
          detail="Contact me"
          onClick={() => handleNavigation("/contact")}
        />
        <MenuItem
          icon={<FaHome />}
          positionClass="absolute top-1/2  right-36"
          detail="Home"
          onClick={() => handleNavigation("/")}
        />
        <MenuItem
          icon={<FaReact />}
          positionClass="absolute -bottom-5 right-48"
          detail="Tools"
          onClick={() => handleNavigation("/tools")}
        />
        <MenuItem
          icon={<FaProjectDiagram />}
          positionClass="absolute -bottom-28"
          detail="Projects"
          onClick={() => handleNavigation("/projects")}
        />
        <MenuItem
          icon={<FaX />}
          positionClass="absolute top-1/2"
          onClick={closeMenu}
        />
      </div>
    </div>
  );

  return (
    <div className="">
      <button
        onClick={toggleMenu}
        className="fixed top-1/2 bottom-1/2 h-20 w-20 flex justify-center items-center left-5 text-gray-500 border-2 rounded-xl p-5 bg-gray-800"
      >
        <FcMenu />
      </button>
      {isOpen && ReactDOM.createPortal(menu, document.body)}
    </div>
  );
};

export default Menu;
