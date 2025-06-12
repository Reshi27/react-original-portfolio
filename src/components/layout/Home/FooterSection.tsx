import React, { Fragment } from "react";
import lightSignature from "../../../assets/light-signature.png";
import darkSignature from "../../../assets/dark-signature.png";
import {
  FooterContainer,
  Signature,
  IconWrapper,
  FooterIcons,
} from "./Section.style";
import { BsDiscord, BsGithub, BsInstagram } from "react-icons/bs";

import { useMantineColorScheme } from "@mantine/core";
import { theme } from "../../../style/theme/theme";

const FooterSection: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Fragment>
      <FooterContainer
        color={
          dark ? theme.colors.bgDarkSecondary : theme.colors.bgLightSecondary
        }
      >
        <Signature src={dark ? lightSignature : darkSignature}></Signature>
        <IconWrapper>
          <FooterIcons
            color={dark ? theme.colors.reactBlue : theme.colors.white}
          >
            <BsGithub></BsGithub>
          </FooterIcons>
          <FooterIcons
            color={dark ? theme.colors.reactBlue : theme.colors.white}
          >
            <BsInstagram></BsInstagram>
          </FooterIcons>
          <FooterIcons
            color={dark ? theme.colors.reactBlue : theme.colors.white}
          >
            <BsDiscord></BsDiscord>
          </FooterIcons>
        </IconWrapper>
      </FooterContainer>
    </Fragment>
  );
};

export default FooterSection;
