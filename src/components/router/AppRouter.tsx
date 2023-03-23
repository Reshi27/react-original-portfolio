import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from "../../pages/BlogPage";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import BlogDetailsPage from "../../pages/BlogDetailsPage";
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="portfolio" element={<HomePage></HomePage>}></Route>
        <Route path="blog" element={<BlogPage></BlogPage>}></Route>
        <Route
          path="/blog/:id"
          element={<BlogDetailsPage></BlogDetailsPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
