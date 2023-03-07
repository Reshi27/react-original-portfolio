import React, { Fragment, useState } from "react";
import Header from "../components/common/Header/Header";
import BlogPosts from "../components/layout/Blog/BlogPosts";
import BlogSearch from "../components/layout/Blog/BlogSearch";
const BlogPage: React.FC = () => {
  const [searchResult, setSearchResult] = useState<string>("");

  const messageChangeHandler = (message: string) => {
    setSearchResult(message);
  };
  return (
    <Fragment>
      <Header></Header>
      <BlogSearch messageChangeHandler={messageChangeHandler}></BlogSearch>
      <BlogPosts searchResult={searchResult}></BlogPosts>
    </Fragment>
  );
};

export default BlogPage;
