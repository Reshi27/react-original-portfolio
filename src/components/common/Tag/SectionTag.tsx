import React, { Fragment } from "react";
import { TagContainer, TagTitle } from "./SectionTag.style";

interface props {
  title: string;
  color: string;
}

const SectionTag: React.FC<props> = ({ title, color }) => {
  return (
    <Fragment>
      <TagContainer color={color}>
        <TagTitle>{title}</TagTitle>
      </TagContainer>
    </Fragment>
  );
};

export default SectionTag;
