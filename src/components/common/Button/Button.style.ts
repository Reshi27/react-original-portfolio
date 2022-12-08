import styled from "styled-components";

interface Props {
  bg: string
}


export const Button = styled.button<Props>`
  background-color: ${(props) => props.bg};
  color: white;
`;
