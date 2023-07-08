import React, { Fragment } from "react";
import {
  QuotesShape,
  SectionContainer,
  TestimonialBackground,
  TestimonialContainer,
} from "./Section.style";
import { theme } from "../../../style/theme/theme";

const TestimonialSection: React.FC = () => {
  return (
    <Fragment>
      <TestimonialBackground>
        <TestimonialContainer>
          <QuotesShape color={theme.colors.black}></QuotesShape>
        </TestimonialContainer>
      </TestimonialBackground>
    </Fragment>
  );
};

export default TestimonialSection;
