// src/modules/admin/components/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-semibold">Admin Dashboard</div>
      <nav className="flex-1">
        <ul>
          <li>
            <NavLink to="/admin/home"  className="block p-4">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/admin/informations"  className="block p-4">Informations</NavLink>
          </li>
          <li>
            <NavLink to="/admin/projects"  className="block p-4">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/admin/skills"  className="block p-4">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/admin/certifications"  className="block p-4">Certifications</NavLink>
          </li>
          <li>
            <NavLink to="/admin/account"  className="block p-4">Account</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
