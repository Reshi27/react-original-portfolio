import styled from "styled-components";
import { theme } from "../../../style/theme/theme";
import { IStyledComponentProps } from "../../../interfaces/Interface";
export const TagContainer = styled.div<IStyledComponentProps>`
  background-color: ${(props) => props.$backgroundColor};
  width: 437px;
  height: 171px;
  border-right: 110px solid ${(props) => props.$borderColor};
  border-bottom: 171px solid transparent;
  padding-top: 1px;

  @media (max-width: 1200px) {
    background-color: ${(props) => props.$backgroundColor};
    width: 437px;
    height: 171px;
    border-right: 110px solid ${(props) => props.$borderColor};
    border-bottom: 171px solid transparent;
    padding-top: 1px;
  }

  @media (max-width: 768px) {
    background-color: ${(props) => props.$backgroundColor};
    width: 100%;
    height: 100%;
    border-right: none;
    border-bottom: none;
    padding-top: none;
  }
`;

export const TagTitle = styled.h2`
  text-align: center;
  margin-top: 3.8rem;
  margin-left: 1.5rem;
  font-size: 24px;
  color: ${(props) => props.color};

  @media (max-width: 1200px) {
    text-align: center;
    margin-top: 3.8rem;
    margin-left: 1.5rem;
    font-size: 24px;
    color: ${(props) => props.color};
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 0px;
    margin-left: 0px;
    font-size: 20px;
    color: ${(props) => props.color};
  }
`;
