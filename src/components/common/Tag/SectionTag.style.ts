import styled from "styled-components";
import { theme } from "../../../style/theme/theme";
export const TagContainer = styled.div`
  background-color: ${(props) => theme.colors.reactBlue};
  width: 437px;
  height: 171px;
  border-right: 110px solid ${(props) => props.color};
  border-bottom: 171px solid transparent;
  padding-top: 1px;
`;

export const TagTitle = styled.h2`
  text-align: center;
  margin-top: 3.8rem;
  margin-left: 1.5rem;
`;
