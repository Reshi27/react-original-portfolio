import React, { Fragment, useState } from "react";
import {
  AuthBackground,
  AuthButton,
  AuthContainer,
  AuthTitle,
  Form,
} from "./AuthForm.style";
import { Card, InputBase, NativeSelect } from "@mantine/core";

const EmployeeRegistForm: React.FC = () => {
  const selectData = [
    {
      value: "What is your cat name?",
      label: "What is your cat name?",
    },
    {
      value: "Where did you confess to your crush?",
      label: "Where did you confess to your crush?",
    },
  ];

  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    restoreQuestion: "",
    answer: "",
  });

  const handleFormChange = (value: any, name: any) => {
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Fragment>
      <AuthBackground>
        <AuthContainer>
          <Card>
            <AuthTitle>Register</AuthTitle>
            <Form>
              <InputBase
                mb={"md"}
                mr={"md"}
                label="Name"
                name="firstName"
                type="text"
                onChange={({ target }) =>
                  handleFormChange(target.value, "firstName")
                }
                value={registerForm.firstName}
              ></InputBase>

              <InputBase
                label="Email"
                name="email"
                type="email"
                mb={"md"}
                onChange={({ target }) =>
                  handleFormChange(target.value, "email")
                }
                value={registerForm.email}
              ></InputBase>
              <InputBase
                mb={"md"}
                label="Password"
                name="password"
                type="password"
                onChange={({ target }) =>
                  handleFormChange(target.value, "password")
                }
                value={registerForm.password}
              ></InputBase>
              <InputBase
                mb={"md"}
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                onChange={({ target }) =>
                  handleFormChange(target.value, "confirmPassword")
                }
                value={registerForm.confirmPassword}
              ></InputBase>
              <NativeSelect
                data={selectData}
                description="Pick One"
                label="Restore Password Question"
                name="restoreQuestion"
                mb={"md"}
                onChange={({ target }) =>
                  handleFormChange(target.value, "restoreQuestion")
                }
              ></NativeSelect>
              <InputBase
                mb={"md"}
                label="Your Answer"
                name="answer"
                type="text"
                onChange={({ target }) =>
                  handleFormChange(target.value, "answer")
                }
                value={registerForm.answer}
              ></InputBase>

              <AuthButton bg="#0F0F0F">Register</AuthButton>
            </Form>
          </Card>
        </AuthContainer>
      </AuthBackground>
    </Fragment>
  );
};

export default EmployeeRegistForm;
