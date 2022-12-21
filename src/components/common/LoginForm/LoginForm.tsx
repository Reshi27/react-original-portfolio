import React, { Fragment, useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authentication, authSlice } from "../../../store/slice/authSlice";
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
import { RootState } from "../../../store/store";

export const LoginForm = () => {
  const authName = useSelector((state: RootState) => state.auth.name);
  const authPassword = useSelector((state: RootState) => state.auth.password);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const authLogin = (event: any) => {
    event.preventDefault();
    dispatch(authentication(name));
  };

  return (
    <Fragment>
      <Background>
        <ReactImage src={reactLogo}></ReactImage>
        <Card>
          <LoginContainer>
            <LoginTitle>Log In</LoginTitle>
            <Form onSubmit={authLogin}>
              <FormGroup>
                <label htmlFor="login">Email</label>
                <input
                  type="text"
                  name="email"
                  onChange={handleName}
                  value={name}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handlePassword}
                  value={password}
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
