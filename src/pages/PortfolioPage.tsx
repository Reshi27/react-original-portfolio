import { ColorScheme, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React, { Fragment } from "react";
import BlogSection from "../components/layout/Blog/BlogSection";
import FooterSection from "../components/layout/Footer/FooterSection";
import Header from "../components/layout/Header/Header";
import HeroSection from "../components/layout/Hero/HeroSection";
const PortfolioPage: React.FC = () => {
  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  return (
    <Fragment>
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
        <Header></Header>
      </MantineProvider>
      <HeroSection></HeroSection>

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
