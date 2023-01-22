import { Container, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { Fragment } from "react";

const HeroSection: React.FC = () => {
  const isMobile = useMediaQuery("(min-width: 579px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptopOrDesktop = useMediaQuery("(min-width: 992px)");
  return (
    <Fragment>
      <Container mt={100} mb={40}>
        <Title size={!isMobile ? 120 : 60} sx={{ fontFamily: "Roboto" }}>
          Mahareshi
        </Title>
        <Title
          size={isMobile ? 120 : 60}
          ml={isMobile ? 120 : 60}
          sx={{ fontFamily: "Roboto" }}
        >
          Wahyuaji
        </Title>

        <Text
          size={isMobile ? 36 : 12}
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
