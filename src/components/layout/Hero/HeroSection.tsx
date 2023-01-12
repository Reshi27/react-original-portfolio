import { Container, Text, Title } from "@mantine/core";
import React, { Fragment } from "react";

const HeroSection: React.FC = () => {
  return (
    <Fragment>
      <Container mt={100}>
        <Title size={120} sx={{ fontFamily: "Roboto" }}>
          Mahareshi
        </Title>
        <Title size={120} ml={120} sx={{ fontFamily: "Roboto" }}>
          Wahyuaji
        </Title>

        <Text
          size={36}
          sx={{ fontFamily: "Raleway", letterSpacing: 10 }}
          c="cyan"
          mt={20}
        >
          FRONT-END DEVELOPER
        </Text>
      </Container>
    </Fragment>
  );
};

export default HeroSection;
