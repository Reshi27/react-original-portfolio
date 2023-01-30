import { Divider, NavLink, Paper, Space } from "@mantine/core";
import React, { Fragment } from "react";
import ThemeButton from "../Button/ThemeButton";
import { HeaderContainer, BrandLogo, Navigation } from "./HeaderStyle";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Fragment>
      <Paper shadow="md">
        <HeaderContainer>
          <BrandLogo>Reshi27</BrandLogo>
          <Navigation>
            <Link to="/portfolio">
              <NavLink component="a" label="Home"></NavLink>
            </Link>
            <NavLink component="a" label="Portfolio"></NavLink>
            <Link to="/blog">
              <NavLink component="a" label="Blog"></NavLink>
            </Link>
            <NavLink component="a" label="About"></NavLink>
            <Space w="sm"></Space>
            <Divider orientation="vertical"></Divider>
            <Space w="md"></Space>
            <ThemeButton></ThemeButton>
          </Navigation>
        </HeaderContainer>
      </Paper>
    </Fragment>
  );
};
export default Header;
