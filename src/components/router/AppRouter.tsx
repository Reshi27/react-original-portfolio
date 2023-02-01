import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from "../../pages/BlogPage";
import LoginPage from "../../pages/LoginPage";
import PortfolioPage from "../../pages/PortfolioPage";
import ReactBlog from "../layout/BlogPosts/ReactBlog";
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="portfolio"
          element={<PortfolioPage></PortfolioPage>}
        ></Route> 
          <Route path="blog" element={<BlogPage></BlogPage>}>
          <Route path="/1" element={<ReactBlog></ReactBlog>}></Route>
          </Route> 
      </Routes>
    </BrowserRouter>
  );
}
