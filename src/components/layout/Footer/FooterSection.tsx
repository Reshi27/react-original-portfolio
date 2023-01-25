import React, { Fragment } from "react";
import lightSignature from "../../../assets/light-signature.png";
import darkSignature from "../../../assets/dark-signature.png";
import {
  FooterContainer,
  Signature,
  IconWrapper,
  FooterIcons,
} from "./FooterSection.style";
import { BsDiscord, BsGithub, BsInstagram } from "react-icons/bs";

import { useMantineColorScheme } from "@mantine/core";

const FooterSection: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Fragment>
      <FooterContainer>
        <Signature src={dark ? lightSignature : darkSignature}></Signature>
        <IconWrapper>
          <FooterIcons>
            <BsGithub></BsGithub>
          </FooterIcons>
          <FooterIcons>
            <BsInstagram></BsInstagram>
          </FooterIcons>
          <FooterIcons>
            <BsDiscord></BsDiscord>
          </FooterIcons>
        </IconWrapper>
      </FooterContainer>
    </Fragment>
  );
};

export default FooterSection;
