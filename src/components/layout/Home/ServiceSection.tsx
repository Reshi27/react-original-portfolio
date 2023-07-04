import React, { Fragment } from "react";
import { SectionContainer, ServiceContainer } from "./Section.style";
import { Card, Grid, Image, Text, useMantineColorScheme } from "@mantine/core";
import { theme } from "../../../style/theme/theme";
import WhiteSectionTag from "../../common/Tag/WhiteSectionTag";

const ServiceSection: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Fragment>
      <SectionContainer>
        <WhiteSectionTag
          title="SERVICES"
          color={dark ? "#000" : theme.colors.grey}
        ></WhiteSectionTag>

        <ServiceContainer>
          <Grid mt={10} gutter="xl" justify="center" align="center">
            <Grid.Col md={6} lg={4} mt={10}>
              <Card
                shadow="md"
                p="xl"
                component="a"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    height={160}
                    alt="No way!"
                  />
                </Card.Section>

                <Text weight={500} size="lg" mt="md">
                  How To Be Good at React
                </Text>

                <Text mt="xs" color="dimmed" size="sm">
                  Please click anywhere on this card to claim your reward, this
                  is not a fraud, trust us
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col md={6} lg={4} mt={10}>
              <Card
                shadow="md"
                p="xl"
                component="a"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1510852151262-05bfbfbe996d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                    height={160}
                    alt="No way!"
                  />
                </Card.Section>

                <Text weight={500} size="lg" mt="md">
                  What is Your Favorite Workspace Setup?
                </Text>

                <Text mt="xs" color="dimmed" size="sm">
                  Please click anywhere on this card to claim your reward, this
                  is not a fraud, trust us
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col md={6} lg={4} mt={10}>
              <Card
                shadow="md"
                p="xl"
                component="a"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    height={160}
                    alt="No way!"
                  />
                </Card.Section>

                <Text weight={500} size="lg" mt="md">
                  Tips For Beginner Programmer
                </Text>

                <Text mt="xs" color="dimmed" size="sm">
                  Please click anywhere on this card to claim your reward, this
                  is not a fraud, trust us
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </ServiceContainer>
      </SectionContainer>
    </Fragment>
  );
};

export default ServiceSection;
