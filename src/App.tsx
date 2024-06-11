import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthWrapper from "./modules/auth/components/AuthWrapper";
import Menu from "./modules/menu/components/Menu";



const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <Menu />
      <AuthWrapper />
    </BrowserRouter>
    </>
  );
};

export default App;
