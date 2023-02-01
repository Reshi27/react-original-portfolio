import React, { Fragment } from "react";
import Header from "../components/common/Header/Header";
import BlogPosts from "../components/layout/Blog/BlogPosts";
import BlogSearch from "../components/layout/Blog/BlogSearch";
const BlogPage: React.FC = () => {
  return (
    <Fragment>
      <Header></Header>
      <BlogSearch></BlogSearch>
      <BlogPosts></BlogPosts>
    </Fragment>
  );
};

export default BlogPage;
