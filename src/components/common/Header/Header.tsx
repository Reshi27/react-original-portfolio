import {
  Divider,
  Drawer,
  NavLink,
  Space,
  useMantineColorScheme,
} from "@mantine/core";
import React, { Fragment, useState } from "react";
import ThemeButton from "../Button/ThemeButton";
import {
  HeaderContainer,
  BrandLogo,
  Navigation,
  HeaderIcons,
  MobileNavigation,
} from "./Header.style";
import { Link } from "react-router-dom";

import { GiHamburger } from "react-icons/gi";
const Header: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [opened, setOpened] = useState<boolean>(false);

  const openDrawer = () => {
    setOpened(true);
  };

  const closeDrawer = () => {
    setOpened(false);
  };

  return (
    <Fragment>
      <Drawer opened={opened} onClose={closeDrawer} position="right">
        <MobileNavigation>
          <Link to="/portfolio">
            <NavLink component="a" label="Home"></NavLink>
          </Link>
          <Link to="#">
            <NavLink component="a" label="Portfolio"></NavLink>
          </Link>

          <Link to="/blog">
            <NavLink component="a" label="Blog"></NavLink>
          </Link>
          <Link to="#">
            <NavLink component="a" label="About"></NavLink>
          </Link>

          <Space w="sm"></Space>
          <Divider orientation="vertical"></Divider>
          <Space w="md"></Space>
        </MobileNavigation>
      </Drawer>

      <HeaderContainer color={dark ? "#000" : "#ADB5BD"}>
        <BrandLogo>Reshi27</BrandLogo>
        <Navigation>
          <Link to="/portfolio">Home</Link>
          <Link to="#">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="#">About</Link>

          <Space w="sm"></Space>
          <Divider orientation="vertical"></Divider>
          <Space w="md"></Space>
          <ThemeButton></ThemeButton>
        </Navigation>
        <HeaderIcons>
          <ThemeButton></ThemeButton>
          <Space w="md"></Space>
          <Divider orientation="vertical"></Divider>
          <Space w="md"></Space>
          <GiHamburger onClick={openDrawer}></GiHamburger>
        </HeaderIcons>
      </HeaderContainer>
    </Fragment>
  );
};
export default Header;
