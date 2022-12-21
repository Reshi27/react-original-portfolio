import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import { PortfolioPage } from "../../pages/PortfolioPage";
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="/portfolio"
          element={<PortfolioPage></PortfolioPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
