import { ColorScheme, Drawer, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React, { Fragment } from "react";
import BlogSection from "../components/layout/Home/BlogSection";
import FooterSection from "../components/layout/Home/FooterSection";
import Header from "../components/common/Header/Header";
import HeroSection from "../components/layout/Home/HeroSection";
import ServiceSection from "../components/layout/Home/ServiceSection";

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
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            dark: [
              "#F8F9FA",
              "#F1F3F5",
              "#E9ECEF",
              "#DEE2E6",
              "#CED4DA",
              "#ADB5BD",
              "#868E96",
              "#495057",
              "#343A40",
              "#212529",
            ],
          },
        }}
      >
        <BlogSection></BlogSection>
      </MantineProvider>

      <FooterSection></FooterSection>
    </Fragment>
  );
};

export default PortfolioPage;
