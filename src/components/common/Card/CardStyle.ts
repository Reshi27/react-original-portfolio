import styled from "styled-components";
import { IStyle } from "../../../interfaces/Interface";
interface Props {
  bg: string;
  width: string;
  height: string;
}

export const Card = styled.div<Props>`
  background: rgb(116, 130, 143);
  background: linear-gradient(
    160deg,
    rgba(116, 130, 143, 1) 60%,
    rgba(150, 192, 206, 1) 100%
  );
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
