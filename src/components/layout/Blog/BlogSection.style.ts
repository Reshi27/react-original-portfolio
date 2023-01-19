import styled from "styled-components";
import { Container, Text } from "@mantine/core";
import { Title } from "@mantine/core";
export const BlogContainer = styled.div`
  padding: 3rem;
`;

export const HeroTitle = styled(Title)`
  font-size: 120px;
  font-family: "Roboto", sans-serif;

  @media (max-width: 1200px) {
    font-size: 80px;
  }

  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

export const HeroSpanTitle = styled(Title)`
  font-size: 120px;
  font-family: "Roboto", sans-serif;
  margin-left: 120px;
  @media (max-width: 1200px) {
    font-size: 80px;
  }

  @media (max-width: 768px) {
    font-size: 60px;
    margin-left: 60px;
  }
`;

export const HeroText = styled(Text)`
  font-size: 36px;
  letter-spacing: 10px;
  font-family: "Raleway", sans-serif;
  margin-top: 20px;
  color: cyan;

  @media (max-width: 1200px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
