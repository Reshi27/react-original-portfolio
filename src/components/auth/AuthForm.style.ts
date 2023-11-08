import styled from "styled-components";
import { Button } from "../common/Button/Button.style";

export const AuthBackground = styled.div`
  background-color: #0f0f0f;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: auto;
`;

export const ReactImage = styled.img`
  width: 10rem;
  height: 10rem;
  margin-bottom: 2rem;
  /* position: fixed; */

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

export const AuthContainer = styled.div`
  color: white;
  height: 100%;
`;

export const AuthTitle = styled.h1`
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
  margin-top: -1rem;
`;

export const FormGroup = styled.div`
  margin: 1rem;
  display: block;

  & input {
    border-radius: 5px;
    height: 2.2rem;
    width: 100%;
    margin-top: 1rem;
    border-style: none;
    outline: none;
    outline: 0;
    font-size: 18px;
    transition: all 0.5s ease;
  }
`;

export const AuthButton = styled(Button)`
  text-align: center;
  margin: 1rem auto;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 91%;
`;

export const NameGroup = styled.div`
  display: flex;
  align-items: center;
`;
