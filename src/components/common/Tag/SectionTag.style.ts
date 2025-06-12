import styled from "styled-components";
import { theme } from "../../../style/theme/theme";
import { IStyledComponentProps } from "../../../interfaces/Interface";
export const TagContainer = styled.div<IStyledComponentProps>`
  background-color: ${(props) => props.$backgroundColor};
  width: 437px;
  height: 171px;
  border-right: 110px solid ${(props) => props.$borderColor};
  border-top: 171px solid transparent;
  padding-top: 1px;
`;

export const TagTitle = styled.h2`
  text-align: center;
  margin-top: 3.8rem;
  margin-left: 1.5rem;
  font-size: 24px;
  color: ${(props) => props.color};
`;
