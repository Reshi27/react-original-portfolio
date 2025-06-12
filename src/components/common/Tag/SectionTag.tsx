import React, { Fragment } from "react";
import { TagContainer, TagTitle } from "./SectionTag.style";
import { theme } from "../../../style/theme/theme";
import { useMantineColorScheme } from "@mantine/core";

interface props {
  title: string;
  bgColor: string;
  borderColor: string;
}

const SectionTag: React.FC<props> = ({ title, bgColor, borderColor }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Fragment>
      <TagContainer $backgroundColor={bgColor} $borderColor={borderColor}>
        <TagTitle color={dark ? theme.colors.black : theme.colors.white}>
          {title}
        </TagTitle>
      </TagContainer>
    </Fragment>
  );
};

export default SectionTag;
