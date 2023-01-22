import { Container, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { Fragment } from "react";
import { HeroSpanTitle, HeroText, HeroTitle } from "../Blog/BlogSection.style";

const HeroSection: React.FC = () => {
  const isMobile = useMediaQuery("(min-width: 579px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptopOrDesktop = useMediaQuery("(min-width: 992px)");
  return (
    <Fragment>
      <Container mt={100}>
        <HeroTitle>Mahareshi</HeroTitle>
        <HeroSpanTitle>Wahyuaji</HeroSpanTitle>
        <HeroText>FRONT-END DEVELOPER</HeroText>
      </Container>
    </Fragment>
  );
};

export default HeroSection;
