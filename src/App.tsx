import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthWrapper from "./modules/auth/components/AuthWrapper";




const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <AuthWrapper />
    </BrowserRouter>
    </>
  );
};

export default App;
