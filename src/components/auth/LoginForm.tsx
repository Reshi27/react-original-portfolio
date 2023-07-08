import React, { Fragment, useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AuthTitle,
  ReactImage,
  Form,
  FormGroup,
  AuthContainer,
  AuthButton,
  AuthBackground,
} from "./AuthForm.style";
import { Card } from "../common/Card/Card";
import reactLogo from "../../assets/react.svg";

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
      <AuthBackground>
        <ReactImage src={reactLogo}></ReactImage>
        <Card>
          <AuthContainer>
            <AuthTitle>Log In</AuthTitle>
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

              <AuthButton bg={" #0F0F0F"} type="submit">
                Login
              </AuthButton>
              <Link to={"/register"} style={{ textAlign: "center" }}>
                Dont have account, register here
              </Link>
            </Form>
          </AuthContainer>
        </Card>
      </AuthBackground>
    </Fragment>
  );
};
