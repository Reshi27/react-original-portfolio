import styled from "styled-components";

interface Props {
  bg: string;
}

export const Button = styled.button<Props>`
  background-color: #1979a9;
  color: black;
  padding: 0.6rem 1.3rem;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin: 0.5rem 0;
  border-radius: 10px;
  width: 25%;
  margin: 1rem;
  text-align: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
