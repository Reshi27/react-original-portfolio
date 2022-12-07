import styled from "styled-components";

interface Props {
  bg: string;
  width: number;
  height: number;
}

export const Card = styled.div<Props>`
  background-color: ${(props) => props.bg};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
`;
