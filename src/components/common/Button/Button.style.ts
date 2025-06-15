import styled from "styled-components";

interface Props {
  bg: string;
}

export const Button = styled.button<Props>`
  background-color: ${(props) => props.bg};
  color: black;
  padding: 0.6rem 1.3rem;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin: 0.5rem 0;
  border-radius: 10px;
  width: 25%;
  border: none;

  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translate(0);
  }

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 992px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
