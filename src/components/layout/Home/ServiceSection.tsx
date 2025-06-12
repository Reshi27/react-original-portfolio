import React, { Fragment } from "react";
import {
  SectionContainer,
  ServiceBox,
  ServiceContainer,
  ServiceContent,
  ServiceTitle,
} from "./Section.style";
import { Card, Grid, Image, Text, useMantineColorScheme } from "@mantine/core";
import { theme } from "../../../style/theme/theme";
import SectionTag from "../../common/Tag/SectionTag";

const ServiceSection: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Fragment>
      <SectionContainer
        color={dark ? theme.colors.bgDarkPrimary : theme.colors.bgLightPrimary}
      >
        <SectionTag
          title="SERVICES"
          bgColor={dark ? theme.colors.white : theme.colors.bgDarkPrimary}
          borderColor={
            dark ? theme.colors.bgDarkPrimary : theme.colors.bgLightPrimary
          }
        ></SectionTag>

        <ServiceContainer>
          <Grid justify="flex-end" align="center">
            <Grid.Col md={6} lg={3} mt={10}>
              <ServiceBox
                $backgroundColor={
                  dark ? theme.colors.white : theme.colors.bgDarkPrimary
                }
                $textColor={dark ? theme.colors.black : theme.colors.white}
              >
                <ServiceTitle>DESIGN</ServiceTitle>
                <ServiceContent>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi officiis modi soluta qui voluptates ut quod nam
                  maxime, fugiat eveniet, sequi dolorem, inventore quisquam
                  illum. Itaque maxime unde fugit minima.
                </ServiceContent>
              </ServiceBox>
            </Grid.Col>

            <Grid.Col md={6} lg={3} mt={10}>
              <ServiceBox
                $backgroundColor={
                  dark ? theme.colors.white : theme.colors.bgDarkPrimary
                }
                $textColor={dark ? theme.colors.black : theme.colors.white}
              >
                <ServiceTitle>CODE</ServiceTitle>
                <ServiceContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores consectetur cupiditate eaque eum vel accusantium
                  nesciunt! Rerum quam, soluta voluptates beatae, necessitatibus
                  sint amet vero laborum libero vitae nisi? Ad.
                </ServiceContent>
              </ServiceBox>
            </Grid.Col>

            <Grid.Col md={6} lg={3} mt={10}>
              <ServiceBox
                $backgroundColor={
                  dark ? theme.colors.white : theme.colors.bgDarkPrimary
                }
                $textColor={dark ? theme.colors.black : theme.colors.white}
              >
                <ServiceTitle>UPLOAD</ServiceTitle>
                <ServiceContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  iste nam, sint laudantium dolor asperiores ab fugiat, nostrum
                  eius voluptatum ullam pariatur ducimus reprehenderit. Dicta
                  rem provident optio aspernatur minima?
                </ServiceContent>
              </ServiceBox>
            </Grid.Col>
          </Grid>
        </ServiceContainer>
      </SectionContainer>
    </Fragment>
  );
};

export default ServiceSection;
