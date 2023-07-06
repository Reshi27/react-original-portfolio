import { Container, Text, Title } from "@mantine/core";
import React, { Fragment } from "react";
import { HeroSpanTitle, HeroText, HeroTitle } from "./Section.style";

const HeroSection: React.FC = () => {
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
