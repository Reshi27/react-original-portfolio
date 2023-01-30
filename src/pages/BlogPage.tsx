import React, { Fragment } from "react";
import Header from "../components/common/Header/Header";
import BlogSearch from "../components/layout/Blog/BlogSearch";
const BlogPage: React.FC = () => {
  return (
    <Fragment>
      <Header></Header>
      <BlogSearch></BlogSearch>
    </Fragment>
  );
};

export default BlogPage;
