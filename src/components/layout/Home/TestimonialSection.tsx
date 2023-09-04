import React, { Fragment } from "react";
import {
  BtnLeftArrow,
  BtnRightArrow,
  QuotesImage,
  SectionContainer,
  TestimonialBackground,
  TestimonialContainer,
  TestimonialContent,
  TestimonialFooterContainer,
} from "./Section.style";
import { Avatar, Button, Text } from "@mantine/core";
import quotes from "../../../assets/trapesiums.png";

const TestimonialSection: React.FC = () => {
  return (
    <Fragment>
      <TestimonialBackground>
        <TestimonialContainer>
          <QuotesImage src={quotes}></QuotesImage>

          <TestimonialContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            delectus qui facere earum ea vitae animi tenetur quaerat
            consequuntur, voluptas nesciunt, illum reiciendis, fugiat eos
            eveniet quod esse aut itaque.
          </TestimonialContent>

          <TestimonialFooterContainer>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                size="lg"
                radius="xl"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              ></Avatar>
              <Text fw={700} color="white">
                Mahareshi CEO
              </Text>
            </div>

            <Button.Group>
              <BtnLeftArrow></BtnLeftArrow>
              <BtnRightArrow></BtnRightArrow>
            </Button.Group>
          </TestimonialFooterContainer>
        </TestimonialContainer>
      </TestimonialBackground>
    </Fragment>
  );
};

export default TestimonialSection;
