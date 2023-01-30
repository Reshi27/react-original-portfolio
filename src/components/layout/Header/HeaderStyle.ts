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
`;
