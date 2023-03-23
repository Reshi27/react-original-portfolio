import React, { Fragment, useState } from "react";
import Header from "../components/common/Header/Header";
import BlogPosts from "../components/layout/Blog/BlogPosts";
import BlogSearch from "../components/layout/Blog/BlogSearch";
import MoveInRightAnimation from "../style/animations/MoveInRightAnimation";
const BlogPage: React.FC = () => {
  const [searchResult, setSearchResult] = useState<string>("");

  const messageChangeHandler = (message: string) => {
    setSearchResult(message);
  };
  return (
    <Fragment>
      <Header></Header>
      <MoveInRightAnimation>
        <BlogSearch messageChangeHandler={messageChangeHandler}></BlogSearch>
        <BlogPosts searchResult={searchResult}></BlogPosts>
      </MoveInRightAnimation>
    </Fragment>
  );
};

export default BlogPage;
