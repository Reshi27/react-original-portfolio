import styled from "styled-components";
import {
  Title as MantineTitle,
  Text as MantineText,
  Card as MantineCard,
} from "@mantine/core";
import { moveInLeft, moveInRight, moveInUp } from "./Section.animation";

export const BlogContainer = styled.div`
  padding: 3rem;
  background: ${(props) => props.color};
`;

export const HeroTitle = styled(MantineTitle)`
  font-size: 120px;
  font-family: "Roboto", sans-serif;
  animation: ${moveInLeft} 1s ease;

  @media (max-width: 1200px) {
    font-size: 80px;
    margin-left: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 60px;
    margin-left: 2.5rem;
  }
`;

export const HeroSpanTitle = styled(MantineTitle)`
  font-size: 120px;
  font-family: "Roboto", sans-serif;
  margin-left: 7.2rem;
  animation: ${moveInLeft} 1s ease;
  @media (max-width: 1200px) {
    font-size: 80px;
    margin-left: 7.2rem;
  }

  @media (max-width: 768px) {
    font-size: 60px;
    margin-left: 6rem;
  }
`;

export const HeroText = styled(MantineText)`
  font-size: 36px;
  letter-spacing: 10px;
  font-family: "Raleway", sans-serif;
  margin-top: 20px;
  color: cyan;
  margin-bottom: 2rem;
  margin-left: 0.8rem;
  animation: ${moveInRight} 1s ease;

  @media (max-width: 1200px) {
    font-size: 24px;
    margin-left: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 2.5rem;
  }

  @media (max-width: 455px) {
    font-size: 10px;
    margin-left: 2.5rem;
  }
`;

export const Card = styled(MantineCard as any)`
  animation: ${moveInUp} 1s ease-in;
`;

export const Signature = styled.img`
  margin-left: -3.2rem;
  @media (max-width: 768px) {
    margin-left: 0;
    width: 20rem;
  }

  @media (max-width: 576px) {
    margin-left: 0;
    width: 12rem;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 2rem;
`;

export const FooterIcons = styled.a`
  font-size: 26px;
  margin-right: 2rem;
  transition: 0.5s ease;
  cursor: pointer;
  &:hover {
    transition: 0.5s ease;
    transform: translateY(-0.3rem);
    color: cyan;
  }

  &:not(:hover) {
    transition: 0.5s ease;
    transform: translateY(0);
  }

  @media (max-width: 576px) {
    font-size: 16px;
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
