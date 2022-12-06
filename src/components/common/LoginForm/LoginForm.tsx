import React, { Fragment } from "react";
import {
  Background,
  LoginTitle,
  ReactImage,
  Form,
  FormGroup,
} from "./LoginStyle";
import { Card } from "../Card/Card";
import reactLogo from "../../../assets/react.svg";
export const LoginForm = () => {
  return (
    <Fragment>
      <Background>
        <ReactImage src={reactLogo}></ReactImage>
        <Card color={"cyan"}>
          <LoginTitle>Login</LoginTitle>
          <Form>
            <FormGroup>
              <label htmlFor="login">Email</label>
              <input type="text" name="email" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="passord">Password</label>
              <input type="password" name="password" />
            </FormGroup>
          </Form>
        </Card>
      </Background>
    </Fragment>
  );
};
