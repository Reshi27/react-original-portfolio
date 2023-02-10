import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.color};
`;

export const BrandLogo = styled.div``;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    text-decoration: none;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const HeaderIcons = styled.div`
  margin: 0;
  padding: 0;
  color: cyan;
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
