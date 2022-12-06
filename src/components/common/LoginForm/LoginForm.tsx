import React, { Fragment } from "react";
import { Background, LoginTitle, ReactImage } from "./LoginStyle";
import { Card } from "../Card/Card";
import reactLogo from "../../../assets/react.svg";
export const LoginForm = () => {
  return (
    <Fragment>
      <Background>
        <ReactImage src={reactLogo}></ReactImage>
        <Card warna={"salmon"}>
          <LoginTitle>
            <h1>Login</h1>
          </LoginTitle>
        </Card>
      </Background>
    </Fragment>
  );
};
