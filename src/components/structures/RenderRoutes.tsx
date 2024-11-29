// src/RenderRoutes.tsx
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import HomePage from "../../modules/home/pages/Home/HomePage";
import FrontOffice from "../../modules/FO/FO";

export const RenderRoutes = () => {
  return (
    <Routes>
    
      <Route element={<FrontOffice />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
