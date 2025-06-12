import { Container, useMantineColorScheme } from "@mantine/core";
import React, { Fragment } from "react";
import {
  HeroContainer,
  HeroSpanTitle,
  HeroText,
  HeroTitle,
} from "./Section.style";
import { theme } from "../../../style/theme/theme";

const HeroSection: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Fragment>
      <HeroContainer
        color={
          dark ? theme.colors.bgDarkSecondary : theme.colors.bgLightSecondary
        }
      >
        <HeroTitle>Mahareshi</HeroTitle>
        <HeroSpanTitle>Wahyuaji</HeroSpanTitle>
        <HeroText
          $textColor={
            dark ? theme.colors.fontDarkBlue : theme.colors.fontDarkBlue
          }
        >
          FRONT-END DEVELOPER
        </HeroText>
      </HeroContainer>
    </Fragment>
  );
};

export default HeroSection;
