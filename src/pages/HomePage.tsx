import { ColorScheme, Drawer, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React, { Fragment } from "react";
import BlogSection from "../components/layout/Home/BlogSection";
import FooterSection from "../components/layout/Home/FooterSection";
import Header from "../components/common/Header/Header";
import HeroSection from "../components/layout/Home/HeroSection";
import ServiceSection from "../components/layout/Home/ServiceSection";
import AboutSection from "../components/layout/Home/AboutSection";
import TestimonialSection from "../components/layout/Home/TestimonialSection";

const PortfolioPage: React.FC = () => {
  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  return (
    <Fragment>
      <Header></Header>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <AboutSection></AboutSection>
      <TestimonialSection></TestimonialSection>
      <BlogSection></BlogSection>

      <FooterSection></FooterSection>
    </Fragment>
  );
};

export default PortfolioPage;
