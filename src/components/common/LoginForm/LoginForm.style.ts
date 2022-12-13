import styled from "styled-components";
import { Button } from "../Button/Button.style";

export const Background = styled.div`
  background-color: #0f0f0f;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ReactImage = styled.img`
  width: 10rem;
  height: 10rem;
  margin-bottom: 2rem;
  position: fixed;
  top: 0.1rem;

  animation: logo-spin infinite 20s linear;

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoginContainer = styled.div`
  color: white;
  width: 425px;
`;

export const LoginTitle = styled.h1`
  display: block;
  text-align: center;
  color: #042f66;
  font-size: 32px;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin: 1rem;
  display: block;
  & label {
    margin-bottom: 1rem;
  }

  & input {
    border-radius: 5px;
    height: 1.5rem;
    width: 100%;
    margin-top: 1rem;
  }
`;
