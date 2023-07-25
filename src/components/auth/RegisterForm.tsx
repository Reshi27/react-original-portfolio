import React, { Fragment, useState } from "react";
import {
  AuthBackground,
  AuthButton,
  AuthContainer,
  AuthTitle,
  Form,
  NameGroup,
} from "./AuthForm.style";
import { Card } from "../common/Card/Card";
import { InputBase, NativeSelect, Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import axios from "axios";

const RegisterForm: React.FC = () => {
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
    age: 0,
    dateOfBirth: null,
    email: "",
    password: "",
    confirmPassword: "",
    restoreQuestion: "",
    restoreAnswer: "",
    membershipStart: null,
    membershipEnd: null,
  });

  const handleFormChange = (value: any, name: any) => {
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateFormChange = (date: Date, name: any) => {
    if (!date) {
      setRegisterForm((prev) => ({ ...prev, [name]: null }));
    }

    setRegisterForm((prev) => ({ ...prev, [name]: new Date() }));
  };

  const handleFormSubmit = async () => {
    const newFormData = {
      firstName: registerForm.firstName,
      lastName: registerForm.lastName,
      age: registerForm.age,
      dateOfBirth: new Date(),
      email: registerForm.email,
      password: registerForm.password,
      confirmPassword: registerForm.confirmPassword,
      restoreQuestion: registerForm.restoreQuestion,
      restoreAnswer: registerForm.restoreAnswer,
      membershipStart: new Date(),
      membershipEnd: new Date(),
      transfetEvidence: "this",
    };

    const { data } = await axios.post(
      "http://localhost:8080/api/user/create",
      newFormData
    );

    return data;
  };

  console.log(registerForm);
  return (
    <Fragment>
      <AuthBackground>
        <AuthContainer>
          <Card>
            <AuthTitle>Register</AuthTitle>
            <Form>
              <NameGroup>
                <InputBase
                  mb={"md"}
                  mr={"md"}
                  label="First Name"
                  name="firstName"
                  type="text"
                  onChange={({ target }) =>
                    handleFormChange(target.value, "firstName")
                  }
                  value={registerForm.firstName}
                ></InputBase>
                <InputBase
                  mb={"md"}
                  label="Last Name"
                  name="lastName"
                  type="text"
                  onChange={({ target }) =>
                    handleFormChange(target.value, "lastName")
                  }
                  value={registerForm.lastName}
                ></InputBase>
              </NameGroup>
              <InputBase
                mb={"md"}
                label="Age"
                name="age"
                type="number"
                onChange={({ target }) => handleFormChange(target.value, "age")}
                value={registerForm.age}
              ></InputBase>
              <DateInput mb={"md"} label="Date of Birth"></DateInput>
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
                placeholder="Pick One"
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
                name="restoreAnswer"
                type="text"
                onChange={({ target }) =>
                  handleFormChange(target.value, "restoreAnswer")
                }
                value={registerForm.restoreAnswer}
              ></InputBase>

              <NameGroup>
                <DateInput
                  value={registerForm.membershipStart}
                  onChange={setRegisterForm.toString}
                  label="Membership Start"
                ></DateInput>
                <DateInput
                  value={registerForm.membershipEnd}
                  onChange={setRegisterForm.toString}
                  label="Membership End"
                ></DateInput>
              </NameGroup>

              <AuthButton bg="#0F0F0F">Register</AuthButton>
            </Form>
          </Card>
        </AuthContainer>
      </AuthBackground>
    </Fragment>
  );
};

export default RegisterForm;
