// src/modules/admin/components/Dashboard.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Informations from './Informations';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';
import Account from './Account';


const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <Routes>
        <Route path="/admin/home" element={<Home />} />
        <Route path="/admin/informations" element={<Informations />} />
        <Route path="/admin/projects" element={<Projects />} />
        <Route path="/admin/skills" element={<Skills />} />
        <Route path="/admin/certifications" element={<Certifications />} />
        <Route path="/admin/account" element={<Account />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
