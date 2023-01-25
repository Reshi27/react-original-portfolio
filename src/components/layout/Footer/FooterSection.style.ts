import styled from "styled-components";

export const Signature = styled.img``;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 9rem;
`;

export const FooterIcons = styled.a`
  font-size: 26px;
  margin-right: 2rem;
  transition: 0.5s ease;
  cursor: pointer;
  &:hover {
    color: cyan;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  ${FooterIcons}:nth-child(3) {
    margin-right: 0 !important;
  }
`;
