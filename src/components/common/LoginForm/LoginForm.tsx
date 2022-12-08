import React, { Fragment } from "react";
import {
  Background,
  LoginTitle,
  ReactImage,
  Form,
  FormGroup,
  LoginContainer,
} from "./LoginForm.style";
import { Card } from "../Card/Card";
import reactLogo from "../../../assets/react.svg";
import { Button } from "../Button/Button";
export const LoginForm = () => {
  return (
    <Fragment>
      <Background>
        <ReactImage src={reactLogo}></ReactImage>
        <Card color={"transparent"}>
          <LoginContainer>
            <LoginTitle>Log In</LoginTitle>
            <Form>
              <FormGroup>
                <label htmlFor="login">Email</label>
                <input type="text" name="email" />
              </FormGroup>

              <FormGroup>
                <label htmlFor="passord">Password</label>
                <input type="password" name="password" />
              </FormGroup>

              <Button>Login</Button>
            </Form>
          </LoginContainer>
        </Card>
      </Background>
    </Fragment>
  );
};
