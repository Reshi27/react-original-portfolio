import React, { Fragment, useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Background,
  LoginTitle,
  ReactImage,
  Form,
  FormGroup,
  LoginContainer,
  LoginButton,
} from "./LoginForm.style";
import { Card } from "../Card/Card";
import reactLogo from "../../../assets/react.svg";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();

  const emailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const loginHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPuyFUJTmPEdag71Rr0jmZECrKDVxgj-o",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        navigate("/portfolio");
      }
    });
  };

  return (
    <Fragment>
      <Background>
        <ReactImage src={reactLogo}></ReactImage>
        <Card>
          <LoginContainer>
            <LoginTitle>Log In</LoginTitle>
            <Form onSubmit={loginHandler}>
              <FormGroup>
                <label htmlFor="login">Email</label>
                <input
                  type="email"
                  name="email"
                  style={{ background: "white", color: "black" }}
                  onChange={emailHandler}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  style={{ background: "white", color: "black" }}
                  required
                  onChange={passwordHandler}
                />
              </FormGroup>

              <LoginButton bg={" #0F0F0F"} type="submit">
                Login
              </LoginButton>
            </Form>
          </LoginContainer>
        </Card>
      </Background>
    </Fragment>
  );
};
