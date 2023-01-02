import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #1a1b1e;
  padding: 1rem 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BrandLogo = styled.div``;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    list-style: none;
    margin-right: 1rem;
  }

  & a {
    color: white;
    text-decoration: none;
  }
`;
