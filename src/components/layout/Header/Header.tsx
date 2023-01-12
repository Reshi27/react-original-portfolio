import { Divider, NavLink, Space } from "@mantine/core";
import React, { Fragment } from "react";
import ThemeButton from "../../common/Button/ThemeButton";
import { HeaderContainer, BrandLogo, Navigation } from "./HeaderStyle";

const Header: React.FC = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <BrandLogo>Reshi27</BrandLogo>
        <Navigation>
          <NavLink component="a" label="Home"></NavLink>
          <NavLink component="a" label="Portfolio"></NavLink>
          <NavLink component="a" label="Blog"></NavLink>
          <NavLink component="a" label="About"></NavLink>
          <Space w="sm"></Space>
          <Divider orientation="vertical"></Divider>
          <Space w="md"></Space>
          <ThemeButton></ThemeButton>
        </Navigation>
      </HeaderContainer>
    </Fragment>
  );
};
export default Header;
