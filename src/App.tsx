import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";


const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="h-40"></div>
        <LandingPage />
        <About />
      </main>
    </div>
  );
};

export default App;
