import React, { Fragment } from "react";
import { HeaderContainer, BrandLogo, Navigation } from "./HeaderStyle";
export const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <BrandLogo>Reshi27</BrandLogo>
        <Navigation>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
        </Navigation>
      </HeaderContainer>
    </Fragment>
  );
};
