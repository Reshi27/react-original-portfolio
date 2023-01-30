import styled from "styled-components";
import {
  Title as MantineTitle,
  Text as MantineText,
  Container as MantineContainer,
} from "@mantine/core";

export const BlogContainer = styled.div`
  padding: 3rem;
  background: ${(props) => props.color};
`;

export const HeroTitle = styled(MantineTitle)`
  font-size: 120px;
  font-family: "Roboto", sans-serif;

  @media (max-width: 1200px) {
    font-size: 80px;
  }

  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

export const HeroSpanTitle = styled(MantineTitle)`
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

export const HeroText = styled(MantineText)`
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

export const Signature = styled.img``;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 9rem;
`;

export const FooterIcons = styled.a`
  font-size: 26px;
  margin-right: 2rem;
  transition: 0.5s ease;
  cursor: pointer;
  &:hover {
    color: cyan;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  ${FooterIcons}:nth-child(3) {
    margin-right: 0 !important;
  }
`;
