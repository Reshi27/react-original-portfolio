import styled from "styled-components";

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
  top: 4rem;

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

export const LoginTitle = styled.h1`
  display: block;
  text-align: center;
  border: 1px solid red;
`;

export const Form = styled.form`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  margin: 1rem 0;

  & label {
    border: 1px solid red;
    margin-right: 2rem;
  }

  & input {
    border-radius: 10px;
    height: 1.5rem;
    background-color: transparent;
  }
`;
