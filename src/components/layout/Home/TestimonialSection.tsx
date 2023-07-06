import React, { Fragment } from "react";
import {
  SectionContainer,
  TestimonialBackground,
  TestimonialContainer,
} from "./Section.style";

const TestimonialSection: React.FC = () => {
  return (
    <Fragment>
      <TestimonialBackground>
        <TestimonialContainer></TestimonialContainer>
      </TestimonialBackground>
    </Fragment>
  );
};

export default TestimonialSection;
