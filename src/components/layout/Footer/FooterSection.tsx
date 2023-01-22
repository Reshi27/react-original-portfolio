import { Grid, Text } from "@mantine/core";
import React, { Fragment } from "react";
import signature from "../../../assets/signature.png";
import { Signature } from "./FooterSection.style";
import { useMediaQuery } from "react-responsive";
const FooterSection: React.FC = () => {
  return (
    <Fragment>
      <Signature src={signature}></Signature>
    </Fragment>
  );
};

export default FooterSection;
