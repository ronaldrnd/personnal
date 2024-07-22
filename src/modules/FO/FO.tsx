// src/components/FrontOffice.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';



const FrontOffice: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default FrontOffice;
