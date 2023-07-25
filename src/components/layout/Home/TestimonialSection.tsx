import React, { Fragment } from "react";
import {
  BtnLeftArrow,
  BtnRightArrow,
  QuotesShape,
  SectionContainer,
  TestimonialBackground,
  TestimonialContainer,
  TestimonialContent,
} from "./Section.style";
import { theme } from "../../../style/theme/theme";
import { Button } from "@mantine/core";

const TestimonialSection: React.FC = () => {
  return (
    <Fragment>
      <TestimonialBackground>
        <TestimonialContainer>
          <QuotesShape color={theme.colors.black}></QuotesShape>
          <TestimonialContent></TestimonialContent>
          <Button.Group>
            <BtnLeftArrow></BtnLeftArrow>
            <BtnRightArrow></BtnRightArrow>
          </Button.Group>
        </TestimonialContainer>
      </TestimonialBackground>
    </Fragment>
  );
};

export default TestimonialSection;
