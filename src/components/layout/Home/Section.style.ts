import styled from "styled-components";
import {
  Title as MantineTitle,
  Text as MantineText,
  Card as MantineCard,
  CardProps,
} from "@mantine/core";
import { moveInLeft, moveInRight, moveInUp } from "./Section.animation";
import { theme } from "../../../style/theme/theme";
import imgWorkingSpace from "../../../assets/working-space.jpg";

export const SectionContainer = styled.div`
  position: relative;
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

export const ServiceContainer = styled.div`
  padding: 3rem;
`;

export const ServiceBox = styled.div`
  padding: 2rem;
  background-color: ${() => theme.colors.reactBlue};
  min-height: 23rem;
`;

export const ServiceTitle = styled.h2``;

export const ServiceContent = styled.p``;

export const AboutContainer = styled.div`
  padding: 5rem 10rem 5rem 10rem;
`;
export const AboutBox = styled.div``;
export const AboutTitle = styled.h2``;
export const AboutContent = styled.p``;

export const TestimonialBackground = styled.div`
  background-image: url(${imgWorkingSpace});
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem 0;
`;

export const TestimonialContainer = styled.div`
  background-color: ${() => theme.colors.black};
  width: 1100px;
  height: 550px;
  padding: 6rem;
`;

export const QuotesImage = styled.img``;

export const TestimonialContent = styled.p`
  color: white;
  font-size: 24px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;

  & > :first-child {
    margin-right: 1rem;
  }
`;

export const TestimonialFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BlogContainer = styled.div`
  padding: 3rem;
`;

export const Card = styled(MantineCard)<CardProps>`
  animation: ${moveInUp} 1s ease-in;

  &:hover {
    transition: 0.5s ease;
    transform: translateY(-0.3rem);
  }

  &:not(:hover) {
    transition: 0.5s ease;
    transform: translateY(0);
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
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
