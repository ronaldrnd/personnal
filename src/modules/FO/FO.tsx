// src/components/FrontOffice.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../menu/components/Menu';


const FrontOffice: React.FC = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default FrontOffice;
