import React, { Fragment } from "react";
import SectionTag from "../../common/Tag/SectionTag";
import { Grid, Image, useMantineColorScheme } from "@mantine/core";
import { theme } from "../../../style/theme/theme";
import {
  AboutBox,
  AboutContainer,
  AboutContent,
  AboutTitle,
  SectionContainer,
} from "./Section.style";
import imgIdea from "../../../assets/idea.jpg";
import { Button } from "../../common/Button/Button.style";

const AboutSection: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Fragment>
      <SectionContainer
        color={
          dark ? theme.colors.bgDarkSecondary : theme.colors.bgLightSecondary
        }
      >
        <SectionTag
          title="ABOUT"
          bgColor={dark ? theme.colors.white : theme.colors.bgDarkPrimary}
          borderColor={
            dark ? theme.colors.bgDarkSecondary : theme.colors.bgLightSecondary
          }
        ></SectionTag>

        <AboutContainer>
          <Grid justify="space-between" align="start">
            <Grid.Col lg={6}>
              <AboutBox>
                <AboutTitle>WHO THE HELL I AM</AboutTitle>
                <AboutContent>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                  vitae quo enim nemo voluptas mollitia reprehenderit eveniet
                  exercitationem? Distinctio, corrupti? Veniam sed iusto,
                  veritatis a temporibus ex consequatur dolorem animi. Cum
                  facere debitis quae enim saepe nobis fugiat quibusdam tempore,
                  magni incidunt, in quos aperiam, doloribus totam qui maiores
                  beatae distinctio ratione non commodi exercitationem officiis!
                  Dicta explicabo blanditiis exercitationem? Dolorum mollitia
                  maxime rerum exercitationem inventore? Laudantium culpa ut
                  deleniti qui sequi, inventore eum nesciunt soluta nisi
                  temporibus repudiandae cupiditate iste quod quisquam, dolore
                  ad iure, maiores suscipit dolores laborum?
                </AboutContent>
                <Button bg={theme.colors.reactBlue}>LEARN MORE</Button>
              </AboutBox>
            </Grid.Col>

            <Grid.Col lg={6}>
              <AboutBox>
                <Image src={imgIdea} width={350} height={500} mx="auto"></Image>
              </AboutBox>
            </Grid.Col>
          </Grid>
        </AboutContainer>
      </SectionContainer>
    </Fragment>
  );
};

export default AboutSection;
