import styled from "styled-components";
import { theme } from "../../../style/theme/theme";

export const HeaderContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.color};
`;

export const BrandLogo = styled.div`
  color: ${(props) => props.color};
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
    margin-right: 2rem;
    display: flex;
    flex-direction: column;

    :nth-child(1)::after {
      width: 2.7rem;
    }

    :nth-child(2)::after {
      width: 3.8rem;
    }

    :nth-child(3)::after {
      width: 2.1rem;
    }

    :nth-child(4)::after {
      margin-right: 0.5rem;
      width: 2.8rem;
    }
  }

  & a::after {
    content: "";
    position: absolute;
    top: 2.8rem;
    transform: scaleX(0);
    height: 2px;
    background-color: #ffffff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  & a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const HeaderIcons = styled.div`
  margin: 0;
  padding: 0;
  color: ${() => theme.colors.reactBlue};
  font-size: 18px;
  display: none;
  cursor: pointer;

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MobileNavigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  & a {
    text-decoration: none;
    &:hover {
      background-color: #adb5bd;
    }
  }
`;
